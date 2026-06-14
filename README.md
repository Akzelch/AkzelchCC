# AkzelchCC

Personal Claude Code configuration — version-controlled dotfiles for `~/.claude/`.

## Structure

```
├── CLAUDE.md              # Global instructions loaded every session
├── settings.json          # Model + plugin config
├── MEMORY.md              # Memory index (auto-loaded)
├── memory/                # Memory files (user, feedback, project, reference)
├── rules/
│   ├── common/            # Language-agnostic rules
│   ├── web/               # Web/frontend rules
│   └── personal/          # Personal preferences
├── agents/                # Custom subagent definitions
├── skills/
│   └── graphify/          # /graphify knowledge graph skill
├── commands/              # Custom slash commands
└── hooks/                 # Event-triggered scripts
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

Drop a `.md` file anywhere under `rules/`. Claude Code auto-loads all markdown files in the rules tree at session start.

## Adding Agents

Create `agents/<name>.md` following the Claude Code agent definition format. Reference it with `subagent_type: "<name>"` in the Agent tool.

## Adding Skills

Create `skills/<name>/SKILL.md`. Invoke via the Skill tool with `skill: "<name>"` or register a trigger in `CLAUDE.md`.
