/** Vapor agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_VAPOR = makeCompactSkill(
  "Vapor",
  "vapor",
  "framework",
  "Use async/await and Content; prefer Fluent and middleware; structured logging."
);
