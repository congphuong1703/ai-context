/** Lapis agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_LAPIS = makeCompactSkill(
  "Lapis",
  "lapis",
  "framework",
  "Use actions and layout; validate input; avoid blocking in request path."
);
