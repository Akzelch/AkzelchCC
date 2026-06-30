# Group 02 Evaluation

## brand-voice
- Type: model-invoked
- Length: ~99 lines
- Scores: INV=4 DESC=4 HIER=3 COMP=2 DISC=4 LEAD=2 COLO=3 PRUN=3 | Avg=3.1
- Strengths:
  - Disclosed schema behind a context pointer (`references/voice-profile-schema.md`), keeping the body lean.
  - Hard Bans section is concrete and checkable — the agent knows exactly what to delete.
- Weaknesses:
  - No completion criterion on the Collection Workflow steps; the agent can declare a VOICE PROFILE done after minimal sampling (premature completion).
  - No pretrained leading word anchors behaviour; "voice profile" and "VOICE PROFILE" are domain coinage with no prior recruitment.
- Top fix: Add a completion criterion to the Collection Workflow (e.g., "Every dimension in the VOICE PROFILE schema has at least two source examples confirming it") and find a pretrained anchor — _fingerprint_, _distillation_, or _archetype_ — to replace the coined term.

---

## browser-qa
- Type: model-invoked
- Length: ~106 lines
- Scores: INV=3 DESC=2 HIER=4 COMP=4 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.3
- Strengths:
  - "blast radius" is a strong pretrained leading word that anchors the safety constraint precisely.
  - Four-phase workflow gives ordered steps with checkable end states; the SHIP/DO NOT SHIP/INCONCLUSIVE verdict is a clean completion criterion.
- Weaknesses:
  - Description opens with "Use this skill to…" — a no-op opener that buries the leading word and wastes invocation tokens.
  - "When to Use" section duplicates the description's trigger territory (duplication).
- Top fix: Rewrite the description to front-load the leading concept: "Automated browser QA — smoke test, interaction test, visual regression, and accessibility across pages. Use after deploying…"

---

## bun-runtime
- Type: model-invoked
- Length: ~86 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=4 LEAD=3 COLO=4 PRUN=4 | Avg=3.8
- Strengths:
  - Lean, well-structured pure reference; sections map cleanly to distinct concerns (runtime, package manager, bundler, test runner).
  - Description front-loads "Bun" and lists distinct branches without duplicating body content.
- Weaknesses:
  - "Best Practices" section is three thin bullets that barely surpass the model's default; low legwork demand.
  - No pretrained leading word anchors the choice heuristic — "prefer Bun / prefer Node" guidance reads as prose rather than a principled decision rule.
- Top fix: Strengthen the "Best Practices" section with a checkable completion bar or merge it into "When to Use"; the current three lines do not change behaviour beyond the default.

---

## caveman
- Type: model-invoked
- Length: ~50 lines
- Scores: INV=5 DESC=5 HIER=4 COMP=4 DISC=4 LEAD=5 COLO=4 PRUN=5 | Avg=4.5
- Strengths:
  - "caveman" is an exemplary leading word — recruits deep pretraining priors about terse, stripped speech with no additional definition cost.
  - Description lists every concrete trigger phrase; body is pruned to near zero sediment or no-ops.
- Weaknesses:
  - Auto-Clarity Exception section could use a tighter completion boundary — "resume caveman after clear part done" is slightly fuzzy (what counts as "done"?).
  - Persistence rule "Still active if unsure" is a mild no-op; the leading word already implies persistence.
- Top fix: Replace "Still active if unsure" with the actual uncertainty signal that would tempt the agent to revert, so the rule changes behaviour rather than restating intent.

---

## code-tour
- Type: model-invoked
- Length: ~238 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=4 DISC=3 LEAD=2 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Step 5 "Validate" has a genuinely exhaustive completion criterion (every path, every anchor, coherent story) — resists premature completion well.
  - Persona-to-depth table co-locates inference guidance with the step that needs it.
- Weaknesses:
  - SMIG acronym is coined with no pretrained prior; the agent must carry the definition cost on every run (no leading word payoff).
  - At 238 lines, the Step Types section (five JSON examples) and Anti-Patterns table push toward sprawl; both could be disclosed behind a context pointer.
- Top fix: Disclose the Step Types + Anti-Patterns section to a `STEP-TYPES.md` file and replace SMIG with a pretrained framing (_STAR_, _situation-action-result_, or a journalism-style _lede_) that recruits existing priors.

---

## codebase-design
- Type: model-invoked
- Length: ~115 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=5 LEAD=5 COLO=4 PRUN=3 | Avg=4.0
- Strengths:
  - Exemplary leading words: "deep modules," "seam" (Feathers), "adapter," "depth," "leverage," "locality" — all pretrained or carefully coined with tight definitions.
  - Progressive disclosure is textbook: two disclosed files (DEEPENING.md, DESIGN-IT-TWICE.md) keep the main file lean while preserving reach to advanced material.
