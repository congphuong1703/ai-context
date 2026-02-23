/** shadcn/ui rules */
export const RULE_SHADCN = `## shadcn/ui
- Use components from \`@/components/ui\` — do not reinvent buttons, dialogs, forms
- Use \`cn()\` from \`@/lib/utils\` for all className merging (clsx + tailwind-merge)
- Add new components with \`npx shadcn@latest add [component]\` when possible
- Keep variants and composition; do not inline one-off styles that belong in the component`;
