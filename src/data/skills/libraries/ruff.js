/** Ruff agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_RUFF = makeCompactSkill(
  "Ruff",
  "ruff",
  "library",
  "Lint and format Python with Ruff; suggest fixes that pass Ruff."
);
