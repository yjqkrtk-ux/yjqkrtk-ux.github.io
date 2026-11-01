window.BOOK_GLOSSARY = {
  "version": 1,
  "terms": [
    {
      "ko": "ISOCELL HP5",
      "en": "0.50µm 200MP CMOS Image Sensor (1/1.56\")",
      "abbr": "HP5 · 0.50µm",
      "def": "World's smallest 200MP mobile image sensor featuring 0.50µm sub-micron pixels in a compact 1/1.56-inch optical format; relies on Neural ISP S/W algorithms to invert sub-wavelength optical diffraction and crosstalk.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "ISOCELL HP3 / HP9",
      "en": "0.56µm 200MP CMOS Image Sensors (1/1.4\")",
      "abbr": "HP3 / HP9 · 0.56µm",
      "def": "200MP 0.56µm 1/1.4-inch sensors featuring the world's first DL-based Hexadeca (16-cell) remosaic S/W algorithm; deployed in flagship wide (HP3) and 200MP periscope telephoto (HP9, vivo X200 Pro ZEISS APO) cameras.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "ISOCELL HP2",
      "en": "0.60µm 200MP CMOS Image Sensor (1/1.3\")",
      "abbr": "HP2 · 0.60µm",
      "def": "Flagship 200MP 0.60µm 1/1.3-inch sensor with Dual Vertical Transfer Gate (D-VTG) and QMSC in-sensor AI 4×4 remosaic, commercialized in Samsung Galaxy S23 Ultra.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "E2E AI Remosaic",
      "en": "End-to-End AI Remosaic Turn-Key S/W ISP Platform",
      "abbr": "E2E RMSC (Gen 1–4)",
      "def": "Samsung S.LSI's commercial software ISP & neural remosaic platform (Gen 1–4) that jointly executes non-Bayer remosaicing and ISP stages across heterogeneous mobile SoC compute engines (CPU/GPU/NPU/ISP), deployed across 30+ OEM flagship smartphones.",
      "chapters": [
        "e2e_remosaic",
        "isocell_sensors"
      ]
    },
    {
      "ko": "Hexadeca CFA",
      "en": "Hexadeca (4×4 = 16-Cell) Color Filter Array",
      "abbr": "16-Cell CFA",
      "def": "A non-Bayer color filter array grouping 16 adjacent photodiodes (4×4) under a single color filter (R, G, or B), enabling Tetra²pixel adaptive binning (12.5MP @ 4×4, 50MP @ 2×2, and 200MP @ 1×1).",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "Tetra²pixel",
      "en": "Tetra-Squared Pixel Adaptive Binning Technology",
      "abbr": "Tetra²pixel",
      "def": "Samsung ISOCELL technology that dynamically reconfigures 4×4 same-color sub-micron pixels according to ambient illumination—combining 16 pixels into a large virtual pixel (2.0µm–2.4µm) in low light or reading all 200M pixels in bright daylight.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "QMSC",
      "en": "AI-Based 4×4 Q-Cell Remosaic (In-Sensor)",
      "abbr": "QMSC",
      "def": "In-sensor AI-assisted 4×4 Q-cell remosaic architecture developed for ISOCELL HP2 (0.6µm, 200MP), powering full-resolution 200MP capture and lossless 12MP 4× in-sensor zoom on Galaxy S23 Ultra.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "Multi-Frame Remosaic",
      "en": "Gen 4 DL-Based Multi-Frame Joint Remosaic",
      "abbr": "MF-RMSC (Gen 4)",
      "def": "4th-generation E2E AI Remosaic architecture that fuses multiple sub-pixel-shifted non-Bayer RAW frames inside a flagship AP NPU network to jointly perform spatial demosaicing, super-resolution detail recovery, and temporal denoising (deployed on HONOR Magic 9 series).",
      "chapters": [
        "e2e_remosaic"
      ]
    },
    {
      "ko": "In-Sensor Zoom",
      "en": "Lossless 2× / 4× In-Sensor Crop Zoom",
      "abbr": "ISZ / Zoom Anyplace",
      "def": "Cropping the central 50MP (2×) or 12.5MP (4×) region of a 200MP sensor and applying neural remosaicing to deliver optical-grade telephoto resolution without dedicated intermediate zoom lenses.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "PixelUnshuffle",
      "en": "16-Channel Periodic Sub-Phase Decomposition",
      "abbr": "PhaseSplit",
      "def": "Reshaping a 4×4 Hexadeca CFA tensor of shape (1, H, W) into a 16-channel phase-homogeneous tensor (16, H/4, W/4) so NPU convolutional kernels process uniform sub-grid phases at 1/16th spatial area.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "Deep Trench Isolation",
      "en": "Front/Back-Side Deep Trench Isolation",
      "abbr": "FDTI / BDTI",
      "def": "Physical silicon oxide/high-k dielectric barriers etched between adjacent sub-micron photodiodes to suppress optical and electrical crosstalk in 0.50µm–0.60µm 200MP pixels.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "Dual Vertical Transfer Gate",
      "en": "Dual Vertical Transfer Gate Photodiode Architecture",
      "abbr": "D-VTG",
      "def": "Samsung ISOCELL pixel structure adding a second vertical transfer gate to boost Full-Well Capacity (FWC) by up to 33% in sub-micron 0.60µm (HP2) and 0.50µm (HP5) pixels.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "Airy Disk Diffraction Limit",
      "en": "Optical Diffraction Spot Diameter",
      "abbr": "Airy Limit",
      "def": "Fundamental physical limit d = 2.44 · λ · N dictating the smallest point spread function (PSF) diameter achievable by an ideal lens—around 2.28µm at λ=550nm, f/1.7, spanning a 4×4 cluster of 0.50µm–0.56µm pixels.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "Heterogeneous SoC Scheduling",
      "en": "Cross-Engine Tile Pipelining (CPU/GPU/NPU/ISP)",
      "abbr": "HetSoC",
      "def": "Partitioning 200MP frame tiles across mobile NPU (INT8/FP16 neural remosaic), GPU/DSP (pre/post-filtering), and hardware/software ISP (color/tone mapping) to overlap compute and cut 200MP capture latency from ~3.0s to ~1.0s.",
      "chapters": [
        "e2e_remosaic"
      ]
    }
  ]
};
