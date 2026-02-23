/** Java agent skill — Universal Skill Standard (7 parts). */
export const SKILL_JAVA = {
  metadata: { name: "Java", version: "1.0", author: "ai-context", tags: ["java", "language"] },
  trigger: "When writing, reviewing, or refactoring Java code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use records for immutable DTOs and value objects (Java 16+).",
    "Use constructor injection only — no @Autowired on fields.",
    "Use Optional<T> as return type only — never as parameter or field.",
    "Use Stream API for collection transforms — not imperative loops.",
    "Use sealed class/interface for algebraic types and state modeling.",
    "Custom exceptions must have an error code enum — not just a message string.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use @Autowired on fields — constructor injection only.",
    "Do not use Optional<T> as a method parameter or class field.",
    "Do not catch Exception or Throwable without explicit justification.",
    "Do not use raw types — always parameterize generics.",
    "Do not use null returns where Optional<T> is semantically appropriate.",
  ],
  examples: [
    {
      input: "User wants a DTO for an order response.",
      output:
        "public record OrderResponse(\n    UUID id,\n    String status,\n    BigDecimal total,\n    LocalDateTime createdAt\n) {}",
    },
  ],
};
