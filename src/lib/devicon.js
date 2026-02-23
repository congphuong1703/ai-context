/**
 * Icon file names for languages, frameworks, and IDEs.
 * SVG files live in public/icons/<name>.svg (served at /icons/<name>.svg).
 */
const ICONS_BASE = "/icons";

export const LANGUAGE_DEVICON = {
  typescript: "typescript",
  javascript: "javascript",
  python: "python",
  java: "java",
  kotlin: "kotlin",
  php: "php",
  go: "go",
  rust: "rust",
  csharp: "csharp",
  ruby: "ruby",
  swift: "swift",
  scala: "scala",
  dart: "dart",
  elixir: "elixir",
  lua: "lua",
  r: "r",
};

/** Framework/library ids -> devicon name (SVG: /icons/<name>/<name>-original.svg) */
export const FRAMEWORK_DEVICON = {
  nextjs: "nextjs",
  react: "react",
  vuenuxt: "vuejs",
  nestjs: "nestjs",
  jakarta: "jakarta",
  svelte: "svelte",
  remix: "remix",
  astro: "astro",
  express: "express",
  node: "nodejs",
  fastify: "fastify",
  fastapi: "fastapi",
  django: "django",
  flask: "flask",
  streamlit: "streamlit",
  spring: "spring",
  quarkus: "quarkus",
  ktor: "ktor",
  laravel: "laravel",
  symfony: "symfony",
  slim: "slim",
  gin: "go", // gin uses go icon or plain
  fiber: "go",
  echo: "go",
  chi: "go",
  axum: "rust",
  actix: "rust",
  rocket: "rust",
  aspnet: "dotnet",
  blazor: "dotnet",
  entity: "dotnet",
  rails: "rails",
  sinatra: "ruby",
  vapor: "swift",
  swiftui: "swift",
  play: "scala",
  akka: "scala",
  flutter: "flutter",
  phoenix: "phoenix",
  openresty: "nginx",
};

/** Library ids -> icon name (SVG in public/icons/<name>.svg) */
export const LIBRARY_DEVICON = {
  tailwind: "tailwind",
  shadcn: "shadcn",
  zod: "zod",
  "react-query": "tanstack",
  zustand: "zustand",
  pydantic: "python",
  pytest: null,
  black: null,
  ruff: null,
};

/** IDE/tool ids that have a devicon (vscode, jetbrains, etc.). Others fall back to Lucide. */
export const IDE_DEVICON = {
  cursor: "cursor", // use Lucide
  claude: "claude",
  windsurf: "windsurf",
  copilot: "copilot", // or "github" for Git
  codeium: null,
  gemini: "gemini",
  continue: null,
  cody: null,
  zed: null,
  jetbrains: "jetbrains",
  tabnine: null,
  replit: "replit",
  v0: "v0",
  antigravity: "antigravity",
  codex: null,
};

export function getLanguageIconUrl(languageId) {
  const name = LANGUAGE_DEVICON[languageId];
  if (!name) return null;
  return `${ICONS_BASE}/${name}.svg`;
}

export function getFrameworkIconUrl(frameworkId) {
  const name = FRAMEWORK_DEVICON[frameworkId];
  if (!name) return null;
  return `${ICONS_BASE}/${name}.svg`;
}

export function getLibraryIconUrl(libraryId) {
  const name = LIBRARY_DEVICON[libraryId];
  if (!name) return null;
  return `${ICONS_BASE}/${name}.svg`;
}

export function getIdeIconUrl(ideId) {
  const name = IDE_DEVICON[ideId];
  if (!name) return null;
  return `${ICONS_BASE}/${name}.svg`;
}
