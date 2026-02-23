/** Blazor agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_BLAZOR = makeCompactSkill(
  "Blazor",
  "blazor",
  "framework",
  "Use components and cascading values; avoid excessive re-renders; consider server vs WASM."
);
