/** React rules */
export const RULE_REACT = `## React Standards
- Functional components + hooks only — no class components
- Custom hooks in hooks/ for any logic shared across 2+ components
- Co-locate state as close to usage as possible
- useCallback for stable callbacks passed to children
- Suspense + lazy() for route-level code splitting
- Never use index as key when list can reorder`;
