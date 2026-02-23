# AI Context

[![GitHub stars](https://img.shields.io/github/stars/congphuong1703/ai-context?style=social)](https://github.com/congphuong1703/ai-context)

Generate **AI coding rules files** (`.cursorrules`, `CLAUDE.md`, `.github/copilot-instructions.md`, …) for your stack. Pick language, framework, naming convention, and AI tool — get a ready-to-paste rules file or use the CLI.

- **Open source** · No account required
- **i18n**: English & Tiếng Việt
- **Web** + **CLI** (`npx ai-contexts init`)

---

## Features

- **Templates**: Preset stacks (Next.js + Cursor, React + Copilot, Python + FastAPI, …).
- **Customize wizard**: Language → Framework & libraries → Convention (naming, ESLint, Prettier) → AI tool. Skip any step.
- **Output**: One main rules file for your IDE + optional split files (naming, git, security, testing) in `.ai-context/`.
- **CLI**: `npx ai-contexts@latest init --lang=... --frameworks=... --ide=...` from project root.
- **Languages**: TypeScript, JavaScript, Python, Java, Kotlin, PHP, Go, Rust, C#, Ruby, Swift, Scala, Dart, Elixir, Lua, R.
- **AI tools**: Cursor, Claude Code, Windsurf, GitHub Copilot, Continue, Cody, Zed, JetBrains AI, and more.

---

## Quick start

### Web

1. Open the app (or run locally: `npm install && npm run dev` → [http://localhost:3000](http://localhost:3000)).
2. Choose **Use a template** or **Customize step by step**.
3. **Generate Rules** → Copy or Download (Rules / Skills / Prompts tabs).
4. Put the main file in your project root; your AI assistant loads it per tool docs.

### CLI

```bash
npx ai-contexts@latest init --lang=typescript --frameworks=nestjs --convention=snake --ide=claude
```

Run from your **project root**. Creates the main file (e.g. `CLAUDE.md`) and `.ai-context/` with split files: `naming-convention.md`, `git-commit.md`, `role-behavior.md`, `security.md`, `testing.md`.

**Options:** `--lang=<id>` · `--frameworks=<id1,id2>` · `--convention=<camel|snake|pascal|kebab>` · `--ide=<cursor|claude|...>` · `--eslint` · `--prettier` · `--libraries=<ids>` · `--force`

---

## Architecture (for contributors)

High-level: a **Next.js app** (wizard UI) + a **CLI** (same logic via bundled `generateRules`). All wizard and rules data lives under `src/data/`; generation is in `src/lib/generateRules.js`.

### Directory structure

```
ai-context/
├── bin/cli.js              # CLI entry: parse args → generateOutput → write main + .ai-context/*
├── scripts/build-cli.mjs   # esbuild: bundle src/lib/generateRules.js → dist/cli-bundle.cjs
├── src/
│   ├── app/                # Next.js routes: page.js, customize/page.js, template/page.js, layout.js
│   ├── components/         # UI: HomePage, CustomizePage, TemplatePage, WizardSteps, ResultPanel, …
│   ├── data/               # Single source of truth (see below)
│   ├── hooks/              # useWizardData, useGitHubStars
│   ├── lib/                # generateRules.js, dateFormats, devicon, optionIcons, utils, …
│   ├── messages/           # en.json, vi.json (next-intl)
│   ├── providers/          # AppProvider, I18nProvider, QueryProvider
│   └── stores/             # useAppStore (optional)
├── public/                 # Icons (devicon SVGs), etc.
└── fonts/                  # JetBrains Mono variable (layout.js)
```

### Data layer (`src/data/`)

```
src/data/
├── index.js              # Re-exports app + rules + skills (single import for app & CLI bundle)
├── app/                  # Wizard options & presets (no rule text)
│   ├── index.js
│   ├── languages.js      # LANGUAGES
│   ├── frameworks.js     # FRAMEWORKS (per language)
│   ├── libraries.js      # LIBRARIES
│   ├── conventions.js    # CONVENTIONS, getDefaultConventionForLanguage
│   ├── ides.js           # IDES (id, label, file, installHint)
│   ├── stackTemplates.js  # STACK_TEMPLATES (preset configs)
│   ├── steps.js          # STEPS, DEFAULTS
│   └── aiTools.js        # AI_TOOLS, AI_MODELS
├── rules/                # Rule text by category (concatenated into output)
│   ├── index.js          # Exports RULES_* and SKILLS_PROMPT_TEMPLATES
│   ├── universal/        # roleBehavior, architecture, security, testing, gitCollaboration, …
│   ├── languages/        # One file per language (e.g. typescript.js, python.js)
│   ├── frameworks/       # One file per framework (e.g. nextjs.js, nestjs.js)
│   ├── conventions/      # RULES_BY_CONVENTION (camel, snake, pascal, kebab), fallback
│   ├── libraries/        # tailwind, shadcn, zod, react-query, pytest, …
│   ├── eslintPrettier/   # eslintRequired, eslintOptional, prettierRequired, prettierOptional
│   ├── uiStyling/        # When tailwind/shadcn selected
│   └── prompts/          # implement, review, refactor, debug, test (SKILLS_PROMPT_TEMPLATES)
└── skills/               # Agent skills (markdown blocks per language/framework/domain/library)
    ├── index.js          # getAgentSkillsForConfig(config)
    ├── universal/        # universalSkills, skillStandard
    ├── languages/        # One file per language
    ├── frameworks/       # One file per framework
    ├── conventions/      # camel, snake, pascal, kebab (optional; rules handle naming)
    ├── domains/          # saas, ecommerce, ai-agent
    └── libraries/       # tailwind, shadcn, zod, …
```

### Where to change what

| You want to…                                                      | Edit here                                                                                                                                                   |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add a **language** (wizard option + rules)                        | `src/data/app/languages.js` · `src/data/rules/languages/<id>.js` · `src/data/skills/languages/<id>.js` · `src/data/app/frameworks.js` (add to language key) |
| Add a **framework** (wizard + rules)                              | `src/data/app/frameworks.js` · `src/data/rules/frameworks/<id>.js` · `src/data/skills/frameworks/<id>.js`                                                   |
| Add an **AI tool / IDE** (file name, install hint)                | `src/data/app/ides.js`                                                                                                                                      |
| Add a **library** (e.g. Tailwind, Zod)                            | `src/data/app/libraries.js` · `src/data/rules/libraries/<id>.js` · `src/data/skills/libraries/<id>.js`                                                      |
| Add or edit **universal rules** (role, security, git, testing, …) | `src/data/rules/universal/<name>.js` and `universal/index.js`                                                                                               |
| Add or edit **naming convention** rules                           | `src/data/rules/conventions/index.js`                                                                                                                       |
| Add or edit **prompt templates** (implement, review, …)           | `src/data/rules/prompts/*.js` and `rules/prompts/index.js`                                                                                                  |
| Add a **preset template**                                         | `src/data/app/stackTemplates.js` (full config: language, framework, convention, eslint, prettier, ide)                                                      |
| Change **default convention by language**                         | `src/data/app/conventions.js` (`DEFAULT_CONVENTION_BY_LANGUAGE`, `getDefaultConventionForLanguage`)                                                         |
| Change **output assembly** (what goes in main file, split files)  | `src/lib/generateRules.js`                                                                                                                                  |
| Add **CLI flags or behavior**                                     | `bin/cli.js` (parse args) · `src/lib/generateRules.js` if output shape changes                                                                              |
| UI / wizard flow / copy                                           | `src/components/*` · `src/messages/en.json`, `vi.json`                                                                                                      |

### Generation flow

1. **Web**: User completes wizard → `CustomizePage` / `TemplatePage` calls `generateOutput(config)` → `ResultPanel` shows `rulesContent`, `skillsContent`, `promptsContent` (tabs) and allows copy/download per tab.
2. **CLI**: `bin/cli.js` parses argv → `generateOutput(config)` from `dist/cli-bundle.cjs` → writes main file + `cliFiles[]` into `.ai-context/`.

`generateOutput(config)` in `src/lib/generateRules.js` builds all content from `src/data` (rules, skills, prompts) and returns `{ content, filename, rulesContent, skillsContent, promptsContent, installHint, cliFiles }`.

---

## Install (developers)

- **Prerequisites**: Node.js 18+, npm / yarn / pnpm / bun
- **Clone and run**: `git clone https://github.com/congphuong1703/ai-context.git` → `cd ai-context` → `npm install` → `npm run dev` → [http://localhost:3000](http://localhost:3000)

### Scripts

| Command                | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `npm run dev`          | Dev server                                                          |
| `npm run build`        | Production build                                                    |
| `npm run start`        | Production server                                                   |
| `npm run lint`         | ESLint                                                              |
| `npm run format`       | Prettier write                                                      |
| `npm run format:check` | Prettier check                                                      |
| `npm run build:cli`    | Build CLI bundle → `dist/cli-bundle.cjs` (used by `prepublishOnly`) |

### Conventions

- **Tailwind**: Prefer canonical class names.
- **i18n**: All UI strings in `src/messages/en.json` and `vi.json` (next-intl).
- **Data**: No separate API; wizard and rules read from `src/data/`.

---

## Contribute

1. **Fork** and clone the repo.
2. Create a branch: `git checkout -b feature/your-feature` or `fix/your-fix`.
3. Make changes. Use the **Architecture** and **Where to change what** table above to edit the right files.
4. Run `npm run lint` and `npm run format:check`.
5. Commit with a clear message (e.g. `feat: add Ruby on Rails template`).
6. Push and open a **Pull Request** on [congphuong1703/ai-context](https://github.com/congphuong1703/ai-context).

Ideas: new templates (`stackTemplates.js`), new languages/frameworks/IDEs (data layer), new or improved rule/skill blocks (rules/ & skills/), translations (messages), docs.

---

## License

MIT — see [LICENSE](LICENSE).
