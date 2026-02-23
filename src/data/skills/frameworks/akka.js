/** Akka agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_AKKA = makeCompactSkill(
  "Akka",
  "akka",
  "framework",
  "Use actor hierarchy and supervision; prefer typed when possible; avoid blocking in actors."
);
