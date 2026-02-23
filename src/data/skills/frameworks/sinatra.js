/** Sinatra agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SINATRA = makeCompactSkill(
  "Sinatra",
  "sinatra",
  "framework",
  "Use modular style and extensions; keep routes thin; extract to service objects."
);
