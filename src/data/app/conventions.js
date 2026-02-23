/**
 * Naming and style conventions.
 */

export const CONVENTIONS = [
  { id: "camel", label: "camelCase", desc: "Variables, functions, methods" },
  { id: "snake", label: "snake_case", desc: "Files, env vars, DB columns" },
  { id: "pascal", label: "PascalCase", desc: "Classes, types, components" },
  { id: "kebab", label: "kebab-case", desc: "URLs, file names, packages" },
];

/** Default naming convention per language (snake for Python/Ruby/PHP/Elixir/R, camel for rest). */
export const DEFAULT_CONVENTION_BY_LANGUAGE = {
  python: "snake",
  ruby: "snake",
  php: "snake",
  elixir: "snake",
  r: "snake",
};

export function getDefaultConventionForLanguage(langId) {
  return DEFAULT_CONVENTION_BY_LANGUAGE[langId] ?? "camel";
}
