---
name: humanize-ai-writing
description: Strip the tells that make text read as AI-generated ("AI slop") and rewrite it to sound like a thoughtful human. Use whenever the user asks for writing that "doesn't sound like AI", "sounds human", "remove AI slop", "humanize this", or when producing any prose meant to be published or sent — articles, blog posts, emails, captions, essays, docs, Wikipedia-style content. Apply proactively to any long-form prose deliverable.
---

# Humanize AI Writing

Force any generated or supplied prose to follow human writing patterns and avoid
every known sign of AI writing. Works as a rewrite pass and as a guardrail while
drafting.

## When to use
- User says: "humanize this," "make it sound human," "remove AI slop," "doesn't
  sound like AI," "sounds robotic," "edit so it reads natural."
- Proactively, before delivering any published/sent prose (articles, posts,
  emails, landing copy, essays, documentation).

## Workflow
1. **Read the target text** (or your own draft).
2. **Detect** — scan against `references/ai-tells.md`. Mark every hit: banned
   vocabulary, fake significance, "-ing" padding, negative parallelisms,
   rule-of-three, em-dash/bold/curly-quote overuse, promo tone, weasel
   attributions, hollow conclusions.
3. **Rewrite** — apply `references/rewrite-rules.md`. Fix each tell at the
   sentence level; preserve the author's meaning and facts. Never invent facts
   to replace a weasel claim — cut it or flag it.
4. **Self-check** — run `assets/checklist.md`. Re-scan the rewritten text; AI
   tells often cluster, so a second pass catches what the first missed.
5. **Deliver** the cleaned text. If you cut a claim for lacking a source, note it
   briefly at the end. Do not narrate the rewrite process inside the prose.

## The 10 hard rules (full text in `assets/checklist.md`)
1. No banned vocabulary (delve, tapestry, testament, underscore, leverage…)
2. No fake significance ("stands as," "pivotal moment," "indelible mark")
3. No present-participle padding ("…, highlighting its importance")
4. No negative parallelisms ("not just X, but Y" / "it's not X, it's Y")
5. No forced rule-of-three lists
6. Punctuation: sparse em dashes, straight quotes, almost no bold, sentence-case headings
7. No promotional / press-release tone
8. Specifics over hedging — name a source or cut the claim
9. No hollow conclusions ("In conclusion," "Overall," future-speculation)
10. Vary sentence rhythm; allow repetition over elegant variation

## Output discipline
- Match the requested length and format.
- Keep the author's actual voice and intent; humanizing ≠ rewriting the message.
- Don't add hype to "fix" flatness. Plain is the goal.
- Never mention these rules or the detection step in the delivered text.

## Reference files
- `references/ai-tells.md` — full catalog of AI-writing signs (detection).
- `references/rewrite-rules.md` — fix + before/after for each tell.
- `assets/checklist.md` — pre-ship pass.
