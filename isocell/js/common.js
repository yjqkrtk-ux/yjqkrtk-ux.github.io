/* ==========================================================================
   Samsung S.LSI ISOCELL 200MP & E2E AI Remosaic Guidebook — Exact SensorBook Runtime
   ========================================================================== */
(function () {
  "use strict";

  const SB = (window.SB = window.SB || {});
  const DOC_LANG = document.documentElement.lang === "en" ? "en" : "ko";

  SB.CHAPTERS = [
  {
    "slug": "isocell_sensors",
    "num": "01",
    "title": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5)",
    "desc": "Non-Bayer (4×4 Hexadeca / 2×2 Q-cell) → 표준 Bayer Remosaic 원리, ISOCELL HP2 (0.6µm, 인센서 QMSC), HP3/HP9 (0.56µm, 세계 최초 DL Hexadeca Remosaic), HP5 (0.5µm, 세계 최소형 200MP Technical Leader) 연대기별 개발 이력 및 상용 탑재 기기.",
    "tags": [
      "Remosaic 원리",
      "HP2 · QMSC",
      "HP3/HP9 · 세계 최초 DL 16-Cell",
      "HP5 · 0.5µm Tech Lead"
    ]
  },
  {
    "slug": "e2e_remosaic",
    "num": "02",
    "title": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화",
    "desc": "DL Remosaic과 Camera ISP 연산을 CPU/GPU/NPU/ISP에 분배해 Camera ISP 파이프라인 상단에 탑재하는 이기종 병렬화 원리(200MP 캡처 속도 최대 3배 가속, SEC 2023 Silver Award), Gen 1 → Gen 4 기능 고도화 연대기 및 30+ 글로벌 OEM 상용 단말 라인업.",
    "tags": [
      "ISP 파이프라인 병렬화",
      "CPU/GPU/NPU/ISP",
      "Gen 1–4 연대기",
      "30+ 상용 단말"
    ]
  }
];
  const PREBUILT_SEARCH = [{"type": "섹션", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5)", "title": "Remosaic이란 무엇인가? (CFA 구조와 멀티모드 동작 원리)", "hash": "sec-remosaic-principle", "keywords": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5) Remosaic이란 무엇인가? (CFA 구조와 멀티모드 동작 원리) sec-remosaic-principle"}, {"type": "섹션", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5)", "title": "연대기별 200MP ISOCELL 센서 개발 이력 (2021 – 현재)", "hash": "sec-sensor-history", "keywords": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5) 연대기별 200MP ISOCELL 센서 개발 이력 (2021 – 현재) sec-sensor-history"}, {"type": "섹션", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5)", "title": "200MP ISOCELL 센서 라인업 &amp; 상용 탑재 스마트폰 표", "hash": "sec-sensor-products", "keywords": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5) 200MP ISOCELL 센서 라인업 &amp; 상용 탑재 스마트폰 표 sec-sensor-products"}, {"type": "섹션", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5)", "title": "Chapter 01 핵심 요약", "hash": "summary", "keywords": "200MP ISOCELL 센서 개발 (HP2 · HP3/HP9 · HP5) Chapter 01 핵심 요약 summary"}, {"type": "섹션", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화", "title": "Camera ISP 파이프라인 상단에서의 이기종(CPU / GPU / NPU / ISP) 병렬화 원리", "hash": "sec-isp-parallelization", "keywords": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화 Camera ISP 파이프라인 상단에서의 이기종(CPU / GPU / NPU / ISP) 병렬화 원리 sec-isp-parallelization"}, {"type": "섹션", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화", "title": "세대별 E2E AI Remosaic 기능 추가 연대기 (Gen 1 – Gen 4)", "hash": "sec-e2e-history", "keywords": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화 세대별 E2E AI Remosaic 기능 추가 연대기 (Gen 1 – Gen 4) sec-e2e-history"}, {"type": "섹션", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화", "title": "상용화 스마트폰 제품 라인업 (종합 테이블 &amp; 리스트)", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화 상용화 스마트폰 제품 라인업 (종합 테이블 &amp; 리스트) sec-commercial-products"}, {"type": "섹션", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화", "title": "Chapter 02 핵심 요약", "hash": "summary", "keywords": "E2E AI Remosaic (Gen 1–4) — Camera ISP 파이프라인 이기종 병렬화 Chapter 02 핵심 요약 summary"}, {"type": "개념", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & 센서 가이드북", "title": "리모자이크 (Remosaic) (Remosaic)", "hash": "sec-commercial-products", "keywords": "리모자이크 (Remosaic) Non-Bayer to Bayer Conversion Remosaic Non-Bayer 멀티셀 컬러 필터 배열(2×2 Q-cell / 4×4 Hexadeca)을 표준 Camera ISP가 처리할 수 있는 2×2 Bayer (RGGB) 배열로 재배열·복원하여 200MP 초고해상도 촬영 및 2×/4× 무손실 인센서 줌을 가능하게 하는 핵심 알고리즘."}, {"type": "개념", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & 센서 가이드북", "title": "Tetra²pixel (4×4 Hexadeca CFA) (Tetra²pixel)", "hash": "sec-commercial-products", "keywords": "Tetra²pixel (4×4 Hexadeca CFA) 16-Cell Non-Bayer Color Filter Array Tetra²pixel 인접한 4×4 = 16개 서브마이크론 포토다이오드에 동일 컬러 필터(R, G, B)를 배치해 저조도 12.5MP(4×4 비닝), 중조도 50MP(2×2 비닝), 고조도 200MP 풀해상도 및 4× 인센서 줌(Remosaic)을 모두 지원하는 삼성전자의 16-cell 컬러 필터 구조."}, {"type": "개념", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & 센서 가이드북", "title": "QMSC (AI 4×4 Q-Cell Remosaic) (QMSC)", "hash": "sec-commercial-products", "keywords": "QMSC (AI 4×4 Q-Cell Remosaic) In-Sensor AI 4×4 Q-Cell Remosaic QMSC ISOCELL HP2 (0.6µm, 200MP) 센서 내부에 탑재된 AI 기반 4×4 Q-cell Remosaic 알고리즘으로, Galaxy S23 Ultra 메인 카메라의 200MP 촬영 및 12MP 4× 인센서 줌 모드를 구현한 핵심 기술."}, {"type": "개념", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & 센서 가이드북", "title": "E2E AI Remosaic (E2E AI RMSC)", "hash": "sec-commercial-products", "keywords": "E2E AI Remosaic End-to-End 200MP S/W ISP Turn-Key Platform E2E AI RMSC DL Remosaic과 Camera ISP 연산을 모바일 이기종 연산기(CPU/GPU/NPU/ISP)에 분배하고 Camera ISP 파이프라인 상단에 직접 탑재하여 200MP 캡처 지연시간(cfa2yuv)을 최대 3배 단축(3s → 1s @ SM8550)한 삼성전자의 턴키 S/W ISP 플랫폼."}, {"type": "개념", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic & 센서 가이드북", "title": "이기종 SoC 병렬화 (HetSoC)", "hash": "sec-commercial-products", "keywords": "이기종 SoC 병렬화 CPU / GPU / NPU / ISP Pipeline Distribution HetSoC Qualcomm Snapdragon 및 MediaTek Dimensity 모바일 AP의 CPU, GPU, NPU, H/W ISP에 DL Remosaic과 S/W ISP 서브태스크를 분할·스케줄링하여 Camera ISP 파이프라인 위에서 병렬 실행하는 아키텍처."}];

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

  function otherLangHref() {
    const fromChapter = location.pathname.includes("/chapters/") || (document.body && document.body.dataset.root === "../");
    const slug = currentSlug();
    if (DOC_LANG === "ko") {
      return (fromChapter ? "../en/chapters/" + slug + ".html" : "en/index.html") + location.hash;
    } else {
      return (fromChapter ? "../../chapters/" + slug + ".html" : "../index.html") + location.hash;
    }
  }

  try {
    const urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang === "ko" || urlLang === "en") localStorage.setItem("sb-lang", urlLang);
    const savedLang = localStorage.getItem("sb-lang");
    if ((savedLang === "en" && DOC_LANG === "ko") || (savedLang === "ko" && DOC_LANG === "en")) {
      if (document.body) {
        location.replace(otherLangHref());
      } else {
        document.addEventListener("DOMContentLoaded", () => location.replace(otherLangHref()), { once: true });
      }
    }
  } catch (e) {}

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
      <button class="sb-iconbtn" id="sb-open-drawer" aria-label="목차 열기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h12"/></svg>
        <span>${cur ? ("챕터 " + cur.num) : "목차"}</span>
      </button>
      <a class="sb-brand" href="${root}index.html">
        ${LOGO}
        <span>ISOCELL 200MP &amp; E2E AI REMOSAIC <small>삼성전자 S.LSI 프로젝트 가이드북</small></span>
      </a>
      <div class="sp"></div>
      <div class="book-search" id="book-search">
        <input type="search" class="book-search-input" id="book-search-input" placeholder="센서, E2E Gen 1–4, 상용 단말 검색…" autocomplete="off" aria-label="가이드북 전체 검색">
        <div class="book-search-results" id="book-search-results" hidden></div>
      </div>
      <a class="sb-iconbtn series-link" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener" title="Yongjoon Song — Executive Web Resume / CV">
        <span>📄 Resume</span>
      </a>
      <a class="sb-iconbtn series-link" href="https://www.linkedin.com/in/yongjoon-song-52b03a208/" target="_blank" rel="noopener" title="LinkedIn Profile">
        <span>💼 LinkedIn</span>
      </a>
      <button class="sb-iconbtn sb-lang-toggle" id="sb-lang-btn" aria-label="한국어 정본 · Click to switch to English (EN)" title="한국어 정본 · Click to switch to English (EN)">
        <span class="lg-on">KO</span><span class="lg-dim">/</span><span class="lg-dim">EN</span>
      </button>
      <button class="sb-iconbtn" id="sb-theme" aria-label="테마 전환" title="라이트 / 다크 테마 전환">
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
        <span>삼성전자 S.LSI 프로젝트 가이드북</span>
        <button class="sb-iconbtn" id="sb-close-drawer">닫기</button>
      </div>
      <nav class="sb-drawer-list">
        <a href="${root}index.html" class="${slug === "index" ? "active" : ""}">
          <span class="num">HOME</span>
          <span>홈 개요 &amp; 상용화 제품 종합 요약</span>
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

    const langBtn = document.getElementById("sb-lang-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        try {
          localStorage.setItem("sb-lang", DOC_LANG === "en" ? "ko" : "en");
          sessionStorage.setItem("sb-scroll-y", String(window.scrollY || 0));
        } catch (e) {}
        location.href = otherLangHref();
      });
    }

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
      const pageWrap = main.closest("[data-slug]");
      const slugPrefix = pageWrap ? pageWrap.dataset.slug + "-" : "";
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
        if (!sec.id) sec.id = "sec-" + slugPrefix + (idx + 1);
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
        if (pageWrap && pageWrap.hidden) return;
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
      const pageWrap = main.closest("[data-slug]");
      const slug = (pageWrap && pageWrap.dataset.slug) || currentSlug();
      const idx = SB.CHAPTERS.findIndex(c => c.slug === slug);
      if (idx < 0) return;
      const prev = SB.CHAPTERS[idx - 1];
      const next = SB.CHAPTERS[idx + 1];
      const nav = document.createElement("nav");
      nav.className = "sb-pager";
      nav.innerHTML = `
        ${prev ? `<a class="prev" href="${prev.slug}.html"><span class="dir">← 이전 챕터 · CH.${prev.num}</span><span class="t">${prev.title}</span></a>` : `<a class="prev" href="../index.html"><span class="dir">← HOME</span><span class="t">홈 개요 &amp; 상용화 제품 종합 요약</span></a>`}
        ${next ? `<a class="next" href="${next.slug}.html"><span class="dir">다음 챕터 · CH.${next.num} →</span><span class="t">${next.title}</span></a>` : `<a class="next" href="../index.html"><span class="dir">완독 🎉</span><span class="t">가이드북 홈으로 돌아가기</span></a>`}
      `;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `삼성전자 S.LSI 센서사업팀 — 200MP ISOCELL &amp; E2E AI Remosaic 프로젝트 가이드북 · 송용준 박사 (Yongjoon Song, Ph.D.) · Build 2026-11-02 (<code>c1f9ffd</code>)`;
      main.appendChild(foot);
    });
  }

  // ---------- Collapsible Details ----------
  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "상세 기술 설명 펼치기";
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
        box.innerHTML = `<div class="sr-empty">"${q}" 검색 결과가 없습니다.</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = currentHits.map((it, idx) => {
        const tc = (it.type === "Concept" || it.type === "개념") ? "gl" : "";
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

    try {
      const sy = sessionStorage.getItem("sb-scroll-y");
      if (sy !== null) {
        sessionStorage.removeItem("sb-scroll-y");
        window.scrollTo(0, parseInt(sy, 10) || 0);
      }
    } catch (e) {}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
