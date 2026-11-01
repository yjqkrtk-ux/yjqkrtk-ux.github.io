/* ==========================================================================
   ISOCELL 200MP & E2E AI Remosaic Guidebook — SensorBook Runtime (English)
   ========================================================================== */
(function () {
  "use strict";
  const SB = (window.SB = window.SB || {});
  SB.CHAPTERS = [
  {
    "slug": "isocell_sensors",
    "num": "01",
    "title": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)",
    "desc": "Sub-micron pixel physics (0.60µm → 0.56µm → 0.50µm), Tetra²pixel (4×4 = 16-cell) adaptive binning, world's first DL Hexadeca Remosaic (HP3/HP9), in-sensor QMSC 4× zoom (HP2), and sub-wavelength Neural ISP restoration (HP5).",
    "tags": [
      "ISOCELL HP5 · 0.50µm",
      "HP3/HP9 · DL Hexadeca",
      "HP2 · QMSC",
      "2 Interactive Sims"
    ]
  },
  {
    "slug": "e2e_remosaic",
    "num": "02",
    "title": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform",
    "desc": "Overcoming the 200MP serial capture bottleneck via tile-streamed CPU/GPU/NPU/ISP parallelization (up to 3× faster, SEC 2023 Silver Award), Gen 1–4 architectural evolution to DL Multi-Frame Remosaic, and 30+ commercial OEM flagship deployments.",
    "tags": [
      "E2E AI Remosaic Gen 1–4",
      "HetSoC Parallel ISP",
      "30+ OEM Flagships",
      "Interactive Sim"
    ]
  }
];
  const PREBUILT_SEARCH = [{"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "Samsung 200MP ISOCELL Portfolio &amp; Core Algorithmic Contributions", "hash": "sec-lineup-overview", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) Samsung 200MP ISOCELL Portfolio &amp; Core Algorithmic Contributions sec-lineup-overview"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "Sub-Micron Pixel Physics: Airy Diffraction, Full-Well Capacity &amp; Shot-Noise SNR", "hash": "sec-physics", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) Sub-Micron Pixel Physics: Airy Diffraction, Full-Well Capacity &amp; Shot-Noise SNR sec-physics"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "Interactive Simulator 1-1 · Sub-Micron 200MP SNR, Airy Spot &amp; MTF Explorer", "hash": "sec-sim-physics", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) Interactive Simulator 1-1 · Sub-Micron 200MP SNR, Airy Spot &amp; MTF Explorer sec-sim-physics"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "World-First DL Hexadeca (16-Cell) Remosaic (HP3/HP9) &amp; In-Sensor QMSC (HP2)", "hash": "sim-ch01-physics", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) World-First DL Hexadeca (16-Cell) Remosaic (HP3/HP9) &amp; In-Sensor QMSC (HP2) sim-ch01-physics"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "Interactive Simulator 1-2 · Hexadeca (4×4) DL Remosaic / QMSC &amp; In-Sensor Zoom Lab", "hash": "sec-sim-remosaic", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) Interactive Simulator 1-2 · Hexadeca (4×4) DL Remosaic / QMSC &amp; In-Sensor Zoom Lab sec-sim-remosaic"}, {"type": "Section", "slug": "isocell_sensors", "num": "01", "chTitle": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm)", "title": "Key Takeaways · Chapter 01 (200MP ISOCELL Sensor Development)", "hash": "sim-ch01-remosaic", "keywords": "200MP ISOCELL Sensor Development — HP5 (0.50µm) · HP3/HP9 (0.56µm) · HP2 (0.60µm) Key Takeaways · Chapter 01 (200MP ISOCELL Sensor Development) sim-ch01-remosaic"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Overcoming the 200MP Serial Capture Bottleneck (HetSoC Parallel Architecture)", "hash": "sec-serial-vs-e2e", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Overcoming the 200MP Serial Capture Bottleneck (HetSoC Parallel Architecture) sec-serial-vs-e2e"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Four-Generation Architectural Evolution (Sep 2022 – Present)", "hash": "sec-4gen", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Four-Generation Architectural Evolution (Sep 2022 – Present) sec-4gen"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Interactive Simulator 2-1 · Serial ISP vs. E2E AI Remosaic (Gen 1–4) Scheduler", "hash": "sim-e2e-sec", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Interactive Simulator 2-1 · Serial ISP vs. E2E AI Remosaic (Gen 1–4) Scheduler sim-e2e-sec"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Verified Commercial OEM Flagship Deployment Matrix (30+ Models)", "hash": "sim-ch02-e2e", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Verified Commercial OEM Flagship Deployment Matrix (30+ Models) sim-ch02-e2e"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Interactive ISOCELL 200MP &amp; E2E AI Remosaic Technical Glossary (14 Terms)", "hash": "glossary-sec", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Interactive ISOCELL 200MP &amp; E2E AI Remosaic Technical Glossary (14 Terms) glossary-sec"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Key Takeaways · Chapter 02 (E2E AI Remosaic Platform)", "hash": "summary", "keywords": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform Key Takeaways · Chapter 02 (E2E AI Remosaic Platform) summary"}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "ISOCELL HP5 (0.50µm 200MP CMOS Image Sensor (1/1.56\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP5 0.50µm 200MP CMOS Image Sensor (1/1.56\") HP5 · 0.50µm World's smallest 200MP mobile image sensor featuring 0.50µm sub-micron pixels in a compact 1/1.56-inch optical format; relies on Neural ISP S/W algorithms to invert sub-wavelength optical diffraction and crosstalk."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "ISOCELL HP3 / HP9 (0.56µm 200MP CMOS Image Sensors (1/1.4\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP3 / HP9 0.56µm 200MP CMOS Image Sensors (1/1.4\") HP3 / HP9 · 0.56µm 200MP 0.56µm 1/1.4-inch sensors featuring the world's first DL-based Hexadeca (16-cell) remosaic S/W algorithm; deployed in flagship wide (HP3) and 200MP periscope telephoto (HP9, vivo X200 Pro ZEISS APO) cameras."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "ISOCELL HP2 (0.60µm 200MP CMOS Image Sensor (1/1.3\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP2 0.60µm 200MP CMOS Image Sensor (1/1.3\") HP2 · 0.60µm Flagship 200MP 0.60µm 1/1.3-inch sensor with Dual Vertical Transfer Gate (D-VTG) and QMSC in-sensor AI 4×4 remosaic, commercialized in Samsung Galaxy S23 Ultra."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "E2E AI Remosaic (End-to-End AI Remosaic Turn-Key S/W ISP Platform)", "hash": "glossary-sec", "keywords": "E2E AI Remosaic End-to-End AI Remosaic Turn-Key S/W ISP Platform E2E RMSC (Gen 1–4) Samsung S.LSI's commercial software ISP & neural remosaic platform (Gen 1–4) that jointly executes non-Bayer remosaicing and ISP stages across heterogeneous mobile SoC compute engines (CPU/GPU/NPU/ISP), deployed across 30+ OEM flagship smartphones."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Hexadeca CFA (Hexadeca (4×4 = 16-Cell) Color Filter Array)", "hash": "glossary-sec", "keywords": "Hexadeca CFA Hexadeca (4×4 = 16-Cell) Color Filter Array 16-Cell CFA A non-Bayer color filter array grouping 16 adjacent photodiodes (4×4) under a single color filter (R, G, or B), enabling Tetra²pixel adaptive binning (12.5MP @ 4×4, 50MP @ 2×2, and 200MP @ 1×1)."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Tetra²pixel (Tetra-Squared Pixel Adaptive Binning Technology)", "hash": "glossary-sec", "keywords": "Tetra²pixel Tetra-Squared Pixel Adaptive Binning Technology Tetra²pixel Samsung ISOCELL technology that dynamically reconfigures 4×4 same-color sub-micron pixels according to ambient illumination—combining 16 pixels into a large virtual pixel (2.0µm–2.4µm) in low light or reading all 200M pixels in bright daylight."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "QMSC (AI-Based 4×4 Q-Cell Remosaic (In-Sensor))", "hash": "glossary-sec", "keywords": "QMSC AI-Based 4×4 Q-Cell Remosaic (In-Sensor) QMSC In-sensor AI-assisted 4×4 Q-cell remosaic architecture developed for ISOCELL HP2 (0.6µm, 200MP), powering full-resolution 200MP capture and lossless 12MP 4× in-sensor zoom on Galaxy S23 Ultra."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Multi-Frame Remosaic (Gen 4 DL-Based Multi-Frame Joint Remosaic)", "hash": "glossary-sec", "keywords": "Multi-Frame Remosaic Gen 4 DL-Based Multi-Frame Joint Remosaic MF-RMSC (Gen 4) 4th-generation E2E AI Remosaic architecture that fuses multiple sub-pixel-shifted non-Bayer RAW frames inside a flagship AP NPU network to jointly perform spatial demosaicing, super-resolution detail recovery, and temporal denoising (deployed on HONOR Magic 9 series)."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "In-Sensor Zoom (Lossless 2× / 4× In-Sensor Crop Zoom)", "hash": "glossary-sec", "keywords": "In-Sensor Zoom Lossless 2× / 4× In-Sensor Crop Zoom ISZ / Zoom Anyplace Cropping the central 50MP (2×) or 12.5MP (4×) region of a 200MP sensor and applying neural remosaicing to deliver optical-grade telephoto resolution without dedicated intermediate zoom lenses."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "PixelUnshuffle (16-Channel Periodic Sub-Phase Decomposition)", "hash": "glossary-sec", "keywords": "PixelUnshuffle 16-Channel Periodic Sub-Phase Decomposition PhaseSplit Reshaping a 4×4 Hexadeca CFA tensor of shape (1, H, W) into a 16-channel phase-homogeneous tensor (16, H/4, W/4) so NPU convolutional kernels process uniform sub-grid phases at 1/16th spatial area."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Deep Trench Isolation (Front/Back-Side Deep Trench Isolation)", "hash": "glossary-sec", "keywords": "Deep Trench Isolation Front/Back-Side Deep Trench Isolation FDTI / BDTI Physical silicon oxide/high-k dielectric barriers etched between adjacent sub-micron photodiodes to suppress optical and electrical crosstalk in 0.50µm–0.60µm 200MP pixels."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Dual Vertical Transfer Gate (Dual Vertical Transfer Gate Photodiode Architecture)", "hash": "glossary-sec", "keywords": "Dual Vertical Transfer Gate Dual Vertical Transfer Gate Photodiode Architecture D-VTG Samsung ISOCELL pixel structure adding a second vertical transfer gate to boost Full-Well Capacity (FWC) by up to 33% in sub-micron 0.60µm (HP2) and 0.50µm (HP5) pixels."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Airy Disk Diffraction Limit (Optical Diffraction Spot Diameter)", "hash": "glossary-sec", "keywords": "Airy Disk Diffraction Limit Optical Diffraction Spot Diameter Airy Limit Fundamental physical limit d = 2.44 · λ · N dictating the smallest point spread function (PSF) diameter achievable by an ideal lens—around 2.28µm at λ=550nm, f/1.7, spanning a 4×4 cluster of 0.50µm–0.56µm pixels."}, {"type": "Glossary", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Turn-Key 200MP S/W ISP Platform", "title": "Heterogeneous SoC Scheduling (Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP))", "hash": "glossary-sec", "keywords": "Heterogeneous SoC Scheduling Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP) HetSoC Partitioning 200MP frame tiles across mobile NPU (INT8/FP16 neural remosaic), GPU/DSP (pre/post-filtering), and hardware/software ISP (color/tone mapping) to overlap compute and cut 200MP capture latency from ~3.0s to ~1.0s."}];

  const LOGO = `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="11" height="11" rx="3" fill="#0a84c6"/>
    <rect x="15" y="2" width="11" height="11" rx="3" fill="#2da44e"/>
    <rect x="2" y="15" width="11" height="11" rx="3" fill="#7a4ce0" opacity=".88"/>
    <rect x="15" y="15" width="11" height="11" rx="3" fill="#e0443e"/>
  </svg>`;

  function rootPrefix() {
    const b = document.body;
    if (b && typeof b.dataset.root === "string") return b.dataset.root;
    return location.pathname.includes("/chapters/") ? "../" : "";
  }
  function currentSlug() {
    const b = document.body;
    if (b && b.dataset.chapter) return b.dataset.chapter;
    const m = location.pathname.match(/\/chapters\/([^\/]+)\.html/);
    return m ? m[1] : "index";
  }

  // ---------- Theme ----------
  const THEME_KEY = "isocell-guidebook-theme";
  function getSavedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
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
  SB.cssVar = function (name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };
  SB.palette = function () {
    const dark = SB.isDark();
    return {
      dark,
      bg: SB.cssVar("--canvas-bg") || (dark ? "#0f1522" : "#ffffff"),
      text: SB.cssVar("--text") || (dark ? "#e6ebf5" : "#141a26"),
      dim: SB.cssVar("--text-dim") || (dark ? "#9aa6bf" : "#566178"),
      faint: SB.cssVar("--text-faint") || (dark ? "#69748c" : "#8a93a8"),
      border: SB.cssVar("--border") || (dark ? "#273248" : "#d6dce8"),
      surface: SB.cssVar("--surface") || (dark ? "#171f30" : "#eef1f7"),
      accent: SB.cssVar("--accent") || (dark ? "#38b6f5" : "#0a84c6"),
      accent2: SB.cssVar("--accent-2") || (dark ? "#a585ff" : "#7a4ce0"),
      ok: SB.cssVar("--ok") || "#1f9d55",
      warn: SB.cssVar("--warn") || "#d98a00",
      bad: SB.cssVar("--bad") || "#d64545",
      red: SB.cssVar("--red") || "#e0443e",
      green: SB.cssVar("--green") || "#2da44e",
      blue: SB.cssVar("--blue") || "#2f6fe0",
      grid: SB.cssVar("--grid") || "rgba(128,128,128,0.12)",
      axis: SB.cssVar("--axis") || "rgba(128,128,128,0.5)",
    };
  };

  // ---------- Mount Topbar + Drawer ----------
  function mountTopbar() {
    if (document.querySelector(".sb-topbar")) return;
    const root = rootPrefix();
    const slug = currentSlug();
    const cur = SB.CHAPTERS.find(c => c.slug === slug);

    const bar = document.createElement("header");
    bar.className = "sb-topbar";
    bar.innerHTML = `
      <button class="sb-iconbtn" id="sb-open-drawer" aria-label="Open Chapters">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h12"/></svg>
        <span>${cur ? "Ch." + cur.num : "Chapters"}</span>
      </button>
      <a class="sb-brand" href="${root}index.html">
        ${LOGO}
        <span>ISOCELL 200MP &amp; E2E AI REMOSAIC <small>Samsung S.LSI · Neural ISP Architecture Guidebook</small></span>
      </a>
      <div class="sp"></div>
      <div class="book-search" id="book-search">
        <input type="search" class="book-search-input" id="book-search-input" placeholder="Search 200MP sensors, E2E Gen 1–4, terms… ( / )" autocomplete="off" aria-label="Search guidebook">
        <div class="book-search-results" id="book-search-results" hidden></div>
      </div>
      <a class="sb-iconbtn series-link" href="${root}chapters/isocell_sensors.html" title="Part 1: 200MP ISOCELL Sensor Development (HP5 · HP3/HP9 · HP2)">
        <span>01 · 200MP ISOCELL</span>
      </a>
      <a class="sb-iconbtn series-link" href="${root}chapters/e2e_remosaic.html" title="Part 2: E2E AI Remosaic Platform (Gen 1–4)">
        <span>02 · E2E AI Remosaic</span>
      </a>
      <a class="sb-iconbtn series-link" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener" title="Yongjoon Song — Interactive Web Resume / CV">
        <span>📄 Resume</span>
      </a>
      <button class="sb-iconbtn" id="sb-theme" aria-label="Toggle theme" title="Switch Light / Dark Theme">
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
        <span>ISOCELL &amp; E2E AI Remosaic Guidebook</span>
        <button class="sb-iconbtn" id="sb-close-drawer">Close</button>
      </div>
      <nav class="sb-drawer-list">
        <a href="${root}index.html" class="${slug === "index" ? "active" : ""}">
          <span class="num">HOME</span>
          <span>Executive Architecture Overview<div class="sub">2 Core Pillars: 200MP ISOCELL (HP5/HP9/HP3/HP2) &amp; E2E AI Remosaic (Gen 1–4)</div></span>
        </a>
        ${SB.CHAPTERS.map(c => `
          <a href="${root}chapters/${c.slug}.html" class="${c.slug === slug ? "active" : ""}">
            <span class="num">CH.${c.num}</span>
            <span>${c.title}<div class="sub">${c.desc}</div></span>
          </a>
        `).join("")}
        <div style="margin:14px 10px 6px;padding-top:12px;border-top:1px solid var(--border);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.04em;">PORTFOLIO &amp; PROFILES ↗</div>
        <a href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener">
          <span class="num">CV</span>
          <span>Interactive Web Resume / CV<div class="sub">Yongjoon Song, Ph.D. — Staff Engineer @ Samsung S.LSI</div></span>
        </a>
        <a href="https://www.linkedin.com/in/yongjoon-song-52b03a208/" target="_blank" rel="noopener">
          <span class="num">IN</span>
          <span>LinkedIn Profile<div class="sub">Commercial Project Records &amp; Career Timeline</div></span>
        </a>
        <a href="https://scholar.google.com/citations?user=H3AQNpAAAAAJ" target="_blank" rel="noopener">
          <span class="num">GS</span>
          <span>Google Scholar<div class="sub">Published IEEE Papers &amp; Granted US/KR Patents</div></span>
        </a>
        <a href="https://yjqkrtk-ux.github.io/aicamera/">
          <span class="num">AI</span>
          <span>AICAMERA — Edge Generative Camera<div class="sub">Latent Signal Processing (LSP) &amp; Split-Encoder Guidebook</div></span>
        </a>
        <a href="https://yjqkrtk-ux.github.io/gradworks/">
          <span class="num">GW</span>
          <span>KAIST Ph.D. Grad Works<div class="sub">DQNAlign · REminerII · 3D Resonant WPT &amp; OLEV</div></span>
        </a>
      </nav>
    `;
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    const close = () => document.body.classList.remove("drawer-open");
    document.getElementById("sb-open-drawer")?.addEventListener("click", () => document.body.classList.add("drawer-open"));
    document.getElementById("sb-close-drawer")?.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") close();
      else if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("book-search-input")?.focus();
      }
    });

    document.getElementById("sb-theme")?.addEventListener("click", () => {
      const next = SB.isDark() ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyTheme(next);
    });

    const prog = document.getElementById("sb-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - h.clientHeight);
      if (prog) prog.style.width = Math.min(100, (h.scrollTop / max) * 100).toFixed(1) + "%";
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
        ${prev ? `<a class="prev" href="${prev.slug}.html"><span class="dir">← PREVIOUS · CHAPTER ${prev.num}</span><span class="t">${prev.title}</span></a>` : `<a class="prev" href="../index.html"><span class="dir">← OVERVIEW</span><span class="t">Home · Executive Architecture Overview</span></a>`}
        ${next ? `<a class="next" href="${next.slug}.html"><span class="dir">NEXT · CHAPTER ${next.num} →</span><span class="t">${next.title}</span></a>` : `<a class="next" href="../index.html"><span class="dir">COMPLETED 🎉</span><span class="t">Return to Architecture Home</span></a>`}
      `;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `Samsung S.LSI · ISOCELL 200MP &amp; E2E AI Remosaic Architecture Guidebook · Yongjoon Song, Ph.D. · Build 2026-11-01 (<code>d8ae29c</code>)`;
      main.appendChild(foot);
    });
  }

  // ---------- Collapsible Details ----------
  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "Mathematical Derivation & Architectural Notes";
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

  // ---------- Canvas HiDPI + Theme Redraw Helper ----------
  SB.canvas = function (canvasOrId, aspectOrHeight, drawFn) {
    const c = typeof canvasOrId === "string" ? document.getElementById(canvasOrId.replace(/^#/, "")) : canvasOrId;
    if (!c) return { redraw() {} };
    const ctx = c.getContext("2d");
    let raf = 0;
    function resizeAndDraw() {
      const rect = c.parentElement.getBoundingClientRect();
      const w = Math.max(260, Math.floor(rect.width));
      const h = aspectOrHeight <= 2 ? Math.round(w * aspectOrHeight) : aspectOrHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.style.height = h + "px";
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      ctx.save();
      ctx.scale(dpr, dpr);
      const P = SB.palette();
      ctx.fillStyle = P.bg;
      ctx.fillRect(0, 0, w, h);
      drawFn(ctx, w, h, P);
      ctx.restore();
    }
    function schedule() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(resizeAndDraw);
    }
    window.addEventListener("resize", schedule);
    window.addEventListener("sb:theme", schedule);
    requestAnimationFrame(resizeAndDraw);
    return { redraw: schedule, el: c, ctx };
  };

  // ---------- Search ----------
  function mountSearch() {
    const input = document.getElementById("book-search-input");
    const box = document.getElementById("book-search-results");
    if (!input || !box) return;
    const root = rootPrefix();
    function itemHref(it) {
      const base = root + "chapters/" + it.slug + ".html";
      return it.hash ? base + "#" + it.hash : base;
    }
    function render(q) {
      const query = q.trim().toLowerCase();
      if (!query) { box.hidden = true; box.innerHTML = ""; return; }
      const tokens = query.split(/\s+/).filter(Boolean);
      const scored = [];
      for (const it of PREBUILT_SEARCH) {
        const titleL = (it.title || "").toLowerCase();
        const kwL = (it.keywords || "").toLowerCase();
        let score = 0, ok = true;
        for (const tk of tokens) {
          if (titleL.includes(tk)) score += titleL.startsWith(tk) ? 12 : 7;
          else if (kwL.includes(tk)) score += 3;
          else { ok = false; break; }
        }
        if (ok && score > 0) scored.push({ it, score });
      }
      scored.sort((a, b) => b.score - a.score);
      const top = scored.slice(0, 8);
      if (!top.length) {
        box.innerHTML = `<div class="sr-empty">No matching sections or terms found.</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = top.map(({ it }, i) => `
        <a class="${i === 0 ? "on" : ""}" href="${itemHref(it)}">
          <div class="sr-head">
            <span class="sr-type ${it.type === "Glossary" ? "gl" : ""}">${it.type}</span>
            <span>Ch.${it.num} · ${it.title}</span>
          </div>
          <div class="sr-sub">${it.chTitle}</div>
        </a>
      `).join("");
      box.hidden = false;
    }
    input.addEventListener("input", () => render(input.value));
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
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
