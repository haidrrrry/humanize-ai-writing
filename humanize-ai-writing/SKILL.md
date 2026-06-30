---
name: humanize-ai-writing
description: Force any writing to follow human patterns and strip every known sign of AI-generated text ("AI slop"). Use whenever producing or editing prose that will be read by a person, articles, blog posts, emails, captions, essays, documentation, social copy, reports, and whenever the user says "humanize this", "make it sound human", "remove AI slop", "doesn't sound like AI", "sounds robotic", or "rewrite this naturally". Apply this as a mandatory final pass on any long-form prose before delivering it.
---

# Humanize AI Writing

Make every piece of prose read like a thoughtful person wrote it. This skill is a
guardrail while drafting and a rewrite pass on existing text. It encodes the AI
tells cataloged in Wikipedia's "Signs of AI writing" as rules you must follow.

## When this triggers
- The user asks to humanize, de-slop, or de-robotify text.
- The user says writing "sounds like AI" or "sounds generic."
- You're about to deliver any long-form prose. Run the final pass before sending.

## Workflow
1. **Read** the target text (the user's, or your own draft).
2. **Detect**: scan against `references/ai-tells.md`. Mark each hit.
3. **Rewrite**: apply `references/rewrite-rules.md`. Fix tells sentence by
   sentence. Keep meaning, facts, numbers, names, and the author's position.
4. **Self-check**: run `assets/checklist.md`. Tells cluster, so scan twice.
5. **Deliver** clean text. If you cut a claim for lacking a source, say so in one
   line. Never describe this process inside the prose.

---

## THE RULES, follow all of them

1. **Banned vocabulary**: delve, tapestry, testament, underscore, pivotal,
   intricate, meticulous, garner, vibrant, bolstered, enduring, interplay,
   crucial, valuable, exemplify, renowned, groundbreaking, boasts, nestled,
   landscape (figurative), realm, embark, leverage (verb), elevate, unlock,
   unleash, harness, robust, seamless, holistic, myriad, plethora, cornerstone,
   beacon, paradigm, synergy. Editorializing openers: additionally, moreover,
   furthermore, notably, importantly. Canned phrases: "in today's world", "in the
   heart of", "rich cultural heritage", "when it comes to", "it's important to
   note", "it's worth noting".
2. **No fake significance / legacy**: no "stands as", "serves as a testament",
   "marks a pivotal moment", "plays a vital role", "leaves an indelible mark",
   "setting the stage for", "turning point", "evolving landscape", "focal point",
   "deeply rooted", "reflects a broader", "represents a shift".
3. **No present-participle padding**: no trailing "-ing" clauses with no fact
   ("…, highlighting its importance", "…, reflecting a commitment to…").
4. **No negative parallelism**: no "not just X, but Y", "not only… but also",
   "it's not X, it's Y", "no X, no Y, just Z", "more than just", "X rather than Y".
5. **No rule-of-three filler**: use the count the meaning needs, not always three.
6. **Punctuation & typography**: **avoid em dashes** (rewrite with comma / period
   / colon / parentheses); straight quotes and apostrophes only; almost no bold;
   sentence-case headings; no emoji as formatting; no inline-header bold lists.
7. **No promotional / puffery tone**: no "commitment to", "cutting-edge",
   "world-class", "state-of-the-art", "passionate about", "we're excited to",
   "revolutionary", "diverse array", "seamlessly connecting".
8. **Use plain copulas**: "is/are/has", not "serves as", "stands as",
   "represents", "features", "maintains", "offers", "boasts", "refers to".
9. **Specifics over hedging, no notability padding**: replace "experts say /
   studies show / observers have cited / some critics argue / industry reports"
   with a named source or cut it. No lists of media the subject appeared in. Never
   write "maintains an active social media presence". Never invent a source.
10. **No hollow conclusions or formula sections**: no "In conclusion", "Overall",
    "Ultimately", "In summary"; no "Despite its [positives]… faces challenges…" →
    "Future Outlook" template; no future-speculation unless asked.
11. **Vary rhythm**: mix sentence lengths, use short ones, allow fragments. Let a
    word repeat instead of cycling synonyms (no elegant variation).
12. **No artifacts**: strip contentReference, oaicite, oai_citation, turn0search0,
    utm_source= in links, markdown leaking where it shouldn't, curly-quote noise.

## Voice defaults
- Active voice, concrete subjects. Contractions are fine.
- Don't restate the topic at the start of every section.
- Don't add hype to fix flatness or fake slang to "sound human". Plain is the goal.

## Important, don't overcorrect
A single flagged word is not proof of AI, and detectors are unreliable. Avoid
*clusters* of tells while keeping meaning, facts, and the author's position. Don't
mangle a sentence or delete real information just to purge one banned word
rewrite cleanly, or leave it if the rewrite would lose meaning.

## Final pass (do not skip)
Re-scan and rewrite any hit for rules 1–12 before sending. Never mention this pass.

## Reference files
- `references/ai-tells.md`, full detection catalog.
- `references/rewrite-rules.md`, fix + before/after for each tell.
- `assets/checklist.md`, the pre-ship checklist.
