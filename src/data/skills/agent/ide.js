/**
 * Agent skills for AI Tool / IDE step — how to reference rules file and use the tool.
 */

export const SKILLS_AGENT_BY_IDE = {
  cursor:
    "- In Cursor: reference @.cursorrules in Composer for large tasks; use Cmd+K for inline edits.",
  claude: "- In Claude Code: this file is auto-loaded; use --continue for session context.",
  windsurf: "- In Windsurf: .windsurfrules is loaded in Cascade; describe tasks at high level.",
  copilot:
    "- In Copilot: instructions in .github/copilot-instructions.md; use @workspace for context.",
  continue: "- In Continue: .continuerrules in project root; use @file to add context.",
  cody: "- In Cody: .codyrules provides project context; reference in chat for consistency.",
  zed: "- In Zed: .rules is loaded for AI; use for consistent suggestions.",
  // Add more as needed.
};
