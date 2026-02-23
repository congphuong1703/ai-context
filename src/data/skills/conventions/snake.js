/** snake_case agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SNAKE = {
  metadata: {
    name: "Skill: snake_case",
    version: "1.0",
    author: "ai-context",
    tags: ["snake", "convention"],
  },
  trigger: "When using or suggesting code for snake_case.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: ["Use snake_case for variables, functions, and file names where applicable."],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Follow the snake_case rules section above."],
  examples: [],
};
