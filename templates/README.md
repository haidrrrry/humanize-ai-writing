# Templates — automate the slop check

Two ready-made automations that run the tell-scanner for you. Both run the scanner
from GitHub via `npx`, so there's nothing to publish or install.

## GitHub Action — scan on every push / PR
1. Copy `humanize-check.yml` to `.github/workflows/humanize-check.yml` in your repo.
2. Edit `CONTENT_GLOB` to point at your prose (defaults to `content/`, `blog/`, `docs/`).
3. Commit. Now every push and PR that touches Markdown gets scanned, and the build
   fails if tells are found.

## Pre-commit hook — scan before each commit
```bash
cp templates/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
Staged `.md` / `.txt` files are scanned on every commit. To skip once:
```bash
git commit --no-verify
```

## Run the scanner directly (no setup)
```bash
npx -y github:haidrrrry/humanize-ai-writing your-draft.md
```
