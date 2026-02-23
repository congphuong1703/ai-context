/** Fiber agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_FIBER = makeCompactSkill(
  "Fiber",
  "fiber",
  "framework",
  "Use groups and middleware; validate with go-playground/validator; thin handlers."
);
