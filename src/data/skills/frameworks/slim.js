/** Slim agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SLIM = makeCompactSkill(
  "Slim",
  "slim",
  "framework",
  "Use middleware and PSR-7; thin handlers; dependency injection for services."
);
