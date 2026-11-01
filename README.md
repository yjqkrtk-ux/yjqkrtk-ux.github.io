# 🌐 Yongjoon Song, Ph.D. — Executive Resume & Interactive Architecture Guidebooks

[![Executive Resume](https://img.shields.io/badge/📄_Executive_Resume-yjqkrtk--ux.github.io-0a84c6?style=for-the-badge)](https://yjqkrtk-ux.github.io/)
[![Samsung S.LSI Guidebook](https://img.shields.io/badge/🏢_ISOCELL_200MP_&_E2E_AI_Remosaic-/isocell/-1428a0?style=for-the-badge)](https://yjqkrtk-ux.github.io/isocell/)
[![AICAMERA Guidebook](https://img.shields.io/badge/📷_AICAMERA_(Edge_LSP)-/aicamera/-7a4ce0?style=for-the-badge)](https://yjqkrtk-ux.github.io/aicamera/)
[![KAIST Grad Works](https://img.shields.io/badge/🎓_KAIST_Ph.D._Research-/gradworks/-1f9d55?style=for-the-badge)](https://yjqkrtk-ux.github.io/gradworks/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yongjoon_Song-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yongjoon-song-52b03a208/)
[![Google Scholar](https://img.shields.io/badge/Scholar-Citations-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=H3AQNpAAAAAJ)

> **Yongjoon Song, Ph.D.** — *Staff Engineer / Technical Leader at Samsung Electronics (S.LSI Sensor Business Team) · Ph.D. in Electrical Engineering, KAIST*  
> This repository hosts my **Executive Web Resume** alongside three **Interactive Engineering Architecture Guidebooks** featuring live mathematical derivations (KaTeX) and browser-based 2D Canvas / 3D WebGL simulators.

---

## 🚀 Live Portals Overview

| Category | Portal Title | Key Technical Scope & Commercial Impact | Live Link |
| :--- | :--- | :--- | :---: |
| **📄 Resume / CV** | **Executive Web Resume** | • **Neural ISP Algorithm & On-Device AI Technical Leader** (Samsung S.LSI, 2021–Present)<br>• **3 Granted US Patents** (`US 12,574,659 B2`, `US 12,363,458 B2`, `US 12,496,917 B2`) & 4 First-Author IEEE Papers<br>• Print-ready A4 layout (`Ctrl+P`) & full career/project record | [**Open →**](https://yjqkrtk-ux.github.io/) |
| **🏢 Industry R&D**<br>*(Samsung S.LSI)* | **ISOCELL 200MP & E2E AI Remosaic Architecture Guidebook** | • **E2E AI Remosaic (Gen 1–4)**: Heterogeneous SoC (`CPU/GPU/NPU/ISP`) turn-key S/W ISP deployed across **30+ global OEM flagships** (**SEC Annual Award 2023 Silver**)<br>• **ISOCELL 200MP Sensors**: `HP5` (0.50µm, world's smallest), `HP3/HP9` (0.56µm, world-first DL Hexadeca 16-cell remosaic), `HP2` (0.60µm, `QMSC` 4× in-sensor zoom on Galaxy S23 Ultra)<br>• **Granted US Patents**: `US 12,574,659 B2` & `US 12,363,458 B2` neural defect restoration | [**Open →**](https://yjqkrtk-ux.github.io/isocell/) |
| **📷 Edge AI Camera**<br>*(Independent R&D)* | **AICAMERA — Latent Signal Processing (LSP) Guidebook** | • **Sensor–SoC Split Inference**: Sony IMX500 In-Sensor NPU (`.rpk`) + Hailo-8 Host NPU (`.hef`, 26 TOPS)<br>• **48× MIPI CSI-2 Payload Compression**: Saturates 30.0 FPS physical sensor ceiling (`25.06 ms` serial latency) with Zero-Shutter-Lag (ZSL) generative capture<br>• **10-Stage C99/Halide ISP & Universal CFA**: Verified lifting, 3A loop, and Bayer/Tetracell/Hexadecacell phase unshuffling | [**Open →**](https://yjqkrtk-ux.github.io/aicamera/) |
| **🎓 Ph.D. Research**<br>*(KAIST EE)* | **KAIST Grad Works & Systems Guidebook** | • **Bioinformatics & DRL**: `DQNAlign` linear-time $O(L)$ deep reinforcement learning DNA alignment (*IEEE OJEMB* 2021) & `REminerII` C++ bit-packed mining (`US 2019/0385696 A1`)<br>• **3D WPT & Edge Vision Safety**: Tsai 11-DoF stereo triangulation + Coral EdgeTPU / FLIR Lepton thermal interlock (**US Patent `12,496,917 B2`**) & 85 kHz OLEV telematics<br>• **Intelligent Automation & 60 GHz MIMO**: Absorbing Markov chains, Casio 1-bit VRAM engine, and WINNER II 3D MIMO | [**Open →**](https://yjqkrtk-ux.github.io/gradworks/) |

---

## 🏢 1. Samsung S.LSI — ISOCELL 200MP & E2E AI Remosaic Guidebook
🔗 **Main Portal**: [**https://yjqkrtk-ux.github.io/isocell/**](https://yjqkrtk-ux.github.io/isocell/)

*An English technical guidebook detailing the public architecture, mathematical models, and interactive simulators corresponding to my Samsung Electronics S.LSI projects (Apr 2021 – Present).*

| Chapter | Title | Core Topics & Interactive Simulators | Link |
| :---: | :--- | :--- | :---: |
| **Home** | **Executive Architecture Map** | End-to-End 200MP Neural ISP pipeline diagram, KPI summary & chapter index | [View](https://yjqkrtk-ux.github.io/isocell/) |
| **Ch.01** | **Sub-Micron 200MP Sensor Physics & Non-Bayer CFA** | Scaling from `0.60µm` (HP2) and `0.56µm` (HP3/HP9) to `0.50µm` (HP5) · Airy disk diffraction limit · **Tetra²pixel (4×4) SNR & MTF Simulator** | [View](https://yjqkrtk-ux.github.io/isocell/chapters/overview.html) |
| **Ch.02** | **E2E AI Remosaic (Gen 1–4) — Turn-Key S/W ISP Platform** | Overcoming the 3.0s serial 200MP capture bottleneck · `CPU/GPU/NPU/ISP` parallelization (up to 3× faster) · Gen 4 DL Multi-Frame Remosaic (HONOR Magic 9) · **HetSoC Timeline Simulator** | [View](https://yjqkrtk-ux.github.io/isocell/chapters/e2e_remosaic.html) |
| **Ch.03** | **ISOCELL 200MP Lineup — HP5, HP3/HP9 & HP2 Remosaic** | World's smallest 200MP `HP5` (`0.50µm`) · World-first DL Hexadeca 16-cell remosaic (`HP3/HP9`, vivo X200 Pro ZEISS 200MP Tele) · `HP2` `QMSC` 4× In-Sensor Zoom (Galaxy S23 Ultra) · **Siemens Star Zoom Lab** | [View](https://yjqkrtk-ux.github.io/isocell/chapters/isocell_sensors.html) |
| **Ch.04** | **Granted US Patents — Neural Bad-Pixel & Cluster Restoration** | **US 12,574,659 B2** (Intermediate-layer bad-pixel positional injection) & **US 12,363,458 B2** (DL cluster bad-pixel correction) · **Interactive Defect Recovery Simulator** | [View](https://yjqkrtk-ux.github.io/isocell/chapters/patents_bpc.html) |
| **Ch.05** | **Commercial OEM Matrix, IP Governance & Glossary** | Verified 30+ OEM flagship table (Samsung, HONOR, vivo, Xiaomi), public citations, IP compliance statement & **Interactive Neural ISP Glossary** | [View](https://yjqkrtk-ux.github.io/isocell/chapters/notes.html) |

---

## 📷 2. AICAMERA — Heterogeneous Edge AI Camera & Latent Signal Processing
🔗 **Main Portal**: [**https://yjqkrtk-ux.github.io/aicamera/**](https://yjqkrtk-ux.github.io/aicamera/)

| Chapter | Title | Core Topics & Interactive Simulators | Link |
| :---: | :--- | :--- | :---: |
| **Home** | **System Architecture Roadmap** | End-to-End pipeline from photons to latent tensors ($\hat{z}$) and real-time software ISP | [View](https://yjqkrtk-ux.github.io/aicamera/) |
| **Ch.01** | **Heterogeneous Edge Camera & MIPI Bottleneck** | MIPI CSI-2 serialization bandwidth calculator · Sony IMX500 (`.rpk`) & Hailo-8 (`.hef`) dual-NPU stack | [View](https://yjqkrtk-ux.github.io/aicamera/chapters/overview.html) |
| **Ch.02** | **Latent Signal Processing (LSP)** | Asymmetric split encoder (`Stage A` 9.59K params on sensor + `Stage B` on SoC) · 48× bus compression · 30 FPS preview & Zero-Shutter-Lag (ZSL) SD 2.1 ControlNet capture | [View](https://yjqkrtk-ux.github.io/aicamera/chapters/lsp.html) |
| **Ch.03** | **Software ISP & Halide/NPU Optimization** | 10-stage C99 reference ISP interactive tuner (`DPC·BLC·LSC·ANF·AWB·Demosaic·CCM·Gamma·CSC·EEH`) · 3A loop · 4-Tier Halide/GPU acceleration | [View](https://yjqkrtk-ux.github.io/aicamera/chapters/isp.html) |
| **Ch.04** | **Universal CFA — Phase-Aware In-Sensor Compression** | 3D stacked CMOS sensor cross-section viewer · Bayer (2×2), Tetracell (4×4), and Hexadecacell (8×8) `PixelUnshuffle` phase decomposition | [View](https://yjqkrtk-ux.github.io/aicamera/chapters/ucfa.html) |
| **Ch.05** | **Audit Notes & Interactive Glossary** | 23 code-to-paper verification audit entries & 45+ searchable technical terms | [View](https://yjqkrtk-ux.github.io/aicamera/chapters/notes.html) |

---

## 🎓 3. KAIST Grad Works — Ph.D. Research & Engineering Systems
🔗 **Main Portal**: [**https://yjqkrtk-ux.github.io/gradworks/**](https://yjqkrtk-ux.github.io/gradworks/)

| Chapter | Title | Core Topics & Interactive Simulators | Link |
| :---: | :--- | :--- | :---: |
| **Home** | **Master Workspace Roadmap** | 5 engineering themes (40 submodules) & academic/media archive architecture map | [View](https://yjqkrtk-ux.github.io/gradworks/) |
| **Ch.01** | **Master Workspace & 3-Pillar Architecture** | Interactive 3-Pillar topology explorer & 40-submodule dependency map | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/overview.html) |
| **Ch.02** | **Bioinformatics & Deep RL Sequence Alignment** | `DQNAlign` local-window MDP & Exact Match Skip simulator (*IEEE OJEMB* 2021) · `REminerII` 2-bit packing · `JC69` evolutionary distance | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/bio.html) |
| **Ch.03** | **3D Wireless Power Transfer & OLEV Telematics** | Tsai 11-DoF stereo 3D triangulation & Coral EdgeTPU + FLIR Lepton thermal safety interlock (**US Patent `12,496,917 B2`**) · 85 kHz OLEV UTM inverter pre-heating | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/wpt.html) |
| **Ch.04** | **Intelligent Automation, Embedded & 60 GHz 3D MIMO** | 13-state vision FSM · $31\times 31$ Absorbing Markov Chain exact solver ($N=(I-Q)^{-1}$) · Casio FX-9860G 1-bit VRAM engine · WINNER II 3D MIMO | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/automation.html) |
| **Ch.05** | **Data Pipelines, Web Planners & Vision Studio** | Dual-track ledger analytics & zero-dependency OOXML `.xlsx` builder · Offline Leaflet trip planner · YuNet + SFace 128-D embedding studio | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/life.html) |
| **Ch.06** | **KAIST Academic Archive & Governance** | KAIST graduate coursework (449 docs), UMLS weekly lab seminars (430 docs), Ph.D. dissertation records & archive integrity simulator | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/archive.html) |
| **Ch.07** | **Verification Audit Notes & Technical Glossary** | 32 cross-verified audit notes & 35-term interactive glossary | [View](https://yjqkrtk-ux.github.io/gradworks/chapters/notes.html) |

---

## 📚 4. Published IEEE Papers, Granted US/KR Patents & Public Code

### Peer-Reviewed Publications (First Author)
1. **Y.-J. Song** and D.-H. Cho, "Local Alignment of DNA Sequence Based on Deep Reinforcement Learning," *IEEE Open Journal of Engineering in Medicine and Biology (OJEMB)*, vol. 2, pp. 170–178, Apr. 2021. — [**DOI: 10.1109/OJEMB.2021.3076156**](https://doi.org/10.1109/OJEMB.2021.3076156) · [**Code (`DQNalign`)**](https://github.com/syjqkrtk/DQNalign)
2. **Y.-J. Song**, D. J. Ji, H. Seo, G.-B. Han, and D.-H. Cho, "Pairwise Heuristic Sequence Alignment Algorithm Based on Deep Reinforcement Learning," *IEEE Open Journal of Engineering in Medicine and Biology (OJEMB)*, vol. 2, pp. 36–43, Jan. 2021. — [**DOI: 10.1109/OJEMB.2021.3055424**](https://doi.org/10.1109/OJEMB.2021.3055424) · [**Code (`HeuristicAlignment`)**](https://github.com/syjqkrtk/HeuristicAlignment)
3. **Y.-J. Song** and D.-H. Cho, "A Novel Estimation Algorithm of Evolutionary Distance Based on the Word Frequency Variation of Sequence Segment," *Proc. IEEE EMBS Int. Conf. on Biomedical and Health Informatics (BHI)*, pp. 287–290, 2018. — [**IEEE Xplore: 8333425**](https://ieeexplore.ieee.org/document/8333425) · [**Code (`EvolDist`)**](https://github.com/syjqkrtk/EvolDist)
4. **Y.-J. Song** and D.-H. Cho, "Classification of Various Genomic Sequences Based on Distribution of Repeated K-Word," *Proc. 39th Annual Int. Conf. of the IEEE Engineering in Medicine and Biology Society (EMBC)*, 2017. — [**IEEE Xplore: 8037707**](https://ieeexplore.ieee.org/document/8037707) · [**Code (`REminerII`)**](https://github.com/syjqkrtk/REminerII)

### Granted & Published Patents (Google Patents)
* **[US 12,574,659 B2 (Granted Mar 2026)](https://patents.google.com/patent/US12574659B2/en)** — *Image signal processor, image sensor, and operating method of the image sensor* (Samsung Electronics)
* **[US 12,363,458 B2 (Granted Jul 2025)](https://patents.google.com/patent/US12363458B2/en)** — *Image sensor and operating method* (Samsung Electronics)
* **[US 12,496,917 B2 (Granted Dec 2025)](https://patents.google.com/patent/US12496917B2/en)** / **[KR 10-2370592 B1 (Granted)](https://patents.google.com/patent/KR102370592B1/en)** / **[WO 2021/101223 A1](https://patents.google.com/patent/WO2021101223A1/en)** — *Method and apparatus for vehicle location-based power control of wireless charging inverter* (KAIST & WiPowerOne) · [**Code (`EVGPSforWPT`)**](https://github.com/syjqkrtk/EVGPSforWPT)
* **[KR 10-2021-0092933 A](https://patents.google.com/patent/KR20210092933A/en)** — *Wireless power transfer apparatus and method using image recognition* (KEPCO & KAIST) · [**Code (`ObjectDetectionForWPT`)**](https://github.com/syjqkrtk/ObjectDetectionForWPT)
* **[US 2019/0385696 A1](https://patents.google.com/patent/US20190385696A1/en)** / **[KR 10-2019-0136733 A](https://patents.google.com/patent/KR20190136733A/en)** — *Method for predicting disease risk based on analysis of complex genetic information* (KAIST) · [**Code (`Bio / REDNN`)**](https://github.com/syjqkrtk/Bio)

---

## 🗂️ Repository Layout

```text
yjqkrtk-ux.github.io/
├── index.html          # 📄 Executive Web Resume & CV (https://yjqkrtk-ux.github.io/)
├── isocell/            # 🏢 Samsung S.LSI: ISOCELL 200MP & E2E AI Remosaic Guidebook (https://yjqkrtk-ux.github.io/isocell/)
├── aicamera/           # 📷 Independent R&D: AICAMERA Latent Signal Processing Guidebook (https://yjqkrtk-ux.github.io/aicamera/)
└── gradworks/          # 🎓 KAIST Ph.D. Research & Systems Guidebook (https://yjqkrtk-ux.github.io/gradworks/)
```
