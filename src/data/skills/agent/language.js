/**
 * Agent skills for Language step — applied when generating rules for selected language.
 * Key = language id; value = optional extra instructions for the AI agent.
 */

export const SKILLS_AGENT_BY_LANGUAGE = {
  typescript:
    "- When suggesting code, prefer TypeScript idioms: strict types, discriminated unions, and type-safe APIs.",
  javascript: "- When suggesting code, use modern ES idioms: ESM, async/await, optional chaining.",
  python:
    "- When suggesting code, follow PEP 8 and use type hints; prefer standard library and well-known packages.",
  go: "- When suggesting code, use Go idioms: explicit error handling, context.Context, table-driven tests.",
  rust: "- When suggesting code, prefer ownership and borrowing; avoid unnecessary clone; use Result and Option.",
  // Add more per language as needed; omit key if no extra skill.
};
