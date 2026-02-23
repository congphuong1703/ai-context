/** LangChain agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_LANGCHAIN = makeCompactSkill(
  "LangChain",
  "langchain",
  "framework",
  "Separate retrieval, reasoning, generation; validate LLM output; use backoff and circuit breakers."
);
