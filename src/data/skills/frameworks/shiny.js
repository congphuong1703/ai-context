/** Shiny agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SHINY = makeCompactSkill(
  "Shiny",
  "shiny",
  "framework",
  "Use reactive expressions and modules; avoid heavy compute in reactive; isolate when possible."
);
