/** Node.js agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_NODE = makeCompactSkill(
  "Node.js",
  "node",
  "framework",
  "Use ESM and async/await; prefer explicit error handling; avoid callback-style when possible."
);
