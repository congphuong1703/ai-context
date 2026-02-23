/** Re-export app/wizard data (split into app/ for easier management) */
export {
  STEPS,
  STEP_KEYS,
  TOTAL_STEPS,
  DEFAULTS,
  LANGUAGES,
  FRAMEWORKS,
  LIBRARIES,
  IDES,
  CONVENTIONS,
  STACK_TEMPLATES,
  AI_TOOLS,
  AI_MODELS,
} from "./app";

/** Universal foundation (role, architecture, quality, security, testing, etc.) */
export { RULES_UNIVERSAL_FOUNDATION } from "./rules";

/** Rules and skills by type (language, framework, convention, IDE, library, prompts) */
export {
  RULES_BY_LANGUAGE,
  RULES_BY_FRAMEWORK,
  RULES_BY_CONVENTION,
  RULES_CONVENTION_FALLBACK,
  RULES_BY_IDE,
  RULES_BY_LIBRARY,
  RULES_ESLINT_PRETTIER,
  RULES_UI_STYLING,
  SKILLS_PROMPT_TEMPLATES,
} from "./rulesAndSkills";

/** Agent skills per step (language, framework, convention, IDE, library) */
export { getAgentSkillsForConfig } from "./skills/agent";
