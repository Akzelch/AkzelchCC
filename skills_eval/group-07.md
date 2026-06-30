# Group 07 Evaluation

## orch-build-mvp
- Type: model-invoked
- Length: ~49 lines
- Scores: INV=3 DESC=3 HIER=4 COMP=3 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.4
- Strengths:
  - "thin vertical slices" is a strong leading phrase that anchors slice-first build order
  - Delegates cleanly to orch-pipeline; the GAN harness detail is branch-specific and inline where needed
- Weaknesses:
  - Description duplicates body: "ingest the doc, plan thin vertical slices, scaffold…TDD-implement, review, and gated commit" restates the phase sequence verbatim (duplication)
  - "Actor · action · target: orch · build · mvp" is a no-op label that adds no behaviour for the running agent
- Top fix: Strip the phase sequence from the description; keep only the trigger ("has a design/spec doc, wants a working vertical slice") and the "Use to turn an SDD/PRD into a running starting point" clause

---

## orch-change-feature
- Type: model-invoked
- Length: ~44 lines
- Scores: INV=3 DESC=3 HIER=4 COMP=3 DISC=4 LEAD=4 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Sibling-disambiguation ("not broken → not orch-fix-defect; not new → not orch-add-feature") is tight and genuinely useful
  - "Changing the tests first is what separates a tweak from a fix" is an excellent leading-word anchor
- Weaknesses:
  - Description restates process ("update its tests to the new spec, change the implementation to match, review, and gated commit") that is fully covered by orch-pipeline (duplication)
  - "Actor · action · target" line is a no-op for the running agent
- Top fix: Trim the description to trigger + sibling contrast only; remove the process restatement

---

## orch-fix-defect
- Type: model-invoked
- Length: ~44 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=4 LEAD=5 COLO=4 PRUN=3 | Avg=4.0
- Strengths:
  - "Proving the bug exists first is what separates a fix from a tweak" — one of the strongest leading-word sentences in the group; anchors first-move discipline precisely
  - Completion criterion is checkable: reproduce bug as failing test, fix to green
- Weaknesses:
  - Description restates the four-step process (reproduce, fix, review, commit) that is already in orch-pipeline (duplication, mild)
  - "Actor · action · target" no-op persists
- Top fix: Remove process restatement from description; leave only "bug — reproduce it as a failing regression test, fix to green" as the trigger phrase

---

## orch-pipeline
- Type: model-invoked
- Length: ~122 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=3 LEAD=5 COLO=4 PRUN=3 | Avg=3.9
- Strengths:
  - "ceremony scales to blast radius" and "right-sizing" are strong leading words that anchor the size-classifier behaviour across all branches
  - Verification section at the end is a checkable, exhaustive completion criterion — each bullet is binary
- Weaknesses:
  - "When to Use" section restates what the description already says ("Loaded indirectly…"; "Read directly only when…") — sediment since maintainers will read it regardless
  - No progressive disclosure: the agent/command map, security trigger, and handoff artifacts are all inline at 122 lines; the map and handoff sections could be pushed behind pointers for branches that don't need them immediately
- Top fix: Delete the "When to Use" section (body duplication of the description) and move the agent/command map behind a disclosed `AGENTS.md` pointer

---

## orch-refine-code
- Type: model-invoked
- Length: ~45 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=4 LEAD=4 COLO=4 PRUN=3 | Avg=3.9
- Strengths:
  - "confirm tests are green before touching code; if coverage is thin, add characterization tests first" is a crisp, checkable first-move criterion
  - Clean sibling disambiguation; the "behavior-neutral" constraint on the commit is a strong completion anchor
- Weaknesses:
  - "Actor · action · target" no-op present
  - "No new behavior tests are written — the existing suite is the safety net" could be sharpened into a leading word (the suite as a *safety harness*)
- Top fix: Replace "Actor · action · target" line with nothing; it adds no behaviour

---

## product-lens
- Type: model-invoked
- Length: ~94 lines
- Scores: INV=2 DESC=2 HIER=3 COMP=2 DISC=2 LEAD=3 COLO=3 PRUN=2 | Avg=2.4
- Strengths:
  - "YC office hours but automated" is a strong pretrained anchor for the diagnostic tone
  - ICE scoring (impact × confidence ÷ effort) recruits a well-known product framework in three tokens
- Weaknesses:
  - Description has no front-loaded leading word and lists three vague clauses ("validate the why", "run product diagnostics", "pressure-test product direction") that are synonyms of the same branch, not distinct triggers (duplication in description)
  - Four modes at 94 lines with no progressive disclosure; Modes 2–4 could each be a disclosed file reached only when that mode is chosen (sprawl)
- Top fix: Rewrite the description around one sharp leading word (e.g. "Product diagnostic — YC-style interrogation of a feature request or project before any implementation starts") and disclose Mode 2/3/4 behind context pointers

---

