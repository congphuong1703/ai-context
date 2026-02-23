/** Symfony agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SYMFONY = makeCompactSkill(
  "Symfony",
  "symfony",
  "framework",
  "Use services and YAML/attributes; prefer ParamConverter and validation; events for decoupling."
);
