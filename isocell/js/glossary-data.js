window.BOOK_GLOSSARY = {
  "version": 1,
  "terms": [
    {
      "ko": "E2E AI Remosaic",
      "en": "End-to-End AI Remosaic Turn-Key Platform",
      "abbr": "E2E RMSC",
      "def": "Samsung S.LSI's commercial software ISP & neural remosaic platform (Gen 1–4) that jointly executes non-Bayer remosaicing and ISP stages across heterogeneous mobile SoC compute engines (CPU/GPU/NPU/ISP), deployed across 30+ OEM smartphones.",
      "chapters": [
        "overview",
        "e2e_remosaic",
        "notes"
      ]
    },
    {
      "ko": "Hexadeca CFA",
      "en": "Hexadeca (4×4 = 16-Cell) Color Filter Array",
      "abbr": "16-Cell CFA",
      "def": "A non-Bayer color filter array grouping 16 adjacent photodiodes (4×4) under a single color filter (R, G, or B), enabling Tetra²pixel adaptive binning (12.5MP @ 4×4, 50MP @ 2×2, and 200MP @ 1×1).",
      "chapters": [
        "overview",
        "isocell_sensors"
      ]
    },
    {
      "ko": "Tetra²pixel",
      "en": "Tetra-Squared Pixel Adaptive Binning Technology",
      "abbr": "Tetra²pixel",
      "def": "Samsung ISOCELL technology that dynamically reconfigures 4×4 same-color sub-micron pixels according to ambient illumination—combining 16 pixels into a large virtual pixel (2.0µm–2.4µm) in low light or reading all 200M pixels in bright daylight.",
      "chapters": [
        "overview",
        "isocell_sensors"
      ]
    },
    {
      "ko": "QMSC",
      "en": "AI-Based 4×4 Q-Cell Remosaic (In-Sensor)",
      "abbr": "QMSC",
      "def": "In-sensor AI-assisted 4×4 Q-cell remosaic architecture developed for ISOCELL HP2 (0.6µm, 200MP), powering full-resolution 200MP capture and lossless 4× in-sensor zoom on Galaxy S23 Ultra.",
      "chapters": [
        "isocell_sensors",
        "overview"
      ]
    },
    {
      "ko": "ISOCELL HP5",
      "en": "0.50µm 200MP CMOS Image Sensor (1/1.56\")",
      "abbr": "HP5",
      "def": "World's smallest 200MP mobile image sensor featuring 0.50µm sub-micron pixels in a compact 1/1.56-inch optical format, paired with dedicated deep learning restoration algorithms.",
      "chapters": [
        "overview",
        "isocell_sensors",
        "notes"
      ]
    },
    {
      "ko": "ISOCELL HP3 / HP9",
      "en": "0.56µm 200MP CMOS Image Sensors (1/1.4\")",
      "abbr": "HP3 / HP9",
      "def": "200MP 0.56µm 1/1.4-inch sensors featuring the world's first DL-based Hexadeca (16-cell) remosaic S/W algorithm; deployed in flagship wide (HP3) and periscope telephoto (HP9, e.g., vivo X200 Pro ZEISS) cameras.",
      "chapters": [
        "overview",
        "isocell_sensors",
        "notes"
      ]
    },
    {
      "ko": "ISOCELL HP2",
      "en": "0.60µm 200MP CMOS Image Sensor (1/1.3\")",
      "abbr": "HP2",
      "def": "Flagship 200MP 0.60µm 1/1.3-inch sensor with Dual Vertical Transfer Gate (D-VTG) and QMSC in-sensor 4×4 remosaic, commercialized in Galaxy S23 Ultra.",
      "chapters": [
        "overview",
        "isocell_sensors",
        "notes"
      ]
    },
    {
      "ko": "Multi-Frame Remosaic",
      "en": "Gen 4 DL-Based Multi-Frame Joint Remosaic",
      "abbr": "MF-RMSC (Gen 4)",
      "def": "4th-generation E2E AI Remosaic architecture that fuses multiple sub-pixel-shifted non-Bayer RAW frames inside an AP NPU network to jointly perform spatial demosaicing, super-resolution detail recovery, and temporal denoising (deployed on HONOR Magic 9 series).",
      "chapters": [
        "e2e_remosaic",
        "notes"
      ]
    },
    {
      "ko": "In-Sensor Zoom",
      "en": "Lossless 2× / 4× In-Sensor Crop Zoom",
      "abbr": "ISZ",
      "def": "Cropping the central 50MP (2×) or 12.5MP (4×) region of a 200MP sensor and applying neural remosaicing to deliver optical-grade telephoto resolution without dedicated intermediate zoom lenses.",
      "chapters": [
        "e2e_remosaic",
        "isocell_sensors"
      ]
    },
    {
      "ko": "US 12,574,659 B2",
      "en": "Intermediate-Layer Bad-Pixel Positional Injection Patent",
      "abbr": "US12574659B2",
      "def": "Granted US Patent (Samsung Electronics, Mar 2026): encodes defective pixel coordinates and injects them into an intermediate feature layer of a neural ISP network for low-overhead real-time defect restoration.",
      "chapters": [
        "patents_bpc",
        "notes"
      ]
    },
    {
      "ko": "US 12,363,458 B2",
      "en": "Deep Learning Cluster Bad-Pixel Correction Patent",
      "abbr": "US12363458B2",
      "def": "Granted US Patent (Samsung Electronics, Jul 2025): restores multi-pixel defective clusters in high-density image sensors using a learned context-aware neural correction pipeline.",
      "chapters": [
        "patents_bpc",
        "notes"
      ]
    },
    {
      "ko": "PixelUnshuffle",
      "en": "Sub-Phase Periodic Channel Decomposition",
      "abbr": "PhaseSplit",
      "def": "Reshaping a 4×4 Hexadeca CFA tensor of shape (1, H, W) into a 16-channel phase-aligned tensor (16, H/4, W/4) so convolutional kernels process uniform sub-grid phases at 1/16th spatial area.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "Deep Trench Isolation",
      "en": "Front/Back-Side Deep Trench Isolation",
      "abbr": "DTI",
      "def": "Physical silicon oxide/high-k dielectric barriers etched between adjacent sub-micron photodiodes to suppress optical and electrical crosstalk in 0.5µm–0.6µm 200MP pixels.",
      "chapters": [
        "overview"
      ]
    },
    {
      "ko": "Full-Well Capacity",
      "en": "Photodiode Maximum Electron Storage Capacity",
      "abbr": "FWC",
      "def": "The maximum number of photoelectrons a single pixel photodiode can accumulate before saturation, which governs peak shot-noise SNR (SNR_max = 10 log10(N_sat)) and dynamic range.",
      "chapters": [
        "overview"
      ]
    },
    {
      "ko": "Airy Disk Diffraction Limit",
      "en": "Optical Diffraction Spot Diameter",
      "abbr": "Airy Limit",
      "def": "Fundamental physical limit d = 2.44 · λ · (f/#) dictating the smallest point spread function (PSF) diameter achievable by an ideal lens—around 2.3µm at λ=550nm, f/1.7, spanning a 4×4 cluster of 0.5µm pixels.",
      "chapters": [
        "overview",
        "isocell_sensors"
      ]
    },
    {
      "ko": "Heterogeneous SoC Scheduling",
      "en": "Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP)",
      "abbr": "HetSoC",
      "def": "Partitioning 200MP frame tiles across mobile NPU (INT8/FP16 neural remosaic), GPU/DSP (pre/post-filtering), and hardware ISP (color/tone mapping) to overlap compute and eliminate full-frame DRAM stalls.",
      "chapters": [
        "e2e_remosaic"
      ]
    }
  ]
};
