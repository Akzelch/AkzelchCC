# Group 08 Evaluation

## react-patterns
- Type: model-invoked
- Length: ~343 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Description enumerates genuinely distinct branches (hooks, server/client seams, Suspense, forms, data fetching, state, accessibility)
  - Content well co-located; each section is cohesive with no scattered cross-references
- Weaknesses:
  - "When to Activate" section duplicates description branches verbatim (duplication)
  - No strong leading word anchors execution; "seam" is used but not repeated systematically; sprawl risk at 343 lines with Examples section unrevealed behind a pointer
- Top fix: Disclose the Examples section to a sibling file and delete "When to Activate" — the description already covers those triggers.

## react-performance
- Type: model-invoked
- Length: ~576 lines
- Scores: INV=3 DESC=3 HIER=3 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=3 | Avg=3.0
- Strengths:
  - Priority Index table gives structure; "waterfalls" as the #1 critical category is a strong leading word used consistently
  - Co-location is good — each priority category groups its patterns tightly
- Weaknesses:
  - Sprawl: 576 lines with no progressive disclosure; JS Performance and Advanced Patterns sections (lower priority) belong behind context pointers
  - Description embeds a full URL (token waste) and the "When to Activate" section duplicates the description's trigger list (duplication)
- Top fix: Disclose sections 7 (JS Performance) and 8 (Advanced Patterns) to a sibling file; trim the URL from the description to its domain only.

## react-testing
- Type: model-invoked
- Length: ~425 lines
- Scores: INV=4 DESC=4 HIER=3 COMP=3 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - "RED/GREEN/REFACTOR" and "user sees and does" are strong leading words that anchor behavioral testing intent
  - Query priority tiers and decision boundary (RTL vs Playwright vs E2E) are well co-located and actionable
- Weaknesses:
  - "TDD Workflow" section near the end introduces an ordered sequence late in a reference skill — out-of-hierarchy placement; belongs in a tdd skill via pointer
  - "When to Activate" duplicates description triggers (duplication); Examples section at lines 363–424 could be disclosed
- Top fix: Delete "TDD Workflow" section (cross-link to tdd skill instead) and disclose the Examples section to a sibling file.

## regex-vs-llm-structured-text
- Type: model-invoked
- Length: ~220 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=4 LEAD=3 COLO=4 PRUN=3 | Avg=3.6
- Strengths:
  - Description is tight and front-loaded: "Decision framework... — start with regex, add LLM only for low-confidence edge cases" states the leading insight directly
  - At 220 lines with integral code examples, disclosure pressure is low and structure is appropriate
- Weaknesses:
  - "When to Use" section at the bottom partially duplicates "When to Activate" at the top (duplication)
  - "Best Practices" and "Anti-Patterns" sections share overlapping content (mutate/immutability mentioned in both) — mild duplication
- Top fix: Merge "When to Use" into "When to Activate" and collapse the overlapping immutability advice into one place.

## remotion-video-creation
- Type: model-invoked
- Length: ~44 lines
- Scores: INV=3 DESC=3 HIER=4 COMP=3 DISC=5 LEAD=2 COLO=3 PRUN=3 | Avg=3.3
- Strengths:
  - Progressive disclosure is exemplary: 29 rule files are entirely behind context pointers; SKILL.md stays a clean index
  - The pointer descriptions are specific enough to fire reliably (each names its exact domain)
- Weaknesses:
  - Description ends with "and more" which weakens the branch enumeration and softens invocation precision
  - "How to use: Read individual rule files for detailed explanations and code examples" is a no-op — the agent reads linked files without being told
- Top fix: Replace "and more" with the two or three most distinctive remaining domains, and delete the "How to use" section.

## research-ops
- Type: model-invoked
- Length: ~115 lines
- Scores: INV=3 DESC=3 HIER=4 COMP=4 DISC=4 LEAD=4 COLO=4 PRUN=3 | Avg=3.6
- Strengths:
  - "Evidence-first" leading word anchors the entire workflow; the sourced-fact / inference / recommendation triplet repeats as a structuring principle
  - Verification section at the end is a checkable completion criterion: three concrete, binary conditions
- Weaknesses:
  - "for ECC" in the description names an internal provenance term invisible to users outside the plugin context — confusing and wasteful token
  - "Guardrails" and "Pitfalls" sections overlap on the inference-labeling rule (duplication)
- Top fix: Remove "for ECC" from the description; merge the inference-labeling rule from Guardrails into Pitfalls (one place).

