/**
 * Universal agent skill — applied to every generated rules file.
 * Đủ 7 thành phần theo Universal Skill Standard.
 */

export const UNIVERSAL_SKILL = {
  metadata: {
    name: "Universal AI coding skill",
    version: "1.0",
    author: "ai-context",
    tags: ["universal", "coding", "rules"],
  },
  trigger:
    "When the user asks for code changes, new features, refactors, debugging, or code review; or when starting any multi-file or architectural task.",
  prerequisites:
    "Read this rules file completely. Check language/framework/library sections above that match the project.",
  process: [
    "Understand the request and the relevant part of the codebase.",
    "Plan steps (and optionally ask for confirmation if ambiguous).",
    "Generate or edit code following the rules in this file.",
    "Preserve existing style and patterns unless the task is to change them.",
    "Summarize what was done and any follow-up the user should take.",
  ],
  output:
    "Code and file changes that follow this file's rules; a brief summary of changes and any next steps.",
  constraints: [
    "Do not invent new dependencies without explicit user request.",
    "Do not skip reading the rules file for large or multi-file tasks.",
    "Do not ignore project naming, style, or framework conventions defined above.",
  ],
  examples: [
    {
      input: "User: Add a login API endpoint.",
      output:
        "Code for the endpoint following framework rules (e.g. Controller + validation + DTO); summary of files added/changed and how to test.",
    },
    {
      input: "User: Refactor this component.",
      output:
        "Refactored code that keeps the same API and passes tests; before/after or summary of changes.",
    },
  ],
};
