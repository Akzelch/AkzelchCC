window.MCP_SERVERS = [
  {
    "name": "parallel-search",
    "label": "Parallel Web Search",
    "transport": "HTTP",
    "source": ".mcp.json",
    "credentials": false,
    "command": "https://search.parallel.ai/mcp",
    "description": "LLM-optimized web_search and web_fetch tools that take an objective + queries and return citation-backed excerpts in a single call (replaces multiple keyword searches). Works key-free for anonymous use; add a Bearer token from platform.parallel.ai for higher rate limits."
  },
  {
    "name": "context7",
    "label": "Context7",
    "transport": "stdio",
    "source": ".mcp.json",
    "credentials": false,
    "command": "npx -y @upstash/context7-mcp@latest",
    "description": "Live documentation lookup — resolve-library-id and query-docs. Pairs with the /docs command and the documentation-lookup skill to fetch up-to-date framework and library docs."
  },
  {
    "name": "playwright",
    "label": "Playwright",
    "transport": "stdio",
    "source": ".mcp.json",
    "credentials": false,
    "command": "npx -y @playwright/mcp --browser chrome",
    "description": "Browser automation and testing via Playwright. Drives a real Chrome instance for UI interaction, visual checks, and end-to-end verification. Used by the browser-qa skill."
  },
  {
    "name": "confluence",
    "label": "Confluence",
    "transport": "stdio",
    "source": "credential_mcps.json",
    "credentials": true,
    "command": "npx -y confluence-mcp-server",
    "description": "Confluence Cloud integration — search pages, retrieve content, and explore spaces. Requires CONFLUENCE_BASE_URL, CONFLUENCE_EMAIL, and CONFLUENCE_API_TOKEN."
  },
  {
    "name": "supabase",
    "label": "Supabase",
    "transport": "stdio",
    "source": "credential_mcps.json",
    "credentials": true,
    "command": "npx -y @supabase/mcp-server-supabase@latest --project-ref=…",
    "description": "Supabase database operations against a project. Requires a project ref and credentials before use."
  }
];
