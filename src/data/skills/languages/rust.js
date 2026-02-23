/** Rust agent skill — Universal Skill Standard (7 parts). */
export const SKILL_RUST = {
  metadata: { name: "Rust", version: "1.0", author: "ai-context", tags: ["rust", "language"] },
  trigger: "When writing, reviewing, or refactoring Rust code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use Result<T, E> for all fallible operations and propagate with the ? operator.",
    "Use thiserror for library errors and anyhow for application-level errors.",
    "Add context when propagating errors: .with_context(|| format!('loading {path}')).",
    "Prefer &str over String for function parameters that only need to read.",
    "Prefer &[T] over &Vec<T> for slice parameters.",
    "Add a // SAFETY: comment explaining why every unsafe block is actually safe.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use unwrap() or expect() in production code — only in tests and prototypes.",
    "Do not clone() to escape borrow checker issues without justifying copy semantics.",
    "Do not write unsafe blocks without a // SAFETY: comment.",
    "Do not allocate in hot paths when stack allocation is possible.",
    "Do not use panic! in library code — return Result.",
  ],
  examples: [
    {
      input: "User wants a function to load config from a file.",
      output:
        'fn load_config(path: &Path) -> anyhow::Result<Config> {\n    let content = fs::read_to_string(path)\n        .with_context(|| format!("reading config from {}", path.display()))?;\n    let config: Config = serde_json::from_str(&content)\n        .with_context(|| format!("parsing config from {}", path.display()))?;\n    Ok(config)\n}',
    },
  ],
};
