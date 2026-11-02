window.BOOK_GLOSSARY = {
  "version": 1,
  "generated_by": "docs/build_spec_portal.py (en)",
  "terms": [
    {
      "ko": "Separation of Concerns Charter",
      "en": "3-Pillar Repository Isolation Rule",
      "abbr": "SoC",
      "def": "Rule 1 of the GoogleDrive master workspace charter: strictly isolating research & engineering code in Development/, academic/career/administrative records in Documents/, and lifetime media originals in Photos/.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Zero-ZIP Policy",
      "en": "Uncompressed Media Exposure Mandate",
      "abbr": "Zero-ZIP",
      "def": "Rule 2 of the workspace charter: prohibiting any .zip/.tar/.7z/.rar archive files inside Photos/ and requiring immediate extraction so cloud photo backup clients never miss media hidden inside archives.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Zero Non-Media Policy",
      "en": "Non-Media Document Exclusion Rule",
      "abbr": "Zero-Doc",
      "def": "Rule 3 of the workspace charter: blocking non-media files (.hwp, .pdf, .pptx, .xlsx, .apk) from Photos/ and routing them to Development/ or Documents/.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Purity of Daily Feed",
      "en": "Camera-Only Chronological Feed Rule",
      "abbr": "DailyPurity",
      "def": "Rule 4 of the workspace charter: preserving only direct camera-captured photos and videos (YYYYMMDD_HHMMSS) inside Photos/Daily/20XX/ while isolating events, travel, business trips, screenshots, and web downloads into dedicated top-level folders.",
      "chapters": [
        "overview",
        "archive"
      ]
    },
    {
      "ko": "Single Source of Truth",
      "en": "Build-Time Code & Archive Parsing Principle",
      "abbr": "SSOT",
      "def": "Engineering principle where all guidebook parameters, mathematical constants, and file paths are parsed and verified directly from actual Python/C++/MATLAB/JSON/Markdown sources at build time rather than copied by hand.",
      "chapters": [
        "overview",
        "notes"
      ]
    },
    {
      "ko": "40-Submodule Monorepo",
      "en": "Git Submodule Research Monorepo",
      "abbr": "GitSubmodule",
      "def": "Repository architecture at the root of Development/ (.gitmodules) synchronizing 40 independent Git repositories across 4 research themes under a unified commit tree.",
      "chapters": [
        "overview",
        "notes"
      ]
    },
    {
      "ko": "Deep RL Sequence Alignment",
      "en": "Deep Reinforcement Learning Sequence Alignment",
      "abbr": "DQNAlign",
      "def": "Linear-time O(L) sequence alignment framework (IEEE OJEMB 2021) that observes only a fixed local sub-alignment window (W×W) instead of the global O(N1·N2) DP grid, selecting Forward (0), Insertion (1), or Deletion (2) at each step.",
      "chapters": [
        "bio",
        "overview"
      ]
    },
    {
      "ko": "Markov Decision Process",
      "en": "Local Sliding-Window Alignment MDP",
      "abbr": "MDP",
      "def": "Mathematical decision model defining the alignment head coordinates (x, y) as state, the local W×W one-hot window tensor as observation, step direction a∈{0,1,2} as action, and match/mismatch/indel scores as reward.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Dueling Double DQN",
      "en": "Dueling Double Deep Q-Network",
      "abbr": "D3QN",
      "def": "Deep RL architecture that splits hidden features into state-value V(s) and action-advantage A(s,a) streams while decoupling action selection (mainQN) from value evaluation (targetQN) to suppress Q-value overestimation bias.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Exact Match Skip",
      "en": "Exact Match Fast-Forward Heuristic",
      "abbr": "Skip",
      "def": "Fast-forward heuristic (Agent.skip) that bypasses neural network inference and advances diagonally whenever consecutive nucleotide pairs match exactly, accelerating alignment by orders of magnitude.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Zipper Alignment",
      "en": "Profile-to-Profile Zipper MSA",
      "abbr": "Zipper",
      "def": "Extension of DQNAlign for Multiple Sequence Alignment (MSA) that progressively merges sequence profiles by interlocking local sliding windows like a zipper.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Seed-and-Extend",
      "en": "Seed-and-Extend Genomic Repeat Mining",
      "abbr": "REminerII",
      "def": "High-speed C++ genomic repeat mining algorithm combining fixed-length WORD_SIZE (14 bp) seed hashing and mismatch tolerance (ALLOW_SIZE=1) with bidirectional Greedy X-drop extension.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "2-Bit Nucleotide Packing",
      "en": "2-Bit Nucleotide Bit-Packing",
      "abbr": "2-Bit",
      "def": "Encoding A, C, G, T bases as 2-bit integers to pack 4 nucleotides per byte and compute reverse-complement sequences at hardware speed via bitwise operations.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Jukes-Cantor Evolutionary Distance",
      "en": "Jukes-Cantor Substitution Correction Model",
      "abbr": "JC69",
      "def": "Phylogenetic model estimating true evolutionary distance d = -3/4 ln(1 - 4/3 p) from observed substitution proportion p by correcting for multiple superimposed mutations.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Neural Mutual Information",
      "en": "Neural Mutual Information Coevolution",
      "abbr": "NMI",
      "def": "Estimating coevolutionary mutual information between residue pairs in protein Multiple Sequence Alignments (MSAs) via neural networks to predict 3D contact maps.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Cancer Biomarker Selection",
      "en": "Cancer Biomarker Feature Selection & DNN",
      "abbr": "REDNN",
      "def": "Clinical genomics pipeline (US 2019/0385696 A1) selecting key somatic mutation and repeat-element markers via F-statistics, mutual information, and tree importance to classify cancer risk.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Resonant Inductive WPT",
      "en": "Resonant Inductive Wireless Power Transfer",
      "abbr": "3D WPT",
      "def": "Wireless power transfer system delivering up to 1 kW across meter-scale air gaps via magnetic resonant coupling between multi-coil transmitters and a receiver coil.",
      "chapters": [
        "wpt",
        "overview"
      ]
    },
    {
      "ko": "Tsai Camera Calibration",
      "en": "Tsai Two-Stage 11-DoF Camera Calibration",
      "abbr": "Tsai 11-DoF",
      "def": "11-DoF pinhole camera calibration algorithm estimating the 3×4 projection matrix K and extrinsic pose from 3D world reference points and 2D pixel correspondences via least-squares pseudoinverse.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "Binocular Skew-Ray Triangulation",
      "en": "Binocular Skew-Ray Midpoint Triangulation",
      "abbr": "3D Stereo",
      "def": "3D localization method that back-projects 2D pixel coordinates from two calibrated cameras into 3D rays and computes the closest midpoint between the two skew rays to reconstruct (X,Y,Z).",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "Multimodal Edge Safety Interlock",
      "en": "Multimodal Edge Vision Safety Interlock",
      "abbr": "WPT-Safety",
      "def": "Patented safety loop (US 12,496,917 B2) fusing Coral EdgeTPU RGB MobileNet SSD detection with FLIR Lepton LWIR (80×60) thermal imaging to immediately cut transmitter power upon human entry into high-EMF zones.",
      "chapters": [
        "wpt",
        "overview"
      ]
    },
    {
      "ko": "FLIR Lepton Thermal Sensor",
      "en": "FLIR Lepton Long-Wave Infrared Sensor",
      "abbr": "LWIR",
      "def": "Long-wave infrared (8–14 μm) 80×60 thermal imaging sensor that detects human body temperature robustly regardless of ambient illumination or visual clutter.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "Coral EdgeTPU",
      "en": "Google Coral Edge Tensor Processing Unit",
      "abbr": "EdgeTPU",
      "def": "Low-power ASIC neural accelerator executing INT8-quantized MobileNet SSD V1/V2 TensorFlow Lite object detection models in a few milliseconds.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "On-Line Electric Vehicle",
      "en": "85 kHz Dynamic Wireless Charging EV Bus",
      "abbr": "OLEV",
      "def": "KAIST-developed electric bus system receiving wireless power at 85 kHz from road-embedded segmented power rails while in motion or stationary.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "UTM Coordinate Projection",
      "en": "Universal Transverse Mercator Projection",
      "abbr": "UTM",
      "def": "Geodetic projection mapping WGS84 latitude/longitude into metric 2D Cartesian coordinates (meters) for accurate lane deviation, velocity, and inverter pre-heating ETA calculations.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "Simultaneous Wireless Info & Power",
      "en": "Simultaneous Wireless Information and Power Transfer",
      "abbr": "SWIPT",
      "def": "Co-optimizing RF energy harvesting and information decoding over a shared wireless waveform via optimal time-switching (TS) or power-splitting (PS) ratios.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "DirectInput Scancode Hooking",
      "en": "Win32 DirectInput Hardware ScanCode Injection",
      "abbr": "ScanCode",
      "def": "Injecting hardware keyboard controller scancodes (e.g., 0x1E) via the Win32 SendInput API rather than virtual keycodes (VK) to operate reliably inside DirectX polling loops.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "13-State Priority Vision FSM",
      "en": "13-State Priority Finite State Machine",
      "abbr": "PyMaple FSM",
      "def": "Vision-driven finite state machine orchestrating minimap character tracking, rune cooldown timers, and Faster R-CNN security object detection across 13 prioritized states.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Absorbing Markov Chain",
      "en": "Absorbing Markov Chain Fundamental Matrix",
      "abbr": "AMC",
      "def": "Stochastic model treating target completion (e.g., 22-star enhancement) as an absorbing state and solving the fundamental matrix N = (I - Q)^(-1) in closed form for exact expected trials and cost.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Chance-Time State Augmentation",
      "en": "Chance-Time State Space Augmentation",
      "abbr": "StarForce",
      "def": "Augmenting the state space as (level, consecutive_drops) so the non-Markovian Chance Time rule (100% success after 2 consecutive drops) becomes an exact first-order Absorbing Markov Chain.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Lophago Combinatorial Solver",
      "en": "LostArk Engraving & Ability Stone Optimizer",
      "abbr": "Lophago",
      "def": "Constraint-satisfaction backtracking solver enumerating all valid 5-accessory Relic/Ancient engraving combinations that satisfy target activation vectors (e.g., 33333 or 333331).",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Casio FX-9860G VRAM Engine",
      "en": "Casio FX-9860G 128x64 1-Bit VRAM Engine",
      "abbr": "FX-SDK",
      "def": "Bare-metal C game engine (RPG/RTS) on the Renesas SuperH-3 CPU and 128×64 1-bit monochrome LCD (1,024-byte VRAM) using sub-byte bit-shifted sprite blitting and double buffering.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "WINNER II 3D MIMO Channel",
      "en": "WINNER II / 3GPP 3D Geometry-Based Stochastic Channel Model",
      "abbr": "WINNER II",
      "def": "11-step geometry-based stochastic channel model synthesizing 3D azimuth/elevation multipath clusters, cross-polarization ratios (XPR), array responses, and 60 GHz millimeter-wave backhaul capacity.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Refund Sign-Preservation Rule",
      "en": "Refund Sign-Preservation Accounting Invariant",
      "abbr": "-tx['amount']",
      "def": "Core ledger invariant (spend(tx) = -tx['amount']) that preserves negative/positive signs on cancellations and refunds instead of taking abs(), ensuring refunds accurately offset gross category spend.",
      "chapters": [
        "life",
        "notes"
      ]
    },
    {
      "ko": "Pure Spend vs. Fixed Burden Split",
      "en": "Pure Consumption vs. Financial Burden Dual-Track",
      "abbr": "2-Track",
      "def": "Dual-track financial aggregation architecture separating rigid fixed financial obligations (Track B) from variable living expenses (Track A) to prevent distortion of monthly operating metrics.",
      "chapters": [
        "life"
      ]
    },
    {
      "ko": "Zero-Dependency OOXML Builder",
      "en": "Zero-Dependency OpenXML (.xlsx) Builder",
      "abbr": "OOXML",
      "def": "Lightweight Excel generator assembling [Content_Types].xml, styles.xml, and multi-sheet worksheet XMLs directly via Python's standard zipfile module with zero external dependencies.",
      "chapters": [
        "life"
      ]
    },
    {
      "ko": "Offline Map Web Planner",
      "en": "Offline-First JSON & Leaflet Web Planner",
      "abbr": "WebPlanner",
      "def": "Responsive single-page application combining a curated 100-POI JSON database, day-by-day route timelines, budget calculators, and interactive Leaflet map markers.",
      "chapters": [
        "life",
        "archive"
      ]
    },
    {
      "ko": "Automated 16:9 PPTX Builder",
      "en": "Automated 16:9 Widescreen PPTX Deck Builder",
      "abbr": "TripPPTX",
      "def": "Programmatic presentation engine using python-pptx to assemble dark-navy headers, KPI cards, itinerary timelines, and comparison tables on a 13.333×7.5-inch widescreen grid.",
      "chapters": [
        "life",
        "archive"
      ]
    },
    {
      "ko": "KAIST Academic & Degree Archive",
      "en": "KAIST Graduate Academic & Laboratory Archive",
      "abbr": "Documents/",
      "def": "Master repository of 1,200+ documents spanning 2010–2021 at KAIST EE: graduate coursework notes (449 files), UMLS weekly lab seminars (430 files), Ph.D. defense records (129 files), and lab administration (220+ files).",
      "chapters": [
        "archive",
        "overview",
        "notes"
      ]
    },
    {
      "ko": "Graduate Coursework Archive",
      "en": "KAIST EE & Physics Coursework Archive",
      "abbr": "Coursework",
      "def": "Archive of lecture notes, problem set solutions, and term projects across 15+ KAIST graduate courses including EE405 Electronics Design Lab, EE686 Wireless Networks, EE528 Information Theory, and EE827 Convex Optimization.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "UMLS Lab Seminar Archive",
      "en": "Communication & Systems Lab Weekly Seminar Archive",
      "abbr": "LabMeetings",
      "def": "Collection of 430 weekly research progress reports and journal club decks (2010–2020) from the KAIST UMLS Lab (Prof. Dong-Ho Cho), covering Averaged-DQN, Minimap2, MoleculeNet, and 85 kHz OLEV control.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "Ph.D. Administration Archive",
      "en": "PhD Qualifying Exam, Proposal & Defense Archive",
      "abbr": "PhD-Admin",
      "def": "Official academic record repository preserving Ph.D. Qualifying Exam (QE) papers, thesis proposal reports, final defense committee approvals, the Ph.D. dissertation PDF, and BK21 Plus research records.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "Resume Deploy Parity Rule",
      "en": "Resume Master-to-Deploy Parity Rule",
      "abbr": "DeployParity",
      "def": "Governance rule requiring 100% byte-for-byte identity between the master Web CV (Documents/Resume/resume_yongjoon_song.html) and the GitHub Pages deployment copy (deploy/index.html), verified for 2-page A4 print layout.",
      "chapters": [
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Privacy Isolation Gate",
      "en": "Personal Identifiable Information Isolation Gate",
      "abbr": "PrivacyGate",
      "def": "Dual-layer security gate combining .gitignore rules and build-time content auditing to ensure Documents/Personal/ records and local ledger files (Data/*.xlsx) are never tracked or exposed.",
      "chapters": [
        "archive",
        "overview",
        "notes"
      ]
    },
    {
      "ko": "20TB Master Media Archive",
      "en": "Google One 20TB Original-Quality Master Media Archive",
      "abbr": "Photos/",
      "def": "Master media repository structured into 7 top-level categories (Events, Travel, Business_Trips, Family_Archive, Daily, Screenshots, Downloads) and synchronized in lossless Original Quality.",
      "chapters": [
        "archive",
        "overview"
      ]
    },
    {
      "ko": "EXIF Timestamp Integrity",
      "en": "EXIF DateTimeOriginal & Filesystem Timestamp Integrity",
      "abbr": "EXIF",
      "def": "Rule 6 mandate preserving original EXIF DateTimeOriginal metadata tags and filesystem creation/modification timestamps without alteration during media sorting or migration.",
      "chapters": [
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Dedicated D-Drive Cloud Cache",
      "en": "Dedicated D-Drive Cloud Cache Isolation",
      "abbr": "DriveCache",
      "def": "Pinning the Google Drive desktop client local cache directory to D:\\GoogleDriveCache to prevent OS partition (C: drive) exhaustion and stabilize high-bitrate media streaming I/O.",
      "chapters": [
        "archive",
        "overview"
      ]
    },
    {
      "ko": "AI Photo Memory Studio",
      "en": "AI Photo Memory Studio (Read-Only Media Indexer)",
      "abbr": "MemoryStudio",
      "def": "Local multimodal web studio mounting Photos/ in strict Read-Only mode to provide YuNet face detection, SFace 128-D clustering, YOLO11n semantic tagging, knowledge-graph RAG search, and Split-Wipe comparison.",
      "chapters": [
        "archive",
        "life"
      ]
    },
    {
      "ko": "YuNet + SFace 128-D",
      "en": "YuNet Face Detector & SFace 128-D Embedding",
      "abbr": "SFace",
      "def": "Vision pipeline combining the lightweight YuNet 5-landmark face detector (conf≥0.6) with 128-dimensional L2-normalized SFace embeddings (cosine similarity≥0.360) for identity clustering.",
      "chapters": [
        "archive",
        "life"
      ]
    },
    {
      "ko": "Dual-Viewer Split-Wipe",
      "en": "Dual-Viewer Before/After Split-Wipe & Loupe",
      "abbr": "Split-Wipe",
      "def": "Interactive comparison viewer featuring a draggable Before/After split-wipe divider, non-destructive EV/color-temperature grading, live RGB histograms, and a synchronized zoom loupe.",
      "chapters": [
        "archive",
        "life"
      ]
    }
  ]
};
