/** JavaScript rules */
export const RULE_JAVASCRIPT = `## JavaScript Standards
- ESM imports exclusively — no require() or CommonJS
- \`const\` by default; \`let\` only when reassignment is required
- async/await over Promise chains
- Handle all rejections — no floating Promises
- Optional chaining (?.) and nullish coalescing (??) over manual null checks`;
