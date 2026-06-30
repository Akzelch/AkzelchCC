# Group 09 Evaluation

## search-first
- Type: model-invoked
- Length: ~184 lines
- Scores: INV=3 DESC=2 HIER=3 COMP=2 DISC=2 LEAD=2 COLO=3 PRUN=2 | Avg=2.4
- Strengths:
  - ASCII workflow diagram gives a clear process skeleton at a glance.
  - Decision matrix (Adopt / Extend / Compose / Build) is a clean, checkable reference.
- Weaknesses:
  - Description lists the skill's purpose rather than distinct trigger branches; synonymous triggers (duplication) collapse to one branch.
  - Integration Points section names agents ("planner", "architect", "iterative-retrieval") that may not exist — sediment risk. Search Shortcuts catalog is sediment by nature (specific package names that drift).
- Top fix: Rewrite description as two genuine branches ("user is about to write code that likely has an existing library" vs "user explicitly asks to research before implementing"), strip Integration Points and Search Shortcuts to an external reference file.

## security-review
- Type: model-invoked
- Length: ~505 lines
- Scores: INV=4 DESC=4 HIER=2 COMP=3 DISC=1 LEAD=3 COLO=4 PRUN=1 | Avg=2.75
- Strengths:
  - Description carries distinct, non-overlapping trigger branches (auth, input, secrets, API, payments, data, third-party).
  - Per-section co-location is excellent: definition + FAIL/PASS code + verification checklist under each heading.
- Weaknesses:
  - Sprawl: 505 lines for flat reference is extreme; Blockchain/Solana section is highly specific sediment that fires on zero branches for most users.
  - Pre-Deployment Checklist duplicates all 10 section checklists (duplication), and Security Testing repeats verification patterns already in each section.
- Top fix: Disclose code examples and verification steps behind a context pointer (e.g. `CHECKLIST.md`), keep only the rule statements inline; delete or gate the Blockchain section on an explicit branch.

## security-scan
- Type: model-invoked
- Length: ~166 lines
- Scores: INV=4 DESC=3 HIER=3 COMP=2 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.1
- Strengths:
  - Description accurately scopes the skill to `.claude/` configuration scanning with AgentShield — no ambiguity.
  - Co-location is well-structured: Prerequisites → Usage variants → Severity → Interpreting Results → Links.
- Weaknesses:
  - No completion criteria: the skill ends when the tool outputs a report, but the agent is given no checkable condition for "this scan is done and acted on".
  - "When to Activate" section partly duplicates the description's trigger list (duplication).
- Top fix: Add a short completion criterion after the scan steps ("grade is A or B, or all Critical/High findings have a documented remediation plan") and collapse "When to Activate" into the description.

## skill-comply
- Type: model-invoked
- Length: ~60 lines
- Scores: INV=3 DESC=2 HIER=3 COMP=2 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=2.9
- Strengths:
  - Short and focused; does not sprawl beyond what the tool actually does.
  - "Supported Targets" table cleanly scopes what the skill applies to.
- Weaknesses:
  - Description packs six distinct facts into one sentence (auto-generates, 3 strictness levels, runs agents, classifies, temporal ordering, reports) — context load inflation without invocation benefit; branches are not listed.
  - "Key Concept: Prompt Independence" is a single sentence that reads as a no-op — the agent would exhibit this by default given the described measurement method.
- Top fix: Reduce description to the leading trigger ("Measure whether a skill, rule, or agent definition is actually followed in agent runs") and one reach clause; move the methodology detail to the body.

## skill-scout
- Type: model-invoked
- Length: ~142 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Steps 1–6 form a clean sequential workflow with checkable exit conditions (cap at 10 results, only create after user chooses).
  - Description front-loads "Search" and lists four genuinely distinct triggers.
- Weaknesses:
  - "Source: salvaged from stale community PR #1232 by `redminwang`" is sediment — irrelevant provenance note with no effect on behaviour.
  - Anti-patterns section partially duplicates constraints already stated in the step instructions.
- Top fix: Delete the provenance note; fold Anti-Patterns into the relevant steps as inline guards rather than a separate section.

## skill-stocktake
- Type: model-invoked
- Length: ~196 lines
- Scores: INV=3 DESC=4 HIER=4 COMP=4 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.6
- Strengths:
  - "Verdict" is a strong leading word that anchors all evaluation output consistently (verdict criteria, reason requirements, schema).
  - Four-phase Full Stocktake flow has checkable completion per phase; reason quality requirements are specific and decision-enabling.
- Weaknesses:
  - Results File Schema and detailed bash commands are operational reference that could be disclosed behind a pointer to reduce inline length.
  - Description front-loads "Use when auditing" rather than the skill's stronger leading word "stocktake", missing an invocation anchor.
- Top fix: Rewrite description opening to front-load "stocktake" ("Stocktake all installed Claude skills…"), and disclose Results File Schema to `SCHEMA.md`.

