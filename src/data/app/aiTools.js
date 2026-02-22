/**
 * AI tools by IDE context and available models per tool.
 */

export const AI_TOOLS = {
  cursor: [{ id: "cursor-ai", label: "Cursor AI", desc: "Built-in Composer & Chat" }],
  vscode: [
    { id: "copilot", label: "GitHub Copilot", desc: "Inline + Chat" },
    { id: "continue", label: "Continue.dev", desc: "Open-source AI assistant" },
    { id: "cody", label: "Sourcegraph Cody", desc: "Context-aware AI" },
  ],
  claude: [{ id: "claude-api", label: "Claude (Anthropic)", desc: "claude-sonnet, claude-opus" }],
  zed: [{ id: "zed-ai", label: "Zed AI", desc: "Built-in Zed assistant" }],
  jetbrains: [
    { id: "jb-ai", label: "JetBrains AI", desc: "AI Assistant plugin" },
    { id: "copilot", label: "GitHub Copilot", desc: "JetBrains plugin" },
  ],
  windsurf: [{ id: "cascade", label: "Cascade", desc: "Windsurf's AI agent" }],
};

export const AI_MODELS = {
  "cursor-ai": [
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "RECOMMENDED" },
    { id: "claude-opus", label: "claude-opus-4", badge: "POWERFUL" },
    { id: "gpt4o", label: "gpt-4o", badge: "" },
    { id: "cursor-small", label: "cursor-small", badge: "FAST" },
  ],
  copilot: [
    { id: "gpt4o", label: "GPT-4o", badge: "DEFAULT" },
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "RECOMMENDED" },
    { id: "gemini", label: "Gemini 2.0 Flash", badge: "" },
  ],
  "claude-api": [
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "RECOMMENDED" },
    { id: "claude-opus", label: "claude-opus-4", badge: "POWERFUL" },
    { id: "claude-haiku", label: "claude-haiku-4-5", badge: "FAST" },
  ],
  continue: [
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "RECOMMENDED" },
    { id: "gpt4o", label: "GPT-4o", badge: "" },
    { id: "llama", label: "Llama 3.3 70B", badge: "LOCAL" },
  ],
  cascade: [
    { id: "cascade-base", label: "Cascade Base", badge: "DEFAULT" },
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "RECOMMENDED" },
  ],
  "zed-ai": [
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "DEFAULT" },
    { id: "gpt4o", label: "GPT-4o", badge: "" },
  ],
  "jb-ai": [
    { id: "jb-default", label: "JetBrains Default", badge: "" },
    { id: "openai", label: "OpenAI", badge: "" },
  ],
  cody: [
    { id: "claude-sonnet", label: "claude-sonnet-4-5", badge: "DEFAULT" },
    { id: "gpt4o", label: "GPT-4o", badge: "" },
  ],
};
