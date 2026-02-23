/** Celery agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_CELERY = makeCompactSkill(
  "Celery",
  "celery",
  "framework",
  "Use task signatures and chains when needed; idempotent tasks; explicit retry and error handling."
);
