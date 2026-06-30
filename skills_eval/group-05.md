# Group 05 Evaluation

## graphify
- Type: model-invoked
- Length: ~617 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=3 DISC=4 LEAD=3 COLO=4 PRUN=2 | Avg=3.4
- Strengths:
  - Progressive disclosure is well-executed: platform-specific flows (GitHub clone, transcription, update, exports) are behind context pointers in `references/`.
  - Steps are ordered and logically separated, with a clear fast-path branch for existing graphs.
- Weaknesses:
  - Sprawl: the `## What graphify is for` section repeats the description verbatim; the `--html` flag entry in the Usage block documents a no-op ("this flag is a no-op").
  - No strong leading word anchoring behavior throughout the body; "corpus" and "extraction" are used but accumulate no behavioral weight.
- Top fix: Delete `## What graphify is for` (duplication of description) and the `--html` no-op line from Usage.

---

## grill-with-docs
- Type: model-invoked
- Length: ~88 lines
- Scores: INV=4 DESC=4 HIER=3 COMP=2 DISC=3 LEAD=4 COLO=4 PRUN=3 | Avg=3.4
- Strengths:
  - "Grilling" is a strong leading word, front-loaded in the description and carried through the behavioral rules.
  - Each behavioral rule ("Challenge against the glossary," "Sharpen fuzzy language") is well co-located and distinct.
- Weaknesses:
  - No completion criterion: "until we reach a shared understanding" is vague and invites premature completion — the skill has no checkable signal for when the grilling is done.
  - XML wrapper tags (`<what-to-do>`, `<supporting-info>`) add structural noise without contributing to the information hierarchy.
- Top fix: Add a completion criterion to the interview step — e.g., "every term the user used in their plan is either validated against the glossary or canonicalized; stop when no unresolved terms remain."

---

## handoff
- Type: user-invoked
- Length: ~17 lines
- Scores: INV=5 DESC=4 HIER=4 COMP=3 DISC=3 LEAD=3 COLO=4 PRUN=4 | Avg=3.8
- Strengths:
  - Invocation choice is correct: user-invoked, zero context load, human-facing description.
  - Exceptionally concise; no sediment, no duplication.
- Weaknesses:
  - Completion criterion is implicit: "write a handoff document" has no exhaustiveness bar (what must it cover to be complete?).
  - "Suggested skills" section is mentioned but the criterion for which skills qualify is left to inference.
- Top fix: Add one sentence stating what a complete handoff document must contain — e.g., "The document is complete when it covers: current state, outstanding decisions, next steps, and relevant artifact references."

---

## homelab-network-readiness
- Type: model-invoked
- Length: ~170 lines
- Scores: INV=4 DESC=3 HIER=4 COMP=4 DISC=3 LEAD=3 COLO=4 PRUN=3 | Avg=3.5
- Strengths:
  - Pure reference skill that uses the review-checklist pattern well: the checklist at the end provides an exhaustiveness bar ("every item checked before recommending changes").
  - "Staged migration plan" and "rollback" are good leading words that anchor safety behavior.
- Weaknesses:
  - Description is a feature list ("VLAN segmentation, local DNS filtering, WireGuard-style remote access…") rather than trigger phrasing; the trigger "before changing router, firewall, DHCP, or VPN configuration" is buried at the end.
  - Overlaps with `homelab-network-setup` on VLAN trust zones and DNS setup — duplication across skills.
- Top fix: Rewrite description to front-load the trigger: "Pre-change readiness checklist — use before any homelab topology change (VLAN, DNS, VPN, firewall) to inventory risks and stage the rollback path."

---

## homelab-network-setup
- Type: model-invoked
- Length: ~130 lines
- Scores: INV=3 DESC=2 HIER=4 COMP=3 DISC=3 LEAD=2 COLO=4 PRUN=3 | Avg=3.0
- Strengths:
  - Well-structured reference: device-role separation, IP plan, DHCP/DNS, cabling, and worked examples are cleanly co-located under their headings.
  - Concrete IP plan example (`192.168.10.0/24`, `home.arpa`) gives the agent a concrete template to work from.
- Weaknesses:
  - Description ("Practical home and homelab network planning for gateways, switches…") is a topic list, not trigger phrasing; "Practical" is a weak leading word.
  - No leading word that accumulates behavioral weight — "VLAN-ready" is used once in the examples but nowhere else.
- Top fix: Replace the description with trigger phrasing: "Network planning reference — use when designing a new home or homelab network, choosing gateway/switch roles, or preparing for future VLANs and segmentation."

---

## homelab-pihole-dns
- Type: model-invoked
- Length: ~276 lines
- Scores: INV=3 DESC=2 HIER=4 COMP=3 DISC=2 LEAD=2 COLO=4 PRUN=2 | Avg=2.8
- Strengths:
  - Co-location is good: Installation, Blocklist Management, DoH, Local DNS Records, and Troubleshooting are each under their own heading.
  - Troubleshooting section has concrete, checkable commands.
- Weaknesses:
  - Sprawl: "How Pi-hole Works" section (ASCII diagram + paragraph) restates what the description covers; "When to Use" duplicates the description; "Best Practices" and "Anti-Patterns" cover overlapping ground — sediment risk.
  - Description is a capability list without trigger phrasing or a front-loaded leading word.
