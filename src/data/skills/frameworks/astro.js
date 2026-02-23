/** Astro agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ASTRO = makeCompactSkill(
  "Astro",
  "astro",
  "framework",
  "Use islands for interactivity; prefer server-first and zero JS by default."
);
