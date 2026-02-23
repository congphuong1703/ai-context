/** Django agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_DJANGO = makeCompactSkill(
  "Django",
  "django",
  "framework",
  "Respect MTV; suggest class-based views or FBVs consistently; use ORM best practices."
);
