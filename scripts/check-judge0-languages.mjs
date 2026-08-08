#!/usr/bin/env node
/**
 * Print the language IDs and runtime versions your Judge0 instance actually supports,
 * and diff them against helpers/languages.js.
 *
 * Why this exists: the `id` values in helpers/languages.js map to Judge0 language IDs.
 * They are instance-specific — they differ between Judge0 CE, self-hosted builds and
 * RapidAPI tiers. Guessing them breaks code execution silently, so the versions shown
 * on the site were left as-is and this script was added to let you update them safely.
 *
 * Usage:
 *   RAPID_API_HOST=... RAPID_API_KEY=... node scripts/check-judge0-languages.mjs
 *
 * Then update `id` and `runtime` in helpers/languages.js from the output.
 * `runtime` is display-only; `id` is what actually executes.
 */

import { languageOptions } from "../helpers/languages.js";

const host = process.env.RAPID_API_HOST;
const key = process.env.RAPID_API_KEY;

if (!host || !key) {
  console.error(
    "Missing RAPID_API_HOST or RAPID_API_KEY.\n" +
      "Run with:  RAPID_API_HOST=... RAPID_API_KEY=... node scripts/check-judge0-languages.mjs"
  );
  process.exit(1);
}

const url = `https://${host}/languages`;

try {
  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Host": host,
      "X-RapidAPI-Key": key,
    },
  });

  if (!res.ok) {
    console.error(`Request failed: ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const available = await res.json();
  const byId = new Map(available.map((l) => [l.id, l.name]));

  console.log(`\nJudge0 reports ${available.length} available languages.\n`);

  console.log("=== YOUR CURRENT MAPPINGS ===");
  let drift = 0;
  for (const lang of languageOptions) {
    const actual = byId.get(lang.id);
    if (!actual) {
      console.log(
        `  ✗ ${lang.displayName.padEnd(12)} id=${String(lang.id).padEnd(4)} NOT FOUND on this instance`
      );
      drift++;
    } else if (actual !== lang.name) {
      console.log(
        `  ~ ${lang.displayName.padEnd(12)} id=${String(lang.id).padEnd(4)} configured "${lang.name}" -> actual "${actual}"`
      );
      drift++;
    } else {
      console.log(
        `  ✓ ${lang.displayName.padEnd(12)} id=${String(lang.id).padEnd(4)} ${actual}`
      );
    }
  }

  const configured = new Set(languageOptions.map((l) => l.id));
  const unused = available.filter((l) => !configured.has(l.id));

  console.log(
    `\n=== ${unused.length} AVAILABLE BUT NOT ENABLED (each = a potential new indexable page) ===`
  );
  for (const l of unused) {
    console.log(`  id=${String(l.id).padEnd(4)} ${l.name}`);
  }

  console.log(
    drift === 0
      ? "\nAll configured IDs match this instance.\n"
      : `\n${drift} mapping(s) differ. Update \`id\` and \`runtime\` in helpers/languages.js.\n`
  );
} catch (err) {
  console.error("Failed to reach Judge0:", err.message);
  process.exit(1);
}
