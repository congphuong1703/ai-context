/** Entity Framework agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ENTITY = makeCompactSkill(
  "Entity Framework",
  "entity",
  "framework",
  "Use DbContext and migrations; avoid N+1; explicit loading when needed."
);
