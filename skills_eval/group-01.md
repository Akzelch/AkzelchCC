# Group 01 Evaluation

## agent-architecture-audit
- Type: model-invoked
- Length: ~258 lines
- Scores: INV=4 DESC=3 HIER=3 COMP=3 DISC=2 LEAD=4 COLO=4 PRUN=3 | Avg=3.3
- Strengths:
  - Strong leading words ("wrapper regression", "memory contamination", "tool discipline failure") used consistently throughout.
  - Well-grouped content: failure patterns, audit phases, severity model, and report schema each under their own heading.
- Weaknesses:
  - Sprawl: 12-layer stack table, common failure patterns, quick diagnostic questions, anti-patterns, and report schema all inline — prime candidates for progressive disclosure.
  - "When to Activate" / "Especially critical when" / "Do not use for" duplicates the description's triggers (duplication).
- Top fix: Disclose the report schema JSON, quick diagnostic table, and anti-patterns list to a sibling file; replace with a single context pointer.

---

## agent-harness-construction
- Type: model-invoked
- Length: ~75 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=3 DISC=5 LEAD=4 COLO=4 PRUN=3 | Avg=3.75
- Strengths:
  - Compact, well-structured pure-reference skill — appropriate flat peer-set arrangement.
  - Strong pretrained leading words: "ReAct", "action space", "observation design".
- Weaknesses:
  - Description exposes only one branch ("design and optimize") — no distinct trigger arms for action-space design vs. observation design vs. recovery contract.
  - Anti-Patterns section restates rules already given in the positive form (duplication).
- Top fix: Collapse the Anti-Patterns section into the positive rules it mirrors, keeping only items not already covered.

---

## agent-self-evaluation
- Type: model-invoked
- Length: ~183 lines (SKILL.md); sibling files exist (templates, references, examples, scripts)
- Scores: INV=3 DESC=2 HIER=3 COMP=4 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.3
- Strengths:
  - Completion criteria are checkable and exhaustive: "Score each axis independently", evidence rule, and per-axis improvement notes.
  - Good leading words: "scorecard", "evidence rule", "Show the gap, don't just name it."
- Weaknesses:
  - Description lists all 5 axis names — body duplication of the table that already defines them; description should say "rates on 5 axes" and let the body provide the names.
  - Code examples in SKILL.md (good/weak evaluation blocks) should be disclosed to sibling `examples/` files that already exist but are not context-pointed to from the body.
- Top fix: Strip axis names from the description; add context pointers to existing sibling example files rather than embedding the examples inline.

---

## agentic-engineering
- Type: model-invoked
- Length: ~65 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=5 LEAD=4 COLO=4 PRUN=4 | Avg=4.0
- Strengths:
  - Excellent depth-to-size ratio: dense rules with no sprawl, no sediment.
  - "Eval-first loop" and "15-minute unit rule" are strong, checkable leading words.
- Weaknesses:
  - No legwork demand stated for the reference sections — "apply the 15-minute unit rule" is a good criterion but the session strategy and cost discipline sections carry no exhaustiveness bar.
  - "Do not waste review cycles on style-only disagreements when automated format/lint already enforce style" is a no-op for the target audience.
- Top fix: Add an explicit demand criterion under Cost Discipline ("every task tracked with all five fields before declaring it done").

---

## ai-regression-testing
- Type: model-invoked
- Length: ~382 lines
- Scores: INV=4 DESC=3 HIER=3 COMP=3 DISC=2 LEAD=4 COLO=4 PRUN=2 | Avg=3.1
- Strengths:
  - "Blind spot" is a precise, evocative leading word that anchors the core motivation throughout.
  - Pattern catalog (sandbox/production mismatch, SELECT omission, error state leakage, optimistic rollback) is well-organized and distinct.
- Weaknesses:
  - Sprawl: all four pattern sections include full TypeScript code blocks inline — this content belongs in disclosed sibling files; SKILL.md becomes a summary with pointers.
  - "Quick Reference" table at the end duplicates the pattern catalog already covered in prose (duplication).
- Top fix: Move all inline code blocks into a disclosed `patterns/` sibling directory; replace with one context pointer per pattern.

---

## align-vocabulary
- Type: user-invoked
- Length: ~52 lines
- Scores: INV=5 DESC=4 HIER=4 COMP=5 DISC=5 LEAD=4 COLO=5 PRUN=4 | Avg=4.5
- Strengths:
  - Completion criteria are exemplary: "every drifting term has been substituted or explicitly retained with a reason, and no sentence reads like a word was simply swapped in" — checkable and exhaustive.
  - Perfect invocation choice: user-invoked with human-facing description; zero context load.
