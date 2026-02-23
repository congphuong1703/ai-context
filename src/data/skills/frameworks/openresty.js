/** OpenResty agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_OPENRESTY = makeCompactSkill(
  "OpenResty",
  "openresty",
  "framework",
  "Use cosocket and phase APIs; avoid blocking; cache when appropriate."
);
