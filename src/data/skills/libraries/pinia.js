/** Pinia agent skill — Universal Skill Standard (7 parts). */
export const SKILL_PINIA = {
  metadata: {
    name: "Pinia",
    version: "1.0",
    author: "ai-context",
    tags: ["pinia", "vue", "state"],
  },
  trigger:
    "When managing state with Pinia in Vue or Nuxt. Keywords: defineStore, storeToRefs, useStore.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use defineStore with the Composition API style (setup stores) for consistency with <script setup>.",
    "Use storeToRefs() to destructure store state while preserving reactivity.",
    "Keep stores focused on a single domain — one store per feature, not one global store.",
    "Use actions for all mutations — never mutate state directly from a component.",
    "Use getters for derived state — do not compute in components what can be a getter.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use the Options API style for new stores — use the Composition API setup style.",
    "Do not destructure store state without storeToRefs() — reactivity will be lost.",
    "Do not call actions that belong to Store A inside Store B — use a composable instead.",
    "Do not store non-serializable values (class instances, functions) in the store.",
  ],
  examples: [
    {
      input: "User wants a store to manage the current authenticated user.",
      output:
        "export const useAuthStore = defineStore('auth', () => {\n  const user = ref<User | null>(null)\n  const isAuthenticated = computed(() => user.value !== null)\n  async function login(credentials: LoginCredentials) {\n    user.value = await authService.login(credentials)\n  }\n  function logout() { user.value = null }\n  return { user, isAuthenticated, login, logout }\n})",
    },
  ],
};
