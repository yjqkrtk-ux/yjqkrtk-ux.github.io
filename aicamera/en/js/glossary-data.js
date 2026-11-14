window.BOOK_GLOSSARY = {
  "version": 1,
  "terms": [
    {
      "ko": "Latent Signal Processing",
      "en": "Split Sensor-Host Latent Architecture",
      "abbr": "LSP",
      "def": "An edge camera architecture that asymmetrically splits the encoder across the in-sensor NPU (Stage A) and host NPU (Stage B) instead of transmitting uncompressed pixels (RAW/RGB), cutting MIPI bus payload by up to 48× and mapping directly into the standard diffusion latent space (ẑ).",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Stage A Compressor",
      "en": "In-Sensor Strided CNN Encoder",
      "abbr": "Stage A",
      "def": "An ultra-compact strided convolutional neural network running as .rpk firmware on the Sony IMX500 in-sensor NPU (5,924 Conv2d weights [9.59K exported graph params] and 0.122 GMACs for SA8). Compresses a 512×512×3 input into a 64 KB metadata tensor r.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Stage B Latent Translator",
      "en": "Host NPU ResBlock Translator",
      "abbr": "Stage B",
      "def": "A ResBlock translation network on the host NPU mapping the compressed sensor tensor r onto a standardized latent manifold ẑ. In LSP (SA8), Hailo-8 (.hef; 595,524 params, 2.43 GMACs, 0.97 ms) maps to the 64×64×4 SD VAE space; in 16-Ch Single-Stream SE-Universal-CFA, the sensor-invariant unified translator (T_B: 16→16, 1.52M params) aligns r onto FLUX.1 / TAEF1.",
      "chapters": [
        "overview",
        "lsp",
        "ucfa"
      ]
    },
    {
      "ko": "Universal Latent Hub",
      "en": "Cross-Decoder Shared Latent Manifold",
      "abbr": "Latent Hub",
      "def": "By aligning Stage B output with the public Stable Diffusion VAE latent manifold (scale 0.18215), both the lightweight edge preview decoder (TAESD_ft) and workstation generative diffusion models (U-Net / SD VAE) consume the exact same latent tensor without retraining.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "Zero-Shutter-Lag Generative Capture",
      "en": "Latent-Resident Instant Capture",
      "abbr": "ZSL",
      "def": "A capture mechanism that directly reuses the latent tensor ẑ and preview Canny edges already resident in host memory during live viewfinder streaming to synthesize generative images with zero sensor re-exposure, zero RAW retransmission, and zero edge encoder re-execution.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "MIPI CSI-2",
      "en": "Camera Serial Interface 2",
      "abbr": "CSI-2",
      "def": "The high-speed differential serial interface connecting the camera sensor to the application processor (SoC). During high-resolution uncompressed frame streaming, DMA serialization and memory contention make it the primary bottleneck of edge pipelines.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Sony IMX500",
      "en": "Sony IMX500 Intelligent Vision Sensor",
      "abbr": "IMX500",
      "def": "An intelligent vision sensor stacking an on-chip ISP, dedicated NPU, and SRAM (<2 MB budget) beneath a 12.3 MP pixel die. Executes quantized .rpk models directly inside the sensor and emits output tensors over MIPI metadata.",
      "chapters": [
        "overview",
        "lsp",
        "isp"
      ]
    },
    {
      "ko": "Hailo-8",
      "en": "Hailo-8 Edge AI Accelerator",
      "abbr": "Hailo-8",
      "def": "A 26 TOPS dataflow edge NPU attached to the Raspberry Pi 5 PCIe interface. Executes Stage B (0.97 ms), TAESD_ft (16.44 ms), Bilateral Grid, and portrait segmentation models compiled into .hef binaries.",
      "chapters": [
        "overview",
        "lsp",
        "isp"
      ]
    },
    {
      "ko": "TAESD",
      "en": "Tiny AutoEncoder for Stable Diffusion",
      "abbr": "TAESD_ft",
      "def": "A lightweight real-time decoder for Stable Diffusion latent tensors. Fine-tuned on the Stage B output distribution and compiled to a Hailo-8 .hef binary running in 16.44 ms (saturating the 30 FPS camera ceiling).",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "ControlNet",
      "en": "Spatial Conditioning Network for Diffusion",
      "abbr": "ControlNet",
      "def": "An auxiliary neural network that injects spatial structural conditions (such as Canny edge maps) into a pretrained diffusion model. In ZSL capture, Canny(70, 160) edges extracted from the live preview preserve scene geometry.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "Straight-Through Estimator",
      "en": "Gradient Approximation for Quantization",
      "abbr": "STE",
      "def": "A quantization-aware training (QAT) technique that approximates the backward gradient of the non-differentiable rounding operation as an identity function (∂x_q/∂x ≈ 1), enabling end-to-end weight optimization.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "Defective Pixel Correction",
      "en": "OpenISP Stage 1 Hot/Dead Pixel Filter",
      "abbr": "DPC",
      "def": "OpenISP Stage 1. Replaces hot or dead pixels that deviate beyond threshold T from the min/max range of their 8 same-color 3×3 neighbors (±2 px stride) with the average of the two median values.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Black Level Compensation",
      "en": "OpenISP Stage 2 Pedestal Subtraction",
      "abbr": "BLC",
      "def": "OpenISP Stage 2 and Comp-LSP Class I operator. Subtracts the sensor ADC pedestal (default 64 DN in 10-bit) added to prevent dark-current negative noise clipping and normalizes pixel values to the linear [0, 1] floating-point range.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Lens Shading Correction",
      "en": "OpenISP Stage 3 Radial Vignetting Gain",
      "abbr": "LSC",
      "def": "OpenISP Stage 3. Compensates for natural cos⁴θ optical vignetting and microlens CRA falloff as a function of squared radius (r²) from the optical center using the radial polynomial gain 1 + a₁r² + a₂r⁴.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Anti-Noise Filter",
      "en": "OpenISP Stage 4 Bayer Bilateral Filter",
      "abbr": "ANF",
      "def": "OpenISP Stage 4. An edge-preserving bilateral filter in the Bayer domain that weights 3×3 same-color neighbors (±2 px) by both spatial distance (σ_s) and intensity difference (σ_r).",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Auto White Balance",
      "en": "OpenISP Stage 5 & 3A Chromatic Adaptation",
      "abbr": "AWB",
      "def": "OpenISP Stage 5, 3A loop, and Comp-LSP Class I operator. Multiplies R, G, and B channels by diagonal gains (g_R, g_G, g_B) to remove illuminant color casts so neutral achromatic surfaces satisfy R = G = B.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Demosaicing",
      "en": "OpenISP Stage 6 Bayer-to-RGB Interpolation",
      "abbr": "Demosaic",
      "def": "OpenISP Stage 6. Reconstructs full 3-channel (R, G, B) values at every pixel by interpolating neighboring samples from a single-channel Bayer mosaic (RGGB).",
      "chapters": [
        "isp",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "Color Correction Matrix",
      "en": "OpenISP Stage 7 Linear Spectral Transform",
      "abbr": "CCM",
      "def": "OpenISP Stage 7 and Comp-LSP Class I operator. A 3×3 linear transformation matrix multiplied with white-balanced RGB vectors to compensate for sensor spectral sensitivity differences and crosstalk relative to standard sRGB.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Gamma Correction",
      "en": "OpenISP Stage 8 Non-Linear Tone Mapping",
      "abbr": "Gamma",
      "def": "OpenISP Stage 8 and Comp-LSP Class II nonlinear operator. Applies a power-law tone curve (x^(1/γ), default γ=2.2) to linear RGB signals to allocate perceptual quantization levels for dark tones.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Color Space Conversion",
      "en": "OpenISP Stage 9 RGB-to-YUV420 Transform",
      "abbr": "CSC",
      "def": "OpenISP Stage 9. Separates gamma-encoded RGB into luma (Y) and chroma (Cb, Cr) planes with 2×2 average chroma subsampling to produce BT.601 studio-range planar YUV420 uint8 output.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Edge Enhancement",
      "en": "OpenISP Stage 10 Luma Unsharp Mask",
      "abbr": "EEH",
      "def": "OpenISP Stage 10 and Comp-LSP Class III spatial kernel. Extracts high-frequency edge detail, applies coring/clipping, and adds it back scaled by sharpening gain k.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "3A Control Loop",
      "en": "Auto Exposure / Auto White Balance / Auto Focus",
      "abbr": "3A",
      "def": "Closed-loop feedback controller that updates exposure (AE), white balance (AWB), and CCT-interpolated CCM every frame using exponential moving averages (EMA) over subsampled pixel statistics.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Exponential Moving Average",
      "en": "Temporal Smoothing Filter",
      "abbr": "EMA",
      "def": "A first-order temporal filter (x_t = α·x̂ + (1-α)·x_{t-1}) that blends current measurements with previous state to suppress frame-to-frame gain hunting or viewport jitter.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Halide DSL",
      "en": "Decoupled Algorithm & Schedule Compiler",
      "abbr": "Halide",
      "def": "A domain-specific language and compiler for image processing that separates 'what to compute' (Algorithm) from 'how to execute it' (Schedule: tiling, SIMD vectorization, parallelism, and kernel fusion).",
      "chapters": [
        "overview",
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "Verified Lifting",
      "en": "Automated C99-to-Halide Transpilation & Parity Check",
      "abbr": "Lifting",
      "def": "A compilation workflow that parses legacy C99 image processing loops into stencil/pointwise intermediate representations (IR), emits optimized Halide code and schedules, and verifies numerical parity (PSNR ≥ 40 dB).",
      "chapters": [
        "overview",
        "isp"
      ]
    },
    {
      "ko": "Kernel Fusion",
      "en": "Tile-Level Producer-Consumer Loop Fusion",
      "abbr": "Fusion",
      "def": "Instead of reading and writing full frames to DRAM between every ISP stage, connects producer and consumer stages at the tile level inside L2 cache/registers, cutting 12MP DRAM traffic by 13.8× (Tier 3).",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "DMA-BUF Zero-Copy",
      "en": "Shared Physical Memory Buffer Mapping",
      "abbr": "DMA-BUF",
      "def": "Eliminates host-to-device staging copy overhead (60.16 ms) by mapping the exact same physical memory pages between the CPU and VideoCore VII GPU (Vulkan) via Linux kernel DMA-BUF handles (Tier 4).",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Bilateral Grid",
      "en": "3D Spatial-Luma Affine Tone Mapping Grid",
      "abbr": "HDRnet Grid",
      "def": "Infers 3D affine color transformation coefficients over a coarse (x, y) × luma grid from a low-resolution input and applies trilinear slicing with a full-resolution guide map for real-time edge-preserving local tone mapping.",
      "chapters": [
        "overview",
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "ZAP Tracker",
      "en": "Zero-Jitter Auto-Framing & Pan Tracker",
      "abbr": "ZAP",
      "def": "Touch-to-track auto-framing engine that combines IMX500 in-sensor face detection (SSD/BlazeFace) with CPU fallback and EMA smoothing (α=0.08) to smoothly pan and crop a 4:3 viewport.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "Color Filter Array",
      "en": "Wavelength-Selective Pixel Mosaic Filter",
      "abbr": "CFA",
      "def": "A mosaic grid of wavelength-selective R, G, and B optical filters placed above silicon photodiodes so monochrome sensors can capture color information.",
      "chapters": [
        "isp",
        "ucfa"
      ]
    },
    {
      "ko": "Bayer Pattern",
      "en": "2×2 RGGB Color Filter Mosaic",
      "abbr": "Bayer",
      "def": "The standard 2×2 periodic color filter array consisting of 1 Red, 2 Green (Gr, Gb), and 1 Blue pixel per unit cell.",
      "chapters": [
        "isp",
        "ucfa"
      ]
    },
    {
      "ko": "Tetracell",
      "en": "Quad-Bayer 4×4 Clustered CFA",
      "abbr": "Tetracell",
      "def": "A clustered CFA with a 4×4 fundamental period grouping 2×2 adjacent pixels under the same color filter. Sums 2×2 neighbors (binning) for high SNR in low light and reconstructs full resolution in bright light.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "Hexadecacell",
      "en": "16-Cell 8×8 Clustered CFA",
      "abbr": "Hexadecacell",
      "def": "An ultra-high-resolution (200 MP class) clustered color filter array grouping 4×4 (16) adjacent pixels per color with an 8×8 fundamental period.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "Remosaicing",
      "en": "Non-Bayer to Bayer Mosaic Conversion",
      "abbr": "Remosaic",
      "def": "A preprocessing stage that rearranges and interpolates clustered non-standard CFA outputs such as Tetracell (4×4) or Hexadecacell (8×8) into a standard 2×2 Bayer mosaic for legacy hardware ISPs.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "PixelUnshuffle",
      "en": "Lossless Space-to-Depth Phase Decomposition",
      "abbr": "PixelUnshuffle",
      "def": "A lossless spatial-to-channel rearrangement operation (H×W×1 → (H/r)×(W/r)×r²) that separates pixels of identical mosaic phase into dedicated channels while reducing spatial dimensions by factor r.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "PixelShuffle",
      "en": "Sub-Pixel Convolution Depth-to-Space Upsampling",
      "abbr": "PixelShuffle",
      "def": "An upsampling operation that rearranges multi-channel feature maps into a higher-resolution spatial grid (×r), used in DemosaicPixelShuffleDecoder of 16-Ch SE-Universal-CFA.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "Peak Signal-to-Noise Ratio",
      "en": "Logarithmic Pixel Fidelity Metric",
      "abbr": "PSNR",
      "def": "An image fidelity metric expressing the mean squared error (MSE) between reference and reconstructed images on a logarithmic decibel (dB) scale. Higher values indicate lower pixel-wise numerical error.",
      "chapters": [
        "lsp",
        "isp",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "Learned Perceptual Image Patch Similarity",
      "en": "Deep Feature Perceptual Distance",
      "abbr": "LPIPS",
      "def": "A perceptual metric that measures human visual similarity using intermediate feature distances in deep networks (such as VGG). Lower values (↓) indicate closer texture and structural fidelity.",
      "chapters": [
        "lsp",
        "ucfa"
      ]
    },
    {
      "ko": "Model Compression Toolkit",
      "en": "Sony IMX500 INT8 PTQ Framework",
      "abbr": "MCT",
      "def": "Quantization framework that performs post-training INT8 quantization (PTQ) of Keras/PyTorch floating-point models using representative calibration frames (imx500_calib_frames) for Sony IMX500 NPU deployment.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Hailo Dataflow Compiler",
      "en": "ONNX-to-HEF Neural Compiler Toolchain",
      "abbr": "Hailo DFC",
      "def": "Toolchain that parses ONNX neural graphs (translate_onnx_model), performs INT8 optimization using real-distribution calibration tensors (.npy), and compiles them into Hailo-8 .hef binaries.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Model Context Protocol Server",
      "en": "Deterministic Agent Tool Server",
      "abbr": "MCP Server",
      "def": "Deterministic agent tool server implemented in tools/aicamera_mcp_server.py. Safely exposes environment detection, remote benchmark execution, drift gating (diff_bench), training launch, and CSV loss parsing.",
      "chapters": [
        "overview"
      ]
    },
    {
      "ko": "IMX500 Neural Network Firmware Package",
      "en": "On-Sensor NPU Binary Package",
      "abbr": "RPK",
      "def": "The final sensor NPU firmware (.rpk) packaged by Raspberry Pi 5 rpk_packager from imxconv-tf packerOut.zip output. Uploaded into IMX500 on-chip SRAM at camera startup.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "Hailo Executable Format",
      "en": "Hailo-8 NPU Dataflow Binary",
      "abbr": "HEF",
      "def": "Dedicated binary format (.hef) produced by the Hailo Dataflow Compiler for the Hailo-8 NPU. Executes Stage B (0.97 ms) and TAESD_ft (16.44 ms) at high speed over PCIe.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "White-Box Computational LSP",
      "en": "White-Box Latent ISP · Analytical Latent ISP",
      "abbr": "Comp-LSP · Comp-LSP 2.0",
      "def": "An analytical latent-domain ISP architecture executing a 7-stage physical camera ISP directly on 16-channel latents (z₀ ∈ ℝ¹⁶) via Class I linear, Class II nonlinear (1:4:1 Simpson quadrature & 3×3 secant Jacobians), and Class III spatial kernel + 4-step refiner operators without pixel decoding.",
      "chapters": [
        "overview",
        "comp_lsp"
      ]
    },
    {
      "ko": "1st-Order Jet Bundle",
      "en": "First-Order Jet Bundle · Jet Decomposition",
      "abbr": "J¹ = DC ⊕ AC",
      "def": "Geometric decomposition splitting a 16-channel latent vector z₀ into its 0th-order 8×8 patch mean color coordinates on the curved 3D manifold (S_DC³) and 1st-order 13D spatial edge/texture differentials (S_AC¹³).",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "1:4:1 Simpson Quadrature",
      "en": "3-Point Gauss-Legendre Quadrature · Simpson Quadrature",
      "abbr": "1:4:1 Quadrature",
      "def": "O(σ⁴) 3-point numerical integration evaluating f_ISP at symmetric nodes (c̄₀ − δ, c̄₀, c̄₀ + δ with δ = √1.5·σ_AC) with 1:4:1 weights, eliminating second-order Taylor-Jensen variance bias across concave gamma curves (+3.60 to +7.47 dB patch DC gain).",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "Secant Jacobian",
      "en": "3×3 Secant Jacobian · Jacobian Translation",
      "abbr": "J_3×3",
      "def": "The 3×3 state-dependent derivative matrix combining linear ISP gains/CCM with centered finite-difference gamma slopes (f_+ − f_-)/(2δ) to translate cross-channel color ratios and shadow contrast in the 13D AC edge subspace.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "144-D Kronecker Outer Product",
      "en": "Kronecker Outer Product · Entangled AC-Jacobian Product",
      "abbr": "z_AC ⊗ vec(J)",
      "def": "The 144-dimensional bilinear feature tensor formed by the outer product of AC latent features with the 9 flattened Jacobian entries vec(J_3×3 − I₃), projected back to 16 channels via a calibrated Frobenius linear map.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "Class III Spatial Kernel",
      "en": "Latent Spatial Neighborhood Operator",
      "abbr": "Latent NR · EEH · LTM",
      "def": "Stage 5 latent operator family combining intra-cell 13D Legendre AC projectors with cross-cell 3×3 finite-difference stencils to execute bilateral noise reduction (NR), Laplacian edge enhancement (EEH), and local tone mapping (LTM) without pixel decoding.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "13D Orthonormal AC Projector",
      "en": "Orthonormal Legendre Subspace Projector",
      "abbr": "Legendre Projector P_AC",
      "def": "Biorthogonal projector (P_AC = I₁₆ − P_DC) onto the 13D spatial frequency subspace (S_AC¹³ = Π_x^(3) ⊕ Π_y^(3) ⊕ Π_curv^(7)), enabling selective control of directional gradients and Laplacian curvature while strictly preserving 8×8 patch mean color.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "4-Step Manifold Refiner",
      "en": "4-Step Iterative Residual ODE Refiner",
      "abbr": "Residual ODE Refiner",
      "def": "Lightweight 4-step damped residual isotropic (1×1 + analytical 3×3 Laplacian) ODE refiner (Stage 6, 32.0K params, trained on 201 held-out DNGs) that resolves 32×32 encoder receptive-field boundary phase artifacts without texture hallucination, boosting 10-camera unseen mean PSNR from 24.46 dB (0-Net Math) to 25.17 dB (10/10 wins, up to 30.55 dB).",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "16-Channel VAE",
      "en": "16-Channel Variational Autoencoder",
      "abbr": "FLUX.1 · TAEF1",
      "def": "Modern generative latent interface compressing each 8×8×3 (192) pixel block into z ∈ ℝ¹⁶ (3D DC color S_DC³ ⊕ 13D AC edge/texture S_AC¹³), serving as the shared target manifold for SE-Universal-CFA and Comp-LSP 2.0.",
      "chapters": [
        "overview",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "Differentiable Inverse 3A",
      "en": "Latent-Domain Auto-Tuning Optimization",
      "abbr": "Latent Inverse 3A",
      "def": "Backpropagates target appearance losses directly through closed-form white-box latent ISP operators with respect to exposure, white balance, CCM, and gamma parameters, accelerating inverse 3A auto-tuning by 765.2× over pixel-decoded loops.",
      "chapters": [
        "comp_lsp"
      ]
    }
  ]
};
