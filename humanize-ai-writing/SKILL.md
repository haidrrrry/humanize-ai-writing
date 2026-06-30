---
name: humanize-ai-writing
description: Force any writing to follow human patterns and strip every known sign of AI-generated text ("AI slop"). Use whenever producing or editing prose that will be read by a person — articles, blog posts, emails, captions, essays, documentation, social copy, reports — and whenever the user says "humanize this", "make it sound human", "remove AI slop", "doesn't sound like AI", "sounds robotic", or "rewrite this naturally". Apply this as a mandatory final pass on any long-form prose before delivering it.
license: MIT
---

# Humanize AI Writing

Make every piece of prose read like a thoughtful person wrote it. This skill is
both a **guardrail while drafting** and a **rewrite pass on existing text**. It
encodes the full catalog of AI-writing tells from Wikipedia's "Signs of AI
writing" as rules you must follow.

## When this triggers
- The user asks to humanize, de-slop, or de-robotify text.
- The user says the writing "sounds like AI" or "sounds generic."
- You are about to deliver any long-form prose meant to be published or sent.
  Run the final pass (below) before sending — do not skip it.

## Workflow
1. **Read** the target text (the user's, or your own draft).
2. **Detect** — scan for every tell in `references/ai-tells.md`. Mark each hit.
3. **Rewrite** — apply `references/rewrite-rules.md`. Fix tells sentence by
   sentence. Keep the author's meaning, facts, numbers, names, and position.
4. **Self-check** — run `assets/checklist.md`. Tells cluster, so scan twice.
5. **Deliver** clean text. If you cut a claim for having no source, say so in one
   line at the end. Never describe this process inside the prose itself.

---

## THE RULES — follow all of them, every time

### 1. Banned vocabulary — never use these
delve, tapestry, testament, underscore, pivotal, intricate, intricacies,
meticulous, garner, vibrant, nestled, boasts, showcasing, foster/fostering,
landscape (figurative), realm, embark, navigate (figurative), leverage (verb),
elevate, unlock, unleash, harness, robust, seamless, holistic, myriad, plethora,
cornerstone, beacon, treasure trove, game-changer, paradigm, synergy,
ever-evolving, ever-changing, fast-paced world, "in today's world",
"when it comes to", "it's important to note", "it's worth noting",
"it is important to remember", "needless to say".

### 2. No fake significance
Don't inflate importance. Ban: "stands as," "serves as a testament,"
"marks a pivotal moment," "plays a vital/crucial role," "leaves an indelible
mark," "rich history/heritage/tapestry," "enduring legacy." State what a thing is
and does; drop the editorializing about its significance.

### 3. No present-participle padding
Don't end sentences with vague "-ing" clauses that fake depth:
"…, highlighting its importance," "…, contributing to the broader landscape,"
"…, reflecting a commitment to excellence," "…, solidifying its role as a hub."
If the clause carries no fact, delete it.

### 4. No negative parallelisms
Ban "not just X, but Y," "it's not X, it's Y," "more than just," "X isn't merely
Y," "not only… but also," "X rather than Y." A top AI tell. Make the positive
claim directly.

### 5. No rule-of-three filler
Stop auto-grouping into three adjectives or three phrases ("fast, reliable, and
scalable"). Use the count the meaning needs — often one or two. Vary list length.

### 6. Punctuation and formatting
- Em dashes: at most one every few paragraphs. Prefer a period or comma.
- Straight quotes only (" '), never curly/smart quotes.
- Almost no bold in prose. Don't bold for mechanical emphasis.
- Headings in sentence case, not Title Case.
- No inline-header lists ("**Thing**: description") unless the user asked for a
  list. Don't skip heading levels. No horizontal rules before headings.

### 7. No promotional / press-release tone
Ban "commitment to," "dedication to," "ensuring," "cutting-edge," "world-class,"
"state-of-the-art," "passionate about," "we're excited to," "revolutionary,"
"best-in-class," "next-generation." Write like a knowledgeable peer.

### 8. Specifics over hedging
Replace weasel attributions ("experts say," "studies show," "it is widely
believed," "many argue," "observers note," "research suggests") with a named
source or a concrete detail — or cut the claim. Never invent a source.

### 9. No hollow conclusions
Don't end with "In conclusion," "Overall," "Ultimately," "In summary," or a
paragraph that restates the piece. Don't speculate about "the future" or
"broader implications" unless asked. Stop on the last real point.

### 10. Vary the rhythm
Mix sentence lengths; include short ones; use fragments when natural. Let a key
word repeat rather than cycling synonyms — elegant variation ("the author… the
writer… the wordsmith") is a tell, not a virtue.

### 11. No copy-paste artifacts
Strip any leftover markup: contentReference, oaicite, oai_citation, turn0search0,
":::", "+1", grok_card, tracking params (utm_source=) in links, and curly-quote
noise.

---

## Voice defaults
- Plain copulas: "is/are/has," not "serves as / functions as / represents."
- Active voice, concrete subjects.
- Contractions are fine. Write how a competent person talks.
- Don't restate the topic at the start of every section. Get to the point.
- Don't add hype to fix flatness. Plain is the goal. Don't add fake slang either
  — that's its own tell.

## Final pass (do not skip)
Scan the draft and remove any: banned words (R1), fake significance (R2),
trailing "-ing" padding (R3), "not X but Y" (R4), forced triples (R5), excess em
dashes / bold / curly quotes / Title Case (R6), promo tone (R7), weasel
attributions (R8), "In conclusion" wrap-ups (R9), uniform rhythm (R10),
artifacts (R11). Rewrite each hit before sending. Never mention this pass.

## Reference files
- `references/ai-tells.md` — full detection catalog.
- `references/rewrite-rules.md` — fix + before/after for each tell.
- `assets/checklist.md` — the pre-ship pass as a checklist.
