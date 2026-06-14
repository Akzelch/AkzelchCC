# Claude Code — Personal Configuration

## Skills

- **graphify** (`skills/graphify/SKILL.md`) — turns any input into a knowledge graph.
  When the user types `/graphify`, invoke the Skill tool with `skill: "graphify"` before doing anything else.

## Memory System

- `MEMORY.md` is the index — always loaded. Each entry points to a file in `memory/`.
- Read linked memory files before starting work when they seem relevant.
- Save new memories immediately when: a user preference is stated, feedback is given, a project decision is made.
- Memory types: **user** (who they are), **feedback** (how to work), **project** (ongoing context), **reference** (where things live).
- Do not save ephemeral task state, code patterns already in the codebase, or git history.

## Response Style

- Terse. No trailing summaries after tool calls — the diff is visible.
- No emoji unless explicitly requested.
- One sentence per status update while working.
- Complete sentences, no unexplained shorthand.
- When referencing code, include `file_path:line_number`.

## Code Style

- No comments unless the WHY is non-obvious.
- No multi-line docstrings.
- Immutable patterns — create new objects, never mutate in place.
- No error handling for scenarios that cannot happen.
- No features beyond what the task requires.

## Rules

Language- and framework-specific rules live in `rules/`. Claude Code auto-loads any `.md` files found there.

## Agents

Custom subagent definitions live in `agents/`. Use the Agent tool with `subagent_type` matching the agent filename slug.
