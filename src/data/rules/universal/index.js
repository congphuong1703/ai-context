/**
 * Universal foundation — rules that apply to all languages.
 * Composed from individual category files for easy maintenance.
 */

import { RULES_ROLE_BEHAVIOR } from "./roleBehavior";
import { RULES_ARCHITECTURE } from "./architecture";
import { RULES_CODE_QUALITY } from "./codeQuality";
import { RULES_SECURITY } from "./security";
import { RULES_TESTING } from "./testing";
import { RULES_ERROR_HANDLING } from "./errorHandling";
import { RULES_GIT_COLLABORATION } from "./gitCollaboration";
import { RULES_DEPENDENCY_MANAGEMENT } from "./dependencyManagement";
import { RULES_PERFORMANCE } from "./performance";
import { RULES_CODE_REVIEW_MINDSET } from "./codeReviewMindset";
import { RULES_AI_AGENT_BEHAVIOR } from "./aiAgentBehavior";

const UNIVERSAL_SECTIONS = [
  RULES_ROLE_BEHAVIOR,
  RULES_ARCHITECTURE,
  RULES_CODE_QUALITY,
  RULES_SECURITY,
  RULES_TESTING,
  RULES_ERROR_HANDLING,
  RULES_GIT_COLLABORATION,
  RULES_DEPENDENCY_MANAGEMENT,
  RULES_PERFORMANCE,
  RULES_CODE_REVIEW_MINDSET,
  RULES_AI_AGENT_BEHAVIOR,
];

/** Single string: all universal foundation rules (for appending language/framework/etc. after) */
export const RULES_UNIVERSAL_FOUNDATION = UNIVERSAL_SECTIONS.join("\n\n");

export {
  RULES_ROLE_BEHAVIOR,
  RULES_ARCHITECTURE,
  RULES_CODE_QUALITY,
  RULES_SECURITY,
  RULES_TESTING,
  RULES_ERROR_HANDLING,
  RULES_GIT_COLLABORATION,
  RULES_DEPENDENCY_MANAGEMENT,
  RULES_PERFORMANCE,
  RULES_CODE_REVIEW_MINDSET,
  RULES_AI_AGENT_BEHAVIOR,
};
