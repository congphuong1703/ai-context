/**
 * Agent skills per step — universal, language, framework, library, domain. Convention chỉ có rules, không có skill.
 * IDE chỉ dùng để gợi ý cài đặt (installHint), không có rule/skill.
 */
import { UNIVERSAL_SKILL, formatSkillToMarkdown } from "./universal";
import { SKILLS_AGENT_BY_LANGUAGE } from "./languages";
import { SKILLS_AGENT_BY_FRAMEWORK } from "./frameworks";
import { SKILLS_AGENT_BY_LIBRARY } from "./libraries";
import { SKILLS_AGENT_BY_DOMAIN } from "./domains";

export { SKILLS_AGENT_BY_LANGUAGE } from "./languages";
export { SKILLS_AGENT_BY_FRAMEWORK } from "./frameworks";
export { SKILLS_AGENT_BY_LIBRARY } from "./libraries";
export { SKILLS_AGENT_BY_DOMAIN } from "./domains";
export { SKILLS_AGENT_UNIVERSAL } from "./universal";

/**
 * Returns a single block of agent skills (7-part format) for the given config.
 * User can copy or run NPX to get this file and use it in their project.
 */
export function getAgentSkillsForConfig(config) {
  const skillObjects = [UNIVERSAL_SKILL];

  if (config.language && SKILLS_AGENT_BY_LANGUAGE[config.language]) {
    skillObjects.push(SKILLS_AGENT_BY_LANGUAGE[config.language]);
  }

  const frameworks = Array.isArray(config.frameworks)
    ? config.frameworks
    : config.framework
      ? [config.framework]
      : [];
  frameworks.forEach((id) => {
    if (SKILLS_AGENT_BY_FRAMEWORK[id]) skillObjects.push(SKILLS_AGENT_BY_FRAMEWORK[id]);
  });

  const libraries = Array.isArray(config.libraries) ? config.libraries : [];
  libraries.forEach((id) => {
    if (SKILLS_AGENT_BY_LIBRARY[id]) skillObjects.push(SKILLS_AGENT_BY_LIBRARY[id]);
  });

  const domains = Array.isArray(config.domains) ? config.domains : [];
  domains.forEach((id) => {
    if (SKILLS_AGENT_BY_DOMAIN[id]) skillObjects.push(SKILLS_AGENT_BY_DOMAIN[id]);
  });

  const formatted = skillObjects.map((s) => formatSkillToMarkdown(s)).filter(Boolean);
  const body = formatted.join("\n\n");
  return `## Agent skills (Universal Skill Standard — 7 parts each)\n\nMỗi skill gồm: metadata, trigger, prerequisites, process, output, constraints, examples. Copy nội dung file này hoặc chạy NPX (xem bên dưới) để tải về dùng trong project.\n\n${body}`;
}
