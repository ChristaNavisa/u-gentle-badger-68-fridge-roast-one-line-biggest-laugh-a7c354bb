// Fridge Roast r1: one line roasting a smart fridge.
// The line: a 3 a.m. firmware update that breaks the one job a fridge has.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE = "My fridge updated at 3 a.m. and forgot how to make ice.";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

void repoRoot;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} characters)`);
