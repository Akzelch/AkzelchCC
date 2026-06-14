#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

green() { printf '\033[32m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }

# link <repo-relative-src> <absolute-dst>
link() {
  local src="$REPO_DIR/$1"
  local dst="$2"

  if [ -L "$dst" ] && [ "$(readlink "$dst")" = "$src" ]; then
    green "  OK  $dst"
    return
  fi

  if [ -e "$dst" ] && [ ! -L "$dst" ]; then
    local backup="${dst}.bak.${TIMESTAMP}"
    yellow "  BAK $dst → $backup"
    mv "$dst" "$backup"
  fi

  ln -sf "$src" "$dst"
  green "  LNK $dst"
}

# ── Claude Code ──────────────────────────────────────────────────────────────
CLAUDE_DIR="$HOME/.claude"
echo ""
echo "Claude Code → $CLAUDE_DIR"
mkdir -p "$CLAUDE_DIR/rules"

link CLAUDE.md        "$CLAUDE_DIR/CLAUDE.md"
link settings.json    "$CLAUDE_DIR/settings.json"
link MEMORY.md        "$CLAUDE_DIR/MEMORY.md"
link memory           "$CLAUDE_DIR/memory"
link rules/personal   "$CLAUDE_DIR/rules/personal"
link agents           "$CLAUDE_DIR/agents"
link skills           "$CLAUDE_DIR/skills"
link commands         "$CLAUDE_DIR/commands"
link hooks            "$CLAUDE_DIR/hooks"

# ── GitHub Copilot CLI ───────────────────────────────────────────────────────
COPILOT_DIR="$HOME/.copilot"
echo ""
echo "GitHub Copilot CLI → $COPILOT_DIR"
mkdir -p "$COPILOT_DIR"

link copilot/copilot-instructions.md "$COPILOT_DIR/copilot-instructions.md"
link copilot/config.json             "$COPILOT_DIR/config.json"

# ─────────────────────────────────────────────────────────────────────────────
echo ""
green "Done."
echo ""
