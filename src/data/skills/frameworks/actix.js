/** Actix agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ACTIX = makeCompactSkill(
  "Actix",
  "actix",
  "framework",
  "Use handlers and extractors; async only when needed; avoid blocking in actor."
);
