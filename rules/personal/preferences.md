# Personal Preferences

## Response Behavior

- Do not summarize what you just did at the end of responses — the user can read the diff.
- Do not use emoji unless explicitly asked.
- Keep updates to one sentence while working.
- Ask questions only when genuinely blocked on a decision only the user can make.

## Code

- No comments unless the WHY is non-obvious (hidden constraint, subtle invariant, specific bug workaround).
- No multi-line docstring blocks.
- Immutability: return new values, never mutate existing objects.
- No speculative abstractions — three similar lines beats a premature helper.
- No backwards-compat hacks when unused code can just be deleted.

## Commits

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`, `perf:`, `ci:`.
- No co-authored-by attribution in commit messages.
