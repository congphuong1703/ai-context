/** Vue/Nuxt agent skill — Universal Skill Standard (7 parts). */
export const SKILL_VUENUXT = {
  metadata: {
    name: "Vue / Nuxt",
    version: "1.0",
    author: "ai-context",
    tags: ["vue", "nuxt", "framework"],
  },
  trigger:
    "When writing Vue.js or Nuxt 3 code. Keywords: component, composable, ref, reactive, defineProps, Pinia.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use Composition API exclusively with <script setup> syntax — no Options API.",
    "Define all props with full TypeScript types using defineProps<{ ... }>().",
    "Use Pinia for all global state — no Vuex, no provide/inject for global state.",
    "Use useAsyncData() or useFetch() for SSR data fetching in Nuxt — not useEffect.",
    "Place shared composables in composables/ directory following Nuxt auto-import conventions.",
    "No direct DOM manipulation — use template refs only when truly necessary.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use the Options API in new components.",
    "Do not use Vuex — Pinia is the standard for Nuxt 3.",
    "Do not mutate props directly — emit events to parent or use a store.",
    "Do not use $refs for anything that can be done reactively.",
  ],
  examples: [
    {
      input: "User wants a composable to fetch and cache user data.",
      output:
        "// composables/useUser.ts\nexport function useUser(id: Ref<number>) {\n  return useAsyncData(\n    () => `user-${id.value}`,\n    () => $fetch(`/api/users/${id.value}`),\n    { watch: [id] }\n  )\n}",
    },
  ],
};
