/** Pydantic agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_PYDANTIC = makeCompactSkill(
  "Pydantic",
  "pydantic",
  "library",
  "In Python: use Pydantic for all structured I/O; no raw dicts at API boundaries."
);
