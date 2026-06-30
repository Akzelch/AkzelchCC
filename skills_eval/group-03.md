# Group 03 Evaluation

## cost-aware-llm-pipeline
- Type: model-invoked
- Length: ~185 lines
- Scores: INV=3 DESC=3 HIER=3 COMP=3 DISC=2 LEAD=2 COLO=2 PRUN=2 | Avg=2.5
- Strengths:
  - Immutable cost-tracking pattern is clear and well-motivated
  - Four concepts (routing, tracking, retry, caching) are distinct and self-contained
- Weaknesses:
  - Duplication: "When to Activate" (line 13) and "When to Use" (line 179) are near-identical sections — classic sediment
  - No leading word to anchor the routing behaviour; "select the cheapest model" is restated across Core Concepts, Best Practices, and Anti-Patterns
- Top fix: Collapse the two When-to-Use blocks into one and delete the Anti-Patterns section (it restates the inverse of every best practice already present)

## council
- Type: model-invoked
- Length: ~205 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=3 LEAD=4 COLO=3 PRUN=3 | Avg=3.5
- Strengths:
  - "council" and "anti-anchoring" are strong leading words that recruit good priors throughout
  - 6-step workflow is well-ordered; the bias-guardrails in Step 5 are concrete
- Weaknesses:
  - "When NOT to Use" and "Anti-Patterns" duplicate each other ("don't use council for code review" appears in both)
  - No completion criterion on the synthesis step — premature completion risk when the verdict looks done but the strongest dissent hasn't been included
- Top fix: Merge "When NOT to Use" and "Anti-Patterns" into one block; add a checkable criterion to Step 5 (e.g., "the strongest dissent is stated even if rejected")

## cpp-testing
- Type: model-invoked
- Length: ~325 lines
- Scores: INV=4 DESC=4 HIER=3 COMP=2 DISC=2 LEAD=3 COLO=2 PRUN=2 | Avg=2.75
- Strengths:
  - Description clearly scopes invocation to tests-only and lists distinct branches
  - "TDD loop: red → green → refactor" is a well-placed leading word
- Weaknesses:
  - Sprawl: 325 lines with coverage, sanitizers, fuzzing, CMake all inline — most of this is branch-specific reference that should be disclosed
  - Duplication: "never use sleep for synchronization" and "mock for interactions, fake for stateful behavior" each appear in two separate sections
- Top fix: Disclose Coverage, Sanitizers, and Fuzzing sections to a separate reference file; they are only needed for specific sub-tasks

## dart-flutter-patterns
- Type: model-invoked
- Length: ~565 lines
- Scores: INV=2 DESC=2 HIER=3 COMP=3 DISC=1 LEAD=2 COLO=3 PRUN=2 | Avg=2.25
- Strengths:
  - Each numbered section (1–10) is self-contained with well-chosen code examples
  - The References section at the end correctly points to external docs
- Weaknesses:
  - Severe sprawl: 565 lines all inline, no disclosed files; the entire body could be disclosed with a light top-level context pointer
  - Description is an index, not a trigger — it lists 12 topics and duplicates the "How It Works" numbered list already in the body (duplication)
- Top fix: Rewrite the description as a 2-sentence trigger; disclose sections 1–10 to a `PATTERNS.md` file, keeping only a context pointer and a summary table in SKILL.md

## data-scraper-agent
- Type: model-invoked
- Length: ~766 lines
- Scores: INV=3 DESC=2 HIER=4 COMP=3 DISC=1 LEAD=3 COLO=2 PRUN=1 | Avg=2.375
- Strengths:
  - 10-step workflow follows a clear build order (collect → enrich → store → schedule)
  - End-of-skill checklist is checkable and exhaustive
- Weaknesses:
  - Worst duplication in the group: HTML scraping pattern, RSS pattern, and REST API pattern each appear verbatim in both Step 3 and the "Common Scraping Patterns" appendix
  - Severe sprawl at 766 lines; all 6 module templates are inline when they could be disclosed to separate files or a template repo pointer
- Top fix: Delete "Common Scraping Patterns" section entirely (Step 3 already covers all five patterns) and add a context pointer to a template repo instead of inlining 300+ lines of module code

## deep-research
- Type: model-invoked
- Length: ~165 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=3 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.375
- Strengths:
  - "drift-prone skill" warning is an effective leading word that sets expectations early
  - 6 steps are tightly ordered; Step 3 search strategy and Step 4 deep-read are well-differentiated
