/** Zod agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ZOD = makeCompactSkill(
  "Zod",
  "zod",
  "library",
  "At boundaries: validate with Zod; export inferred types; handle parse errors explicitly."
);
