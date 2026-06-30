---
name: motion-ui
description: "Device adaptation, debugging, and QA checklists for motion/react work. Adds a deviceMemory-aware low-end heuristic, a hydration/import debugging checklist, and an accessibility/motion QA checklist on top of motion-foundations / motion-patterns / motion-advanced."
metadata:
  origin: ECC
---

# Motion UI — Device Adaptation, Debugging, QA

This skill assumes `motion-foundations`, `motion-patterns`, and `motion-advanced` are in scope. It only carries the three things those skills do not: a finer-grained low-end device heuristic, a debugging checklist, and a QA checklist.

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
