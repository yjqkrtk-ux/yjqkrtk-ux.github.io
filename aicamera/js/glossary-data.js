window.BOOK_GLOSSARY = {
  "version": 1,
  "terms": [
    {
      "ko": "잠재 신호 처리",
      "en": "Latent Signal Processing",
      "abbr": "LSP",
      "def": "센서에서 비압축 픽셀(RAW/RGB)을 그대로 전송하는 대신, 인코더를 센서 NPU(Stage A)와 호스트 NPU(Stage B)로 비대칭 분할해 MIPI 버스 페이로드를 최대 48× 줄이고 표준 확산 모델 잠재 공간(ẑ)으로 직결하는 아키텍처.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "스테이지 A 압축기",
      "en": "Stage A Compressor",
      "abbr": "Stage A",
      "def": "Sony IMX500 센서 내장 NPU에서 .rpk 펌웨어로 실행되는 초경량 스트라이드 합성곱 신경망(SA8 기준 5,924 Conv2d 가중치 [내보내기 그래프 9.59K 파라미터], 0.122 GMACs). 512×512×3 입력을 64 KB 메타데이터 텐서 r로 압축한다.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "스테이지 B 번역기",
      "en": "Stage B Latent Translator",
      "abbr": "Stage B",
      "def": "호스트 NPU에서 센서 압축 텐서 r을 표준 잠재 다양체 ẑ로 사상하는 ResBlock 번역 네트워크. LSP(SA8)에서는 Hailo-8(.hef, 595,524 파라미터, 2.43 GMACs, 0.97 ms)이 64×64×4 SD VAE 잠재 공간으로 사상하며, 16채널 단일 스트림 SE-Universal-CFA에서는 센서 불변 통합 번역기(T_B: 16→16, 1.52M 파라미터)가 FLUX.1 / TAEF1 잠재 공간으로 정렬한다.",
      "chapters": [
        "overview",
        "lsp",
        "ucfa"
      ]
    },
    {
      "ko": "유니버설 잠재 허브",
      "en": "Universal Latent Hub",
      "abbr": "Latent Hub",
      "def": "Stage B 출력을 공개 Stable Diffusion VAE 잠재 공간(스케일 0.18215)에 정렬함으로써, 엣지 경량 디코더(TAESD_ft)와 워크스테이션 생성형 확산 모델(U-Net / SD VAE)을 재학습 없이 교체·동시 구동하는 구조.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "제로 셔터 랙 생성형 캡처",
      "en": "Zero-Shutter-Lag Generative Capture",
      "abbr": "ZSL",
      "def": "라이브 뷰파인더 스트리밍 중 메모리에 상주하는 잠재 텐서 ẑ와 프리뷰 Canny 에지를 그대로 사용해, 센서 재노출·RAW 재전송·인센서 인코더 재실행 없이 생성형 이미지를 합성하는 캡처 방식.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "MIPI CSI-2",
      "en": "Camera Serial Interface 2",
      "abbr": "CSI-2",
      "def": "카메라 센서와 애플리케이션 프로세서(SoC)를 잇는 고속 차동 직렬 인터페이스. 고해상도 비압축 프레임 전송 시 DMA 직렬화와 메모리 경합으로 인해 엣지 파이프라인의 주 병목이 된다.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "소니 IMX500",
      "en": "Sony IMX500 Intelligent Vision Sensor",
      "abbr": "IMX500",
      "def": "12.3 MP 픽셀 다이 아래에 온칩 ISP와 전용 NPU 및 SRAM(<2 MB 예산)을 적층한 지능형 비전 센서. .rpk 양자화 모델을 센서 내부에서 직접 실행해 출력 텐서를 MIPI 메타데이터로 내보낸다.",
      "chapters": [
        "overview",
        "lsp",
        "isp"
      ]
    },
    {
      "ko": "헤일로-8",
      "en": "Hailo-8 Edge AI Accelerator",
      "abbr": "Hailo-8",
      "def": "Raspberry Pi 5의 PCIe 인터페이스에 장착되는 26 TOPS급 데이터플로 엣지 NPU. .hef 바이너리로 컴파일된 Stage B(0.97 ms), TAESD_ft(16.44 ms), Bilateral Grid, 인물 분할 모델을 고속 실행한다.",
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
      "def": "Stable Diffusion 잠재 텐서를 실시간으로 디코딩하기 위한 경량 디코더. 본 프로젝트에서는 Stage B 출력 분포에 맞춰 파인튜닝한 뒤 Hailo-8 .hef로 컴파일해 16.44 ms(30 FPS 카메라 상한 포화)에 실행한다.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "컨트롤넷",
      "en": "ControlNet",
      "abbr": "ControlNet",
      "def": "사전 학습된 확산 모델에 공간적 구조 조건(예: Canny 에지 맵)을 주입하는 보조 신경망. ZSL 캡처에서는 프리뷰에서 추출한 Canny(70,160) 에지로 기하 구조를 보존한다.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "직접 통과 추정기",
      "en": "Straight-Through Estimator",
      "abbr": "STE",
      "def": "양자화 인식 학습(QAT)에서 미분 불가능한 반올림(round) 연산의 역전파 기울기를 항등 함수(∂x_q/∂x ≈ 1)로 근사해 가중치 학습을 가능하게 하는 기법.",
      "chapters": [
        "lsp"
      ]
    },
    {
      "ko": "결함 픽셀 보정",
      "en": "Defective Pixel Correction",
      "abbr": "DPC",
      "def": "OpenISP 1단계. 같은 색 채널의 3×3 격자(거리 ±2 px) 8-이웃 중 최솟값·최댓값 범위를 임계값 T 이상 벗어나는 핫/데드 픽셀을 중앙 두 값의 평균으로 치환한다.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "블랙 레벨 보정",
      "en": "Black Level Compensation",
      "abbr": "BLC",
      "def": "OpenISP 2단계 및 Comp-LSP Class I 연산자. 암전류와 음수 노이즈 클리핑 방지를 위해 ADC에 더해진 페디스털(기본 64 DN)을 빼고 [0, 1] 선형 부동소수점 범위로 정규화하는 단계.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "렌즈 쉐이딩 보정",
      "en": "Lens Shading Correction",
      "abbr": "LSC",
      "def": "OpenISP 3단계. 광축 중심으로부터의 반경 제곱(r²)에 따른 자연 비네팅(cos⁴θ) 및 마이크로렌즈 CRA 감쇠를 방사형 다항식 1 + a₁r² + a₂r⁴ 게인으로 보상한다.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "안티 노이즈 필터",
      "en": "Anti-Noise Filter",
      "abbr": "ANF",
      "def": "OpenISP 4단계. 베이어 도메인에서 같은 색 3×3 이웃(±2 px)에 공간 거리(σ_s)와 밝기 차이(σ_r) 가중치를 동시에 적용해 에지를 보존하며 노이즈를 줄이는 바이래터럴 필터.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "자동 화이트 밸런스",
      "en": "Auto White Balance",
      "abbr": "AWB",
      "def": "OpenISP 5단계, 3A 루프 및 Comp-LSP Class I 연산자. 광원의 색온도에 따른 색 편향을 제거하기 위해 R, G, B 채널에 대각 게인(g_R, g_G, g_B)을 곱해 무채색이 R=G=B가 되도록 맞춘다.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "디모자이킹",
      "en": "Demosaicing",
      "abbr": "Demosaic",
      "def": "OpenISP 6단계. 픽셀당 한 가지 색만 기록된 베이어 모자이크(RGGB)에서 이웃 픽셀을 보간해 픽셀마다 완전한 3채널(R, G, B) 값을 복원하는 과정.",
      "chapters": [
        "isp",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "색 보정 행렬",
      "en": "Color Correction Matrix",
      "abbr": "CCM",
      "def": "OpenISP 7단계 및 Comp-LSP Class I 연산자. 센서의 분광 감도와 표준 색공간(sRGB) 간의 차이 및 크로스토크를 보정하기 위해 화이트 밸런스된 RGB 벡터에 곱하는 3×3 선형 변환 행렬.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "감마 보정",
      "en": "Gamma Correction",
      "abbr": "Gamma",
      "def": "OpenISP 8단계 및 Comp-LSP Class II 비선형 연산자. 인간의 비선형 밝기 지각에 맞춰 암부 계조를 확보하기 위해 선형 RGB 신호에 거듭제곱(x^(1/γ), 기본 γ=2.2) 곡선을 적용하는 비선형 변환.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "색공간 변환",
      "en": "Color Space Conversion",
      "abbr": "CSC",
      "def": "OpenISP 9단계. 감마가 적용된 RGB를 휘도(Y)와 색차(Cb, Cr)로 분리하고 색차를 2×2 평균 서브샘플링해 BT.601 studio range planar YUV420 uint8 포맷으로 변환한다.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "에지 강화",
      "en": "Edge Enhancement",
      "abbr": "EEH",
      "def": "OpenISP 10단계 및 Comp-LSP Class III 공간 커널. 고주파 경계 성분을 추출·코어링(coring)한 뒤 게인(k)을 곱해 더해주는 샤프닝 단계.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "3A 제어 루프",
      "en": "Auto Exposure / Auto White Balance / Auto Focus",
      "abbr": "3A",
      "def": "매 프레임 서브샘플링된 픽셀 통계(Rec.709 휘도 및 채널 평균)로부터 노출(AE), 화이트 밸런스(AWB), 색온도별 CCM을 지수 이동 평균(EMA)으로 피드백 제어하는 루프.",
      "chapters": [
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "지수 이동 평균",
      "en": "Exponential Moving Average",
      "abbr": "EMA",
      "def": "현재 측정값과 이전 상태를 가중 평균(x_t = α·x̂ + (1-α)·x_{t-1})해 프레임 간 게인이나 추적 박스의 급격한 깜빡임(hunting/jitter)을 억제하는 시간축 필터.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "할라이드",
      "en": "Halide DSL",
      "abbr": "Halide",
      "def": "영상 처리의 '무엇을 계산할지(Algorithm)'와 '어떻게 실행할지(Schedule: 타일링, 벡터화, 병렬화, 커널 융합)'를 분리하는 도메인 특화 컴파일러 언어.",
      "chapters": [
        "overview",
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "검증된 리프팅",
      "en": "Verified Lifting",
      "abbr": "Lifting",
      "def": "레거시 C99 영상 처리 루프를 파싱해 스텐실/포인트와이즈 중간 표현(IR)으로 분류하고, 최적화된 Halide 함수 및 스케줄 코드로 자동 변환한 뒤 수치 동치성(PSNR ≥ 40 dB)을 검증하는 컴파일 파이프라인.",
      "chapters": [
        "overview",
        "isp"
      ]
    },
    {
      "ko": "커널 융합",
      "en": "Kernel Fusion",
      "abbr": "Fusion",
      "def": "다단계 ISP 파이프라인에서 단계마다 전체 프레임을 DRAM에 읽고 쓰는 대신, 타일 단위로 L2 캐시/레지스터 안에서 생산자-소비자 단계를 바로 연결해 DRAM 트래픽을 13.8× 줄이는 기법(Tier 3).",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "DMA-BUF 제로카피",
      "en": "DMA-BUF Zero-Copy",
      "abbr": "DMA-BUF",
      "def": "Linux 커널의 공유 물리 메모리 버퍼 핸들을 통해 CPU와 VideoCore VII GPU(Vulkan)가 동일한 메모리 페이지를 직접 매핑함으로써 호스트-디바이스 복사 지연(staging copy)을 제거하는 기법(Tier 4).",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "바이래터럴 그리드",
      "en": "Bilateral Grid",
      "abbr": "HDRnet Grid",
      "def": "저해상도 입력에서 공간(x, y)×휘도(luma) 3차원 격자의 아핀 색 변환 계수를 추론한 뒤, 고해상도 가이드 맵으로 삼선형 보간(slicing)해 에지를 보존하며 실시간 국소 톤 매핑을 수행하는 구조.",
      "chapters": [
        "overview",
        "isp",
        "comp_lsp"
      ]
    },
    {
      "ko": "ZAP 트래커",
      "en": "Zero-Jitter Auto-Framing Tracker",
      "abbr": "ZAP",
      "def": "IMX500 센서 내 얼굴 검출(BlazeFace/SSD)과 CPU 보조 검출을 결합하고 EMA 스무딩(α=0.08)으로 4:3 뷰포트를 부드럽게 추적·크롭하는 터치-투-트랙 자동 프레이밍 엔진.",
      "chapters": [
        "isp"
      ]
    },
    {
      "ko": "컬러 필터 어레이",
      "en": "Color Filter Array",
      "abbr": "CFA",
      "def": "단일 광전 다이오드가 파장을 구분하지 못하는 한계를 극복하기 위해 각 픽셀 위에 배치하는 R, G, B 파장 선택성 광학 필터 격자.",
      "chapters": [
        "isp",
        "ucfa"
      ]
    },
    {
      "ko": "베이어 패턴",
      "en": "Bayer Pattern",
      "abbr": "Bayer",
      "def": "2×2 기본 단위 격자에 R 1개, G 2개(Gr, Gb), B 1개를 배치하는 표준 컬러 필터 어레이.",
      "chapters": [
        "isp",
        "ucfa"
      ]
    },
    {
      "ko": "테트라셀",
      "en": "Tetracell / Quad Bayer",
      "abbr": "Tetracell",
      "def": "같은 색 필터를 2×2씩 묶어 4×4 기본 주기를 갖는 군집형 CFA. 저조도에서는 2×2 인접 픽셀을 합산(비닝)해 SNR을 높이고, 고조도에서는 리모자이킹으로 초고해상도를 복원한다.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "헥사데카셀",
      "en": "Hexadecacell / 16-Cell CFA",
      "abbr": "Hexadecacell",
      "def": "같은 색 필터를 4×4(16픽셀)씩 묶어 8×8 기본 주기를 갖는 초고화소(200 MP급) 모바일 센서용 군집형 컬러 필터 어레이.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "리모자이킹",
      "en": "Remosaicing",
      "abbr": "Remosaic",
      "def": "Tetracell(4×4)이나 Hexadecacell(8×8)처럼 군집화된 비표준 CFA 출력을 표준 ISP가 처리할 수 있는 2×2 베이어 배열로 재배열·보간하는 전처리 과정.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "픽셀 언셔플",
      "en": "PixelUnshuffle",
      "abbr": "PixelUnshuffle",
      "def": "공간 해상도를 r배 줄이는 대신(H×W×1 → (H/r)×(W/r)×r²) 같은 위상(phase)의 픽셀들을 채널 축으로 정확히 분리해 모으는 무손실 공간-채널 재배치 연산.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "픽셀 셔플",
      "en": "PixelShuffle",
      "abbr": "PixelShuffle",
      "def": "다채널 특징 맵의 채널들을 공간 격자로 펼쳐 해상도를 r배 키우는(Sub-pixel Convolution) 업샘플링 연산. 16채널 SE-Universal-CFA의 DemosaicPixelShuffleDecoder에서 사용된다.",
      "chapters": [
        "ucfa"
      ]
    },
    {
      "ko": "최대 신호 대 잡음비",
      "en": "Peak Signal-to-Noise Ratio",
      "abbr": "PSNR",
      "def": "원본 영상과 복원 영상 간의 평균 제곱 오차(MSE)를 로그 스케일(dB)로 나타낸 화질 지표. 값이 클수록 픽셀 단위 수치 오차가 적다.",
      "chapters": [
        "lsp",
        "isp",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "지각 유사도",
      "en": "Learned Perceptual Image Patch Similarity",
      "abbr": "LPIPS",
      "def": "심층 신경망(VGG 등)의 중간 특징 맵 거리를 이용해 인간의 시각적 지각 차이를 측정하는 지표. 값이 작을수록(↓) 질감과 구조가 원본에 가깝다.",
      "chapters": [
        "lsp",
        "ucfa"
      ]
    },
    {
      "ko": "모델 압축 툴킷",
      "en": "Model Compression Toolkit",
      "abbr": "MCT",
      "def": "Sony IMX500 센서 NPU 배포를 위해 Keras/PyTorch 부동소수점 모델을 대표 캘리브레이션 데이터셋(imx500_calib_frames) 기반으로 INT8 학습 후 양자화(PTQ)하는 프레임워크.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "헤일로 데이터플로 컴파일러",
      "en": "Hailo Dataflow Compiler",
      "abbr": "Hailo DFC",
      "def": "ONNX 신경망 그래프를 파싱(translate_onnx_model)하고 실분포 캘리브레이션 텐서(.npy)로 INT8 양자화(optimize)한 뒤 Hailo-8 NPU용 .hef 바이너리로 컴파일하는 툴체인.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "모델 컨텍스트 프로토콜 서버",
      "en": "Model Context Protocol Server",
      "abbr": "MCP 서버",
      "def": "tools/aicamera_mcp_server.py에 구현된 결정론적 에이전트 도구 서버. 환경 감지, 원격 벤치마크 실행, 드리프트 판정(diff_bench), 학습 런치 및 CSV 손실 파싱을 안전하게 노출한다.",
      "chapters": [
        "overview"
      ]
    },
    {
      "ko": "IMX500 신경망 패키지",
      "en": "IMX500 Neural Network Firmware Package",
      "abbr": "RPK",
      "def": "imxconv-tf가 생성한 packerOut.zip을 Raspberry Pi 5의 rpk_packager로 패키징한 최종 센서 NPU 펌웨어(.rpk). 카메라 시작 시 IMX500 온칩 SRAM으로 업로드된다.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "헤일로 실행 포맷",
      "en": "Hailo Executable Format",
      "abbr": "HEF",
      "def": "Hailo Dataflow Compiler가 생성하는 Hailo-8 NPU 전용 바이너리(.hef). Stage B(0.97 ms)와 TAESD_ft(16.44 ms) 모델을 PCIe를 통해 고속 실행한다.",
      "chapters": [
        "overview",
        "lsp"
      ]
    },
    {
      "ko": "화이트박스 잠재 ISP",
      "en": "White-Box Computational LSP",
      "abbr": "Comp-LSP · Comp-LSP 2.0",
      "def": "16채널 잠재 텐서(z₀ ∈ ℝ¹⁶)를 픽셀 공간으로 디코딩하지 않고, Class I 선형·Class II 비선형(1:4:1 심슨 구적법 & 3×3 할선 야코비안)·Class III 공간 커널 및 4단계 리파이너로 7단계 물리 ISP를 해석적으로 수행하는 아키텍처.",
      "chapters": [
        "overview",
        "comp_lsp"
      ]
    },
    {
      "ko": "1차 제트 번들",
      "en": "1st-Order Jet Bundle · First-Order Jet Bundle",
      "abbr": "J¹ = DC ⊕ AC",
      "def": "16채널 잠재 벡터 z₀를 8×8 패치의 3차원 평균 색도 곡면 좌표(S_DC³)와 13차원 공간 고주파 에지·텍스처 미분(S_AC¹³)의 직합으로 분해해 비선형 ISP 연산을 다루는 기하학적 틀.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "1:4:1 심슨 구적법",
      "en": "1:4:1 Simpson Quadrature · 3-Point Gauss-Legendre Quadrature",
      "abbr": "1:4:1 구적법",
      "def": "오목한 감마 곡선 위에서 발생하는 젠센 부등식 분산 오차를 제거하기 위해 평균 c̄₀와 좌우 대칭 노드 c̄₀±δ(δ=√1.5·σ_AC) 세 지점에서 f_ISP를 평가해 1:4:1로 가중 평균하는 O(σ⁴) 수치 구적법(+3.60~+7.47 dB 패치 DC 이득).",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "할선 야코비안",
      "en": "Secant Jacobian · 3×3 Secant Jacobian",
      "abbr": "J_3×3",
      "def": "선형 ISP 연산자(BLC·WB·CCM)와 비선형 감마 곡선의 중심 유한 차분 할선 기울기 (f_+ − f_-)/(2δ)를 연쇄 법칙으로 결합한 3×3 야코비안 행렬로, 13차원 AC 에지 부분공간의 채널 교차 색도와 암부 대비를 복원한다.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "144차원 크로네커 외적",
      "en": "144-D Kronecker Outer Product · Kronecker Outer Product",
      "abbr": "z_AC ⊗ vec(J)",
      "def": "잠재 AC 에지 특징과 평탄화된 9원소 야코비안 편차 vec(J_3×3 − I₃)의 외적으로 생성되는 144차원 쌍선형 특징 텐서. 프로베니우스 사상을 통해 16개 잠재 채널에 얽힌 색-기하 결합을 동시에 회전시킨다.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "클래스 III 공간 커널",
      "en": "Class III Spatial Kernel",
      "abbr": "Latent NR · EEH · LTM",
      "def": "픽셀 디코딩 없이 16채널 잠재 격자 위에서 패치 내 13D 르장드르 AC 사영기와 패치 간 3×3 유한차분 스텐실을 결합해 양방향 노이즈 억제(NR), 라플라시안 에지 강화(EEH), 로컬 톤 매핑(LTM)을 수행하는 Stage 5 연산자군.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "13차원 직교 AC 사영기",
      "en": "13D Orthonormal AC Projector",
      "abbr": "Legendre Projector P_AC",
      "def": "3차원 평균색 부분공간(S_DC³)에 쌍직교하는 13차원 공간 주파수 부분공간(S_AC¹³ = Π_x^(3) ⊕ Π_y^(3) ⊕ Π_curv^(7))으로의 사영 연산자(P_AC = I₁₆ − P_DC)로, 패치 평균색을 보존한 채 방향성 기울기와 라플라시안 곡률만 선택 제어한다.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "4단계 다양체 리파이너",
      "en": "4-Step Manifold Refiner",
      "abbr": "Residual ODE Refiner",
      "def": "32×32 인코더 수용장 중첩으로 발생하는 잠재 패치 경계 위상 오차를 교정하는 경량 4단계 감쇠 잔차 3×3 합성곱 ODE 리파이너(Stage 6, 96K 파라미터)로, 10대 카메라 평균 PSNR을 25.04 dB(0-Net)에서 27.18 dB로 끌어올린다.",
      "chapters": [
        "comp_lsp"
      ]
    },
    {
      "ko": "16채널 잠재 오토인코더",
      "en": "16-Channel VAE",
      "abbr": "FLUX.1 · TAEF1",
      "def": "8×8×3(192) 픽셀 블록을 16차원 잠재 벡터 z ∈ ℝ¹⁶(3D 평균색 S_DC³ ⊕ 13D 에지·질감 S_AC¹³)으로 압축하는 현대 확산 비전 표준 잠재 인터페이스. SE-Universal-CFA와 Comp-LSP 2.0의 공통 타깃 다양체이다.",
      "chapters": [
        "overview",
        "ucfa",
        "comp_lsp"
      ]
    },
    {
      "ko": "미분가능 역방향 3A 자동 튜닝",
      "en": "Differentiable Inverse 3A",
      "abbr": "Latent Inverse 3A",
      "def": "해석적 잠재 ISP 연산자를 통해 타깃 화질 손실의 기울기를 카메라 제어 파라미터(노출 게인·화이트밸런스·CCM·감마)로 직접 역전파함으로써 픽셀 디코딩 루프 대비 765.2× 빠르게 최적 3A를 수렴시키는 기법.",
      "chapters": [
        "comp_lsp"
      ]
    }
  ]
};
