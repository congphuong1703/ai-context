/** Refactor prompt template */
export const TEMPLATE_REFACTOR = `### REFACTOR
\`\`\`
Refactor @[filename] to improve [readability/testability/performance].

Hard constraints:
- Do NOT change the public API
- All existing tests must still pass
- Every change must comply with @{filename}

For each change: show before → after → explain WHY.
\`\`\``;
