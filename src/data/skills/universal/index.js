/**
 * Universal skill standard and base skill (always applied).
 * Mọi skill đều theo cấu trúc 7 phần: metadata, trigger, prerequisites, process, output, constraints, examples.
 */
import { formatSkillToMarkdown } from "./skillStandard";
import { UNIVERSAL_SKILL } from "./universalSkills";

export {
  SKILL_STANDARD,
  SKILL_PARTS,
  formatSkillToMarkdown,
  validateSkill,
  makeSkill,
  makeCompactSkill,
} from "./skillStandard";
export { UNIVERSAL_SKILL } from "./universalSkills";

/** Formatted universal skill (markdown) for backward compatibility. */
export const SKILLS_AGENT_UNIVERSAL = formatSkillToMarkdown(UNIVERSAL_SKILL);
