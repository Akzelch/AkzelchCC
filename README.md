# AkzelchCC

Personal agent customizations packaged as a **cross-tool agent plugin**.
The repo installs as a single [VS Code agent plugin](https://code.visualstudio.com/docs/agent-customization/agent-plugins)
that works identically in **Claude Code**, **GitHub Copilot CLI**, and **VS Code
Copilot** — the same `plugin.json` manifest is read by all three.

> ## 📖 [Skill & MCP Index → `docs/index.html`](docs/index.html)
>
> The front-facing reference for everything in this repo: a searchable, filterable
> catalog of all 93 skills (with expandable explainers, invocation tiers, and
> user-only markers) plus the wired-up MCP servers. Open `docs/index.html` in any
> browser — no build step, no server. **Start here** to discover what's available
> and when to invoke it.

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
├── docs/                  # Front-facing skill & MCP index (open docs/index.html)
├── tools/                 # Build scripts (e.g. docs data generator)
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

Two independent layers:

1. **Plugin** — skills, subagents, MCP servers. Installed with the **native
   plugin installers** (no script).
2. **Instruction layer** — `CLAUDE.md`, `rules/`, `memory/`, model config.
   Plugins can't carry these, so `install.mjs` links them in.

You can install either layer on its own.

### 1. Install the plugin (native)

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

Or, to load a local clone live (no marketplace, no push needed), point at the
repo directory:

```jsonc
"chat.pluginLocations": { "/path/to/AkzelchCC": true }
```

> `marketplace add Akzelch/AkzelchCC` pulls from GitHub. Until your changes are
> pushed, pass the local repo path instead, e.g.
> `copilot plugin marketplace add /path/to/AkzelchCC`.

### 2. Install the instruction layer (optional)

Only needed if you also want the always-on instructions, rules, and memory.
Requires **Node.js** on your `PATH`; the shell scripts are thin wrappers around
`install.mjs`.

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

1. Symlinks the instruction layer (`CLAUDE.md`, `settings.json`, `MEMORY.md`,
   `memory/`, `rules/*`, the `copilot/` files) into `~/.claude/` and
   `~/.copilot/`.
2. Patches the VS Code user `settings.json` — enables `chat.useClaudeMdFile`
   and registers the rules instruction location.

It does **not** touch plugins; use the native installers above for those.
Existing files are backed up with a timestamp suffix before being replaced.
Re-running is safe. Restart VS Code after install.

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