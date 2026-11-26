import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Star, Five Stars for the Food — make.fun entry.
// Writes a single alien-tourist one-star review of Earth (that still
// compliments the food) to /output/entry.txt. Deterministic: one fixed
// sentence, always the same bytes.
const SENTENCE =
  "One star: Earth's traffic jams last longer than our ice ages, the Wi-Fi drops if a cloud looks at it funny, but the street satay is so good I would invade again just for the peanut sauce.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, SENTENCE, "utf8");
