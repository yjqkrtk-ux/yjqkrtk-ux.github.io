window.BOOK_GLOSSARY = {
  "version": 1,
  "generated_by": "docs/build_isocell_portal.py",
  "terms": [
    {
      "ko": "Remosaic (Non-Bayer to Bayer Conversion)",
      "en": "Remosaic Algorithm",
      "abbr": "Remosaic",
      "def": "Algorithmic conversion of a non-Bayer multi-cell color filter array (2×2 Q-cell / 4×4 Hexadeca) into a standard 2×2 Bayer (RGGB) pattern required by the Camera ISP for 200MP full-resolution capture and 2×/4× In-Sensor Zoom.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "Tetra²pixel (4×4 Hexadeca CFA)",
      "en": "16-Cell Non-Bayer Color Filter Array",
      "abbr": "Tetra²pixel",
      "def": "Samsung's 16-cell (4×4) non-Bayer Color Filter Array grouping 16 neighboring photodiodes under the same color filter—enabling 12.5MP (4×4 binning), 50MP (2×2 binning), and 200MP full-res / 4× zoom via Remosaic.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "QMSC (AI 4×4 Q-Cell Remosaic)",
      "en": "In-Sensor AI 4×4 Q-Cell Remosaic",
      "abbr": "QMSC",
      "def": "AI-based 4×4 Q-cell Remosaic algorithm deployed in-sensor on ISOCELL HP2 (0.6µm, 200MP), enabling 200MP full-res capture and lossless 12MP 4× In-Sensor Zoom on Samsung Galaxy S23 Ultra.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "E2E AI Remosaic",
      "en": "End-to-End 200MP S/W ISP Turn-Key Platform",
      "abbr": "E2E AI RMSC",
      "def": "Samsung's End-to-End S/W ISP turn-key solution that distributes DL Remosaic and Camera ISP workloads across CPU/GPU/NPU/ISP and mounts them onto the Camera ISP pipeline—accelerating 200MP cfa2yuv capture up to 3× faster (3s → 1s @ SM8550) across 30+ OEM products.",
      "chapters": [
        "e2e_remosaic"
      ]
    },
    {
      "ko": "Heterogeneous SoC Parallelization",
      "en": "CPU / GPU / NPU / ISP Pipeline Distribution",
      "abbr": "HetSoC",
      "def": "Partitioning and scheduling DL Remosaic and S/W ISP stages concurrently across mobile CPU, GPU, NPU, and H/W ISP engines mounted on the Camera ISP pipeline (Qualcomm Snapdragon & MediaTek Dimensity).",
      "chapters": [
        "e2e_remosaic"
      ]
    }
  ]
};
