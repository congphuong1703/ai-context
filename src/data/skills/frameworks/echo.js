/** Echo agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ECHO = makeCompactSkill(
  "Echo",
  "echo",
  "framework",
  "Use groups and middleware; bind and validate in handlers; central error handler."
);
