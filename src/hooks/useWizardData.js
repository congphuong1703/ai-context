"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import {
  LANGUAGES as FALLBACK_LANGUAGES,
  FRAMEWORKS as FALLBACK_FRAMEWORKS,
  IDES as FALLBACK_IDES,
  CONVENTIONS as FALLBACK_CONVENTIONS,
} from "@/data";

function normalizeFrameworks(raw) {
  if (!raw || typeof raw !== "object") return FALLBACK_FRAMEWORKS;
  return raw;
}

function normalizeWizardResponse(json) {
  return {
    languages:
      Array.isArray(json.languages) && json.languages.length > 0
        ? json.languages
        : FALLBACK_LANGUAGES,
    frameworks: normalizeFrameworks(json.frameworks),
    ides: Array.isArray(json.ides) && json.ides.length > 0 ? json.ides : FALLBACK_IDES,
    techStacks: Array.isArray(json.techStacks) ? json.techStacks : [],
    conventions:
      Array.isArray(json.conventions) && json.conventions.length > 0
        ? json.conventions
        : FALLBACK_CONVENTIONS,
    eslintPresets: json.eslintPresets ?? [],
    prettierPresets: json.prettierPresets ?? [],
  };
}

const FALLBACK_DATA = {
  languages: FALLBACK_LANGUAGES,
  frameworks: FALLBACK_FRAMEWORKS,
  ides: FALLBACK_IDES,
  conventions: FALLBACK_CONVENTIONS,
  techStacks: [],
  eslintPresets: [],
  prettierPresets: [],
};

export function useWizardData() {
  const query = useQuery({
    queryKey: ["wizardData"],
    queryFn: async () => {
      const { data } = await api.get("/api/data");
      return normalizeWizardResponse(data);
    },
    placeholderData: undefined,
  });

  const data = query.data ?? (query.isPending ? null : FALLBACK_DATA);
  const loading = query.isPending;

  return { data, loading };
}
