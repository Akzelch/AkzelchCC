# Group 04 Evaluation

## domain-modeling
- Type: model-invoked
- Length: ~75 lines (+ CONTEXT-FORMAT.md, ADR-FORMAT.md disclosed)
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=4 LEAD=3 COLO=4 PRUN=4 | Avg=3.8
- Strengths:
  - Reachability clause in description ("when another skill needs to maintain the domain model") correctly models cross-skill invocation.
  - Progressive disclosure is well-executed: format files disclosed behind named context pointers, not inlined.
- Weaknesses:
  - No strong leading word; "challenge," "sharpen," "cross-reference" are imperative verbs but none anchors a behavioral region across the whole skill.
  - Completion criterion for "Update CONTEXT.md inline" — "when a term is resolved" — is fuzzy; the agent can declare a term resolved prematurely.
- Top fix: Add a leading word (e.g., "crystallise" already appears once in the opening sentence — promote it and use it consistently) to anchor the behavior of capturing terms immediately.

---

## dotnet-patterns
- Type: model-invoked
- Length: ~323 lines
- Scores: INV=2 DESC=2 HIER=2 COMP=3 DISC=2 LEAD=2 COLO=3 PRUN=2 | Avg=2.3
- Strengths:
  - Code examples are co-located with each pattern; good/bad comparisons make the checklist anti-patterns table immediately actionable.
  - Anti-patterns table at the end provides a checkable review surface.
- Weaknesses:
  - Description is nearly identical to the body heading — duplication with no invocation work done; no trigger phrasing.
  - "When to Activate" section in the body is sediment — the description already covers those scenarios.
- Top fix: Rewrite the description as trigger-phrased ("Use when writing or reviewing C# code, or designing .NET module seams") and delete the "When to Activate" section from the body.

---

## error-handling
- Type: model-invoked
- Length: ~378 lines
- Scores: INV=3 DESC=3 HIER=2 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=2 | Avg=2.9
- Strengths:
  - Language sections (TypeScript, Python, Go) are well co-located with their code examples; the checklist at the end is explicit and checkable.
  - "Fail fast" and "typed errors" are pretrained concepts used effectively as soft leading words.
- Weaknesses:
  - "When to Activate" section in the body duplicates the description triggers exactly — sediment.
  - At 378 lines with three language branches, Python and Go sections could be disclosed behind context pointers; no progressive disclosure exists.
- Top fix: Disclose the Python and Go sections to `error-handling-python.md` and `error-handling-go.md`, each reached by a one-line context pointer. Delete "When to Activate" from the body.

---

## exa-search
- Type: model-invoked
- Length: ~108 lines
- Scores: INV=4 DESC=3 HIER=2 COMP=3 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.1
- Strengths:
  - Description front-loads "Neural search via Exa MCP" — good leading word that anchors invocation.
  - Tool parameter tables are co-located with each tool and usage examples.
- Weaknesses:
  - "When to Activate" in the body duplicates the description triggers word-for-word — duplication.
  - MCP setup block (one-time configuration) is inline rather than behind a disclosed pointer, adding load on every run.
- Top fix: Delete "When to Activate" from the body and move the MCP setup block to a disclosed `SETUP.md` file with a one-line pointer.

---

## flutter-dart-code-review
- Type: model-invoked
- Length: ~436 lines
- Scores: INV=2 DESC=2 HIER=3 COMP=4 DISC=2 LEAD=2 COLO=4 PRUN=3 | Avg=2.8
- Strengths:
  - Checklists throughout are checkable and exhaustive; coverage of all review dimensions (state, performance, a11y, security, l10n) is thorough.
  - Sections are well co-located; the State Management Quick Reference maps principles to all six solutions cleanly.
- Weaknesses:
  - Description enumerates content ("covering widget best practices, state management patterns (BLoC, Riverpod, Provider, GetX, MobX, Signals)…") instead of stating when to trigger — no invocation work done; sprawl in the description itself.
  - At 436 lines this is sprawl; Sources section and State Management Quick Reference could be disclosed without hurting runtime behavior.
- Top fix: Rewrite description as a trigger ("Use when reviewing any Flutter/Dart code") and disclose the State Management Quick Reference and Sources section to a `REFERENCE.md` file.

---

## frontend-a11y
- Type: model-invoked
- Length: ~447 lines
- Scores: INV=4 DESC=4 HIER=3 COMP=4 DISC=2 LEAD=3 COLO=4 PRUN=3 | Avg=3.4
- Strengths:
  - Description and "When to Activate" cover distinct, specific trigger scenarios; invocation is reliable.
  - Checklist at end is checkable and exhaustive; bad/good code examples are immediately actionable.
