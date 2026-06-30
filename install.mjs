#!/usr/bin/env node
// install.mjs — cross-platform installer for the AkzelchCC instruction layer.
//
// Installs only what agent plugins can't carry: the always-on instructions
// (CLAUDE.md), file-based rules, memory, and model config. Skills, subagents,
// and MCP servers ship via the AkzelchCC plugin — install those natively with
// `claude plugin install` / `copilot plugin install` or VS Code's plugin UI.
//
// This script links the instruction layer into Claude Code (~/.claude) and
// GitHub Copilot CLI (~/.copilot), then patches the VS Code user settings.json
// so VS Code Copilot reads the Claude-format files. Zero dependencies.
//
// Strategy:
//   - directories  -> junction (Windows) / symlink (POSIX), no admin required
//   - files        -> symlink, falling back to a copy when privilege is missing
//
// Re-running is safe: correct existing links are skipped, and real files are
// backed up with a timestamp suffix before being replaced.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const REPO_DIR = path.dirname(fileURLToPath(import.meta.url));
const HOME = os.homedir();
const IS_WIN = process.platform === 'win32';
const TIMESTAMP = new Date()
  .toISOString()
  .replace(/[-:T]/g, '')
  .slice(0, 15)
  .replace(/(\d{8})(\d{6})/, '$1_$2');

const c = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
};
const ok = (m) => console.log(c.green(`  OK  ${m}`));
const lnk = (m) => console.log(c.green(`  LNK ${m}`));
const cpy = (m) => console.log(c.green(`  CPY ${m}`));
const bak = (m) => console.log(c.yellow(`  BAK ${m}`));
const warn = (m) => console.log(c.yellow(`  ${m}`));

// Resolve an existing symlink/junction target to an absolute, normalized path.
function linkTarget(p) {
  try {
    return path.resolve(path.dirname(p), fs.readlinkSync(p));
  } catch {
    return null;
  }
}

// link(srcRel, dst) — junction dirs, symlink-or-copy files.
function link(srcRel, dst) {
  const src = path.join(REPO_DIR, srcRel);
  if (!fs.existsSync(src)) {
    warn(`SKIP ${dst} — source missing (${srcRel})`);
    return;
  }
  const isDir = fs.statSync(src).isDirectory();

  let stat = null;
  try {
    stat = fs.lstatSync(dst);
  } catch {
    /* does not exist */
  }

  if (stat && stat.isSymbolicLink()) {
    if (linkTarget(dst) === path.resolve(src)) {
      ok(dst);
      return;
    }
    fs.rmSync(dst, { force: true });
  } else if (stat) {
    const backup = `${dst}.bak.${TIMESTAMP}`;
    bak(`${dst} -> ${backup}`);
    fs.renameSync(dst, backup);
  }

  fs.mkdirSync(path.dirname(dst), { recursive: true });

  try {
    fs.symlinkSync(src, dst, isDir ? (IS_WIN ? 'junction' : 'dir') : 'file');
    lnk(dst);
  } catch (err) {
    if (!isDir && (err.code === 'EPERM' || err.code === 'EACCES')) {
      // No symlink privilege on Windows — copy the file instead.
      fs.copyFileSync(src, dst);
      cpy(`${dst} (copied — no symlink privilege)`);
    } else {
      warn(`ERR could not link ${dst} — ${err.code || err.message}`);
    }
  }
}

// Convert a rule file's YAML `paths:` block list into the single comma-joined
// `applyTo:` string that Copilot's *.instructions.md frontmatter requires.
// Returns null when the file has no `paths:` list (always-on rules).
function rulePathsToApplyTo(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;
  const globs = [];
  let inPaths = false;
  for (const line of match[1].split(/\r?\n/)) {
    if (/^paths:\s*$/.test(line)) {
      inPaths = true;
      continue;
    }
    if (inPaths) {
      const item = line.match(/^\s*-\s*["']?(.+?)["']?\s*$/);
      if (item) {
        globs.push(item[1]);
        continue;
      }
      if (/^\S/.test(line)) inPaths = false;
    }
  }
  return globs.length ? globs.join(', ') : null;
}

// Drop a leading YAML frontmatter block, returning just the markdown body.
function stripFrontmatter(content) {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? content.slice(match[0].length) : content;
}

// Recursively list .md files under a directory, as paths relative to it.
function listRules(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return listRules(p, base);
    return e.name.endsWith('.md') ? [path.relative(base, p)] : [];
  });
}

// ── Claude Code (instruction layer) ──────────────────────────────────────────
// Skills, agents, commands, hooks, and MCP servers now ship via the AkzelchCC
// plugin (see plugin.json). Only the non-plugin instruction layer is symlinked:
// CLAUDE.md, model config, and memory.
const CLAUDE_DIR = path.join(HOME, '.claude');
console.log(`\nClaude Code -> ${CLAUDE_DIR}`);
fs.mkdirSync(path.join(CLAUDE_DIR, 'rules'), { recursive: true });

