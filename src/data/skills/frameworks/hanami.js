/** Hanami agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_HANAMI = makeCompactSkill(
  "Hanami",
  "hanami",
  "framework",
  "Use actions and views; keep business logic in interactors or services; prefer dependency injection."
);
