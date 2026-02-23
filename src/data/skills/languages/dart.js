/** Dart agent skill — Universal Skill Standard (7 parts). */
export const SKILL_DART = {
  metadata: { name: "Dart", version: "1.0", author: "ai-context", tags: ["dart", "language"] },
  trigger: "When suggesting or generating code in Dart.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use null safety and final/const; follow Effective Dart.",
    "Follow the Dart rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not use late without justification.", "Do not skip analysis_options."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Dart rules and idioms above.",
    },
  ],
};