link('CLAUDE.md', path.join(CLAUDE_DIR, 'CLAUDE.md'));
link('settings.json', path.join(CLAUDE_DIR, 'settings.json'));
link('MEMORY.md', path.join(CLAUDE_DIR, 'MEMORY.md'));
link('memory', path.join(CLAUDE_DIR, 'memory'));

// ── Rules ────────────────────────────────────────────────────────────────────
console.log(`\nRules -> ${path.join(CLAUDE_DIR, 'rules')}`);
const rulesSrc = path.join(REPO_DIR, 'rules');
for (const entry of fs.readdirSync(rulesSrc, { withFileTypes: true })) {
  if (entry.isDirectory()) {
    link(path.join('rules', entry.name), path.join(CLAUDE_DIR, 'rules', entry.name));
  }
}

// ── GitHub Copilot CLI (instruction layer) ───────────────────────────────────
// Skills and agents now ship via the AkzelchCC plugin (installed below). The
// user-level instruction layer is symlinked here, and the file-based rules are
// transformed into Copilot's *.instructions.md format (see below).
const COPILOT_DIR = path.join(HOME, '.copilot');
console.log(`\nGitHub Copilot CLI -> ${COPILOT_DIR}`);
fs.mkdirSync(COPILOT_DIR, { recursive: true });

link(path.join('copilot', 'copilot-instructions.md'), path.join(COPILOT_DIR, 'copilot-instructions.md'));
link(path.join('copilot', 'config.json'), path.join(COPILOT_DIR, 'config.json'));

// ── Copilot path-specific instructions (generated) ───────────────────────────
// Copilot reads NAME.instructions.md files with `applyTo:` (comma-joined globs)
// frontmatter, whereas the rules use `paths:` (a YAML list). Symlinking can't
// bridge that, so each rule is transformed into an instructions file written
// into an isolated, wiped-each-run dir that VS Code settings already point at.
const INSTRUCTIONS_DIR = path.join(COPILOT_DIR, 'instructions', 'akzelchcc');
console.log(`\nCopilot instructions -> ${INSTRUCTIONS_DIR}`);
fs.rmSync(INSTRUCTIONS_DIR, { recursive: true, force: true });
fs.mkdirSync(INSTRUCTIONS_DIR, { recursive: true });

for (const rel of listRules(rulesSrc)) {
  const content = fs.readFileSync(path.join(rulesSrc, rel), 'utf8');
  const applyTo = rulePathsToApplyTo(content) ?? '**';
  const name = rel.replace(/\.md$/, '').replace(/[\\/]/g, '-');
  const out = path.join(INSTRUCTIONS_DIR, `${name}.instructions.md`);
  fs.writeFileSync(out, `---\napplyTo: "${applyTo}"\n---\n${stripFrontmatter(content)}`);
}
console.log(c.green(`  GEN ${INSTRUCTIONS_DIR} (${listRules(rulesSrc).length} instruction files)`));

// ── VS Code (GitHub Copilot) ─────────────────────────────────────────────────
// VS Code Copilot reads the Claude-format instruction layer (~/.claude/CLAUDE.md,
// ~/.claude/rules) once these settings are enabled, and loads the AkzelchCC
// plugin (skills, agents, MCP) from this repo via chat.pluginLocations.
console.log('\nVS Code (GitHub Copilot)');
const vscodeUser =
  process.platform === 'darwin'
    ? path.join(HOME, 'Library', 'Application Support', 'Code', 'User')
    : IS_WIN
      ? path.join(process.env.APPDATA ?? path.join(HOME, 'AppData', 'Roaming'), 'Code', 'User')
      : path.join(HOME, '.config', 'Code', 'User');

if (!fs.existsSync(vscodeUser)) {
  warn('SKIP VS Code settings — user folder not found');
} else {
  const settingsPath = path.join(vscodeUser, 'settings.json');
  let obj = {};
  let readable = true;
  if (fs.existsSync(settingsPath)) {
    const raw = fs.readFileSync(settingsPath, 'utf8');
    try {
      obj = raw.trim() ? JSON.parse(raw) : {};
    } catch {
      readable = false;
    }
  }
  if (!readable) {
    warn('SKIP VS Code settings — settings.json has comments/trailing commas; edit manually');
    warn('     add: "chat.useClaudeMdFile": true');
  } else {
    if (fs.existsSync(settingsPath)) {
      fs.copyFileSync(settingsPath, `${settingsPath}.bak.${TIMESTAMP}`);
    }
    obj['chat.useClaudeMdFile'] = true;
    obj['chat.useAgentsMdFile'] = true;
    obj['chat.instructionsFilesLocations'] = {
      ...(obj['chat.instructionsFilesLocations'] ?? {}),
      '~/.claude/rules': true,
      '~/.copilot/instructions': true,
    };
    fs.writeFileSync(settingsPath, JSON.stringify(obj, null, 2) + '\n');
    console.log(c.green(`  SET ${settingsPath} (chat.useClaudeMdFile, instruction locations)`));
  }
}

console.log(`\n${c.green('Done.')}\n`);
