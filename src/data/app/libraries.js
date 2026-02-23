/**
 * Libraries (Tailwind, shadcn, etc.) with optional agent rules.
 * languages: which language ids this lib applies to; null = all.
 */

export const LIBRARIES = [
  {
    id: "tailwind",
    label: "Tailwind CSS",
    desc: "Utility-first CSS, design tokens",
    languages: ["typescript", "javascript"], // frontend JS/TS
  },
  {
    id: "shadcn",
    label: "shadcn/ui",
    desc: "Components with Tailwind, copy-paste",
    languages: ["typescript", "javascript"],
  },
  {
    id: "zod",
    label: "Zod",
    desc: "Schema validation at boundaries",
    languages: ["typescript", "javascript"],
  },
  {
    id: "react-query",
    label: "TanStack Query",
    desc: "Server state, caching, mutations",
    languages: ["typescript", "javascript"],
  },
  {
    id: "zustand",
    label: "Zustand",
    desc: "Lightweight client state",
    languages: ["typescript", "javascript"],
  },
  {
    id: "pydantic",
    label: "Pydantic",
    desc: "Data validation and settings",
    languages: ["python"],
  },
  {
    id: "pytest",
    label: "pytest",
    desc: "Testing and fixtures",
    languages: ["python"],
  },
  {
    id: "black",
    label: "Black",
    desc: "Opinionated formatter",
    languages: ["python"],
  },
  {
    id: "ruff",
    label: "Ruff",
    desc: "Fast linter and formatter",
    languages: ["python"],
  },
];
