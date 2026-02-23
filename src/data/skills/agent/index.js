/**
 * Agent skills per step — composed from language, framework, convention, IDE, library.
 * Used by generateRules to append step-specific agent instructions.
 */

import { SKILLS_AGENT_BY_LANGUAGE } from "./language";
import { SKILLS_AGENT_BY_FRAMEWORK } from "./framework";
import { SKILLS_AGENT_BY_CONVENTION } from "./convention";
import { SKILLS_AGENT_BY_IDE } from "./ide";
import { SKILLS_AGENT_BY_LIBRARY } from "./library";

export { SKILLS_AGENT_BY_LANGUAGE } from "./language";
export { SKILLS_AGENT_BY_FRAMEWORK } from "./framework";
export { SKILLS_AGENT_BY_CONVENTION } from "./convention";
export { SKILLS_AGENT_BY_IDE } from "./ide";
export { SKILLS_AGENT_BY_LIBRARY } from "./library";

/**
 * Returns a single block of agent skills for the given config (all selected steps).
 * Used when generating the rules file to append after universal foundation.
 */
export function getAgentSkillsForConfig(config) {
  const parts = [];

  if (config.language && SKILLS_AGENT_BY_LANGUAGE[config.language]) {
    parts.push(SKILLS_AGENT_BY_LANGUAGE[config.language]);
  }

  const frameworks = Array.isArray(config.frameworks)
    ? config.frameworks
    : config.framework
      ? [config.framework]
      : [];
  frameworks.forEach((id) => {
    if (SKILLS_AGENT_BY_FRAMEWORK[id]) parts.push(SKILLS_AGENT_BY_FRAMEWORK[id]);
  });

  if (config.convention && SKILLS_AGENT_BY_CONVENTION[config.convention]) {
    parts.push(SKILLS_AGENT_BY_CONVENTION[config.convention]);
  }

  if (config.ide && SKILLS_AGENT_BY_IDE[config.ide]) {
    parts.push(SKILLS_AGENT_BY_IDE[config.ide]);
  }

  const libraries = Array.isArray(config.libraries) ? config.libraries : [];
  libraries.forEach((id) => {
    if (SKILLS_AGENT_BY_LIBRARY[id]) parts.push(SKILLS_AGENT_BY_LIBRARY[id]);
  });

  if (parts.length === 0) return "";
  return `## Agent skills (from your choices)\n${parts.join("\n")}`;
}
