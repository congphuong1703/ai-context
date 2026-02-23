/** pytest agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_PYTEST = makeCompactSkill(
  "pytest",
  "pytest",
  "library",
  "For tests: use pytest fixtures and parametrize; one logical assertion per test when possible."
);
