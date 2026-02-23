/** Zustand agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_ZUSTAND = makeCompactSkill(
  "Zustand",
  "zustand",
  "library",
  "For client state: use Zustand slices; keep stores small and focused."
);
