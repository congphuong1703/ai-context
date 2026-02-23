/** camelCase agent skill — Universal Skill Standard (7 parts). */
export const SKILL_CAMEL = {
  metadata: {
    name: "Skill: camelCase",
    version: "1.0",
    author: "ai-context",
    tags: ["camel", "convention"],
  },
  trigger: "When using or suggesting code for camelCase.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: ["Use camelCase for variables, functions, and methods in generated code."],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Follow the camelCase rules section above."],
  examples: [],
};
