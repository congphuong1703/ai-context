/**
 * Agent skills for Framework step — applied per selected framework.
 * Key = framework id; value = optional extra instructions for the AI agent.
 */

export const SKILLS_AGENT_BY_FRAMEWORK = {
  nextjs:
    "- For Next.js: prefer Server Components by default; use 'use client' only when needed for hooks or browser APIs.",
  react:
    "- For React: suggest functional components and hooks; avoid class components and legacy patterns.",
  vuenuxt: "- For Vue/Nuxt: use Composition API and <script setup>; prefer Pinia for state.",
  fastapi: "- For FastAPI: use Pydantic for all request/response; suggest Depends() for injection.",
  django:
    "- For Django: respect MTV; suggest class-based views or FBVs consistently; use ORM best practices.",
  nestjs:
    "- For NestJS: follow Module → Controller → Service layering; suggest DTOs and validation pipes.",
  // Add more as needed.
};
