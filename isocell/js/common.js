/* ==========================================================================
   Samsung S.LSI ISOCELL 200MP & E2E AI Remosaic Guidebook — Exact SensorBook Runtime
   ========================================================================== */
(function () {
  "use strict";

  const SB = (window.SB = window.SB || {});

  SB.CHAPTERS = [
  {
    "slug": "isocell_sensors",
    "num": "01",
    "title": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5)",
    "desc": "Core principle of Non-Bayer (4×4 Hexadeca / 2×2 Q-cell) to Bayer Remosaic, chronological development history across ISOCELL HP2 (0.6µm, QMSC), HP3/HP9 (0.56µm, World-1st DL Hexadeca Remosaic), and HP5 (0.5µm, World's Smallest 200MP), and commercialized flagship devices.",
    "tags": [
      "Remosaic Principle",
      "HP2 · QMSC",
      "HP3/HP9 · 1st DL 16-Cell",
      "HP5 · 0.5µm Tech Lead"
    ]
  },
  {
    "slug": "e2e_remosaic",
    "num": "02",
    "title": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline",
    "desc": "Distributing DL Remosaic and Camera ISP workloads across CPU/GPU/NPU/ISP mounted directly on the Camera ISP pipeline (~3× faster 200MP capture), Gen 1 → Gen 4 feature evolution history, SEC 2023 Silver Award, and commercial product table (30+ OEM models).",
    "tags": [
      "ISP Pipeline Parallelization",
      "CPU/GPU/NPU/ISP",
      "Gen 1–4 History",
      "30+ OEM Products"
    ]
  }
];
  const PREBUILT_SEARCH = [{"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5)", "title": "What Is Remosaic? (Core Principle &amp; Multi-Mode Readout)", "hash": "sec-remosaic-principle", "keywords": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5) What Is Remosaic? (Core Principle &amp; Multi-Mode Readout) sec-remosaic-principle"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5)", "title": "Chronological Sensor Development History (2021 – Present)", "hash": "sec-sensor-history", "keywords": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5) Chronological Sensor Development History (2021 – Present) sec-sensor-history"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5)", "title": "200MP ISOCELL Sensor Lineup &amp; Commercial Product Table", "hash": "sec-sensor-products", "keywords": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5) 200MP ISOCELL Sensor Lineup &amp; Commercial Product Table sec-sensor-products"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5)", "title": "Chapter 01 Summary", "hash": "summary", "keywords": "200MP ISOCELL Sensor Development (HP2 · HP3/HP9 · HP5) Chapter 01 Summary summary"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline", "title": "How Heterogeneous Parallelization Works on the Camera ISP Pipeline", "hash": "sec-isp-parallelization", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline How Heterogeneous Parallelization Works on the Camera ISP Pipeline sec-isp-parallelization"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline", "title": "Chronological Feature Evolution History (Gen 1 – Gen 4)", "hash": "sec-e2e-history", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline Chronological Feature Evolution History (Gen 1 – Gen 4) sec-e2e-history"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline", "title": "Commercial Products &amp; Deployment Lineup (Table &amp; List)", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline Commercial Products &amp; Deployment Lineup (Table &amp; List) sec-commercial-products"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline", "title": "Chapter 02 Summary", "hash": "summary", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous Parallelization on the ISP Pipeline Chapter 02 Summary summary"}, {"type": "Concept", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Remosaic (Non-Bayer to Bayer Conversion) (Remosaic)", "hash": "sec-commercial-products", "keywords": "Remosaic (Non-Bayer to Bayer Conversion) Remosaic Algorithm Remosaic Algorithmic conversion of a non-Bayer multi-cell color filter array (2×2 Q-cell / 4×4 Hexadeca) into a standard 2×2 Bayer (RGGB) pattern required by the Camera ISP for 200MP full-resolution capture and 2×/4× In-Sensor Zoom."}, {"type": "Concept", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Tetra²pixel (4×4 Hexadeca CFA) (Tetra²pixel)", "hash": "sec-commercial-products", "keywords": "Tetra²pixel (4×4 Hexadeca CFA) 16-Cell Non-Bayer Color Filter Array Tetra²pixel Samsung's 16-cell (4×4) non-Bayer Color Filter Array grouping 16 neighboring photodiodes under the same color filter—enabling 12.5MP (4×4 binning), 50MP (2×2 binning), and 200MP full-res / 4× zoom via Remosaic."}, {"type": "Concept", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "QMSC (AI 4×4 Q-Cell Remosaic) (QMSC)", "hash": "sec-commercial-products", "keywords": "QMSC (AI 4×4 Q-Cell Remosaic) In-Sensor AI 4×4 Q-Cell Remosaic QMSC AI-based 4×4 Q-cell Remosaic algorithm deployed in-sensor on ISOCELL HP2 (0.6µm, 200MP), enabling 200MP full-res capture and lossless 12MP 4× In-Sensor Zoom on Samsung Galaxy S23 Ultra."}, {"type": "Concept", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "E2E AI Remosaic (E2E AI RMSC)", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic End-to-End 200MP S/W ISP Turn-Key Platform E2E AI RMSC Samsung's End-to-End S/W ISP turn-key solution that distributes DL Remosaic and Camera ISP workloads across CPU/GPU/NPU/ISP and mounts them onto the Camera ISP pipeline—accelerating 200MP cfa2yuv capture up to 3× faster (3s → 1s @ SM8550) across 30+ OEM products."}, {"type": "Concept", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Heterogeneous SoC Parallelization (HetSoC)", "hash": "sec-commercial-products", "keywords": "Heterogeneous SoC Parallelization CPU / GPU / NPU / ISP Pipeline Distribution HetSoC Partitioning and scheduling DL Remosaic and S/W ISP stages concurrently across mobile CPU, GPU, NPU, and H/W ISP engines mounted on the Camera ISP pipeline (Qualcomm Snapdragon & MediaTek Dimensity)."}];

  const LOGO = `<svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="11" height="11" rx="3" fill="#e0443e"/>
    <rect x="15" y="2" width="11" height="11" rx="3" fill="#2da44e"/>
    <rect x="2" y="15" width="11" height="11" rx="3" fill="#2da44e" opacity=".82"/>
    <rect x="15" y="15" width="11" height="11" rx="3" fill="#2f6fe0"/>
  </svg>`;

  function rootPrefix() {
    const b = document.body;
    if (b && b.dataset.root) return b.dataset.root;
    return location.pathname.includes("/chapters/") ? "../" : "";
  }
  function currentSlug() {
    const b = document.body;
    if (b && b.dataset.chapter) return b.dataset.chapter;
    const m = location.pathname.match(/\/chapters\/([^\/]+)\.html/);
    return m ? m[1] : "index";
  }

  // ---------- Theme ----------
  const THEME_KEY = "kaist-grad-works-book-theme";
  function getSavedTheme() { try { return localStorage.getItem(THEME_KEY); } catch { return null; } }
  function applyTheme(t) {
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.dispatchEvent(new CustomEvent("sb:theme"));
  }
  const saved = getSavedTheme();
  if (saved) applyTheme(saved);

  SB.isDark = function () {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // ---------- Mount Topbar + Drawer (Exact SensorBook DOM) ----------
  function mountTopbar() {
    const root = rootPrefix();
    const slug = currentSlug();
    const cur = SB.CHAPTERS.find(c => c.slug === slug);

    const bar = document.createElement("header");
    bar.className = "sb-topbar";
    bar.innerHTML = `
      <button class="sb-iconbtn" id="sb-open-drawer" aria-label="Open Navigation">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h12"/></svg>
        <span>${cur ? ("Ch." + cur.num) : "Chapters"}</span>
      </button>
      <a class="sb-brand" href="${root}index.html">
        ${LOGO}
        <span>ISOCELL 200MP &amp; E2E AI REMOSAIC <small>Samsung S.LSI Project Guidebook</small></span>
      </a>
      <div class="sp"></div>
      <div class="book-search" id="book-search">
        <input type="search" class="book-search-input" id="book-search-input" placeholder="Search sensors, E2E Gen 1–4, OEM models…" autocomplete="off" aria-label="Search guidebook">
        <div class="book-search-results" id="book-search-results" hidden></div>
      </div>
      <a class="sb-iconbtn series-link" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener" title="Yongjoon Song — Executive Web Resume / CV">
        <span>📄 Resume</span>
      </a>
      <a class="sb-iconbtn series-link" href="https://www.linkedin.com/in/yongjoon-song-52b03a208/" target="_blank" rel="noopener" title="LinkedIn Profile">
        <span>💼 LinkedIn</span>
      </a>
      <button class="sb-iconbtn" id="sb-theme" aria-label="Toggle Theme" title="Switch Light / Dark Theme">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
      </button>
      <div class="sb-progress" id="sb-progress"></div>
    `;
    document.body.prepend(bar);

    const backdrop = document.createElement("div");
    backdrop.className = "sb-drawer-backdrop";
    const drawer = document.createElement("aside");
    drawer.className = "sb-drawer";
    drawer.innerHTML = `
      <div class="sb-drawer-head">
        <span>Samsung S.LSI Project Guidebook</span>
        <button class="sb-iconbtn" id="sb-close-drawer">Close</button>
      </div>
      <nav class="sb-drawer-list">
        <a href="${root}index.html" class="${slug === "index" ? "active" : ""}">
          <span class="num">HOME</span>
          <span>Overview &amp; Commercial Product Summary</span>
        </a>
        ${SB.CHAPTERS.map(c => `
          <a href="${root}chapters/${c.slug}.html" class="${c.slug === slug ? "active" : ""}">
            <span class="num">CH.${c.num}</span>
            <span>${c.title}<div class="sub">${c.desc}</div></span>
          </a>
        `).join("")}
        <div style="margin:14px 10px 6px;padding-top:12px;border-top:1px solid var(--border);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.04em;">AUTHOR PROFILES &amp; OTHER GUIDEBOOKS ↗</div>
        <a href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener">
          <span class="num">CV</span>
          <span>Executive Web Resume<div class="sub">yjqkrtk-ux.github.io · Print-ready CV</div></span>
        </a>
        <a href="https://www.linkedin.com/in/yongjoon-song-52b03a208/" target="_blank" rel="noopener">
          <span class="num">IN</span>
          <span>LinkedIn Profile<div class="sub">linkedin.com/in/yongjoon-song-52b03a208</div></span>
        </a>
        <a href="https://yjqkrtk-ux.github.io/aicamera/" target="_blank" rel="noopener">
          <span class="num">LSP</span>
          <span>AICAMERA (Edge LSP) Guidebook<div class="sub">Sony IMX500 + Hailo-8 Split Inference &amp; ISP</div></span>
        </a>
        <a href="https://yjqkrtk-ux.github.io/gradworks/" target="_blank" rel="noopener">
          <span class="num">PHD</span>
          <span>KAIST Ph.D. Research Guidebook<div class="sub">DQNAlign · 3D WPT · REminerII · Academic Archive</div></span>
        </a>
      </nav>
    `;
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    const close = () => document.body.classList.remove("drawer-open");
    document.getElementById("sb-open-drawer").addEventListener("click", () => document.body.classList.add("drawer-open"));
    document.getElementById("sb-close-drawer").addEventListener("click", close);
    backdrop.addEventListener("click", close);
    window.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    document.getElementById("sb-theme").addEventListener("click", () => {
      const next = SB.isDark() ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch {}
      applyTheme(next);
    });

    const prog = document.getElementById("sb-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - h.clientHeight);
      prog.style.width = Math.min(100, (h.scrollTop / max) * 100).toFixed(1) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Mount Right-hand TOC + Section Numbering ----------
  function mountToc() {
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.dataset.tocMounted) return;
      main.dataset.tocMounted = "1";
      let layout = main.closest(".sb-layout");
      if (!layout) {
        layout = document.createElement("div");
        layout.className = "sb-layout";
        main.parentNode.insertBefore(layout, main);
        layout.appendChild(main);
      }
      const sections = Array.from(main.querySelectorAll(":scope > section"));
      if (!sections.length) return;

      const toc = document.createElement("aside");
      toc.className = "sb-toc";
      toc.innerHTML = `<h4>On this page</h4>`;
      const links = [];

      sections.forEach((sec, idx) => {
        const h2 = sec.querySelector("h2");
        if (!h2) return;
        if (!sec.id) sec.id = "sec-" + (idx + 1);
        const rawTitle = h2.textContent.replace(/^\s*\d+(\.\d+)?\s*/, "").trim();
        if (!h2.querySelector(".h-num") && !sec.classList.contains("keypoints")) {
          const num = String(idx + 1).padStart(2, "0");
          h2.innerHTML = `<span class="h-num">${num}</span><span>${h2.innerHTML}</span>`;
        }
        const a = document.createElement("a");
        a.href = "#" + sec.id;
        a.textContent = rawTitle;
        toc.appendChild(a);
        links.push({ sec, a });
      });
      layout.appendChild(toc);

      const spy = () => {
        const y = window.scrollY + 110;
        let active = links[0];
        for (const item of links) {
          if (item.sec.offsetTop <= y) active = item;
        }
        links.forEach(item => item.a.classList.toggle("on", item === active));
      };
      window.addEventListener("scroll", spy, { passive: true });
      spy();
    });
  }

  // ---------- Mount Prev / Next Pager ----------
  function mountPager() {
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.dataset.pagerMounted) return;
      main.dataset.pagerMounted = "1";
      const slug = currentSlug();
      const idx = SB.CHAPTERS.findIndex(c => c.slug === slug);
      if (idx < 0) return;
      const prev = SB.CHAPTERS[idx - 1];
      const next = SB.CHAPTERS[idx + 1];
      const nav = document.createElement("nav");
      nav.className = "sb-pager";
      nav.innerHTML = `
        ${prev ? `<a class="prev" href="${prev.slug}.html"><span class="dir">← PREVIOUS · CH.${prev.num}</span><span class="t">${prev.title}</span></a>` : `<a class="prev" href="../index.html"><span class="dir">← OVERVIEW</span><span class="t">Guidebook Home &amp; Commercial Summary</span></a>`}
        ${next ? `<a class="next" href="${next.slug}.html"><span class="dir">NEXT · CH.${next.num} →</span><span class="t">${next.title}</span></a>` : `<a class="next" href="../index.html"><span class="dir">BACK TO HOME →</span><span class="t">Overview &amp; Commercial Product Summary</span></a>`}
      `;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `Samsung Electronics · S.LSI Sensor Business Team — 200MP ISOCELL &amp; E2E AI Remosaic Project Guidebook · Yongjoon Song, Ph.D. · Build 2026-11-01 (<code>80b6792</code>)`;
      main.appendChild(foot);
    });
  }

  // ---------- Collapsible Details ----------
  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "Show Details";
      const tEl = box.querySelector(".detail-title");
      if (tEl) tEl.remove();
      const body = document.createElement("div");
      body.className = "detail-body";
      while (box.firstChild) body.appendChild(box.firstChild);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "detail-toggle";
      btn.textContent = title;
      btn.addEventListener("click", () => box.classList.toggle("open"));
      box.appendChild(btn);
      box.appendChild(body);
    });
  }

  // ---------- KaTeX Auto-render ----------
  function mountKaTeX() {
    const render = () => {
      if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "$", right: "$", display: false },
          ],
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option", "svg", "text", "g"],
          throwOnError: false,
        });
      }
    };
    if (window.renderMathInElement) render();
    else window.addEventListener("load", render);
  }

  // ---------- Full-Book Instant Search ----------
  function mountSearch() {
    const input = document.getElementById("book-search-input");
    const box = document.getElementById("book-search-results");
    if (!input || !box) return;
    const root = rootPrefix();

    function itemHref(it) {
      const base = root + "chapters/" + it.slug + ".html";
      return it.hash ? base + "#" + it.hash : base;
    }

    let activeIdx = 0;
    let currentHits = [];

    function render(q) {
      const query = q.trim().toLowerCase();
      if (!query) { box.hidden = true; box.innerHTML = ""; currentHits = []; return; }
      const tokens = query.split(/\s+/).filter(Boolean);
      const scored = [];
      for (const it of PREBUILT_SEARCH) {
        const titleL = (it.title || "").toLowerCase();
        const kwL = (it.keywords || "").toLowerCase();
        let score = 0;
        let ok = true;
        for (const tk of tokens) {
          if (titleL.includes(tk)) score += titleL.startsWith(tk) ? 12 : 7;
          else if (kwL.includes(tk)) score += 3;
          else { ok = false; break; }
        }
        if (ok && score > 0) scored.push({ it, score });
      }
      scored.sort((a, b) => b.score - a.score);
      currentHits = scored.slice(0, 10).map(s => s.it);
      activeIdx = 0;

      if (!currentHits.length) {
        box.innerHTML = `<div class="sr-empty">No results for "${q}"</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = currentHits.map((it, idx) => {
        const tc = it.type === "Concept" ? "gl" : "";
        return `<a href="${itemHref(it)}" class="${idx === 0 ? "on" : ""}" data-idx="${idx}">
          <div class="sr-head"><span class="sr-type ${tc}">${it.type}</span><span>${it.title}</span></div>
          <div class="sr-sub">CH.${it.num} ${it.chTitle}</div>
        </a>`;
      }).join("");
      box.hidden = false;
    }

    input.addEventListener("input", () => render(input.value));
    input.addEventListener("focus", () => { if (input.value.trim()) render(input.value); });
    input.addEventListener("keydown", e => {
      if (box.hidden || !currentHits.length) return;
      const links = box.querySelectorAll("a");
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % currentHits.length;
        links.forEach((a, i) => a.classList.toggle("on", i === activeIdx));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + currentHits.length) % currentHits.length;
        links.forEach((a, i) => a.classList.toggle("on", i === activeIdx));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (links[activeIdx]) links[activeIdx].click();
      } else if (e.key === "Escape") {
        box.hidden = true;
      }
    });
    document.addEventListener("click", e => {
      if (!e.target.closest("#book-search")) box.hidden = true;
    });
  }

  function boot() {
    mountTopbar();
    mountSearch();
    mountToc();
    mountDetails();
    mountPager();
    mountKaTeX();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
