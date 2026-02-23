/**
 * AI coding tools / IDEs: dùng để xác định tool và gợi ý cách cài đặt (file + installHint).
 * Không dùng rule/skill cho IDE.
 */
export const IDES = [
  {
    id: "cursor",
    label: "Cursor",
    desc: "AI-first editor, .cursorrules",
    file: ".cursorrules",
    // Modern Cursor uses .cursor/rules/*.md(.mdc) for project rules
    rulesDir: ".cursor/rules",
    mainFileAtRoot: false,
    installHint:
      "Save this file in your project root. Cursor loads it automatically in Composer and Chat.",
  },
  {
    id: "claude",
    label: "Claude Code",
    desc: "Anthropic CLI agent",
    file: "CLAUDE.md",
    // Claude Code v2+: .claude/rules/*.md are auto-loaded
    rulesDir: ".claude/rules",
    mainFileAtRoot: true,
    installHint:
      "Save as CLAUDE.md in project root. Run with --continue so the agent sees this file.",
  },
  {
    id: "antigravity",
    label: "Antigravity",
    desc: "AI coding assistant",
    file: ".antigravityrules",
    installHint: "Place this file in project root; the tool loads it for context.",
  },
  {
    id: "windsurf",
    label: "Windsurf",
    desc: "Codeium AI editor",
    file: ".windsurfrules",
    // Wave 8+: .windsurf/rules/*.md replaces legacy .windsurfrules
    rulesDir: ".windsurf/rules",
    mainFileAtRoot: false,
    installHint: "Save in project root. Use in Cascade for high-level tasks.",
  },
  {
    id: "copilot",
    label: "GitHub Copilot",
    desc: "VS Code / JetBrains",
    file: ".github/copilot-instructions.md",
    // Copilot repo-wide rules live under .github/
    rulesDir: ".github",
    mainFileAtRoot: true,
    installHint: "Save under .github/copilot-instructions.md. Use @workspace for context.",
  },
  {
    id: "codex",
    label: "Codex",
    desc: "OpenAI Codex",
    file: ".codexrules",
    installHint: "Place in project root; reference in chat for style and lint.",
  },
  {
    id: "gemini",
    label: "Gemini",
    desc: "Google Gemini in IDE",
    file: ".geminirules",
    installHint: "Save in project root for project context; keep code lint- and format-ready.",
  },
  {
    id: "continue",
    label: "Continue",
    desc: "Continue.dev open-source",
    file: ".continuerrules",
    installHint: "Place in project root; use @file to add context in chat.",
  },
  {
    id: "cody",
    label: "Cody",
    desc: "Sourcegraph Cody",
    file: ".codyrules",
    installHint: "Place in project root; reference in chat for consistent suggestions.",
  },
  {
    id: "zed",
    label: "Zed",
    desc: "Zed editor AI",
    file: ".rules",
    installHint: "Save as .rules in project root for AI suggestions.",
  },
  {
    id: "jetbrains",
    label: "JetBrains AI",
    desc: "IntelliJ, WebStorm AI",
    // JetBrains AI Assistant project rules in .aiassistant/rules/*.md
    file: ".ai-rules",
    rulesDir: ".aiassistant/rules",
    mainFileAtRoot: false,
    installHint: "Place in project root; use AI Assistant and @file for context.",
  },
  {
    id: "codeium",
    label: "Codeium",
    desc: "Free AI pair programmer",
    file: ".codeiumrules",
    installHint: "Place in project root; reference in chat for consistent suggestions.",
  },
  {
    id: "tabnine",
    label: "Tabnine",
    desc: "AI code completion",
    file: ".tabninerules",
    installHint: "Place in project root to improve completion relevance.",
  },
  {
    id: "replit",
    label: "Replit",
    desc: "Replit AI in browser IDE",
    file: ".replitrules",
    installHint: "Place in project root; Replit AI will use project conventions.",
  },
  {
    id: "v0",
    label: "Vercel v0",
    desc: "AI UI generation",
    file: ".v0rules",
    installHint: "Use for generated UI and components; keep design system consistent.",
  },
];
