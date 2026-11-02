/* ==========================================================================
   Workspace & KAIST Grad Works Guidebook — SensorBook Runtime
   ========================================================================== */
(function () {
  const SB = (window.SB = window.SB || {});
  const DOC_LANG = document.documentElement.lang === "en" ? "en" : "ko";

  SB.CHAPTERS = [
  {
    "slug": "overview",
    "num": "01",
    "title": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture",
    "desc": "Dissects the 6 operating rules of the 3-Pillar GoogleDrive workspace (Development · Documents · Photos), the 40-submodule + Theme 5 automation topology, and the academic dissertation and patent lineage.",
    "tags": [
      "3-Pillar",
      "40 Submodules",
      "sim"
    ]
  },
  {
    "slug": "bio",
    "num": "02",
    "title": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining",
    "desc": "Covers the core Ph.D. dissertation pipeline (IEEE OJEMB) that breaks the global DP O(N1·N2) barrier via a local sliding-window MDP and Dueling Double DQN + Exact Match Skip, along with REminerII and REDNN.",
    "tags": [
      "DQNAlign",
      "REminerII",
      "sim"
    ]
  },
  {
    "slug": "wpt",
    "num": "03",
    "title": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics",
    "desc": "Analyzes Tsai 11-DoF pinhole calibration, binocular 3D skew-ray triangulation, FLIR Lepton thermal and Coral EdgeTPU human-presence safety interlock (US 12,496,917 B2), and 85 kHz OLEV telematics.",
    "tags": [
      "US 12,496,917 B2",
      "3d",
      "sim"
    ]
  },
  {
    "slug": "automation",
    "num": "04",
    "title": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems",
    "desc": "Covers Win32 DirectInput hardware scancodes and the 13-state priority FSM, absorbing Markov chains with Chance Time (StarForce), Lophago combinatorial optimization, Casio 128×64 bare-metal engines, and WINNER II 3D MIMO channels.",
    "tags": [
      "PyMaple FSM",
      "StarForce Markov",
      "sim"
    ]
  },
  {
    "slug": "life",
    "num": "05",
    "title": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio",
    "desc": "Dissects refund sign preservation (-tx['amount']) and 2-Track split aggregation, the zero-dependency OOXML .xlsx builder, offline map web planners, automated 16:9 PPTX deck generation, and the YuNet+SFace vision indexer.",
    "tags": [
      "OOXML .xlsx",
      "YuNet+SFace",
      "sim"
    ]
  },
  {
    "slug": "archive",
    "num": "06",
    "title": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)",
    "desc": "Covers KAIST graduate coursework notes (449 files), UMLS lab seminars (430 files), Ph.D. defense records, Web Resume deploy parity (Documents/), and the Zero-ZIP / EXIF integrity architecture of the 20 TB media archive (Photos/).",
    "tags": [
      "KAIST Academic",
      "Deploy Parity",
      "sim"
    ]
  },
  {
    "slug": "notes",
    "num": "07",
    "title": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary",
    "desc": "Provides cross-repository (Development · Documents · Photos) code- and data-to-documentation consistency audit notes, the Single-Source-of-Truth automated verification pipeline, and an interactive glossary of core terms.",
    "tags": [
      "Consistency Audit",
      "Glossary"
    ]
  }
];

  const PREBUILT_SEARCH = [{"type": "Section", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "GoogleDrive 3 Pillars & 6 Operating Charter Rules", "hash": "sec-pillars", "keywords": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture GoogleDrive 3 Pillars & 6 Operating Charter Rules sec-pillars"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "5-Theme Engineering Comparison Matrix", "hash": "sec-themes", "keywords": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture 5-Theme Engineering Comparison Matrix sec-themes"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "Interactive Simulator · 40-Submodule & 5-Theme Explorer", "hash": "sec-sim-submodules", "keywords": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture Interactive Simulator · 40-Submodule & 5-Theme Explorer sec-sim-submodules"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "Dissertation, International Journals & US/KR Patents Mapping (Academic Lineage & Direct Links)", "hash": "sim-submodules", "keywords": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture Dissertation, International Journals & US/KR Patents Mapping (Academic Lineage & Direct Links) sim-submodules"}, {"type": "Section", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "Key Takeaways · Chapter 01", "hash": "summary", "keywords": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture Key Takeaways · Chapter 01 summary"}, {"type": "Simulator", "slug": "overview", "num": "01", "chTitle": "Master Workspace 3-Pillar Charter & 5-Theme Monorepo Architecture", "title": "44-Project Architecture & Language Stack Explorer", "hash": "sim-submodules", "keywords": "simulator 44-Project Architecture & Language Stack Explorer sim-submodules"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Limits of Global Dynamic Programming & Local Sliding-Window MDP Formulation", "hash": "sec-mdp", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Limits of Global Dynamic Programming & Local Sliding-Window MDP Formulation sec-mdp"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Dueling Double DQN & Depthwise Separable Conv Architecture", "hash": "sec-ddqn", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Dueling Double DQN & Depthwise Separable Conv Architecture sec-ddqn"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Interactive Simulator · DQNAlign Sliding Window & Exact-Skip", "hash": "sec-sim-dqnalign", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Interactive Simulator · DQNAlign Sliding Window & Exact-Skip sec-sim-dqnalign"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "High-Speed Repeat Sequence Mining (REminerII · PixelRE) & MFC Visualization Suite", "hash": "sim-dqnalign", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining High-Speed Repeat Sequence Mining (REminerII · PixelRE) & MFC Visualization Suite sim-dqnalign"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Interactive Simulator · REminerII & PixelRE Dot-Plot Seed Extension", "hash": "sec-sim-reminer", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Interactive Simulator · REminerII & PixelRE Dot-Plot Seed Extension sec-sim-reminer"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Cancer Biomarker Classifiers (REDNN · RERNN) & Population Genetics", "hash": "sim-reminer", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Cancer Biomarker Classifiers (REDNN · RERNN) & Population Genetics sim-reminer"}, {"type": "Section", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Key Takeaways · Chapter 02", "hash": "summary", "keywords": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining Key Takeaways · Chapter 02 summary"}, {"type": "Simulator", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "Needleman-Wunsch DP Grid vs. DQNAlign Sliding Window & Exact-Skip", "hash": "sim-dqnalign", "keywords": "simulator Needleman-Wunsch DP Grid vs. DQNAlign Sliding Window & Exact-Skip sim-dqnalign"}, {"type": "Simulator", "slug": "bio", "num": "02", "chTitle": "Deep Reinforcement Learning Sequence Alignment (DQNAlign) & High-Speed Genomic Mining", "title": "REminerII Seed-and-Extend & PixelRE Multi-Scale Dot-Plot", "hash": "bio-dqn-readout", "keywords": "simulator REminerII Seed-and-Extend & PixelRE Multi-Scale Dot-Plot bio-dqn-readout"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Multimodal Vision-Guided 3D Wireless Power Transfer & OLEV Integrated Architecture", "hash": "sec-wpt-arch", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics Multimodal Vision-Guided 3D Wireless Power Transfer & OLEV Integrated Architecture sec-wpt-arch"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Mathematical Derivation of Tsai Camera Calibration & Binocular 3D Skew-Ray Triangulation", "hash": "sec-tsai", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics Mathematical Derivation of Tsai Camera Calibration & Binocular 3D Skew-Ray Triangulation sec-tsai"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Interactive 3D Simulator · Binocular Triangulation & FLIR Thermal Safety Interlock", "hash": "sec-sim-wpt-3d", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics Interactive 3D Simulator · Binocular Triangulation & FLIR Thermal Safety Interlock sec-sim-wpt-3d"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "OLEV 85 kHz Dynamic Wireless Charging Telematics & UTM Trajectory Prediction", "hash": "sim-wpt-3d", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics OLEV 85 kHz Dynamic Wireless Charging Telematics & UTM Trajectory Prediction sim-wpt-3d"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Interactive Simulator · OLEV Lane Deviation Filtering & Inverter Pre-Activation Control", "hash": "sec-sim-olev", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics Interactive Simulator · OLEV Lane Deviation Filtering & Inverter Pre-Activation Control sec-sim-olev"}, {"type": "Section", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Key Takeaways · Chapter 03", "hash": "sim-olev-gps", "keywords": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics Key Takeaways · Chapter 03 sim-olev-gps"}, {"type": "Simulator", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "3D Stereo Skew-Ray Triangulation & FLIR Thermal Safety Interlock", "hash": "sim-wpt-3d", "keywords": "simulator 3D Stereo Skew-Ray Triangulation & FLIR Thermal Safety Interlock sim-wpt-3d"}, {"type": "Simulator", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "Point-to-Line Orthogonal Lane Deviation & Interquartile 25% Trimmed Mean (get_lane_distance.m)", "hash": "wpt3d-box", "keywords": "simulator Point-to-Line Orthogonal Lane Deviation & Interquartile 25% Trimmed Mean (get_lane_distance.m) wpt3d-box"}, {"type": "Simulator", "slug": "wpt", "num": "03", "chTitle": "3D Resonant Wireless Power Transfer, Edge Vision Safety Control & OLEV Telematics", "title": "OLEV 85kHz UTM Lane Deviation & Inverter Pre-Activation Telematics", "hash": "sim-olev-gps", "keywords": "simulator OLEV 85kHz UTM Lane Deviation & Inverter Pre-Activation Telematics sim-olev-gps"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "Low-Level Input Driver Hooking & 13-State Priority Vision State Machine", "hash": "sec-fsm", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems Low-Level Input Driver Hooking & 13-State Priority Vision State Machine sec-fsm"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "Absorbing Markov Chain (StarForce) & Non-Markovian Chance Time State Augmentation", "hash": "sec-markov", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems Absorbing Markov Chain (StarForce) & Non-Markovian Chance Time State Augmentation sec-markov"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "Interactive Simulator · StarForce Markov Analytical Solution & Monte Carlo Distribution", "hash": "sec-sim-starforce", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems Interactive Simulator · StarForce Markov Analytical Solution & Monte Carlo Distribution sec-sim-starforce"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "Constrained Combinatorial Optimization (Lophago) & Casio FX-9860G Bare-Metal Engine", "hash": "sim-starforce", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems Constrained Combinatorial Optimization (Lophago) & Casio FX-9860G Bare-Metal Engine sim-starforce"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "WINNER II 3D MIMO Geometry-Based Stochastic Channel & 60 GHz Millimeter-Wave Backhaul", "hash": "sec-winner-mimo", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems WINNER II 3D MIMO Geometry-Based Stochastic Channel & 60 GHz Millimeter-Wave Backhaul sec-winner-mimo"}, {"type": "Section", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "Key Takeaways · Chapter 04", "hash": "sim-winner-mimo", "keywords": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems Key Takeaways · Chapter 04 sim-winner-mimo"}, {"type": "Simulator", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "StarForce Absorbing Markov Chain Solver & Monte Carlo Simulator", "hash": "sim-starforce", "keywords": "simulator StarForce Absorbing Markov Chain Solver & Monte Carlo Simulator sim-starforce"}, {"type": "Simulator", "slug": "automation", "num": "04", "chTitle": "Intelligent Vision Automation, Markov Stochastic Modeling & Specialty Embedded Systems", "title": "WINNER II 3D MIMO Multipath Cluster Beamforming & Capacity", "hash": "sf-readout", "keywords": "simulator WINNER II 3D MIMO Multipath Cluster Beamforming & Capacity sf-readout"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Ledger Analytics Engine (1_Household_Finance) & Zero-Dependency OOXML Builder", "hash": "sec-finance", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio Ledger Analytics Engine (1_Household_Finance) & Zero-Dependency OOXML Builder sec-finance"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Interactive Simulator · Refund Sign-Preservation & 2-Track Split Verifier", "hash": "sec-sim-finance", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio Interactive Simulator · Refund Sign-Preservation & 2-Track Split Verifier sec-sim-finance"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "AI Vision Studio (4_Photo_Memory_Studio) Multimodal Architecture", "hash": "sim-finance", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio AI Vision Studio (4_Photo_Memory_Studio) Multimodal Architecture sim-finance"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Interactive Simulator · SFace 128-D Matching & Dual-Viewer Split-Wipe", "hash": "sec-sim-photo", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio Interactive Simulator · SFace 128-D Matching & Dual-Viewer Split-Wipe sec-sim-photo"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Offline Map Web Planner (2_Travel_and_Trip_Planners) & Automated PPTX Builder", "hash": "sim-photo-studio", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio Offline Map Web Planner (2_Travel_and_Trip_Planners) & Automated PPTX Builder sim-photo-studio"}, {"type": "Section", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Key Takeaways · Chapter 05", "hash": "summary", "keywords": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio Key Takeaways · Chapter 05 summary"}, {"type": "Simulator", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "Refund Sign-Preservation (-tx['amount']) & 2-Track Split", "hash": "sim-finance", "keywords": "simulator Refund Sign-Preservation (-tx['amount']) & 2-Track Split sim-finance"}, {"type": "Simulator", "slug": "life", "num": "05", "chTitle": "Data Pipeline Automation, Zero-Dependency OOXML Engine & Multimodal Vision Studio", "title": "AI Photo Memory Studio — Split-Wipe A/B Viewer & SFace 128-D Matcher", "hash": "fin-readout", "keywords": "simulator AI Photo Memory Studio — Split-Wipe A/B Viewer & SFace 128-D Matcher fin-readout"}, {"type": "Section", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "Documents/ Master Repository — 10-Year KAIST Graduate Academic & Research Archive (1,200+ Documents)", "hash": "sec-documents-arch", "keywords": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos) Documents/ Master Repository — 10-Year KAIST Graduate Academic & Research Archive (1,200+ Documents) sec-documents-arch"}, {"type": "Section", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "Professional Web Resume System (Documents/Resume/) & Deploy Parity Protocol", "hash": "sec-resume-parity", "keywords": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos) Professional Web Resume System (Documents/Resume/) & Deploy Parity Protocol sec-resume-parity"}, {"type": "Section", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "Photos/ Large-Scale Media Storage Architecture — 7 Categories & 4 Integrity Charters", "hash": "sec-photos-master", "keywords": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos) Photos/ Large-Scale Media Storage Architecture — 7 Categories & 4 Integrity Charters sec-photos-master"}, {"type": "Section", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "AI Photo Memory Studio (4_Photo_Memory_Studio) — Read-Only Indexing & Dual Viewer", "hash": "sim-photos-auditor", "keywords": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos) AI Photo Memory Studio (4_Photo_Memory_Studio) — Read-Only Indexing & Dual Viewer sim-photos-auditor"}, {"type": "Section", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "Key Takeaways · Chapter 06", "hash": "sim-memory-studio", "keywords": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos) Key Takeaways · Chapter 06 sim-memory-studio"}, {"type": "Simulator", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "Photos/ · Documents/ Master Archive Auto-Routing & Integrity Audit Simulator", "hash": "sim-photos-auditor", "keywords": "simulator Photos/ · Documents/ Master Archive Auto-Routing & Integrity Audit Simulator sim-photos-auditor"}, {"type": "Simulator", "slug": "archive", "num": "06", "chTitle": "KAIST Academic & Career Archive (Documents) & Media Storage Architecture (Photos)", "title": "YuNet + SFace 128-D Identity Clustering & Dual-Viewer Split-Wipe Comparator", "hash": "sim-memory-studio", "keywords": "simulator YuNet + SFace 128-D Identity Clustering & Dual-Viewer Split-Wipe Comparator sim-memory-studio"}, {"type": "Section", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Code, Patent, Document & Archive Verification Audit Table (29 Items)", "hash": "notes-audit", "keywords": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary Code, Patent, Document & Archive Verification Audit Table (29 Items) notes-audit"}, {"type": "Section", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Single-Source-of-Truth Build Principle & 5-Stage Automated Verification", "hash": "notes-policy", "keywords": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary Single-Source-of-Truth Build Principle & 5-Stage Automated Verification notes-policy"}, {"type": "Section", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Master Workspace Technical & Operational Glossary (Interactive Glossary)", "hash": "glossary-sec", "keywords": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary Master Workspace Technical & Operational Glossary (Interactive Glossary) glossary-sec"}, {"type": "Section", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Key Takeaways · Chapter 07", "hash": "summary", "keywords": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary Key Takeaways · Chapter 07 summary"}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Separation of Concerns Charter (SoC)", "hash": "glossary-sec", "keywords": "Separation of Concerns Charter 3-Pillar Repository Isolation Rule SoC Rule 1 of the GoogleDrive master workspace charter: strictly isolating research & engineering code in Development/, academic/career/administrative records in Documents/, and lifetime media originals in Photos/."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Zero-ZIP Policy (Zero-ZIP)", "hash": "glossary-sec", "keywords": "Zero-ZIP Policy Uncompressed Media Exposure Mandate Zero-ZIP Rule 2 of the workspace charter: prohibiting any .zip/.tar/.7z/.rar archive files inside Photos/ and requiring immediate extraction so cloud photo backup clients never miss media hidden inside archives."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Zero Non-Media Policy (Zero-Doc)", "hash": "glossary-sec", "keywords": "Zero Non-Media Policy Non-Media Document Exclusion Rule Zero-Doc Rule 3 of the workspace charter: blocking non-media files (.hwp, .pdf, .pptx, .xlsx, .apk) from Photos/ and routing them to Development/ or Documents/."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Purity of Daily Feed (DailyPurity)", "hash": "glossary-sec", "keywords": "Purity of Daily Feed Camera-Only Chronological Feed Rule DailyPurity Rule 4 of the workspace charter: preserving only direct camera-captured photos and videos (YYYYMMDD_HHMMSS) inside Photos/Daily/20XX/ while isolating events, travel, business trips, screenshots, and web downloads into dedicated top-level folders."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Single Source of Truth (SSOT)", "hash": "glossary-sec", "keywords": "Single Source of Truth Build-Time Code & Archive Parsing Principle SSOT Engineering principle where all guidebook parameters, mathematical constants, and file paths are parsed and verified directly from actual Python/C++/MATLAB/JSON/Markdown sources at build time rather than copied by hand."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "40-Submodule Monorepo (GitSubmodule)", "hash": "glossary-sec", "keywords": "40-Submodule Monorepo Git Submodule Research Monorepo GitSubmodule Repository architecture at the root of Development/ (.gitmodules) synchronizing 40 independent Git repositories across 4 research themes under a unified commit tree."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Deep RL Sequence Alignment (DQNAlign)", "hash": "glossary-sec", "keywords": "Deep RL Sequence Alignment Deep Reinforcement Learning Sequence Alignment DQNAlign Linear-time O(L) sequence alignment framework (IEEE OJEMB 2021) that observes only a fixed local sub-alignment window (W×W) instead of the global O(N1·N2) DP grid, selecting Forward (0), Insertion (1), or Deletion (2) at each step."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Markov Decision Process (MDP)", "hash": "glossary-sec", "keywords": "Markov Decision Process Local Sliding-Window Alignment MDP MDP Mathematical decision model defining the alignment head coordinates (x, y) as state, the local W×W one-hot window tensor as observation, step direction a∈{0,1,2} as action, and match/mismatch/indel scores as reward."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Dueling Double DQN (D3QN)", "hash": "glossary-sec", "keywords": "Dueling Double DQN Dueling Double Deep Q-Network D3QN Deep RL architecture that splits hidden features into state-value V(s) and action-advantage A(s,a) streams while decoupling action selection (mainQN) from value evaluation (targetQN) to suppress Q-value overestimation bias."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Exact Match Skip (Skip)", "hash": "glossary-sec", "keywords": "Exact Match Skip Exact Match Fast-Forward Heuristic Skip Fast-forward heuristic (Agent.skip) that bypasses neural network inference and advances diagonally whenever consecutive nucleotide pairs match exactly, accelerating alignment by orders of magnitude."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Zipper Alignment (Zipper)", "hash": "glossary-sec", "keywords": "Zipper Alignment Profile-to-Profile Zipper MSA Zipper Extension of DQNAlign for Multiple Sequence Alignment (MSA) that progressively merges sequence profiles by interlocking local sliding windows like a zipper."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Seed-and-Extend (REminerII)", "hash": "glossary-sec", "keywords": "Seed-and-Extend Seed-and-Extend Genomic Repeat Mining REminerII High-speed C++ genomic repeat mining algorithm combining fixed-length WORD_SIZE (14 bp) seed hashing and mismatch tolerance (ALLOW_SIZE=1) with bidirectional Greedy X-drop extension."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "2-Bit Nucleotide Packing (2-Bit)", "hash": "glossary-sec", "keywords": "2-Bit Nucleotide Packing 2-Bit Nucleotide Bit-Packing 2-Bit Encoding A, C, G, T bases as 2-bit integers to pack 4 nucleotides per byte and compute reverse-complement sequences at hardware speed via bitwise operations."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Jukes-Cantor Evolutionary Distance (JC69)", "hash": "glossary-sec", "keywords": "Jukes-Cantor Evolutionary Distance Jukes-Cantor Substitution Correction Model JC69 Phylogenetic model estimating true evolutionary distance d = -3/4 ln(1 - 4/3 p) from observed substitution proportion p by correcting for multiple superimposed mutations."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Neural Mutual Information (NMI)", "hash": "glossary-sec", "keywords": "Neural Mutual Information Neural Mutual Information Coevolution NMI Estimating coevolutionary mutual information between residue pairs in protein Multiple Sequence Alignments (MSAs) via neural networks to predict 3D contact maps."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Cancer Biomarker Selection (REDNN)", "hash": "glossary-sec", "keywords": "Cancer Biomarker Selection Cancer Biomarker Feature Selection & DNN REDNN Clinical genomics pipeline (US 2019/0385696 A1) selecting key somatic mutation and repeat-element markers via F-statistics, mutual information, and tree importance to classify cancer risk."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Resonant Inductive WPT (3D WPT)", "hash": "glossary-sec", "keywords": "Resonant Inductive WPT Resonant Inductive Wireless Power Transfer 3D WPT Wireless power transfer system delivering up to 1 kW across meter-scale air gaps via magnetic resonant coupling between multi-coil transmitters and a receiver coil."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Tsai Camera Calibration (Tsai 11-DoF)", "hash": "glossary-sec", "keywords": "Tsai Camera Calibration Tsai Two-Stage 11-DoF Camera Calibration Tsai 11-DoF 11-DoF pinhole camera calibration algorithm estimating the 3×4 projection matrix K and extrinsic pose from 3D world reference points and 2D pixel correspondences via least-squares pseudoinverse."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Binocular Skew-Ray Triangulation (3D Stereo)", "hash": "glossary-sec", "keywords": "Binocular Skew-Ray Triangulation Binocular Skew-Ray Midpoint Triangulation 3D Stereo 3D localization method that back-projects 2D pixel coordinates from two calibrated cameras into 3D rays and computes the closest midpoint between the two skew rays to reconstruct (X,Y,Z)."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Multimodal Edge Safety Interlock (WPT-Safety)", "hash": "glossary-sec", "keywords": "Multimodal Edge Safety Interlock Multimodal Edge Vision Safety Interlock WPT-Safety Patented safety loop (US 12,496,917 B2) fusing Coral EdgeTPU RGB MobileNet SSD detection with FLIR Lepton LWIR (80×60) thermal imaging to immediately cut transmitter power upon human entry into high-EMF zones."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "FLIR Lepton Thermal Sensor (LWIR)", "hash": "glossary-sec", "keywords": "FLIR Lepton Thermal Sensor FLIR Lepton Long-Wave Infrared Sensor LWIR Long-wave infrared (8–14 μm) 80×60 thermal imaging sensor that detects human body temperature robustly regardless of ambient illumination or visual clutter."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Coral EdgeTPU (EdgeTPU)", "hash": "glossary-sec", "keywords": "Coral EdgeTPU Google Coral Edge Tensor Processing Unit EdgeTPU Low-power ASIC neural accelerator executing INT8-quantized MobileNet SSD V1/V2 TensorFlow Lite object detection models in a few milliseconds."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "On-Line Electric Vehicle (OLEV)", "hash": "glossary-sec", "keywords": "On-Line Electric Vehicle 85 kHz Dynamic Wireless Charging EV Bus OLEV KAIST-developed electric bus system receiving wireless power at 85 kHz from road-embedded segmented power rails while in motion or stationary."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "UTM Coordinate Projection (UTM)", "hash": "glossary-sec", "keywords": "UTM Coordinate Projection Universal Transverse Mercator Projection UTM Geodetic projection mapping WGS84 latitude/longitude into metric 2D Cartesian coordinates (meters) for accurate lane deviation, velocity, and inverter pre-heating ETA calculations."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Simultaneous Wireless Info & Power (SWIPT)", "hash": "glossary-sec", "keywords": "Simultaneous Wireless Info & Power Simultaneous Wireless Information and Power Transfer SWIPT Co-optimizing RF energy harvesting and information decoding over a shared wireless waveform via optimal time-switching (TS) or power-splitting (PS) ratios."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "DirectInput Scancode Hooking (ScanCode)", "hash": "glossary-sec", "keywords": "DirectInput Scancode Hooking Win32 DirectInput Hardware ScanCode Injection ScanCode Injecting hardware keyboard controller scancodes (e.g., 0x1E) via the Win32 SendInput API rather than virtual keycodes (VK) to operate reliably inside DirectX polling loops."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "13-State Priority Vision FSM (PyMaple FSM)", "hash": "glossary-sec", "keywords": "13-State Priority Vision FSM 13-State Priority Finite State Machine PyMaple FSM Vision-driven finite state machine orchestrating minimap character tracking, rune cooldown timers, and Faster R-CNN security object detection across 13 prioritized states."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Absorbing Markov Chain (AMC)", "hash": "glossary-sec", "keywords": "Absorbing Markov Chain Absorbing Markov Chain Fundamental Matrix AMC Stochastic model treating target completion (e.g., 22-star enhancement) as an absorbing state and solving the fundamental matrix N = (I - Q)^(-1) in closed form for exact expected trials and cost."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Chance-Time State Augmentation (StarForce)", "hash": "glossary-sec", "keywords": "Chance-Time State Augmentation Chance-Time State Space Augmentation StarForce Augmenting the state space as (level, consecutive_drops) so the non-Markovian Chance Time rule (100% success after 2 consecutive drops) becomes an exact first-order Absorbing Markov Chain."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Lophago Combinatorial Solver (Lophago)", "hash": "glossary-sec", "keywords": "Lophago Combinatorial Solver LostArk Engraving & Ability Stone Optimizer Lophago Constraint-satisfaction backtracking solver enumerating all valid 5-accessory Relic/Ancient engraving combinations that satisfy target activation vectors (e.g., 33333 or 333331)."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Casio FX-9860G VRAM Engine (FX-SDK)", "hash": "glossary-sec", "keywords": "Casio FX-9860G VRAM Engine Casio FX-9860G 128x64 1-Bit VRAM Engine FX-SDK Bare-metal C game engine (RPG/RTS) on the Renesas SuperH-3 CPU and 128×64 1-bit monochrome LCD (1,024-byte VRAM) using sub-byte bit-shifted sprite blitting and double buffering."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "WINNER II 3D MIMO Channel (WINNER II)", "hash": "glossary-sec", "keywords": "WINNER II 3D MIMO Channel WINNER II / 3GPP 3D Geometry-Based Stochastic Channel Model WINNER II 11-step geometry-based stochastic channel model synthesizing 3D azimuth/elevation multipath clusters, cross-polarization ratios (XPR), array responses, and 60 GHz millimeter-wave backhaul capacity."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Refund Sign-Preservation Rule (-tx['amount'])", "hash": "glossary-sec", "keywords": "Refund Sign-Preservation Rule Refund Sign-Preservation Accounting Invariant -tx['amount'] Core ledger invariant (spend(tx) = -tx['amount']) that preserves negative/positive signs on cancellations and refunds instead of taking abs(), ensuring refunds accurately offset gross category spend."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Pure Spend vs. Fixed Burden Split (2-Track)", "hash": "glossary-sec", "keywords": "Pure Spend vs. Fixed Burden Split Pure Consumption vs. Financial Burden Dual-Track 2-Track Dual-track financial aggregation architecture separating rigid fixed financial obligations (Track B) from variable living expenses (Track A) to prevent distortion of monthly operating metrics."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Zero-Dependency OOXML Builder (OOXML)", "hash": "glossary-sec", "keywords": "Zero-Dependency OOXML Builder Zero-Dependency OpenXML (.xlsx) Builder OOXML Lightweight Excel generator assembling [Content_Types].xml, styles.xml, and multi-sheet worksheet XMLs directly via Python's standard zipfile module with zero external dependencies."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Offline Map Web Planner (WebPlanner)", "hash": "glossary-sec", "keywords": "Offline Map Web Planner Offline-First JSON & Leaflet Web Planner WebPlanner Responsive single-page application combining a curated 100-POI JSON database, day-by-day route timelines, budget calculators, and interactive Leaflet map markers."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Automated 16:9 PPTX Builder (TripPPTX)", "hash": "glossary-sec", "keywords": "Automated 16:9 PPTX Builder Automated 16:9 Widescreen PPTX Deck Builder TripPPTX Programmatic presentation engine using python-pptx to assemble dark-navy headers, KPI cards, itinerary timelines, and comparison tables on a 13.333×7.5-inch widescreen grid."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "KAIST Academic & Degree Archive (Documents/)", "hash": "glossary-sec", "keywords": "KAIST Academic & Degree Archive KAIST Graduate Academic & Laboratory Archive Documents/ Master repository of 1,200+ documents spanning 2010–2021 at KAIST EE: graduate coursework notes (449 files), UMLS weekly lab seminars (430 files), Ph.D. defense records (129 files), and lab administration (220+ files)."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Graduate Coursework Archive (Coursework)", "hash": "glossary-sec", "keywords": "Graduate Coursework Archive KAIST EE & Physics Coursework Archive Coursework Archive of lecture notes, problem set solutions, and term projects across 15+ KAIST graduate courses including EE405 Electronics Design Lab, EE686 Wireless Networks, EE528 Information Theory, and EE827 Convex Optimization."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "UMLS Lab Seminar Archive (LabMeetings)", "hash": "glossary-sec", "keywords": "UMLS Lab Seminar Archive Communication & Systems Lab Weekly Seminar Archive LabMeetings Collection of 430 weekly research progress reports and journal club decks (2010–2020) from the KAIST UMLS Lab (Prof. Dong-Ho Cho), covering Averaged-DQN, Minimap2, MoleculeNet, and 85 kHz OLEV control."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Ph.D. Administration Archive (PhD-Admin)", "hash": "glossary-sec", "keywords": "Ph.D. Administration Archive PhD Qualifying Exam, Proposal & Defense Archive PhD-Admin Official academic record repository preserving Ph.D. Qualifying Exam (QE) papers, thesis proposal reports, final defense committee approvals, the Ph.D. dissertation PDF, and BK21 Plus research records."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Resume Deploy Parity Rule (DeployParity)", "hash": "glossary-sec", "keywords": "Resume Deploy Parity Rule Resume Master-to-Deploy Parity Rule DeployParity Governance rule requiring 100% byte-for-byte identity between the master Web CV (Documents/Resume/resume_yongjoon_song.html) and the GitHub Pages deployment copy (deploy/index.html), verified for 2-page A4 print layout."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Privacy Isolation Gate (PrivacyGate)", "hash": "glossary-sec", "keywords": "Privacy Isolation Gate Personal Identifiable Information Isolation Gate PrivacyGate Dual-layer security gate combining .gitignore rules and build-time content auditing to ensure Documents/Personal/ records and local ledger files (Data/*.xlsx) are never tracked or exposed."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "20TB Master Media Archive (Photos/)", "hash": "glossary-sec", "keywords": "20TB Master Media Archive Google One 20TB Original-Quality Master Media Archive Photos/ Master media repository structured into 7 top-level categories (Events, Travel, Business_Trips, Family_Archive, Daily, Screenshots, Downloads) and synchronized in lossless Original Quality."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "EXIF Timestamp Integrity (EXIF)", "hash": "glossary-sec", "keywords": "EXIF Timestamp Integrity EXIF DateTimeOriginal & Filesystem Timestamp Integrity EXIF Rule 6 mandate preserving original EXIF DateTimeOriginal metadata tags and filesystem creation/modification timestamps without alteration during media sorting or migration."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Dedicated D-Drive Cloud Cache (DriveCache)", "hash": "glossary-sec", "keywords": "Dedicated D-Drive Cloud Cache Dedicated D-Drive Cloud Cache Isolation DriveCache Pinning the Google Drive desktop client local cache directory to D:\\GoogleDriveCache to prevent OS partition (C: drive) exhaustion and stabilize high-bitrate media streaming I/O."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "AI Photo Memory Studio (MemoryStudio)", "hash": "glossary-sec", "keywords": "AI Photo Memory Studio AI Photo Memory Studio (Read-Only Media Indexer) MemoryStudio Local multimodal web studio mounting Photos/ in strict Read-Only mode to provide YuNet face detection, SFace 128-D clustering, YOLO11n semantic tagging, knowledge-graph RAG search, and Split-Wipe comparison."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "YuNet + SFace 128-D (SFace)", "hash": "glossary-sec", "keywords": "YuNet + SFace 128-D YuNet Face Detector & SFace 128-D Embedding SFace Vision pipeline combining the lightweight YuNet 5-landmark face detector (conf≥0.6) with 128-dimensional L2-normalized SFace embeddings (cosine similarity≥0.360) for identity clustering."}, {"type": "Glossary", "slug": "notes", "num": "07", "chTitle": "Code-Document-Patent-Archive Audit Notes & Interactive Glossary", "title": "Dual-Viewer Split-Wipe (Split-Wipe)", "hash": "glossary-sec", "keywords": "Dual-Viewer Split-Wipe Dual-Viewer Before/After Split-Wipe & Loupe Split-Wipe Interactive comparison viewer featuring a draggable Before/After split-wipe divider, non-destructive EV/color-temperature grading, live RGB histograms, and a synchronized zoom loupe."}];

  const LOGO = `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  } catch {}

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
      ok: SB.cssVar("--ok") || "#2da44e",
      warn: SB.cssVar("--warn") || "#d98a00",
      bad: SB.cssVar("--bad") || "#e0443e",
      red: SB.cssVar("--red") || "#e0443e",
      green: SB.cssVar("--green") || "#2da44e",
      blue: SB.cssVar("--blue") || "#2f6fe0",
      grid: SB.cssVar("--grid") || "rgba(128,128,128,0.12)",
      axis: SB.cssVar("--axis") || "rgba(128,128,128,0.5)",
    };
  };

  // ---------- Mount Topbar + Drawer ----------
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
        <span>KAIST GRAD WORKS &amp; WORKSPACE <small>Interactive Architecture Guidebook</small></span>
      </a>
      <div class="sp"></div>
      <div class="book-search" id="book-search">
        <input type="search" class="book-search-input" id="book-search-input" placeholder="Search (glossary, simulators, sections)…" autocomplete="off" aria-label="Search entire guidebook">
        <div class="book-search-results" id="book-search-results" hidden></div>
      </div>
      <a class="sb-iconbtn series-link" href="https://scholar.google.com/citations?user=H3AQNpAAAAAJ" target="_blank" rel="noopener" title="Google Scholar — Published Papers & Patents">
        <span>🎓 Scholar</span>
      </a>
      <a class="sb-iconbtn series-link" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener" title="Yongjoon Song — Interactive Web Resume / CV">
        <span>📄 Resume</span>
      </a>
      <a class="sb-iconbtn series-link" href="${root}chapters/notes.html" title="Glossary & Code-to-Archive Audit Notes">
        <span>Glossary</span>
      </a>
      <button class="sb-iconbtn sb-lang-toggle" id="sb-lang-btn" aria-label="Switch Language to Korean (KO)" title="Switch Language to Korean (KO)">
        <span class="lg-dim">KO</span><span class="lg-dim">/</span><span class="lg-on">EN</span>
      </button>
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
        <span>Table of Contents (7 Chapters · 3 Pillars)</span>
        <button class="sb-iconbtn" id="sb-close-drawer">Close</button>
      </div>
      <nav class="sb-drawer-list">
        <a href="${root}index.html" class="${slug === "index" ? "active" : ""}">
          <span class="num">HOME</span>
          <span>Guidebook Home · 3 Pillars &amp; 5 Themes Roadmap</span>
        </a>
        ${SB.CHAPTERS.map(c => `
          <a href="${root}chapters/${c.slug}.html" class="${c.slug === slug ? "active" : ""}">
            <span class="num">CH.${c.num}</span>
            <span>${c.title}<div class="sub">${c.desc}</div></span>
          </a>
        `).join("")}
        <div style="margin:14px 10px 6px;padding-top:12px;border-top:1px solid var(--border);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.04em;">PUBLIC PAPERS · PATENTS · PROFILES ↗</div>
        <a href="https://scholar.google.com/citations?user=H3AQNpAAAAAJ" target="_blank" rel="noopener">
          <span class="num">GS</span>
          <span>Google Scholar Profile<div class="sub">4 Published Papers &amp; KR/US Patent Families</div></span>
        </a>
        <a href="https://doi.org/10.1109/OJEMB.2021.3076156" target="_blank" rel="noopener">
          <span class="num">P1</span>
          <span>IEEE OJEMB (Apr 2021)<div class="sub">Local Alignment of DNA Sequence Based on DRL</div></span>
        </a>
        <a href="https://doi.org/10.1109/OJEMB.2021.3055424" target="_blank" rel="noopener">
          <span class="num">P2</span>
          <span>IEEE OJEMB (Jan 2021)<div class="sub">Pairwise Heuristic Sequence Alignment Based on DRL</div></span>
        </a>
        <a href="https://ieeexplore.ieee.org/document/8333425" target="_blank" rel="noopener">
          <span class="num">P3</span>
          <span>IEEE BHI (2018)<div class="sub">Evolutionary Distance Based on Word Frequency Variation</div></span>
        </a>
        <a href="https://ieeexplore.ieee.org/document/8037707" target="_blank" rel="noopener">
          <span class="num">P4</span>
          <span>IEEE EMBC (2017)<div class="sub">Classification of Genomic Sequences (Repeated K-Word)</div></span>
        </a>
        <a href="https://patents.google.com/patent/US12496917B2/en" target="_blank" rel="noopener">
          <span class="num">US</span>
          <span>US 12,496,917 B2 (Granted)<div class="sub">Vehicle Location-Based WPT Inverter Power Control</div></span>
        </a>
        <a href="https://patents.google.com/patent/KR20210092933A/en" target="_blank" rel="noopener">
          <span class="num">KR</span>
          <span>KR 10-2021-0092933 A<div class="sub">3D Wireless Power Transfer Control via Image Recognition</div></span>
        </a>
        <a href="https://patents.google.com/patent/US20190385696A1/en" target="_blank" rel="noopener">
          <span class="num">US</span>
          <span>US 2019/0385696 A1<div class="sub">Predicting Disease Risk from Complex Genetic Info</div></span>
        </a>
        <a href="https://github.com/syjqkrtk" target="_blank" rel="noopener">
          <span class="num">GIT</span>
          <span>github.com/syjqkrtk<div class="sub">18 Public Repositories (DQNalign · REminerII · WPT)</div></span>
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
        } catch {}
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
        ${prev ? `<a class="prev" href="${prev.slug}.html"><span class="dir">← Previous Chapter · CH.${prev.num}</span><span class="t">${prev.title}</span></a>` : `<span></span>`}
        ${next ? `<a class="next" href="${next.slug}.html"><span class="dir">Next Chapter · CH.${next.num} →</span><span class="t">${next.title}</span></a>` : `<a class="next" href="../index.html"><span class="dir">Completed 🎉</span><span class="t">Back to Guidebook Home</span></a>`}
      `;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `GoogleDrive Master Workspace (Development · Documents · Photos) · Interactive Architecture Guidebook · Build 2026-11-02 (<code>c1f9ffd</code>) · Generated by <code>docs/build_spec_portal.py</code>`;
      main.appendChild(foot);
    });
  }

  // ---------- Collapsible Details ----------
  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "Expand Derivation & Deep Dive";
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
    return { redraw: schedule, canvas: c, ctx };
  };

  // ---------- Simple 2D Plot Helper ----------
  SB.chart = function (ctx, W, H, P, opts) {
    const pad = Object.assign({ l: 54, r: 18, t: 20, b: 36 }, opts.pad || {});
    const pw = W - pad.l - pad.r;
    const ph = H - pad.t - pad.b;
    const [x0, x1] = opts.xDomain;
    const [y0, y1] = opts.yDomain;
    const xLog = !!opts.xLog;
    const yLog = !!opts.yLog;
    const tx = x => xLog ? (Math.log10(x) - Math.log10(x0)) / (Math.log10(x1) - Math.log10(x0)) : (x - x0) / (x1 - x0);
    const ty = y => yLog ? (Math.log10(y) - Math.log10(y0)) / (Math.log10(y1) - Math.log10(y0)) : (y - y0) / (y1 - y0);
    const px = x => pad.l + Math.max(0, Math.min(1, tx(x))) * pw;
    const py = y => pad.t + (1 - Math.max(0, Math.min(1, ty(y)))) * ph;

    ctx.strokeStyle = P.grid;
    ctx.lineWidth = 1;
    ctx.fillStyle = P.dim;
    ctx.font = "11px 'JetBrains Mono', monospace";

    const xTicks = opts.xTicks || 5;
    const xList = Array.isArray(xTicks) ? xTicks : Array.from({ length: xTicks + 1 }, (_, i) => x0 + (x1 - x0) * (i / xTicks));
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    xList.forEach(v => {
      const x = px(v);
      ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ph); ctx.stroke();
      const lbl = opts.xFormat ? opts.xFormat(v) : (Math.abs(v) >= 100 ? v.toFixed(0) : Number(v.toPrecision(3)));
      ctx.fillText(lbl, x, pad.t + ph + 6);
    });

    const yTicks = opts.yTicks || 4;
    const yList = Array.isArray(yTicks) ? yTicks : Array.from({ length: yTicks + 1 }, (_, i) => y0 + (y1 - y0) * (i / yTicks));
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    yList.forEach(v => {
      const y = py(v);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + pw, y); ctx.stroke();
      const lbl = opts.yFormat ? opts.yFormat(v) : (Math.abs(v) >= 100 ? v.toFixed(0) : Number(v.toPrecision(3)));
      ctx.fillText(lbl, pad.l - 6, y);
    });

    ctx.strokeStyle = P.axis;
    ctx.strokeRect(pad.l, pad.t, pw, ph);

    ctx.fillStyle = P.dim;
    ctx.font = "11.5px Pretendard, sans-serif";
    if (opts.xLabel) {
      ctx.textAlign = "center"; ctx.textBaseline = "bottom";
      ctx.fillText(opts.xLabel, pad.l + pw / 2, H - 3);
    }
    if (opts.yLabel) {
      ctx.save();
      ctx.translate(13, pad.t + ph / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText(opts.yLabel, 0, 0);
      ctx.restore();
    }

    return {
      pad, pw, ph, px, py,
      line(points, color, width = 2.2, dash = []) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(pad.l, pad.t, pw, ph);
        ctx.clip();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.setLineDash(dash);
        ctx.beginPath();
        points.forEach(([x, y], i) => {
          const X = px(x), Y = py(y);
          if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
        });
        ctx.stroke();
        ctx.restore();
      },
      fillUnder(points, color) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(pad.l, pad.t, pw, ph);
        ctx.clip();
        ctx.fillStyle = color;
        ctx.beginPath();
        points.forEach(([x, y], i) => {
          const X = px(x), Y = py(y);
          if (i === 0) ctx.moveTo(X, pad.t + ph);
          ctx.lineTo(X, Y);
        });
        if (points.length) ctx.lineTo(px(points[points.length - 1][0]), pad.t + ph);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      },
      dot(x, y, color, r = 4, label) {
        const X = px(x), Y = py(y);
        ctx.fillStyle = color;
        ctx.beginPath(); ctx.arc(X, Y, r, 0, Math.PI * 2); ctx.fill();
        if (label) {
          ctx.font = "600 11px 'JetBrains Mono', monospace";
          ctx.fillStyle = color;
          ctx.textAlign = "left"; ctx.textBaseline = "bottom";
          ctx.fillText(label, X + 6, Y - 4);
        }
      },
      vline(x, color, label) {
        const X = px(x);
        ctx.save();
        ctx.strokeStyle = color; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(X, pad.t); ctx.lineTo(X, pad.t + ph); ctx.stroke();
        if (label) {
          ctx.fillStyle = color; ctx.font = "11px 'JetBrains Mono', monospace";
          ctx.textAlign = "left"; ctx.textBaseline = "top";
          ctx.fillText(label, X + 4, pad.t + 4);
        }
        ctx.restore();
      }
    };
  };

  // ---------- Control Wiring ----------
  SB.range = function (id, outId, fmt, onChange) {
    const el = document.getElementById(id);
    const out = outId ? document.getElementById(outId) : null;
    if (!el) return () => 0;
    const update = () => {
      const v = parseFloat(el.value);
      if (out) out.textContent = fmt ? fmt(v) : v;
      if (onChange) onChange(v);
    };
    el.addEventListener("input", update);
    update();
    return () => parseFloat(el.value);
  };

  SB.seg = function (containerId, onChange) {
    const box = document.getElementById(containerId);
    if (!box) return () => "";
    let cur = box.querySelector("button.on")?.dataset.value || box.querySelector("button")?.dataset.value;
    box.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        box.querySelectorAll("button").forEach(b => b.classList.toggle("on", b === btn));
        cur = btn.dataset.value;
        if (onChange) onChange(cur);
      });
    });
    return () => cur;
  };

  SB.stat = function (id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // ---------- Three.js Lazy Loader + Scene Bootstrap ----------
  let threePromise = null;
  SB.loadThree = function () {
    if (window.THREE) return Promise.resolve(window.THREE);
    if (threePromise) return threePromise;
    threePromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js";
      s.onload = () => resolve(window.THREE);
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return threePromise;
  };

  SB.three = async function (containerOrId, heightOrOpts, setupFn) {
    const host = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    if (!host) return null;
    const opts = typeof heightOrOpts === "number" ? { height: heightOrOpts } : (heightOrOpts || {});
    const H = opts.height || 340;
    host.style.height = H + "px";

    let THREE;
    try { THREE = await SB.loadThree(); }
    catch {
      host.innerHTML = `<div style="padding:24px;color:var(--text-dim)">Failed to load 3D library.</div>`;
      return null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.innerHTML = "";
    host.appendChild(renderer.domElement);

    const hint = document.createElement("div");
    hint.className = "sim-overlay";
    hint.textContent = opts.hint || "Drag: Rotate · Wheel: Zoom";
    host.appendChild(hint);

    const amb = new THREE.AmbientLight(0xffffff, 0.72);
    const dir1 = new THREE.DirectionalLight(0xffffff, 0.78);
    dir1.position.set(6, 9, 7);
    const dir2 = new THREE.DirectionalLight(0x88aaff, 0.32);
    dir2.position.set(-6, -4, -5);
    scene.add(amb, dir1, dir2);

    const state = {
      theta: opts.theta ?? 0.55,
      phi: opts.phi ?? 1.05,
      radius: opts.radius ?? 9.5,
      target: new THREE.Vector3(...(opts.target || [0, 0, 0])),
      autoRotate: opts.autoRotate ?? true,
      dragging: false, lx: 0, ly: 0,
    };
    function updateCamera() {
      const sp = Math.sin(state.phi), cp = Math.cos(state.phi);
      const st = Math.sin(state.theta), ct = Math.cos(state.theta);
      camera.position.set(
        state.target.x + state.radius * sp * st,
        state.target.y + state.radius * cp,
        state.target.z + state.radius * sp * ct
      );
      camera.lookAt(state.target);
    }
    updateCamera();

    const dom = renderer.domElement;
    dom.style.cursor = "grab";
    dom.addEventListener("pointerdown", e => {
      state.dragging = true; state.autoRotate = false;
      state.lx = e.clientX; state.ly = e.clientY;
      dom.setPointerCapture(e.pointerId);
      dom.style.cursor = "grabbing";
    });
    dom.addEventListener("pointermove", e => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lx, dy = e.clientY - state.ly;
      state.lx = e.clientX; state.ly = e.clientY;
      state.theta -= dx * 0.008;
      state.phi = Math.max(0.18, Math.min(Math.PI - 0.18, state.phi - dy * 0.008));
      updateCamera();
    });
    const endDrag = () => { state.dragging = false; dom.style.cursor = "grab"; };
    dom.addEventListener("pointerup", endDrag);
    dom.addEventListener("pointercancel", endDrag);
    dom.addEventListener("wheel", e => {
      e.preventDefault();
      state.radius = Math.max(3.5, Math.min(26, state.radius * (1 + Math.sign(e.deltaY) * 0.08)));
      updateCamera();
    }, { passive: false });

    function makeLabel(text, color = "#ffffff", scale = 1.0) {
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      ctx.font = "600 28px 'Pretendard Variable', Pretendard, sans-serif";
      const m = ctx.measureText(text);
      const pad = 22;
      c.width = Math.ceil(m.width + pad * 2);
      c.height = 54;
      ctx.font = "600 26px 'Pretendard Variable', Pretendard, sans-serif";
      ctx.fillStyle = "rgba(15, 21, 34, 0.78)";
      const r = 14;
      ctx.beginPath();
      ctx.moveTo(r, 0); ctx.lineTo(c.width - r, 0);
      ctx.quadraticCurveTo(c.width, 0, c.width, r);
      ctx.lineTo(c.width, c.height - r);
      ctx.quadraticCurveTo(c.width, c.height, c.width - r, c.height);
      ctx.lineTo(r, c.height);
      ctx.quadraticCurveTo(0, c.height, 0, c.height - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.fillStyle = "#f2f5fb";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, c.width / 2, c.height / 2 + 1);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
      const sp = new THREE.Sprite(mat);
      sp.scale.set((c.width / 120) * scale, (c.height / 120) * scale, 1);
      return sp;
    }

    function resize() {
      const w = Math.max(260, host.clientWidth);
      const h = Math.max(200, host.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    window.addEventListener("resize", resize);
    resize();

    const tickFns = [];
    const api = {
      THREE, scene, camera, renderer, state, updateCamera, makeLabel,
      onTick(fn) { tickFns.push(fn); },
      onFrame(fn) { tickFns.push((t, dt) => fn(dt, t)); },
      label(text, pos, color) {
        const sp = makeLabel(text, color || "#38b6f5", 0.95);
        if (Array.isArray(pos)) sp.position.set(pos[0], pos[1], pos[2]);
        else if (pos) sp.position.copy(pos);
        scene.add(sp);
        return sp;
      },
      material(opts = {}) {
        return new THREE.MeshStandardMaterial(Object.assign({ roughness: 0.35, metalness: 0.15 }, opts));
      }
    };
    if (setupFn) setupFn(api);

    let visible = true;
    const io = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    io.observe(host);

    let t0 = performance.now();
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      if (state.autoRotate && !state.dragging) {
        state.theta += dt * (opts.rotateSpeed ?? 0.22);
        updateCamera();
      }
      for (const fn of tickFns) fn(now * 0.001, dt);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(loop);
    return api;
  };

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
      currentHits = scored.slice(0, 12).map(s => s.it);
      activeIdx = 0;

      if (!currentHits.length) {
        box.innerHTML = `<div class="sr-empty">No results for "${q}"</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = currentHits.map((it, idx) => {
        const tc = (it.type === "Simulator") ? "sim" : ((it.type === "Glossary") ? "gl" : "");
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
    } catch {}

    // Rewrite repo source code pills (<a class="src">) to public GitHub repos / Scholar / Resume when hosted on GitHub Pages
    if (location.protocol === "http:" || location.protocol === "https:") {
      const publicRepoMap = [
        ["DQNalign", "https://github.com/syjqkrtk/DQNalign"],
        ["REminerII", "https://github.com/syjqkrtk/REminerII"],
        ["REDNN", "https://github.com/syjqkrtk/Bio"],
        ["RERNN", "https://github.com/syjqkrtk/Bio"],
        ["PixelRE", "https://github.com/syjqkrtk/Bio"],
        ["InsilicoRE", "https://github.com/syjqkrtk/Bio"],
        ["EvolDist", "https://github.com/syjqkrtk/EvolDist"],
        ["clustering205", "https://github.com/syjqkrtk/Clustering205"],
        ["1092x", "https://github.com/syjqkrtk/ACGTGray"],
        ["ACGTgray", "https://github.com/syjqkrtk/ACGTGray"],
        ["AlignmentGenerator", "https://github.com/syjqkrtk/AlignmentGenerator"],
        ["Heuristic alignment", "https://github.com/syjqkrtk/HeuristicAlignment"],
        ["REMinerPattern", "https://github.com/syjqkrtk/REMinerPattern"],
        ["RepeatLengthPdf", "https://github.com/syjqkrtk/RepeatLengthPdf"],
        ["ObjectDetection", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["FIR", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["edgetpu_models", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["Telematics_and_GPS", "https://github.com/syjqkrtk/EVGPSforWPT"],
        ["1_Wireless_Power_Transfer_and_EV", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["2_Bioinformatics_and_Genomics", "https://github.com/syjqkrtk/DQNalign"],
        ["WinnerIIChannel", "https://github.com/syjqkrtk/WinnerIIChannel"],
        ["Embedded_Casio_Engines", "https://github.com/syjqkrtk/CASIO"],
        ["4_Specialty_Systems", "https://github.com/syjqkrtk/WinnerIIChannel"],
        ["Documents/Resume", "https://yjqkrtk-ux.github.io/"],
        ["PhD_Administration", "https://scholar.google.com/citations?user=H3AQNpAAAAAJ"],
        ["Samsung_CIS", "https://yjqkrtk-ux.github.io/isocell/"]
      ];
      document.querySelectorAll("a.src[href]").forEach(a => {
        const h = a.getAttribute("href") || "";
        if (h.startsWith("../")) {
          const rel = h.replace(/^(\.\.\/)+/, "");
          let target = "https://github.com/syjqkrtk";
          for (const [kw, url] of publicRepoMap) {
            if (rel.includes(kw)) {
              target = url;
              break;
            }
          }
          a.href = target;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
