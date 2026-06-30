# Skill Appendix

A self-contained, static HTML reference for every skill in this repository.

## Page

- **`index.html`** — the full catalog. All 93 skills grouped by category, with
  full-text search, category filters, "Invocable only" / "User-only" toggles, and an
  expandable explainer for each skill (click a card to open it). Category chip counts
  update live as you filter. Each skill shows its invocation tier: **User-only** (never
  auto-applied), **Invocable** (user or agent), or **Automatic** (agent applies it as a
  pattern/reference). Skills tagged **User only** carry `disable-model-invocation: true`
  in their frontmatter — the agent can never trigger them.
- The same page ends with an **MCP servers** section: the Model Context Protocol servers
  wired into the repo, each with its transport, source file, command, and whether it
  needs credentials.

## Usage

Open `index.html` in any browser. No build step, no server, no dependencies —
everything runs from the filesystem. Keyboard: press `/` to jump to the search box.

## Files

| File | Purpose |
| --- | --- |
| `index.html` / `app.js` | Catalog + MCP page and its logic |
| `styles.css` | Shared matte theme (light + dark, auto-detected, toggle in the top bar) |
| `skills-data.js` | Generated data — one entry per skill |
| `mcp-data.js` | Hand-maintained data — one entry per MCP server |

## Regenerating the data

`skills-data.js` is derived from the `name` and `description` frontmatter of each
`skills/*/SKILL.md`. Re-run the generator after adding or editing skills:

```powershell
python tools\build-docs-data.py
```

The `category`, `invocable`, and `command` fields are curated in that script.
The `userOnly` field is read straight from each skill's `disable-model-invocation:
true` frontmatter, and any user-only skill is always treated as invocable.

`mcp-data.js` mirrors `.mcp.json` and `credential_mcps.json`; edit it by hand when
servers are added or changed.
