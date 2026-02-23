/** C# agent skill — Universal Skill Standard (7 parts). */
export const SKILL_CSHARP = {
  metadata: {
    name: "C#",
    version: "1.0",
    author: "ai-context",
    tags: ["csharp", "dotnet", "language"],
  },
  trigger: "When writing, reviewing, or refactoring C# code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Enable nullable reference types in the project file: <Nullable>enable</Nullable>.",
    "Use records for immutable value objects and DTOs.",
    "Use async/await throughout — never .Result or .Wait() which cause deadlocks.",
    "Use pattern matching and switch expressions over if-else chains.",
    "Use IServiceCollection dependency injection — no static service locator.",
    "Follow Microsoft C# naming conventions: PascalCase for public, camelCase for private.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use .Result or .Wait() on Tasks — use await.",
    "Do not use null-forgiving operator (!) without a comment explaining why.",
    "Do not use static mutable state — it breaks testability and thread safety.",
    "Do not use var when the type is not immediately obvious from the right side.",
  ],
  examples: [
    {
      input: "User wants an immutable order DTO.",
      output:
        "public record OrderDto(\n    Guid Id,\n    string Status,\n    decimal Total,\n    DateTimeOffset CreatedAt\n);",
    },
  ],
};
