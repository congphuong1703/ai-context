/** Quarkus agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_QUARKUS = makeCompactSkill(
  "Quarkus",
  "quarkus",
  "framework",
  "Use CDI and reactive where it fits; native when needed; config via application.properties."
);
