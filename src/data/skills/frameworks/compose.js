/** Compose Multiplatform agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_COMPOSE = makeCompactSkill(
  "Compose Multiplatform",
  "compose",
  "framework",
  "Use declarative UI and state hoisting; prefer ViewModels and unidirectional flow."
);