- Top fix: Delete "How Pi-hole Works" and fold its one load-bearing fact (DNS interception model) into the Installation section; merge Best Practices into Anti-Patterns as a single "Do/Don't" reference.

---

## homelab-vlan-segmentation
- Type: model-invoked
- Length: ~313 lines
- Scores: INV=3 DESC=2 HIER=3 COMP=3 DISC=2 LEAD=2 COLO=4 PRUN=2 | Avg=2.6
- Strengths:
  - Platform-specific configs (UniFi, pfSense/OPNsense, MikroTik) are co-located under separate headings, making the right section easy to reach.
  - The worked example (3-bedroom house scenario) grounds abstract VLAN rules in concrete port assignments.
- Weaknesses:
  - Sprawl: at 313 lines, three platform-specific config blocks (UniFi, pfSense, MikroTik) could be disclosed behind context pointers keyed by platform — only the branch a user actually needs is loaded.
  - Description is a topic list; no leading word front-loaded; "isolation" is the core concept but never used as an anchoring term in the body.
- Top fix: Disclose the three platform config blocks to `platforms/unifi.md`, `platforms/pfsense.md`, and `platforms/mikrotik.md`, keeping only the VLAN design template and examples inline.

---

## homelab-wireguard-vpn
- Type: model-invoked
- Length: ~307 lines
- Scores: INV=3 DESC=2 HIER=3 COMP=3 DISC=2 LEAD=3 COLO=4 PRUN=2 | Avg=2.8
- Strengths:
  - "Split tunnel" is a strong leading concept, used consistently with concrete `AllowedIPs` examples that make the distinction actionable.
  - Key generation Python helpers are co-located and self-contained.
- Weaknesses:
  - Sprawl: "How WireGuard Works" introduction and "When to Use" both duplicate the description — sediment pattern.
  - pfSense/OPNsense block and DDNS section could be disclosed behind context pointers; they are separate branches that most runs will not need.
- Top fix: Remove "How WireGuard Works" (no-op for an agent that already knows WireGuard) and "When to Use" (duplicates description); disclose pfSense and DDNS sections behind context pointers.

---

## improve-codebase-architecture
- Type: model-invoked
- Length: ~82 lines
- Scores: INV=4 DESC=4 HIER=4 COMP=3 DISC=4 LEAD=5 COLO=4 PRUN=3 | Avg=3.9
- Strengths:
  - Leading words ("deepening," "seam," "depth," "locality," "leverage," "deletion test") are the strongest in the group — each recruits a precise prior and anchors a region of behavior.
  - Progressive disclosure is well-used: LANGUAGE.md, HTML-REPORT.md, INTERFACE-DESIGN.md, ADR-FORMAT.md, and CONTEXT-FORMAT.md are all behind context pointers, keeping SKILL.md readable.
- Weaknesses:
  - The inline glossary partially duplicates LANGUAGE.md — the same terms appear in both places; a single context pointer to LANGUAGE.md would eliminate the duplication.
  - Step 3 (grilling loop) has no completion criterion; "as decisions crystallize" is not checkable.
- Top fix: Remove the inline glossary block and replace it with a single pointer: "All terms are defined in [LANGUAGE.md](LANGUAGE.md) — read it before exploring."

---

## lead-intelligence
- Type: model-invoked
- Length: ~322 lines
- Scores: INV=3 DESC=3 HIER=3 COMP=2 DISC=2 LEAD=3 COLO=3 PRUN=2 | Avg=2.6
- Strengths:
  - The five-stage pipeline gives clear ordering; "warm path" is a useful leading concept used consistently.
  - Channel rules are well co-located and provide distinct, actionable guidance per channel.
- Weaknesses:
  - Premature completion risk: no stage has a checkable completion criterion — "Stage 1: Signal Scoring" has no done signal (how many leads? what score threshold?).
  - Sprawl: "When to Activate" duplicates the description; the "social-graph-ranker canonical rule" text block is oddly placed inside the Mutual Ranking output format section, fragmenting co-location; the Example Usage section adds no behavioral content.
- Top fix: Add a completion criterion to each stage (e.g., Stage 1: "complete when at least N scored prospects are in the list with all six signal fields populated"); delete "When to Activate" (duplication) and "Example Usage" (no-op).

---

## Group summary
- Avg score: 3.2
- Common patterns:
  - Descriptions across the homelab cluster (network-setup, pihole-dns, vlan-segmentation, wireguard-vpn) are capability lists rather than trigger phrasing — none front-load a leading word.
  - "When to Use" sections throughout the group duplicate the description, adding no behavioral content (no-op sediment).
  - Progressive disclosure is underused in the homelab skills: platform-specific config blocks (UniFi, pfSense, MikroTik, Linux) are all inline despite being single-branch material.
- Most-needed fixes:
  - Replace description capability lists with trigger phrasing front-loaded with a leading word (affects all homelab skills and lead-intelligence).
  - Add checkable completion criteria to skills with steps: grill-with-docs, handoff, lead-intelligence — vague bounds invite premature completion.
  - Disclose platform-specific reference blocks in homelab-vlan-segmentation and homelab-wireguard-vpn; delete "How X Works" intros that are no-ops for the agent.
