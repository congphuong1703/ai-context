/**
 * ESLint and Prettier rule blocks (required vs optional).
 */

export const RULES_ESLINT_PRETTIER = {
  eslintRequired: `## 📏 ESLint (REQUIRED)
- Project ESLint config is MANDATORY. All generated code MUST pass \`npm run lint\`.
- Do NOT disable or override rules without a comment and ticket reference.
- Fix on save; run \`npm run lint\` before every commit.`,
  eslintOptional: `## 📏 ESLint (optional)
- If project has ESLint, prefer following it; no strict requirement.`,
  prettierRequired: `## 📏 Prettier (REQUIRED)
- Project \`.prettierrc\` is MANDATORY. All generated code MUST pass \`npm run format:check\`.
- Format on save; run \`npm run format\` before every commit.
- Do not commit unformatted code.`,
  prettierOptional: `## 📏 Prettier (optional)
- If project has Prettier, prefer following it; no strict requirement.`,
};
