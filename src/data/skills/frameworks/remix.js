/** Remix agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_REMIX = makeCompactSkill(
  "Remix",
  "remix",
  "framework",
  "Use loaders/actions and route modules; prefer resource routes; avoid fetching in components when loaders can do it."
);
