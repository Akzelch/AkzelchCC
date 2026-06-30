---
name: motion-ui
description: "Production-ready UI motion system for React/Next.js. Use when implementing animations, transitions, or motion patterns."
metadata:
  origin: ECC
---

# Motion System v4.2

Production-ready UI motion system for React / Next.js.

Focused on **performance, accessibility, and usability** — not decoration.

## When to Use

Use this motion system when motion:

* Guides attention (e.g., onboarding, key actions)
* Communicates state (loading, success, error, transitions)
* Preserves spatial continuity (layout changes, navigation)

### Appropriate Scenarios

* Interactive components (buttons, modals, menus)
* State transitions (loading → loaded, open → closed)
* Navigation and layout continuity (shared elements, crossfade)

### Considerations

* **Accessibility**: Always support reduced motion
* **Device adaptation**: Adjust for low-end devices
* **Performance trade-offs**: Prefer responsiveness over visual smoothness

### Avoid Using Motion When

* It is purely decorative
* It reduces usability or clarity
* It impacts performance negatively

---

## Foundations and Patterns

This skill scopes to **device adaptation, debugging, and QA**. Everything else has moved to dedicated skills — load them first:

* **`motion-foundations`** — tokens, springs, `useReducedMotion`, `useSafeMotion`, `motionConfig.shouldAnimate`, SSR safety, anti-patterns, the eight non-negotiable rules. Required reading before any motion work.
* **`motion-patterns`** — `AnimatePresence` contract, stagger, modal (with focus trap / scroll lock / Escape / ARIA), toast stack, page transitions, scroll reveal, scroll progress, expanding card, `layoutId` crossfade, accordion.

Do not redefine tokens, springs, or accessibility hooks here. Import from `motion-foundations`.

---

## Device Adaptation

The heuristic combines CPU core count **and** available memory for a more reliable signal than `hardwareConcurrency` alone. `deviceMemory` is available on Chrome/Android; the fallback covers Safari and Firefox.

```ts
const isLowEnd =
  typeof navigator !== "undefined" && (
    // Low memory (Chrome/Android only; undefined elsewhere → treat as capable)
    (navigator.deviceMemory !== undefined && navigator.deviceMemory <= 2) ||
    // Few cores AND no memory API (covers Safari/Firefox on weak hardware)
    (navigator.deviceMemory === undefined && navigator.hardwareConcurrency <= 4)
  )

const duration = isLowEnd ? 0.2 : 0.4
```

Use this in place of (or alongside) `motionConfig.shouldAnimate()` from `motion-foundations` when you need a finer-grained signal than reduced-motion + core-count.

---

## Debugging

Check:

* Wrong import (mixing `motion/react` and `framer-motion`)
* Missing `"use client"` directive in Next.js App Router
* Missing `key` prop on `AnimatePresence` children
* Hydration mismatch (initial state differs between SSR and client)
* `layout` prop misuse on large containers causing reflow jank
* State-driven animation not triggering (check dependency arrays)

---

## QA

* No CLS
* Keyboard works
* Focus trapped in modals
* ARIA roles correct (`role="dialog"`, `aria-modal="true"`)
* Reduced motion respected (`useReducedMotion` + CSS media query)
* No hydration warnings in Next.js
* Animations stop cleanly on unmount (no memory leaks)
* `AnimatePresence mode` set explicitly on all usage sites
