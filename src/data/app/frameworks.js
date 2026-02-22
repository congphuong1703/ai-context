/**
 * Frameworks per language. Key = language id.
 */

export const FRAMEWORKS = {
  typescript: [
    { id: "nextjs", label: "Next.js", desc: "App Router, RSC, Server Actions" },
    { id: "react", label: "React", desc: "Vite / CRA, hooks, SPA" },
    { id: "vuenuxt", label: "Vue / Nuxt", desc: "Composition API, Nuxt 3" },
    { id: "nestjs", label: "NestJS", desc: "Node.js backend framework" },
    { id: "svelte", label: "SvelteKit", desc: "Compiler-based framework" },
    { id: "remix", label: "Remix", desc: "Full-stack React framework" },
    { id: "astro", label: "Astro", desc: "Content-focused static sites" },
    { id: "express", label: "Express", desc: "Minimal Node server" },
  ],
  javascript: [
    { id: "nextjs", label: "Next.js", desc: "App Router, RSC" },
    { id: "react", label: "React", desc: "Hooks, SPA" },
    { id: "vuenuxt", label: "Vue / Nuxt", desc: "Composition API" },
    { id: "express", label: "Express", desc: "Minimal Node server" },
    { id: "node", label: "Node.js", desc: "Vanilla Node runtime" },
    { id: "remix", label: "Remix", desc: "Full-stack React" },
    { id: "svelte", label: "SvelteKit", desc: "Compiled UI" },
    { id: "fastify", label: "Fastify", desc: "Fast Node HTTP server" },
  ],
  python: [
    { id: "fastapi", label: "FastAPI", desc: "Modern async API" },
    { id: "django", label: "Django", desc: "Batteries-included MVC" },
    { id: "flask", label: "Flask", desc: "Micro framework" },
    { id: "langchain", label: "LangChain", desc: "LLM orchestration" },
    { id: "streamlit", label: "Streamlit", desc: "Data apps & dashboards" },
    { id: "celery", label: "Celery", desc: "Distributed task queue" },
  ],
  java: [
    { id: "spring", label: "Spring Boot", desc: "Enterprise Java standard" },
    { id: "quarkus", label: "Quarkus", desc: "Cloud-native Java" },
    { id: "micronaut", label: "Micronaut", desc: "JVM microservices" },
    { id: "jakarta", label: "Jakarta EE", desc: "Enterprise Java" },
  ],
  kotlin: [
    { id: "spring", label: "Spring Boot", desc: "Kotlin + Spring" },
    { id: "ktor", label: "Ktor", desc: "Async Kotlin framework" },
    { id: "compose", label: "Compose Multiplatform", desc: "UI across platforms" },
  ],
  php: [
    { id: "laravel", label: "Laravel", desc: "Elegant PHP framework" },
    { id: "symfony", label: "Symfony", desc: "Enterprise PHP components" },
    { id: "slim", label: "Slim", desc: "Micro framework" },
  ],
  go: [
    { id: "gin", label: "Gin", desc: "Fast HTTP router" },
    { id: "fiber", label: "Fiber", desc: "Express-inspired for Go" },
    { id: "echo", label: "Echo", desc: "High-performance web" },
    { id: "chi", label: "Chi", desc: "Lightweight router" },
  ],
  rust: [
    { id: "axum", label: "Axum", desc: "Tower-based web framework" },
    { id: "actix", label: "Actix Web", desc: "High-performance actor model" },
    { id: "rocket", label: "Rocket", desc: "Type-safe web framework" },
  ],
  csharp: [
    { id: "aspnet", label: "ASP.NET Core", desc: "Cross-platform web API" },
    { id: "blazor", label: "Blazor", desc: "WebAssembly / Server UI" },
    { id: "entity", label: "Entity Framework", desc: "ORM for .NET" },
  ],
  ruby: [
    { id: "rails", label: "Ruby on Rails", desc: "Convention over config" },
    { id: "sinatra", label: "Sinatra", desc: "DSL for web apps" },
    { id: "hanami", label: "Hanami", desc: "Lightweight Ruby web" },
  ],
  swift: [
    { id: "vapor", label: "Vapor", desc: "Server-side Swift" },
    { id: "swiftui", label: "SwiftUI", desc: "Declarative UI" },
  ],
  scala: [
    { id: "play", label: "Play Framework", desc: "Reactive Scala/Java" },
    { id: "akka", label: "Akka", desc: "Actor model toolkit" },
  ],
  dart: [{ id: "flutter", label: "Flutter", desc: "Cross-platform UI" }],
  elixir: [{ id: "phoenix", label: "Phoenix", desc: "Productive Elixir web" }],
  lua: [
    { id: "lapis", label: "Lapis", desc: "MoonScript/Lua web" },
    { id: "openresty", label: "OpenResty", desc: "Nginx + Lua" },
  ],
  r: [
    { id: "shiny", label: "Shiny", desc: "Interactive R web apps" },
    { id: "plumber", label: "Plumber", desc: "R API as a service" },
  ],
};
