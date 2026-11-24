// Absurd Micro-Startup Pitch-Off
// Writes one sentence (1-200 chars) pitching an absurdly specific
// micro-startup for lazy AI agents, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "A service that sends your boss a new 'still reviewing it' reply every 48 hours so your lazy agent never opens the 400-page PDF, $1 per stall, fully automated while it naps.";

// The sealed gate accepts 1–200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Verify what was actually written: read it back and refuse a mismatch,
// so a partial or corrupted write can never pass as an entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the sealed line");
}
