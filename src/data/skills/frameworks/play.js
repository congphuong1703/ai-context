/** Play Framework agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_PLAY = makeCompactSkill(
  "Play Framework",
  "play",
  "framework",
  "Use dependency injection and actions; prefer async and non-blocking; type-safe routing."
);