## resolving-merge-conflicts
- Type: model-invoked
- Length: ~15 lines
- Scores: INV=2 DESC=2 HIER=5 COMP=4 DISC=5 LEAD=3 COLO=5 PRUN=5 | Avg=3.9
- Strengths:
  - Five tight steps with clear completion criteria; no sprawl, no sediment, no duplication — the body is exemplary
  - Progressive disclosure is perfect: 15 lines is the right length for a step-only skill
- Weaknesses:
  - Description starts with "Use when you need to resolve..." — violates front-loading; the leading concept ("merge-conflict resolution") is buried after the trigger phrase
  - "primary sources" (step 2) is a borrowed concept without strong pretraining tie-in for git context; "hunk" is domain-precise but underused
- Top fix: Rewrite description to lead with the skill concept: "Merge/rebase conflict resolution — step-by-step from conflict discovery through verified finish."

## santa-method
- Type: model-invoked
- Length: ~305 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.75
- Strengths:
  - "NICE/NAUGHTY" verdict vocabulary and "convergence loop" are strong, memorable leading words that anchor verification semantics throughout
  - Phase structure (Generate → Dual Review → Verdict Gate → Fix Loop) is clear and each phase has explicit completion criteria
- Weaknesses:
  - Rubric Design and three Implementation Patterns (A/B/C) are inline reference that accumulates to sprawl at 305 lines; these could be disclosed behind a context pointer
  - Integration table references skills ("Verification Loop", "Eval Harness", "Continuous Learning v2", "Strategic Compact") that may not exist in this repo — potential sediment
- Top fix: Disclose Pattern B, Pattern C, and the Batch Sampling pattern to a sibling file; reference them from SKILL.md with a pointer that fires when scale or fallback modes are needed.

## scientific-thinking-literature-review
- Type: model-invoked
- Length: ~195 lines
- Scores: INV=3 DESC=4 HIER=5 COMP=4 DISC=4 LEAD=5 COLO=5 PRUN=4 | Avg=4.25
- Strengths:
  - PICO is an excellent domain leading word that recruits deep pretraining for biomedical/clinical work; review-type vocabulary (systematic, scoping, narrative, meta-analysis) is precise and repeated appropriately
  - 8-step hierarchy is clean: Define → Plan → Search → Deduplicate → Screen → Extract → Synthesize → Verify; each step has an implicit checkable criterion
- Weaknesses:
  - Internal `name: literature-review` does not match the folder slug `scientific-thinking-literature-review` — maintenance risk that could cause invocation misses
  - "When to Use" list slightly duplicates description triggers (minor duplication)
- Top fix: Align `name:` in frontmatter with the folder slug, or align the folder slug with the internal name.

## scientific-thinking-scholar-evaluation
- Type: model-invoked
- Length: ~165 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=4 LEAD=4 COLO=4 PRUN=4 | Avg=4.0
- Strengths:
  - "rubric" leading word anchors evaluation behavior; "blockers vs. suggestions" vocabulary is clean and repeatable
  - Rubric dimensions are a legitimately flat peer-set (9 dimensions with objective sub-criteria); co-location is excellent
- Weaknesses:
  - Internal `name: scholar-evaluation` does not match folder slug `scientific-thinking-scholar-evaluation` — same maintenance risk as the literature-review skill
  - Evaluation Scope section enumerates both artifact types and scope modes in two separate lists that could be collapsed into one table for tighter co-location
- Top fix: Align `name:` frontmatter with the folder slug, matching the fix needed in scientific-thinking-literature-review.

---

## Group summary
- Avg score: 3.6
- Common patterns:
  - "When to Activate" sections in 7 of 10 skills duplicate the description's trigger list — a systematic duplication pattern
  - Descriptions in three skills (resolving-merge-conflicts, research-ops, remotion-video-creation) either mis-front-load or include token waste ("Use when...", "for ECC", "and more")
  - Two skills (scientific-thinking-literature-review, scientific-thinking-scholar-evaluation) share a name/folder-slug mismatch that creates an invocation risk
- Most-needed fixes:
  - Audit and delete "When to Activate" sections that restate description branches — redirect those tokens to sharper context pointers instead
  - Apply progressive disclosure to the three largest skills (react-performance 576 lines, react-testing 425 lines, react-patterns 343 lines): disclose low-priority or branch-specific reference behind sibling files
  - Front-load all descriptions with the skill's leading concept rather than "Use when you need to..." phrasing
