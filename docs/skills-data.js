window.SKILLS = [
  {
    "slug": "accessibility",
    "name": "accessibility",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Design, implement, and audit inclusive digital products against WCAG 2.2 Level AA — semantic ARIA for Web, accessibility traits for iOS and Android.",
    "description": "Design, implement, and audit inclusive digital products against WCAG 2.2 Level AA — semantic ARIA for Web, accessibility traits for iOS and Android."
  },
  {
    "slug": "agent-architecture-audit",
    "name": "agent-architecture-audit",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Full-stack diagnostic for agent and LLM applications.",
    "description": "Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and rendering corruption. Produces severity-ranked findings with code-first fixes. Essential for developers building agent applications, autonomous loops, or any LLM-powered feature. Do NOT use for general code debugging, code review, security scanning, performance benchmarking, or feature writing — use the specialised tool."
  },
  {
    "slug": "agent-harness-construction",
    "name": "agent-harness-construction",
    "category": "Agent & Skill Engineering",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates.",
    "description": "Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates."
  },
  {
    "slug": "agent-self-evaluation",
    "name": "agent-self-evaluation",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use after completing any non-trivial task.",
    "description": "Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conciseness — with concrete evidence per criterion. Produces a structured 1-5 scorecard with specific improvement suggestions. Also when the user asks to rate the output, or at the end of any session."
  },
  {
    "slug": "agentic-engineering",
    "name": "agentic-engineering",
    "category": "Agent & Skill Engineering",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing.",
    "description": "Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing."
  },
  {
    "slug": "ai-regression-testing",
    "name": "ai-regression-testing",
    "category": "Testing & QA",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Trigger when a sandbox or mock mode exists, when running /bug-check, or after fixing a bug to prevent re-introduction.",
    "description": "Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spots where the same model writes and reviews code. Trigger when a sandbox or mock mode exists, when running /bug-check, or after fixing a bug to prevent re-introduction."
  },
  {
    "slug": "align-vocabulary",
    "name": "align-vocabulary",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Invoke with a file path.",
    "description": "Aligns a markdown file's vocabulary to the canonical deep-modules design language in CLAUDE.md. Invoke with a file path."
  },
  {
    "slug": "article-writing",
    "name": "article-writing",
    "category": "Content & Writing",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants polished written content longer than a paragraph, especially when voice consistency, structure, and credibility matter.",
    "description": "Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. Use when the user wants polished written content longer than a paragraph, especially when voice consistency, structure, and credibility matter."
  },
  {
    "slug": "aside",
    "name": "aside",
    "category": "Communication & Session",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Answer a quick side question without polluting the current task context.",
    "description": "Answer a quick side question without polluting the current task context."
  },
  {
    "slug": "backend-patterns",
    "name": "backend-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes.",
    "description": "Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes."
  },
  {
    "slug": "blueprint",
    "name": "blueprint",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "TRIGGER when: user requests a plan, blueprint, or roadmap for a complex multi-PR task, or describes work that needs multiple sessions.",
    "description": "Turn a one-line objective into a step-by-step construction plan for multi-session, multi-agent engineering projects. Each step has a self-contained context brief so a fresh agent can execute it cold. Includes adversarial review gate, dependency graph, parallel step detection, anti-pattern catalog, and plan mutation protocol. TRIGGER when: user requests a plan, blueprint, or roadmap for a complex multi-PR task, or describes work that needs multiple sessions. DO NOT TRIGGER when: task is completable in a single PR or fewer than 3 tool calls, or user says \"just do it\"."
  },
  {
    "slug": "brand-voice",
    "name": "brand-voice",
    "category": "Content & Writing",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants voice consistency without generic AI writing tropes.",
    "description": "Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and social workflows. Use when the user wants voice consistency without generic AI writing tropes."
  },
  {
    "slug": "browser-qa",
    "name": "browser-qa",
    "category": "Testing & QA",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Browser automation QA — visual testing, UI interaction verification, accessibility checks, and responsive sweeps on deployed features and frontend PRs using Playwright, Puppeteer, or claude-in-chrome.",
    "description": "Browser automation QA — visual testing, UI interaction verification, accessibility checks, and responsive sweeps on deployed features and frontend PRs using Playwright, Puppeteer, or claude-in-chrome."
  },
  {
    "slug": "bun-runtime",
    "name": "bun-runtime",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Bun as runtime, package manager, bundler, and test runner.",
    "description": "Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support."
  },
  {
    "slug": "caveman",
    "name": "caveman",
    "category": "Communication & Session",
    "invocable": true,
    "userOnly": false,
    "command": "/caveman",
    "trigger": "Use when user says \"caveman mode\", \"talk like caveman\", \"use caveman\", \"less tokens\", \"be brief\", or invokes /caveman.",
    "description": "Ultra-compressed communication mode. Cuts token usage ~75% by dropping filler, articles, and pleasantries while keeping full technical accuracy. Use when user says \"caveman mode\", \"talk like caveman\", \"use caveman\", \"less tokens\", \"be brief\", or invokes /caveman."
  },
  {
    "slug": "code-tour",
    "name": "code-tour",
    "category": "Architecture & Review",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use for onboarding tours, architecture walkthroughs, PR tours, RCA tours, and structured \"explain how this works\" requests.",
    "description": "Create CodeTour `.tour` files — persona-targeted, step-by-step walkthroughs with real file and line anchors. Use for onboarding tours, architecture walkthroughs, PR tours, RCA tours, and structured \"explain how this works\" requests. Do NOT use for one-off chat explanations, prose docs, implementation or refactoring tasks, or broad codebase onboarding without a tour artifact."
  },
  {
    "slug": "codebase-design",
    "name": "codebase-design",
    "category": "Architecture & Review",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.",
    "description": "Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary."
  },
  {
    "slug": "codebase-onboarding",
    "name": "codebase-onboarding",
    "category": "Architecture & Review",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when joining a new project or setting up Claude Code for the first time in a repo.",
    "description": "Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. Use when joining a new project or setting up Claude Code for the first time in a repo."
  },
  {
    "slug": "coding-standards",
    "name": "coding-standards",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review.",
    "description": "Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns."
  },
  {
    "slug": "config-gc",
    "name": "config-gc",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user says \"clean up my config\", \"config GC\", \"too many skills\", \"audit my setup\", \"my .claude is bloated\", or asks for a periodic config review.",
    "description": "Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches) for redundant, stale, orphaned, or low-value items, then walks the user through a confirm-each-deletion cleanup. Use when the user says \"clean up my config\", \"config GC\", \"too many skills\", \"audit my setup\", \"my .claude is bloated\", or asks for a periodic config review. Also after installing a large skill pack. Do NOT use for cleaning project source code, clearing chat history, or uninstalling Claude Code."
  },
  {
    "slug": "context-budget",
    "name": "context-budget",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Trigger when session performance feels sluggish, after adding many skills/agents/MCP servers, or to check headroom before adding more.",
    "description": "Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. Identifies bloat, redundant components, and produces prioritized token-savings recommendations. Trigger when session performance feels sluggish, after adding many skills/agents/MCP servers, or to check headroom before adding more."
  },
  {
    "slug": "cost-aware-llm-pipeline",
    "name": "cost-aware-llm-pipeline",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Cost optimization patterns for LLM API usage — model routing by task complexity, budget tracking, retry logic, and prompt caching.",
    "description": "Cost optimization patterns for LLM API usage — model routing by task complexity, budget tracking, retry logic, and prompt caching."
  },
  {
    "slug": "council",
    "name": "council",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when multiple valid paths exist and you need structured disagreement before choosing.",
    "description": "Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. Use when multiple valid paths exist and you need structured disagreement before choosing. Do NOT use for verifying correctness, breaking features into steps, designing architecture, code review, factual questions, or obvious execution tasks."
  },
  {
    "slug": "cpp-testing",
    "name": "cpp-testing",
    "category": "Testing & QA",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use only when writing/updating/fixing C++ tests, configuring GoogleTest/CTest, diagnosing failing or flaky tests, or adding coverage/sanitizers.",
    "description": "Use only when writing/updating/fixing C++ tests, configuring GoogleTest/CTest, diagnosing failing or flaky tests, or adding coverage/sanitizers. Do NOT use for new product features without test changes, large refactors unrelated to tests, performance tuning without test regressions, or non-C++ projects."
  },
  {
    "slug": "dart-flutter-patterns",
    "name": "dart-flutter-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Dart and Flutter implementation patterns — null safety, immutable state, async composition, widget architecture, state management (BLoC, Riverpod, Provider), GoRouter navigation, Dio networking, and Freezed code generation.",
    "description": "Dart and Flutter implementation patterns — null safety, immutable state, async composition, widget architecture, state management (BLoC, Riverpod, Provider), GoRouter navigation, Dio networking, and Freezed code generation."
  },
  {
    "slug": "data-scraper-agent",
    "name": "data-scraper-agent",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to monitor, collect, or track any public data automatically.",
    "description": "Build a fully automated AI-powered data collection agent for any public source — job boards, prices, news, GitHub, sports, anything. Scrapes on a schedule, enriches data with a free LLM (Gemini Flash), stores results in Notion/Sheets/Supabase, and learns from user feedback. Runs 100% free on GitHub Actions. Use when the user wants to monitor, collect, or track any public data automatically."
  },
  {
    "slug": "deep-research",
    "name": "deep-research",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants thorough research on any topic with evidence and citations.",
    "description": "Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough research on any topic with evidence and citations. Also for competitive analysis, technology evaluation, market sizing, or due diligence on companies, investors, or technologies."
  },
  {
    "slug": "design-system",
    "name": "design-system",
    "category": "Frontend, UI & Motion",
    "invocable": true,
    "userOnly": false,
    "command": "/design-system",
    "trigger": "Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling.",
    "description": "Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling."
  },
  {
    "slug": "diagnosing-bugs",
    "name": "diagnosing-bugs",
    "category": "Architecture & Review",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow.",
    "description": "Diagnosis loop for hard bugs and performance regressions. Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow."
  },
  {
    "slug": "docker-patterns",
    "name": "docker-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Docker and Docker Compose patterns for local development, container security, networking, volume strategies, and multi-service orchestration.",
    "description": "Docker and Docker Compose patterns for local development, container security, networking, volume strategies, and multi-service orchestration."
  },
  {
    "slug": "documentation-lookup",
    "name": "documentation-lookup",
    "category": "Research & Intelligence",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Activates for setup questions, API references, code examples, or when the user names a framework (e.g.",
    "description": "Use up-to-date library and framework docs via Context7 MCP instead of training data. Activates for setup questions, API references, code examples, or when the user names a framework (e.g. React, Next.js, Prisma)."
  },
  {
    "slug": "domain-modeling",
    "name": "domain-modeling",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill needs to maintain the domain model.",
    "description": "Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill needs to maintain the domain model."
  },
  {
    "slug": "dotnet-patterns",
    "name": "dotnet-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications.",
    "description": "Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications."
  },
  {
    "slug": "error-handling",
    "name": "error-handling",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Patterns for robust error handling across TypeScript, Python, and Go.",
    "description": "Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages."
  },
  {
    "slug": "exa-search",
    "name": "exa-search",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user needs web search, code examples, company intel, people lookup, or AI-powered deep research with Exa's neural search engine.",
    "description": "Neural search via Exa MCP for web, code, and company research. Use when the user needs web search, code examples, company intel, people lookup, or AI-powered deep research with Exa's neural search engine."
  },
  {
    "slug": "flutter-dart-code-review",
    "name": "flutter-dart-code-review",
    "category": "Architecture & Review",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Flutter and Dart code review checklist covering widgets, state management (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms, performance, accessibility, security, and architecture — library-agnostic across the popular ecosystem packages.",
    "description": "Flutter and Dart code review checklist covering widgets, state management (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms, performance, accessibility, security, and architecture — library-agnostic across the popular ecosystem packages."
  },
  {
    "slug": "frontend-a11y",
    "name": "frontend-a11y",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use when building any interactive UI component or form.",
    "description": "Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. Use when building any interactive UI component or form."
  },
  {
    "slug": "frontend-patterns",
    "name": "frontend-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices.",
    "description": "Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices."
  },
  {
    "slug": "frontend-slides",
    "name": "frontend-slides",
    "category": "Frontend, UI & Motion",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch.",
    "description": "Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices. Also for improving an existing HTML presentation's layout, motion, or typography."
  },
  {
    "slug": "git-workflow",
    "name": "git-workflow",
    "category": "Git & Collaboration",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes.",
    "description": "Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes."
  },
  {
    "slug": "google-workspace-ops",
    "name": "google-workspace-ops",
    "category": "Productivity & Ops",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user needs to find, summarize, edit, migrate, or clean up Google Workspace assets without dropping to raw tool calls.",
    "description": "Operate across Google Drive, Docs, Sheets, and Slides as one workflow surface for plans, trackers, decks, and shared documents. Use when the user needs to find, summarize, edit, migrate, or clean up Google Workspace assets without dropping to raw tool calls."
  },
  {
    "slug": "graphify",
    "name": "graphify",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "/graphify",
    "trigger": "Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a graphify query first.",
    "description": "Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a graphify query first. Turns any input (code, docs, papers, images, videos) into a persistent knowledge graph with god nodes, community detection, and query/path/explain tools."
  },
  {
    "slug": "grill-with-docs",
    "name": "grill-with-docs",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when user wants to stress-test a plan against their project's language and documented decisions.",
    "description": "Grilling session that challenges your plan against the existing domain model, sharpens terminology, and updates documentation (CONTEXT.md, ADRs) inline as decisions crystallise. Use when user wants to stress-test a plan against their project's language and documented decisions."
  },
  {
    "slug": "handoff",
    "name": "handoff",
    "category": "Communication & Session",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Compact the current conversation into a handoff document for another agent to pick up.",
    "description": "Compact the current conversation into a handoff document for another agent to pick up."
  },
  {
    "slug": "harness-review",
    "name": "harness-review",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Convene a panel of reviewer agents to grade skills against writing-great-skills criteria and consolidate the verdicts into a single HTML report.",
    "description": "Convene a panel of reviewer agents to grade skills against writing-great-skills criteria and consolidate the verdicts into a single HTML report."
  },
  {
    "slug": "homelab-network-readiness",
    "name": "homelab-network-readiness",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Readiness checklist for homelab VLAN segmentation, local DNS filtering, and WireGuard-style remote access before changing router, firewall, DHCP, or VPN configuration.",
    "description": "Readiness checklist for homelab VLAN segmentation, local DNS filtering, and WireGuard-style remote access before changing router, firewall, DHCP, or VPN configuration."
  },
  {
    "slug": "homelab-network-setup",
    "name": "homelab-network-setup",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Home and homelab network design — gateways, switches, access points, IP ranges, DHCP reservations, DNS, and cabling.",
    "description": "Home and homelab network design — gateways, switches, access points, IP ranges, DHCP reservations, DNS, and cabling. Also for troubleshooting new networks with double NAT, unstable Wi-Fi, or shifting server addresses."
  },
  {
    "slug": "homelab-pihole-dns",
    "name": "homelab-pihole-dns",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Pi-hole installation, blocklist management, DNS-over-HTTPS setup, DHCP integration, local DNS records, and troubleshooting broken DNS resolution on a home network.",
    "description": "Pi-hole installation, blocklist management, DNS-over-HTTPS setup, DHCP integration, local DNS records, and troubleshooting broken DNS resolution on a home network."
  },
  {
    "slug": "homelab-vlan-segmentation",
    "name": "homelab-vlan-segmentation",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Segmenting home networks into VLANs for IoT, guest, trusted, and server traffic using UniFi, pfSense/OPNsense, and MikroTik — including switch trunk config, firewall rules, and wireless SSID mapping.",
    "description": "Segmenting home networks into VLANs for IoT, guest, trusted, and server traffic using UniFi, pfSense/OPNsense, and MikroTik — including switch trunk config, firewall rules, and wireless SSID mapping. Also for explaining VLAN concepts to someone unfamiliar, or troubleshooting inter-VLAN routing or firewall rules."
  },
  {
    "slug": "homelab-wireguard-vpn",
    "name": "homelab-wireguard-vpn",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "WireGuard VPN server setup, peer configuration, key generation, split tunneling vs full tunnel routing, and remote access to a home network from mobile and laptop clients.",
    "description": "WireGuard VPN server setup, peer configuration, key generation, split tunneling vs full tunnel routing, and remote access to a home network from mobile and laptop clients. Also for troubleshooting WireGuard connections that won't come up, or automating peer config generation."
  },
  {
    "slug": "improve-codebase-architecture",
    "name": "improve-codebase-architecture",
    "category": "Architecture & Review",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to improve architecture, find refactoring opportunities, consolidate tightly-coupled modules, or make a codebase more testable and AI-navigable.",
    "description": "Find deepening opportunities in a codebase, informed by the domain language in CONTEXT.md and the decisions in docs/adr/. Use when the user wants to improve architecture, find refactoring opportunities, consolidate tightly-coupled modules, or make a codebase more testable and AI-navigable."
  },
  {
    "slug": "lead-intelligence",
    "name": "lead-intelligence",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to find, qualify, and reach high-value contacts.",
    "description": "AI-native lead intelligence and outreach pipeline. Replaces Apollo, Clay, and ZoomInfo with agent-powered signal scoring, mutual ranking, warm path discovery, source-derived voice modeling, and channel-specific outreach across email, LinkedIn, and X. Use when the user wants to find, qualify, and reach high-value contacts."
  },
  {
    "slug": "market-research",
    "name": "market-research",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions.",
    "description": "Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions."
  },
  {
    "slug": "mcp-server-patterns",
    "name": "mcp-server-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Build MCP servers with Node/TypeScript SDK — tools, resources, prompts, Zod validation, stdio vs Streamable HTTP.",
    "description": "Build MCP servers with Node/TypeScript SDK — tools, resources, prompts, Zod validation, stdio vs Streamable HTTP. Use Context7 or official MCP docs for latest API. Also when upgrading the SDK or debugging MCP registration and transport issues."
  },
  {
    "slug": "motion-advanced",
    "name": "motion-advanced",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Advanced motion patterns for React / Next.js — drag & drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loaders, and the full API decision tree.",
    "description": "Advanced motion patterns for React / Next.js — drag & drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loaders, and the full API decision tree. Requires motion-foundations."
  },
  {
    "slug": "motion-foundations",
    "name": "motion-foundations",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react.",
    "description": "Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react. Foundation layer — all other motion skills depend on this. Also when debugging hydration mismatches from animation initial states, or evaluating whether an animation should exist at all."
  },
  {
    "slug": "motion-patterns",
    "name": "motion-patterns",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion-foundations tokens and springs.",
    "description": "Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion-foundations tokens and springs."
  },
  {
    "slug": "motion-ui",
    "name": "motion-ui",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Device adaptation, debugging, and QA checklists for motion/react work.",
    "description": "Device adaptation, debugging, and QA checklists for motion/react work. Adds a deviceMemory-aware low-end heuristic, a hydration/import debugging checklist, and an accessibility/motion QA checklist on top of motion-foundations / motion-patterns / motion-advanced."
  },
  {
    "slug": "network-config-validation",
    "name": "network-config-validation",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Pre-deployment checks for router and switch configuration, including dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risk, and IOS-style security hygiene.",
    "description": "Pre-deployment checks for router and switch configuration, including dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risk, and IOS-style security hygiene."
  },
  {
    "slug": "network-interface-health",
    "name": "network-interface-health",
    "category": "Homelab & Networking",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Diagnose interface errors, drops, CRCs, duplex mismatches, flapping, speed negotiation issues, and counter trends on routers, switches, and Linux hosts.",
    "description": "Diagnose interface errors, drops, CRCs, duplex mismatches, flapping, speed negotiation issues, and counter trends on routers, switches, and Linux hosts."
  },
  {
    "slug": "nextjs-turbopack",
    "name": "nextjs-turbopack",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Next.js 16+ and Turbopack — incremental bundling, FS caching, dev speed, and when to use Turbopack vs webpack.",
    "description": "Next.js 16+ and Turbopack — incremental bundling, FS caching, dev speed, and when to use Turbopack vs webpack."
  },
  {
    "slug": "opensource-pipeline",
    "name": "opensource-pipeline",
    "category": "Productivity & Ops",
    "invocable": true,
    "userOnly": false,
    "command": "/opensource",
    "trigger": "Open-source pipeline: fork, sanitize, and package private projects for safe public release.",
    "description": "Open-source pipeline: fork, sanitize, and package private projects for safe public release. Chains 3 agents (forker, sanitizer, packager). Triggers: '/opensource', 'open source this', 'make this public', 'prepare for open source'."
  },
  {
    "slug": "orch-add-feature",
    "name": "orch-add-feature",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when adding a capability that does not exist yet.",
    "description": "Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the matching ECC agent. Use when adding a capability that does not exist yet."
  },
  {
    "slug": "orch-build-mvp",
    "name": "orch-build-mvp",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice, then TDD-implement, review, and gated commit.",
    "description": "Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice, then TDD-implement, review, and gated commit. Use to turn an SDD/PRD into a running starting point."
  },
  {
    "slug": "orch-change-feature",
    "name": "orch-change-feature",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when behavior is not broken but should be different.",
    "description": "Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review, and gated commit. Use when behavior is not broken but should be different."
  },
  {
    "slug": "orch-fix-defect",
    "name": "orch-fix-defect",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when existing behavior is broken or wrong.",
    "description": "Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase to the matching ECC agent. Use when existing behavior is broken or wrong."
  },
  {
    "slug": "orch-pipeline",
    "name": "orch-pipeline",
    "category": "Orchestration Pipelines",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Shared orchestration engine for the orch-* skill family.",
    "description": "Shared orchestration engine for the orch-* skill family. Defines the gated Research-Plan-TDD-Review-Commit pipeline, the size classifier, the agent map, and the two human gates that the orch-* operation skills delegate to. Not usually invoked directly."
  },
  {
    "slug": "orch-refine-code",
    "name": "orch-refine-code",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the structure should improve but behavior must not change.",
    "description": "Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. Use when the structure should improve but behavior must not change."
  },
  {
    "slug": "product-lens",
    "name": "product-lens",
    "category": "Planning & Decisions",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use this skill to validate the \"why\" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract.",
    "description": "Use this skill to validate the \"why\" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract."
  },
  {
    "slug": "prototype",
    "name": "prototype",
    "category": "Frontend, UI & Motion",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Build a throwaway prototype to flesh out a design — a runnable terminal app for state/business-logic questions, or several radically different UI variations toggleable from one route.",
    "description": "Build a throwaway prototype to flesh out a design — a runnable terminal app for state/business-logic questions, or several radically different UI variations toggleable from one route."
  },
  {
    "slug": "python-patterns",
    "name": "python-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications.",
    "description": "Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications."
  },
  {
    "slug": "python-testing",
    "name": "python-testing",
    "category": "Testing & QA",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements.",
    "description": "Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements."
  },
  {
    "slug": "pytorch-patterns",
    "name": "pytorch-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible training pipelines, model architectures, and data loading.",
    "description": "PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible training pipelines, model architectures, and data loading."
  },
  {
    "slug": "react-patterns",
    "name": "react-patterns",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use when writing or reviewing React components.",
    "description": "React 18/19 patterns including hooks discipline, server/client component seams, Suspense + error boundaries, form actions, data fetching, state management decision trees, and accessibility-first composition. Use when writing or reviewing React components."
  },
  {
    "slug": "react-performance",
    "name": "react-performance",
    "category": "Architecture & Review",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use when writing, reviewing, or refactoring React/Next.js code for performance.",
    "description": "React and Next.js performance optimization patterns adapted from Vercel Engineering's React Best Practices (https://github.com/vercel-labs/agent-skills). Organizes 70+ rules across 8 priority categories — waterfalls, bundle size, server-side, client fetching, re-render, rendering, JS micro-perf, advanced. Use when writing, reviewing, or refactoring React/Next.js code for performance."
  },
  {
    "slug": "react-testing",
    "name": "react-testing",
    "category": "Testing & QA",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Use when writing or fixing tests for React components, hooks, or pages.",
    "description": "React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and Playwright/Cypress end-to-end runs. Use when writing or fixing tests for React components, hooks, or pages."
  },
  {
    "slug": "regex-vs-llm-structured-text",
    "name": "regex-vs-llm-structured-text",
    "category": "Coding Standards & Patterns",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases.",
    "description": "Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases."
  },
  {
    "slug": "remotion-video-creation",
    "name": "remotion-video-creation",
    "category": "Frontend, UI & Motion",
    "invocable": false,
    "userOnly": false,
    "command": "",
    "trigger": "Best practices for Remotion - Video creation in React.",
    "description": "Best practices for Remotion - Video creation in React. 29 domain-specific rules covering 3D, animations, audio, captions, charts, transitions, and more."
  },
  {
    "slug": "research-ops",
    "name": "research-ops",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any supplied local context.",
    "description": "Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any supplied local context."
  },
  {
    "slug": "resolving-merge-conflicts",
    "name": "resolving-merge-conflicts",
    "category": "Git & Collaboration",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Merge conflict resolution for an in-progress git merge or rebase — inspect both intents, resolve each hunk, run project checks, and finish the merge or rebase cleanly.",
    "description": "Merge conflict resolution for an in-progress git merge or rebase — inspect both intents, resolve each hunk, run project checks, and finish the merge or rebase cleanly."
  },
  {
    "slug": "santa-method",
    "name": "santa-method",
    "category": "Orchestration Pipelines",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Multi-agent adversarial verification with convergence loop.",
    "description": "Multi-agent adversarial verification with convergence loop. Two independent review agents must both pass before output ships. Do NOT use for internal drafts, exploratory research, or tasks with deterministic verification — use build, test, or lint pipelines instead."
  },
  {
    "slug": "scientific-thinking-literature-review",
    "name": "scientific-thinking-literature-review",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence logging.",
    "description": "Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence logging."
  },
  {
    "slug": "scientific-thinking-scholar-evaluation",
    "name": "scientific-thinking-scholar-evaluation",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback.",
    "description": "Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback."
  },
  {
    "slug": "search-first",
    "name": "search-first",
    "category": "Research & Intelligence",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Research-before-coding workflow.",
    "description": "Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. Invokes the researcher agent."
  },
  {
    "slug": "security-review",
    "name": "security-review",
    "category": "Security",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features.",
    "description": "Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provides comprehensive security checklist and patterns. Also for file uploads, storing or transmitting sensitive data, and integrating third-party APIs."
  },
  {
    "slug": "security-scan",
    "name": "security-scan",
    "category": "Security",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Trigger after modifying .claude config, before committing config changes, when onboarding to a repo with existing configs, or for periodic security hygiene.",
    "description": "Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. Checks CLAUDE.md, settings.json, MCP servers, hooks, and agent definitions. Trigger after modifying .claude config, before committing config changes, when onboarding to a repo with existing configs, or for periodic security hygiene."
  },
  {
    "slug": "skill-comply",
    "name": "skill-comply",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "/skill-comply",
    "trigger": "Trigger when the user runs /skill-comply, asks whether a rule is followed, after adding new rules or skills, or periodically for quality maintenance.",
    "description": "Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, and reports compliance rates with full tool call timelines. Trigger when the user runs /skill-comply, asks whether a rule is followed, after adding new rules or skills, or periodically for quality maintenance."
  },
  {
    "slug": "skill-scout",
    "name": "skill-scout",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to create, build, fork, or find a skill for a workflow.",
    "description": "Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. Use when the user wants to create, build, fork, or find a skill for a workflow."
  },
  {
    "slug": "skill-stocktake",
    "name": "skill-stocktake",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Claude skill and command quality audit — evaluates skills via checklist plus holistic AI judgment.",
    "description": "Claude skill and command quality audit — evaluates skills via checklist plus holistic AI judgment. Quick Scan mode for recently changed skills, Full Stocktake mode for a complete review with sequential subagent batches."
  },
  {
    "slug": "tdd",
    "name": "tdd",
    "category": "Testing & QA",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use when the user wants to build features or fix bugs test-first, mentions \"red-green-refactor\", or wants integration tests.",
    "description": "Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions \"red-green-refactor\", or wants integration tests."
  },
  {
    "slug": "teach",
    "name": "teach",
    "category": "Communication & Session",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Teach the user a new skill or concept, within this workspace.",
    "description": "Teach the user a new skill or concept, within this workspace."
  },
  {
    "slug": "token-budget-advisor",
    "name": "token-budget-advisor",
    "category": "Communication & Session",
    "invocable": true,
    "userOnly": false,
    "command": "",
    "trigger": "Use this skill when the user explicitly wants to control response length, depth, or token budget.",
    "description": "Offers the user an informed choice about how much response depth to consume before answering. Use this skill when the user explicitly wants to control response length, depth, or token budget. TRIGGER when: \"token budget\", \"token count\", \"token usage\", \"token limit\", \"response length\", \"answer depth\", \"short version\", \"brief answer\", \"detailed answer\", \"exhaustive answer\", \"respuesta corta vs larga\", \"cuántos tokens\", \"ahorrar tokens\", \"responde al 50%\", \"dame la versión corta\", \"quiero controlar cuánto usas\", or clear variants where the user is explicitly asking to control answer size or depth. DO NOT TRIGGER when: user has already specified a level in the current session (maintain it), the request is clearly a one-word answer, or \"token\" refers to auth/session/payment tokens rather than response size."
  },
  {
    "slug": "writing-great-skills",
    "name": "writing-great-skills",
    "category": "Agent & Skill Engineering",
    "invocable": true,
    "userOnly": true,
    "command": "",
    "trigger": "Reference for writing and editing skills well — the vocabulary and principles that make a skill predictable.",
    "description": "Reference for writing and editing skills well — the vocabulary and principles that make a skill predictable."
  }
];
