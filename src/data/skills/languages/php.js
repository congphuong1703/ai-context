/** PHP agent skill — Universal Skill Standard (7 parts). */
export const SKILL_PHP = {
  metadata: { name: "PHP", version: "1.0", author: "ai-context", tags: ["php", "language"] },
  trigger: "When writing, reviewing, or refactoring PHP code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Add declare(strict_types=1) as the first line of every PHP file.",
    "Add type hints to all function parameters and return types.",
    "Use === for all comparisons — never == (loose comparison).",
    "Use named arguments for functions with 3 or more parameters.",
    "Follow PSR-12 coding standard and PSR-4 autoloading conventions.",
    "Never use @ error suppression, eval(), or extract() from user input.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not omit declare(strict_types=1) from any file.",
    "Do not use == for comparison — always ===.",
    "Do not use @ to suppress errors.",
    "Do not use eval() under any circumstances.",
    "Do not extract() variables from user-controlled input.",
    "Do not use global variables — use dependency injection.",
  ],
  examples: [
    {
      input: "User wants a repository method to find a user by email.",
      output:
        "public function findByEmail(string $email): ?User\n{\n    return $this->em->getRepository(User::class)\n        ->findOneBy(['email' => $email]);\n}",
    },
  ],
};
