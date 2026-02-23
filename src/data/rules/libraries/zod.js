/** Zod rules */
export const RULE_ZOD = `## Zod
- Validate at every external boundary: API responses, forms, env
- Prefer \`.safeParse\` and handle both branches; use \`.parse\` only when failure is unrecoverable
- Export inferred types: \`type T = z.infer<typeof schema>\``;
