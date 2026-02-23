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
  const ideRulesDir = ideEntry && "rulesDir" in ideEntry ? (ideEntry.rulesDir ?? null) : null;
  const ideMainFileAtRoot =
    ideEntry && "mainFileAtRoot" in ideEntry ? ideEntry.mainFileAtRoot !== false : true;

  /** Split files for CLI: rules + skills (relative to IDE's rulesDir when present).
   * We always place our files under an `ai-contexts` subfolder so they are
   * clearly separated from user-defined rules in the same IDE folder.
   */
  const cliFiles = [
    {
      dir: "ai-contexts",
      filename: "naming-convention.md",
      content: `# Naming convention\n\n${conventionRules}\n`,
    },
    {
      dir: "ai-contexts",
      filename: "git-commit.md",
      content: `# Git & collaboration\n\n${RULES_GIT_COLLABORATION}\n`,
    },
    {
      dir: "ai-contexts",
      filename: "role-behavior.md",
      content: `# Role & behavior\n\n${RULES_ROLE_BEHAVIOR}\n`,
    },
    {
      dir: "ai-contexts",
      filename: "security.md",
      content: `# Security\n\n${RULES_SECURITY}\n`,
    },
    {
      dir: "ai-contexts",
      filename: "testing.md",
      content: `# Testing\n\n${RULES_TESTING}\n`,
    },
    {
      dir: "ai-contexts",
      filename: "agents.md",
      content: `# Agent skills\n\n${skillsContent}\n`,
    },
  ];

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
