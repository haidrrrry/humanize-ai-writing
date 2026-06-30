#!/usr/bin/env bash
# ============================================================
#  Humanize AI Writing — one-command installer
#
#  Installs the skill into Claude Code / Claude Desktop:
#    curl -fsSL https://raw.githubusercontent.com/haidrrrry/humanize-ai-writing/main/install.sh | bash
#
#  Or, from a clone:
#    ./install.sh            # install for current user (~/.claude/skills)
#    ./install.sh --project  # install into ./.claude/skills (this project only)
# ============================================================
set -euo pipefail

REPO="https://github.com/haidrrrry/humanize-ai-writing.git"
SKILL_DIR="humanize-ai-writing"
SCOPE="user"
[ "${1:-}" = "--project" ] && SCOPE="project"

bold() { printf "\033[1m%s\033[0m\n" "$*"; }
ok()   { printf "\033[32m✔ %s\033[0m\n" "$*"; }
info() { printf "\033[36m→ %s\033[0m\n" "$*"; }

if [ "$SCOPE" = "project" ]; then
  DEST="$(pwd)/.claude/skills"
else
  DEST="$HOME/.claude/skills"
fi

bold "Humanize AI Writing — installer"
info "Scope: $SCOPE  →  $DEST"

# Get the skill folder: use local copy if present, else clone to a temp dir.
if [ -d "$SKILL_DIR" ]; then
  SRC="$SKILL_DIR"
else
  TMP="$(mktemp -d)"
  info "Cloning $REPO ..."
  git clone --depth 1 -q "$REPO" "$TMP/repo"
  SRC="$TMP/repo/$SKILL_DIR"
fi

mkdir -p "$DEST"
rm -rf "$DEST/$SKILL_DIR"
cp -r "$SRC" "$DEST/"
ok "Installed skill to $DEST/$SKILL_DIR"

echo
bold "Done. Next:"
echo "  • Claude Code: restart it; ask \"humanize this text\" and the skill triggers."
echo "  • Verify: ls \"$DEST/$SKILL_DIR\""
echo "  • Other tools (ChatGPT/Gemini/Grok/Kimi): paste PROMPT.md into custom instructions."
