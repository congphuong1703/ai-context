/** PascalCase agent skill — Universal Skill Standard (7 parts). */
export const SKILL_PASCAL = {
  metadata: {
    name: "Skill: PascalCase",
    version: "1.0",
    author: "ai-context",
    tags: ["pascal", "convention"],
  },
  trigger: "When using or suggesting code for PascalCase.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: ["Use PascalCase for classes, types, and component names in generated code."],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Follow the PascalCase rules section above."],
  examples: [],
};
