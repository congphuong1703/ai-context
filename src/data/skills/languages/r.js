/** R agent skill — Universal Skill Standard (7 parts). */
export const SKILL_R = {
  metadata: { name: "R", version: "1.0", author: "ai-context", tags: ["r", "language"] },
  trigger: "When suggesting or generating code in R.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use tidyverse when it helps; one job per function; pipe for readability.",
    "Follow the R rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not skip namespaces (package::function) in scripts.",
    "Do not write long scripts without functions.",
  ],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following R rules and idioms above.",
    },
  ],
};
