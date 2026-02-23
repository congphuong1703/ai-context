/**
 * Agent skills for Library step — Tailwind, shadcn, Zod, etc.
 */

export const SKILLS_AGENT_BY_LIBRARY = {
  tailwind:
    "- When styling: use Tailwind utilities only; prefer design tokens over arbitrary values.",
  shadcn:
    "- When building UI: use existing shadcn components from @/components/ui; add via npx shadcn@latest add when missing.",
  zod: "- At boundaries: validate with Zod; export inferred types; handle parse errors explicitly.",
  "react-query":
    "- For server state: use TanStack Query; avoid manual loading flags and duplicate fetches.",
  zustand: "- For client state: use Zustand slices; keep stores small and focused.",
  pydantic: "- In Python: use Pydantic for all structured I/O; no raw dicts at API boundaries.",
  pytest:
    "- For tests: use pytest fixtures and parametrize; one logical assertion per test when possible.",
  black: "- Format Python with Black; do not suggest code that breaks Black.",
  ruff: "- Lint and format Python with Ruff; suggest fixes that pass Ruff.",
};