- Weaknesses:
  - "When to Activate" in the body duplicates description triggers — duplication.
  - At 447 lines, Keyboard Navigation and Focus Management sections are long enough to disclose; no progressive disclosure exists.
- Top fix: Delete "When to Activate" from the body and disclose the Keyboard Navigation and Focus Management sections to separate files linked from one-line context pointers.

---

## frontend-patterns
- Type: model-invoked
- Length: ~658 lines
- Scores: INV=2 DESC=2 HIER=2 COMP=2 DISC=1 LEAD=2 COLO=3 PRUN=2 | Avg=2.0
- Strengths:
  - Code examples are concrete and runnable.
  - Component composition, hooks, and state management sections show reasonable internal co-location.
- Weaknesses:
  - Severe sprawl (658 lines); Performance, Animation, Accessibility, and State Management sections each cover enough material for a standalone skill — no progressive disclosure at all.
  - Description enumerates categories without trigger phrasing; "PASS:" comment prefixes in code blocks are noise (no-ops), and the trailing "Remember:" line is a no-op.
- Top fix: Disclose performance and animation sections to separate files and delete the "When to Activate" section and "Remember:" line; consider splitting into two skills (component patterns vs. performance/animation).

---

## frontend-slides
- Type: model-invoked
- Length: ~186 lines (+ STYLE_PRESETS.md, animation-patterns.md, html-template.md disclosed)
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=4 LEAD=3 COLO=4 PRUN=3 | Avg=3.8
- Strengths:
  - Progressive disclosure is the best in this group: STYLE_PRESETS.md offloads the bulkiest reference behind a clear context pointer used at the exact step that needs it.
  - Viewport-fit is treated as a gate (step 5) with checkable rules and a named hard constraint — strong completion criterion.
- Weaknesses:
  - "When to Activate" duplicates the description branches — duplication.
  - Some overlap between Non-Negotiables and Implementation Requirements sections (zero-dependency rule appears in both).
- Top fix: Delete "When to Activate" and consolidate the overlapping Non-Negotiables / Implementation Requirements to a single section.

---

## git-workflow
- Type: model-invoked
- Length: ~716 lines
- Scores: INV=2 DESC=2 HIER=2 COMP=2 DISC=1 LEAD=2 COLO=3 PRUN=1 | Avg=1.9
- Strengths:
  - Topics are grouped by section; tables (branching strategy selection, commit types) provide quick reference.
  - The conflict resolution section is the most actionable part.
- Weaknesses:
  - Extreme sprawl (716 lines); Git configuration, gitignore patterns, stash commands, and semantic versioning are sediment — general knowledge that adds nothing a model doesn't already know (no-ops throughout).
  - Description is a content index, not a trigger; "When to Activate" duplicates it — duplication on top of sediment.
- Top fix: Cut the Git Configuration, Gitignore Patterns, and Quick Reference sections entirely (all no-ops or sediment); disclose Branching Strategies and Release Management to separate files; rewrite description as a trigger.

---

## google-workspace-ops
- Type: model-invoked
- Length: ~97 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 COLO=4 DISC=4 LEAD=3 PRUN=3 | Avg=3.6
- Strengths:
  - Description is tight and action-oriented; "Operate" front-loads intent and the five distinct use-case branches are genuinely different.
  - Workflow steps are ordered logically; output format template co-located directly after the workflow.
- Weaknesses:
  - "Good Use Cases" section at the end duplicates the description trigger examples — duplication.
  - "Keep the working system clean" step (step 4) lacks a checkable completion criterion; the agent can declare it done without surfacing all duplicates.
- Top fix: Delete "Good Use Cases" section and sharpen the step 4 completion criterion to something checkable ("surface every duplicate, stale, or canonical candidate before declaring clean").

---

## Group summary
- Avg score: 2.9
- Common patterns:
  - "When to Activate" sections inside the body duplicate description triggers in 7 of 10 skills — the single most pervasive duplication pattern in the group.
  - Reference-heavy skills carry severe sprawl with no progressive disclosure (git-workflow at 716 lines, frontend-patterns at 658 lines, flutter-dart-code-review at 436 lines).
  - Descriptions enumerate content categories instead of trigger-phrasing; most fail the leading-word test for reliable invocation.
- Most-needed fixes:
  - Delete "When to Activate" from every body that has one — it is always a duplication of the description.
  - Apply progressive disclosure to any reference skill over ~200 lines: identify branch-specific sections and push them behind named context pointers.
  - Audit descriptions for trigger phrasing vs. content enumeration; replace enumerations with "Use when…" trigger clauses anchored to a leading word.
