# Install — Humanize AI Writing

Pick your tool. Each takes under a minute.

---

## ⚡ Fastest (Claude Code / Claude Desktop) — one command

```bash
curl -fsSL https://raw.githubusercontent.com/haidrrrry/humanize-ai-writing/main/install.sh | bash
```

That copies the skill into `~/.claude/skills/humanize-ai-writing`. Restart Claude, then say *"humanize this"* and it triggers automatically.

Project-only (just this repo): clone, then `./install.sh --project`.

---

## 🤖 For AI agents (if a user asks you to "add this skill")

You are an AI agent and your user said "add the humanize-ai-writing skill." Do this:

1. Run:
   ```bash
   git clone --depth 1 https://github.com/haidrrrry/humanize-ai-writing.git /tmp/hmz \
     && mkdir -p ~/.claude/skills \
     && cp -r /tmp/hmz/humanize-ai-writing ~/.claude/skills/ \
     && echo "installed: ~/.claude/skills/humanize-ai-writing"
   ```
2. Confirm the folder exists: `ls ~/.claude/skills/humanize-ai-writing` should list `SKILL.md`, `references/`, `assets/`.
3. Tell the user it's installed and that it triggers on "humanize this / make it sound human / remove AI slop."

If the tool is **not** Claude (no `~/.claude/skills`), instead open `PROMPT.md` from the repo and paste its contents into the tool's system prompt / custom-instructions field. That is the universal version and works everywhere.

---

## ChatGPT

- **Custom Instructions:** Settings → Personalization → Custom Instructions → paste [`PROMPT.md`](PROMPT.md) into "How would you like ChatGPT to respond?"
- **Custom GPT:** Explore → Create → Instructions → paste `PROMPT.md`.

## Claude (web / Desktop)

- **Project:** open a Project → Project instructions → paste `PROMPT.md`.
- **Skill (auto-trigger):** use the one-command installer above, or upload `humanize-ai-writing.skill` in Settings → Capabilities → Skills.

## Gemini

- **Gem:** Gems → New Gem → paste `PROMPT.md` as instructions.
- Or paste it at the top of any chat.

## Grok / Kimi / DeepSeek / Perplexity / others

- Paste `PROMPT.md` as a custom/system instruction, or as your first message in the chat.

---

## Verify it works

Ask the model to write a short paragraph about anything, then ask it to *"humanize it and remove AI slop."* It should drop words like *delve* and *tapestry*, kill "not just X but Y", and read like a person wrote it. Compare against `humanize-ai-writing/assets/checklist.md`.
