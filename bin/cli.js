#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");

const HELP = `
ai-contexts init — Generate AI rules file for your project

Usage:
  npx ai-contexts@latest init [options]

Options:
  --lang=<id>           Language (e.g. typescript, python). Default: typescript
  --frameworks=<ids>    Comma-separated (e.g. nestjs, nextjs, react)
  --convention=<id>     Naming: camel | snake | pascal | kebab. Default: camel
  --ide=<id>            AI tool: cursor | claude | windsurf | copilot | ... Default: cursor
  --eslint              Require ESLint
  --prettier            Require Prettier
  --libraries=<ids>     Comma-separated (e.g. tailwind, shadcn, zod)
  --force               Overwrite existing file
  --help, -h            Show this help

Examples:
  npx ai-contexts@latest init --lang=typescript --frameworks=nestjs --convention=snake --ide=claude
  npx ai-contexts@latest init --lang=python --frameworks=fastapi --ide=cursor
`.trim();

function parseArgs(argv) {
  const args = argv.slice(2);
  const config = {
    language: "typescript",
    frameworks: [],
    convention: "camel",
    ide: "cursor",
    eslintRequired: false,
    prettierRequired: false,
    libraries: [],
  };
  let force = false;

  const cmd = args[0];
  if (cmd === "init" || cmd === "--help" || cmd === "-h") {
    if (cmd === "--help" || cmd === "-h") {
      console.log(HELP);
      process.exit(0);
    }
    if (cmd === "init") args.shift();
  }

  for (const arg of args) {
    if (arg === "--help" || arg === "-h") {
      console.log(HELP);
      process.exit(0);
    }
    if (arg === "--force") {
      force = true;
      continue;
    }
    if (arg === "--eslint") {
      config.eslintRequired = true;
      continue;
    }
    if (arg === "--prettier") {
      config.prettierRequired = true;
      continue;
    }
    if (arg.startsWith("--lang=")) {
      config.language = arg.slice(7).trim();
      continue;
    }
    if (arg.startsWith("--frameworks=")) {
      config.frameworks = arg
        .slice(12)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }
    if (arg.startsWith("--convention=")) {
      config.convention = arg.slice(13).trim();
      continue;
    }
    if (arg.startsWith("--ide=")) {
      config.ide = arg.slice(6).trim();
      continue;
    }
    if (arg.startsWith("--libraries=")) {
      config.libraries = arg
        .slice(12)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }
  }

  return { config, force };
}

function main() {
  const { config, force } = parseArgs(process.argv);

  if (process.argv[2] !== "init" && process.argv[2] !== "--help" && process.argv[2] !== "-h") {
    console.log(HELP);
    process.exit(1);
  }

  const bundlePath = path.join(__dirname, "..", "dist", "cli-bundle.cjs");
  if (!fs.existsSync(bundlePath)) {
    console.error("Error: CLI bundle not found. Run: npm run build:cli");
    process.exit(1);
  }

  const { generateOutput } = require(bundlePath);
  const result = generateOutput(config);
  const cwd = process.cwd();
  const rulesDir = result.ideRulesDir ?? null;
  const mainFileAtRoot = result.ideMainFileAtRoot !== false;

  const allPaths = [];
  let mainPath = null;
  if (mainFileAtRoot) {
    // For Copilot, main file should live under .github/
    if (rulesDir && config.ide === "copilot") {
      mainPath = path.join(cwd, rulesDir, result.filename);
    } else {
      mainPath = path.join(cwd, result.filename);
    }
    allPaths.push(mainPath);
  }

  if (rulesDir && result.cliFiles && result.cliFiles.length > 0) {
    for (const { dir, filename } of result.cliFiles) {
      const rel = dir ? path.join(dir, filename) : filename;
      allPaths.push(path.join(cwd, rulesDir, rel));
    }
  }

  const existing = allPaths.filter((p) => fs.existsSync(p));
  if (existing.length > 0 && !force) {
    console.error(
      `File(s) already exist: ${existing.map((p) => path.relative(cwd, p)).join(", ")}. Use --force to overwrite.`
    );
    process.exit(1);
  }

  const writeFile = (filePath, content, label) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Created ${label}`);
  };

  if (mainFileAtRoot && mainPath) {
    writeFile(mainPath, result.content, result.filename);
  }

  if (rulesDir && result.cliFiles && result.cliFiles.length > 0) {
    for (const { dir, filename, content } of result.cliFiles) {
      const rel = dir ? path.join(dir, filename) : filename;
      writeFile(path.join(cwd, rulesDir, rel), content, `${rulesDir}/${rel}`);
    }
  }

  if (result.installHint) {
    console.log("\n" + result.installHint);
  }
}

main();
