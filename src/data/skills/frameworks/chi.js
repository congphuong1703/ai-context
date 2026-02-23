/** Chi agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_CHI = makeCompactSkill(
  "Chi",
  "chi",
  "framework",
  "Use subrouters and middleware; context for request-scoped data; thin handlers."
);
