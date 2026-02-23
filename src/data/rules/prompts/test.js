/** Write tests prompt template */
export const TEMPLATE_TEST = `### WRITE TESTS
\`\`\`
Write comprehensive tests for @[filename].

Cover:
- Happy path with realistic data
- Null, empty, and boundary value inputs
- All error branches
- Async/concurrent behavior if applicable

Naming pattern: "should [expected] when [condition]"
Place tests in: [test/directory]
\`\`\``;
