/** Code review prompt template */
export const TEMPLATE_REVIEW = `### CODE REVIEW
\`\`\`
Review @[filename] against @{filename}.

For each violation:
1. Line reference + the problematic code
2. Which rule it violates
3. Corrected version

Also check:
- Missing error handling
- Security vulnerabilities
- Performance issues
- Missing test coverage
\`\`\``;
