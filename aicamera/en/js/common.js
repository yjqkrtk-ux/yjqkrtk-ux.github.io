/* ==========================================================================
   AICAMERA Guidebook Common Runtime — Global Object SB (SensorBook compatible)
   - Auto-mounts topbar, chapter drawer, live search, right-hand TOC, pager & theme
   - Simulator helpers: canvas, chart, range, seg, stat, loop, three.js scene
   ========================================================================== */
(function () {
  "use strict";

  const DOC_LANG = document.documentElement.lang === "en" ? "en" : "ko";
  function otherLangHref() {
    const fromChapter = document.body
      ? (document.body.getAttribute("data-root") || "") === "../"
      : /\/chapters\/[a-z0-9_-]+\.html$/i.test(location.pathname);
    const p = location.pathname;
    const m = p.match(/\/chapters\/([a-z0-9_-]+)\.html$/i);
    const slug = m ? m[1] : "index";
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
      location.replace(otherLangHref());
    }
  } catch (e) {}

  const CHAPTERS = [
  {
    "slug": "overview",
    "num": "01",
    "title": "Heterogeneous Edge Camera & System Bottlenecks",
    "desc": "MIPI CSI-2 serialization bottleneck, IMX500 (.rpk) & Hailo-8 (.hef) dual-NPU cross-compilation pipeline, 4-Tier virtual environment isolation, and Agent/MCP workflow.",
    "tags": [
      "System",
      "SW-Stack",
      "sim"
    ]
  },
  {
    "slug": "lsp",
    "num": "02",
    "title": "Latent Signal Processing (LSP)",
    "desc": "Asymmetric sensor-host split encoder (Stage A/B), Power-of-2 QAT, Universal Latent Hub, 30 FPS live preview, and Zero-Shutter-Lag generative capture.",
    "tags": [
      "Split-Inference",
      "HW-Measured",
      "sim"
    ]
  },
  {
    "slug": "isp",
    "num": "03",
    "title": "Software ISP & Halide/NPU Optimization",
    "desc": "10-stage C99 reference ISP (DPC, BLC, LSC, ANF, AWB, Demosaic, CCM, Gamma, CSC, EEH), 3A loop, Verified Lifting, 4-Tier Halide/GPU, and Dual-NPU edge AI.",
    "tags": [
      "Image-Processing",
      "Compiler",
      "sim"
    ]
  },
  {
    "slug": "ucfa",
    "num": "04",
    "title": "Universal CFA — Phase-Aware In-Sensor Compression",
    "desc": "Stacked CMOS sensor cross-section, Bayer (2×2), Tetracell (4×4), and Hexadecacell (8×8) clustered CFAs, PixelUnshuffle phase decomposition, and frozen host translator.",
    "tags": [
      "Sensor-CFA",
      "3d",
      "sim"
    ]
  },
  {
    "slug": "comp_lsp",
    "num": "05",
    "title": "White-Box Computational LSP — Analytical 16-Ch Latent ISP",
    "desc": "1st-order Jet decomposition of 16-channel VAE latents, 1:4:1 Simpson quadrature, 3×3 secant Jacobians, 144-D Kronecker outer product, and 4-Step residual refiner.",
    "tags": [
      "White-Box-ISP",
      "16Ch-Jet",
      "sim"
    ]
  },
  {
    "slug": "notes",
    "num": "06",
    "title": "Glossary & Code-to-Docs Audit Notes",
    "desc": "23 code-to-documentation consistency audit notes cross-checked against C/Python sources and benchmark JSONs, Single-Source-of-Truth build policy, and 48-term interactive glossary.",
    "tags": [
      "Audit",
      "Glossary"
    ]
  }
];
  const PREBUILT_SEARCH = [{"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Why Split Sensor–Host Inference: MIPI CSI-2 Bandwidth & Serialization Bottlenecks", "hash": "s-paradigm", "keywords": "Heterogeneous Edge Camera & System Bottlenecks Why Split Sensor–Host Inference: MIPI CSI-2 Bandwidth & Serialization Bottlenecks s-paradigm"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Architectural Comparison of the 3 Research Tracks (LSP · Software ISP · Universal CFA)", "hash": "s-projects", "keywords": "Heterogeneous Edge Camera & System Bottlenecks Architectural Comparison of the 3 Research Tracks (LSP · Software ISP · Universal CFA) s-projects"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Heterogeneous Hardware Topology & Memory Hierarchy", "hash": "s-hardware", "keywords": "Heterogeneous Edge Camera & System Bottlenecks Heterogeneous Hardware Topology & Memory Hierarchy s-hardware"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "SW Stack & Dual-NPU Cross-Compilation Pipeline (.rpk / .hef)", "hash": "s-sw-stack", "keywords": "Heterogeneous Edge Camera & System Bottlenecks SW Stack & Dual-NPU Cross-Compilation Pipeline (.rpk / .hef) s-sw-stack"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Agent Workflow · MCP Server · Remote Edge Orchestration", "hash": "s-agent-flow", "keywords": "Heterogeneous Edge Camera & System Bottlenecks Agent Workflow · MCP Server · Remote Edge Orchestration s-agent-flow"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Key Takeaways", "hash": "summary", "keywords": "Heterogeneous Edge Camera & System Bottlenecks Key Takeaways summary"}, {"type": "Simulator", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "MIPI Bus Bottleneck Simulator across Resolution · Format · Split Factor (s_A)", "hash": "sim-bus", "keywords": "Simulator simulator MIPI Bus Bottleneck Simulator across Resolution · Format · Split Factor (s_A) sim-bus"}, {"type": "Simulator", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "IMX500 In-Sensor NPU SRAM Budget (< 2 MB) & Stage A Complexity Calculator", "hash": "sim-sram", "keywords": "Simulator simulator IMX500 In-Sensor NPU SRAM Budget (< 2 MB) & Stage A Complexity Calculator sim-sram"}, {"type": "Simulator", "slug": "overview", "num": "01", "chTitle": "Heterogeneous Edge Camera & System Bottlenecks", "title": "Dual-NPU Cross-Compile & Agent Benchmark Drift Gate", "hash": "sim-devops", "keywords": "Simulator simulator Dual-NPU Cross-Compile & Agent Benchmark Drift Gate sim-devops"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.1 Why Split the Encoder — Bus Bottleneck & Regime Shift", "hash": "lsp-problem", "keywords": "Latent Signal Processing (LSP) 2.1 Why Split the Encoder — Bus Bottleneck & Regime Shift lsp-problem"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.2 Asymmetric Sensor–Host Split Architecture & Dataflow", "hash": "lsp-arch", "keywords": "Latent Signal Processing (LSP) 2.2 Asymmetric Sensor–Host Split Architecture & Dataflow lsp-arch"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.3 Stage A Compressor & Stage B Translator — Mathematical & QAT Specification", "hash": "lsp-model", "keywords": "Latent Signal Processing (LSP) 2.3 Stage A Compressor & Stage B Translator — Mathematical & QAT Specification lsp-model"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.4 Physical Hardware Benchmark Analysis (Raspberry Pi 5 + IMX500 + Hailo-8)", "hash": "lsp-bench", "keywords": "Latent Signal Processing (LSP) 2.4 Physical Hardware Benchmark Analysis (Raspberry Pi 5 + IMX500 + Hailo-8) lsp-bench"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.5 Image Quality Evaluation (DIV2K Validation 100 Images) & Universal Latent Hub", "hash": "lsp-quality", "keywords": "Latent Signal Processing (LSP) 2.5 Image Quality Evaluation (DIV2K Validation 100 Images) & Universal Latent Hub lsp-quality"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.6 Zero-Shutter-Lag (ZSL) Generative Capture & ControlNet Conditional Diffusion", "hash": "lsp-capture", "keywords": "Latent Signal Processing (LSP) 2.6 Zero-Shutter-Lag (ZSL) Generative Capture & ControlNet Conditional Diffusion lsp-capture"}, {"type": "Section", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.7 End-to-End Code Map", "hash": "lsp-code", "keywords": "Latent Signal Processing (LSP) 2.7 End-to-End Code Map lsp-code"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 01 · Partition Point (\\(s_A\\)) Pipeline Timing & Bandwidth–Quality Pareto Explorer", "hash": "sim-lsp-pipe", "keywords": "Simulator simulator SIMULATOR 01 · Partition Point (\\(s_A\\)) Pipeline Timing & Bandwidth–Quality Pareto Explorer sim-lsp-pipe"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "Hailo-8 Compatible Power-of-2 Quantization-Aware Training (QAT)", "hash": "lsp-pipe-ctrl", "keywords": "Simulator simulator Hailo-8 Compatible Power-of-2 Quantization-Aware Training (QAT) lsp-pipe-ctrl"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 02 · Hailo Power-of-2 Fake-Quant (STE) Distribution & Clipping Simulator", "hash": "sim-lsp-qat", "keywords": "Simulator simulator SIMULATOR 02 · Hailo Power-of-2 Fake-Quant (STE) Distribution & Clipping Simulator sim-lsp-qat"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "VISUAL INSPECTOR · Per-Scene 64 KB Latent Reconstruction (TAESD_ft vs SD VAE) & Edge SR Comparator", "hash": "qat-ctrl", "keywords": "Simulator simulator VISUAL INSPECTOR · Per-Scene 64 KB Latent Reconstruction (TAESD_ft vs SD VAE) & Edge SR Comparator qat-ctrl"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "ZSL 6-Stage Execution Sequence (generative_capture_service.py)", "hash": "lsp-gal-ctrl", "keywords": "Simulator simulator ZSL 6-Stage Execution Sequence (generative_capture_service.py) lsp-gal-ctrl"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 03 · Zero-Shutter-Lag 4-Panel Capture Pipeline & Canny ControlNet Simulator", "hash": "sim-lsp-zsl", "keywords": "Simulator simulator SIMULATOR 03 · Zero-Shutter-Lag 4-Panel Capture Pipeline & Canny ControlNet Simulator sim-lsp-zsl"}, {"type": "Simulator", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "Key Takeaways · Chapter 02", "hash": "zsl-ctrl", "keywords": "Simulator simulator Key Takeaways · Chapter 02 zsl-ctrl"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.1 Why Linear Correction Comes First — 10-Stage Pipeline Domain Structure", "hash": "isp-pipe", "keywords": "Software ISP & Halide/NPU Optimization 3.1 Why Linear Correction Comes First — 10-Stage Pipeline Domain Structure isp-pipe"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.2 Interactive 10-Stage OpenISP Pipeline Simulator", "hash": "isp-sim-sec", "keywords": "Software ISP & Halide/NPU Optimization 3.2 Interactive 10-Stage OpenISP Pipeline Simulator isp-sim-sec"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.3 Stage-by-Stage Mathematical Formulas & C99 Implementation Details", "hash": "isp-stages", "keywords": "Software ISP & Halide/NPU Optimization 3.3 Stage-by-Stage Mathematical Formulas & C99 Implementation Details isp-stages"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.4 3A Closed-Loop Auto Control — AWB · CCT-Interpolated CCM · AE", "hash": "isp-3a", "keywords": "Software ISP & Halide/NPU Optimization 3.4 3A Closed-Loop Auto Control — AWB · CCT-Interpolated CCM · AE isp-3a"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.5 4-Tier Execution Engines, Halide Kernel Fusion & DMA-BUF Zero-Copy", "hash": "isp-tiers", "keywords": "Software ISP & Halide/NPU Optimization 3.5 4-Tier Execution Engines, Halide Kernel Fusion & DMA-BUF Zero-Copy isp-tiers"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.6 Verified Lifting — Automated C99-to-Halide Translation & Numerical Verification", "hash": "isp-vl", "keywords": "Software ISP & Halide/NPU Optimization 3.6 Verified Lifting — Automated C99-to-Halide Translation & Numerical Verification isp-vl"}, {"type": "Section", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "3.7 Dual-NPU Edge AI Layer (Detection · Segmentation · ZAP Auto-Framing)", "hash": "isp-ai", "keywords": "Software ISP & Halide/NPU Optimization 3.7 Dual-NPU Edge AI Layer (Detection · Segmentation · ZAP Auto-Framing) isp-ai"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "SIMULATOR 01 · 10-Stage OpenISP Per-Stage Toggle · Parameter Tuning · Loupe & Histogram", "hash": "sim-isp", "keywords": "Simulator simulator SIMULATOR 01 · 10-Stage OpenISP Per-Stage Toggle · Parameter Tuning · Loupe & Histogram sim-isp"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "Defective Pixel Correction (DPC)", "hash": "isp-sim-ctrl", "keywords": "Simulator simulator Defective Pixel Correction (DPC) isp-sim-ctrl"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "SIMULATOR 02 · 3A Closed-Loop Convergence Simulator (Illuminant CCT · Luma Step Change & Adaptive EMA)", "hash": "sim-3a", "keywords": "Simulator simulator SIMULATOR 02 · 3A Closed-Loop Convergence Simulator (Illuminant CCT · Luma Step Change & Adaptive EMA) sim-3a"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "SIMULATOR 03 · Halide Tiled Kernel Fusion (Loop Fusion) & DRAM Traffic Simulator", "hash": "a3-ctrl", "keywords": "Simulator simulator SIMULATOR 03 · Halide Tiled Kernel Fusion (Loop Fusion) & DRAM Traffic Simulator a3-ctrl"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "4-Stage Automated Lifting Pipeline", "hash": "hal-ctrl", "keywords": "Simulator simulator 4-Stage Automated Lifting Pipeline hal-ctrl"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "SIMULATOR 04 · ZAP (Zoom & Auto-Pan) Viewport EMA Tracking Simulator", "hash": "sim-zap", "keywords": "Simulator simulator SIMULATOR 04 · ZAP (Zoom & Auto-Pan) Viewport EMA Tracking Simulator sim-zap"}, {"type": "Simulator", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU Optimization", "title": "Key Takeaways · Chapter 03", "hash": "zap-ctrl", "keywords": "Simulator simulator Key Takeaways · Chapter 03 zap-ctrl"}, {"type": "Section", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "4.1 Stacked Sensor Architecture & Clustered CFAs (Bayer · Tetracell · Hexadecacell)", "hash": "ucfa-intro", "keywords": "Universal CFA — Phase-Aware In-Sensor Compression 4.1 Stacked Sensor Architecture & Clustered CFAs (Bayer · Tetracell · Hexadecacell) ucfa-intro"}, {"type": "Section", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "4.2 Interactive CFA Lattice & PixelUnshuffle Phase Decomposition Simulator", "hash": "ucfa-sim-cfa", "keywords": "Universal CFA — Phase-Aware In-Sensor Compression 4.2 Interactive CFA Lattice & PixelUnshuffle Phase Decomposition Simulator ucfa-sim-cfa"}, {"type": "Section", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "4.3 Unified 16-Channel Host Translator (\\(\\mathcal{T}_B: 16\\to 16\\)) & Sensor-Specific Phase Compressors (\\(\\mathcal{E}_A^{\\mathrm{CFA}}\\))", "hash": "ucfa-arch", "keywords": "Universal CFA — Phase-Aware In-Sensor Compression 4.3 Unified 16-Channel Host Translator (\\(\\mathcal{T}_B: 16\\to 16\\)) & Sensor-Specific Phase Compressors (\\(\\mathcal{E}_A^{\\mathrm{CFA}}\\)) ucfa-arch"}, {"type": "Section", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "4.4 The No-Raw-Retention Constraint & One-Pass Latent Reconstruction", "hash": "ucfa-diffusion", "keywords": "Universal CFA — Phase-Aware In-Sensor Compression 4.4 The No-Raw-Retention Constraint & One-Pass Latent Reconstruction ucfa-diffusion"}, {"type": "Section", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "4.5 Simulation Benchmark Results & Visual Reconstruction Comparison", "hash": "ucfa-results", "keywords": "Universal CFA — Phase-Aware In-Sensor Compression 4.5 Simulation Benchmark Results & Visual Reconstruction Comparison ucfa-results"}, {"type": "Simulator", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "3D EXPLORER · Stacked CMOS Sensor Pixel Stack & Bayer · Tetracell · Hexadecacell Exploded View", "hash": "sim-ucfa-3d", "keywords": "Simulator simulator 3D EXPLORER · Stacked CMOS Sensor Pixel Stack & Bayer · Tetracell · Hexadecacell Exploded View sim-ucfa-3d"}, {"type": "Simulator", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "The Double Burden of Conventional Pipelines: Remosaic + Demosaic", "hash": "ucfa-3d-ctrl", "keywords": "Simulator simulator The Double Burden of Conventional Pipelines: Remosaic + Demosaic ucfa-3d-ctrl"}, {"type": "Simulator", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "SIMULATOR 01 · Bayer (2×2) · Tetracell (4×4) · Hexadecacell (8×8) Lattice & PixelUnshuffle Phase Decomposer", "hash": "sim-ucfa-phase", "keywords": "Simulator simulator SIMULATOR 01 · Bayer (2×2) · Tetracell (4×4) · Hexadecacell (8×8) Lattice & PixelUnshuffle Phase Decomposer sim-ucfa-phase"}, {"type": "Simulator", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "SIMULATOR 02 · Per-CFA Pattern & Pipeline Quality (PSNR / SSIM / LPIPS) · Bandwidth Explorer", "hash": "ucfa-phase-ctrl", "keywords": "Simulator simulator SIMULATOR 02 · Per-CFA Pattern & Pipeline Quality (PSNR / SSIM / LPIPS) · Bandwidth Explorer ucfa-phase-ctrl"}, {"type": "Simulator", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — Phase-Aware In-Sensor Compression", "title": "Key Takeaways · Chapter 04", "hash": "ucfa-bench-ctrl", "keywords": "Simulator simulator Key Takeaways · Chapter 04 ucfa-bench-ctrl"}, {"type": "Section", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "5.1 Why Execute the ISP in Latent Space? — Emergent Order in High-Dimensional Chaos", "hash": "clsp-intuition", "keywords": "White-Box Computational LSP — Analytical 16-Ch Latent ISP 5.1 Why Execute the ISP in Latent Space? — Emergent Order in High-Dimensional Chaos clsp-intuition"}, {"type": "Section", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "5.2 Core Mathematical Principles: 1:4:1 Quadrature · 3×3 Secant Jacobian · 144-D Kronecker Product", "hash": "clsp-math", "keywords": "White-Box Computational LSP — Analytical 16-Ch Latent ISP 5.2 Core Mathematical Principles: 1:4:1 Quadrature · 3×3 Secant Jacobian · 144-D Kronecker Product clsp-math"}, {"type": "Section", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "5.3 End-to-End Architecture & Algorithm 1 Execution Chain", "hash": "clsp-arch", "keywords": "White-Box Computational LSP — Analytical 16-Ch Latent ISP 5.3 End-to-End Architecture & Algorithm 1 Execution Chain clsp-arch"}, {"type": "Section", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "5.4 Block-by-Block Latent Evolution Across 3 Hardware Cameras", "hash": "clsp-flow", "keywords": "White-Box Computational LSP — Analytical 16-Ch Latent ISP 5.4 Block-by-Block Latent Evolution Across 3 Hardware Cameras clsp-flow"}, {"type": "Section", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "5.5 Patch-Level Verification, 10-Camera Benchmark & Interactive Simulator", "hash": "clsp-verify", "keywords": "White-Box Computational LSP — Analytical 16-Ch Latent ISP 5.5 Patch-Level Verification, 10-Camera Benchmark & Interactive Simulator clsp-verify"}, {"type": "Simulator", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "SIMULATOR · Live 16×16×16 Latent Tensor Jacobian Transform & Decoder (Option C + TAEF1 ONNX)", "hash": "sim-clsp-jet", "keywords": "Simulator simulator SIMULATOR · Live 16×16×16 Latent Tensor Jacobian Transform & Decoder (Option C + TAEF1 ONNX) sim-clsp-jet"}, {"type": "Simulator", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — Analytical 16-Ch Latent ISP", "title": "Key Takeaways · Chapter 05", "hash": "clsp-sim-ctrl", "keywords": "Simulator simulator Key Takeaways · Chapter 05 clsp-sim-ctrl"}, {"type": "Section", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "6.1 Code ↔ Documentation Consistency Audit Log (23 Items)", "hash": "notes-audit", "keywords": "Glossary & Code-to-Docs Audit Notes 6.1 Code ↔ Documentation Consistency Audit Log (23 Items) notes-audit"}, {"type": "Section", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "6.2 Single-Source-of-Truth Build Policy & Automated Verification", "hash": "notes-policy", "keywords": "Glossary & Code-to-Docs Audit Notes 6.2 Single-Source-of-Truth Build Policy & Automated Verification notes-policy"}, {"type": "Section", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "6.3 AICAMERA Core Technical Glossary (Interactive Dictionary)", "hash": "glossary-sec", "keywords": "Glossary & Code-to-Docs Audit Notes 6.3 AICAMERA Core Technical Glossary (Interactive Dictionary) glossary-sec"}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Latent Signal Processing (LSP)", "hash": "glossary-sec", "keywords": "Latent Signal Processing Split Sensor-Host Latent Architecture LSP An edge camera architecture that asymmetrically splits the encoder across the in-sensor NPU (Stage A) and host NPU (Stage B) instead of transmitting uncompressed pixels (RAW/RGB), cutting MIPI bus payload by up to 48× and mapping directly into the standard diffusion latent space (ẑ)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Stage A Compressor (Stage A)", "hash": "glossary-sec", "keywords": "Stage A Compressor In-Sensor Strided CNN Encoder Stage A An ultra-compact strided convolutional neural network running as .rpk firmware on the Sony IMX500 in-sensor NPU (5,924 parameters and 0.122 GMACs for SA8). Compresses a 512×512×3 input into a 64 KB metadata tensor r."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Stage B Latent Translator (Stage B)", "hash": "glossary-sec", "keywords": "Stage B Latent Translator Host NPU ResBlock Translator Stage B A ResBlock-based translation network running on the host Hailo-8 NPU (.hef; 595,524 parameters, 2.43 GMACs, 0.97 ms for SA8). Maps the compressed sensor tensor r into a standard 64×64×4 SD VAE latent tensor ẑ."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Universal Latent Hub (Latent Hub)", "hash": "glossary-sec", "keywords": "Universal Latent Hub Cross-Decoder Shared Latent Manifold Latent Hub By aligning Stage B output with the public Stable Diffusion VAE latent manifold (scale 0.18215), both the lightweight edge preview decoder (TAESD_ft) and workstation generative diffusion models (U-Net / SD VAE) consume the exact same latent tensor without retraining."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Zero-Shutter-Lag Generative Capture (ZSL)", "hash": "glossary-sec", "keywords": "Zero-Shutter-Lag Generative Capture Latent-Resident Instant Capture ZSL A capture mechanism that directly reuses the latent tensor ẑ and preview Canny edges already resident in host memory during live viewfinder streaming to synthesize generative images with zero sensor re-exposure, zero RAW retransmission, and zero edge encoder re-execution."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "MIPI CSI-2 (CSI-2)", "hash": "glossary-sec", "keywords": "MIPI CSI-2 Camera Serial Interface 2 CSI-2 The high-speed differential serial interface connecting the camera sensor to the application processor (SoC). During high-resolution uncompressed frame streaming, DMA serialization and memory contention make it the primary bottleneck of edge pipelines."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Sony IMX500 (IMX500)", "hash": "glossary-sec", "keywords": "Sony IMX500 Sony IMX500 Intelligent Vision Sensor IMX500 An intelligent vision sensor stacking an on-chip ISP, dedicated NPU, and SRAM (<2 MB budget) beneath a 12.3 MP pixel die. Executes quantized .rpk models directly inside the sensor and emits output tensors over MIPI metadata."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Hailo-8 (Hailo-8)", "hash": "glossary-sec", "keywords": "Hailo-8 Hailo-8 Edge AI Accelerator Hailo-8 A 26 TOPS dataflow edge NPU attached to the Raspberry Pi 5 PCIe interface. Executes Stage B (0.97 ms), TAESD_ft (16.44 ms), Bilateral Grid, and portrait segmentation models compiled into .hef binaries."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "TAESD (TAESD_ft)", "hash": "glossary-sec", "keywords": "TAESD Tiny AutoEncoder for Stable Diffusion TAESD_ft A lightweight real-time decoder for Stable Diffusion latent tensors. Fine-tuned on the Stage B output distribution and compiled to a Hailo-8 .hef binary running in 16.44 ms (saturating the 30 FPS camera ceiling)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "ControlNet (ControlNet)", "hash": "glossary-sec", "keywords": "ControlNet Spatial Conditioning Network for Diffusion ControlNet An auxiliary neural network that injects spatial structural conditions (such as Canny edge maps) into a pretrained diffusion model. In ZSL capture, Canny(70, 160) edges extracted from the live preview preserve scene geometry."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Straight-Through Estimator (STE)", "hash": "glossary-sec", "keywords": "Straight-Through Estimator Gradient Approximation for Quantization STE A quantization-aware training (QAT) technique that approximates the backward gradient of the non-differentiable rounding operation as an identity function (∂x_q/∂x ≈ 1), enabling end-to-end weight optimization."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Defective Pixel Correction (DPC)", "hash": "glossary-sec", "keywords": "Defective Pixel Correction OpenISP Stage 1 Hot/Dead Pixel Filter DPC OpenISP Stage 1. Replaces hot or dead pixels that deviate beyond threshold T from the min/max range of their 8 same-color 3×3 neighbors (±2 px stride) with the average of the two median values."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Black Level Compensation (BLC)", "hash": "glossary-sec", "keywords": "Black Level Compensation OpenISP Stage 2 Pedestal Subtraction BLC OpenISP Stage 2. Subtracts the sensor ADC pedestal (default 64 DN in 10-bit) added to prevent dark-current negative noise clipping and normalizes pixel values to the linear [0, 1] floating-point range."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Lens Shading Correction (LSC)", "hash": "glossary-sec", "keywords": "Lens Shading Correction OpenISP Stage 3 Radial Vignetting Gain LSC OpenISP Stage 3. Compensates for natural cos⁴θ optical vignetting and microlens CRA falloff as a function of squared radius (r²) from the optical center using the radial polynomial gain 1 + a₁r² + a₂r⁴."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Anti-Noise Filter (ANF)", "hash": "glossary-sec", "keywords": "Anti-Noise Filter OpenISP Stage 4 Bayer Bilateral Filter ANF OpenISP Stage 4. An edge-preserving bilateral filter in the Bayer domain that weights 3×3 same-color neighbors (±2 px) by both spatial distance (σ_s) and intensity difference (σ_r)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Auto White Balance (AWB)", "hash": "glossary-sec", "keywords": "Auto White Balance OpenISP Stage 5 & 3A Chromatic Adaptation AWB OpenISP Stage 5 and 3A loop. Multiplies R, G, and B channels by diagonal gains (g_R, g_G, g_B) to remove illuminant color casts so neutral achromatic surfaces satisfy R = G = B."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Demosaicing (Demosaic)", "hash": "glossary-sec", "keywords": "Demosaicing OpenISP Stage 6 Bayer-to-RGB Interpolation Demosaic OpenISP Stage 6. Reconstructs full 3-channel (R, G, B) values at every pixel by interpolating neighboring samples from a single-channel Bayer mosaic (RGGB)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Color Correction Matrix (CCM)", "hash": "glossary-sec", "keywords": "Color Correction Matrix OpenISP Stage 7 Linear Spectral Transform CCM OpenISP Stage 7. A 3×3 linear transformation matrix multiplied with white-balanced RGB vectors to compensate for sensor spectral sensitivity differences and crosstalk relative to standard sRGB."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Gamma Correction (Gamma)", "hash": "glossary-sec", "keywords": "Gamma Correction OpenISP Stage 8 Non-Linear Tone Mapping Gamma OpenISP Stage 8. Applies a 1024-entry power-law lookup table (x^(1/γ), default γ=2.2) to linear RGB signals to allocate perceptual quantization levels for dark tones."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Color Space Conversion (CSC)", "hash": "glossary-sec", "keywords": "Color Space Conversion OpenISP Stage 9 RGB-to-YUV420 Transform CSC OpenISP Stage 9. Separates gamma-encoded RGB into luma (Y) and chroma (Cb, Cr) planes with 2×2 average chroma subsampling to produce BT.601 studio-range planar YUV420 uint8 output."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Edge Enhancement (EEH)", "hash": "glossary-sec", "keywords": "Edge Enhancement OpenISP Stage 10 Luma Unsharp Mask EEH OpenISP Stage 10. Extracts high-frequency detail on the Y (luma) plane by subtracting a 3×3 box average, applies coring/clipping, and adds it back scaled by fixed-point gain k."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "3A Control Loop (3A)", "hash": "glossary-sec", "keywords": "3A Control Loop Auto Exposure / Auto White Balance / Auto Focus 3A Closed-loop feedback controller that updates exposure (AE), white balance (AWB), and CCT-interpolated CCM every frame using exponential moving averages (EMA) over subsampled pixel statistics."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Exponential Moving Average (EMA)", "hash": "glossary-sec", "keywords": "Exponential Moving Average Temporal Smoothing Filter EMA A first-order temporal filter (x_t = α·x̂ + (1-α)·x_{t-1}) that blends current measurements with previous state to suppress frame-to-frame gain hunting or viewport jitter."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Halide DSL (Halide)", "hash": "glossary-sec", "keywords": "Halide DSL Decoupled Algorithm & Schedule Compiler Halide A domain-specific language and compiler for image processing that separates 'what to compute' (Algorithm) from 'how to execute it' (Schedule: tiling, SIMD vectorization, parallelism, and kernel fusion)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Verified Lifting (Lifting)", "hash": "glossary-sec", "keywords": "Verified Lifting Automated C99-to-Halide Transpilation & Parity Check Lifting A compilation workflow that parses legacy C99 image processing loops into stencil/pointwise intermediate representations (IR), emits optimized Halide code and schedules, and verifies numerical parity (PSNR ≥ 40 dB)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Kernel Fusion (Fusion)", "hash": "glossary-sec", "keywords": "Kernel Fusion Tile-Level Producer-Consumer Loop Fusion Fusion Instead of reading and writing full frames to DRAM between every ISP stage, connects producer and consumer stages at the tile level inside L2 cache/registers, cutting 12MP DRAM traffic by 13.8× (Tier 3)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "DMA-BUF Zero-Copy (DMA-BUF)", "hash": "glossary-sec", "keywords": "DMA-BUF Zero-Copy Shared Physical Memory Buffer Mapping DMA-BUF Eliminates host-to-device staging copy overhead (60.16 ms) by mapping the exact same physical memory pages between the CPU and VideoCore VII GPU (Vulkan) via Linux kernel DMA-BUF handles (Tier 4)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Bilateral Grid (HDRnet Grid)", "hash": "glossary-sec", "keywords": "Bilateral Grid 3D Spatial-Luma Affine Tone Mapping Grid HDRnet Grid Infers 3D affine color transformation coefficients over a coarse (x, y) × luma grid from a low-resolution input and applies trilinear slicing with a full-resolution guide map for real-time edge-preserving local tone mapping."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "ZAP Tracker (ZAP)", "hash": "glossary-sec", "keywords": "ZAP Tracker Zero-Jitter Auto-Framing & Pan Tracker ZAP Touch-to-track auto-framing engine that combines IMX500 in-sensor face detection (SSD/BlazeFace) with CPU fallback and EMA smoothing (α=0.08) to smoothly pan and crop a 4:3 viewport."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Color Filter Array (CFA)", "hash": "glossary-sec", "keywords": "Color Filter Array Wavelength-Selective Pixel Mosaic Filter CFA A mosaic grid of wavelength-selective R, G, and B optical filters placed above silicon photodiodes so monochrome sensors can capture color information."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Bayer Pattern (Bayer)", "hash": "glossary-sec", "keywords": "Bayer Pattern 2×2 RGGB Color Filter Mosaic Bayer The standard 2×2 periodic color filter array consisting of 1 Red, 2 Green (Gr, Gb), and 1 Blue pixel per unit cell."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Tetracell (Tetracell)", "hash": "glossary-sec", "keywords": "Tetracell Quad-Bayer 4×4 Clustered CFA Tetracell A clustered CFA with a 4×4 fundamental period grouping 2×2 adjacent pixels under the same color filter. Sums 2×2 neighbors (binning) for high SNR in low light and reconstructs full resolution in bright light."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Hexadecacell (Hexadecacell)", "hash": "glossary-sec", "keywords": "Hexadecacell 16-Cell 8×8 Clustered CFA Hexadecacell An ultra-high-resolution (200 MP class) clustered color filter array grouping 4×4 (16) adjacent pixels per color with an 8×8 fundamental period."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Remosaicing (Remosaic)", "hash": "glossary-sec", "keywords": "Remosaicing Non-Bayer to Bayer Mosaic Conversion Remosaic A preprocessing stage that rearranges and interpolates clustered non-standard CFA outputs such as Tetracell (4×4) or Hexadecacell (8×8) into a standard 2×2 Bayer mosaic for legacy hardware ISPs."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "PixelUnshuffle (PixelUnshuffle)", "hash": "glossary-sec", "keywords": "PixelUnshuffle Lossless Space-to-Depth Phase Decomposition PixelUnshuffle A lossless spatial-to-channel rearrangement operation (H×W×1 → (H/r)×(W/r)×r²) that separates pixels of identical mosaic phase into dedicated channels while reducing spatial dimensions by factor r."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "PixelShuffle (PixelShuffle)", "hash": "glossary-sec", "keywords": "PixelShuffle Sub-Pixel Convolution Depth-to-Space Upsampling PixelShuffle An upsampling operation that rearranges multi-channel feature maps into a higher-resolution spatial grid (×r), used in the Universal CFA reconstruction decoder."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Peak Signal-to-Noise Ratio (PSNR)", "hash": "glossary-sec", "keywords": "Peak Signal-to-Noise Ratio Logarithmic Pixel Fidelity Metric PSNR An image fidelity metric expressing the mean squared error (MSE) between reference and reconstructed images on a logarithmic decibel (dB) scale. Higher values indicate lower pixel-wise numerical error."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Learned Perceptual Image Patch Similarity (LPIPS)", "hash": "glossary-sec", "keywords": "Learned Perceptual Image Patch Similarity Deep Feature Perceptual Distance LPIPS A perceptual metric that measures human visual similarity using intermediate feature distances in deep networks (such as VGG). Lower values (↓) indicate closer texture and structural fidelity."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Model Compression Toolkit (MCT)", "hash": "glossary-sec", "keywords": "Model Compression Toolkit Sony IMX500 INT8 PTQ Framework MCT Quantization framework that performs post-training INT8 quantization (PTQ) of Keras/PyTorch floating-point models using representative calibration frames (imx500_calib_frames) for Sony IMX500 NPU deployment."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Hailo Dataflow Compiler (Hailo DFC)", "hash": "glossary-sec", "keywords": "Hailo Dataflow Compiler ONNX-to-HEF Neural Compiler Toolchain Hailo DFC Toolchain that parses ONNX neural graphs (translate_onnx_model), performs INT8 optimization using real-distribution calibration tensors (.npy), and compiles them into Hailo-8 .hef binaries."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Model Context Protocol Server (MCP Server)", "hash": "glossary-sec", "keywords": "Model Context Protocol Server Deterministic Agent Tool Server MCP Server Deterministic agent tool server implemented in tools/aicamera_mcp_server.py. Safely exposes environment detection, remote benchmark execution, drift gating (diff_bench), training launch, and CSV loss parsing."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "IMX500 Neural Network Firmware Package (RPK)", "hash": "glossary-sec", "keywords": "IMX500 Neural Network Firmware Package On-Sensor NPU Binary Package RPK The final sensor NPU firmware (.rpk) packaged by Raspberry Pi 5 rpk_packager from imxconv-tf packerOut.zip output. Uploaded into IMX500 on-chip SRAM at camera startup."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Hailo Executable Format (HEF)", "hash": "glossary-sec", "keywords": "Hailo Executable Format Hailo-8 NPU Dataflow Binary HEF Dedicated binary format (.hef) produced by the Hailo Dataflow Compiler for the Hailo-8 NPU. Executes Stage B (0.97 ms) and TAESD_ft (16.44 ms) at high speed over PCIe."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "White-Box Computational Latent ISP (Comp-LSP)", "hash": "glossary-sec", "keywords": "White-Box Computational Latent ISP Analytical 16-Ch Latent ISP Comp-LSP An analytical latent-domain ISP architecture that transforms 16-channel linear latents (z_lin) into camera-specific sRGB latents (ẑ_srgb) via First-Order Jet Bundle Decomposition (J¹ = DC ⊕ AC), Simpson 1:4:1 quadrature, and 3×3 secant Jacobians without pixel decoding."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "First-Order Jet Bundle Decomposition (J¹ = DC ⊕ AC)", "hash": "glossary-sec", "keywords": "First-Order Jet Bundle Decomposition Latent Value + Spatial Differential Split J¹ = DC ⊕ AC Geometric decomposition splitting a 16-channel latent vector z into its 0th-order 8×8 patch mean color coordinates (3D DC color subspace) and 1st-order spatial texture differentials (16-channel AC residual)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Simpson 1:4:1 Quadrature (1:4:1 Quadrature)", "hash": "glossary-sec", "keywords": "Simpson 1:4:1 Quadrature 3-Point Gauss-Legendre Gamma Integration 1:4:1 Quadrature O(σ⁴) numerical integration scheme that evaluates f_ISP at three symmetric nodes (μ₀ - δ, μ₀, μ₀ + δ with δ = √1.5·σ_AC) and combines them with 1:4:1 weights to eliminate Jensen's inequality bias across concave gamma curves."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "Secant Jacobian Matrix (J_3×3)", "hash": "glossary-sec", "keywords": "Secant Jacobian Matrix Chain-Rule Finite-Difference ISP Derivative J_3×3 The 3×3 per-patch derivative matrix J_3×3 = diag(d_sec) · M combining the linear ISP matrix M = M_ccm · diag(w_wb) · g with the centered finite-difference gamma secant slope d_sec = (f_+ - f_-)/(2δ_c)."}, {"type": "Glossary", "slug": "notes", "num": "06", "chTitle": "Glossary & Code-to-Docs Audit Notes", "title": "144-D Kronecker Outer Product (z_AC ⊗ vec(J))", "hash": "glossary-sec", "keywords": "144-D Kronecker Outer Product Entangled AC-Jacobian Bilinear Feature z_AC ⊗ vec(J) The 144-dimensional outer product tensor formed by interacting all 16 AC texture channels (z_AC) with all 9 flattened Jacobian entries (vec(J_3×3)), projected back to 16 channels via a Frobenius linear map."}];

  const SB = (window.SB = {});
  SB.CHAPTERS = CHAPTERS;

  /* ------------------------------------------------------------ math utils */
  SB.clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  SB.lerp = (a, b, t) => a + (b - a) * t;
  SB.map = (x, a, b, c, d) => c + ((x - a) * (d - c)) / (b - a);
  SB.randn = function () {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
  SB.poisson = function (lambda) {
    if (lambda <= 0) return 0;
    if (lambda > 40) return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * SB.randn()));
    const L = Math.exp(-lambda);
    let k = 0, p = 1;
    do { k++; p *= Math.random(); } while (p > L);
    return k - 1;
  };
  SB.fmt = function (x, digits = 3) {
    if (!isFinite(x)) return "—";
    if (x === 0) return "0";
    const a = Math.abs(x);
    if (a >= 1e5 || a < 1e-3) return x.toExponential(digits - 1).replace("e+", "e");
    return Number(x.toPrecision(digits)).toLocaleString("en-US", { maximumFractionDigits: 6 });
  };
  SB.si = function (x, unit = "", digits = 3) {
    if (!isFinite(x)) return "—";
    if (x === 0) return "0 " + unit;
    const pre = [[1e12, "T"], [1e9, "G"], [1e6, "M"], [1e3, "k"], [1, ""], [1e-3, "m"], [1e-6, "µ"], [1e-9, "n"], [1e-12, "p"]];
    const a = Math.abs(x);
    for (const [v, p] of pre) if (a >= v * 0.9995) return Number((x / v).toPrecision(digits)) + " " + p + unit;
    return x.toExponential(digits - 1) + " " + unit;
  };

  /* ------------------------------------------------------------ theme */
  const themeCbs = [];
  SB.onTheme = (cb) => themeCbs.push(cb);
  SB.isDark = function () {
    const t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  SB.color = function (name) {
    return getComputedStyle(document.documentElement).getPropertyValue("--" + name).trim();
  };
  SB.palette = function () {
    const c = SB.color;
    return {
      bg: c("canvas-bg"), text: c("text"), dim: c("text-dim"), faint: c("text-faint"),
      grid: c("grid"), axis: c("axis"), border: c("border"), surface: c("surface"),
      accent: c("accent"), accent2: c("accent-2"), ok: c("ok"), warn: c("warn"), bad: c("bad"),
      red: c("red"), green: c("green"), blue: c("blue"),
      series: [c("accent"), c("accent-2"), c("warn"), c("ok"), c("bad"), c("text-dim")],
    };
  };
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    themeCbs.forEach((cb) => { try { cb(); } catch (e) { console.error(e); } });
    try { window.dispatchEvent(new CustomEvent("sb:theme")); } catch (e) {}
  }
  try { const saved = localStorage.getItem("sb-theme"); if (saved) document.documentElement.setAttribute("data-theme", saved); } catch (e) {}
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
      if (!document.documentElement.getAttribute("data-theme")) applyTheme(null);
    });
  }

  /* ------------------------------------------------------------ canvas helper */
  let _sbResizing = false;
  SB.canvas = function (canvas, draw, opts = {}) {
    if (typeof canvas === "string") canvas = document.querySelector(canvas);
    if (!canvas) return { ctx: null, w: 600, h: 250 };
    const dw = Number(canvas.dataset.w || 0), dh = Number(canvas.dataset.h || 0);
    const defAspect = dw > 0 && dh > 0 ? dh / dw : 0.46;
    if (canvas._sbSt && !draw) {
      const parent = canvas.parentElement;
      const curW = Math.max(200, Math.floor(opts.width || (parent && parent.clientWidth) || dw || 600));
      if (Math.abs(curW - canvas._sbSt.w) > 1) {
        canvas._sbSt.resize(true);
      } else {
        canvas._sbSt.ctx.setTransform(canvas._sbSt.dpr, 0, 0, canvas._sbSt.dpr, 0, 0);
      }
      return canvas._sbSt;
    }
    const ctx = canvas.getContext("2d");
    const st = { ctx, w: 0, h: 0, canvas, dpr: 1, lastParentW: -1 };
    function resize(fromImperative) {
      const parent = canvas.parentElement;
      const pw = (parent && parent.clientWidth) || 0;
      st.lastParentW = pw;
      const w = Math.max(200, Math.floor(opts.width || pw || dw || 600));
      let h = opts.height || (dh && !draw ? dh : Math.round(w * (opts.aspect || defAspect)));
      if (opts.minHeight) h = Math.max(h, opts.minHeight);
      if (opts.maxHeight) h = Math.min(h, opts.maxHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      st.w = w; st.h = h; st.dpr = dpr;
      if (draw) {
        st.redraw();
      } else if (!fromImperative && canvas._sbSt && !_sbResizing) {
        _sbResizing = true;
        try { window.dispatchEvent(new Event("resize")); } finally { _sbResizing = false; }
      }
    }
    st.redraw = function () {
      if (!st.w) return;
      ctx.save();
      ctx.setTransform(st.dpr, 0, 0, st.dpr, 0, 0);
      if (!opts.noClear) {
        ctx.clearRect(0, 0, st.w, st.h);
        ctx.fillStyle = SB.color("canvas-bg");
        ctx.fillRect(0, 0, st.w, st.h);
      }
      try { draw && draw(ctx, st.w, st.h); } finally { ctx.restore(); }
    };
    st.resize = resize;
    resize(true);
    canvas._sbSt = st;
    if (window.ResizeObserver && canvas.parentElement) {
      new ResizeObserver(() => {
        const pw = canvas.parentElement.clientWidth;
        if (pw > 0 && Math.abs(pw - st.lastParentW) > 1) {
          resize(false);
        }
      }).observe(canvas.parentElement);
    } else if (draw) {
      window.addEventListener("resize", () => resize(false));
    }
    SB.onTheme(() => {
      if (draw) st.redraw();
      else if (!_sbResizing) {
        _sbResizing = true;
        try { window.dispatchEvent(new Event("resize")); } finally { _sbResizing = false; }
      }
    });
    return st;
  };

  SB.loop = function (el, fn) {
    let raf = 0, last = 0, t = 0, visible = true, running = true;
    function frame(ts) {
      raf = 0;
      if (!running || !visible) return;
      const dt = last ? Math.min(0.05, (ts - last) / 1000) : 0.016;
      last = ts; t += dt;
      fn(dt, t);
      raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf && running && visible) { last = 0; raf = requestAnimationFrame(frame); } }
    if (window.IntersectionObserver && el) {
      new IntersectionObserver((es) => { visible = es[0].isIntersecting; kick(); }).observe(el);
    }
    kick();
    return {
      start() { running = true; kick(); },
      stop() { running = false; },
      get running() { return running; },
      toggle() { running ? (running = false) : ((running = true), kick()); return running; },
    };
  };

  /* ------------------------------------------------------------ chart helper */
  SB.chart = function (ctx, box, opts) {
    const P = SB.palette();
    const dpr = (ctx.getTransform && ctx.getTransform().a) || 1;
    const W = ctx.canvas.width / dpr, H = ctx.canvas.height / dpr;
    if (!box) box = { x: 60, y: 18, w: W - 60 - 20, h: H - 18 - 46 };
    const [x0, x1] = opts.x, [y0, y1] = opts.y;
    const lx = (v) => (opts.logX ? Math.log10(v) : v);
    const ly = (v) => (opts.logY ? Math.log10(v) : v);
    const X = (v) => box.x + ((lx(v) - lx(x0)) / (lx(x1) - lx(x0))) * box.w;
    const Y = (v) => box.y + box.h - ((ly(v) - ly(y0)) / (ly(y1) - ly(y0))) * box.h;
    const ticks = (a, b, log, n) => {
      if (log) { const out = []; for (let e = Math.ceil(Math.log10(a) - 1e-9); e <= Math.log10(b) + 1e-9; e++) out.push(Math.pow(10, e)); return out; }
      const span = b - a, raw = span / (n || 5), mag = Math.pow(10, Math.floor(Math.log10(raw)));
      const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= (n || 5) + 0.5) || raw;
      const out = []; for (let v = Math.ceil(a / step - 1e-9) * step; v <= b + step * 1e-6; v += step) out.push(Math.abs(v) < step * 1e-9 ? 0 : v);
      return out;
    };
    const defFmt = (v) => (Math.abs(v) >= 1e4 || (Math.abs(v) < 1e-2 && v !== 0) ? v.toExponential(0).replace("e+", "e") : String(Number(v.toPrecision(4))));
    const xFmt = opts.xFmt || defFmt, yFmt = opts.yFmt || defFmt;
    ctx.save();
    ctx.font = "11px " + getComputedStyle(document.body).getPropertyValue("--mono");
    ctx.lineWidth = 1;
    (opts.bands || []).forEach((b) => { ctx.fillStyle = b.color; ctx.fillRect(X(b.x0), box.y, X(b.x1) - X(b.x0), box.h); });
    const xt = opts.xTicks || ticks(x0, x1, opts.logX, 6);
    const yt = opts.yTicks || ticks(y0, y1, opts.logY, 5);
    ctx.strokeStyle = P.grid; ctx.fillStyle = P.dim;
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    xt.forEach((v) => { const px = X(v); if (px < box.x - 1 || px > box.x + box.w + 1) return; ctx.beginPath(); ctx.moveTo(px, box.y); ctx.lineTo(px, box.y + box.h); ctx.stroke(); ctx.fillText(xFmt(v), px, box.y + box.h + 6); });
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    yt.forEach((v) => { const py = Y(v); if (py < box.y - 1 || py > box.y + box.h + 1) return; ctx.beginPath(); ctx.moveTo(box.x, py); ctx.lineTo(box.x + box.w, py); ctx.stroke(); ctx.fillText(yFmt(v), box.x - 6, py); });
    ctx.strokeStyle = P.axis;
    ctx.beginPath(); ctx.moveTo(box.x, box.y); ctx.lineTo(box.x, box.y + box.h); ctx.lineTo(box.x + box.w, box.y + box.h); ctx.stroke();
    ctx.fillStyle = P.dim; ctx.font = "12px " + getComputedStyle(document.body).getPropertyValue("--font");
    if (opts.xLabel) { ctx.textAlign = "center"; ctx.textBaseline = "bottom"; ctx.fillText(opts.xLabel, box.x + box.w / 2, box.y + box.h + 40); }
    if (opts.yLabel) { ctx.save(); ctx.translate(14, box.y + box.h / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(opts.yLabel, 0, 0); ctx.restore(); }
    ctx.save(); ctx.beginPath(); ctx.rect(box.x, box.y - 2, box.w + 2, box.h + 4); ctx.clip();
    (opts.series || []).forEach((s, i) => {
      if (!s.data || !s.data.length) return;
      ctx.strokeStyle = s.color || P.series[i % P.series.length];
      ctx.lineWidth = s.width || 2; ctx.setLineDash(s.dash || []);
      ctx.beginPath();
      let started = false;
      s.data.forEach(([x, y]) => { if (!isFinite(y) || (opts.logY && y <= 0) || (opts.logX && x <= 0)) { started = false; return; } const px = X(x), py = Y(y); started ? ctx.lineTo(px, py) : ctx.moveTo(px, py); started = true; });
      ctx.stroke();
      if (s.fill) {
        ctx.lineTo(X(s.data[s.data.length - 1][0]), Y(opts.logY ? y0 : Math.max(y0, 0)));
        ctx.lineTo(X(s.data[0][0]), Y(opts.logY ? y0 : Math.max(y0, 0)));
        ctx.closePath(); ctx.fillStyle = s.fill; ctx.fill();
      }
      ctx.setLineDash([]);
    });
    (opts.vlines || []).forEach((l) => { ctx.strokeStyle = l.color || P.faint; ctx.setLineDash(l.dash || [4, 4]); ctx.lineWidth = l.width || 1.2; ctx.beginPath(); ctx.moveTo(X(l.x), box.y); ctx.lineTo(X(l.x), box.y + box.h); ctx.stroke(); ctx.setLineDash([]); if (l.label) { ctx.fillStyle = l.color || P.dim; ctx.textAlign = "left"; ctx.textBaseline = "top"; ctx.fillText(l.label, X(l.x) + 4, box.y + 4); } });
    (opts.hlines || []).forEach((l) => { ctx.strokeStyle = l.color || P.faint; ctx.setLineDash(l.dash || [4, 4]); ctx.lineWidth = l.width || 1.2; ctx.beginPath(); ctx.moveTo(box.x, Y(l.y)); ctx.lineTo(box.x + box.w, Y(l.y)); ctx.stroke(); ctx.setLineDash([]); if (l.label) { ctx.fillStyle = l.color || P.dim; ctx.textAlign = "right"; ctx.textBaseline = "bottom"; ctx.fillText(l.label, box.x + box.w - 4, Y(l.y) - 3); } });
    (opts.points || []).forEach((p) => { ctx.fillStyle = p.color || P.accent; ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), p.r || 4.5, 0, Math.PI * 2); ctx.fill(); if (p.label) { ctx.fillStyle = P.text; ctx.textAlign = "left"; ctx.textBaseline = "bottom"; ctx.fillText(p.label, X(p.x) + 6, Y(p.y) - 4); } });
    ctx.restore();
    ctx.restore();
    return { X, Y, box };
  };

  /* ------------------------------------------------------------ controls */
  SB.range = function (id, fmt, onInput) {
    if (typeof id === "object" && id !== null && !(id instanceof Element)) {
      const cfg = id;
      const wrap = document.createElement("label");
      wrap.className = "ctrl";
      const sp = document.createElement("span");
      sp.textContent = cfg.label || "";
      const out = document.createElement("output");
      sp.appendChild(out);
      const inp = document.createElement("input");
      inp.type = "range";
      inp.min = String(cfg.min ?? 0);
      inp.max = String(cfg.max ?? 100);
      inp.step = String(cfg.step ?? 1);
      inp.value = String(cfg.value ?? cfg.min ?? 0);
      wrap.append(sp, inp);
      const update = (fire) => {
        const v = Number(inp.value);
        const pct = ((v - Number(inp.min)) / Math.max(1e-9, Number(inp.max) - Number(inp.min))) * 100;
        inp.style.setProperty("--fill", pct + "%");
        out.textContent = cfg.fmt ? cfg.fmt(v) : String(v);
        if (fire && cfg.onInput) cfg.onInput(v);
      };
      inp.addEventListener("input", () => update(true));
      update(false);
      wrap.set = (v) => { inp.value = String(v); update(false); };
      return wrap;
    }
    const el = typeof id === "string" ? document.getElementById(id) : id;
    if (!el) return () => 0;
    const out = document.getElementById(el.id + "-out") || document.querySelector(`output[for="${el.id}"]`);
    const update = (fire) => {
      const v = Number(el.value);
      const pct = ((v - Number(el.min || 0)) / (Number(el.max || 100) - Number(el.min || 0))) * 100;
      el.style.setProperty("--fill", pct + "%");
      if (out) out.textContent = fmt ? fmt(v) : String(v);
      if (fire && onInput) onInput(v);
    };
    el.addEventListener("input", () => update(true));
    update(false);
    const get = () => Number(el.value);
    get.set = (v) => { el.value = v; update(true); };
    get.el = el;
    return get;
  };
  SB.slider = SB.range;

  SB.seg = function (id, onChange) {
    if (typeof id === "object" && id !== null && !(id instanceof Element)) {
      const cfg = id;
      const wrap = document.createElement("div");
      wrap.className = "ctrl";
      const sp = document.createElement("span");
      sp.textContent = cfg.label || "";
      const seg = document.createElement("div");
      seg.className = "seg";
      const btns = (cfg.options || []).map(([val, txt]) => {
        const b = document.createElement("button");
        b.type = "button";
        b.dataset.value = String(val);
        b.textContent = txt;
        if (String(val) === String(cfg.value)) b.classList.add("on");
        seg.appendChild(b);
        return b;
      });
      const set = (v, fire = true) => {
        btns.forEach((b) => { const on = String(b.dataset.value) === String(v); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
        if (fire && cfg.onChange) cfg.onChange(v);
      };
      btns.forEach((b) => b.addEventListener("click", () => set(b.dataset.value, true)));
      set(cfg.value, false);
      wrap.append(sp, seg);
      return wrap;
    }
    const el = typeof id === "string" ? document.getElementById(id) : id;
    if (!el) return () => "";
    const btns = [...el.querySelectorAll("button")];
    let cur = (btns.find((b) => b.classList.contains("on")) || btns[0]).dataset.value;
    const set = (v, fire = true) => {
      cur = v;
      btns.forEach((b) => { const on = String(b.dataset.value) === String(v); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      if (fire && onChange) onChange(v);
    };
    btns.forEach((b) => b.addEventListener("click", () => set(b.dataset.value)));
    set(cur, false);
    const get = () => cur;
    get.set = set;
    return get;
  };

  SB.stat = function (id, html) {
    if (typeof id === "object" && id !== null) {
      return `<div class="stat"><span class="k">${id.label || ""}</span><span class="v">${id.value || ""}</span></div>`;
    }
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  /* ------------------------------------------------------------ three.js helper */
  SB.three = function (container, opts = {}) {
    if (typeof container === "string") container = document.querySelector(container);
    if (!container || !window.THREE) return null;
    const THREE = window.THREE;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(opts.fov || 38, 1, 0.01, 2000);
    camera.position.set(...(opts.camera || [8, 6, 10]));
    const controls = THREE.OrbitControls ? new THREE.OrbitControls(camera, renderer.domElement) : null;
    if (controls) {
      controls.target.set(...(opts.target || [0, 0, 0]));
      controls.enableDamping = true; controls.dampingFactor = 0.08;
      controls.autoRotate = !!opts.autoRotate; controls.autoRotateSpeed = opts.autoRotateSpeed || 0.7;
      controls.enablePan = opts.pan !== false;
      if (opts.minDistance) controls.minDistance = opts.minDistance;
      if (opts.maxDistance) controls.maxDistance = opts.maxDistance;
      controls.update();
    } else camera.lookAt(...(opts.target || [0, 0, 0]));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x445066, 0.8));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.85); d1.position.set(6, 10, 8); scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xbfd7ff, 0.35); d2.position.set(-6, 4, -5); scene.add(d2);

    const labelLayer = document.createElement("div");
    labelLayer.style.cssText = "position:absolute;inset:0;pointer-events:none;overflow:hidden";
    container.appendChild(labelLayer);
    const labels = [];
    const frameCbs = [];
    const T = { THREE, scene, camera, renderer, controls, container, labels };
    T.onFrame = (cb) => frameCbs.push(cb);
    T.label = function (text, pos, cls) {
      const el = document.createElement("div");
      el.className = "overlay-label" + (cls ? " " + cls : "");
      el.innerHTML = text;
      labelLayer.appendChild(el);
      const L = { el, pos: pos.clone ? pos.clone() : new THREE.Vector3(...pos), visible: true, obj: null };
      L.setVisible = (v) => { L.visible = v; el.style.display = v ? "" : "none"; };
      L.remove = () => { el.remove(); labels.splice(labels.indexOf(L), 1); };
      labels.push(L);
      return L;
    };
    T.material = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.5, metalness: 0.1 }, o));
    function resize() {
      const w = container.clientWidth, h = container.clientHeight || 400;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = w + "px"; renderer.domElement.style.height = h + "px";
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(container); else window.addEventListener("resize", resize);
    resize();
    const v = new THREE.Vector3();
    T.loop = SB.loop(container, (dt, t) => {
      frameCbs.forEach((cb) => cb(dt, t));
      if (controls) controls.update();
      renderer.render(scene, camera);
      const w = container.clientWidth, h = container.clientHeight;
      labels.forEach((L) => {
        if (!L.visible) return;
        v.copy(L.pos); if (L.obj) L.obj.localToWorld(v);
        v.project(camera);
        const behind = v.z > 1;
        L.el.style.display = behind ? "none" : "";
        L.el.style.left = ((v.x + 1) / 2) * w + "px";
        L.el.style.top = ((1 - v.y) / 2) * h + "px";
      });
    });
    return T;
  };

  /* ------------------------------------------------------------ layout build */
  const LOGO = `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)"/></linearGradient></defs><rect x="2" y="2" width="28" height="28" rx="8" fill="url(#sbg)"/><g fill="#fff"><rect x="7" y="7" width="7" height="7" rx="1.5" opacity=".95"/><rect x="18" y="7" width="7" height="7" rx="1.5" opacity=".6"/><rect x="7" y="18" width="7" height="7" rx="1.5" opacity=".6"/><rect x="18" y="18" width="7" height="7" rx="1.5" opacity=".95"/><circle cx="16" cy="16" r="2.2"/></g></svg>`;
  const ICON_MENU = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  const ICON_MOON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
  const ICON_SUN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

  function build() {
    const body = document.body;
    const root = body.dataset.root != null ? body.dataset.root : body.dataset.chapter ? "../" : "";
    const curSlug = body.dataset.chapter || "";
    const href = (slug) => (slug ? `${root}chapters/${slug}.html` : `${root}index.html`);
    const repoUp = DOC_LANG === "en" ? `${root}../../` : `${root}../`;
    const papersHref = location.hostname.endsWith("github.io") ? `${repoUp}papers/index.html` : `${repoUp}lsp/paper/icassp_paper.html`;

    const bar = document.createElement("header");
    bar.className = "sb-topbar";
    bar.innerHTML = `
      <div class="book-nav-left">
        <button class="sb-btn icon" id="sb-menu" aria-label="Chapter list">${ICON_MENU}</button>
        <a class="sb-logo" href="${href("")}">${LOGO}<span>AICAMERA <small>Interactive Architecture Guidebook</small></span></a>
      </div>
      <div class="book-search">
        <svg class="book-search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
        <input type="search" aria-label="Search chapters, sections, simulators, and glossary" placeholder="Search guidebook (e.g., SA8, BLC, Halide, Tetracell)" autocomplete="off">
        <div class="book-search-results" aria-live="polite"></div>
      </div>
      <div class="book-nav-right">
        <a class="sb-btn series-link" href="${papersHref}" title="LSP · Universal CFA · White-Box Comp-LSP Papers"><span>📚 Papers</span></a>
        <a class="sb-btn series-link" href="${href("notes")}#glossary-sec" title="Glossary & Audit Notes"><span>Glossary · Audit</span></a>
        <button class="sb-iconbtn sb-lang-toggle" id="sb-lang-btn" title="English Version · Click to switch to Korean (KO)"><span class="lg-dim">KO</span><span class="lg-dim">/</span><span class="lg-on">EN</span></button>
        <button class="sb-btn icon" id="sb-theme" aria-label="Toggle theme"></button>
      </div>
      <div class="sb-progress" id="sb-progress"></div>`;
    body.prepend(bar);

    const langBtn = bar.querySelector("#sb-lang-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        try {
          localStorage.setItem("sb-lang", DOC_LANG === "en" ? "ko" : "en");
          sessionStorage.setItem("sb-scroll-y", String(window.scrollY || 0));
        } catch (e) {}
        location.href = otherLangHref();
      });
    }

    const search = bar.querySelector(".book-search");
    const searchInput = search.querySelector("input");
    const searchResults = search.querySelector(".book-search-results");
    const closeSearch = () => { search.classList.remove("open"); searchResults.replaceChildren(); };

    function renderSearch() {
      const words = searchInput.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      searchResults.replaceChildren();
      if (!words.length) { closeSearch(); return; }
      const includesWords = (val) => words.every((w) => String(val || "").toLocaleLowerCase().includes(w));
      const chapterMatches = CHAPTERS.filter((c) => includesWords([c.num, c.title, c.desc, ...(c.tags || [])].join(" ")))
        .map((c) => ({ type: "Chapter", title: c.title, slug: c.slug, num: c.num, chTitle: c.title, hash: "" }));
      const detailMatches = PREBUILT_SEARCH.filter((e) => includesWords(e.title + " " + (e.keywords || "")));
      const matches = [
        ...chapterMatches.slice(0, 4),
        ...detailMatches.filter((e) => e.type === "Section").slice(0, 6),
        ...detailMatches.filter((e) => e.type === "Simulator").slice(0, 5),
        ...detailMatches.filter((e) => e.type === "Glossary").slice(0, 4),
      ];
      matches.forEach((entry) => {
        const link = document.createElement("a");
        link.href = href(entry.slug) + (entry.hash ? `#${entry.hash}` : "");
        const title = document.createElement("strong");
        title.textContent = entry.title;
        const context = document.createElement("small");
        context.textContent = `Ch.${entry.num} · ${entry.chTitle} · ${entry.type}`;
        link.append(title, context);
        searchResults.appendChild(link);
      });
      if (!matches.length) {
        const empty = document.createElement("p");
        empty.textContent = "No matching results";
        searchResults.appendChild(empty);
      }
      search.classList.add("open");
    }
    searchInput.addEventListener("input", renderSearch);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeSearch(); searchInput.blur(); }
      else if (e.key === "ArrowDown") { const first = searchResults.querySelector("a"); if (first) { e.preventDefault(); first.focus(); } }
      else if (e.key === "Enter") { const first = searchResults.querySelector("a"); if (first) { e.preventDefault(); first.click(); } }
    });
    searchResults.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeSearch(); searchInput.focus(); }
      else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const links = [...searchResults.querySelectorAll("a")];
        const next = links.indexOf(document.activeElement) + (e.key === "ArrowDown" ? 1 : -1);
        e.preventDefault();
        (links[next] || searchInput).focus();
      }
    });
    document.addEventListener("pointerdown", (e) => { if (!search.contains(e.target)) closeSearch(); });

    // drawer
    const drawer = document.createElement("nav");
    drawer.className = "sb-drawer";
    drawer.innerHTML = `<h4>AICAMERA Guidebook</h4><ul class="sb-chlist">
      <li><a href="${href("")}" class="${curSlug ? "" : "active"}"><span class="num">00</span><span>Home · Full Architecture Roadmap</span></a></li>
      ${CHAPTERS.map((c) => `<li><a href="${href(c.slug)}" class="${c.slug === curSlug ? "active" : ""}"><span class="num">${c.num}</span><span>${c.title}</span></a></li>`).join("")}
    </ul>`;
    const backdrop = document.createElement("div");
    backdrop.className = "sb-drawer-backdrop";
    body.append(backdrop, drawer);
    const toggleDrawer = (o) => body.classList.toggle("drawer-open", o);
    bar.querySelector("#sb-menu").addEventListener("click", () => toggleDrawer(true));
    backdrop.addEventListener("click", () => toggleDrawer(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleDrawer(false); });

    // theme toggle
    const tbtn = bar.querySelector("#sb-theme");
    const setIcon = () => (tbtn.innerHTML = SB.isDark() ? ICON_SUN : ICON_MOON);
    setIcon();
    tbtn.addEventListener("click", () => {
      const next = SB.isDark() ? "light" : "dark";
      try { localStorage.setItem("sb-theme", next); } catch (e) {}
      applyTheme(next); setIcon();
    });

    // progress
    const prog = bar.querySelector("#sb-progress");
    const onScroll = () => { const h = document.documentElement.scrollHeight - innerHeight; prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%"; };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // chapter page extras
    const main = document.querySelector("main.chapter");
    if (main) {
      [...main.querySelectorAll(".sim")].filter((sim) => sim.querySelector(".sim-head h3, .sim-head .sim-title")).forEach((sim, i) => {
        if (!sim.id) sim.id = `search-sim-${i + 1}`;
        const head = sim.querySelector(".sim-head");
        if (head && !head.querySelector(".sim-link")) {
          const link = document.createElement("a");
          link.className = "sim-link";
          link.href = "#" + sim.id;
          link.textContent = "#";
          link.title = "Link to this simulator";
          head.appendChild(link);
        }
      });

      const layout = document.createElement("div");
      layout.className = "sb-layout";
      main.parentNode.insertBefore(layout, main);
      layout.appendChild(main);
      const toc = document.createElement("aside");
      toc.className = "sb-toc";
      const h2s = [...main.querySelectorAll("section > h2")];
      let n = 0;
      toc.innerHTML = "<h4>ON THIS PAGE</h4>" + h2s.map((h, i) => {
        const sec = h.parentElement;
        if (!sec.id) sec.id = "s" + (i + 1);
        const numbered = !sec.classList.contains("keypoints") && !sec.hasAttribute("data-nonum");
        if (numbered && !h.querySelector(".h-num")) { n++; h.insertAdjacentHTML("afterbegin", `<span class="h-num">${String(n).padStart(2, "0")}</span>`); }
        return `<a href="#${sec.id}">${h.textContent.replace(/^\d\d\s*/, "").trim()}</a>`;
      }).join("");
      layout.appendChild(toc);
      const links = [...toc.querySelectorAll("a")];
      if (window.IntersectionObserver && h2s.length) {
        const io = new IntersectionObserver((es) => {
          es.forEach((e) => { if (e.isIntersecting) { links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); } });
        }, { rootMargin: "-18% 0px -70% 0px" });
        h2s.forEach((h) => io.observe(h.parentElement));
      }

      // pager
      const idx = CHAPTERS.findIndex((c) => c.slug === curSlug);
      const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
      const next = idx >= 0 && idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
      const pager = document.createElement("nav");
      pager.className = "sb-pager";
      pager.innerHTML =
        (prev ? `<a class="prev" href="${href(prev.slug)}"><small>← Previous · Chapter ${prev.num}</small>${prev.title}</a>` : `<a class="prev" href="${href("")}"><small>← Back to Home</small>Home · Full Architecture Roadmap</a>`) +
        (next ? `<a class="next" href="${href(next.slug)}"><small>Next · Chapter ${next.num} →</small>${next.title}</a>` : "");
      layout.after(pager);
    }

    // copy buttons for pre.cmd
    document.querySelectorAll("pre.cmd").forEach((pre) => {
      const b = document.createElement("button");
      b.className = "copy"; b.type = "button"; b.textContent = "copy";
      b.addEventListener("click", () => {
        navigator.clipboard.writeText(pre.innerText.replace(/copy$/, "").trim()).then(() => {
          b.textContent = "copied";
          setTimeout(() => (b.textContent = "copy"), 1200);
        });
      });
      pre.appendChild(b);
    });

    const foot = document.createElement("footer");
    foot.className = "sb-foot";
    foot.innerHTML = `AICAMERA Interactive Architecture Guidebook · Generated by <code>docs/build_spec_portal.py</code> · build 2026-11-07 20:41 · commit <code>f87a5d6</code><br>All benchmark metrics are extracted from canonical repository JSONs and ISP/3A defaults are parsed from C99 headers at build time.`;
    body.appendChild(foot);

    try {
      const sy = sessionStorage.getItem("sb-scroll-y");
      if (sy !== null) {
        sessionStorage.removeItem("sb-scroll-y");
        window.scrollTo(0, parseInt(sy, 10) || 0);
      }
    } catch (e) {}

    // Rewrite repo source code pills (<a class="src">) to GitHub repo URLs when hosted on GitHub Pages
    if (location.protocol === "http:" || location.protocol === "https:") {
      document.querySelectorAll("a.src[href]").forEach((a) => {
        const h = a.getAttribute("href") || "";
        if (h.startsWith("../")) {
          const rel = h.replace(/^(\.\.\/)+/, "");
          a.href = "https://github.com/yjqkrtk-ux/aicamera/blob/main/" + rel;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      });
    }

    // KaTeX
    const renderMath = () => {
      if (window.renderMathInElement) {
        renderMathInElement(document.body, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "\\[", right: "\\]", display: true }, { left: "\\(", right: "\\)", display: false }],
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "svg"],
          ignoredClasses: ["no-math"],
          throwOnError: false,
        });
      }
    };
    if (window.renderMathInElement) renderMath();
    else window.addEventListener("load", renderMath);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
