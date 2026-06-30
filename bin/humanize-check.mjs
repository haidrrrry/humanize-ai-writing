#!/usr/bin/env node
// humanize-check — scan text for AI-writing tells ("AI slop").
// Zero dependencies. Usage:
//   node bin/humanize-check.mjs <file>...     # check files
//   cat draft.md | node bin/humanize-check.mjs  # check stdin
//   node bin/humanize-check.mjs --quiet <file>  # only the summary
// Exit code is non-zero when tells are found (handy for CI / pre-commit).

import { readFileSync } from "node:fs";

const BANNED_WORDS = [
  "delve", "tapestry", "testament", "underscore", "underscores", "pivotal",
  "intricate", "intricacies", "meticulous", "meticulously", "garner", "garners",
  "vibrant", "bolster", "bolstered", "enduring", "interplay", "crucial",
  "valuable", "exemplify", "exemplifies", "renowned", "groundbreaking", "boast",
  "boasts", "nestled", "realm", "embark", "leverage", "leveraging", "elevate",
  "unlock", "unleash", "harness", "robust", "seamless", "seamlessly", "holistic",
  "myriad", "plethora", "cornerstone", "beacon", "paradigm", "synergy",
  "showcasing", "fostering", "additionally", "moreover", "furthermore", "notably",
];

const PHRASES = [
  // [label, regex, suggestion]
  ["em dash", /—/g, "use a comma, period, colon, or parentheses"],
  ["curly quote", /[‘’“”]/g, "use straight quotes ' \""],
  ["fake significance", /\b(stands?|serves?) as (a )?(testament|reminder|symbol)\b/gi, "say what it is and does"],
  ["fake significance", /\bmarks? a (pivotal|defining|significant) (moment|point)\b/gi, "drop the significance editorializing"],
  ["fake significance", /\b(plays?|played) an? (vital|crucial|pivotal|key|important) role\b/gi, "state the concrete contribution"],
  ["fake significance", /\b(indelible mark|setting the stage|turning point|evolving landscape|deeply rooted)\b/gi, "cut the legacy framing"],
  ["negative parallelism", /\bnot just\b[^.?!]*\bbut\b/gi, "make the positive claim directly"],
  ["negative parallelism", /\bnot only\b[^.?!]*\bbut\b/gi, "make the positive claim directly"],
  ["negative parallelism", /\bit'?s not\b[^.?!]*,\s*it'?s\b/gi, "make the positive claim directly"],
  ["negative parallelism", /\bmore than just\b/gi, "make the positive claim directly"],
  ["negative parallelism", /\brather than\b/gi, "state what it is, not what it isn't"],
  ["promo tone", /\b(cutting-edge|world-class|state-of-the-art|best-in-class|next-generation|game-changer|revolutionary)\b/gi, "describe a concrete capability"],
  ["promo tone", /\bcommitment to\b|\bdedication to\b|\bpassionate about\b|\bwe'?re excited to\b/gi, "write like a peer, not marketing"],
  ["copula avoidance", /\b(serves|stands|functions) as\b/gi, "use is/are/has"],
  ["weasel attribution", /\b(experts?|studies|researchers?|observers?|critics?|sources?) (say|show|argue|note|suggest|have cited|have noted)\b/gi, "name a source or cut it"],
  ["weasel attribution", /\bit is (widely )?(believed|considered|known|thought)\b/gi, "name a source or cut it"],
  ["notability padding", /\b(maintains?|has) an active (social media )?presence\b/gi, "cut it or give one sourced fact"],
  ["hollow conclusion", /^(\s*#*\s*)?(in conclusion|overall|ultimately|in summary)\b/gim, "stop on the last real point"],
  ["formula section", /\bdespite (its|these|the)\b[^.?!]*\bchallenges?\b/gi, "drop the Despite/challenges template"],
  ["formula section", /\b(future outlook|challenges and legacy|challenges and future directions)\b/gi, "drop the template heading"],
  ["filler phrase", /\b(in today'?s (world|fast-paced world)|when it comes to|it'?s (important|worth) (to note|noting)|needless to say|in the heart of|rich cultural heritage)\b/gi, "cut the filler"],
  ["copy-paste artifact", /\b(oaicite|contentReference|oai_citation|turn0search0|grok_card|attached_file)\b/gi, "remove leftover markup"],
  ["tracking param", /utm_source=/gi, "strip tracking params from links"],
];

const wordRegex = new RegExp(`\\b(${BANNED_WORDS.join("|")})\\b`, "gi");

function checkText(text, name) {
  const findings = [];
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    const push = (type, match, col, suggestion) =>
      findings.push({ name, line: i + 1, col: col + 1, type, match, suggestion });

    for (const m of line.matchAll(wordRegex))
      push("banned word", m[0], m.index, "swap for a plain word");

    for (const [label, rx, suggestion] of PHRASES) {
      rx.lastIndex = 0;
      const flags = rx.flags.includes("m") ? rx : rx; // already global
      for (const m of line.matchAll(new RegExp(rx.source, rx.flags.replace("m", "") + (rx.flags.includes("g") ? "" : "g"))))
        push(label, m[0], m.index, suggestion);
    }
  });
  return findings;
}

function readInput(args) {
  const files = args.filter((a) => !a.startsWith("--"));
  if (files.length === 0) {
    const stdin = readFileSync(0, "utf8");
    return [["<stdin>", stdin]];
  }
  return files.map((f) => [f, readFileSync(f, "utf8")]);
}

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const inputs = readInput(args);

let total = 0;
const byType = {};
for (const [name, text] of inputs) {
  const findings = checkText(text, name);
  total += findings.length;
  for (const f of findings) {
    byType[f.type] = (byType[f.type] || 0) + 1;
    if (!quiet)
      console.log(`${f.name}:${f.line}:${f.col}  ${f.type}: "${f.match}" — ${f.suggestion}`);
  }
}

console.log("");
if (total === 0) {
  console.log("clean — no AI tells found.");
  process.exit(0);
}
console.log(`${total} tell${total === 1 ? "" : "s"} found:`);
for (const [type, n] of Object.entries(byType).sort((a, b) => b[1] - a[1]))
  console.log(`  ${n.toString().padStart(3)}  ${type}`);
process.exit(1);
