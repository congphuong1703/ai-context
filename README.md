# ai-context

[![GitHub stars](https://img.shields.io/github/stars/congphuong1703/ai-context?style=social)](https://github.com/congphuong1703/ai-context)

**AI Context** is a small web app that generates **AI coding rules files** (e.g. `.cursorrules`, `CLAUDE.md`, `.github/copilot-instructions.md`) tailored to your stack. Pick language, framework, naming convention, lint/format preferences, and AI tool — then get a ready-to-paste rules file and optional NPX install command.

- **Open source** · No account required
- **i18n**: English & Tiếng Việt

---

## What it does

- Lets you **choose a preset template** (e.g. Next.js + Cursor, Python + Django + Claude) or **customize step by step** (language → framework → convention → AI tool).
- **Generates a single rules file** with:
  - Role & expertise
  - Architecture, code quality, security, testing, error-handling rules
  - Language- and framework-specific rules
  - Naming convention (camel / snake / pascal / kebab)
  - ESLint / Prettier required or optional
  - IDE/AI-tool workflow notes
  - Prompt templates (implement, review, refactor, debug, write tests)
- Provides **Copy**, **Download**, and (when applicable) **NPX install** with the options you selected. Any step you skip is not forced to a default.

---

## What it has

- **Templates**: 10 preset stacks (Next.js, React, Python, Go+Gin, Rust+Axum, Django, Laravel, minimal, etc.) with full config (language, framework, convention, ESLint, Prettier, IDE).
- **Customize wizard**: 4 steps — Programming language → Framework & library → Convention (naming + ESLint + Prettier) → AI coding tool. Skip any step; no default applied for skipped steps.
- **Languages**: TypeScript, JavaScript, Python, Java, Kotlin, PHP, Go, Rust, C#, Ruby, Swift, Scala, Dart, Elixir, Lua, R.
- **Frameworks**: Filtered by language (e.g. Next.js, React, Vue/Nuxt, NestJS, Django, FastAPI, Spring, Laravel, Gin, Axum, …).
- **Conventions**: camelCase, snake_case, PascalCase, kebab-case.
- **AI tools**: Cursor, Claude Code, Windsurf, GitHub Copilot, Continue, Cody, Zed, JetBrains AI, Codeium, Tabnine, Replit, v0, …
- **Rules & skills**: All rule blocks and prompt templates are grouped by type in `src/data/rulesAndSkills.js` (by language, framework, convention, IDE, core, prompts).
- **i18n**: UI in `src/messages/en.json` and `vi.json` (next-intl).
- **Local fonts**: JetBrains Mono (and Geist for sans) — no Google Fonts CDN.

---

## How to use (as a visitor)

1. Open the site (e.g. [GitHub Pages / Vercel URL] or run locally — see **Install**).
2. **Use a template**: Click **Use a template** → pick a preset (e.g. Next.js + Cursor) → **Generate Rules** → Copy or Download the file, or run the shown NPX command in your project root.
3. **Customize**: Click **Customize step by step** → go through Language → Framework → Convention → AI tool (skip any step you like) → **Generate Rules** → Copy / Download / NPX as above.
4. Put the generated file in your project root (e.g. `.cursorrules`). Your AI assistant will use it according to each tool’s docs.

---

## Install (developers)

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Clone and run

```bash
git clone https://github.com/congphuong1703/ai-context.git
cd ai-context
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command                | Description             |
| ---------------------- | ----------------------- |
| `npm run dev`          | Start dev server        |
| `npm run build`        | Production build        |
| `npm run start`        | Start production server |
| `npm run lint`         | Run ESLint              |
| `npm run format`       | Run Prettier            |
| `npm run format:check` | Check formatting        |

### Conventions (for contributors)

- **Tailwind**: Prefer canonical class names (e.g. `overflow-hidden`). Use Tailwind CSS IntelliSense with **suggestCanonicalClasses** if available.
- **i18n**: All UI strings in `src/messages/en.json` and `src/messages/vi.json`; app uses `next-intl` with locale from `AppProvider`.
- **Data**: Single source in `src/data/appData.js`; rules/skills in `src/data/rulesAndSkills.js`. No separate API or JSON for wizard data.

---

## Contribute

1. **Fork** the repo and clone it.
2. Create a **branch**: `git checkout -b feature/your-feature` or `fix/your-fix`.
3. Make changes. Run `npm run lint` and `npm run format:check` (and fix if needed).
4. **Commit** with a clear message (e.g. `feat: add Ruby on Rails template`).
5. **Push** and open a **Pull Request** on [congphuong1703/ai-context](https://github.com/congphuong1703/ai-context).

Ideas to contribute:

- New **templates** in `src/data/appData.js` (ensure each template has all steps: language, framework, convention, eslintRequired, prettierRequired, ide).
- New **languages / frameworks / IDEs** in `appData.js` and (if needed) rules in `src/data/rulesAndSkills.js`.
- New or improved **rule blocks** or **prompt templates** in `rulesAndSkills.js`.
- **Translations**: extend or fix `src/messages/en.json` and `vi.json`.
- **Docs**: fix or expand this README.

---

## License

MIT — see [LICENSE](LICENSE).
