/**
 * UI & styling rules (Shadcn + Tailwind). Applied when user selects tailwind/shadcn.
 */

export const RULES_UI_STYLING = `## 🎨 UI & STYLING (Shadcn + Tailwind)
- Use shadcn/ui components from \`@/components/ui\` — do not reinvent buttons, dialogs, forms
- Use \`cn()\` from \`@/lib/utils\` for all className merging (clsx + tailwind-merge)
- Tailwind only: utility-first, no custom CSS unless necessary; use \`@apply\` sparingly
- Prefer Tailwind tokens: \`bg-background\`, \`text-foreground\`, \`border-border\`, \`rounded-lg\`
- New components: add to \`components/ui\` with \`npx shadcn@latest add [component]\` when possible
- Responsive: mobile-first (\`sm:\`, \`md:\`, \`lg:\`) and dark mode via \`dark:\` when applicable`;
