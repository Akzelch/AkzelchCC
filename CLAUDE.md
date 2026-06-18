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

When both `Grep` and `mgrep` are available, prefer `mgrep`.


# Codebase Design

Design **deep modules**: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface. Use this language and these principles wherever code is being designed or restructured. The aim is leverage for callers, locality for maintainers, and testability for everyone.

Full reference, diagrams, and testability patterns: `skills/codebase-design/SKILL.md`.

## Glossary

Use these terms exactly — don't substitute "component," "service," "API," or "boundary." Consistent language is the whole point.

**Module** — anything with an interface and an implementation. Deliberately scale-agnostic: a function, class, package, or tier-spanning slice. _Avoid_: unit, component, service.

**Interface** — everything a caller must know to use the module correctly: the type signature, but also invariants, ordering constraints, error modes, required configuration, and performance characteristics. _Avoid_: API, signature (too narrow — they refer only to the type-level surface).

**Implementation** — what's inside a module, its body of code. Distinct from **Adapter**: a thing can be a small adapter with a large implementation (a Postgres repo) or a large adapter with a small implementation (an in-memory fake). Reach for "adapter" when the seam is the topic; "implementation" otherwise.

**Depth** — leverage at the interface: the amount of behaviour a caller (or test) can exercise per unit of interface they have to learn. A module is **deep** when a large amount of behaviour sits behind a small interface, **shallow** when the interface is nearly as complex as the implementation.

**Seam** _(Michael Feathers)_ — a place where you can alter behaviour without editing in that place; the *location* at which a module's interface lives. Where to put the seam is its own design decision, distinct from what goes behind it. _Avoid_: boundary (overloaded with DDD's bounded context).

**Adapter** — a concrete thing that satisfies an interface at a seam. Describes *role* (what slot it fills), not substance (what's inside).

**Leverage** — what callers get from depth: more capability per unit of interface they learn. One implementation pays back across N call sites and M tests.

**Locality** — what maintainers get from depth: change, bugs, knowledge, and verification concentrate in one place rather than spreading across callers. Fix once, fixed everywhere.

## principles
- **The deletion test.** Imagine deleting the module. If complexity vanishes, it was a pass-through. If complexity reappears across N callers, it was earning its keep.
- **One adapter means a hypothetical seam. Two adapters means a real one.** Don't introduce a seam unless something actually varies across it.