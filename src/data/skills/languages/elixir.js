/** Elixir agent skill — Universal Skill Standard (7 parts). */
export const SKILL_ELIXIR = {
  metadata: { name: "Elixir", version: "1.0", author: "ai-context", tags: ["elixir", "language"] },
  trigger: "When suggesting or generating code in Elixir.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use pattern matching and pipe; prefer structs and protocols; avoid deep nesting.",
    "Follow the Elixir rules section above.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: ["Do not use globals or deep nesting.", "Do not skip ExUnit/Credo."],
  examples: [
    {
      input: "User requests code or refactor.",
      output: "Code following Elixir rules and idioms above.",
    },
  ],
};
