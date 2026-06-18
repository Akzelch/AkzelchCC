#!/usr/bin/env bash
# install.sh — POSIX entrypoint. Delegates to the cross-platform Node installer.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required but was not found in PATH." >&2
  exit 1
fi

node "$DIR/install.mjs" "$@"
exit_code=$?
read -rp $'\nPress Enter to close...'
exit $exit_code
