#!/usr/bin/env python3
"""Generate docs/skills-data.js from skills/*/SKILL.md frontmatter.

Parses each skill's `name` and `description`, then attaches curated metadata
(category, invocable flag, slash command) and an auto-extracted trigger line.
The `userOnly` flag is read directly from each skill's `disable-model-invocation:
true` frontmatter — those skills can only be triggered by the user, never the agent.
Re-run after adding or editing skills.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_DIR = os.path.join(ROOT, "skills")
OUT = os.path.join(ROOT, "docs", "skills-data.js")

CATEGORY = {
    "caveman": "Communication & Session", "aside": "Communication & Session",
    "handoff": "Communication & Session", "teach": "Communication & Session",
    "token-budget-advisor": "Communication & Session",
    "blueprint": "Planning & Decisions", "council": "Planning & Decisions",
    "product-lens": "Planning & Decisions", "grill-with-docs": "Planning & Decisions",
    "domain-modeling": "Planning & Decisions", "align-vocabulary": "Planning & Decisions",
    "orch-add-feature": "Orchestration Pipelines", "orch-build-mvp": "Orchestration Pipelines",
    "orch-change-feature": "Orchestration Pipelines", "orch-fix-defect": "Orchestration Pipelines",
    "orch-pipeline": "Orchestration Pipelines", "orch-refine-code": "Orchestration Pipelines",
    "santa-method": "Orchestration Pipelines",
    "deep-research": "Research & Intelligence", "exa-search": "Research & Intelligence",
    "market-research": "Research & Intelligence", "lead-intelligence": "Research & Intelligence",
    "research-ops": "Research & Intelligence", "search-first": "Research & Intelligence",
    "documentation-lookup": "Research & Intelligence",
    "scientific-thinking-literature-review": "Research & Intelligence",
    "scientific-thinking-scholar-evaluation": "Research & Intelligence",
    "data-scraper-agent": "Research & Intelligence",
    "coding-standards": "Coding Standards & Patterns", "python-patterns": "Coding Standards & Patterns",
    "dotnet-patterns": "Coding Standards & Patterns", "frontend-patterns": "Coding Standards & Patterns",
    "backend-patterns": "Coding Standards & Patterns", "react-patterns": "Coding Standards & Patterns",
    "dart-flutter-patterns": "Coding Standards & Patterns", "error-handling": "Coding Standards & Patterns",
    "regex-vs-llm-structured-text": "Coding Standards & Patterns", "bun-runtime": "Coding Standards & Patterns",
    "nextjs-turbopack": "Coding Standards & Patterns", "docker-patterns": "Coding Standards & Patterns",
    "mcp-server-patterns": "Coding Standards & Patterns", "pytorch-patterns": "Coding Standards & Patterns",
    "cost-aware-llm-pipeline": "Coding Standards & Patterns",
    "tdd": "Testing & QA", "python-testing": "Testing & QA", "react-testing": "Testing & QA",
    "cpp-testing": "Testing & QA", "ai-regression-testing": "Testing & QA", "browser-qa": "Testing & QA",
    "codebase-design": "Architecture & Review", "improve-codebase-architecture": "Architecture & Review",
    "codebase-onboarding": "Architecture & Review", "flutter-dart-code-review": "Architecture & Review",
    "react-performance": "Architecture & Review", "diagnosing-bugs": "Architecture & Review",
    "code-tour": "Architecture & Review",
    "security-review": "Security", "security-scan": "Security",
    "design-system": "Frontend, UI & Motion", "frontend-a11y": "Frontend, UI & Motion",
    "accessibility": "Frontend, UI & Motion", "frontend-slides": "Frontend, UI & Motion",
    "motion-foundations": "Frontend, UI & Motion", "motion-patterns": "Frontend, UI & Motion",
    "motion-advanced": "Frontend, UI & Motion", "motion-ui": "Frontend, UI & Motion",
    "remotion-video-creation": "Frontend, UI & Motion", "prototype": "Frontend, UI & Motion",
    "git-workflow": "Git & Collaboration", "resolving-merge-conflicts": "Git & Collaboration",
    "agent-architecture-audit": "Agent & Skill Engineering",
    "agent-harness-construction": "Agent & Skill Engineering",
    "agentic-engineering": "Agent & Skill Engineering",
    "agent-self-evaluation": "Agent & Skill Engineering", "harness-review": "Agent & Skill Engineering",
    "writing-great-skills": "Agent & Skill Engineering", "skill-comply": "Agent & Skill Engineering",
    "skill-scout": "Agent & Skill Engineering", "skill-stocktake": "Agent & Skill Engineering",
    "config-gc": "Agent & Skill Engineering", "context-budget": "Agent & Skill Engineering",
    "graphify": "Agent & Skill Engineering",
    "article-writing": "Content & Writing", "brand-voice": "Content & Writing",
    "homelab-network-setup": "Homelab & Networking", "homelab-network-readiness": "Homelab & Networking",
    "homelab-pihole-dns": "Homelab & Networking", "homelab-vlan-segmentation": "Homelab & Networking",
    "homelab-wireguard-vpn": "Homelab & Networking", "network-config-validation": "Homelab & Networking",
    "network-interface-health": "Homelab & Networking",
    "google-workspace-ops": "Productivity & Ops", "opensource-pipeline": "Productivity & Ops",
}

INVOCABLE = {
    "caveman", "aside", "handoff", "teach", "token-budget-advisor", "blueprint", "council",
    "product-lens", "grill-with-docs", "domain-modeling", "align-vocabulary", "orch-add-feature",
    "orch-build-mvp", "orch-change-feature", "orch-fix-defect", "orch-refine-code", "santa-method",
    "deep-research", "exa-search", "market-research", "lead-intelligence", "research-ops",
    "search-first", "scientific-thinking-literature-review", "scientific-thinking-scholar-evaluation",
    "data-scraper-agent", "tdd", "diagnosing-bugs", "codebase-onboarding",
    "improve-codebase-architecture", "code-tour", "security-review", "security-scan", "design-system",
    "frontend-slides", "prototype", "resolving-merge-conflicts", "agent-architecture-audit",
    "agent-self-evaluation", "harness-review", "skill-comply", "skill-scout", "skill-stocktake",
    "config-gc", "context-budget", "graphify", "article-writing", "brand-voice",
    "google-workspace-ops", "opensource-pipeline",
}

COMMANDS = {
    "caveman": "/caveman", "graphify": "/graphify", "skill-comply": "/skill-comply",
    "opensource-pipeline": "/opensource", "design-system": "/design-system",
}

TRIGGER_RE = re.compile(
    r"\b(Use when|Trigger|TRIGGER|Use this skill|Use for|Use after|Use only|"
    r"Activates|Invoke|when the user|when user says)\b"
)


def parse_frontmatter(text):
    m = re.match(r"^---\s*\n(.*?)\n---", text, re.S)
    if not m:
        return None, None, False
    fm = m.group(1)
    name = re.search(r"^name:\s*(.+)$", fm, re.M)
    name = name.group(1).strip() if name else None
    user_only = bool(re.search(r"^disable-model-invocation:\s*true\s*$", fm, re.M))
    dm = re.search(r"^description:\s*(.*)$", fm, re.M)
    desc = ""
    if dm:
        first = dm.group(1).strip()
        if first in (">", "|", ">-", "|-", ">+", "|+"):
            lines = fm.split("\n")
            idx = next(i for i, l in enumerate(lines) if re.match(r"^description:", l))
            collected = []
            for l in lines[idx + 1:]:
                if re.match(r"^\s+\S", l) or l.strip() == "":
                    collected.append(l.strip())
                else:
                    break
            desc = " ".join(x for x in collected if x)
        else:
            desc = first.strip('"').strip("'")
    return name, desc, user_only


def trigger_line(desc):
    sents = re.split(r"(?<=[.])\s+", desc)
    for s in sents:
        if TRIGGER_RE.search(s):
            return s.strip()
    return sents[0].strip() if sents else desc


def main():
    out = []
    for slug in sorted(os.listdir(SKILLS_DIR)):
        md = os.path.join(SKILLS_DIR, slug, "SKILL.md")
        if not os.path.isfile(md):
            continue
        with open(md, encoding="utf-8") as f:
            _, desc, user_only = parse_frontmatter(f.read())
        if desc is None:
            continue
        out.append({
            "slug": slug,
            "name": slug,
            "category": CATEGORY.get(slug, "Other"),
            "invocable": slug in INVOCABLE or user_only,
            "userOnly": user_only,
            "command": COMMANDS.get(slug, ""),
            "trigger": trigger_line(desc),
            "description": desc,
        })

    missing = [s["slug"] for s in out if s["category"] == "Other"]
    if missing:
        print("WARNING uncategorized:", missing)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.SKILLS = ")
        json.dump(out, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Wrote {len(out)} skills to {OUT} "
          f"({sum(1 for s in out if s['invocable'])} invocable, "
          f"{sum(1 for s in out if s['userOnly'])} user-only)")


if __name__ == "__main__":
    main()
