/** Swift agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SWIFT = {
  metadata: { name: "Swift", version: "1.0", author: "ai-context", tags: ["swift", "language"] },
  trigger: "When suggesting or generating code in Swift.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Prefer value types (struct, enum); use async/await and actors; avoid force unwrap.",
    "Follow the Swift rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not force unwrap.", "Do not use classes when struct/enum suffice."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Swift rules and idioms above.",
    },
  ],
};
