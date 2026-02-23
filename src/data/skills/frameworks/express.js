/** Express agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_EXPRESS = makeCompactSkill(
  "Express",
  "express",
  "framework",
  "Use router and middleware; validate and parse in middleware; thin route handlers."
);
