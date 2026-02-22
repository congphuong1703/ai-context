/**
 * Wizard step definitions and default values.
 */

export const STEPS = [
  { id: "language", label: "Language", icon: "01" },
  { id: "framework", label: "Framework", icon: "02" },
  { id: "convention", label: "Convention", icon: "03" },
  { id: "ide", label: "AI Tool", icon: "04" },
  { id: "result", label: "Get Rules", icon: "05" },
];

export const STEP_KEYS = ["language", "framework", "convention", "ide", "result"];
export const TOTAL_STEPS = 4;

export const DEFAULTS = {
  language: "typescript",
  framework: null,
  convention: null,
  eslintRequired: false,
  prettierRequired: false,
  ide: "cursor",
};
