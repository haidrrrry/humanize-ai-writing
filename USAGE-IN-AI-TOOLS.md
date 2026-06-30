# Use this in any AI tool (top 20)

You do **not** need to be a Claude user. Almost every AI tool has a slot for
persistent instructions — a "custom instructions" box, a "rules" file, or a
system prompt. Drop [`PROMPT.md`](PROMPT.md) into that slot and the tool will
de-slop everything it writes.

**The one rule that covers all of them:** find where the tool keeps *custom
instructions / rules / a system prompt*, and paste `PROMPT.md` there. If it has
no such slot, paste `PROMPT.md` as your **first message** in the chat.

For coding tools, there's an even better shortcut: the **`AGENTS.md` standard**.
A single `AGENTS.md` file in your project root is read by Antigravity, Cursor,
Codex CLI, Claude Code, opencode and more. We ship a ready one in
[`for-ai-tools/AGENTS.md`](for-ai-tools/AGENTS.md) — copy it to your project root
and several tools pick it up at once.

---

## Chat assistants — paste into custom instructions

| # | Tool | Where to put `PROMPT.md` |
|---|---|---|
| 1 | **ChatGPT** | Settings → Personalization → **Custom Instructions** → "How should ChatGPT respond?" Or make a **Custom GPT** and paste it in *Instructions*. |
| 2 | **Google Gemini** | Create a **Gem** → paste as the Gem's instructions. Or **Saved info**. Or paste as first message. |
| 3 | **Grok (x.ai / X)** | Settings → **Customize Grok / Custom instructions** → paste. Or paste as first message. |
| 4 | **Kimi (Moonshot)** | No persistent settings slot — paste `PROMPT.md` as the **first message**, or build a **Kimi+ agent** with it as the system prompt. |
| 5 | **DeepSeek** | No custom-instructions UI — paste as the **first message**. Via API, set it as the `system` prompt. |
| 6 | **Perplexity** | Settings → **AI Profile / Personalize** → paste your preferences. Or per-**Space** custom instructions. |
| 7 | **Microsoft Copilot** | Paste as the first message. (Persistent instructions are limited; in Copilot for M365, use an **agent**.) |
| 8 | **Mistral Le Chat** | Build an **Agent** → paste as its system prompt. Or paste as first message. |
| 9 | **Qwen Chat** | Paste as first message. Via API, set the `system` prompt. |
| 10 | **Poe** | Create a **Bot** → paste `PROMPT.md` into the prompt/system field. |

---

## AI IDEs & agentic editors — use the rules file

| # | Tool | Where to put the rules |
|---|---|---|
| 11 | **Cursor** | `.cursor/rules/humanize.mdc` (or legacy `.cursorrules`), or **Settings → Rules → User Rules**. Also reads `AGENTS.md`. |
| 12 | **Windsurf** | `.windsurf/rules/humanize.md` (or legacy `.windsurfrules`). Or Cascade → Rules. |
| 13 | **Google Antigravity** | Project root `AGENTS.md` (cross-tool) or `GEMINI.md`, or `.agent/rules/`, or the **Customizations** panel (••• → + Global / + Workspace). Global: `~/.gemini/AGENTS.md`. |
| 14 | **GitHub Copilot** | `.github/copilot-instructions.md` in the repo. (VS Code/JetBrains both read it.) |
| 15 | **Cline** (VS Code) | `.clinerules` in the project root. |
| 16 | **Roo Code** | `.roo/rules/humanize.md` or `.roorules`. |
| 17 | **Zed** | Add a rules file and reference it in the assistant, or paste into the assistant's system prompt. |
| 18 | **Kiro** (AWS) | `.kiro/steering/humanize.md` (steering file). |

---

## CLIs — point them at a context file

| # | Tool | Where to put the rules |
|---|---|---|
| 19 | **Gemini CLI** | `~/.gemini/GEMINI.md` (global) or `GEMINI.md` in the project. |
| 20 | **Aider** | Save `PROMPT.md` as `CONVENTIONS.md`, then `aider --read CONVENTIONS.md` (or add it under `read:` in `.aider.conf.yml`). |
| ＋ | **Codex CLI / opencode / Claude Code** | Drop [`for-ai-tools/AGENTS.md`](for-ai-tools/AGENTS.md) in the project root — all three read `AGENTS.md`. (Claude Code can also use the native skill.) |

---

## Fastest path per situation

- **You write in a chatbot** → paste `PROMPT.md` into its custom-instructions box once. Done forever.
- **You code with an AI IDE** → copy `for-ai-tools/AGENTS.md` to your repo root. Cursor, Antigravity, Codex, Claude Code, opencode all read it.
- **Your tool isn't listed** → it almost certainly has a "custom instructions," "rules," "persona," or "system prompt" field somewhere. Paste `PROMPT.md` there. No field? Paste it as the first message.

> Note: tools change their menus often. The mechanism (custom instructions / rules
> file / system prompt) is stable even when the exact menu label moves. If a path
> above is renamed, look for the nearest "instructions" or "rules" setting.