## prototype
- Type: user-invoked
- Length: ~32 lines SKILL.md (+ LOGIC.md ~80, UI.md ~106)
- Scores: INV=5 DESC=4 HIER=5 COMP=3 DISC=5 LEAD=4 COLO=4 PRUN=4 | Avg=4.3
- Strengths:
  - Exemplary progressive disclosure: SKILL.md is a lean branch-picker; LOGIC.md and UI.md carry their full detail only when reached
  - "throwaway" is a leading word that anchors the entire philosophy — no tests, no polish, delete when done
- Weaknesses:
  - Completion criterion is vague: "the answer is the only thing worth keeping" tells the agent what to preserve, not what done looks like — susceptible to premature completion on the capture step
  - LOGIC.md and UI.md each carry anti-patterns sections that partially overlap the "Rules that apply to both" section in SKILL.md (mild duplication across disclosed files)
- Top fix: Add a checkable completion criterion to both LOGIC.md and UI.md: the prototype is done when the question it was answering has a written answer in a durable location

---

## python-patterns
- Type: model-invoked
- Length: ~752 lines
- Scores: INV=2 DESC=1 HIER=3 COMP=2 DISC=1 LEAD=3 COLO=3 PRUN=1 | Avg=2.0
- Strengths:
  - Individual sections (type hints, error handling, context managers) are well co-located
  - EAFP, Zen-of-Python principles ("readability counts", "explicit is better") are strong pretrained anchors
- Weaknesses:
  - Severe sprawl (752 lines inline) with zero progressive disclosure; the Quick Reference table, Anti-Patterns section, tooling section, and concurrency section are each independently discloseable
  - Description first line is duplicated verbatim as the body's first sentence ("Pythonic idioms…building robust, efficient, and maintainable applications" vs "Idiomatic Python patterns and best practices for building robust, efficient, and maintainable applications") — direct duplication
- Top fix: Disclose at least the Anti-Patterns, Quick Reference, and tooling sections behind a `REFERENCE.md` pointer; cut description-body duplication

---

## python-testing
- Type: model-invoked
- Length: ~818 lines
- Scores: INV=2 DESC=1 HIER=3 COMP=2 DISC=1 LEAD=3 COLO=3 PRUN=1 | Avg=2.0
- Strengths:
  - Red/green/refactor is a strong leading-word triad that anchors TDD discipline
  - Fixture scope section, parametrize section, and mocking section are each internally coherent
- Weaknesses:
  - Extreme sprawl (818 lines inline); the Running Tests command table, pytest Configuration section, and Quick Reference table alone are ~100 lines of pure reference that could be disclosed
  - Description duplicates body opening ("Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization" vs "Comprehensive testing strategies for Python applications using pytest, TDD methodology") and the Best Practices DO/DON'T list duplicates content already present in Core Testing Philosophy (duplication)
- Top fix: Disclose the Running Tests, Configuration, and Quick Reference sections behind a `REFERENCE.md` pointer; delete the DO/DON'T list in favour of the existing Core Testing Philosophy section

---

## pytorch-patterns
- Type: model-invoked
- Length: ~398 lines
- Scores: INV=2 DESC=1 HIER=3 COMP=2 DISC=2 LEAD=4 COLO=4 PRUN=2 | Avg=2.5
- Strengths:
  - Leading words are strong and domain-specific: "device-agnostic", "reproducibility first", "gradient checkpointing", "mixed precision" each recruit deep pretrained priors in one token
  - Co-location is good: training loop, validation loop, checkpointing, performance optimization each sit under their own heading
- Weaknesses:
  - Description duplicates body opening verbatim ("PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible…" vs "Idiomatic PyTorch patterns and best practices for building robust, efficient, and reproducible…") — direct duplication
  - Anti-Patterns section at end restates bad/good pairs already shown inline throughout the skill (duplication); the `__Remember__` closing sentence is a no-op
- Top fix: Delete the Anti-Patterns section (duplicates inline bad/good examples); remove description-body duplication

---

## Group summary
- Avg score: 3.2
- Common patterns:
  - All three pattern/testing reference skills (python-patterns, python-testing, pytorch-patterns) share the same description-duplicates-first-body-line defect — likely copy-paste sediment from a common template
  - The orch-* wrapper family shares a structural no-op: every wrapper carries an "Actor · action · target" line that adds no behaviour for the running agent
  - The three large reference skills (752–818 lines) have zero progressive disclosure; they are the dominant source of context load in this group
- Most-needed fixes:
  - Progressive disclosure for python-patterns and python-testing: each is 10–20× longer than it needs to be in SKILL.md; disclose Anti-Patterns, Quick Reference, and Configuration sections behind a shared `REFERENCE.md`
  - Strip description-body duplication from python-patterns, python-testing, and pytorch-patterns — the first sentence of each body is identical to the description
  - Add a sharp completion criterion to product-lens (currently no done condition for any mode) and to the prototype disclosed files (capture step has no checkable bound)
