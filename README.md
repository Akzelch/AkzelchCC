# AkzelchCC

Personal Claude Code configuration — version-controlled dotfiles for `~/.claude/`.

## Tools

| Tool | Config location |
|------|----------------|
| Claude Code | `~/.claude/` |
| GitHub Copilot CLI | `~/.copilot/` |

## Structure

```
├── CLAUDE.md              # Claude Code: global instructions
├── settings.json          # Claude Code: model + plugin config
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

## Install

```bash
git clone <repo-url> ~/Documents/CC-repos/AkzelchCC
cd ~/Documents/CC-repos/AkzelchCC
chmod +x install.sh
./install.sh
```

`install.sh` creates symlinks from `~/.claude/` into this repo. Existing files are backed up with a timestamp suffix before being replaced. Re-running is safe — existing correct symlinks are skipped.

## Adding Rules

Drop `.md` files into any subdirectory under `rules/`. Each subdirectory is symlinked individually to `~/.claude/rules/<name>` on install, so Claude Code auto-loads them at session start.

Structure mirrors the [ECC rules](https://github.com/nicholasgasior/ecc) pattern — `rules/common/` for language-agnostic principles, plus per-language directories (e.g. `rules/typescript/`, `rules/web/`). Adding a new language is as simple as creating the directory; the install script picks it up automatically.

## Adding Agents

Create `agents/<name>.md` following the Claude Code agent definition format. Reference it with `subagent_type: "<name>"` in the Agent tool.

## Adding Skills

Create `skills/<name>/SKILL.md`. Invoke via the Skill tool with `skill: "<name>"` or register a trigger in `CLAUDE.md`.

License notices:
repo contains files from Matt pococks Skills repo, Superpowers and ECC which are all MIT Licensed. All files copied from their repositories is their original work and I highly recommend checking them out! shout out to the creators for making awesome skills.