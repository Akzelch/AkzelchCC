#!/usr/bin/env node
// install.mjs — cross-platform installer for AkzelchCC.
//
// Links this repo into Claude Code (~/.claude), GitHub Copilot CLI (~/.copilot),
// and patches the VS Code user settings.json so VS Code Copilot reads the
// Claude-format files. Zero dependencies — uses only Node built-ins.
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
import { execFileSync } from 'node:child_process';
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

// ── Claude Code ──────────────────────────────────────────────────────────────
const CLAUDE_DIR = path.join(HOME, '.claude');
console.log(`\nClaude Code -> ${CLAUDE_DIR}`);
fs.mkdirSync(path.join(CLAUDE_DIR, 'rules'), { recursive: true });

link('CLAUDE.md', path.join(CLAUDE_DIR, 'CLAUDE.md'));
link('settings.json', path.join(CLAUDE_DIR, 'settings.json'));
link('MEMORY.md', path.join(CLAUDE_DIR, 'MEMORY.md'));
link('memory', path.join(CLAUDE_DIR, 'memory'));
link('agents', path.join(CLAUDE_DIR, 'agents'));
link('skills', path.join(CLAUDE_DIR, 'skills'));
link('commands', path.join(CLAUDE_DIR, 'commands'));
link('hooks', path.join(CLAUDE_DIR, 'hooks'));

// ── MCP Servers ──────────────────────────────────────────────────────────────
console.log('\nMCP Servers -> ~/.claude.json (user scope)');
const mcpFile = path.join(REPO_DIR, 'mcp.json');
let servers = {};
try {
  servers = JSON.parse(fs.readFileSync(mcpFile, 'utf8')).mcpServers ?? {};
} catch {
  /* no/invalid mcp.json */
}
const serverNames = Object.keys(servers);
if (serverNames.length === 0) {
  warn('SKIP MCP — mcp.json is empty');
} else if (!hasCommand('claude')) {
  warn('SKIP MCP — claude CLI not in PATH');
} else {
  for (const name of serverNames) {
    const config = JSON.stringify(servers[name]);
    try {
      execFileSync('claude', ['mcp', 'remove', name, '--scope', 'user'], { stdio: 'ignore' });
    } catch {
      /* not previously registered */
    }
    try {
      execFileSync('claude', ['mcp', 'add-json', name, config, '--scope', 'user'], { stdio: 'ignore' });
      console.log(c.green(`  MCP ${name}`));
    } catch {
      warn(`MCP ${name} (failed)`);
    }
  }
}

// ── Rules ────────────────────────────────────────────────────────────────────
console.log(`\nRules -> ${path.join(CLAUDE_DIR, 'rules')}`);
const rulesSrc = path.join(REPO_DIR, 'rules');
for (const entry of fs.readdirSync(rulesSrc, { withFileTypes: true })) {
  if (entry.isDirectory()) {
    link(path.join('rules', entry.name), path.join(CLAUDE_DIR, 'rules', entry.name));
  }
}

// ── GitHub Copilot CLI ───────────────────────────────────────────────────────
// ~/.copilot is read by the Copilot CLI (Claude Agent SDK) AND by VS Code Copilot
// for user-level skills/agents, so these links serve both surfaces.
const COPILOT_DIR = path.join(HOME, '.copilot');
console.log(`\nGitHub Copilot CLI -> ${COPILOT_DIR}`);
fs.mkdirSync(COPILOT_DIR, { recursive: true });

link(path.join('copilot', 'copilot-instructions.md'), path.join(COPILOT_DIR, 'copilot-instructions.md'));
link(path.join('copilot', 'config.json'), path.join(COPILOT_DIR, 'config.json'));
link('skills', path.join(COPILOT_DIR, 'skills'));
link('agents', path.join(COPILOT_DIR, 'agents'));

// ── VS Code (GitHub Copilot) ─────────────────────────────────────────────────
// VS Code Copilot natively reads the Claude-format paths linked above
// (~/.claude/CLAUDE.md, ~/.claude/rules, ~/.claude/skills) once these settings
// are enabled. Patch the user settings.json to turn them on.
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

// ── Claude Code Plugins ─────────────────────────────────────────────────────
console.log('\nClaude Code Plugins');
if (!hasCommand('claude')) {
  warn('SKIP plugins — claude CLI not in PATH');
} else {
  const plugins = ['pyright@claude-code-lsps'];
  for (const plugin of plugins) {
    try {
      execFileSync('claude', ['plugin', 'install', plugin], { stdio: 'pipe' });
      console.log(c.green(`  PLG ${plugin}`));
    } catch {
      warn(`PLG ${plugin} (failed or already installed)`);
    }
  }
}

console.log(`\n${c.green('Done.')}\n`);

function hasCommand(cmd) {
  const probe = IS_WIN ? 'where' : 'which';
  try {
    execFileSync(probe, [cmd], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}
