/**
 * Rules entry: universal foundation + rules by type (languages, frameworks, conventions, libraries, eslint/prettier, ui, prompts). IDE không có rules.
 */
export {
  RULES_UNIVERSAL_FOUNDATION,
  RULES_GIT_COLLABORATION,
  RULES_ROLE_BEHAVIOR,
  RULES_SECURITY,
  RULES_TESTING,
} from "./universal";
export { RULES_BY_LANGUAGE } from "./languages";
export { RULES_BY_FRAMEWORK } from "./frameworks";
export { RULES_BY_CONVENTION, RULES_CONVENTION_FALLBACK } from "./conventions";
export { RULES_BY_LIBRARY } from "./libraries";
export { RULES_ESLINT_PRETTIER } from "./eslintPrettier";
export { RULES_UI_STYLING } from "./uiStyling";
export { SKILLS_PROMPT_TEMPLATES } from "./prompts";
