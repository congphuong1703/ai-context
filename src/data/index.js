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
  getDefaultConventionForLanguage,
  STACK_TEMPLATES,
  AI_TOOLS,
  AI_MODELS,
} from "./app";

/** Rules: universal foundation + by type (language, framework, convention, library, eslint/prettier, ui, prompts). IDE không có rule — chỉ gợi ý cài đặt. */
export {
  RULES_UNIVERSAL_FOUNDATION,
  RULES_BY_LANGUAGE,
  RULES_BY_FRAMEWORK,
  RULES_BY_CONVENTION,
  RULES_CONVENTION_FALLBACK,
  RULES_BY_LIBRARY,
  RULES_ESLINT_PRETTIER,
  RULES_UI_STYLING,
  SKILLS_PROMPT_TEMPLATES,
  RULES_GIT_COLLABORATION,
  RULES_ROLE_BEHAVIOR,
  RULES_SECURITY,
  RULES_TESTING,
} from "./rules";

/** Agent skills per step (language, framework, convention, library). IDE chỉ dùng cho gợi ý cài đặt. */
export {
  getAgentSkillsForConfig,
  SKILLS_AGENT_BY_LANGUAGE,
  SKILLS_AGENT_BY_FRAMEWORK,
  SKILLS_AGENT_BY_LIBRARY,
  SKILLS_AGENT_BY_DOMAIN,
  SKILLS_AGENT_UNIVERSAL,
  formatSkillToMarkdown,
} from "./skills";
