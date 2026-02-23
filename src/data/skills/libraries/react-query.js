/** TanStack Query agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_REACT_QUERY = makeCompactSkill(
  "TanStack Query",
  "react-query",
  "library",
  "For server state: use TanStack Query; avoid manual loading flags and duplicate fetches."
);
