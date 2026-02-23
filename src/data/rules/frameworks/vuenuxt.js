/** Vue / Nuxt rules */
export const RULE_VUENUXT = `## Vue / Nuxt Standards
- Composition API exclusively — no Options API
- <script setup> syntax for all SFCs
- Full TypeScript types on defineProps
- Pinia for global state — no Vuex
- useAsyncData / useFetch for SSR data in Nuxt
- No direct DOM manipulation — template refs only when required`;
