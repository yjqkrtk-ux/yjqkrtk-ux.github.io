window.GLOSSARY_DATA = {
  "remosaic": {
    "term": "Remosaic (Non-Bayer to Bayer Conversion)",
    "cat": "Core Principle",
    "aliases": [
      "Remosaic",
      "remosaic",
      "remosaicing",
      "QMSC",
      "Hexadeca Remosaic"
    ],
    "short": "Algorithmic conversion of a non-Bayer multi-cell color filter array (2×2 Tetra or 4×4 Hexadeca) into a standard 2×2 Bayer (RGGB) pattern required by the Camera ISP.",
    "detail": "High-resolution mobile sensors group 2×2 (4) or 4×4 (16) neighboring pixels under the same color filter so they can be binned together in low light. To capture full 200MP resolution or lossless 2×/4× In-Sensor Crop Zoom, Remosaic reconstructs a standard Bayer CFA pattern from the non-Bayer RAW frame."
  },
  "tetra2pixel": {
    "term": "Tetra²pixel (4×4 Hexadeca CFA)",
    "cat": "ISOCELL CFA",
    "aliases": [
      "Tetra²pixel",
      "Hexadeca",
      "16-cell",
      "4x4 Q-cell",
      "Q-cell"
    ],
    "short": "Samsung's 16-cell (4×4) non-Bayer Color Filter Array grouping 16 same-color photodiodes per color block.",
    "detail": "Allows dynamic switching between 12.5MP (4×4 binning), 50MP (2×2 binning or 2× crop zoom), and 200MP full-resolution / 4× in-sensor zoom output via Remosaic."
  },
  "e2e_ai_remosaic": {
    "term": "E2E AI Remosaic",
    "cat": "Turn-Key Platform",
    "aliases": [
      "E2E AI Remosaic",
      "E2E AI remosaic",
      "E2E Remosaic",
      "cfa2yuv"
    ],
    "short": "Samsung's End-to-End 200MP S/W ISP turn-key platform mounting distributed DL Remosaic and Camera ISP execution across CPU/GPU/NPU/ISP onto the ISP pipeline.",
    "detail": "Instead of running full-frame Remosaic and Camera ISP sequentially, E2E AI Remosaic distributes Remosaic and ISP blocks across CPU, GPU, NPU, and ISP on the Camera ISP pipeline—accelerating 200MP cfa2yuv capture up to 3× faster (3s → 1s on SM8550) across 30+ commercial OEM smartphones."
  },
  "qmsc": {
    "term": "QMSC (AI 4×4 Q-Cell Remosaic)",
    "cat": "In-Sensor IP",
    "aliases": [
      "QMSC"
    ],
    "short": "AI-based 4×4 Q-cell Remosaic algorithm deployed in-sensor on ISOCELL HP2 (0.6µm, 200MP) for Galaxy S23 Ultra.",
    "detail": "Reconstructs full-resolution Bayer output directly in sensor hardware, powering both 200MP full-res capture and lossless 12MP 4× In-Sensor Zoom."
  },
  "hetsoc": {
    "term": "Heterogeneous SoC Parallelization",
    "cat": "System Architecture",
    "aliases": [
      "Heterogeneous SoC Parallelization",
      "Heterogeneous SoC",
      "heterogeneous SoC",
      "CPU/GPU/NPU/ISP"
    ],
    "short": "Partitioning and scheduling Camera ISP and DL Remosaic stages concurrently across mobile CPU, GPU, NPU, and ISP engines.",
    "detail": "Mounted on top of the mobile Camera ISP pipeline across Qualcomm Snapdragon and MediaTek Dimensity platforms to maximize throughput and minimize 200MP capture latency under strict mobile thermal and memory budgets."
  }
};
