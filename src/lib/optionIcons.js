import {
  FileCode,
  Globe,
  Box,
  Wind,
  Sparkles,
  Bot,
  Code2,
  Cpu,
  Braces,
  FileJson,
  Type,
  Link2,
  FileWarning,
  Paintbrush,
} from "lucide-react";

/** Icons for stack templates (keep keyword / technical names) */
export const TEMPLATE_ICONS = {
  "next-cursor": Globe,
  "react-copilot": Box,
  "python-claude": FileCode,
  "ts-windsurf": Wind,
  "minimal-cursor": Sparkles,
};

/** Icons for IDEs / AI tools */
export const IDE_ICONS = {
  cursor: Sparkles,
  claude: Bot,
  antigravity: Cpu,
  windsurf: Wind,
  copilot: Code2,
  codex: Cpu,
  gemini: Bot,
  continue: Code2,
  cody: Bot,
  zed: Code2,
  jetbrains: Cpu,
  codeium: Code2,
  tabnine: Code2,
  replit: Globe,
  v0: Box,
};

/** Icons for naming conventions (camel, snake, pascal, kebab) */
export const CONVENTION_ICONS = {
  camel: Type,
  snake: Braces,
  pascal: FileJson,
  kebab: Link2,
};

/** Icons for Convention step sections */
export const CONVENTION_SECTION_ICONS = {
  naming: Type,
  eslint: FileWarning,
  prettier: Paintbrush,
};
