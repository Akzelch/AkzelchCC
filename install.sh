#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_DIR="$HOME/.claude"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

green() { printf '\033[32m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }
red() { printf '\033[31m%s\033[0m\n' "$*"; }

link() {
  local src="$REPO_DIR/$1"
  local dst="$CLAUDE_DIR/$2"

  if [ -L "$dst" ] && [ "$(readlink "$dst")" = "$src" ]; then
    green "  OK  $dst → $src"
    return
  fi

  if [ -e "$dst" ] && [ ! -L "$dst" ]; then
    local backup="${dst}.bak.${TIMESTAMP}"
    yellow "  BAK $dst → $backup"
    mv "$dst" "$backup"
  fi

  ln -sf "$src" "$dst"
  green "  LNK $dst → $src"
}

echo ""
echo "Installing AkzelchCC → $CLAUDE_DIR"
echo ""

mkdir -p "$CLAUDE_DIR"
mkdir -p "$CLAUDE_DIR/rules"

# Top-level files
link CLAUDE.md        CLAUDE.md
link settings.json    settings.json
link MEMORY.md        MEMORY.md

# Directories
link memory          memory
link rules/personal  rules/personal
link agents          agents
link skills          skills
link commands        commands
link hooks           hooks

echo ""
green "Done. Start a new claude session to pick up the config."
echo ""
