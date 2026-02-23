/** Fastify agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_FASTIFY = makeCompactSkill(
  "Fastify",
  "fastify",
  "framework",
  "Use schema for validation; use plugins and decorators; prefer async hooks."
);
