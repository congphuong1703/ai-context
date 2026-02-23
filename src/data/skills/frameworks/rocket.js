/** Rocket agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ROCKET = makeCompactSkill(
  "Rocket",
  "rocket",
  "framework",
  "Use request guards and fairings; typed forms and JSON; async where beneficial."
);
