/* ==========================================================================
   Samsung S.LSI — ISOCELL 200MP & E2E AI Remosaic Guidebook Common Runtime
   ========================================================================== */
(function () {
  "use strict";

  const CHAPTERS = [{"num": 1, "slug": "isocell_sensors", "title": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5)", "part": "PILLAR 1 · 200MP ISOCELL SENSOR DEVELOPMENT", "summary": "Core principle of Non-Bayer (4×4 / 2×2) to Bayer Remosaic, chronological development history across ISOCELL HP2 (0.6µm, QMSC), HP3/HP9 (0.56µm, World-1st DL Hexadeca Remosaic), and HP5 (0.5µm, World's Smallest 200MP), and commercialized flagship devices."}, {"num": 2, "slug": "e2e_remosaic", "title": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline", "part": "PILLAR 2 · E2E AI REMOSAIC TURN-KEY PLATFORM", "summary": "Distributing DL Remosaic and Camera ISP workloads across CPU/GPU/NPU/ISP mounted directly on the Camera ISP pipeline (~3× faster 200MP capture), Gen 1 → Gen 4 feature evolution history, SEC 2023 Silver Award, and commercial product table (30+ OEM models)."}];
  const SEARCH_INDEX = [{"type": "Section", "slug": "isocell_sensors", "num": 1, "chTitle": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5)", "title": "What Is Remosaic? (Core Principle &amp; Multi-Mode Readout)", "hash": "sec-remosaic-principle", "keywords": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5) What Is Remosaic? (Core Principle &amp; Multi-Mode Readout) sec-remosaic-principle"}, {"type": "Section", "slug": "isocell_sensors", "num": 1, "chTitle": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5)", "title": "Chronological Sensor Development History (2021 – Present)", "hash": "sec-sensor-history", "keywords": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5) Chronological Sensor Development History (2021 – Present) sec-sensor-history"}, {"type": "Section", "slug": "isocell_sensors", "num": 1, "chTitle": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5)", "title": "200MP ISOCELL Sensor Lineup &amp; Commercial Product Table", "hash": "sec-sensor-products", "keywords": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5) 200MP ISOCELL Sensor Lineup &amp; Commercial Product Table sec-sensor-products"}, {"type": "Section", "slug": "isocell_sensors", "num": 1, "chTitle": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5)", "title": "Chapter 01 Summary", "hash": "summary", "keywords": "200MP ISOCELL Sensor Development — Remosaic Principle & Sensor History (HP2 · HP3/HP9 · HP5) Chapter 01 Summary summary"}, {"type": "Section", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline", "title": "How Heterogeneous Parallelization Works on the Camera ISP Pipeline", "hash": "sec-isp-parallelization", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline How Heterogeneous Parallelization Works on the Camera ISP Pipeline sec-isp-parallelization"}, {"type": "Section", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline", "title": "Chronological Feature Evolution History (Gen 1 – Gen 4)", "hash": "sec-e2e-history", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline Chronological Feature Evolution History (Gen 1 – Gen 4) sec-e2e-history"}, {"type": "Section", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline", "title": "Commercial Products &amp; Deployment Lineup (Table &amp; List)", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline Commercial Products &amp; Deployment Lineup (Table &amp; List) sec-commercial-products"}, {"type": "Section", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline", "title": "Chapter 02 Summary", "hash": "summary", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Parallelization on the ISP Pipeline Chapter 02 Summary summary"}, {"type": "Concept", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Remosaic (Non-Bayer to Bayer Conversion) — Algorithmic conversion of a non-Bayer multi-cell color filter array (2×2 Tetra or 4×4 Hexadeca) into a standard 2×2 Bayer (RGGB) pattern required by the Camera ISP.", "hash": "sec-commercial-products", "keywords": "Remosaic (Non-Bayer to Bayer Conversion) Core Principle Remosaic|remosaic|remosaicing|QMSC|Hexadeca Remosaic Algorithmic conversion of a non-Bayer multi-cell color filter array (2×2 Tetra or 4×4 Hexadeca) into a standard 2×2 Bayer (RGGB) pattern required by the Camera ISP."}, {"type": "Concept", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Tetra²pixel (4×4 Hexadeca CFA) — Samsung's 16-cell (4×4) non-Bayer Color Filter Array grouping 16 same-color photodiodes per color block.", "hash": "sec-commercial-products", "keywords": "Tetra²pixel (4×4 Hexadeca CFA) ISOCELL CFA Tetra²pixel|Hexadeca|16-cell|4x4 Q-cell|Q-cell Samsung's 16-cell (4×4) non-Bayer Color Filter Array grouping 16 same-color photodiodes per color block."}, {"type": "Concept", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "E2E AI Remosaic — Samsung's End-to-End 200MP S/W ISP turn-key platform mounting distributed DL Remosaic and Camera ISP execution across CPU/GPU/NPU/ISP onto the ISP pipeline.", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic Turn-Key Platform E2E AI Remosaic|E2E AI remosaic|E2E Remosaic|cfa2yuv Samsung's End-to-End 200MP S/W ISP turn-key platform mounting distributed DL Remosaic and Camera ISP execution across CPU/GPU/NPU/ISP onto the ISP pipeline."}, {"type": "Concept", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "QMSC (AI 4×4 Q-Cell Remosaic) — AI-based 4×4 Q-cell Remosaic algorithm deployed in-sensor on ISOCELL HP2 (0.6µm, 200MP) for Galaxy S23 Ultra.", "hash": "sec-commercial-products", "keywords": "QMSC (AI 4×4 Q-Cell Remosaic) In-Sensor IP QMSC AI-based 4×4 Q-cell Remosaic algorithm deployed in-sensor on ISOCELL HP2 (0.6µm, 200MP) for Galaxy S23 Ultra."}, {"type": "Concept", "slug": "e2e_remosaic", "num": 2, "chTitle": "E2E AI Remosaic & Sensor Guidebook", "title": "Heterogeneous SoC Parallelization — Partitioning and scheduling Camera ISP and DL Remosaic stages concurrently across mobile CPU, GPU, NPU, and ISP engines.", "hash": "sec-commercial-products", "keywords": "Heterogeneous SoC Parallelization System Architecture Heterogeneous SoC|heterogeneous SoC|CPU/GPU/NPU/ISP Partitioning and scheduling Camera ISP and DL Remosaic stages concurrently across mobile CPU, GPU, NPU, and ISP engines."}];

  function inChaptersDir() {
    return /\/chapters\//.test(location.pathname);
  }
  function rootPrefix() {
    return inChaptersDir() ? "../" : "";
  }
  function chapterHref(slug) {
    return inChaptersDir() ? (slug + ".html") : ("chapters/" + slug + ".html");
  }
  function homeHref() {
    return rootPrefix() + "index.html";
  }
  function currentSlug() {
    const m = location.pathname.match(/\/chapters\/([^/.]+)\.html/);
    return m ? m[1] : "index";
  }

  const THEME_KEY = "sb-theme";
  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return "light";
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const btn = document.getElementById("sb-theme-btn");
    if (btn) {
      btn.innerHTML = (t === "dark" ? "☀️" : "🌙") + '<span class="lbl">' + (t === "dark" ? "Light" : "Dark") + "</span>";
    }
    window.dispatchEvent(new CustomEvent("sb:themechange", { detail: { theme: t } }));
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }
  applyTheme(getInitialTheme());

  function mountTopbar() {
    const bar = document.querySelector(".sb-topbar");
    if (!bar) return;
    const slug = currentSlug();
    const curCh = CHAPTERS.find(c => c.slug === slug);
    const curTheme = document.documentElement.getAttribute("data-theme") || "light";
    bar.innerHTML = `
      <button class="sb-iconbtn" id="sb-drawer-btn" aria-label="Open Navigation">☰<span class="lbl">Sections</span></button>
      <a class="sb-brand" href="${homeHref()}">
        <span class="dot"></span>
        <span>Samsung S.LSI · 200MP ISOCELL &amp; E2E AI Remosaic</span>
      </a>
      <span class="sb-ch-badge" id="sb-top-ch">${curCh ? ("Ch.0" + curCh.num + " · " + curCh.title.split("—")[0].trim()) : "Project Guidebook"}</span>
      <div class="sb-spacer"></div>
      <div class="book-search" id="book-search">
        <span class="s-ico">🔎</span>
        <input type="search" id="book-search-input" placeholder="Search sensors, E2E Gen 1–4, OEM models ( / )" autocomplete="off" />
        <span class="s-kbd">/</span>
        <div class="book-search-results" id="book-search-results" role="listbox"></div>
      </div>
      <a class="sb-iconbtn" href="https://yjqkrtk-ux.github.io" target="_blank" rel="noopener" title="Web Resume (CV)">📄<span class="lbl">Resume</span></a>
      <button class="sb-iconbtn" id="sb-theme-btn" aria-label="Toggle Theme">${curTheme === "dark" ? "☀️" : "🌙"}<span class="lbl">${curTheme === "dark" ? "Light" : "Dark"}</span></button>
    `;
    document.getElementById("sb-theme-btn").addEventListener("click", toggleTheme);
    document.getElementById("sb-drawer-btn").addEventListener("click", toggleDrawer);
    initBookSearch();
  }

  function mountDrawer() {
    const slug = currentSlug();
    const back = document.createElement("div");
    back.className = "sb-drawer-backdrop";
    back.id = "sb-drawer-backdrop";
    const drawer = document.createElement("aside");
    drawer.className = "sb-drawer";
    drawer.id = "sb-drawer";

    let html = `
      <div class="d-head">
        <span>SAMSUNG S.LSI PROJECT GUIDEBOOK</span>
        <button class="sb-iconbtn" id="sb-drawer-close" aria-label="Close">✕</button>
      </div>
      <a class="d-home ${slug === "index" ? "is-active" : ""}" href="${homeHref()}">🏠 Overview &amp; Commercial Summary</a>
    `;

    CHAPTERS.forEach(c => {
      const active = c.slug === slug ? "is-active" : "";
      html += `
        <div class="d-part">${c.part}</div>
        <a class="d-ch ${active}" href="${chapterHref(c.slug)}">
          <span class="c-num">0${c.num}</span>
          <span class="c-title">${c.title}</span>
        </a>
      `;
    });

    html += `
      <div class="d-part">EXTERNAL LINKS &amp; AUTHOR</div>
      <a class="d-ch" href="https://yjqkrtk-ux.github.io" target="_blank" rel="noopener">
        <span class="c-num">CV</span>
        <span class="c-title">Yongjoon Song — Web Resume ↗</span>
      </a>
      <a class="d-ch" href="https://www.linkedin.com/in/yongjoon-song-52b03a208/" target="_blank" rel="noopener">
        <span class="c-num">IN</span>
        <span class="c-title">LinkedIn Profile ↗</span>
      </a>
      <a class="d-ch" href="https://yjqkrtk-ux.github.io/gradworks/" target="_blank" rel="noopener">
        <span class="c-num">PHD</span>
        <span class="c-title">KAIST Ph.D. Research Guidebook ↗</span>
      </a>
    `;

    drawer.innerHTML = html;
    document.body.appendChild(back);
    document.body.appendChild(drawer);
    back.addEventListener("click", closeDrawer);
    drawer.querySelector("#sb-drawer-close").addEventListener("click", closeDrawer);
  }
  function toggleDrawer() {
    const b = document.getElementById("sb-drawer-backdrop");
    const d = document.getElementById("sb-drawer");
    if (!b || !d) return;
    const open = d.classList.toggle("is-open");
    b.classList.toggle("is-open", open);
  }
  function closeDrawer() {
    const b = document.getElementById("sb-drawer-backdrop");
    const d = document.getElementById("sb-drawer");
    if (b) b.classList.remove("is-open");
    if (d) d.classList.remove("is-open");
  }

  function mountChapterShell() {
    const main = document.querySelector("main.chapter");
    if (!main) return;
    const sections = Array.from(main.querySelectorAll(":scope > section[id]"));
    if (!sections.length) return;

    sections.forEach((sec, idx) => {
      const h2 = sec.querySelector(":scope > h2");
      if (h2 && !h2.querySelector(".sec-num")) {
        const numSpan = document.createElement("span");
        numSpan.className = "sec-num";
        numSpan.textContent = String(idx + 1).padStart(2, "0");
        h2.insertBefore(numSpan, h2.firstChild);
      }
    });

    if (!main.parentElement.classList.contains("chapter-shell")) {
      const shell = document.createElement("div");
      shell.className = "chapter-shell";
      main.parentElement.insertBefore(shell, main);
      shell.appendChild(main);

      const aside = document.createElement("aside");
      aside.className = "toc-rail";
      aside.setAttribute("aria-label", "On This Page");
      let tocHtml = `<div class="toc-title">On This Page</div><ul>`;
      sections.forEach((sec, idx) => {
        const h2 = sec.querySelector(":scope > h2");
        if (!h2) return;
        const label = h2.textContent.replace(/^\s*\d+\s*/, "").trim();
        tocHtml += `<li><a href="#${sec.id}" data-sec="${sec.id}">${String(idx + 1).padStart(2, "0")} · ${label}</a></li>`;
      });
      tocHtml += `</ul>`;
      aside.innerHTML = tocHtml;
      shell.appendChild(aside);

      const links = Array.from(aside.querySelectorAll("a[data-sec]"));
      const obs = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            links.forEach(a => a.classList.toggle("is-active", a.getAttribute("data-sec") === en.target.id));
          }
        });
      }, { rootMargin: "-15% 0px -72% 0px" });
      sections.forEach(s => obs.observe(s));
    }
  }

  function mountPagerAndFooter() {
    const main = document.querySelector("main.chapter");
    const slug = currentSlug();
    const idx = CHAPTERS.findIndex(c => c.slug === slug);
    if (main && idx !== -1 && !main.querySelector(".ch-pager")) {
      const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
      const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
      const nav = document.createElement("nav");
      nav.className = "ch-pager";
      nav.setAttribute("aria-label", "Section Navigation");
      nav.innerHTML = `
        ${prev ? `<a class="prev" href="${chapterHref(prev.slug)}"><span class="p-lbl">← PREVIOUS SECTION · Ch.0${prev.num}</span><span class="p-title">${prev.title}</span></a>`
                : `<a class="prev" href="${homeHref()}"><span class="p-lbl">← OVERVIEW</span><span class="p-title"> Samsung S.LSI Project Guidebook Home</span></a>`}
        ${next ? `<a class="next" href="${chapterHref(next.slug)}"><span class="p-lbl">NEXT SECTION · Ch.0${next.num} →</span><span class="p-title">${next.title}</span></a>`
                : `<a class="next" href="${homeHref()}"><span class="p-lbl">BACK TO OVERVIEW →</span><span class="p-title">Overview &amp; Commercial Product Summary</span></a>`}
      `;
      main.appendChild(nav);
    }
  }

  function initBookSearch() {
    const wrap = document.getElementById("book-search");
    const input = document.getElementById("book-search-input");
    const box = document.getElementById("book-search-results");
    if (!wrap || !input || !box) return;

    function render(q) {
      const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
      if (!tokens.length) {
        box.classList.remove("is-open");
        box.innerHTML = "";
        return;
      }
      const scored = [];
      SEARCH_INDEX.forEach(item => {
        const hay = (item.title + " " + item.chTitle + " " + (item.keywords || "")).toLowerCase();
        let score = 0;
        for (const tk of tokens) {
          if (!hay.includes(tk)) return;
          if (item.title.toLowerCase().includes(tk)) score += 3;
          else score += 1;
        }
        scored.push({ item, score });
      });
      scored.sort((a, b) => b.score - a.score);
      const top = scored.slice(0, 10);
      if (!top.length) {
        box.innerHTML = `<div class="book-search-empty">No results for "${q}"</div>`;
        box.classList.add("is-open");
        return;
      }
      box.innerHTML = top.map(({ item }) => {
        const href = item.slug === "index"
          ? (homeHref() + (item.hash ? "#" + item.hash : ""))
          : (chapterHref(item.slug) + (item.hash ? "#" + item.hash : ""));
        return `
          <a class="book-search-item" href="${href}">
            <div class="r-top">
              <span class="r-badge">${item.type}</span>
              <span class="r-ch">${item.num ? ("Ch.0" + item.num + " · ") : ""}${item.chTitle}</span>
            </div>
            <div class="r-title">${item.title}</div>
          </a>
        `;
      }).join("");
      box.classList.add("is-open");
    }

    input.addEventListener("input", () => render(input.value));
    input.addEventListener("focus", () => { if (input.value.trim()) render(input.value); });
    document.addEventListener("click", e => {
      if (!wrap.contains(e.target)) box.classList.remove("is-open");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test((document.activeElement || {}).tagName || "")) {
        e.preventDefault();
        input.focus();
      } else if (e.key === "Escape") {
        box.classList.remove("is-open");
        closeDrawer();
      }
    });
  }

  function initProgressBar() {
    const bar = document.querySelector(".sb-progress");
    if (!bar) return;
    function update() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0;
      bar.style.width = p.toFixed(1) + "%";
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountTopbar();
    mountDrawer();
    mountChapterShell();
    mountPagerAndFooter();
    initProgressBar();
  });
})();
