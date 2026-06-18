#!/usr/bin/env pwsh
# install.ps1 — Windows entrypoint. Delegates to the cross-platform Node installer.

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$dir = $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error 'Node.js is required but was not found in PATH.'
    exit 1
}

& node (Join-Path $dir 'install.mjs') @args
exit $LASTEXITCODE
