/**
 * Rules and skills packaged by type.
 * Used by generateRules to build the final output.
 */

/** Rules by programming language */
export const RULES_BY_LANGUAGE = {
  typescript: `## TypeScript Configuration
- tsconfig: "strict": true — mandatory, no exceptions
- Never use \`any\` → use \`unknown\` and type-narrow explicitly
- \`interface\` for object shapes; \`type\` for unions/intersections/mapped types
- Runtime validation: Zod at every external boundary (API, forms, env)
- Avoid enums → \`as const\` with \`keyof typeof\`
- Discriminated unions for state modeling`,

  javascript: `## JavaScript Standards
- ESM imports exclusively — no require() or CommonJS
- \`const\` by default; \`let\` only when reassignment is required
- async/await over Promise chains
- Handle all rejections — no floating Promises
- Optional chaining (?.) and nullish coalescing (??) over manual null checks`,

  python: `## Python Standards
- Type hints on ALL public functions and class methods — mandatory
- PEP 8 enforced via Black + Ruff
- Pydantic models for all structured data — no raw dicts at boundaries
- Context managers (\`with\`) for all file/resource handling
- Avoid mutable default arguments
- Docstrings on all public modules, classes, and functions`,

  java: `## Java Standards
- Java 17+: records, sealed classes, pattern matching instanceof
- Constructor injection ONLY — no @Autowired on fields
- Optional<T> for return types only — never parameters or fields
- Stream API for collection transforms
- Never catch Exception/Throwable without justification + re-throw
- SOLID principles strictly applied`,

  kotlin: `## Kotlin Standards
- Coroutines for all async — Flow for streams, suspend for one-shot
- data class for DTOs; sealed class/interface for state modeling
- Avoid !! null assertion — use let, Elvis, requireNotNull()
- Extension functions in dedicated utility files
- Result<T> or custom sealed types for fallible operations`,

  php: `## PHP Standards
- declare(strict_types=1) in every file — non-negotiable
- PHP 8.2+: typed properties, enums, readonly, named args
- Type hints on all params and return types
- No global variables — dependency injection only
- PSR-12 enforced via PHP-CS-Fixer`,

  go: `## Go Standards
- Handle ALL errors explicitly — never discard with _
- context.Context as first param on all IO-bound functions
- Interfaces define behavior — not structs
- Table-driven tests with t.Run
- errors.Is / errors.As for error comparison`,

  rust: `## Rust Standards
- Result<T, E> for all fallible operations — propagate with ?
- Avoid clone() unless semantically correct
- thiserror for library errors; anyhow for application errors
- tracing for structured logging
- Unit tests in same file as implementation via #[test]`,

  csharp: `## C# Standards
- Nullable reference types enabled; avoid null when possible
- async/await for all I/O; ConfigureAwait(false) in library code
- Use records for DTOs; init-only properties where appropriate
- Minimal APIs or controller-based — consistent per project
- Use dependency injection (constructor injection only)`,

  ruby: `## Ruby Standards
- Ruby 3+; use frozen_string_literal: true
- Prefer keyword args for methods with 2+ optional params
- RuboCop for style; RSpec for tests
- Avoid monkey-patching; prefer composition and modules`,

  swift: `## Swift Standards
- Swift 5+; prefer value types (struct, enum) over classes
- async/await for concurrency; actors for shared mutable state
- Optionals: use guard let / if let; avoid force unwrap
- SwiftLint for style; XCTest or Quick for tests`,

  scala: `## Scala Standards
- Prefer immutable collections and val over var
- Use Option, Either, Try; avoid null
- Tagless final or ZIO for effect management where applicable
- ScalaTest or MUnit; property-based tests with ScalaCheck`,

  dart: `## Dart Standards
- Null safety on; avoid late without justification
- Prefer final; const constructors where possible
- Effective Dart style; analysis_options.yaml enforced
- Test with test package; golden tests for UI`,

  elixir: `## Elixir Standards
- Pattern match in function heads; guard clauses for conditions
- Pipe |> for linear flows; avoid deep nesting
- Structs for data; protocols for polymorphism
- ExUnit for tests; Credo for style`,

  lua: `## Lua Standards
- Lua 5.4+; local for all variables
- Single return style per module; document table shapes
- Avoid globals; use module tables
- busted or luaunit for tests`,

  r: `## R Standards
- Tidyverse for data; base R when simpler
- Explicit namespaces (package::function) in scripts
- Functions: one job; pipe %>% for readability
- testthat for unit tests; document with roxygen2`,
};

