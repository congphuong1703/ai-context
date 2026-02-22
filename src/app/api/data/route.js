import { readFileSync } from "fs";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "data", "wizard.json");

export async function GET() {
  try {
    const text = readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(text);
    return Response.json(data);
  } catch (e) {
    return Response.json(
      {
        languages: [],
        frameworks: {},
        ides: [],
        aiTools: {},
        aiModels: {},
        techStacks: [],
        conventions: [],
        eslintPresets: [],
        prettierPresets: [],
      },
      { status: 500 }
    );
  }
}
