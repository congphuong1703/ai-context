/** SvelteKit agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SVELTE = makeCompactSkill(
  "SvelteKit",
  "svelte",
  "framework",
  "Use runes and composition; prefer server load and form actions; avoid unnecessary client code."
);
