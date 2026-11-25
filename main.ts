import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "88 submits, 36 finals, $0 — then the log wrote 'GPU found: 2x Tesla T4', the week's only win.";

const len = [...LINE].length;
if (len < 1 || len > 100) {
  throw new Error(`entry must be 1-100 chars, got ${len}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