- Weaknesses:
  - "Relationships" section at the end restates content already given in the Glossary, creating duplication across two places in the same file.
  - Legwork demand is implicit; a reference skill this rich would benefit from an explicit "every term applied" bar so the agent doesn't skim.
- Top fix: Delete the "Relationships" section (or collapse it to a one-line pointer) — the Glossary already defines every link it draws.

---

## codebase-onboarding
- Type: model-invoked
- Length: ~235 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=2 | Avg=3.3
- Strengths:
  - "reconnaissance" is a well-chosen leading word for Phase 1 — military prior of gather-before-act transfers cleanly.
  - Four-phase workflow gives a clear ordered structure; phases map to distinct concerns.
- Weaknesses:
  - Output templates in Phase 4 are sprawl: long Markdown templates with embedded HTML comment guidance bloat the file to 235 lines and are candidates for a disclosed `TEMPLATES.md`.
  - "Examples" section at end (lines 220–233) recaps the workflow already described — sediment; the three scenarios add little beyond what the phases already cover.
- Top fix: Disclose the two output templates (Onboarding Guide + Starter CLAUDE.md) to a `TEMPLATES.md` file and add a context pointer; remove the Examples section entirely.

---

## coding-standards
- Type: model-invoked
- Length: ~552 lines
- Scores: INV=3 DESC=3 HIER=2 COMP=2 DISC=1 LEAD=3 COLO=4 PRUN=1 | Avg=2.4
- Strengths:
  - PASS/FAIL labels on code examples are effective within-file anchors — concrete and scannable.
  - Within-section co-location is strong; each standard has its good/bad examples immediately adjacent.
- Weaknesses:
  - Critical sprawl (552 lines) with no progressive disclosure — violates the 400-line guideline and duplicates `rules/common/coding-style.md` extensively.
  - Internal contradiction: "Scope Boundaries" says not to use this skill for React or API design, yet the file contains large React Best Practices and API Design Standards sections (duplication + hierarchy failure).
- Top fix: Remove the React Best Practices, API Design Standards, and Performance Best Practices sections (they belong in `frontend-patterns` / `backend-patterns`); disclose the remaining code examples to a `EXAMPLES.md` file so the main file is under 150 lines.

---

## config-gc
- Type: model-invoked
- Length: ~121 lines
- Scores: INV=5 DESC=5 HIER=4 COMP=3 DISC=4 LEAD=5 COLO=4 PRUN=3 | Avg=4.1
- Strengths:
  - "Garbage collection" / "GC" is an outstanding leading word — recruits deep GC priors (scan, mark, sweep, reclaim) and the human-in-the-loop twist is the only novelty the skill must define.
  - Description lists exact trigger phrases ("clean up my config", "config GC", "my .claude is bloated") with no wasted tokens.
- Weaknesses:
  - "When to Activate" body section largely duplicates the description triggers (duplication).
  - Design Philosophy (6 principles) overlaps with Workflow (step 3: "per-item confirm") and Anti-Patterns (no bulk approval) — the same safety rule stated in three places.
- Top fix: Delete "When to Activate" from the body (it mirrors the description); collapse the Design Philosophy and Anti-Patterns overlap into a single "Safety rules" block.

---

## context-budget
- Type: model-invoked
- Length: ~137 lines
- Scores: INV=3 DESC=3 HIER=4 COMP=4 DISC=4 LEAD=3 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Phase 4 report template is a checkable, exhaustive completion criterion — the agent cannot declare done until it produces the named sections.
  - The four-phase structure maps cleanly to a single pass; steps and reference are correctly separated.
- Weaknesses:
  - Description does not list the trigger phrases that actually fire this skill ("session sluggish", "context window", "how much context headroom") — those live only in the body's "When to Use" section, weakening invocation reliability.
  - "When to Use" in the body then becomes a duplication of what the description should carry.
- Top fix: Move the trigger phrases from "When to Use" into the description and delete the "When to Use" section from the body; the description is the canonical trigger list.

---

## Group summary
- Avg score: 3.6
- Common patterns:
  - Nearly every skill carries a "When to Use" / "When to Activate" section that duplicates the description triggers — this is the most widespread duplication pattern in the group.
  - Leading words are inconsistently used: the best skills (caveman, codebase-design, config-gc) anchor on strong pretrained concepts; the weaker ones (brand-voice, coding-standards, code-tour) coin terms without recruiting priors.
  - Completion criteria are absent or vague on step-based skills; most workflows end without a checkable bar, inviting premature completion.
- Most-needed fixes:
  - Eliminate "When to Use" body sections that mirror the description; consolidate trigger knowledge into the description as the single source of truth.
  - Address sprawl in `coding-standards` (552 lines) and `codebase-onboarding` (235 lines) via progressive disclosure — disclose inline templates and examples to sibling files.
  - Add explicit, checkable completion criteria to each step in workflow skills (brand-voice, codebase-onboarding, context-budget) to close the premature-completion vulnerability.
