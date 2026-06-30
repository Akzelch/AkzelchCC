# Group 06 Evaluation

## market-research
- Type: model-invoked
- Length: ~77 lines
- Scores: INV=4 DESC=3 HIER=3 COMP=3 DISC=4 LEAD=2 COLO=3 PRUN=3 | Avg=3.1
- Strengths:
  - "Quality Gate" section gives a checkable output bar.
  - Research modes are clearly branched (investor, competitive, market sizing, tech).
- Weaknesses:
  - No strong leading words; "research theater" (used once) is the only pretrained anchor — sediment risk as skill grows.
  - "When to Activate" in the body duplicates the description triggers (duplication).
- Top fix: Delete "When to Activate" from the body; the description already covers it.

## mcp-server-patterns
- Type: model-invoked
- Length: ~71 lines
- Scores: INV=5 DESC=4 HIER=3 COMP=3 DISC=4 LEAD=2 COLO=3 PRUN=3
- Strengths:
  - Description is tight and front-loaded; defers current API to Context7 (smart progressive disclosure).
  - "Schema first" as a best-practice leading word concisely encodes the key discipline.
- Weaknesses:
  - "When to Use" section in the body duplicates the description triggers (duplication).
  - No strong pretrained leading words anchoring execution behaviour beyond "Schema first".
- Top fix: Delete "When to Use" from the body; merge any unique triggers into the description.

## motion-advanced
- Type: model-invoked
- Length: ~597 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=3 | Avg=3.3
- Strengths:
  - Decision tables (right API, useSpring vs transition) are well co-located with rules.
  - Anti-patterns table references rules by number — tight coupling of rule and violation.
- Weaknesses:
  - Sprawl: 15+ inline code examples at ~600 lines; a disclosed examples file would cut the main skill by half.
  - "Outputs" section previews the examples immediately following — no-op, since the code makes the list redundant.
- Top fix: Disclose all code examples to a linked `EXAMPLES.md`; keep only the decision tables and rules inline.

## motion-foundations
- Type: model-invoked
- Length: ~300 lines
- Scores: INV=5 DESC=3 HIER=4 COMP=3 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.6
- Strengths:
  - Description signals the dependency contract clearly ("Foundation layer — all other motion skills depend on this").
  - "Non-negotiable" anchors the rules section; "SSR-safe" used consistently as a leading word.
- Weaknesses:
  - "When to Activate" and "Outputs" in the body duplicate/preview what the description already states (duplication).
  - No disclosed file — code examples inflate line count past where inline is necessary.
- Top fix: Remove "When to Activate" and "Outputs" sections; disclose code examples to `EXAMPLES.md`.

## motion-patterns
- Type: model-invoked
- Length: ~435 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=3 | Avg=3.4
- Strengths:
  - "AnimatePresence contract" is a crisp leading concept; three-condition statement makes it checkable.
  - Rules numbered and anti-patterns table cross-references by number — strong co-location.
- Weaknesses:
  - Sprawl: ~435 lines, most of which are code examples that could be disclosed.
  - "Outputs" section previews examples already visible — no-op.
- Top fix: Disclose code examples to `EXAMPLES.md`; keep decision tables, rules, and core concepts inline.

## motion-ui
- Type: model-invoked
- Length: ~576 lines
- Scores: INV=2 DESC=2 HIER=2 COMP=2 DISC=1 LEAD=2 COLO=2 PRUN=1 | Avg=1.75
- Strengths:
  - `AnimatePresence mode` table with "always specify explicitly" is actionable.
  - Full modal example (focus trap, scroll lock, Escape key) is the most complete in the motion family.
- Weaknesses:
  - Duplication: token definitions, accessibility code, SSR guidance, stagger list, and modal pattern are all copied verbatim from motion-foundations and motion-patterns — this skill is largely sediment over the rest of the motion family.
  - Description triggers ("Use when implementing animations, transitions, or motion patterns") are so generic they overlap entirely with motion-foundations, motion-patterns, and motion-advanced, creating invocation ambiguity.