- Weaknesses:
  - Intro paragraph ("Align a target file to the canonical vocabulary...") restates the description almost verbatim (sediment / no-op).
  - "Do not change meaning, purpose, or tone" is a no-op — the model won't change meaning without being told to.
- Top fix: Delete the introductory paragraph before the substitutions table; the table and steps stand alone.

---

## article-writing
- Type: model-invoked
- Length: ~80 lines
- Scores: INV=3 DESC=2 HIER=3 COMP=4 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.3
- Strengths:
  - Quality Gate is a clean, checkable completion criterion with five testable items.
  - "Banned Patterns" list is concrete and prevents predictable AI prose failures.
- Weaknesses:
  - Description enumerates synonyms ("articles, guides, blog posts, tutorials, newsletter issues") — these are one branch restated six ways (duplication); "long-form content" covers them all.
  - "When to Activate" section in the body duplicates the description triggers exactly.
- Top fix: Collapse description to "Write long-form content in a specific voice derived from examples or brand guidance"; remove the "When to Activate" section entirely.

---

## aside
- Type: model-invoked (no `disable-model-invocation`)
- Length: ~165 lines
- Scores: INV=2 DESC=4 HIER=4 COMP=3 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.4
- Strengths:
  - Three-step structure is clean and well-ordered: Freeze → Answer → Resume.
  - Leading word "freeze" effectively anchors the no-modification constraint.
- Weaknesses:
  - Invocation mismatch: the skill is always user-typed (`/aside <question>`); the model should never fire it autonomously. Setting `disable-model-invocation: true` would remove unnecessary context load.
  - Nine edge cases inline create template duplication — most share the same `ASIDE: / answer / — Back to task:` frame; only the diverging logic needs to be stated, not the full template each time.
- Top fix: Add `disable-model-invocation: true`; collapse the edge-case response templates to state only the diverging logic, with the shared frame stated once.

---

## backend-patterns
- Type: model-invoked
- Length: ~562 lines
- Scores: INV=4 DESC=4 HIER=2 COMP=2 DISC=1 LEAD=4 COLO=4 PRUN=2 | Avg=2.9
- Strengths:
  - Good pretrained leading words: "repository pattern", "N+1", "cache-aside", "rate limiting" — each anchors a well-understood behaviour.
  - Sections are well co-located: each pattern has its concept, code example, and notes in one place.
- Weaknesses:
  - Severe sprawl: 562 lines of inline TypeScript code blocks — every pattern's implementation should be disclosed to sibling files, leaving only the rule and a context pointer in SKILL.md.
  - Closing sentence ("Backend patterns enable scalable, maintainable server-side applications. Choose patterns that fit your complexity level.") is a no-op.
- Top fix: Extract all code blocks to a `patterns/` sibling directory with one file per pattern; replace inline code with context pointers. Target SKILL.md under 150 lines.

---

## blueprint
- Type: model-invoked
- Length: ~107 lines
- Scores: INV=4 DESC=3 HIER=3 COMP=3 DISC=3 LEAD=4 COLO=3 PRUN=3 | Avg=3.3
- Strengths:
  - "Cold-start execution" and "adversarial review gate" are strong leading words that anchor critical behaviour.
  - Description includes explicit negative triggers ("DO NOT TRIGGER when") which reduces false invocations.
- Weaknesses:
  - "Key Features" bullet list duplicates the 5-phase pipeline description in a different form (duplication).
  - Installation section and "Source" line are sediment — they belong in a README, not a skill body that must stay legible on every invocation.
- Top fix: Delete "Key Features", "Installation", "Requirements", and "Source" sections; disclose them to a sibling `setup.md` if they must be preserved.

---

## Group summary
- Avg score: 3.5
- Common patterns:
  - Nearly every skill has a "When to Activate" section that duplicates the description — these sections should be removed entirely since the description already does this work.
  - Large skills (backend-patterns, ai-regression-testing, agent-architecture-audit) carry extensive inline code or tables that should be disclosed behind context pointers — sprawl is the dominant failure mode in this group.
  - Descriptions frequently list synonyms as distinct branches rather than collapsing them to one leading term, inflating context load without adding trigger precision.
- Most-needed fixes:
  - Prune "When to Activate" / "When to Use" body sections from all model-invoked skills — the description is the only needed trigger anchor.
  - Disclose inline code blocks and reference tables to sibling files in skills over ~150 lines; replace with context pointers.
  - Audit every description for synonym duplication; a single strong leading term beats a list of restatements.
