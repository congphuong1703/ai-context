import {
  LANGUAGES,
  IDES,
  FRAMEWORKS,
  RULES_BY_LANGUAGE,
  RULES_BY_FRAMEWORK,
  RULES_BY_CONVENTION,
  RULES_CONVENTION_FALLBACK,
  RULES_BY_LIBRARY,
  RULES_UNIVERSAL_FOUNDATION,
  RULES_ESLINT_PRETTIER,
  RULES_UI_STYLING,
  SKILLS_PROMPT_TEMPLATES,
  getAgentSkillsForConfig,
  RULES_GIT_COLLABORATION,
  RULES_ROLE_BEHAVIOR,
  RULES_SECURITY,
  RULES_TESTING,
  SKILLS_AGENT_UNIVERSAL,
  SKILLS_AGENT_BY_LANGUAGE,
  SKILLS_AGENT_BY_FRAMEWORK,
  SKILLS_AGENT_BY_LIBRARY,
  SKILLS_AGENT_BY_DOMAIN,
  formatSkillToMarkdown,
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
  const fwRuleBlocks = frameworks.map((id) => RULES_BY_FRAMEWORK[id] || "").filter(Boolean);
  const fwRules = fwRuleBlocks.join("\n\n");
  const libRuleBlocks = libraries.map((id) => RULES_BY_LIBRARY[id] || "").filter(Boolean);
  const libRules = libRuleBlocks.join("\n\n");
  const agentSkillsBlock = getAgentSkillsForConfig(config);
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
  const promptSectionTitle = ide
    ? `PROMPT TEMPLATES FOR ${IDE.toUpperCase()}`
    : "PROMPT TEMPLATES FOR AI TOOL";
  const promptSectionSub = ide
    ? `Copy these into ${IDE}'s AI interface`
    : "Copy these into your AI's interface";
  const promptsBlock = [
    SKILLS_PROMPT_TEMPLATES.implement.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.review.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.refactor.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.debug.replace(/\{filename\}/g, filename),
    SKILLS_PROMPT_TEMPLATES.test.replace(/\{filename\}/g, filename),
  ].join("\n\n");

  const rulesContent = `# ${filename}
# Language: ${stack} | Naming: ${convention} | AI Tool: ${IDE}
# ────────────────────────────────
# Last updated: ${formatDate("ISO_DATE")}


## How AI agents should use project rules and skills

- Treat these rules and skills as an additive baseline for this project.
- Treat files under \".ai/rules/ai-contexts\" and \".ai/skills/ai-contexts\" as extra guidance
- Never overwrite or ignore existing repository rules or skills if conflicts occur with ai-contexts rules and skills.

${RULES_UNIVERSAL_FOUNDATION}

${langRules}

${fwRules}

${conventionRules}

${libRules}

${uiStylingBlock}

${eslintBlock}

${prettierBlock}
`.trim();

  const skillsContent = agentSkillsBlock.trim();

  const promptsContent = `## ${promptSectionTitle}
## ${promptSectionSub}
## ─────────────────────────────────────────────────────

${promptsBlock}
`.trim();

  const content = `# ${filename}
# Language: ${stack} | Naming: ${convention} | AI Tool: ${IDE}
# ────────────────────────────────
# Last updated: ${formatDate("ISO_DATE")}

## How AI agents should use project rules and skills

- Treat these rules and skills as an additive baseline for this project.
- Treat files under \".ai/rules/ai-contexts\" and \".ai/skills/ai-contexts\" as extra guidance
- Never overwrite or ignore existing repository rules or skills if conflicts occur with ai-contexts rules and skills.

${RULES_UNIVERSAL_FOUNDATION}

${langRules}

${fwRules}

${conventionRules}

${agentSkillsBlock}

${libRules}

${uiStylingBlock}

${eslintBlock}

${prettierBlock}

## ─────────────────────────────────────────────────────
## 🤖 ${promptSectionTitle}
## ${promptSectionSub}
## ─────────────────────────────────────────────────────

${promptsBlock}
`;

  const installHint = (ide && IDES.find((x) => x.id === ide)?.installHint) ?? null;

  // IDE-specific folder mapping (rulesDir + whether to still emit root file)
  const ideEntry = ide ? IDES.find((x) => x.id === ide) : null;
  const rawIdeRulesDir = ideEntry && "rulesDir" in ideEntry ? (ideEntry.rulesDir ?? null) : null;
  // Fallback: nếu IDE không có rulesDir riêng, dùng thư mục chung .ai
  const ideRulesDir = rawIdeRulesDir ?? ".ai";
  const ideMainFileAtRoot =
    ideEntry && "mainFileAtRoot" in ideEntry ? ideEntry.mainFileAtRoot !== false : true;

  /** Split files for CLI
   * - Rules go under    <rulesDir>/rules/ai-contexts/
   * - Skills go under   <rulesDir>/skills/ai-contexts/
   * để IDE phân biệt rõ với rules người dùng tự tạo.
   */
  const cliFiles = [];

  // Universal rule sections (foundation)
  cliFiles.push(
    {
      dir: "rules/ai-contexts",
      filename: "naming-convention.md",
      content: `# Naming convention\n\n${conventionRules}\n`,
    },
    {
      dir: "rules/ai-contexts",
      filename: "git-commit.md",
      content: `# Git & collaboration\n\n${RULES_GIT_COLLABORATION}\n`,
    },
    {
      dir: "rules/ai-contexts",
      filename: "role-behavior.md",
      content: `# Role & behavior\n\n${RULES_ROLE_BEHAVIOR}\n`,
    },
    {
      dir: "rules/ai-contexts",
      filename: "security.md",
      content: `# Security\n\n${RULES_SECURITY}\n`,
    },
    {
      dir: "rules/ai-contexts",
      filename: "testing.md",
      content: `# Testing\n\n${RULES_TESTING}\n`,
    }
  );

  // Language-specific rules (nếu có)
  if (language && langRules) {
    cliFiles.push({
      dir: "rules/ai-contexts",
      filename: `language-${language}.md`,
      content: `# Language rules: ${L}\n\n${langRules}\n`,
    });
  }

  // Framework-specific rules (cho từng framework đã chọn)
  frameworks.forEach((id) => {
    const block = RULES_BY_FRAMEWORK[id];
    if (!block) return;
    cliFiles.push({
      dir: "rules/ai-contexts",
      filename: `framework-${id}.md`,
      content: `# Framework rules: ${id}\n\n${block}\n`,
    });
  });

  // Library-specific rules (cho từng library đã chọn)
  libraries.forEach((id) => {
    const block = RULES_BY_LIBRARY[id];
    if (!block) return;
    cliFiles.push({
      dir: "rules/ai-contexts",
      filename: `library-${id}.md`,
      content: `# Library rules: ${id}\n\n${block}\n`,
    });
  });

  // Skills: universal + language/framework/library/domain, tách file riêng
  // Universal skills
  cliFiles.push({
    dir: "skills/ai-contexts",
    filename: "universal.md",
    content: `${SKILLS_AGENT_UNIVERSAL}\n`,
  });

  // Language skill
  if (language && SKILLS_AGENT_BY_LANGUAGE[language]) {
    const skill = SKILLS_AGENT_BY_LANGUAGE[language];
    cliFiles.push({
      dir: "skills/ai-contexts",
      filename: `language-${language}.md`,
      content: `${formatSkillToMarkdown(skill)}\n`,
    });
  }

  // Framework skills
  frameworks.forEach((id) => {
    const skill = SKILLS_AGENT_BY_FRAMEWORK[id];
    if (!skill) return;
    cliFiles.push({
      dir: "skills/ai-contexts",
      filename: `framework-${id}.md`,
      content: `${formatSkillToMarkdown(skill)}\n`,
    });
  });

  // Library skills
  libraries.forEach((id) => {
    const skill = SKILLS_AGENT_BY_LIBRARY[id];
    if (!skill) return;
    cliFiles.push({
      dir: "skills/ai-contexts",
      filename: `library-${id}.md`,
      content: `${formatSkillToMarkdown(skill)}\n`,
    });
  });

  // Domain skills (nếu config.domains tồn tại)
  const domains = Array.isArray(config.domains) ? config.domains : [];
  domains.forEach((id) => {
    const skill = SKILLS_AGENT_BY_DOMAIN[id];
    if (!skill) return;
    cliFiles.push({
      dir: "skills/ai-contexts",
      filename: `domain-${id}.md`,
      content: `${formatSkillToMarkdown(skill)}\n`,
    });
  });

  return {
    content,
    filename,
    rulesContent,
    skillsContent,
    promptsContent,
    installHint,
    cliFiles,
    ideRulesDir,
    ideMainFileAtRoot,
  };
}
