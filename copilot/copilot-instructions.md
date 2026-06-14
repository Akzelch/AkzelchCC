# Copilot Instructions

## Response Style

Keep responses terse. Do not summarize what was just done — the diff is visible.
No emoji. One sentence per status update while working.
When referencing code, include the file path and line number.

## Code

Write no comments unless the WHY is non-obvious: a hidden constraint, a subtle invariant,
a workaround for a specific bug. Never write comments that describe what the code does.

Prefer immutable patterns — return new values, never mutate existing objects in place.

Do not add error handling for scenarios that cannot happen.
Do not add features beyond what the task requires.
Do not add speculative abstractions — three similar lines is better than a premature helper.

Functions should be small (under 50 lines). Files should be focused (under 800 lines).
No deep nesting beyond 4 levels — use early returns instead.

## Commits

Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`, `perf:`, `ci:`.
No co-authored-by attribution.

## Naming

Variables and functions: camelCase. Booleans: `is`, `has`, `should`, `can` prefix.
Types, interfaces, components: PascalCase. Constants: UPPER_SNAKE_CASE.
