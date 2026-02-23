/** Phoenix agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_PHOENIX = makeCompactSkill(
  "Phoenix",
  "phoenix",
  "framework",
  "Use contexts and Ecto; channels for real-time; prefer pattern match in plugs."
);
