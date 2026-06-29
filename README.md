# AkzelchCC

Personal Claude Code configuration — version-controlled dotfiles for `~/.claude/`.

## Tools

| Tool | Config location |
|------|----------------|
| Claude Code | `~/.claude/` |
| GitHub Copilot CLI | `~/.copilot/` |
| VS Code Copilot (user level) | `~/.claude/*` + VS Code `settings.json` |

### GitHub Copilot mapping

GitHub Copilot natively reads the same Claude-format paths this repo already
links, so most of the config is shared rather than duplicated.

| What | Copilot CLI | VS Code Copilot reads |
|------|-------------|-----------------------|
| Always-on instructions | `~/.copilot/copilot-instructions.md` | `~/.claude/CLAUDE.md` (needs `chat.useClaudeMdFile`) |
| File-based rules | `~/.copilot/copilot-instructions.md` | `~/.claude/rules` |
| Skills | `~/.copilot/skills/` | `~/.claude/skills/`, `~/.copilot/skills/` |
| Agents | `~/.copilot/agents/` | `~/.copilot/agents/` |

The installer enables `chat.useClaudeMdFile` and registers the instruction
locations in your VS Code user `settings.json` (backed up first). Restart VS
Code after install for it to pick up the new customizations.

## Structure

```
├── CLAUDE.md              # Claude Code: global instructions
├── settings.json          # Claude Code: model + plugin config
├── mcp.json               # Claude Code: MCP server definitions (registered to ~/.claude.json on install)
├── MEMORY.md              # Claude Code: memory index (auto-loaded)
├── memory/                # Claude Code: memory files
├── rules/
│   ├── common/            # Language-agnostic rules (mirrors ECC common/)
│   ├── personal/          # Personal preferences
│   └── <lang>/            # Language/framework-specific rules (e.g. typescript/, web/)
├── agents/                # Claude Code: custom subagent definitions
├── skills/
│   └── graphify/          # Claude Code: /graphify knowledge graph skill
├── commands/              # Claude Code: custom slash commands
├── hooks/                 # Claude Code: event hook scripts
└── copilot/
    ├── copilot-instructions.md  # Copilot CLI: user-level instructions
    └── config.json              # Copilot CLI: CLI settings
```

## VS Code Extension Dependencies

Some skills require a VS Code extension to consume their output:

| Skill | Extension required | Extension ID |
|-------|--------------------|--------------|
| `code-tour` | CodeTour | `vsls-contrib.codetour` |

Skills without an entry here produce plain-text or JSON artifacts that work without additional tooling.

## Install

Requires **Node.js** on your `PATH` (used by the cross-platform installer). All
the install logic lives in `install.mjs`; the shell scripts are thin wrappers.

**macOS / Linux / WSL**

```bash
git clone <repo-url> ~/Documents/CC-repos/AkzelchCC
cd ~/Documents/CC-repos/AkzelchCC
./install.sh        # or: node install.mjs
```

**Windows (PowerShell)**

```powershell
git clone <repo-url> $HOME\Documents\CC-repos\AkzelchCC
cd $HOME\Documents\CC-repos\AkzelchCC
.\install.ps1       # or: node install.mjs
```

The installer links this repo into `~/.claude/` and `~/.copilot/`, then patches
the VS Code user `settings.json` (enabling `chat.useClaudeMdFile` and the
instruction locations). Existing files are backed up with a timestamp suffix
before being replaced. Re-running is safe — correct links are skipped.

**Linking strategy (no admin required):**

- **Directories** (`agents`, `skills`, `rules/*`, `memory`, `commands`, `hooks`)
  are linked with **junctions** on Windows / symlinks on POSIX. These need no
  special privilege and stay live — edits and `git pull` apply instantly.
- **Files** (`CLAUDE.md`, `settings.json`, `MEMORY.md`, the two `copilot/`
  files) are symlinked, falling back to a **copy** when symlink privilege is
  missing on Windows. If copied, re-run the installer after editing those files.

> To get live symlinks for the handful of files on Windows too, enable
> **Developer Mode** (Settings > For developers) and re-run.

## Adding Rules

Drop `.md` files into any subdirectory under `rules/`. Each subdirectory is symlinked individually to `~/.claude/rules/<name>` on install, so Claude Code auto-loads them at session start.

Structure mirrors the [ECC rules](https://github.com/nicholasgasior/ecc) pattern — `rules/common/` for language-agnostic principles, plus per-language directories (e.g. `rules/typescript/`, `rules/web/`). Adding a new language is as simple as creating the directory; the install script picks it up automatically.

## Adding Agents

Create `agents/<name>.md` following the Claude Code agent definition format. Reference it with `subagent_type: "<name>"` in the Agent tool.

## Adding Skills

Create `skills/<name>/SKILL.md`. Invoke via the Skill tool with `skill: "<name>"` or register a trigger in `CLAUDE.md`.

License notices:
repo contains files from Matt pococks Skills repo, Superpowers and ECC which are all MIT Licensed. All files copied from their repositories is their original work and I highly recommend checking them out! shout out to the creators for making awesome skills.