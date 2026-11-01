/* ==========================================================================
   ISOCELL 200MP & E2E AI Remosaic Guidebook — SensorBook Runtime (English)
   ========================================================================== */
(function () {
  "use strict";
  const SB = (window.SB = window.SB || {});
  SB.CHAPTERS = [{"slug": "overview", "num": "01", "title": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture", "desc": "Physical scaling from 0.6µm (HP2) and 0.56µm (HP3/HP9) down to 0.50µm (HP5), Airy diffraction limits, Tetra²pixel (4×4) adaptive binning, and 3D stacked CMOS pixel geometry.", "tags": ["Sensor Physics", "Tetra²pixel", "3D Sim", "Canvas Sim"]}, {"slug": "e2e_remosaic", "num": "02", "title": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform", "desc": "Overcoming the 200MP serial ISP capture bottleneck via joint DL Remosaic & SW ISP parallelization across CPU/GPU/NPU/ISP (Gen 1–4), deployed across 30+ global OEM flagships (SEC Annual Award 2023 Silver).", "tags": ["E2E AI Remosaic", "Gen 1–4", "Heterogeneous SoC", "Canvas Sim"]}, {"slug": "isocell_sensors", "num": "03", "title": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic", "desc": "World's smallest 0.5µm 200MP sensor (HP5), world's first DL Hexadeca 16-cell remosaic for 200MP main/telephoto (HP3/HP9), and in-sensor 4×4 Q-cell Remosaic (QMSC) for Galaxy S23 Ultra (HP2).", "tags": ["HP5 · 0.5µm", "HP3/HP9 · Hexadeca", "HP2 · QMSC", "Canvas Sim"]}, {"slug": "patents_bpc", "num": "04", "title": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction", "desc": "Architectural deep dive into US 12,574,659 B2 (intermediate-layer bad-pixel positional injection) and US 12,363,458 B2 (deep learning cluster bad-pixel restoration in non-Bayer CFAs).", "tags": ["US 12,574,659 B2", "US 12,363,458 B2", "Neural BPC", "Canvas Sim"]}, {"slug": "notes", "num": "05", "title": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "desc": "Verified OEM flagship deployment table (Samsung, vivo, HONOR, Xiaomi), public patent/press cross-references, IP compliance charter, and interactive 32-term Neural ISP glossary.", "tags": ["30+ OEM Devices", "IP Governance", "Interactive Glossary"]}];
  const PREBUILT_SEARCH = [{"type": "Section", "slug": "overview", "num": "01", "chTitle": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture", "title": "Optical Diffraction, Full-Well Capacity &amp; Shot-Noise Scaling", "hash": "sec-physics", "keywords": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture Optical Diffraction, Full-Well Capacity &amp; Shot-Noise Scaling sec-physics"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture", "title": "Tetra²pixel (4×4 Hexadeca CFA) Adaptive Multi-Mode Readout", "hash": "sec-tetra2", "keywords": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture Tetra²pixel (4×4 Hexadeca CFA) Adaptive Multi-Mode Readout sec-tetra2"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture", "title": "Interactive Simulator · Sub-Micron 200MP SNR &amp; Optical MTF Explorer", "hash": "sim-physics-sec", "keywords": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture Interactive Simulator · Sub-Micron 200MP SNR &amp; Optical MTF Explorer sim-physics-sec"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture", "title": "Key Takeaways · Chapter 01", "hash": "summary", "keywords": "Sub-Micron 200MP Sensor Physics & Non-Bayer CFA Architecture Key Takeaways · Chapter 01 summary"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform", "title": "Overcoming the 200MP Serial Capture Bottleneck (Gen 2 Parallel Architecture)", "hash": "sec-serial-vs-e2e", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform Overcoming the 200MP Serial Capture Bottleneck (Gen 2 Parallel Architecture) sec-serial-vs-e2e"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform", "title": "Four-Generation Architectural Evolution (Sep 2022 – Present)", "hash": "sec-4gen", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform Four-Generation Architectural Evolution (Sep 2022 – Present) sec-4gen"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform", "title": "Interactive Simulator · Serial ISP vs. E2E AI Remosaic (Gen 1–4) Scheduler", "hash": "sim-e2e-sec", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform Interactive Simulator · Serial ISP vs. E2E AI Remosaic (Gen 1–4) Scheduler sim-e2e-sec"}, {"type": "Section", "slug": "e2e_remosaic", "num": "02", "chTitle": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform", "title": "Key Takeaways · Chapter 02", "hash": "summary", "keywords": "E2E AI Remosaic (Gen 1–4) — Heterogeneous SoC Turn-Key Platform Key Takeaways · Chapter 02 summary"}, {"type": "Section", "slug": "isocell_sensors", "num": "03", "chTitle": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic", "title": "200MP ISOCELL Sensor Lineup &amp; Algorithmic Innovations", "hash": "sec-lineup", "keywords": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic 200MP ISOCELL Sensor Lineup &amp; Algorithmic Innovations sec-lineup"}, {"type": "Section", "slug": "isocell_sensors", "num": "03", "chTitle": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic", "title": "16-Channel Periodic Phase Decomposition &amp; Lossless In-Sensor Zoom", "hash": "sec-phase-unshuffle", "keywords": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic 16-Channel Periodic Phase Decomposition &amp; Lossless In-Sensor Zoom sec-phase-unshuffle"}, {"type": "Section", "slug": "isocell_sensors", "num": "03", "chTitle": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic", "title": "Interactive Simulator · Hexadeca (4×4) Remosaic &amp; In-Sensor Zoom Lab", "hash": "sim-remosaic-sec", "keywords": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic Interactive Simulator · Hexadeca (4×4) Remosaic &amp; In-Sensor Zoom Lab sim-remosaic-sec"}, {"type": "Section", "slug": "isocell_sensors", "num": "03", "chTitle": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic", "title": "Key Takeaways · Chapter 03", "hash": "summary", "keywords": "ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Neural Remosaic Key Takeaways · Chapter 03 summary"}, {"type": "Section", "slug": "patents_bpc", "num": "04", "chTitle": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction", "title": "US 12,574,659 B2 — Intermediate-Layer Bad-Pixel Positional Injection", "hash": "sec-us12574659", "keywords": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction US 12,574,659 B2 — Intermediate-Layer Bad-Pixel Positional Injection sec-us12574659"}, {"type": "Section", "slug": "patents_bpc", "num": "04", "chTitle": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction", "title": "US 12,363,458 B2 — Deep Learning Cluster Bad-Pixel Correction", "hash": "sec-us12363458", "keywords": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction US 12,363,458 B2 — Deep Learning Cluster Bad-Pixel Correction sec-us12363458"}, {"type": "Section", "slug": "patents_bpc", "num": "04", "chTitle": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction", "title": "Interactive Simulator · Neural Bad-Pixel Injection &amp; Cluster Recovery", "hash": "sim-bpc-sec", "keywords": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction Interactive Simulator · Neural Bad-Pixel Injection &amp; Cluster Recovery sim-bpc-sec"}, {"type": "Section", "slug": "patents_bpc", "num": "04", "chTitle": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction", "title": "Key Takeaways · Chapter 04", "hash": "summary", "keywords": "Granted US Patents — Neural Bad-Pixel & Cluster Defect Correction Key Takeaways · Chapter 04 summary"}, {"type": "Section", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Verified Commercial Flagship Deployment Matrix &amp; Public References", "hash": "sec-oem-matrix", "keywords": "Commercial Deployment Matrix, IP Governance & Technical Glossary Verified Commercial Flagship Deployment Matrix &amp; Public References sec-oem-matrix"}, {"type": "Section", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "IP Governance &amp; Public-Domain Compliance", "hash": "sec-ip-policy", "keywords": "Commercial Deployment Matrix, IP Governance & Technical Glossary IP Governance &amp; Public-Domain Compliance sec-ip-policy"}, {"type": "Section", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Interactive Neural ISP &amp; ISOCELL Technical Glossary (16 Terms)", "hash": "glossary-sec", "keywords": "Commercial Deployment Matrix, IP Governance & Technical Glossary Interactive Neural ISP &amp; ISOCELL Technical Glossary (16 Terms) glossary-sec"}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "E2E AI Remosaic (End-to-End AI Remosaic Turn-Key Platform)", "hash": "glossary-sec", "keywords": "E2E AI Remosaic End-to-End AI Remosaic Turn-Key Platform E2E RMSC Samsung S.LSI's commercial software ISP & neural remosaic platform (Gen 1–4) that jointly executes non-Bayer remosaicing and ISP stages across heterogeneous mobile SoC compute engines (CPU/GPU/NPU/ISP), deployed across 30+ OEM smartphones."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Hexadeca CFA (Hexadeca (4×4 = 16-Cell) Color Filter Array)", "hash": "glossary-sec", "keywords": "Hexadeca CFA Hexadeca (4×4 = 16-Cell) Color Filter Array 16-Cell CFA A non-Bayer color filter array grouping 16 adjacent photodiodes (4×4) under a single color filter (R, G, or B), enabling Tetra²pixel adaptive binning (12.5MP @ 4×4, 50MP @ 2×2, and 200MP @ 1×1)."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Tetra²pixel (Tetra-Squared Pixel Adaptive Binning Technology)", "hash": "glossary-sec", "keywords": "Tetra²pixel Tetra-Squared Pixel Adaptive Binning Technology Tetra²pixel Samsung ISOCELL technology that dynamically reconfigures 4×4 same-color sub-micron pixels according to ambient illumination—combining 16 pixels into a large virtual pixel (2.0µm–2.4µm) in low light or reading all 200M pixels in bright daylight."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "QMSC (AI-Based 4×4 Q-Cell Remosaic (In-Sensor))", "hash": "glossary-sec", "keywords": "QMSC AI-Based 4×4 Q-Cell Remosaic (In-Sensor) QMSC In-sensor AI-assisted 4×4 Q-cell remosaic architecture developed for ISOCELL HP2 (0.6µm, 200MP), powering full-resolution 200MP capture and lossless 4× in-sensor zoom on Galaxy S23 Ultra."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "ISOCELL HP5 (0.50µm 200MP CMOS Image Sensor (1/1.56\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP5 0.50µm 200MP CMOS Image Sensor (1/1.56\") HP5 World's smallest 200MP mobile image sensor featuring 0.50µm sub-micron pixels in a compact 1/1.56-inch optical format, paired with dedicated deep learning restoration algorithms."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "ISOCELL HP3 / HP9 (0.56µm 200MP CMOS Image Sensors (1/1.4\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP3 / HP9 0.56µm 200MP CMOS Image Sensors (1/1.4\") HP3 / HP9 200MP 0.56µm 1/1.4-inch sensors featuring the world's first DL-based Hexadeca (16-cell) remosaic S/W algorithm; deployed in flagship wide (HP3) and periscope telephoto (HP9, e.g., vivo X200 Pro ZEISS) cameras."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "ISOCELL HP2 (0.60µm 200MP CMOS Image Sensor (1/1.3\"))", "hash": "glossary-sec", "keywords": "ISOCELL HP2 0.60µm 200MP CMOS Image Sensor (1/1.3\") HP2 Flagship 200MP 0.60µm 1/1.3-inch sensor with Dual Vertical Transfer Gate (D-VTG) and QMSC in-sensor 4×4 remosaic, commercialized in Galaxy S23 Ultra."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Multi-Frame Remosaic (Gen 4 DL-Based Multi-Frame Joint Remosaic)", "hash": "glossary-sec", "keywords": "Multi-Frame Remosaic Gen 4 DL-Based Multi-Frame Joint Remosaic MF-RMSC (Gen 4) 4th-generation E2E AI Remosaic architecture that fuses multiple sub-pixel-shifted non-Bayer RAW frames inside an AP NPU network to jointly perform spatial demosaicing, super-resolution detail recovery, and temporal denoising (deployed on HONOR Magic 9 series)."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "In-Sensor Zoom (Lossless 2× / 4× In-Sensor Crop Zoom)", "hash": "glossary-sec", "keywords": "In-Sensor Zoom Lossless 2× / 4× In-Sensor Crop Zoom ISZ Cropping the central 50MP (2×) or 12.5MP (4×) region of a 200MP sensor and applying neural remosaicing to deliver optical-grade telephoto resolution without dedicated intermediate zoom lenses."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "US 12,574,659 B2 (Intermediate-Layer Bad-Pixel Positional Injection Patent)", "hash": "glossary-sec", "keywords": "US 12,574,659 B2 Intermediate-Layer Bad-Pixel Positional Injection Patent US12574659B2 Granted US Patent (Samsung Electronics, Mar 2026): encodes defective pixel coordinates and injects them into an intermediate feature layer of a neural ISP network for low-overhead real-time defect restoration."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "US 12,363,458 B2 (Deep Learning Cluster Bad-Pixel Correction Patent)", "hash": "glossary-sec", "keywords": "US 12,363,458 B2 Deep Learning Cluster Bad-Pixel Correction Patent US12363458B2 Granted US Patent (Samsung Electronics, Jul 2025): restores multi-pixel defective clusters in high-density image sensors using a learned context-aware neural correction pipeline."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "PixelUnshuffle (Sub-Phase Periodic Channel Decomposition)", "hash": "glossary-sec", "keywords": "PixelUnshuffle Sub-Phase Periodic Channel Decomposition PhaseSplit Reshaping a 4×4 Hexadeca CFA tensor of shape (1, H, W) into a 16-channel phase-aligned tensor (16, H/4, W/4) so convolutional kernels process uniform sub-grid phases at 1/16th spatial area."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Deep Trench Isolation (Front/Back-Side Deep Trench Isolation)", "hash": "glossary-sec", "keywords": "Deep Trench Isolation Front/Back-Side Deep Trench Isolation DTI Physical silicon oxide/high-k dielectric barriers etched between adjacent sub-micron photodiodes to suppress optical and electrical crosstalk in 0.5µm–0.6µm 200MP pixels."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Full-Well Capacity (Photodiode Maximum Electron Storage Capacity)", "hash": "glossary-sec", "keywords": "Full-Well Capacity Photodiode Maximum Electron Storage Capacity FWC The maximum number of photoelectrons a single pixel photodiode can accumulate before saturation, which governs peak shot-noise SNR (SNR_max = 10 log10(N_sat)) and dynamic range."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Airy Disk Diffraction Limit (Optical Diffraction Spot Diameter)", "hash": "glossary-sec", "keywords": "Airy Disk Diffraction Limit Optical Diffraction Spot Diameter Airy Limit Fundamental physical limit d = 2.44 · λ · (f/#) dictating the smallest point spread function (PSF) diameter achievable by an ideal lens—around 2.3µm at λ=550nm, f/1.7, spanning a 4×4 cluster of 0.5µm pixels."}, {"type": "Glossary", "slug": "notes", "num": "05", "chTitle": "Commercial Deployment Matrix, IP Governance & Technical Glossary", "title": "Heterogeneous SoC Scheduling (Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP))", "hash": "glossary-sec", "keywords": "Heterogeneous SoC Scheduling Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP) HetSoC Partitioning 200MP frame tiles across mobile NPU (INT8/FP16 neural remosaic), GPU/DSP (pre/post-filtering), and hardware ISP (color/tone mapping) to overlap compute and eliminate full-frame DRAM stalls."}];

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || localStorage.getItem("sb-theme") || "light";
  }
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("sb-theme", t); } catch (e) {}
    const btn = document.getElementById("sb-theme-btn");
    if (btn) btn.textContent = t === "dark" ? "☀ Light" : "☾ Dark";
    window.dispatchEvent(new CustomEvent("sb:theme"));
  }
  setTheme(getTheme());

  SB.palette = function () {
    const dark = getTheme() === "dark";
    return {
      dark,
      bg: dark ? "#0f1522" : "#ffffff",
      surface: dark ? "#1c2538" : "#eef1f7",
      border: dark ? "#263149" : "#d6dce8",
      text: dark ? "#e9eef7" : "#141a26",
      dim: dark ? "#9aa6bd" : "#566178",
      faint: dark ? "#667189" : "#8a93a8",
      grid: dark ? "rgba(255,255,255,0.07)" : "rgba(20,26,38,0.08)",
      axis: dark ? "rgba(255,255,255,0.42)" : "rgba(20,26,38,0.45)",
      accent: dark ? "#38b6f5" : "#0a84c6",
      accent2: dark ? "#b08cff" : "#7a4ce0",
      ok: dark ? "#34c770" : "#1f9d55",
      warn: dark ? "#f5a524" : "#d98a00",
      bad: dark ? "#f06262" : "#d64545",
      blue: dark ? "#4d8dff" : "#2f6fe0",
      green: dark ? "#3fb950" : "#2da44e",
      red: dark ? "#ff5c57" : "#e0443e",
    };
  };

  function rootPrefix() {
    const r = document.body?.dataset?.root;
    if (typeof r === "string") return r;
    return location.pathname.includes("/chapters/") ? "../" : "";
  }

  function currentSlug() {
    return document.body?.dataset?.chapter || "";
  }

  function mountTopbar() {
    if (document.querySelector(".sb-topbar")) return;
    const root = rootPrefix();
    const curSlug = currentSlug();
    const cur = SB.CHAPTERS.find(c => c.slug === curSlug);

    const header = document.createElement("header");
    header.className = "sb-topbar";
    header.innerHTML = `
      <a class="brand" href="${root}index.html">
        <span class="dot"></span>
        <span>ISOCELL 200MP &amp; E2E AI Remosaic</span>
        <span class="sub">Samsung S.LSI · Neural ISP Architecture Guidebook</span>
      </a>
      <button type="button" class="sb-top-btn" id="sb-open-drawer" aria-label="Open Chapter Menu">
        ☰ <span>${cur ? "Ch." + cur.num : "Chapters"}</span>
      </button>
      <div class="sb-search" id="book-search">
        <span class="sb-search-ico">⌕</span>
        <input type="search" id="book-search-input" placeholder="Search chapters, 200MP sensors, E2E Gen 1–4, US patents... ( / )" autocomplete="off">
        <kbd>/</kbd>
        <div class="sb-search-results" id="book-search-results" hidden></div>
      </div>
      <div class="spacer"></div>
      <a class="sb-top-btn" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener">📄 Resume</a>
      <button type="button" class="sb-top-btn" id="sb-theme-btn">${getTheme() === "dark" ? "☀ Light" : "☾ Dark"}</button>
    `;
    document.body.prepend(header);

    const backdrop = document.createElement("div");
    backdrop.className = "sb-drawer-backdrop";
    const drawer = document.createElement("aside");
    drawer.className = "sb-drawer";
    const listHtml = SB.CHAPTERS.map(c => {
      const active = c.slug === curSlug ? "active" : "";
      return `<li><a class="${active}" href="${root}chapters/${c.slug}.html"><span class="num">${c.num}</span><span><span class="t">${c.title}</span><span class="d">${c.desc}</span></span></a></li>`;
    }).join("");
    drawer.innerHTML = `
      <div class="sb-drawer-head">
        <span>GUIDEBOOK CHAPTERS (01–05)</span>
        <button type="button" class="sb-top-btn" id="sb-close-drawer">✕</button>
      </div>
      <ul class="sb-drawer-list">
        <li><a class="${!curSlug ? "active" : ""}" href="${root}index.html"><span class="num">00</span><span><span class="t">Home · Executive Architecture Map</span><span class="d">End-to-End 200MP Neural ISP roadmap, OEM matrix &amp; patent overview</span></span></a></li>
        ${listHtml}
      </ul>
    `;
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    const toggleDrawer = (open) => document.body.classList.toggle("drawer-open", open);
    document.getElementById("sb-open-drawer")?.addEventListener("click", () => toggleDrawer(true));
    document.getElementById("sb-close-drawer")?.addEventListener("click", () => toggleDrawer(false));
    backdrop.addEventListener("click", () => toggleDrawer(false));
    document.getElementById("sb-theme-btn")?.addEventListener("click", () => {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });

    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("book-search-input")?.focus();
      } else if (e.key === "Escape") {
        toggleDrawer(false);
      }
    });
  }

  function mountToc() {
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.closest(".sb-layout")) return;
      const secs = Array.from(main.querySelectorAll(":scope > section[id]"));
      if (!secs.length) return;
      const layout = document.createElement("div");
      layout.className = "sb-layout";
      main.parentNode.insertBefore(layout, main);
      layout.appendChild(main);

      const aside = document.createElement("aside");
      aside.className = "sb-toc";
      aside.innerHTML = `<h4>ON THIS PAGE</h4>` + secs.map((s, idx) => {
        const h2 = s.querySelector("h2");
        const label = h2 ? h2.textContent.replace(/^\s*\d+\.\d+\s*/, "") : s.id;
        return `<a href="#${s.id}" data-sec="${s.id}" class="${idx === 0 ? "active" : ""}">${label}</a>`;
      }).join("");
      layout.appendChild(aside);

      const links = Array.from(aside.querySelectorAll("a[data-sec]"));
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            links.forEach(a => a.classList.toggle("active", a.dataset.sec === en.target.id));
          }
        });
      }, { rootMargin: "-15% 0px -72% 0px" });
      secs.forEach(s => io.observe(s));
    });
  }

  function mountPager() {
    const root = rootPrefix();
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.querySelector(".sb-pager")) return;
      const slug = currentSlug();
      const idx = SB.CHAPTERS.findIndex(c => c.slug === slug);
      if (idx < 0) return;
      const prev = idx > 0 ? SB.CHAPTERS[idx - 1] : null;
      const next = idx < SB.CHAPTERS.length - 1 ? SB.CHAPTERS[idx + 1] : null;

      const nav = document.createElement("nav");
      nav.className = "sb-pager";
      const prevHtml = prev
        ? `<a class="prev" href="${root}chapters/${prev.slug}.html"><small>← Previous · Chapter ${prev.num}</small>${prev.title}</a>`
        : `<a class="prev" href="${root}index.html"><small>← Overview</small>Home · Executive Architecture Map</a>`;
      const nextHtml = next
        ? `<a class="next" href="${root}chapters/${next.slug}.html"><small>Next · Chapter ${next.num} →</small>${next.title}</a>`
        : `<a class="next" href="${root}index.html"><small>Completed →</small>Return to Architecture Home</a>`;
      nav.innerHTML = prevHtml + nextHtml;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `Samsung S.LSI · ISOCELL 200MP &amp; E2E AI Remosaic Architecture Guidebook · Yongjoon Song, Ph.D. · Build 2026-11-01 (<code>d8ae29c</code>)`;
      main.appendChild(foot);
    });
  }

  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "Mathematical Formulation & Architectural Notes";
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
    schedule();
    return { redraw: schedule, el: c, ctx };
  };

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
      const top = scored.slice(0, 10);
      if (!top.length) {
        box.innerHTML = `<div class="sb-sr-empty">No matching sections or glossary terms found.</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = top.map(({ it }, i) => `
        <a class="sb-sr-item ${i === 0 ? "on" : ""}" href="${itemHref(it)}">
          <div class="sb-sr-top">
            <span class="sb-sr-badge">${it.type}</span>
            <span class="sb-sr-ch">Ch.${it.num} · ${it.chTitle}</span>
          </div>
          <div class="sb-sr-title">${it.title}</div>
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
