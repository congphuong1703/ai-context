/** Jakarta EE agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_JAKARTA = makeCompactSkill(
  "Jakarta EE",
  "jakarta",
  "framework",
  "Use CDI and JAX-RS/JPA; follow spec; avoid vendor lock-in in code."
);
