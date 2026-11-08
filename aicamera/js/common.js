/* ==========================================================================
   AICAMERA Guidebook 공통 스크립트 — 전역 객체 SB (SensorBook 호환)
   - 레이아웃(상단바, 서랍 목차, 실시간 검색, 우측 ON THIS PAGE, 이전/다음, 테마) 자동 생성
   - 시뮬레이터 헬퍼: canvas, chart, range, seg, stat, loop, three.js 씬
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
    "title": "이종 엣지 카메라와 시스템 병목",
    "desc": "MIPI CSI-2 직렬화 병목, IMX500(.rpk)·Hailo-8(.hef) 듀얼 NPU 크로스 컴파일 파이프라인, 4-Tier 가상환경 격리와 에이전트·MCP 개발 워크플로.",
    "tags": [
      "시스템",
      "SW스택",
      "sim"
    ]
  },
  {
    "slug": "lsp",
    "num": "02",
    "title": "Latent Signal Processing (LSP)",
    "desc": "센서–호스트 비대칭 분할 인코더(Stage A/B), Power-of-2 QAT, Universal Latent Hub, 30 FPS 실시간 프리뷰와 Zero-Shutter-Lag 생성형 캡처.",
    "tags": [
      "분할추론",
      "HW실측",
      "sim"
    ]
  },
  {
    "slug": "isp",
    "num": "03",
    "title": "Software ISP & Halide/NPU 최적화",
    "desc": "10단계 C99 레퍼런스 ISP(DPC·BLC·LSC·ANF·AWB·Demosaic·CCM·Gamma·CSC·EEH), 3A 루프, Verified Lifting, 4-Tier Halide/GPU, Dual-NPU 엣지 AI.",
    "tags": [
      "영상처리",
      "컴파일러",
      "sim"
    ]
  },
  {
    "slug": "ucfa",
    "num": "04",
    "title": "Universal CFA — 위상 인식 인센서 압축",
    "desc": "적층형 CMOS 센서 단면 구조, Bayer(2×2)·Tetracell(4×4)·Hexadecacell(8×8) 군집형 컬러 필터, PixelUnshuffle 위상 분해와 고정 호스트 번역기.",
    "tags": [
      "센서CFA",
      "3d",
      "sim"
    ]
  },
  {
    "slug": "comp_lsp",
    "num": "05",
    "title": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP",
    "desc": "16채널 VAE 잠재 공간의 1차 제트(Jet) 분해, 1:4:1 심슨 구적법, 3×3 할선 야코비안, 144차원 크로네커 외적과 4-Step 리파이너를 통한 해석적 잠재 ISP.",
    "tags": [
      "해석적ISP",
      "16Ch-Jet",
      "sim"
    ]
  },
  {
    "slug": "notes",
    "num": "06",
    "title": "용어집 & 코드·문서 정합성 검증 노트",
    "desc": "코드와 측정 JSON을 문서 서술과 대조한 23개 정합성 감사 노트, Single-Source-of-Truth 빌드 정책, 45+ 핵심 용어 인터랙티브 사전.",
    "tags": [
      "정합성",
      "용어집"
    ]
  }
];
  const PREBUILT_SEARCH = [{"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "왜 센서–호스트 분할인가: MIPI CSI-2 대역폭과 직렬화 병목", "hash": "s-paradigm", "keywords": "이종 엣지 카메라와 시스템 병목 왜 센서–호스트 분할인가: MIPI CSI-2 대역폭과 직렬화 병목 s-paradigm"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "3대 연구 트랙 아키텍처 비교 (LSP · Software ISP · Universal CFA)", "hash": "s-projects", "keywords": "이종 엣지 카메라와 시스템 병목 3대 연구 트랙 아키텍처 비교 (LSP · Software ISP · Universal CFA) s-projects"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "이종 하드웨어 토폴로지와 메모리 계층", "hash": "s-hardware", "keywords": "이종 엣지 카메라와 시스템 병목 이종 하드웨어 토폴로지와 메모리 계층 s-hardware"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "SW 스택 & Dual-NPU 크로스 컴파일 파이프라인 (.rpk / .hef)", "hash": "s-sw-stack", "keywords": "이종 엣지 카메라와 시스템 병목 SW 스택 & Dual-NPU 크로스 컴파일 파이프라인 (.rpk / .hef) s-sw-stack"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "에이전트 워크플로 (Agent Flow) · MCP 서버 · 원격 엣지 오케스트레이션", "hash": "s-agent-flow", "keywords": "이종 엣지 카메라와 시스템 병목 에이전트 워크플로 (Agent Flow) · MCP 서버 · 원격 엣지 오케스트레이션 s-agent-flow"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "핵심 정리", "hash": "summary", "keywords": "이종 엣지 카메라와 시스템 병목 핵심 정리 summary"}, {"type": "시뮬레이터", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "해상도 · 표현 포맷 · 분할 배율(s_A)에 따른 MIPI 버스 병목 시뮬레이터", "hash": "sim-bus", "keywords": "시뮬레이터 simulator 해상도 · 표현 포맷 · 분할 배율(s_A)에 따른 MIPI 버스 병목 시뮬레이터 sim-bus"}, {"type": "시뮬레이터", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "IMX500 센서 내장 NPU SRAM 예산(< 2 MB) 및 Stage A 복잡도 계산기", "hash": "sim-sram", "keywords": "시뮬레이터 simulator IMX500 센서 내장 NPU SRAM 예산(< 2 MB) 및 Stage A 복잡도 계산기 sim-sram"}, {"type": "시뮬레이터", "slug": "overview", "num": "01", "chTitle": "이종 엣지 카메라와 시스템 병목", "title": "Dual-NPU 크로스 컴파일 & 에이전트 벤치마크 드리프트 게이트", "hash": "sim-devops", "keywords": "시뮬레이터 simulator Dual-NPU 크로스 컴파일 & 에이전트 벤치마크 드리프트 게이트 sim-devops"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.1 왜 인코더를 나누는가 — 버스 병목과 Regime 전환", "hash": "lsp-problem", "keywords": "Latent Signal Processing (LSP) 2.1 왜 인코더를 나누는가 — 버스 병목과 Regime 전환 lsp-problem"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.2 센서–호스트 비대칭 분할 아키텍처와 데이터 흐름", "hash": "lsp-arch", "keywords": "Latent Signal Processing (LSP) 2.2 센서–호스트 비대칭 분할 아키텍처와 데이터 흐름 lsp-arch"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.3 Stage A 압축기와 Stage B 번역기 — 수식 · QAT 명세", "hash": "lsp-model", "keywords": "Latent Signal Processing (LSP) 2.3 Stage A 압축기와 Stage B 번역기 — 수식 · QAT 명세 lsp-model"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.4 하드웨어 실측 분석 (Raspberry Pi 5 + IMX500 + Hailo-8)", "hash": "lsp-bench", "keywords": "Latent Signal Processing (LSP) 2.4 하드웨어 실측 분석 (Raspberry Pi 5 + IMX500 + Hailo-8) lsp-bench"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.5 화질 평가 (DIV2K Validation 100장) & Universal Latent Hub", "hash": "lsp-quality", "keywords": "Latent Signal Processing (LSP) 2.5 화질 평가 (DIV2K Validation 100장) & Universal Latent Hub lsp-quality"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.6 Zero-Shutter-Lag (ZSL) 생성형 캡처와 ControlNet 조건부 확산", "hash": "lsp-capture", "keywords": "Latent Signal Processing (LSP) 2.6 Zero-Shutter-Lag (ZSL) 생성형 캡처와 ControlNet 조건부 확산 lsp-capture"}, {"type": "섹션", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "2.7 엔드투엔드 코드 지도", "hash": "lsp-code", "keywords": "Latent Signal Processing (LSP) 2.7 엔드투엔드 코드 지도 lsp-code"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 01 · 파티션 포인트(\\(s_A\\)) 파이프라인 타이밍 & 대역폭–화질 파레토 탐색기", "hash": "sim-lsp-pipe", "keywords": "시뮬레이터 simulator SIMULATOR 01 · 파티션 포인트(\\(s_A\\)) 파이프라인 타이밍 & 대역폭–화질 파레토 탐색기 sim-lsp-pipe"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "Hailo-8 호환 Power-of-2 양자화 인식 학습 (QAT)", "hash": "lsp-pipe-ctrl", "keywords": "시뮬레이터 simulator Hailo-8 호환 Power-of-2 양자화 인식 학습 (QAT) lsp-pipe-ctrl"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 02 · Hailo Power-of-2 Fake-Quant (STE) 양자화 분포 & 클리핑 시뮬레이터", "hash": "sim-lsp-qat", "keywords": "시뮬레이터 simulator SIMULATOR 02 · Hailo Power-of-2 Fake-Quant (STE) 양자화 분포 & 클리핑 시뮬레이터 sim-lsp-qat"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "VISUAL INSPECTOR · 장면별 64 KB 잠재 복원(TAESD_ft vs SD VAE) & Edge SR 화질 비교기", "hash": "qat-ctrl", "keywords": "시뮬레이터 simulator VISUAL INSPECTOR · 장면별 64 KB 잠재 복원(TAESD_ft vs SD VAE) & Edge SR 화질 비교기 qat-ctrl"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "ZSL 6단계 실행 시퀀스 (generative_capture_service.py)", "hash": "lsp-gal-ctrl", "keywords": "시뮬레이터 simulator ZSL 6단계 실행 시퀀스 (generative_capture_service.py) lsp-gal-ctrl"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "SIMULATOR 03 · Zero-Shutter-Lag 4-Panel 캡처 파이프라인 & Canny ControlNet 시뮬레이터", "hash": "sim-lsp-zsl", "keywords": "시뮬레이터 simulator SIMULATOR 03 · Zero-Shutter-Lag 4-Panel 캡처 파이프라인 & Canny ControlNet 시뮬레이터 sim-lsp-zsl"}, {"type": "시뮬레이터", "slug": "lsp", "num": "02", "chTitle": "Latent Signal Processing (LSP)", "title": "핵심 정리 · Chapter 02", "hash": "zsl-ctrl", "keywords": "시뮬레이터 simulator 핵심 정리 · Chapter 02 zsl-ctrl"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.1 왜 선형 보정이 먼저인가 — 10단계 파이프라인 도메인 구조", "hash": "isp-pipe", "keywords": "Software ISP & Halide/NPU 최적화 3.1 왜 선형 보정이 먼저인가 — 10단계 파이프라인 도메인 구조 isp-pipe"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.2 인터랙티브 10단계 OpenISP 파이프라인 시뮬레이터", "hash": "isp-sim-sec", "keywords": "Software ISP & Halide/NPU 최적화 3.2 인터랙티브 10단계 OpenISP 파이프라인 시뮬레이터 isp-sim-sec"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.3 단계별 수식과 C99 구현 상세", "hash": "isp-stages", "keywords": "Software ISP & Halide/NPU 최적화 3.3 단계별 수식과 C99 구현 상세 isp-stages"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.4 3A 자동 제어 루프 — AWB · 색온도별 CCM 보간 · AE", "hash": "isp-3a", "keywords": "Software ISP & Halide/NPU 최적화 3.4 3A 자동 제어 루프 — AWB · 색온도별 CCM 보간 · AE isp-3a"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.5 4-Tier 실행 엔진과 Halide 커널 융합 · DMA-BUF Zero-Copy", "hash": "isp-tiers", "keywords": "Software ISP & Halide/NPU 최적화 3.5 4-Tier 실행 엔진과 Halide 커널 융합 · DMA-BUF Zero-Copy isp-tiers"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.6 Verified Lifting — C99에서 Halide로의 자동 변환과 수치 검증", "hash": "isp-vl", "keywords": "Software ISP & Halide/NPU 최적화 3.6 Verified Lifting — C99에서 Halide로의 자동 변환과 수치 검증 isp-vl"}, {"type": "섹션", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "3.7 Dual-NPU 엣지 AI 레이어 (검출 · 분할 · ZAP 자동 프레이밍)", "hash": "isp-ai", "keywords": "Software ISP & Halide/NPU 최적화 3.7 Dual-NPU 엣지 AI 레이어 (검출 · 분할 · ZAP 자동 프레이밍) isp-ai"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "SIMULATOR 01 · 10-Stage OpenISP 단계별 토글 · 파라미터 튜닝 · 돋보기 & 히스토그램", "hash": "sim-isp", "keywords": "시뮬레이터 simulator SIMULATOR 01 · 10-Stage OpenISP 단계별 토글 · 파라미터 튜닝 · 돋보기 & 히스토그램 sim-isp"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "Defective Pixel Correction (DPC)", "hash": "isp-sim-ctrl", "keywords": "시뮬레이터 simulator Defective Pixel Correction (DPC) isp-sim-ctrl"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "SIMULATOR 02 · 3A 폐루프 수렴 시뮬레이터 (조명 색온도 · 조도 계단 변화 & 적응형 EMA)", "hash": "sim-3a", "keywords": "시뮬레이터 simulator SIMULATOR 02 · 3A 폐루프 수렴 시뮬레이터 (조명 색온도 · 조도 계단 변화 & 적응형 EMA) sim-3a"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "SIMULATOR 03 · Halide 타일 커널 융합(Loop Fusion) & DRAM 트래픽 시뮬레이터", "hash": "a3-ctrl", "keywords": "시뮬레이터 simulator SIMULATOR 03 · Halide 타일 커널 융합(Loop Fusion) & DRAM 트래픽 시뮬레이터 a3-ctrl"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "4단계 자동 변환 파이프라인", "hash": "hal-ctrl", "keywords": "시뮬레이터 simulator 4단계 자동 변환 파이프라인 hal-ctrl"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "SIMULATOR 04 · ZAP (Zoom & Auto-Pan) 뷰포트 EMA 추적 시뮬레이터", "hash": "sim-zap", "keywords": "시뮬레이터 simulator SIMULATOR 04 · ZAP (Zoom & Auto-Pan) 뷰포트 EMA 추적 시뮬레이터 sim-zap"}, {"type": "시뮬레이터", "slug": "isp", "num": "03", "chTitle": "Software ISP & Halide/NPU 최적화", "title": "핵심 정리 · Chapter 03", "hash": "zap-ctrl", "keywords": "시뮬레이터 simulator 핵심 정리 · Chapter 03 zap-ctrl"}, {"type": "섹션", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "4.1 적층형 센서 구조와 군집형 CFA (Bayer · Tetracell · Hexadecacell)", "hash": "ucfa-intro", "keywords": "Universal CFA — 위상 인식 인센서 압축 4.1 적층형 센서 구조와 군집형 CFA (Bayer · Tetracell · Hexadecacell) ucfa-intro"}, {"type": "섹션", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "4.2 인터랙티브 CFA 격자 & PixelUnshuffle 위상 분해 시뮬레이터", "hash": "ucfa-sim-cfa", "keywords": "Universal CFA — 위상 인식 인센서 압축 4.2 인터랙티브 CFA 격자 & PixelUnshuffle 위상 분해 시뮬레이터 ucfa-sim-cfa"}, {"type": "섹션", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "4.3 단일 16채널 호스트 번역기(\\(\\mathcal{T}_B: 16\\to 16\\))와 센서별 위상 인식 압축기(\\(\\mathcal{E}_A^{\\mathrm{CFA}}\\))", "hash": "ucfa-arch", "keywords": "Universal CFA — 위상 인식 인센서 압축 4.3 단일 16채널 호스트 번역기(\\(\\mathcal{T}_B: 16\\to 16\\))와 센서별 위상 인식 압축기(\\(\\mathcal{E}_A^{\\mathrm{CFA}}\\)) ucfa-arch"}, {"type": "섹션", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "4.4 No-Raw-Retention 제약과 One-Pass 잠재 복원", "hash": "ucfa-diffusion", "keywords": "Universal CFA — 위상 인식 인센서 압축 4.4 No-Raw-Retention 제약과 One-Pass 잠재 복원 ucfa-diffusion"}, {"type": "섹션", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "4.5 시뮬레이션 벤치마크 결과 및 시각적 복원 비교", "hash": "ucfa-results", "keywords": "Universal CFA — 위상 인식 인센서 압축 4.5 시뮬레이션 벤치마크 결과 및 시각적 복원 비교 ucfa-results"}, {"type": "시뮬레이터", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "3D EXPLORER · 적층형 CMOS 센서 픽셀 스택 & Bayer · Tetracell · Hexadecacell 입체 분해기", "hash": "sim-ucfa-3d", "keywords": "시뮬레이터 simulator 3D EXPLORER · 적층형 CMOS 센서 픽셀 스택 & Bayer · Tetracell · Hexadecacell 입체 분해기 sim-ucfa-3d"}, {"type": "시뮬레이터", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "기존 파이프라인의 이중 부담: Remosaic + Demosaic", "hash": "ucfa-3d-ctrl", "keywords": "시뮬레이터 simulator 기존 파이프라인의 이중 부담: Remosaic + Demosaic ucfa-3d-ctrl"}, {"type": "시뮬레이터", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "SIMULATOR 01 · Bayer(2×2) · Tetracell(4×4) · Hexadecacell(8×8) 격자 & PixelUnshuffle 위상 분해기", "hash": "sim-ucfa-phase", "keywords": "시뮬레이터 simulator SIMULATOR 01 · Bayer(2×2) · Tetracell(4×4) · Hexadecacell(8×8) 격자 & PixelUnshuffle 위상 분해기 sim-ucfa-phase"}, {"type": "시뮬레이터", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "SIMULATOR 02 · CFA 패턴 & 파이프라인별 화질(PSNR / SSIM / LPIPS) · 대역폭 비교 탐색기", "hash": "ucfa-phase-ctrl", "keywords": "시뮬레이터 simulator SIMULATOR 02 · CFA 패턴 & 파이프라인별 화질(PSNR / SSIM / LPIPS) · 대역폭 비교 탐색기 ucfa-phase-ctrl"}, {"type": "시뮬레이터", "slug": "ucfa", "num": "04", "chTitle": "Universal CFA — 위상 인식 인센서 압축", "title": "핵심 정리 · Chapter 04", "hash": "ucfa-bench-ctrl", "keywords": "시뮬레이터 simulator 핵심 정리 · Chapter 04 ucfa-bench-ctrl"}, {"type": "섹션", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "5.1 왜 잠재 공간에서 직접 ISP를 수행해야 하는가? — 고차원 혼돈 속의 선형 질서", "hash": "clsp-intuition", "keywords": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP 5.1 왜 잠재 공간에서 직접 ISP를 수행해야 하는가? — 고차원 혼돈 속의 선형 질서 clsp-intuition"}, {"type": "섹션", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "5.2 핵심 수학 3대 원리 쉽게 이해하기: 1:4:1 구적법 · 3×3 할선 야코비안 · 144-D 크로네커 외적", "hash": "clsp-math", "keywords": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP 5.2 핵심 수학 3대 원리 쉽게 이해하기: 1:4:1 구적법 · 3×3 할선 야코비안 · 144-D 크로네커 외적 clsp-math"}, {"type": "섹션", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "5.3 엔드투엔드 아키텍처 & Algorithm 1 실행 체인 (Stage 0 → Stage 1–5 → Stage 6)", "hash": "clsp-arch", "keywords": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP 5.3 엔드투엔드 아키텍처 & Algorithm 1 실행 체인 (Stage 0 → Stage 1–5 → Stage 6) clsp-arch"}, {"type": "섹션", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "5.4 7단계(Stage 0–6) 잠재 텐서 진화 & 실제 하드웨어 카메라 3대 단계별 검증", "hash": "clsp-flow", "keywords": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP 5.4 7단계(Stage 0–6) 잠재 텐서 진화 & 실제 하드웨어 카메라 3대 단계별 검증 clsp-flow"}, {"type": "섹션", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "5.5 패치 단위(\\(y=7, x=8\\)) 수치 해부, 10대 카메라 정량 벤치마크 & 라이브 시뮬레이터", "hash": "clsp-verify", "keywords": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP 5.5 패치 단위(\\(y=7, x=8\\)) 수치 해부, 10대 카메라 정량 벤치마크 & 라이브 시뮬레이터 clsp-verify"}, {"type": "시뮬레이터", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "SIMULATOR · 실제 16×16×16 잠재 텐서 야코비안 변환 & 실시간 디코더 (옵션 C + TAEF1 ONNX)", "hash": "sim-clsp-jet", "keywords": "시뮬레이터 simulator SIMULATOR · 실제 16×16×16 잠재 텐서 야코비안 변환 & 실시간 디코더 (옵션 C + TAEF1 ONNX) sim-clsp-jet"}, {"type": "시뮬레이터", "slug": "comp_lsp", "num": "05", "chTitle": "White-Box Computational LSP — 16채널 잠재 공간 해석적 ISP", "title": "핵심 정리 · Chapter 05", "hash": "clsp-sim-ctrl", "keywords": "시뮬레이터 simulator 핵심 정리 · Chapter 05 clsp-sim-ctrl"}, {"type": "섹션", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "6.1 코드 ↔ 문서 정합성 감사 목록 (23개 항목)", "hash": "notes-audit", "keywords": "용어집 & 코드·문서 정합성 검증 노트 6.1 코드 ↔ 문서 정합성 감사 목록 (23개 항목) notes-audit"}, {"type": "섹션", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "6.2 Single-Source-of-Truth 빌드 원칙과 자동 검증", "hash": "notes-policy", "keywords": "용어집 & 코드·문서 정합성 검증 노트 6.2 Single-Source-of-Truth 빌드 원칙과 자동 검증 notes-policy"}, {"type": "섹션", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "6.3 AICAMERA 핵심 기술 용어집 (Interactive Glossary)", "hash": "glossary-sec", "keywords": "용어집 & 코드·문서 정합성 검증 노트 6.3 AICAMERA 핵심 기술 용어집 (Interactive Glossary) glossary-sec"}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "잠재 신호 처리 (LSP)", "hash": "glossary-sec", "keywords": "잠재 신호 처리 Latent Signal Processing LSP 센서에서 비압축 픽셀(RAW/RGB)을 그대로 전송하는 대신, 인코더를 센서 NPU(Stage A)와 호스트 NPU(Stage B)로 비대칭 분할해 MIPI 버스 페이로드를 최대 48× 줄이고 표준 확산 모델 잠재 공간(ẑ)으로 직결하는 아키텍처."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "스테이지 A 압축기 (Stage A)", "hash": "glossary-sec", "keywords": "스테이지 A 압축기 Stage A Compressor Stage A Sony IMX500 센서 내장 NPU에서 .rpk 펌웨어로 실행되는 초경량 스트라이드 합성곱 신경망(SA8 기준 5,924 파라미터, 0.122 GMACs). 512×512×3 입력을 64 KB 메타데이터 텐서 r로 압축한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "스테이지 B 번역기 (Stage B)", "hash": "glossary-sec", "keywords": "스테이지 B 번역기 Stage B Latent Translator Stage B 호스트의 Hailo-8 NPU(.hef)에서 실행되는 ResBlock 기반 번역 네트워크(SA8 기준 595,524 파라미터, 2.43 GMACs, 0.97 ms). 센서에서 받은 압축 텐서 r을 64×64×4 표준 SD VAE 잠재 텐서 ẑ로 사상한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "유니버설 잠재 허브 (Latent Hub)", "hash": "glossary-sec", "keywords": "유니버설 잠재 허브 Universal Latent Hub Latent Hub Stage B 출력을 공개 Stable Diffusion VAE 잠재 공간(스케일 0.18215)에 정렬함으로써, 엣지 경량 디코더(TAESD_ft)와 워크스테이션 생성형 확산 모델(U-Net / SD VAE)을 재학습 없이 교체·동시 구동하는 구조."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "제로 셔터 랙 생성형 캡처 (ZSL)", "hash": "glossary-sec", "keywords": "제로 셔터 랙 생성형 캡처 Zero-Shutter-Lag Generative Capture ZSL 라이브 뷰파인더 스트리밍 중 메모리에 상주하는 잠재 텐서 ẑ와 프리뷰 Canny 에지를 그대로 사용해, 센서 재노출·RAW 재전송·인센서 인코더 재실행 없이 생성형 이미지를 합성하는 캡처 방식."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "MIPI CSI-2 (CSI-2)", "hash": "glossary-sec", "keywords": "MIPI CSI-2 Camera Serial Interface 2 CSI-2 카메라 센서와 애플리케이션 프로세서(SoC)를 잇는 고속 차동 직렬 인터페이스. 고해상도 비압축 프레임 전송 시 DMA 직렬화와 메모리 경합으로 인해 엣지 파이프라인의 주 병목이 된다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "소니 IMX500 (IMX500)", "hash": "glossary-sec", "keywords": "소니 IMX500 Sony IMX500 Intelligent Vision Sensor IMX500 12.3 MP 픽셀 다이 아래에 온칩 ISP와 전용 NPU 및 SRAM(<2 MB 예산)을 적층한 지능형 비전 센서. .rpk 양자화 모델을 센서 내부에서 직접 실행해 출력 텐서를 MIPI 메타데이터로 내보낸다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "헤일로-8 (Hailo-8)", "hash": "glossary-sec", "keywords": "헤일로-8 Hailo-8 Edge AI Accelerator Hailo-8 Raspberry Pi 5의 PCIe 인터페이스에 장착되는 26 TOPS급 데이터플로 엣지 NPU. .hef 바이너리로 컴파일된 Stage B(0.97 ms), TAESD_ft(16.44 ms), Bilateral Grid, 인물 분할 모델을 고속 실행한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "TAESD (TAESD_ft)", "hash": "glossary-sec", "keywords": "TAESD Tiny AutoEncoder for Stable Diffusion TAESD_ft Stable Diffusion 잠재 텐서를 실시간으로 디코딩하기 위한 경량 디코더. 본 프로젝트에서는 Stage B 출력 분포에 맞춰 파인튜닝한 뒤 Hailo-8 .hef로 컴파일해 16.44 ms(30 FPS 카메라 상한 포화)에 실행한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "컨트롤넷 (ControlNet)", "hash": "glossary-sec", "keywords": "컨트롤넷 ControlNet ControlNet 사전 학습된 확산 모델에 공간적 구조 조건(예: Canny 에지 맵)을 주입하는 보조 신경망. ZSL 캡처에서는 프리뷰에서 추출한 Canny(70,160) 에지로 기하 구조를 보존한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "직접 통과 추정기 (STE)", "hash": "glossary-sec", "keywords": "직접 통과 추정기 Straight-Through Estimator STE 양자화 인식 학습(QAT)에서 미분 불가능한 반올림(round) 연산의 역전파 기울기를 항등 함수(∂x_q/∂x ≈ 1)로 근사해 가중치 학습을 가능하게 하는 기법."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "결함 픽셀 보정 (DPC)", "hash": "glossary-sec", "keywords": "결함 픽셀 보정 Defective Pixel Correction DPC OpenISP 1단계. 같은 색 채널의 3×3 격자(거리 ±2 px) 8-이웃 중 최솟값·최댓값 범위를 임계값 T 이상 벗어나는 핫/데드 픽셀을 중앙 두 값의 평균으로 치환한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "블랙 레벨 보정 (BLC)", "hash": "glossary-sec", "keywords": "블랙 레벨 보정 Black Level Compensation BLC OpenISP 2단계. 암전류와 음수 노이즈 클리핑 방지를 위해 ADC에 더해진 페디스털(기본 64 DN)을 빼고 [0, 1] 선형 부동소수점 범위로 정규화하는 단계."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "렌즈 쉐이딩 보정 (LSC)", "hash": "glossary-sec", "keywords": "렌즈 쉐이딩 보정 Lens Shading Correction LSC OpenISP 3단계. 광축 중심으로부터의 반경 제곱(r²)에 따른 자연 비네팅(cos⁴θ) 및 마이크로렌즈 CRA 감쇠를 방사형 다항식 1 + a₁r² + a₂r⁴ 게인으로 보상한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "안티 노이즈 필터 (ANF)", "hash": "glossary-sec", "keywords": "안티 노이즈 필터 Anti-Noise Filter ANF OpenISP 4단계. 베이어 도메인에서 같은 색 3×3 이웃(±2 px)에 공간 거리(σ_s)와 밝기 차이(σ_r) 가중치를 동시에 적용해 에지를 보존하며 노이즈를 줄이는 바이래터럴 필터."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "자동 화이트 밸런스 (AWB)", "hash": "glossary-sec", "keywords": "자동 화이트 밸런스 Auto White Balance AWB OpenISP 5단계 및 3A 루프. 광원의 색온도에 따른 색 편향을 제거하기 위해 R, G, B 채널에 대각 게인(g_R, g_G, g_B)을 곱해 무채색이 R=G=B가 되도록 맞춘다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "디모자이킹 (Demosaic)", "hash": "glossary-sec", "keywords": "디모자이킹 Demosaicing Demosaic OpenISP 6단계. 픽셀당 한 가지 색만 기록된 베이어 모자이크(RGGB)에서 이웃 픽셀을 보간해 픽셀마다 완전한 3채널(R, G, B) 값을 복원하는 과정."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "색 보정 행렬 (CCM)", "hash": "glossary-sec", "keywords": "색 보정 행렬 Color Correction Matrix CCM OpenISP 7단계. 센서의 분광 감도와 표준 색공간(sRGB) 간의 차이 및 크로스토크를 보정하기 위해 화이트 밸런스된 RGB 벡터에 곱하는 3×3 선형 변환 행렬."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "감마 보정 (Gamma)", "hash": "glossary-sec", "keywords": "감마 보정 Gamma Correction Gamma OpenISP 8단계. 인간의 비선형 밝기 지각에 맞춰 암부 계조를 확보하기 위해 선형 RGB 신호에 거듭제곱(x^(1/γ), 기본 γ=2.2) 1024-엔트리 LUT를 적용하는 비선형 변환."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "색공간 변환 (CSC)", "hash": "glossary-sec", "keywords": "색공간 변환 Color Space Conversion CSC OpenISP 9단계. 감마가 적용된 RGB를 휘도(Y)와 색차(Cb, Cr)로 분리하고 색차를 2×2 평균 서브샘플링해 BT.601 studio range planar YUV420 uint8 포맷으로 변환한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "에지 강화 (EEH)", "hash": "glossary-sec", "keywords": "에지 강화 Edge Enhancement EEH OpenISP 10단계. Y(휘도) 평면에서 3×3 박스 평균을 뺀 고주파 성분을 클리핑(coring)한 뒤 고정소수점 게인(k)을 곱해 더해주는 언샤프 마스크(USM) 샤프닝 단계."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "3A 제어 루프 (3A)", "hash": "glossary-sec", "keywords": "3A 제어 루프 Auto Exposure / Auto White Balance / Auto Focus 3A 매 프레임 서브샘플링된 픽셀 통계(Rec.709 휘도 및 채널 평균)로부터 노출(AE), 화이트 밸런스(AWB), 색온도별 CCM을 지수 이동 평균(EMA)으로 피드백 제어하는 루프."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "지수 이동 평균 (EMA)", "hash": "glossary-sec", "keywords": "지수 이동 평균 Exponential Moving Average EMA 현재 측정값과 이전 상태를 가중 평균(x_t = α·x̂ + (1-α)·x_{t-1})해 프레임 간 게인이나 추적 박스의 급격한 깜빡임(hunting/jitter)을 억제하는 시간축 필터."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "할라이드 (Halide)", "hash": "glossary-sec", "keywords": "할라이드 Halide DSL Halide 영상 처리의 '무엇을 계산할지(Algorithm)'와 '어떻게 실행할지(Schedule: 타일링, 벡터화, 병렬화, 커널 융합)'를 분리하는 도메인 특화 컴파일러 언어."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "검증된 리프팅 (Lifting)", "hash": "glossary-sec", "keywords": "검증된 리프팅 Verified Lifting Lifting 레거시 C99 영상 처리 루프를 파싱해 스텐실/포인트와이즈 중간 표현(IR)으로 분류하고, 최적화된 Halide 함수 및 스케줄 코드로 자동 변환한 뒤 수치 동치성(PSNR ≥ 40 dB)을 검증하는 컴파일 파이프라인."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "커널 융합 (Fusion)", "hash": "glossary-sec", "keywords": "커널 융합 Kernel Fusion Fusion 다단계 ISP 파이프라인에서 단계마다 전체 프레임을 DRAM에 읽고 쓰는 대신, 타일 단위로 L2 캐시/레지스터 안에서 생산자-소비자 단계를 바로 연결해 DRAM 트래픽을 13.8× 줄이는 기법(Tier 3)."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "DMA-BUF 제로카피 (DMA-BUF)", "hash": "glossary-sec", "keywords": "DMA-BUF 제로카피 DMA-BUF Zero-Copy DMA-BUF Linux 커널의 공유 물리 메모리 버퍼 핸들을 통해 CPU와 VideoCore VII GPU(Vulkan)가 동일한 메모리 페이지를 직접 매핑함으로써 호스트-디바이스 복사 지연(staging copy)을 제거하는 기법(Tier 4)."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "바이래터럴 그리드 (HDRnet Grid)", "hash": "glossary-sec", "keywords": "바이래터럴 그리드 Bilateral Grid HDRnet Grid 저해상도 입력에서 공간(x, y)×휘도(luma) 3차원 격자의 아핀 색 변환 계수를 추론한 뒤, 고해상도 가이드 맵으로 삼선형 보간(slicing)해 에지를 보존하며 실시간 국소 톤 매핑을 수행하는 구조."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "ZAP 트래커 (ZAP)", "hash": "glossary-sec", "keywords": "ZAP 트래커 Zero-Jitter Auto-Framing Tracker ZAP IMX500 센서 내 얼굴 검출(BlazeFace/SSD)과 CPU 보조 검출을 결합하고 EMA 스무딩(α=0.08)으로 4:3 뷰포트를 부드럽게 추적·크롭하는 터치-투-트랙 자동 프레이밍 엔진."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "컬러 필터 어레이 (CFA)", "hash": "glossary-sec", "keywords": "컬러 필터 어레이 Color Filter Array CFA 단일 광전 다이오드가 파장을 구분하지 못하는 한계를 극복하기 위해 각 픽셀 위에 배치하는 R, G, B 파장 선택성 광학 필터 격자."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "베이어 패턴 (Bayer)", "hash": "glossary-sec", "keywords": "베이어 패턴 Bayer Pattern Bayer 2×2 기본 단위 격자에 R 1개, G 2개(Gr, Gb), B 1개를 배치하는 표준 컬러 필터 어레이."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "테트라셀 (Tetracell)", "hash": "glossary-sec", "keywords": "테트라셀 Tetracell / Quad Bayer Tetracell 같은 색 필터를 2×2씩 묶어 4×4 기본 주기를 갖는 군집형 CFA. 저조도에서는 2×2 인접 픽셀을 합산(비닝)해 SNR을 높이고, 고조도에서는 리모자이킹으로 초고해상도를 복원한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "헥사데카셀 (Hexadecacell)", "hash": "glossary-sec", "keywords": "헥사데카셀 Hexadecacell / 16-Cell CFA Hexadecacell 같은 색 필터를 4×4(16픽셀)씩 묶어 8×8 기본 주기를 갖는 초고화소(200 MP급) 모바일 센서용 군집형 컬러 필터 어레이."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "리모자이킹 (Remosaic)", "hash": "glossary-sec", "keywords": "리모자이킹 Remosaicing Remosaic Tetracell(4×4)이나 Hexadecacell(8×8)처럼 군집화된 비표준 CFA 출력을 표준 ISP가 처리할 수 있는 2×2 베이어 배열로 재배열·보간하는 전처리 과정."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "픽셀 언셔플 (PixelUnshuffle)", "hash": "glossary-sec", "keywords": "픽셀 언셔플 PixelUnshuffle PixelUnshuffle 공간 해상도를 r배 줄이는 대신(H×W×1 → (H/r)×(W/r)×r²) 같은 위상(phase)의 픽셀들을 채널 축으로 정확히 분리해 모으는 무손실 공간-채널 재배치 연산."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "픽셀 셔플 (PixelShuffle)", "hash": "glossary-sec", "keywords": "픽셀 셔플 PixelShuffle PixelShuffle 다채널 특징 맵의 채널들을 공간 격자로 펼쳐 해상도를 r배 키우는(Sub-pixel Convolution) 업샘플링 연산. Universal CFA의 복원 디코더에서 사용된다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "최대 신호 대 잡음비 (PSNR)", "hash": "glossary-sec", "keywords": "최대 신호 대 잡음비 Peak Signal-to-Noise Ratio PSNR 원본 영상과 복원 영상 간의 평균 제곱 오차(MSE)를 로그 스케일(dB)로 나타낸 화질 지표. 값이 클수록 픽셀 단위 수치 오차가 적다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "지각 유사도 (LPIPS)", "hash": "glossary-sec", "keywords": "지각 유사도 Learned Perceptual Image Patch Similarity LPIPS 심층 신경망(VGG 등)의 중간 특징 맵 거리를 이용해 인간의 시각적 지각 차이를 측정하는 지표. 값이 작을수록(↓) 질감과 구조가 원본에 가깝다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "모델 압축 툴킷 (MCT)", "hash": "glossary-sec", "keywords": "모델 압축 툴킷 Model Compression Toolkit MCT Sony IMX500 센서 NPU 배포를 위해 Keras/PyTorch 부동소수점 모델을 대표 캘리브레이션 데이터셋(imx500_calib_frames) 기반으로 INT8 학습 후 양자화(PTQ)하는 프레임워크."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "헤일로 데이터플로 컴파일러 (Hailo DFC)", "hash": "glossary-sec", "keywords": "헤일로 데이터플로 컴파일러 Hailo Dataflow Compiler Hailo DFC ONNX 신경망 그래프를 파싱(translate_onnx_model)하고 실분포 캘리브레이션 텐서(.npy)로 INT8 양자화(optimize)한 뒤 Hailo-8 NPU용 .hef 바이너리로 컴파일하는 툴체인."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "모델 컨텍스트 프로토콜 서버 (MCP 서버)", "hash": "glossary-sec", "keywords": "모델 컨텍스트 프로토콜 서버 Model Context Protocol Server MCP 서버 tools/aicamera_mcp_server.py에 구현된 결정론적 에이전트 도구 서버. 환경 감지, 원격 벤치마크 실행, 드리프트 판정(diff_bench), 학습 런치 및 CSV 손실 파싱을 안전하게 노출한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "IMX500 신경망 패키지 (RPK)", "hash": "glossary-sec", "keywords": "IMX500 신경망 패키지 IMX500 Neural Network Firmware Package RPK imxconv-tf가 생성한 packerOut.zip을 Raspberry Pi 5의 rpk_packager로 패키징한 최종 센서 NPU 펌웨어(.rpk). 카메라 시작 시 IMX500 온칩 SRAM으로 업로드된다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "헤일로 실행 포맷 (HEF)", "hash": "glossary-sec", "keywords": "헤일로 실행 포맷 Hailo Executable Format HEF Hailo Dataflow Compiler가 생성하는 Hailo-8 NPU 전용 바이너리(.hef). Stage B(0.97 ms)와 TAESD_ft(16.44 ms) 모델을 PCIe를 통해 고속 실행한다."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "화이트박스 잠재 ISP (Comp-LSP)", "hash": "glossary-sec", "keywords": "화이트박스 잠재 ISP White-Box Computational Latent ISP Comp-LSP 16채널 선형 잠재 텐서(z_lin)를 픽셀 공간으로 디코딩하지 않고, 1차 제트 번들 분해(J¹ = DC ⊕ AC)와 심슨 1:4:1 구적법 및 3×3 할선 야코비안으로 카메라 고유 ISP(AWB·CCM·Gamma)를 해석적으로 적용하는 아키텍처."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "1차 제트 번들 분해 (J¹ = DC ⊕ AC)", "hash": "glossary-sec", "keywords": "1차 제트 번들 분해 First-Order Jet Bundle Decomposition J¹ = DC ⊕ AC 잠재 벡터 z를 8×8 패치의 평균 색도를 담당하는 0차 함수값(DC 3D 색 부분공간)과 공간 고주파 텍스처 미분(AC 16채널)의 직합으로 분해해 비선형 ISP 연산을 다루는 기하학적 틀."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "심슨 1:4:1 구적법 (1:4:1 Quadrature)", "hash": "glossary-sec", "keywords": "심슨 1:4:1 구적법 Simpson 1:4:1 / 3-Point Gauss-Legendre Quadrature 1:4:1 Quadrature 오목한 감마 곡선 위에서 발생하는 젠센 부등식 과노출 편향을 제거하기 위해, 평균 μ₀와 좌우 대칭 스프레드 μ₀±δ(δ=√1.5·σ_AC) 세 지점에서 f_ISP를 평가해 1:4:1 가중 평균하는 O(σ⁴) 수치 적분법."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "할선 야코비안 (J_3×3)", "hash": "glossary-sec", "keywords": "할선 야코비안 Secant Jacobian Matrix J_3×3 선형 ISP 연산자 M = M_ccm · diag(w_wb) · g와 감마 곡선의 유한 차분 할선 기울기 d_sec = (f_+ - f_-)/(2δ_c)를 연쇄 법칙으로 결합한 3×3 야코비안 행렬."}, {"type": "용어", "slug": "notes", "num": "06", "chTitle": "용어집 & 코드·문서 정합성 검증 노트", "title": "144차원 크로네커 외적 (z_AC ⊗ vec(J))", "hash": "glossary-sec", "keywords": "144차원 크로네커 외적 144-D Kronecker Outer Product z_AC ⊗ vec(J) 16채널 AC 텍스처(z_AC)와 평탄화된 9원소 야코비안(vec(J_3×3))의 외적으로 생성되는 144차원 특징 텐서. 프로베니우스 사상을 통해 16개 잠재 채널에 얽힌 색-기하 결합을 동시에 회전시킨다."}];

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
        <button class="sb-btn icon" id="sb-menu" aria-label="챕터 목록">${ICON_MENU}</button>
        <a class="sb-logo" href="${href("")}">${LOGO}<span>AICAMERA <small>인터랙티브 아키텍처 가이드북</small></span></a>
      </div>
      <div class="book-search">
        <svg class="book-search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
        <input type="search" aria-label="챕터, 섹션, 시뮬레이터, 용어 검색" placeholder="가이드북 검색 (예: SA8, BLC, Halide, Tetracell)" autocomplete="off">
        <div class="book-search-results" aria-live="polite"></div>
      </div>
      <div class="book-nav-right">
        <a class="sb-btn series-link" href="${papersHref}" title="LSP · Universal CFA · White-Box Comp-LSP 논문 모음"><span>📚 논문 (Papers)</span></a>
        <a class="sb-btn series-link" href="${href("notes")}#glossary-sec" title="용어집 & 검증 노트"><span>용어집 · 검증</span></a>
        <button class="sb-iconbtn sb-lang-toggle" id="sb-lang-btn" title="한국어 정본 · Click to switch to English (EN)"><span class="lg-on">KO</span><span class="lg-dim">/</span><span class="lg-dim">EN</span></button>
        <button class="sb-btn icon" id="sb-theme" aria-label="테마 전환"></button>
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
        .map((c) => ({ type: "챕터", title: c.title, slug: c.slug, num: c.num, chTitle: c.title, hash: "" }));
      const detailMatches = PREBUILT_SEARCH.filter((e) => includesWords(e.title + " " + (e.keywords || "")));
      const matches = [
        ...chapterMatches.slice(0, 4),
        ...detailMatches.filter((e) => e.type === "섹션").slice(0, 6),
        ...detailMatches.filter((e) => e.type === "시뮬레이터").slice(0, 5),
        ...detailMatches.filter((e) => e.type === "용어").slice(0, 4),
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
        empty.textContent = "검색 결과가 없습니다";
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
      <li><a href="${href("")}" class="${curSlug ? "" : "active"}"><span class="num">00</span><span>홈 · 전체 아키텍처 로드맵</span></a></li>
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
          link.title = "이 시뮬레이터 링크";
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
        (prev ? `<a class="prev" href="${href(prev.slug)}"><small>← 이전 · Chapter ${prev.num}</small>${prev.title}</a>` : `<a class="prev" href="${href("")}"><small>← 처음으로</small>홈 · 전체 아키텍처 로드맵</a>`) +
        (next ? `<a class="next" href="${href(next.slug)}"><small>다음 · Chapter ${next.num} →</small>${next.title}</a>` : "");
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
    foot.innerHTML = `AICAMERA 인터랙티브 아키텍처 가이드북 · <code>docs/build_spec_portal.py</code> 로 생성 · build 2026-11-08 17:49 · commit <code>3df80f0</code><br>모든 벤치마크 수치는 저장소 JSON 정본에서, ISP·3A 기본값은 C99 헤더에서 빌드 시 자동 추출 및 검증됩니다.`;
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