- Weaknesses:
  - "When to Activate" trigger list and "Examples" at the bottom overlap substantially (same scenarios restated as phrases)
  - Completion criterion on Step 5 is vague — "thorough, cited report" doesn't tell the agent when synthesis is exhaustive
- Top fix: Remove the Examples section (triggers in description already cover them); sharpen Step 5's criterion with "every sub-question from Step 2 is addressed or explicitly flagged as insufficient-data"

## design-system
- Type: model-invoked
- Length: ~84 lines
- Scores: INV=3 DESC=3 HIER=3 COMP=2 DISC=4 LEAD=3 COLO=4 PRUN=2 | Avg=3.0
- Strengths:
  - Compact size; three modes are clearly separated with no cross-contamination
  - "AI Slop Detection" is a strong leading word that recruits precise priors
- Weaknesses:
  - Examples section uses fake CLI syntax (`/design-system generate --style minimal`) implying a command interface that does not exist — a no-op or worse, misleading
  - No completion criterion for any mode; Mode 2 audit has a 10-dimension scoring list but no bar for "done"
- Top fix: Delete or rewrite the Examples section to show natural-language invocations instead of fake CLI flags

## diagnosing-bugs
- Type: model-invoked
- Length: ~135 lines
- Scores: INV=4 DESC=4 HIER=5 COMP=5 DISC=4 LEAD=5 COLO=5 PRUN=4 | Avg=4.5
- Strengths:
  - "tight" is a masterclass leading word — defined once, used throughout to anchor all loop-quality decisions
  - Every phase has a checkable, exhaustive completion criterion; Phase 1's criterion is the best in the group
- Weaknesses:
  - The `scripts/hitl-loop.template.sh` reference is never introduced — a reader encountering it for the first time gets no context for what the script contains or does
  - Phase 6 post-mortem recommendation to hand off to `/improve-codebase-architecture` is a no-op for agents that don't know that skill exists from this context
- Top fix: Add one sentence in Phase 1 introducing what `hitl-loop.template.sh` provides so the reference is actionable without reading the file first

## docker-patterns
- Type: model-invoked
- Length: ~366 lines
- Scores: INV=3 DESC=3 HIER=3 COMP=3 DISC=2 LEAD=2 COLO=3 PRUN=3 | Avg=2.75
- Strengths:
  - Security section groups Dockerfile hardening and Compose security together correctly
  - Volume strategies section consolidates all three volume types in one place
- Weaknesses:
  - No leading word to anchor behaviour — "best practices", "patterns" are generic labels that recruit no useful priors
  - Sprawl: 366 lines all inline; Debugging and Security sections are branch-specific reference that should be disclosed
- Top fix: Introduce a leading word (e.g., "hardened" for the security posture, "ephemeral" for the container mental model) and disclose Debugging and Security to separate files behind context pointers

## documentation-lookup
- Type: model-invoked
- Length: ~92 lines
- Scores: INV=5 DESC=4 HIER=4 COMP=3 DISC=4 LEAD=4 COLO=4 PRUN=3 | Avg=3.875
- Strengths:
  - Description is the strongest in the group — specific trigger examples ("e.g. React, Next.js, Prisma") make invocation reliable
  - Steps 1–4 are cleanly ordered; the 3-call limit in Step 3 is a concrete, checkable bound
- Weaknesses:
  - "When to use" body section duplicates the description's trigger list (duplication)
  - Step 4's criterion ("answer the user's question") is vague — no bar for when to cite version or flag uncertainty
- Top fix: Delete the "When to use" section in the body (the description already covers it); tighten Step 4 to include "cite the version when behaviour differs across versions"

## Group summary
- Avg score: 3.1
- Common patterns:
  - Sprawl is the dominant issue: six of ten skills have all content inline with no progressive disclosure, and the three longest (dart-flutter-patterns, data-scraper-agent, cpp-testing) exceed 300 lines
  - Duplication between a "When to Activate / When to Use" block in the body and the description appears in at least five skills
  - Leading words are underused in reference-heavy skills (docker-patterns, cost-aware-llm-pipeline, dart-flutter-patterns) — patterns are named but not anchored to behavioral priors
- Most-needed fixes:
  - Disclose branch-specific reference (code examples, appendix sections, alternate-path content) to sibling files behind context pointers — this alone would fix sprawl across the bottom half of the group
  - Merge or delete duplicated When-to-Use / When-to-Activate blocks; the description is the canonical trigger list for model-invoked skills
  - Add checkable completion criteria to step-based skills (council synthesis step, deep-research Step 5) to prevent premature completion
