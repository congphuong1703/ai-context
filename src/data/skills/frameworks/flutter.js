/** Flutter agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_FLUTTER = makeCompactSkill(
  "Flutter",
  "flutter",
  "framework",
  "Use widgets and state management consistently; prefer const constructors; test with golden when needed."
);
