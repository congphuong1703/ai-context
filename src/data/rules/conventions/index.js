/**
 * Rules by naming convention + fallback when none selected.
 */

export const RULES_BY_CONVENTION = {
  camel: `## Naming: camelCase
- Variables, functions, methods: \`getUserById\`, \`isActive\`
- Files/components may use PascalCase per language; variables always camelCase`,

  snake: `## Naming: snake_case
- Variables, functions, DB columns, env vars: \`user_id\`, \`get_user_by_id\`
- Use consistently for the whole project`,

  pascal: `## Naming: PascalCase
- Classes, types, components, interfaces: \`UserProfile\`, \`ApiResponse\`
- Use for all public types and component names`,

  kebab: `## Naming: kebab-case
- File names, URLs, package names: \`user-profile.tsx\`, \`api-response\`
- Use for all file and route names`,
};

export const RULES_CONVENTION_FALLBACK = `## Naming & style
- Follow existing project naming and style conventions.
- If the project has ESLint/Prettier config, prefer following it.`;
