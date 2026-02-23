/** Plumber agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_PLUMBER = makeCompactSkill(
  "Plumber",
  "plumber",
  "framework",
  "Use filters and routers; document with comments; validate and sanitize input."
);