- Top fix: Audit against motion-foundations and motion-patterns; delete every duplicated block, then either retire the skill or scope it to the unique content (device-memory heuristic, debugging checklist, QA checklist).

## network-config-validation
- Type: model-invoked
- Length: ~206 lines
- Scores: INV=5 DESC=4 HIER=4 COMP=4 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.9
- Strengths:
  - "Fail closed on dangerous commands" is an excellent pretrained leading word that encodes the safety philosophy.
  - Ordered 1–5 validation pass makes the completion criterion exhaustive and checkable.
- Weaknesses:
  - "When to Use" in the body duplicates description triggers (duplication).
  - Code examples are inline at full length; a disclosed Python module would shorten the skill without losing the patterns.
- Top fix: Delete "When to Use" from the body; move the Python examples to a disclosed `validators.py` or `EXAMPLES.md`.

## network-interface-health
- Type: model-invoked
- Length: ~154 lines
- Scores: INV=5 DESC=5 HIER=4 COMP=4 DISC=4 LEAD=4 COLO=4 PRUN=4 | Avg=4.25
- Strengths:
  - "Baseline / increment / trend" are tight pretrained leading words that encode the measurement protocol in three tokens.
  - Description lists every distinct branch (errors, drops, CRCs, duplex, flapping, speed, Linux hosts) with no body duplication.
- Weaknesses:
  - "When to Use" in the body still partially duplicates description triggers (minor duplication).
  - Counter Reference table's "Common cause" column overlaps slightly with Diagnosis Flow prose.
- Top fix: Delete "When to Use" from the body; the description already carries those triggers.

## opensource-pipeline
- Type: model-invoked
- Length: ~256 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=4 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Completion criteria are explicit at each stage (read FORK_REPORT.md, SANITIZATION_REPORT.md; PASS/FAIL verdict).
  - "Safety gate" for the sanitizer is a strong pretrained anchor.
- Weaknesses:
  - "Best Practices" section restates the anti-patterns in positive form — duplication; one list suffices.
  - Description trigger list is verbose; "Triggers: '/opensource', 'open source this'…" belongs in the description but makes it long.
- Top fix: Delete "Best Practices"; merge any unique content into "Anti-Patterns".

## orch-add-feature
- Type: model-invoked
- Length: ~46 lines
- Scores: INV=5 DESC=4 HIER=5 COMP=4 DISC=5 LEAD=3 COLO=4 PRUN=5 | Avg=4.4
- Strengths:
  - Best use of progressive disclosure in the group — thin wrapper that delegates entirely to `orch-pipeline`, carrying only the delta (phase mask, first move, gates).
  - No duplication, no sediment, no sprawl; every line adds distinct value.
- Weaknesses:
  - "Actor · action · target" framing in the intro recruits no pretrained prior — the line is exposition that could be cut.
  - The `>` blockquote comparing to `/feature-dev` is useful but slightly awkward placement; belongs closer to the "When to Use" differentiation.
- Top fix: Delete the "Actor · action · target" sentence; move the `/feature-dev` note inside "When to Use" as a negative case.

---

## Group summary
- Avg score: 3.5
- Common patterns:
  - "When to Activate" / "When to Use" sections in the body duplicate description triggers across nearly every skill — the most pervasive duplication in the group.
  - Sprawl via inline code examples rather than disclosed files affects all four motion skills and both network skills.
  - Leading words are underused; most skills rely on structural organisation rather than pretrained concepts to anchor behaviour.
- Most-needed fixes:
  - Audit and delete "When to Use" / "When to Activate" body sections group-wide; triggers belong in the description only.
  - Disclose code examples to linked files in the motion family; the three main motion skills (foundations, patterns, advanced) should each be under 150 lines.
  - Retire or radically prune `motion-ui` — it is almost entirely duplication over the rest of the motion family and its generic description creates invocation ambiguity.
