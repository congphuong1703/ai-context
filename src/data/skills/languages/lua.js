/** Lua agent skill — Universal Skill Standard (7 parts). */
export const SKILL_LUA = {
  metadata: { name: "Lua", version: "1.0", author: "ai-context", tags: ["lua", "language"] },
  trigger: "When suggesting or generating code in Lua.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use local for all variables; document table shapes; avoid globals.",
    "Follow the Lua rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not use globals.", "Do not omit module table documentation."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Lua rules and idioms above.",
    },
  ],
};
