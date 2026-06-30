(function () {
  "use strict";

  var SKILLS = window.SKILLS || [];

  var CATEGORY_ORDER = [
    "Communication & Session",
    "Planning & Decisions",
    "Orchestration Pipelines",
    "Research & Intelligence",
    "Architecture & Review",
    "Coding Standards & Patterns",
    "Testing & QA",
    "Security",
    "Frontend, UI & Motion",
    "Git & Collaboration",
    "Agent & Skill Engineering",
    "Content & Writing",
    "Homelab & Networking",
    "Productivity & Ops"
  ];

  var state = { query: "", category: "all", onlyInvocable: false, onlyUser: false };

  var el = {
    search: document.getElementById("search"),
    onlyInv: document.getElementById("onlyInv"),
    onlyUser: document.getElementById("onlyUser"),
    chips: document.getElementById("chips"),
    catalog: document.getElementById("catalog"),
    empty: document.getElementById("empty"),
    resultMeta: document.getElementById("resultMeta"),
    statTotal: document.getElementById("statTotal"),
    statInv: document.getElementById("statInv"),
    statUser: document.getElementById("statUser"),
    statCat: document.getElementById("statCat"),
    themeToggle: document.getElementById("themeToggle"),
    toTop: document.getElementById("toTop")
  };

  function categories() {
    var present = {};
    SKILLS.forEach(function (s) { present[s.category] = (present[s.category] || 0) + 1; });
    var ordered = CATEGORY_ORDER.filter(function (c) { return present[c]; });
    Object.keys(present).forEach(function (c) {
      if (ordered.indexOf(c) === -1) ordered.push(c);
    });
    return ordered.map(function (c) { return { name: c, count: present[c] }; });
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    var terms = q.trim().split(/\s+/).filter(Boolean).map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    if (!terms.length) return safe;
    var re = new RegExp("(" + terms.join("|") + ")", "gi");
    return safe.replace(re, "<mark>$1</mark>");
  }

  function matches(s, q) {
    if (!q) return true;
    var hay = (s.slug + " " + s.category + " " + s.command + " " + s.trigger + " " + s.description).toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every(function (t) { return hay.indexOf(t) !== -1; });
  }

  function matchesFilters(s) {
    if (state.onlyUser && !s.userOnly) return false;
    if (state.onlyInvocable && !s.invocable) return false;
    return matches(s, state.query);
  }

  function filtered() {
    return SKILLS.filter(function (s) {
      if (state.category !== "all" && s.category !== state.category) return false;
      return matchesFilters(s);
    });
  }

  function cardHTML(s) {
    var q = state.query;
    var badges = "";
    if (s.command) badges += '<span class="badge cmd">' + esc(s.command) + "</span>";
    if (s.userOnly) badges += '<span class="badge useronly" title="Only the user can invoke this skill — the agent never auto-applies it">user only</span>';
    else if (s.invocable) badges += '<span class="badge inv">invocable</span>';
    var skillPath = "../skills/" + s.slug + "/SKILL.md";
    return (
      '<article class="card" data-slug="' + esc(s.slug) + '">' +
        '<div class="card-head" tabindex="0" role="button" aria-expanded="false">' +
          '<span class="caret">▸</span>' +
          '<div class="card-title">' +
            '<div class="card-name">' + highlight(s.slug, q) + badges + "</div>" +
            '<div class="card-trigger">' + highlight(s.trigger || s.description, q) + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="card-body">' +
          '<div class="label">What it does &amp; when to invoke</div>' +
          "<p>" + highlight(s.description, q) + "</p>" +
          '<div class="card-meta">' +
            "<span>" + esc(s.category) + "</span>" +
            "<span>" + (s.userOnly ? "Invocation: user only" : (s.invocable ? "Invocation: user or agent" : "Invocation: agent (automatic)")) + "</span>" +
            (s.command ? "<span>Command: <code>" + esc(s.command) + "</code></span>" : "") +
            '<a href="' + esc(skillPath) + '">SKILL.md ↗</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var list = filtered();
    var byCat = {};
    list.forEach(function (s) { (byCat[s.category] = byCat[s.category] || []).push(s); });

    var html = "";
    categories().forEach(function (c) {
      var items = byCat[c.name];
      if (!items || !items.length) return;
      items.sort(function (a, b) { return a.slug.localeCompare(b.slug); });
      html +=
        '<section class="catsection">' +
          '<div class="cathead"><h2>' + esc(c.name) + '</h2>' +
          '<span class="count">' + items.length + " skill" + (items.length === 1 ? "" : "s") + "</span></div>" +
          '<div class="grid">' + items.map(cardHTML).join("") + "</div>" +
        "</section>";
    });

    el.catalog.innerHTML = html;
    el.empty.style.display = list.length ? "none" : "block";

    var invCount = list.filter(function (s) { return s.invocable; }).length;
    var userCount = list.filter(function (s) { return s.userOnly; }).length;
    el.resultMeta.textContent =
      "Showing " + list.length + " of " + SKILLS.length + " skills" +
      (state.onlyInvocable || state.onlyUser || state.query || state.category !== "all"
        ? " · " + invCount + " invocable · " + userCount + " user-only" : "");

    renderChips();
  }

  function renderChips() {
    var counts = {};
    var total = 0;
    SKILLS.forEach(function (s) {
      if (!matchesFilters(s)) return;
      counts[s.category] = (counts[s.category] || 0) + 1;
      total++;
    });
    var html = '<button class="chip' + (state.category === "all" ? " active" : "") +
      '" data-cat="all">All <span class="c">' + total + "</span></button>";
    categories().forEach(function (c) {
      var n = counts[c.name] || 0;
      var cls = "chip" + (state.category === c.name ? " active" : "") + (n === 0 ? " is-empty" : "");
      html += '<button class="' + cls + '" data-cat="' + esc(c.name) + '">' +
        esc(c.name) + ' <span class="c">' + n + "</span></button>";
    });
    el.chips.innerHTML = html;
  }

  // Events
  el.search.addEventListener("input", function () { state.query = el.search.value; render(); });
  el.onlyInv.addEventListener("change", function () {
    state.onlyInvocable = el.onlyInv.checked;
    if (state.onlyInvocable && state.onlyUser) { state.onlyUser = false; el.onlyUser.checked = false; }
    render();
  });
  el.onlyUser.addEventListener("change", function () {
    state.onlyUser = el.onlyUser.checked;
    if (state.onlyUser && state.onlyInvocable) { state.onlyInvocable = false; el.onlyInv.checked = false; }
    render();
  });

  el.chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.category = btn.getAttribute("data-cat");
    render();
  });

  el.catalog.addEventListener("click", function (e) {
    var head = e.target.closest(".card-head");
    if (!head || e.target.closest("a")) return;
    toggleCard(head);
  });
  el.catalog.addEventListener("keydown", function (e) {
    var head = e.target.closest(".card-head");
    if (!head) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(head); }
  });

  function toggleCard(head) {
    var card = head.closest(".card");
    var open = card.classList.toggle("open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  }

  // Theme
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    el.themeToggle.textContent = t === "dark" ? "◑" : "◐";
    try { localStorage.setItem("appendix-theme", t); } catch (e) {}
  }
  el.themeToggle.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  (function initTheme() {
    var saved;
    try { saved = localStorage.getItem("appendix-theme"); } catch (e) {}
    if (!saved) saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved);
  })();

  // Back to top
  window.addEventListener("scroll", function () {
    el.toTop.classList.toggle("show", window.scrollY > 600);
  });
  el.toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Keyboard: "/" focuses search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== el.search) {
      e.preventDefault();
      el.search.focus();
    }
  });

  // MCP servers
  function renderMCP() {
    var grid = document.getElementById("mcpGrid");
    if (!grid) return;
    var servers = window.MCP_SERVERS || [];
    grid.innerHTML = servers.map(function (m) {
      var badges = '<span class="badge transport">' + esc(m.transport) + "</span>";
      badges += m.credentials
        ? '<span class="badge cred" title="Requires credentials before use">credentials</span>'
        : '<span class="badge keyfree">key-free</span>';
      return (
        '<article class="card mcp">' +
          '<div class="card-head" tabindex="0" role="button" aria-expanded="false">' +
            '<span class="caret">▸</span>' +
            '<div class="card-title">' +
              '<div class="card-name">' + esc(m.name) + badges + "</div>" +
              '<div class="card-trigger">' + esc(m.label) + " · " + esc(m.source) + "</div>" +
            "</div>" +
          "</div>" +
          '<div class="card-body">' +
            '<div class="label">What it provides</div>' +
            "<p>" + esc(m.description) + "</p>" +
            '<div class="card-meta">' +
              "<span>Transport: " + esc(m.transport) + "</span>" +
              "<span>Defined in: <code>" + esc(m.source) + "</code></span>" +
            "</div>" +
            '<div class="label">Command</div>' +
            '<pre class="cmdline"><code>' + esc(m.command) + "</code></pre>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    var count = servers.length;
    var cred = servers.filter(function (m) { return m.credentials; }).length;
    var mcpCount = document.getElementById("mcpCount");
    if (mcpCount) mcpCount.textContent = count + " server" + (count === 1 ? "" : "s") +
      (cred ? " · " + cred + " need credentials" : "");
    var mcpFooter = document.getElementById("mcpFooter");
    if (mcpFooter) mcpFooter.textContent = count;

    grid.addEventListener("click", function (e) {
      var head = e.target.closest(".card-head");
      if (!head || e.target.closest("a")) return;
      toggleCard(head);
    });
    grid.addEventListener("keydown", function (e) {
      var head = e.target.closest(".card-head");
      if (!head) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(head); }
    });
  }

  // Stats
  el.statTotal.textContent = SKILLS.length;
  el.statInv.textContent = SKILLS.filter(function (s) { return s.invocable; }).length;
  el.statUser.textContent = SKILLS.filter(function (s) { return s.userOnly; }).length;
  el.statCat.textContent = categories().length;

  renderChips();
  render();
  renderMCP();
})();
