/** ASP.NET Core agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ASPNET = makeCompactSkill(
  "ASP.NET Core",
  "aspnet",
  "framework",
  "Use minimal APIs or controllers consistently; dependency injection; model binding and validation."
);
