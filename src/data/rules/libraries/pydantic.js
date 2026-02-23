/** Pydantic rules */
export const RULE_PYDANTIC = `## Pydantic
- Use for all request/response and config; no raw dicts at boundaries
- Prefer \`model_validate\` and \`model_dump\`; use \`ConfigDict\` for strictness
- Document fields with \`Field(description=...)\` for public APIs`;
