/**
 * Devicon icon names for languages and IDEs.
 * SVG URL: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<name>/<name>-original.svg
 */
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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

/** IDE/tool ids that have a devicon (vscode, jetbrains, etc.). Others fall back to Lucide. */
export const IDE_DEVICON = {
  cursor: null, // use Lucide
  claude: null,
  windsurf: null,
  copilot: "github", // or "github" for Git
  codeium: null,
  gemini: null,
  continue: null,
  cody: null,
  zed: null,
  jetbrains: "jetbrains",
  tabnine: null,
  replit: "replit",
  v0: null,
  antigravity: null,
  codex: null,
};

export function getLanguageIconUrl(languageId) {
  const name = LANGUAGE_DEVICON[languageId];
  if (!name) return null;
  return `${CDN}/${name}/${name}-original.svg`;
}

export function getFrameworkIconUrl(frameworkId) {
  const name = FRAMEWORK_DEVICON[frameworkId];
  if (!name) return null;
  return `${CDN}/${name}/${name}-original.svg`;
}

export function getIdeIconUrl(ideId) {
  const name = IDE_DEVICON[ideId];
  if (!name) return null;
  return `${CDN}/${name}/${name}-original.svg`;
}
