/** Flask agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_FLASK = makeCompactSkill(
  "Flask",
  "flask",
  "framework",
  "Use blueprints and app factory; validate with Marshmallow or Pydantic; thin view functions."
);
