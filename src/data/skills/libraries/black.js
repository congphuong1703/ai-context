/** Black agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_BLACK = makeCompactSkill(
  "Black",
  "black",
  "library",
  "Format Python with Black; do not suggest code that breaks Black."
);
