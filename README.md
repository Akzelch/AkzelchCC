# AkzelchCC

Personal agent customizations packaged as a **cross-tool agent plugin**.
The repo installs as a single [VS Code agent plugin](https://code.visualstudio.com/docs/agent-customization/agent-plugins)
that works identically in **Claude Code**, **GitHub Copilot CLI**, and **VS Code
Copilot** — the same `plugin.json` manifest is read by all three.

## What ships where

The plugin carries everything the [plugin format](https://code.visualstudio.com/docs/agent-customization/agent-plugins)
supports; the rest (instructions, rules, memory, model config) can't live in a
plugin and is still symlinked into `~/.claude/`.

| Layer | Delivery | Surfaces |
|-------|----------|----------|
| Skills (`skills/*/SKILL.md`) | **plugin** (`plugin.json`) | Claude Code, Copilot CLI, VS Code Copilot |
| Subagents (`agents/*.agent.md`) | **plugin** (`plugin.json`) | Claude Code, Copilot CLI, VS Code Copilot |
| MCP servers (`mcp.json`) | **plugin** (`plugin.json`) | Claude Code, Copilot CLI, VS Code Copilot |
| Always-on instructions (`CLAUDE.md`) | symlink + `chat.useClaudeMdFile` | Claude Code, VS Code Copilot |
| File-based rules (`rules/`) | symlink + `chat.instructionsFilesLocations` | Claude Code, VS Code Copilot |
| Memory + model config | symlink (`~/.claude/`) | Claude Code |
| Copilot CLI instructions | symlink (`~/.copilot/`) | Copilot CLI |

VS Code auto-detects the plugin format by finding `plugin.json` at the repo
root; Claude Code reads the identical `.claude-plugin/plugin.json`. The
marketplace manifest lives at `.claude-plugin/marketplace.json` (discovered by
all three tools).

## Structure

```
├── plugin.json            # Plugin manifest (Copilot CLI + VS Code Copilot)
├── .claude-plugin/
│   ├── plugin.json        # Plugin manifest (Claude Code) — identical content
│   └── marketplace.json   # Marketplace manifest (all three tools)
├── agents/                # Plugin: subagents (*.agent.md)
├── skills/                # Plugin: skills (*/SKILL.md)
├── .mcp.json             # Plugin: MCP server definitions (auto-discovered)
├── CLAUDE.md              # Instruction layer: global instructions
├── settings.json          # Claude Code: model config
├── MEMORY.md              # Claude Code: memory index (auto-loaded)
├── memory/                # Claude Code: memory files
├── rules/
│   ├── common/            # Language-agnostic rules (mirrors ECC common/)
│   ├── personal/          # Personal preferences
│   └── <lang>/            # Language/framework-specific rules (e.g. typescript/, web/)
├── commands/              # Plugin: custom slash commands
├── hooks/                 # Plugin: event hooks
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

There are two layers: the **plugin** (skills, agents, MCP servers) and the
**instruction layer** (CLAUDE.md, rules, memory). The `install.mjs` script wires
up both. You can also install just the plugin manually.

### Full install (plugin + instruction layer)

Requires **Node.js** on your `PATH`. All the install logic lives in
`install.mjs`; the shell scripts are thin wrappers.

**macOS / Linux / WSL**

```bash
git clone https://github.com/Akzelch/AkzelchCC ~/Documents/CC-repos/AkzelchCC
cd ~/Documents/CC-repos/AkzelchCC
./install.sh        # or: node install.mjs
```

**Windows (PowerShell)**

```powershell
git clone https://github.com/Akzelch/AkzelchCC $HOME\Documents\CC-repos\AkzelchCC
cd $HOME\Documents\CC-repos\AkzelchCC
.\install.ps1       # or: node install.mjs
```

The installer:

1. Symlinks the instruction layer into `~/.claude/` and `~/.copilot/`.
2. Registers this repo as a local marketplace and installs the `akzelchcc`
   plugin for any of `claude` / `copilot` CLIs found on `PATH`.
3. Patches the VS Code user `settings.json` — enables `chat.useClaudeMdFile`,
   registers the rules instruction location, and adds this repo to
   `chat.pluginLocations` so VS Code Copilot loads the plugin live.

Existing files are backed up with a timestamp suffix before being replaced.
Re-running is safe. Restart VS Code after install.

### Plugin only (manual)

Install just the plugin without the instruction-layer symlinks:

**GitHub Copilot CLI**

```bash
copilot plugin marketplace add Akzelch/AkzelchCC
copilot plugin install akzelchcc@akzelchcc
```

**Claude Code**

```bash
claude plugin marketplace add Akzelch/AkzelchCC
claude plugin install akzelchcc@akzelchcc
```

**VS Code Copilot** — add the marketplace in your user `settings.json`, then
install from the Extensions view (`@agentPlugins`):

```jsonc
"chat.plugins.marketplaces": ["Akzelch/AkzelchCC"]
```

Or, to load a local clone live, point at the repo directory:

```jsonc
"chat.pluginLocations": { "/path/to/AkzelchCC": true }
```

### Linking strategy (no admin required)

- **Directories** (`rules/*`, `memory`) are linked with **junctions** on Windows
  / symlinks on POSIX. These need no special privilege and stay live — edits and
  `git pull` apply instantly.
- **Files** (`CLAUDE.md`, `settings.json`, `MEMORY.md`, the two `copilot/`
  files) are symlinked, falling back to a **copy** when symlink privilege is
  missing on Windows. If copied, re-run the installer after editing those files.

> To get live symlinks for the handful of files on Windows too, enable
> **Developer Mode** (Settings > For developers) and re-run.

## Adding Rules

Drop `.md` files into any subdirectory under `rules/`. Each subdirectory is symlinked individually to `~/.claude/rules/<name>` on install, so Claude Code auto-loads them at session start.

Structure mirrors the [ECC rules](https://github.com/nicholasgasior/ecc) pattern — `rules/common/` for language-agnostic principles, plus per-language directories (e.g. `rules/typescript/`, `rules/web/`). Adding a new language is as simple as creating the directory; the install script picks it up automatically.

## Adding Agents

Create `agents/<name>.agent.md` following the agent definition format. The file
name (minus `.agent.md`) is the agent ID. Reference it with
`subagent_type: "<name>"` in the Agent tool. Bump the `version` in both
`plugin.json` files when you publish changes.

## Adding Skills

Create `skills/<name>/SKILL.md`. Invoke via the Skill tool with `skill: "<name>"` or register a trigger in `CLAUDE.md`.

License notices:
repo contains files from Matt pococks Skills repo, Superpowers and ECC which are all MIT Licensed. All files copied from their repositories is their original work and I highly recommend checking them out! shout out to the creators for making awesome skills.