/** Rules by framework */
export const RULES_BY_FRAMEWORK = {
  nextjs: `## Next.js (App Router)
- Server Components by default — 'use client' ONLY for DOM/hooks/browser APIs
- Route structure: app/(group)/page.tsx — colocate related components
- loading.tsx, error.tsx, not-found.tsx for every route segment
- generateMetadata() on every page for SEO
- Server Actions for mutations — never POST to own API from server
- next/image for all images (no raw <img>); next/link for all navigation
- Route Handlers: app/api/[route]/route.ts with Zod validation`,

  react: `## React Standards
- Functional components + hooks only — no class components
- Custom hooks in hooks/ for any logic shared across 2+ components
- Co-locate state as close to usage as possible
- useCallback for stable callbacks passed to children
- Suspense + lazy() for route-level code splitting
- Never use index as key when list can reorder`,

  vuenuxt: `## Vue / Nuxt Standards
- Composition API exclusively — no Options API
- <script setup> syntax for all SFCs
- Full TypeScript types on defineProps
- Pinia for global state — no Vuex
- useAsyncData / useFetch for SSR data in Nuxt
- No direct DOM manipulation — template refs only when required`,

  nestjs: `## NestJS Standards
- Module → Controller → Service → Repository layering — strict
- class-validator + class-transformer for all DTOs
- Global exception filter for consistent error shape
- Guards for auth; Interceptors for logging/transform; Pipes for validation
- ConfigModule with validation schema for all environment config`,

  spring: `## Spring Boot Standards
- Controller → Service → Repository → Entity — strict layering
- DTOs for ALL request/response — never expose JPA entities directly
- @Valid on all @RequestBody; Bean Validation annotations
- @Transactional on service layer ONLY
- Global @RestControllerAdvice for exception handling
- All config via application.yml + environment variables`,

  laravel: `## Laravel Standards
- Thin controllers, fat services/actions — no business logic in controllers
- Form Request classes for ALL validation
- API Resource/Collection for all responses — never return models
- Policy classes for all authorization
- Jobs for async/heavy operations
- Sanctum for SPA auth; no custom token logic`,

  fastapi: `## FastAPI Standards
- Pydantic v2 for all request/response schemas
- Depends() for dependency injection (DB, auth, config)
- Router files per feature domain; mount in main.py
- HTTPException with detail dicts for all errors
- lifespan context manager for startup/shutdown
- All endpoints documented with docstrings (auto-renders OpenAPI)`,

  langchain: `## LangChain / AI Standards
- Separate retrieval, reasoning, generation as distinct pipeline stages
- Validate ALL LLM output before acting on it
- Exponential backoff + jitter on every API call
- Set max_tokens, temperature, timeout explicitly on every request
- Log every LLM call: prompt, response, tokens, latency
- Circuit breaker with max_iterations to prevent runaway loops
- Persistent vector store — never re-embed per request`,

  gin: `## Gin Standards
- Route groups by resource using router.Group()
- Middleware for auth, logging, recovery — never inline
- ShouldBindJSON + struct tags for request binding
- Consistent JSON error: { "error": "...", "code": "..." }
- Thin handlers — delegate all logic to service layer`,

  axum: `## Axum Standards
- Extract types (Path, Query, Json) for all handler inputs
- Shared state via Arc<AppState>
- Error types implement IntoResponse
- Tower middleware for auth, logging, rate-limiting
- Organize routes in feature modules`,
};

/** Rules by naming convention */
export const RULES_BY_CONVENTION = {
  camel: `## Naming: camelCase
- Variables, functions, methods: \`getUserById\`, \`isActive\`
- Files/components may use PascalCase per language; variables always camelCase`,

  snake: `## Naming: snake_case
- Variables, functions, DB columns, env vars: \`user_id\`, \`get_user_by_id\`
- Use consistently for the whole project`,

  pascal: `## Naming: PascalCase
- Classes, types, components, interfaces: \`UserProfile\`, \`ApiResponse\`
- Use for all public types and component names`,

  kebab: `## Naming: kebab-case
- File names, URLs, package names: \`user-profile.tsx\`, \`api-response\`
- Use for all file and route names`,
};

/** Fallback when no convention selected */
export const RULES_CONVENTION_FALLBACK = `## Naming & style
- Follow existing project naming and style conventions.
- If the project has ESLint/Prettier config, prefer following it.`;

