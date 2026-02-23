/** Implement feature prompt template */
export const TEMPLATE_IMPLEMENT = `### IMPLEMENT FEATURE
\`\`\`
Read @{filename} completely before writing any code.

Task: Implement [FEATURE NAME]
Context: @[relevant file 1] @[relevant file 2]

Requirements:
- [requirement 1]
- [requirement 2]

Edge cases to handle:
- [null/empty input]
- [unauthorized access]
- [rate limit / timeout]

Deliverables:
- Full file path before each code block
- Unit tests in [test/directory]
- Brief explanation of each architectural decision
\`\`\``;
