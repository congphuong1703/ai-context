/** kebab-case agent skill — Universal Skill Standard (7 parts). */
export const SKILL_KEBAB = {
  metadata: {
    name: "Skill: kebab-case",
    version: "1.0",
    author: "ai-context",
    tags: ["kebab", "convention"],
  },
  trigger: "When using or suggesting code for kebab-case.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: ["Use kebab-case for file names, URLs, and package names in generated code."],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Follow the kebab-case rules section above."],
  examples: [],
};
