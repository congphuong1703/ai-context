import {
  LANGUAGES,
  IDES,
  FRAMEWORKS,
  RULES_BY_LANGUAGE,
  RULES_BY_FRAMEWORK,
  RULES_BY_CONVENTION,
  RULES_CONVENTION_FALLBACK,
  RULES_BY_IDE,
  RULES_BY_LIBRARY,
  RULES_UNIVERSAL_FOUNDATION,
  RULES_ESLINT_PRETTIER,
  RULES_UI_STYLING,
  SKILLS_PROMPT_TEMPLATES,
  getAgentSkillsForConfig,
} from "@/data";
import { formatDate } from "@/lib/dateFormats";

export function generateOutput(config) {
  const language = config.language ?? null;
  const ide = config.ide ?? null;
  const convention = config.convention ?? null;
  const eslintRequired = config.eslintRequired ?? false;
  const prettierRequired = config.prettierRequired ?? false;
  const frameworks = Array.isArray(config.frameworks)
    ? config.frameworks
    : config.framework
      ? [config.framework]
      : [];
  const libraries = Array.isArray(config.libraries) ? config.libraries : [];

  const L = language ? LANGUAGES.find((x) => x.id === language)?.label || language : "—";
  const IDE = ide ? IDES.find((x) => x.id === ide)?.label || ide : "—";
  const list = language ? FRAMEWORKS[language] : null;
  const F_labels = frameworks
    .map((id) => (list ? list.find((x) => x.id === id)?.label : null))
    .filter(Boolean);
  const stack = F_labels.length > 0 ? `${L} + ${F_labels.join(", ")}` : L;
  const filename = ide ? IDES.find((x) => x.id === ide)?.file || ".cursorrules" : ".cursorrules";

  const langRules = language ? RULES_BY_LANGUAGE[language] || "" : "";
  const fwRules = frameworks
    .map((id) => RULES_BY_FRAMEWORK[id] || "")
    .filter(Boolean)
    .join("\n\n");
  const libRules = libraries
    .map((id) => RULES_BY_LIBRARY[id] || "")
    .filter(Boolean)
    .join("\n\n");
  const agentSkills = getAgentSkillsForConfig(config);
  const hasUiStack = libraries.some((id) => id === "tailwind" || id === "shadcn");
  const uiStylingBlock = hasUiStack ? RULES_UI_STYLING : "";
  const conventionRules =
    convention && RULES_BY_CONVENTION[convention]
      ? RULES_BY_CONVENTION[convention]
      : RULES_CONVENTION_FALLBACK;
  const eslintBlock = eslintRequired
    ? RULES_ESLINT_PRETTIER.eslintRequired
    : RULES_ESLINT_PRETTIER.eslintOptional;
  const prettierBlock = prettierRequired
    ? RULES_ESLINT_PRETTIER.prettierRequired
    : RULES_ESLINT_PRETTIER.prettierOptional;
  const ideRules = ide ? RULES_BY_IDE[ide] || "" : "";

  const promptSectionTitle = ide
    ? `PROMPT TEMPLATES FOR ${IDE.toUpperCase()}`
    : "PROMPT TEMPLATES FOR AI TOOL";
  const promptSectionSub = ide
    ? `Copy these into ${IDE}'s AI interface`
    : "Copy these into your AI's interface";
  const skillsBlock = [
    SKILLS_PROMPT_TEMPLATES.implement.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.review.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.refactor.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.debug.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.test.replace(/\{filename\}/g, filename),
  ].join("\n\n");

  const content = `# ${filename}
# Language: ${stack} | Naming: ${convention} | AI Tool: ${IDE}
# ────────────────────────────────
# Last updated: ${formatDate("ISO_DATE")}

${RULES_UNIVERSAL_FOUNDATION}

${langRules}

${fwRules}

${conventionRules}

${agentSkills}

${libRules}

${uiStylingBlock}

${eslintBlock}

${prettierBlock}

${ideRules}

## ─────────────────────────────────────────────────────
## 🤖 ${promptSectionTitle}
## ${promptSectionSub}
## ─────────────────────────────────────────────────────

${skillsBlock}
`;

  return { content, filename };
}