## tdd
- Type: model-invoked
- Length: ~109 lines + disclosed files (tests.md, mocking.md, refactoring.md)
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=4 LEAD=5 COLO=4 PRUN=3 | Avg=4.0
- Strengths:
  - "tracer bullet" is an exemplary leading word — pretrained, behaviorally precise, and used exactly where it anchors execution.
  - Progressive disclosure is well-executed: three sibling files disclose content that only specific branches (refactoring, mocking) need.
- Weaknesses:
  - Philosophy section is extensive (~20 lines) and partially restates the Anti-Pattern section that immediately follows it — duplication across adjacent sections.
  - The code diagram (`WRONG (horizontal)`) appears twice (Philosophy and Anti-Pattern section) — duplication.
- Top fix: Delete the first `WRONG/RIGHT` code diagram; the Anti-Pattern section already carries it with more context. Trim Philosophy to two sentences.

## teach
- Type: user-invoked
- Length: ~141 lines + 4 disclosed format files
- Scores: INV=4 DESC=4 HIER=3 COMP=2 DISC=4 LEAD=5 COLO=5 PRUN=3 | Avg=3.75
- Strengths:
  - Leading words from learning science ("lesson", "zone of proximal development", "fluency strength", "storage strength") are outstanding — each recruits deep pretrained priors.
  - Co-location is excellent: every concept (Lessons, Assets, Mission, ZPD, Knowledge, Skills, Wisdom) has its full definition and caveats under one heading.
- Weaknesses:
  - No ordered steps with completion criteria; the skill is pure reference and does not guide the agent through the session startup sequence (check MISSION.md, load learning-records, determine ZPD) — premature completion risk on first invocation.
  - Knowledge section and Skills section both discuss difficulty as a variable but in opposite directions (difficulty is enemy for knowledge, tool for skills) — structurally confusing without a bridging note; co-location within those sections is fine but the contrast is scattered.
- Top fix: Add a "Session Start" step sequence (3–4 ordered actions with completion criteria) before the reference sections, so the agent has a checkable entry path for each new session.

## token-budget-advisor
- Type: model-invoked
- Length: ~135 lines
- Scores: INV=2 DESC=2 HIER=4 COMP=4 DISC=2 LEAD=4 COLO=4 PRUN=1 | Avg=2.9
- Strengths:
  - Steps 1–4 are well-sequenced with concrete tables (multiplier ranges, level definitions) that make completion checkable.
  - "depth" is a strong leading word repeated consistently through the tables and shortcut list.
- Weaknesses:
  - Description is 14 lines long including Spanish trigger phrases — severe context load inflation. The trigger list is synonymous duplication: "token budget, token count, token usage, token limit" all name the same branch.
  - "When to Use" section and "Examples/Triggers" and "Does Not Trigger" sections each restate material already in the description (duplication × 3 sites).
- Top fix: Collapse description to two sentences and one DO NOT TRIGGER rule; delete "When to Use" and "Examples" sections entirely since the description and Steps carry the same content.

## writing-great-skills
- Type: user-invoked
- Length: ~83 lines + GLOSSARY.md (~182 lines)
- Scores: INV=5 DESC=4 HIER=5 COMP=4 DISC=5 LEAD=5 COLO=5 PRUN=5 | Avg=4.75
- Strengths:
  - Exemplary progressive disclosure: body stays at 83 lines by pushing all definitions to GLOSSARY.md behind a context pointer.
  - Leading words ("predictability", "context load", "no-op", "legwork", "information hierarchy") are pretrained concepts repeated at high density, anchoring every section of behaviour.
- Weaknesses:
  - The failure modes section duplicates some definitions already fully treated in GLOSSARY.md (e.g. premature completion, duplication) — both in SKILL.md and GLOSSARY.md covers the same ground.
  - Description as human-facing summary ("the vocabulary and principles that make a skill predictable") is accurate but could surface the router-skill use case explicitly for human discoverability.
- Top fix: Trim failure modes in SKILL.md to one-line reminders that point at GLOSSARY.md entries, eliminating the inline restatement.

---

## Group summary
- Avg score: 3.36
- Common patterns:
  - Description overload: half the model-invoked skills (token-budget-advisor, skill-comply, search-first) carry trigger synonyms or methodology detail in the description, inflating context load without adding invocation branches.
  - Inline duplication: trigger conditions repeat across description, "When to Use" section, and "Examples" sections in multiple skills — single source of truth is frequently violated.
  - Absent or weak completion criteria: reference-heavy skills (search-first, security-review, skill-comply, teach) have no checkable done condition, leaving premature completion undefended.
- Most-needed fixes:
  - Audit all descriptions for synonym collapse: reduce to one trigger per distinct branch, strip methodology summaries that belong in the body.
  - Add at least one checkable completion criterion to every skill that has steps; for pure-reference skills, add an exhaustiveness bar ("every check applied before marking done").
  - Apply progressive disclosure to security-review and token-budget-advisor: 500-line and 135-line inline reference should be pushed behind context pointers, keeping SKILL.md under 150 lines.
