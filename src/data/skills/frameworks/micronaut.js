/** Micronaut agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_MICRONAUT = makeCompactSkill(
  "Micronaut",
  "micronaut",
  "framework",
  "Use dependency injection and compile-time proxies; prefer declarative HTTP client."
);
