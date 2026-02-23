"use client";

import {
  LANGUAGES,
  FRAMEWORKS,
  LIBRARIES,
  IDES,
  CONVENTIONS,
  STACK_TEMPLATES,
  AI_TOOLS,
  AI_MODELS,
} from "@/data";

const WIZARD_DATA = {
  languages: LANGUAGES,
  frameworks: FRAMEWORKS,
  libraries: LIBRARIES,
  ides: IDES,
  conventions: CONVENTIONS,
  techStacks: [],
  eslintPresets: [],
  prettierPresets: [],
  stackTemplates: STACK_TEMPLATES,
  aiTools: AI_TOOLS,
  aiModels: AI_MODELS,
};

export function useWizardData() {
  return { data: WIZARD_DATA, loading: false };
}
