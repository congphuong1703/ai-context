/**
 * PERFORMANCE — universal foundation.
 * Applies to all languages and stacks.
 */

export const RULES_PERFORMANCE = `## ⚡ PERFORMANCE
- Measure before optimizing; avoid premature optimization.
- Prefer batch operations over N+1 or per-item I/O where possible.
- Cache only when proven necessary; set explicit TTL and invalidation.
- Avoid blocking the main thread; offload heavy work when appropriate.
- Resource cleanup: close connections, release handles, cancel timers.`;
