# 🌐 Yongjoon Song, Ph.D. — Interactive Technical Portals & Web Resume

[![Web Resume](https://img.shields.io/badge/📄_Executive_Resume-yjqkrtk--ux.github.io-0a84c6?style=for-the-badge)](https://yjqkrtk-ux.github.io/)
[![AICAMERA Guidebook](https://img.shields.io/badge/📷_AICAMERA_Guidebook-/aicamera/-7a4ce0?style=for-the-badge)](https://yjqkrtk-ux.github.io/aicamera/)
[![KAIST Grad Works](https://img.shields.io/badge/🎓_KAIST_Grad_Works-/gradworks/-1f9d55?style=for-the-badge)](https://yjqkrtk-ux.github.io/gradworks/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yongjoon_Song-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yongjoon-song-447929194/)

> **송용준 박사 (Yongjoon Song, Ph.D. · KAIST EE)** 의 공개 웹 이력서 및 인터랙티브 엔지니어링 아키텍처 가이드북 통합 배포 저장소입니다.  
> 아래 링크를 클릭하면 브라우저에서 즉시 **실시간 수식(KaTeX) · 2D Canvas · 3D WebGL 시뮬레이터**가 포함된 인터랙티브 기술 문서를 열람할 수 있습니다.

---

## 🚀 Live Portals (주요 산출물 바로가기)

| 구분 | 산출물 명칭 | 핵심 내용 및 기술 범위 | 바로가기 |
| :--- | :--- | :--- | :---: |
| **📄 Resume** | **Executive Web Resume & Portfolio** | • 국·영문(KO/EN) 전환 지원 프로페셔널 웹 이력서<br>• On-Sensor AI · Computational Imaging · Edge NPU R&D 경력 및 주요 특허·논문<br>• A4 2페이지 정밀 인쇄 레이아웃 내장 | [**열기 →**](https://yjqkrtk-ux.github.io/) |
| **📷 Edge AI Camera** | **AICAMERA Interactive Architecture Guidebook** | • **Latent Signal Processing (LSP)**: Sony IMX500 센서 NPU + Hailo-8 호스트 NPU 비대칭 분할 추론<br>• **Software ISP & Halide/NPU**: 10단계 C99 레퍼런스 ISP, 3A 루프, Verified Lifting<br>• **Universal CFA**: Bayer(2×2) · Tetracell(4×4) · Hexadecacell(8×8) 위상 분해 압축 | [**열기 →**](https://yjqkrtk-ux.github.io/aicamera/) |
| **🎓 Research & Systems** | **KAIST Grad Works & Workspace Guidebook** | • **Bioinformatics**: 심층 강화학습 유전체 서열 정렬(`DQNAlign`, IEEE OJEMB 2021) 및 `REminerII`<br>• **3D WPT & EV**: 양안 3D 비전 · 열화상 안전 제어(`US 12,496,917 B2`) 및 85kHz OLEV 급전 텔레매틱스<br>• **Automation & Specialty**: 비전 FSM, 흡수 마르코프 체인, Casio 1-bit VRAM 엔진, 60GHz 3D MIMO | [**열기 →**](https://yjqkrtk-ux.github.io/gradworks/) |

---

## 📷 1. AICAMERA — 이종 엣지 카메라 인터랙티브 가이드북
🔗 **Main Portal**: [**https://yjqkrtk-ux.github.io/aicamera/**](https://yjqkrtk-ux.github.io/aicamera/)

| 챕터 | 제목 | 주요 수식 · 인터랙티브 시뮬레이터 | 링크 |
| :---: | :--- | :--- | :---: |
| **Home** | **전체 아키텍처 로드맵** | 광자(Photon)에서 잠재 텐서($\hat{z}$)와 실시간 ISP까지 전체 시스템 파이프라인 맵 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/) |
| **Ch.01** | **이종 엣지 카메라와 시스템 병목** | MIPI CSI-2 직렬화 대역폭 계산기 · IMX500(`.rpk`) & Hailo-8(`.hef`) 듀얼 NPU 파이프라인 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/chapters/overview.html) |
| **Ch.02** | **Latent Signal Processing (LSP)** | 센서–호스트 비대칭 분할 인코더(Stage A/B) · Power-of-2 QAT · 30 FPS 실시간 프리뷰 & ZSL 캡처 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/chapters/lsp.html) |
| **Ch.03** | **Software ISP & Halide/NPU 최적화** | 10단계 C99 레퍼런스 ISP 인터랙티브 튜너 · 3A 제어 루프 · 4-Tier Halide/GPU 가속 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/chapters/isp.html) |
| **Ch.04** | **Universal CFA — 위상 인식 인센서 압축** | 적층형 CMOS 센서 3D 단면 뷰어 · Bayer/Tetracell/Hexadecacell 패턴 및 PixelUnshuffle 시뮬레이터 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/chapters/ucfa.html) |
| **Ch.05** | **용어집 & 코드·문서 정합성 검증 노트** | 23개 정합성 감사(Audit) 테이블 · 45+ 핵심 기술 용어 실시간 검색 사전 | [바로가기](https://yjqkrtk-ux.github.io/aicamera/chapters/notes.html) |

---

## 🎓 2. KAIST Grad Works — 박사과정 연구 · 엔지니어링 가이드북
🔗 **Main Portal**: [**https://yjqkrtk-ux.github.io/gradworks/**](https://yjqkrtk-ux.github.io/gradworks/)

| 챕터 | 제목 | 주요 수식 · 인터랙티브 시뮬레이터 | 링크 |
| :---: | :--- | :--- | :---: |
| **Home** | **전체 아키텍처 로드맵** | 5대 엔지니어링 테마(40개 서브모듈) 및 학술·미디어 아카이브 통합 시스템 맵 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/) |
| **Ch.01** | **마스터 워크스페이스 & 3-Pillar 아키텍처** | 3-Pillar 관심사 분리 인터랙티브 토폴로지 맵 · 40개 서브모듈 탐색기 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/overview.html) |
| **Ch.02** | **바이오인포매틱스 & 심층 강화학습 서열 정렬** | `DQNAlign` 국소 윈도우 MDP & Exact Match Skip 시뮬레이터 · `REminerII` 2-bit 패킹 · `JC69` 진화거리 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/bio.html) |
| **Ch.03** | **3D 무선전력전송(WPT) & OLEV 텔레매틱스** | Tsai 11-DoF 양안 3D 삼각측량 & FLIR 열화상 안전 인터록(3D WebGL) · 85kHz OLEV UTM 예열 시뮬레이터 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/wpt.html) |
| **Ch.04** | **지능형 자동화 · 임베디드 · 60GHz 3D MIMO** | 13-상태 비전 FSM · 스타포스 $31\times 31$ 흡수 마르코프 체인 솔버 · Casio 1-bit VRAM · WINNER II 3D MIMO | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/automation.html) |
| **Ch.05** | **데이터 파이프라인 · 웹 플래너 · 비전 스튜디오** | 2-Track 원장 집계 & 무의존성 OOXML `.xlsx` 빌더 · 오프라인 지도 플래너 · YuNet+SFace 128-D 뷰어 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/life.html) |
| **Ch.06** | **KAIST 학술 기록 & 아카이브 거버넌스** | KAIST 전공 강의노트(449건)·랩세미나(430건)·학위논문 아카이브 및 무결성 정책 시뮬레이터 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/archive.html) |
| **Ch.07** | **정합성 검증 노트 & 핵심 용어집** | 전 영역 33개 정합성 감사(Audit) 노트 및 35개 핵심 기술 용어 인터랙티브 사전 | [바로가기](https://yjqkrtk-ux.github.io/gradworks/chapters/notes.html) |

---

## 🛠️ Repository Structure

```text
yjqkrtk-ux.github.io/
├── index.html          # 📄 Executive Web Resume (https://yjqkrtk-ux.github.io/)
├── aicamera/           # 📷 AICAMERA Interactive Architecture Guidebook (https://yjqkrtk-ux.github.io/aicamera/)
└── gradworks/          # 🎓 KAIST Grad Works & Workspace Guidebook (https://yjqkrtk-ux.github.io/gradworks/)
```
