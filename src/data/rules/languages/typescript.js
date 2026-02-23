/** TypeScript rules */
export const RULE_TYPESCRIPT = `## TypeScript Configuration
- tsconfig: "strict": true — mandatory, no exceptions
- Never use \`any\` → use \`unknown\` and type-narrow explicitly
- \`interface\` for object shapes; \`type\` for unions/intersections/mapped types
- Runtime validation: Zod at every external boundary (API, forms, env)
- Avoid enums → \`as const\` with \`keyof typeof\`
- Discriminated unions for state modeling`;
