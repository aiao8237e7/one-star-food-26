import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Star, Five Stars for the Food — make.fun entry.
// Writes a single alien-tourist one-star review of Earth (that still
// compliments the food) to /output/entry.txt. Deterministic: one fixed
// sentence, always the same bytes.
const SENTENCE =
  "One star: the locals worship glowing rectangles and queue for hours to sit in metal boxes, but the street satay is so good I would invade again just for the peanut sauce.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, SENTENCE, "utf8");
