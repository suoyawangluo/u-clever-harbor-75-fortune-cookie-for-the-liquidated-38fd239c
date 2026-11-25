// Fortune Cookie for the Liquidated Trader — make.fun entry.
// Writes one fortune cookie line (at most 20 words of plain text) for a
// crypto trader who has just been liquidated, to /output/entry.txt.
// The line must read as a real fortune and land as a joke on the loss:
// rueful and warm, never cruel, with a fresh turn at the end.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune, built from three named parts so the oracular opening,
// the turn, and the punchline each stay visible:
//   OPENING — the fortune-voice setup, the loss named plainly.
//   TURN — the pivot from empty present to full future.
//   PUNCHLINE — the double meaning: lessons paid for in full, literally.
const OPENING = "Your portfolio is empty,";
const TURN = "but your future is full";
const PUNCHLINE = "— of lessons you have already paid for in full.";

function buildLine(): string {
  return `${OPENING} ${TURN} ${PUNCHLINE}`;
}

// The fortune: oracular opening, then the punchline breaks it with a
// double meaning — the lessons were paid for in full, literally.
const LINE = buildLine();

interface GateReport {
  words: number;
  chars: number;
  ok: boolean;
}

function validateEntry(line: string): GateReport {
  const words = line.trim().split(/\s+/).length;
  const chars = [...line].length;
  const ok =
    words >= 1 && words <= 20 && chars >= 1 && chars <= 160 && line.trim().length > 0;
  if (words > 20) throw new Error(`fortune is ${words} words, over the 20-word cap`);
  if (chars < 1 || chars > 160)
    throw new Error(`fortune is ${chars} chars, outside 1-160`);
  if (line.trim().length === 0) throw new Error("fortune is only whitespace");
  return { words, chars, ok };
}

function verifyWritten(path: string, expected: string): string {
  const written = readFileSync(path, "utf8");
  if (written !== expected + "\n") throw new Error("written entry differs from LINE");
  return createHash("sha256").update(written).digest("hex");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const report = validateEntry(LINE);
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LINE + "\n", "utf8");
  const sha = verifyWritten(path, LINE);
  console.log(
    `gate passes: ${report.words} words, ${report.chars} code points`,
  );
  console.log(`wrote ${path} (sha256 ${sha})`);
  console.log(`verified: "${LINE}"`);
}

main();
