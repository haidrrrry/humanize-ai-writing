# Contributing to Humanize AI Writing

Thanks for helping make AI writing sound human. This is an active, open-source
project and contributions of every size are welcome — from fixing a typo to
adding a whole new category of tells.

## Ways to contribute

| Type | Where | Good for |
|---|---|---|
| **New AI tell** | `humanize-ai-writing/references/ai-tells.md` | You spotted a pattern not in the catalog |
| **Better fix / example** | `humanize-ai-writing/references/rewrite-rules.md` | Improve a before/after |
| **Prompt tuning** | `PROMPT.md` | Make the universal prompt shorter or stronger |
| **Rule change** | `humanize-ai-writing/SKILL.md` + `assets/checklist.md` | Add/clarify a rule (keep all three in sync) |
| **Tool install steps** | `INSTALL.md` / `README.md` | Cover a model we don't (Mistral, Llama, Copilot, Cursor…) |
| **Sample writing** | `blog/` | A post written with the skill, demonstrating it |

## Quick start

```bash
git clone https://github.com/haidrrrry/humanize-ai-writing.git
cd humanize-ai-writing
git checkout -b my-improvement
# make your change
git commit -m "Add: <what you changed>"
git push origin my-improvement
# open a Pull Request
```

## Contribution standards

**Every new tell needs three things:**
1. The pattern, described in one line.
2. A real example (ideally copied from actual AI output).
3. A fix in `rewrite-rules.md` with a before → after.

**Don't:**
- Replace one banned word with another banned word.
- Add a rule the model can't check mechanically ("write with soul" is not a rule).
- Bundle unrelated changes — one concern per PR.

**Keep the three rule files in sync.** If you add or change a rule, update all of:
`SKILL.md` (the rule), `assets/checklist.md` (the checkbox), and `PROMPT.md`
(the universal version).

## PR checklist

- [ ] One concern, clear title.
- [ ] New tell has pattern + example + fix (if applicable).
- [ ] Rule files stay in sync (SKILL / checklist / PROMPT).
- [ ] No banned words introduced in the docs themselves.
- [ ] Tested the change on at least one model (say which in the PR).

## Reporting tells without a PR

No code needed. Open an issue with:
- the AI output that reads as slop,
- which model produced it,
- what tell you think it shows.

Real-world examples from current models are the most valuable contribution here —
the catalog only stays useful if it tracks how models actually write.

## Code of conduct

Be decent. No harassment, no spam, no self-promotion in issues. Maintainers may
close or block anything that wastes contributors' time.

## License

By contributing you agree your work is released under this repo's [MIT License](LICENSE).
