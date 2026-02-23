/** Tailwind CSS agent skill — Universal Skill Standard (7 parts). */
export const SKILL_TAILWIND = {
  metadata: {
    name: "Tailwind CSS",
    version: "1.0",
    author: "ai-context",
    tags: ["tailwind", "css", "ui"],
  },
  trigger: "When writing or reviewing Tailwind CSS classes and styling.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use utility classes directly — no inline styles, no custom CSS unless Tailwind cannot achieve it.",
    "Extract repeated class combinations into components — not @apply.",
    "Design mobile-first: base styles for mobile, then sm: md: lg: xl: breakpoints.",
    "Use cn() (clsx + tailwind-merge) for all conditional class merging.",
    "Define brand tokens in tailwind.config — avoid arbitrary values ([value]) for recurring sizes.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use inline style={{ }} when a Tailwind utility class exists.",
    "Do not use @apply to extract component styles — extract a React/Vue component instead.",
    "Do not write arbitrary values like w-[347px] for values that appear more than once — add to config.",
    "Do not mix Tailwind with a CSS-in-JS library in the same component.",
  ],
  examples: [
    {
      input: "User wants a button with hover and focus states.",
      output:
        "<button className={cn(\n  'px-4 py-2 rounded-md font-medium transition-colors',\n  'bg-blue-600 text-white hover:bg-blue-700',\n  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',\n  { 'opacity-50 cursor-not-allowed': disabled }\n)}>Submit</button>",
    },
  ],
};
