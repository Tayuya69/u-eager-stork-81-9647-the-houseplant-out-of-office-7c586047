import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office. Last watered in March, currently photosynthesizing spite and plotting my escape to the windowsill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (113 characters, one line, no trailing newline).
import { readFileSync } from "node:fs";

const EXPECTED =
  "Out of office. Last watered in March, currently photosynthesizing spite and plotting my escape to the windowsill.";
const actual = readFileSync("/output/entry.txt", "utf8");
if (actual !== EXPECTED) {
  throw new Error("entry.txt mismatch: got " + JSON.stringify(actual));
}
if (actual.length !== 113) {
  throw new Error("entry.txt length " + actual.length + ", expected 113");
}
if (actual.includes("\n")) {
  throw new Error("entry.txt must be a single line with no trailing newline");
}
console.log("verified: entry.txt is exactly the 113-character entry line");