/** Rules by IDE / AI tool */
export const RULES_BY_IDE = {
  cursor: `## Cursor-Specific Workflow
- This file is auto-detected by Cursor in project root
- Reference in Composer: @.cursorrules for explicit inclusion
- Use @filename to include specific file context
- Cmd+K for inline edits; Cmd+I for Composer (multi-file)
- ALWAYS ask Cursor to read .cursorrules before large tasks`,

  vscode: `## VS Code / Copilot Workflow
- Copilot reads this file automatically when placed in .github/
- Use Copilot Chat with #file references for context
- @workspace for full project context in Chat
- Inline suggestions: Tab to accept, Esc to dismiss
- Copilot Edits (Ctrl+Shift+I) for multi-file changes`,

  claude: `## Claude Code Workflow
- CLAUDE.md is auto-loaded by Claude Code CLI on every session
- Use claude --continue to maintain session context
- Slash commands: /clear, /compact, /help
- Pipe output: cat file.ts | claude "refactor this"
- claude --print for non-interactive scripting`,

  windsurf: `## Windsurf / Cascade Workflow
- .windsurfrules auto-loaded in every Cascade session
- Cascade operates as an agent — describe tasks, not steps
- Use "flows" for multi-step automated tasks
- @mention files/symbols for targeted context`,

  zed: `## Zed AI Workflow
- .rules file loaded automatically in Zed AI context
- Inline AI: Ctrl+Enter to trigger suggestions
- AI Chat panel for conversation-style assistance
- Fast context switching — optimized for large codebases`,

  jetbrains: `## JetBrains AI Workflow
- AI Assistant panel: View → Tool Windows → AI Assistant
- Inline suggestions via Alt+\\
- Right-click → AI Actions for context menus
- Use AI Chat with file references for complex tasks`,

  antigravity: `## Antigravity Workflow
- Rules file is auto-loaded; reference in chat for context
- Follow project conventions when generating code`,

  codex: `## Codex Workflow
- Use rules file as context for code generation
- Adhere to project style and lint rules`,

  gemini: `## Gemini Workflow
- Load rules file for project context
- Generate code that passes project lint and format checks`,

  continue: `## Continue Workflow
- .continuerrules in project root for context
- Use @file to add context in chat`,

  cody: `## Cody Workflow
- .codyrules for project-wide context
- Reference in Cody chat for consistent style`,

  copilot: `## GitHub Copilot Workflow
- Place instructions in .github/copilot-instructions.md
- Copilot reads this file; use @workspace for full context`,

  codeium: `## Codeium Workflow
- Use project rules file for consistent suggestions
- Reference in chat for context-aware completions`,

  tabnine: `## Tabnine Workflow
- Project rules improve completion relevance
- Use for team-wide coding standards`,

  replit: `## Replit AI Workflow
- Rules file in project root for context
- Use AI features with project conventions`,

  v0: `## Vercel v0 Workflow
- Use rules for generated UI and components
- Keep design system consistent`,
};

/** ESLint / Prettier rule blocks */
export const RULES_ESLINT_PRETTIER = {
  eslintRequired: `## 📏 ESLint (REQUIRED)
- Project ESLint config is MANDATORY. All generated code MUST pass \`npm run lint\`.
- Do NOT disable or override rules without a comment and ticket reference.
- Fix on save; run \`npm run lint\` before every commit.`,
  eslintOptional: `## 📏 ESLint (optional)
- If project has ESLint, prefer following it; no strict requirement.`,
  prettierRequired: `## 📏 Prettier (REQUIRED)
- Project \`.prettierrc\` is MANDATORY. All generated code MUST pass \`npm run format:check\`.
- Format on save; run \`npm run format\` before every commit.
- Do not commit unformatted code.`,
  prettierOptional: `## 📏 Prettier (optional)
- If project has Prettier, prefer following it; no strict requirement.`,
};

/** UI & styling rules (optional, e.g. for frontend stacks) */
export const RULES_UI_STYLING = `## 🎨 UI & STYLING (Shadcn + Tailwind)
- Use shadcn/ui components from \`@/components/ui\` — do not reinvent buttons, dialogs, forms
- Use \`cn()\` from \`@/lib/utils\` for all className merging (clsx + tailwind-merge)
- Tailwind only: utility-first, no custom CSS unless necessary; use \`@apply\` sparingly
- Prefer Tailwind tokens: \`bg-background\`, \`text-foreground\`, \`border-border\`, \`rounded-lg\`
- New components: add to \`components/ui\` with \`npx shadcn@latest add [component]\` when possible
- Responsive: mobile-first (\`sm:\`, \`md:\`, \`lg:\`) and dark mode via \`dark:\` when applicable`;

/** Prompt templates / skills by category (for the generated file) */
export const SKILLS_PROMPT_TEMPLATES = {
  implement: `### IMPLEMENT FEATURE
\`\`\`
Read @{filename} completely before writing any code.

Task: Implement [FEATURE NAME]
Context: @[relevant file 1] @[relevant file 2]

Requirements:
- [requirement 1]
- [requirement 2]

Edge cases to handle:
- [null/empty input]
- [unauthorized access]
- [rate limit / timeout]

Deliverables:
- Full file path before each code block
- Unit tests in [test/directory]
- Brief explanation of each architectural decision
\`\`\``,

  review: `### CODE REVIEW
\`\`\`
Review @[filename] against @{filename}.

For each violation:
1. Line reference + the problematic code
2. Which rule it violates
3. Corrected version

Also check:
- Missing error handling
- Security vulnerabilities
- Performance issues
- Missing test coverage
\`\`\``,

  refactor: `### REFACTOR
\`\`\`
Refactor @[filename] to improve [readability/testability/performance].

Hard constraints:
- Do NOT change the public API
- All existing tests must still pass
- Every change must comply with @{filename}

For each change: show before → after → explain WHY.
\`\`\``,

  debug: `### DEBUG
\`\`\`
Debug this issue in @[filename]:

Error: [paste full stack trace]
Steps to reproduce: [describe]
Expected behavior: [what should happen]

Trace root cause step by step.
Show the fix and explain why it resolves the issue.
Check if similar code elsewhere has the same bug.
\`\`\``,

  test: `### WRITE TESTS
\`\`\`
Write comprehensive tests for @[filename].

Cover:
- Happy path with realistic data
- Null, empty, and boundary value inputs
- All error branches
- Async/concurrent behavior if applicable

Naming pattern: "should [expected] when [condition]"
Place tests in: [test/directory]
\`\`\``,
};
