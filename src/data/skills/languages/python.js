/** Python agent skill — Universal Skill Standard (7 parts). */
export const SKILL_PYTHON = {
  metadata: { name: "Python", version: "1.0", author: "ai-context", tags: ["python", "language"] },
  trigger: "When suggesting or generating code in Python.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use type hints and PEP 8; prefer standard library and well-known packages.",
    "Follow the Python rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not use mutable default arguments.", "Do not skip type hints on public APIs."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Python rules and idioms above.",
    },
  ],
};
