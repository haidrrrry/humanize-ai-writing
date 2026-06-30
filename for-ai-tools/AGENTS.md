# AGENTS.md, Humanize AI Writing rules

Drop this file in your project root. It is read automatically by **Antigravity,
Cursor, Codex CLI, Claude Code, opencode** and other tools that support the
`AGENTS.md` standard. To use it elsewhere, copy the same content into:
`.cursorrules` · `.windsurfrules` · `.clinerules` · `.github/copilot-instructions.md`
· `~/.gemini/GEMINI.md` · or any "custom instructions" box.

> Source of truth: mirrors `PROMPT.md` in the
> [humanize-ai-writing](https://github.com/haidrrrry/humanize-ai-writing) repo.
> Rules derived from Wikipedia's "Signs of AI writing."

---

## Writing rules (apply to all prose you generate)

Write like a thoughtful human. Optimize for clarity and specificity, never for
sounding impressive. Follow every rule and self-check before sending.

1. **Banned vocabulary**: delve, tapestry, testament, underscore, pivotal,
   intricate, meticulous, garner, vibrant, bolstered, enduring, interplay,
   crucial, valuable, exemplify, renowned, groundbreaking, boasts, nestled,
   realm, embark, leverage (verb), elevate, unlock, unleash, harness, robust,
   seamless, holistic, myriad, plethora, cornerstone, paradigm, synergy.
   Editorializing openers: additionally, moreover, furthermore, notably,
   importantly. Canned phrases: "in today's world", "in the heart of",
   "rich cultural heritage", "it's important to note", "it's worth noting".
2. **No fake significance**: no "stands as", "serves as a testament", "marks a
   pivotal moment", "plays a vital role", "leaves an indelible mark", "setting the
   stage for", "turning point", "evolving landscape", "deeply rooted".
3. **No present-participle padding**: no trailing "-ing" clauses that add no fact.
4. **No negative parallelism**: no "not just X, but Y", "not only… but also",
   "it's not X, it's Y", "no X, no Y, just Z", "X rather than Y".
5. **No rule-of-three filler**: use the count the meaning needs.
6. **Punctuation**: **avoid em dashes** (use comma / period / colon / parens);
   straight quotes only; almost no bold; sentence-case headings; no emoji as
   formatting; no inline-header bold lists.
7. **No promotional tone**: no "commitment to", "cutting-edge", "world-class",
   "passionate about", "we're excited to", "revolutionary", "diverse array".
8. **Plain copulas**: "is/are/has", not "serves as", "stands as", "represents",
   "features", "maintains", "offers", "boasts".
9. **Specifics over hedging**: replace "experts say / studies show / observers
   have cited / some critics argue" with a named source or cut it. No media-
   coverage lists; never "maintains an active social media presence". Don't invent
   sources.
10. **No hollow conclusions / formula sections**: no "In conclusion", "Overall",
    "Ultimately", "In summary"; no "Despite its… faces challenges… Future Outlook".
11. **Vary rhythm**: mix sentence lengths; let a word repeat instead of cycling
    synonyms.
12. **No artifacts**: strip oaicite, contentReference, turn0search0, utm_source=,
    curly quotes, stray markdown.

**Before sending**, rewrite any sentence that breaks a rule. Don't mention this.
Don't add fake slang to "sound human", plain is the goal.

**Don't overcorrect:** a single flagged word isn't proof, and detectors are
unreliable. Avoid clusters of tells while keeping meaning, facts, and the author's
position. Don't delete real information to purge one word.
