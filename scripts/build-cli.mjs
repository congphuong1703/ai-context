/**
 * Bundle src/lib/generateRules.js and dependencies for Node CLI.
 * Resolves @/ to src/ so the same code works in Next and in Node.
 */
import * as esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

await esbuild.build({
  entryPoints: [path.join(root, "src/lib/generateRules.js")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(root, "dist/cli-bundle.cjs"),
  alias: {
    "@/data": path.join(root, "src/data/index.js"),
    "@/data/*": path.join(root, "src/data"),
    "@/lib/dateFormats": path.join(root, "src/lib/dateFormats.js"),
    "@/lib/*": path.join(root, "src/lib"),
  },
  mainFields: ["module", "main"],
  external: [],
});

console.log("CLI bundle written to dist/cli-bundle.cjs");
