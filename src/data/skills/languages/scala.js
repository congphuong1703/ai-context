/** Scala agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SCALA = {
  metadata: { name: "Scala", version: "1.0", author: "ai-context", tags: ["scala", "language"] },
  trigger: "When suggesting or generating code in Scala.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Prefer immutability and Option/Either/Try; avoid null and var.",
    "Follow the Scala rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not use null.", "Do not use var when val is possible."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Scala rules and idioms above.",
    },
  ],
};
