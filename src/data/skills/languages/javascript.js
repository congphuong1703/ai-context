/** JavaScript agent skill — Universal Skill Standard (7 parts). */
export const SKILL_JAVASCRIPT = {
  metadata: {
    name: "JavaScript",
    version: "1.0",
    author: "ai-context",
    tags: ["javascript", "language"],
  },
  trigger: "When writing, reviewing, or refactoring JavaScript code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use ESM imports exclusively — no require() or CommonJS in new code.",
    "Default to const; use let only when reassignment is genuinely necessary.",
    "Use async/await consistently — never mix with .then()/.catch() in the same file.",
    "Handle all Promise rejections — no floating Promises anywhere.",
    "Use explicit named exports in barrel files — no export *.",
    "Never modify native prototypes (Array.prototype, Object.prototype).",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use var — const or let only.",
    "Do not leave floating Promises unhandled.",
    "Do not use == — always ===.",
    "Do not use arguments object — use rest params (...args).",
    "Do not export * from barrel files — use explicit named re-exports.",
  ],
  examples: [
    {
      input: "User wants async data fetch that handles errors.",
      output:
        "async function fetchUser(id) { try { const res = await fetch(\"/api/users/\" + id); if (!res.ok) throw new ApiError(res.status); return await res.json(); } catch (err) { logger.error('fetchUser failed', { id, err }); throw err; } }",
    },
  ],
};
