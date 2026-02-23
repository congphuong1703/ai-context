/** Ktor agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_KTOR = makeCompactSkill(
  "Ktor",
  "ktor",
  "framework",
  "Use plugins and routing DSL; prefer suspend and Flow; structured logging."
);
