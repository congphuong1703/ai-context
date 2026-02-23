/** Rails agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_RAILS = makeCompactSkill(
  "Rails",
  "rails",
  "framework",
  "Respect conventions; thin controllers and fat models/services; use strong params and scopes."
);
