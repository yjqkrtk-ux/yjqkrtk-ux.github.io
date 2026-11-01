/* ==========================================================================
   Workspace & KAIST Grad Works Guidebook — 공통 런타임 (SensorBook 프레임워크)
   ========================================================================== */
(function () {
  const SB = (window.SB = window.SB || {});

  SB.CHAPTERS = [
  {
    "slug": "overview",
    "num": "01",
    "title": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄",
    "desc": "GoogleDrive 3대 기둥(Development · Documents · Photos)의 6대 운영 헌장, 40개 Git 서브모듈 + Theme 5 오토메이션 토폴로지, 학위논문·특허 계보를 한눈에 해부합니다.",
    "tags": [
      "3-Pillar",
      "40 Submodules",
      "sim"
    ]
  },
  {
    "slug": "bio",
    "num": "02",
    "title": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝",
    "desc": "전역 DP O(N1·N2) 장벽을 국소 슬라이딩 윈도우 MDP와 Dueling Double DQN + Exact Match Skip으로 돌파한 박사학위 핵심 파이프라인(IEEE OJEMB)과 REminerII·REDNN을 다룹니다.",
    "tags": [
      "DQNAlign",
      "REminerII",
      "sim"
    ]
  },
  {
    "slug": "wpt",
    "num": "03",
    "title": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스",
    "desc": "Tsai 11-DoF 핀홀 캘리브레이션과 양안 3D 광선 삼각측량, FLIR Lepton 열화상·Coral EdgeTPU 기반 인체 감지 차단(US 12,496,917 B2), 85kHz OLEV 텔레매틱스를 분석합니다.",
    "tags": [
      "US 12,496,917 B2",
      "3d",
      "sim"
    ]
  },
  {
    "slug": "automation",
    "num": "04",
    "title": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템",
    "desc": "Win32 DirectInput 스캔코드와 13-상태 우선순위 FSM, 찬스 타임을 반영한 흡수 마르코프 체인(StarForce), 로파고(Lophago), Casio 128×64 엔진 및 WINNER II 3D MIMO 채널을 다룹니다.",
    "tags": [
      "PyMaple FSM",
      "StarForce Markov",
      "sim"
    ]
  },
  {
    "slug": "life",
    "num": "05",
    "title": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서",
    "desc": "환불 부호 보존(-tx['amount'])과 2-Track 분리 집계 알고리즘, 무의존성 OOXML .xlsx 빌더, 오프라인 지도 웹 플래너, 16:9 PPTX 자동 생성기 및 YuNet+SFace 비전 인덱서를 해부합니다.",
    "tags": [
      "OOXML .xlsx",
      "YuNet+SFace",
      "sim"
    ]
  },
  {
    "slug": "archive",
    "num": "06",
    "title": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처",
    "desc": "KAIST 전공 강의노트(449건)·UMLS 랩세미나(430건)·박사학위 심사서류와 웹 이력서 배포 패리티(Documents/), 그리고 대용량 미디어 아카이브의 Zero-ZIP·EXIF 무결성 아키텍처를 다룹니다.",
    "tags": [
      "KAIST Academic",
      "Deploy Parity",
      "sim"
    ]
  },
  {
    "slug": "notes",
    "num": "07",
    "title": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트",
    "desc": "전 영역(Development · Documents · Photos)의 코드·데이터 대 문서 정합성 감사 노트, Single-Source-of-Truth 자동 검증 파이프라인, 핵심 용어 인터랙티브 사전을 제공합니다.",
    "tags": [
      "정합성 감사",
      "용어집"
    ]
  }
];

  const PREBUILT_SEARCH = [{"type": "섹션", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "GoogleDrive 3대 기둥 및 6대 운영 헌장 (Operating Charter)", "hash": "sec-pillars", "keywords": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄 GoogleDrive 3대 기둥 및 6대 운영 헌장 (Operating Charter) sec-pillars"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "5대 엔지니어링 테마 비교 매트릭스", "hash": "sec-themes", "keywords": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄 5대 엔지니어링 테마 비교 매트릭스 sec-themes"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "인터랙티브 시뮬레이터 · 40-Submodule & 5-Theme 탐색기", "hash": "sec-sim-submodules", "keywords": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄 인터랙티브 시뮬레이터 · 40-Submodule & 5-Theme 탐색기 sec-sim-submodules"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "학위논문 · 국제학술지 · 한/미 특허 매핑 (Academic Lineage & Direct Links)", "hash": "sim-submodules", "keywords": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄 학위논문 · 국제학술지 · 한/미 특허 매핑 (Academic Lineage & Direct Links) sim-submodules"}, {"type": "섹션", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "핵심 정리 · Chapter 01", "hash": "summary", "keywords": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄 핵심 정리 · Chapter 01 summary"}, {"type": "시뮬레이터", "slug": "overview", "num": "01", "chTitle": "마스터 워크스페이스 3대 기둥 & 5대 엔지니어링 테마 총괄", "title": "44-Project Architecture & Language Stack Explorer", "hash": "sim-submodules", "keywords": "시뮬레이터 simulator 44-Project Architecture & Language Stack Explorer sim-submodules"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "전역 동적계획법의 한계와 국소 슬라이딩 윈도우 MDP 정식화", "hash": "sec-mdp", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 전역 동적계획법의 한계와 국소 슬라이딩 윈도우 MDP 정식화 sec-mdp"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "Dueling Double DQN & Depthwise Separable Conv 아키텍처", "hash": "sec-ddqn", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 Dueling Double DQN & Depthwise Separable Conv 아키텍처 sec-ddqn"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "인터랙티브 시뮬레이터 · DQNAlign 슬라이딩 윈도우 & Exact-Skip", "hash": "sec-sim-dqnalign", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 인터랙티브 시뮬레이터 · DQNAlign 슬라이딩 윈도우 & Exact-Skip sec-sim-dqnalign"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "고속 반복서열 마이닝 (REminerII · PixelRE) 및 MFC 시각화 스위트", "hash": "sim-dqnalign", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 고속 반복서열 마이닝 (REminerII · PixelRE) 및 MFC 시각화 스위트 sim-dqnalign"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "인터랙티브 시뮬레이터 · REminerII & PixelRE 닷플롯 시드 확장", "hash": "sec-sim-reminer", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 인터랙티브 시뮬레이터 · REminerII & PixelRE 닷플롯 시드 확장 sec-sim-reminer"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "암 질환 바이오마커 분류기 (REDNN · RERNN) 및 집단 유전체학", "hash": "sim-reminer", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 암 질환 바이오마커 분류기 (REDNN · RERNN) 및 집단 유전체학 sim-reminer"}, {"type": "섹션", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "핵심 정리 · Chapter 02", "hash": "summary", "keywords": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝 핵심 정리 · Chapter 02 summary"}, {"type": "시뮬레이터", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "Needleman-Wunsch DP Grid vs. DQNAlign Sliding Window & Exact-Skip", "hash": "sim-dqnalign", "keywords": "시뮬레이터 simulator Needleman-Wunsch DP Grid vs. DQNAlign Sliding Window & Exact-Skip sim-dqnalign"}, {"type": "시뮬레이터", "slug": "bio", "num": "02", "chTitle": "심층 강화학습 서열 정렬 (DQNAlign) & 고속 유전체 마이닝", "title": "REminerII Seed-and-Extend & PixelRE Multi-Scale Dot-Plot", "hash": "bio-dqn-readout", "keywords": "시뮬레이터 simulator REminerII Seed-and-Extend & PixelRE Multi-Scale Dot-Plot bio-dqn-readout"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "멀티모달 비전 기반 3D 무선전력전송 & OLEV 통합 아키텍처", "hash": "sec-wpt-arch", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 멀티모달 비전 기반 3D 무선전력전송 & OLEV 통합 아키텍처 sec-wpt-arch"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "Tsai 카메라 캘리브레이션 및 양안 3D 광선 삼각측량 수학적 유도", "hash": "sec-tsai", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 Tsai 카메라 캘리브레이션 및 양안 3D 광선 삼각측량 수학적 유도 sec-tsai"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "인터랙티브 3D 시뮬레이터 · 양안 삼각측량 & FLIR 열화상 안전 제어", "hash": "sec-sim-wpt-3d", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 인터랙티브 3D 시뮬레이터 · 양안 삼각측량 & FLIR 열화상 안전 제어 sec-sim-wpt-3d"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "OLEV 85kHz 주행중 무선충전 텔레매틱스 및 UTM 궤적 예측", "hash": "sim-wpt-3d", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 OLEV 85kHz 주행중 무선충전 텔레매틱스 및 UTM 궤적 예측 sim-wpt-3d"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "인터랙티브 시뮬레이터 · OLEV 차선 편차 필터링 & 인버터 예열 제어", "hash": "sec-sim-olev", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 인터랙티브 시뮬레이터 · OLEV 차선 편차 필터링 & 인버터 예열 제어 sec-sim-olev"}, {"type": "섹션", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "핵심 정리 · Chapter 03", "hash": "sim-olev-gps", "keywords": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스 핵심 정리 · Chapter 03 sim-olev-gps"}, {"type": "시뮬레이터", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "3D Stereo Skew-Ray Triangulation & FLIR Thermal Safety Interlock", "hash": "sim-wpt-3d", "keywords": "시뮬레이터 simulator 3D Stereo Skew-Ray Triangulation & FLIR Thermal Safety Interlock sim-wpt-3d"}, {"type": "시뮬레이터", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "점-직선 직교 차선 편차 및 사분위 25% 절사 평균 (get_lane_distance.m)", "hash": "wpt3d-box", "keywords": "시뮬레이터 simulator 점-직선 직교 차선 편차 및 사분위 25% 절사 평균 (get_lane_distance.m) wpt3d-box"}, {"type": "시뮬레이터", "slug": "wpt", "num": "03", "chTitle": "3D 공진 무선전력전송 · 에지 비전 안전 제어 & OLEV 텔레매틱스", "title": "OLEV 85kHz UTM Lane Deviation & Inverter Pre-Activation Telematics", "hash": "sim-olev-gps", "keywords": "시뮬레이터 simulator OLEV 85kHz UTM Lane Deviation & Inverter Pre-Activation Telematics sim-olev-gps"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "저수준 입력 드라이버 후킹 & 13-상태 우선순위 비전 상태 머신", "hash": "sec-fsm", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 저수준 입력 드라이버 후킹 & 13-상태 우선순위 비전 상태 머신 sec-fsm"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "흡수 마르코프 체인(StarForce) 및 비마르코프 찬스 타임 상태 확장", "hash": "sec-markov", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 흡수 마르코프 체인(StarForce) 및 비마르코프 찬스 타임 상태 확장 sec-markov"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "인터랙티브 시뮬레이터 · StarForce 마르코프 해석해 & 몬테카를로 분포", "hash": "sec-sim-starforce", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 인터랙티브 시뮬레이터 · StarForce 마르코프 해석해 & 몬테카를로 분포 sec-sim-starforce"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "제약 조합 최적화(Lophago) 및 Casio FX-9860G 베어메탈 엔진", "hash": "sim-starforce", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 제약 조합 최적화(Lophago) 및 Casio FX-9860G 베어메탈 엔진 sim-starforce"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "WINNER II 3D MIMO 기하 확률 채널 & 60GHz 밀리미터파 백홀", "hash": "sec-winner-mimo", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 WINNER II 3D MIMO 기하 확률 채널 & 60GHz 밀리미터파 백홀 sec-winner-mimo"}, {"type": "섹션", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "핵심 정리 · Chapter 04", "hash": "sim-winner-mimo", "keywords": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템 핵심 정리 · Chapter 04 sim-winner-mimo"}, {"type": "시뮬레이터", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "StarForce Absorbing Markov Chain Solver & Monte Carlo Simulator", "hash": "sim-starforce", "keywords": "시뮬레이터 simulator StarForce Absorbing Markov Chain Solver & Monte Carlo Simulator sim-starforce"}, {"type": "시뮬레이터", "slug": "automation", "num": "04", "chTitle": "지능형 비전 자동화 · 마르코프 확률 모델링 & 특수 임베디드 시스템", "title": "WINNER II 3D MIMO Multipath Cluster Beamforming & Capacity", "hash": "sf-readout", "keywords": "시뮬레이터 simulator WINNER II 3D MIMO Multipath Cluster Beamforming & Capacity sf-readout"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "원장 데이터 분석 엔진 (1_Household_Finance) 및 무의존성 OOXML 빌더", "hash": "sec-finance", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 원장 데이터 분석 엔진 (1_Household_Finance) 및 무의존성 OOXML 빌더 sec-finance"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "인터랙티브 시뮬레이터 · 환불 부호 보존 & 2-Track 분리 검증기", "hash": "sec-sim-finance", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 인터랙티브 시뮬레이터 · 환불 부호 보존 & 2-Track 분리 검증기 sec-sim-finance"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "AI 비전 스튜디오 (4_Photo_Memory_Studio) 멀티모달 아키텍처", "hash": "sim-finance", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 AI 비전 스튜디오 (4_Photo_Memory_Studio) 멀티모달 아키텍처 sim-finance"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "인터랙티브 시뮬레이터 · SFace 128-D 매칭 & 듀얼 뷰어 Split-Wipe", "hash": "sec-sim-photo", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 인터랙티브 시뮬레이터 · SFace 128-D 매칭 & 듀얼 뷰어 Split-Wipe sec-sim-photo"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "오프라인 지도 웹 플래너 (2_Travel_and_Trip_Planners) 및 PPTX 자동 빌더", "hash": "sim-photo-studio", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 오프라인 지도 웹 플래너 (2_Travel_and_Trip_Planners) 및 PPTX 자동 빌더 sim-photo-studio"}, {"type": "섹션", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "핵심 정리 · Chapter 05", "hash": "summary", "keywords": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서 핵심 정리 · Chapter 05 summary"}, {"type": "시뮬레이터", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "Refund Sign-Preservation (-tx['amount']) & 2-Track Split", "hash": "sim-finance", "keywords": "시뮬레이터 simulator Refund Sign-Preservation (-tx['amount']) & 2-Track Split sim-finance"}, {"type": "시뮬레이터", "slug": "life", "num": "05", "chTitle": "데이터 파이프라인 자동화 · 무의존성 OOXML & 멀티모달 비전 인덱서", "title": "AI Photo Memory Studio — Split-Wipe A/B Viewer & SFace 128-D Matcher", "hash": "fin-readout", "keywords": "시뮬레이터 simulator AI Photo Memory Studio — Split-Wipe A/B Viewer & SFace 128-D Matcher fin-readout"}, {"type": "섹션", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "Documents/ 마스터 저장소 — KAIST 대학원 10년 학술·연구 아카이브 (1,200+ 문서)", "hash": "sec-documents-arch", "keywords": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처 Documents/ 마스터 저장소 — KAIST 대학원 10년 학술·연구 아카이브 (1,200+ 문서) sec-documents-arch"}, {"type": "섹션", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "프로페셔널 웹 이력서 시스템 (Documents/Resume/) & 배포 패리티 규약", "hash": "sec-resume-parity", "keywords": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처 프로페셔널 웹 이력서 시스템 (Documents/Resume/) & 배포 패리티 규약 sec-resume-parity"}, {"type": "섹션", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "Photos/ 대용량 미디어 스토리지 아키텍처 — 7대 분류 & 4대 무결성 헌장", "hash": "sec-photos-master", "keywords": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처 Photos/ 대용량 미디어 스토리지 아키텍처 — 7대 분류 & 4대 무결성 헌장 sec-photos-master"}, {"type": "섹션", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "AI 포토 스튜디오 (4_Photo_Memory_Studio) — Read-Only 인덱싱 & 듀얼 뷰어", "hash": "sim-photos-auditor", "keywords": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처 AI 포토 스튜디오 (4_Photo_Memory_Studio) — Read-Only 인덱싱 & 듀얼 뷰어 sim-photos-auditor"}, {"type": "섹션", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "핵심 정리 · Chapter 06", "hash": "sim-memory-studio", "keywords": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처 핵심 정리 · Chapter 06 sim-memory-studio"}, {"type": "시뮬레이터", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "Photos/ · Documents/ 마스터 아카이브 자동 라우팅 & 무결성 감사 시뮬레이터", "hash": "sim-photos-auditor", "keywords": "시뮬레이터 simulator Photos/ · Documents/ 마스터 아카이브 자동 라우팅 & 무결성 감사 시뮬레이터 sim-photos-auditor"}, {"type": "시뮬레이터", "slug": "archive", "num": "06", "chTitle": "KAIST 학술·커리어 아카이브 (Documents) & 미디어 스토리지 아키텍처", "title": "YuNet + SFace 128-D 인물 클러스터링 & 듀얼 뷰어 Split-Wipe 비교기", "hash": "sim-memory-studio", "keywords": "시뮬레이터 simulator YuNet + SFace 128-D 인물 클러스터링 & 듀얼 뷰어 Split-Wipe 비교기 sim-memory-studio"}, {"type": "섹션", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "코드 · 특허 · 문서 · 아카이브 정합성 감사 목록 (29개 항목)", "hash": "notes-audit", "keywords": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트 코드 · 특허 · 문서 · 아카이브 정합성 감사 목록 (29개 항목) notes-audit"}, {"type": "섹션", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Single-Source-of-Truth 빌드 원칙과 5단계 자동 검증", "hash": "notes-policy", "keywords": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트 Single-Source-of-Truth 빌드 원칙과 5단계 자동 검증 notes-policy"}, {"type": "섹션", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "마스터 워크스페이스 핵심 기술 · 운영 용어집 (Interactive Glossary)", "hash": "glossary-sec", "keywords": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트 마스터 워크스페이스 핵심 기술 · 운영 용어집 (Interactive Glossary) glossary-sec"}, {"type": "섹션", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "핵심 정리 · Chapter 07", "hash": "summary", "keywords": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트 핵심 정리 · Chapter 07 summary"}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "관심사 분리 헌장 (SoC)", "hash": "glossary-sec", "keywords": "관심사 분리 헌장 Separation of Concerns Charter SoC GoogleDrive 마스터 워크스페이스에서 연구·개발 코드는 Development/, 학술·이력서·행정 문서는 Documents/, 평생 미디어 원본은 Photos/로 엄격히 격리하는 제1 운영 원칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Zero-ZIP 정책 (Zero-ZIP)", "hash": "glossary-sec", "keywords": "Zero-ZIP 정책 Zero-ZIP Policy Zero-ZIP Google 포토 백업 클라이언트가 압축 아카이브 내부 미디어를 색인하지 못하는 한계를 방지하기 위해 Photos/ 내 모든 .zip/.tar/.7z 파일을 전면 금지하고 즉시 압축 해제하는 정책."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Zero Non-Media 정책 (Zero-Doc)", "hash": "glossary-sec", "keywords": "Zero Non-Media 정책 Zero Non-Media Policy Zero-Doc Photos/ 저장소에 .hwp, .pdf, .pptx, .xlsx, .apk 등 비미디어 파일 혼입을 원천 차단하고 Development/ 또는 Documents/로 이전하는 운영 규칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "일상 앨범 순도 보존 (DailyPurity)", "hash": "glossary-sec", "keywords": "일상 앨범 순도 보존 Purity of Daily Feed DailyPurity Photos/일상/20XX년/ 폴더에는 카메라로 직접 촬영한 순수 사진·영상(YYYYMMDD_HHMMSS)만 보존하고, 웨딩·해외여행·출장·스크린샷·웹 다운로드를 독립 최상위 폴더로 격리하는 원칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "단일 진실 공급원 (SSOT)", "hash": "glossary-sec", "keywords": "단일 진실 공급원 Single Source of Truth SSOT 가이드북의 모든 파라미터, 수식 상수, 파일 경로를 수기 복제하지 않고 빌드 시점에 실제 Python/C++/MATLAB/JSON/Markdown 소스에서 직접 파싱·검증하는 원칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "서브모듈 모노레포 (GitSubmodule)", "hash": "glossary-sec", "keywords": "서브모듈 모노레포 40-Submodule Monorepo GitSubmodule Development/ 루트의 .gitmodules를 통해 4개 연구 테마의 40개 독립 Git 저장소를 단일 커밋 트리로 동기화하는 구조."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "심층 강화학습 서열 정렬 (DQNAlign)", "hash": "glossary-sec", "keywords": "심층 강화학습 서열 정렬 Deep Reinforcement Learning Sequence Alignment DQNAlign 전역 DP O(N1·N2) 대신 고정 크기 국소 부분정렬 창(window_size)만 관측하며 매 스텝 정방향(0)·삽입(1)·결실(2) 행동을 선택해 선형 시간 O(L)에 정렬 경로를 추적하는 프레임워크 (IEEE OJEMB 2021)."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "마르코프 결정 과정 (MDP)", "hash": "glossary-sec", "keywords": "마르코프 결정 과정 Markov Decision Process MDP 서열 정렬 위치 (x, y)를 상태, 국소 윈도우 원-핫 텐서를 관측, 이동 방향 a∈{0,1,2}를 행동, 매칭/불일치/인델 점수를 보상으로 정의한 수학적 의사결정 모델."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Dueling Double DQN (D3QN)", "hash": "glossary-sec", "keywords": "Dueling Double DQN Dueling Double Deep Q-Network D3QN 상태 가치 V(s)와 이점 A(s,a) 스트림을 분리해 Q값을 결합하고, 행동 선택(mainQN)과 가치 평가(targetQN)를 분리해 과대추정을 억제하는 심층 강화학습 아키텍처."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Exact Match Skip (Skip)", "hash": "glossary-sec", "keywords": "Exact Match Skip Exact Match Fast-Forward Heuristic Skip 현재 정렬 좌표 이후 두 서열의 부분 문자열이 정확히 일치하는 구간에서는 신경망 추론을 건너뛰고 대각선 방향으로 즉시 전진하여 추론 속도를 수십 배 가속하는 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "지퍼 정렬 (Zipper)", "hash": "glossary-sec", "keywords": "지퍼 정렬 Zipper Alignment Zipper 다중 서열 정렬(MSA)에서 프로필 간 국소 윈도우를 지퍼처럼 맞물려 단계적으로 병합하는 DQNAlign 확장 알고리즘."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Seed-and-Extend (REminerII)", "hash": "glossary-sec", "keywords": "Seed-and-Extend Seed-and-Extend Genomic Mining REminerII 고정 길이 WORD_SIZE(14bp) 시드 해싱 및 허용 오차(ALLOW_SIZE=1) 필터링 후 양방향 Greedy X-drop 확장으로 염색체 규모의 반복서열(RE)을 고속 탐색하는 C++ 알고리즘."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "2비트 뉴클레오타이드 패킹 (2-Bit)", "hash": "glossary-sec", "keywords": "2비트 뉴클레오타이드 패킹 2-Bit Nucleotide Bit-Packing 2-Bit A, C, G, T 염기를 각각 2비트로 부호화해 1바이트당 4개 염기를 저장하고 비트 연산으로 역상보 서열(Reverse Complement)을 고속 처리하는 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Jukes-Cantor 진화 거리 (JC69)", "hash": "glossary-sec", "keywords": "Jukes-Cantor 진화 거리 Jukes-Cantor Evolutionary Distance JC69 관측된 염기 치환 비율 p로부터 다중 치환(Multiple Hits)을 보정해 실제 진화 거리 d = -3/4 ln(1 - 4/3 p)를 추정하는 계통발생 모델."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "신경망 공진화 상호정보 (NMI)", "hash": "glossary-sec", "keywords": "신경망 공진화 상호정보 Neural Mutual Information Coevolution NMI 단백질 다중서열정렬(MSA)에서 잔기 쌍 간 공진화 신호를 신경망으로 추정하여 3차원 접촉 맵을 예측하는 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "바이오마커 특징 선택 (REDNN)", "hash": "glossary-sec", "keywords": "바이오마커 특징 선택 Cancer Biomarker Feature Selection REDNN 고차원 유전자 발현/반복서열 행렬에서 F-통계량, 상호정보량, 결정트리 중요도로 핵심 마커를 추려 암 위험도를 분류하는 파이프라인 (US 2019/0385696 A1)."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "공진 유도 무선전력전송 (3D WPT)", "hash": "glossary-sec", "keywords": "공진 유도 무선전력전송 Resonant Inductive Wireless Power Transfer 3D WPT 송신 코일과 수신 코일 간 자기 공진 결합을 이용해 수 미터 거리에서 최대 1 kW급 전력을 무선 전달하는 시스템."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Tsai 카메라 캘리브레이션 (Tsai 11-DoF)", "hash": "glossary-sec", "keywords": "Tsai 카메라 캘리브레이션 Tsai Two-Stage Camera Calibration Tsai 11-DoF 방사 왜곡에 불변인 반경 방향 평행성 제약(RAC)으로 외부 회전·평행이동 파라미터를 먼저 구한 뒤 초점거리와 왜곡 계수 κ1을 2단계로 추정하는 11자유도 보정 알고리즘."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "양안 3D 광선 삼각측량 (3D Stereo)", "hash": "glossary-sec", "keywords": "양안 3D 광선 삼각측량 Binocular Skew-Ray Midpoint Triangulation 3D Stereo 두 대의 보정된 카메라 광학 중심에서 투사된 3차원 광선(Ray) 사이의 최단 수직선분 중점을 계산해 수신기/인체의 3D 월드 좌표 (X,Y,Z)를 복원하는 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "멀티모달 에지 안전 인터록 (WPT-Safety)", "hash": "glossary-sec", "keywords": "멀티모달 에지 안전 인터록 Multimodal Edge Vision Safety Interlock WPT-Safety RGB SSD 객체 검출(Coral EdgeTPU)과 FLIR Lepton 장파장 적외선(LWIR) 80×60 열화상 온도 임계값을 결합해 충전 금지 구역 내 인체 진입 시 송신 전력을 즉시 차단하는 기술 (US 12,496,917 B2)."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "FLIR Lepton 열화상 (LWIR)", "hash": "glossary-sec", "keywords": "FLIR Lepton 열화상 FLIR Lepton Long-Wave Infrared Sensor LWIR 8~14 μm 파장 대역의 복사열을 80×60 해상도로 감지해 조도 변화나 마네킹 오검출 없이 실제 인체 체온을 판별하는 열화상 센서."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Coral EdgeTPU (EdgeTPU)", "hash": "glossary-sec", "keywords": "Coral EdgeTPU Google Coral Edge Tensor Processing Unit EdgeTPU INT8 양자화된 MobileNet SSD V1/V2 텐서플로 라이트 모델을 수 밀리초 내에 추론하는 저전력 USB/SoM 신경망 가속기."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "주행중 무선충전 전기버스 (OLEV)", "hash": "glossary-sec", "keywords": "주행중 무선충전 전기버스 On-Line Electric Vehicle OLEV 도로 매설 급전 세그먼트로부터 85 kHz 자기장을 통해 주행 또는 정차 중 무선으로 전력을 공급받는 KAIST 개발 전기버스 시스템."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "UTM 좌표 변환 (UTM)", "hash": "glossary-sec", "keywords": "UTM 좌표 변환 Universal Transverse Mercator Projection UTM WGS84 위경도 좌표를 미터(m) 단위의 2차원 평면 직교 좌표로 투영하여 차량 주행 거리, 속도, 급전소 접근 반경을 정밀 계산하는 측지 좌표계."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "동시 무선 정보 및 전력 전송 (SWIPT)", "hash": "glossary-sec", "keywords": "동시 무선 정보 및 전력 전송 Simultaneous Wireless Information and Power Transfer SWIPT 동일한 RF 신호를 전력 수확(Energy Harvesting)과 정보 복조(Information Decoding)에 동시 활용하며 시간 전환(TS) 또는 전력 분할(PS) 비율을 최적화하는 기술."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "DirectInput 스캔코드 후킹 (ScanCode)", "hash": "glossary-sec", "keywords": "DirectInput 스캔코드 후킹 Win32 DirectInput Hardware ScanCode Injection ScanCode 가상 키코드(VK) 대신 하드웨어 키보드 컨트롤러 수준의 16진수 스캔코드를 SendInput API로 주입해 DirectX 기반 게임 엔진의 입력 필터링을 통과하는 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "13-상태 유한상태기계 (PyMaple FSM)", "hash": "glossary-sec", "keywords": "13-상태 유한상태기계 13-State Priority Finite State Machine PyMaple FSM 미니맵 캐릭터 템플릿 매칭, 룬/엘리트보스/돌발미션/폴로프리토 감지를 우선순위 큐와 13개 상태 전이로 조율하는 비전 자동화 루프."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "흡수 마르코프 체인 (AMC)", "hash": "glossary-sec", "keywords": "흡수 마르코프 체인 Absorbing Markov Chain AMC 목표 달성 상태(예: 22성 도달)를 흡수 상태(Absorbing State)로 두고 기본 행렬 N = (I - Q)^(-1)을 역행렬로 풀어 기대 시행 횟수와 기대 비용을 오차 없이 닫힌 해로 구하는 확률 모델."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "찬스 타임 상태 확장 (StarForce)", "hash": "glossary-sec", "keywords": "찬스 타임 상태 확장 Chance-Time State Space Augmentation StarForce 직전 강화 하락 여부를 별도 상태(d12_2 ~ d19_2)로 분리하여 2연속 하락 시 다음 강화 성공 확률이 100%가 되는 비마르코프 규칙을 1차 마르코프 전이 행렬(31×31)로 정확히 변환한 기법."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "돌파고 조합 최적화 (Lophago)", "hash": "glossary-sec", "keywords": "돌파고 조합 최적화 LostArk Ability Stone Optimal Policy Solver Lophago 25% ~ 75% 사이에서 10%p씩 가변하는 성공 확률과 세 줄의 남은 슬롯 상태 공간에서 목표 각인(예: 7/7/4 이하) 달성 확률을 최대화하는 동적계획법 솔버."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "Casio FX-9860G 그래픽 엔진 (FX-SDK)", "hash": "glossary-sec", "keywords": "Casio FX-9860G 그래픽 엔진 Casio FX-9860G 128x64 1-Bit VRAM Engine FX-SDK SuperH SH-3/SH-4 임베디드 코어와 128×64 흑백 디스플레이 위에서 Bdisp_PutDisp_DD 더블 버퍼링과 비트마스크 스프라이트 렌더링으로 구현한 C 게임 엔진 (RPG/RTS)."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "WINNER II 3D 채널 모델 (WINNER II)", "hash": "glossary-sec", "keywords": "WINNER II 3D 채널 모델 WINNER II / 3GPP 3D Geometry-Based Stochastic Channel Model WINNER II 방위각(Azimuth)과 고도각(Elevation) 양방향의 다중경로 클러스터 및 대기 산소 흡수 감쇠(60 GHz)를 반영해 밀리미터파 3D MIMO 채널 계수를 생성하는 시뮬레이터."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "환불 부호 보존 원칙 (-tx['amount'])", "hash": "glossary-sec", "keywords": "환불 부호 보존 원칙 Refund Sign-Preservation Rule -tx['amount'] 취소/환불 거래 분류 시 절대값 abs()를 씌우지 않고 음수 부호를 그대로 유지해 카테고리 지출 합계에서 자동 차감되도록 보장하는 무결성 규칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "순수소비 vs 재무부담 분리 (2-Track)", "hash": "glossary-sec", "keywords": "순수소비 vs 재무부담 분리 Pure Consumption vs. Financial Burden Dual-Track 2-Track 고정 재무의무 항목을 변동 운영비(순수소비)에서 분리 집계하여 소비 성향 통계 왜곡을 막는 이중 재무 분석 체계."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "무의존성 OOXML 빌더 (OOXML)", "hash": "glossary-sec", "keywords": "무의존성 OOXML 빌더 Zero-Dependency OpenXML (.xlsx) Builder OOXML 외부 엑셀 라이브러리 없이 Python 표준 zipfile과 XML 문자열 조합만으로 다중 시트·수식·스타일시트가 포함된 .xlsx 통합문서를 생성하는 경량 엔진."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "오프라인 지도 웹 플래너 (WebPlanner)", "hash": "glossary-sec", "keywords": "오프라인 지도 웹 플래너 Offline-First JSON & Leaflet Web Planner WebPlanner 지역 명소 JSON 데이터베이스와 일차별 동선 타임라인, 예산 계산기, Leaflet 지도 마커를 결합한 반응형 단일 페이지 웹앱."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "16:9 와이드스크린 PPTX 빌더 (TripPPTX)", "hash": "glossary-sec", "keywords": "16:9 와이드스크린 PPTX 빌더 Automated 16:9 Widescreen PPTX Deck Builder TripPPTX python-pptx를 활용해 다크 네이비 헤더, KPI 카드, 일정 타임라인, 비교 테이블 그리드를 13.333×7.5인치 슬라이드로 자동 조립하는 보고서 생성기."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "KAIST 학술·학위 아카이브 (Documents/)", "hash": "glossary-sec", "keywords": "KAIST 학술·학위 아카이브 KAIST Graduate Academic & Laboratory Archive Documents/ 2010~2021년 KAIST 전기및전자공학부 석박사통합과정 중 축적된 전공 교과목 강의노트(449개), UMLS 주간 랩세미나(430개), 박사학위 심사서류(129개), 연구실 자산/안전 행정(220+개)을 총괄하는 1,200+ 문서 마스터 저장소."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "전공 교과목 아카이브 (Coursework)", "hash": "glossary-sec", "keywords": "전공 교과목 아카이브 KAIST EE & Physics Coursework Archive Coursework 전자설계실험(EE405), 무선통신망(EE686), 정보이론(EE528), 볼록최적화(EE827), 현대제어이론 등 15개 이상 KAIST 대학원 전공 과목의 강의노트·솔루션·텀프로젝트 보관소."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "UMLS 랩세미나 아카이브 (LabMeetings)", "hash": "glossary-sec", "keywords": "UMLS 랩세미나 아카이브 Communication & Systems Lab Weekly Seminar Archive LabMeetings 2010년부터 2020년까지 조동호 교수님 연구실(UMLS)에서 발표된 심층 강화학습(Averaged-DQN), 유전체 정렬(Minimap2), 분자 모델링(MoleculeNet), 85kHz OLEV 무선충전 세미나 슬라이드 430개 컬렉션."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "박사학위 행정 아카이브 (PhD-Admin)", "hash": "glossary-sec", "keywords": "박사학위 행정 아카이브 PhD Qualifying Exam, Proposal & Defense Archive PhD-Admin 박사 자격시험(QE) 기출/합격증, 학위논문 연구계획서(Proposal), 최종 디펜스 심사위원 의결서 및 BK21 플러스 연구 실적 증빙을 보존하는 공식 학위 기록 보관소."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "이력서 배포 패리티 규칙 (DeployParity)", "hash": "glossary-sec", "keywords": "이력서 배포 패리티 규칙 Resume Master-to-Deploy Parity Rule DeployParity Documents/Resume/resume_yongjoon_song.html 마스터 파일 수정 시 GitHub Pages 배포 사본(deploy/index.html)과 100% 바이트 단위 동일성을 유지하고 A4 2페이지 인쇄 규격을 검증하는 규칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "개인정보 격리 게이트 (PrivacyGate)", "hash": "glossary-sec", "keywords": "개인정보 격리 게이트 Personal Identifiable Information Isolation Gate PrivacyGate Documents/Personal/ 비공개 디렉터리 및 로컬 데이터 파일(Data/*.xlsx)을 .gitignore와 빌드 타임 감사 게이트로 이중 차단해 외부 유출을 원천 봉쇄하는 보안 체계."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "20TB 마스터 미디어 아카이브 (Photos/)", "hash": "glossary-sec", "keywords": "20TB 마스터 미디어 아카이브 Google One 20TB Original-Quality Master Media Archive Photos/ Events, Travel, Business_Trips, Family_Archive, Daily, Screenshots, Downloads의 7대 최상위 카테고리로 구조화되어 무손실 원래 화질(Original Quality)로 동기화되는 미디어 저장소."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "EXIF 촬영일시 무결성 (EXIF)", "hash": "glossary-sec", "keywords": "EXIF 촬영일시 무결성 EXIF DateTimeOriginal & Filesystem Timestamp Integrity EXIF 클라우드 타임라인 정렬의 기준이 되는 EXIF DateTimeOriginal 태그와 파일 CreationTime/LastWriteTime을 파일 이동·분류 시 절대 변조하지 않는 보존 원칙."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "로컬 클라우드 캐시 분리 (DriveCache)", "hash": "glossary-sec", "keywords": "로컬 클라우드 캐시 분리 Dedicated D-Drive Cloud Cache Isolation DriveCache Google Drive 데스크톱 앱의 로컬 캐시 경로를 D:\\GoogleDriveCache로 고정해 C드라이브(OS 파티션) 용량 고갈을 방지하고 대용량 미디어 스트리밍 I/O를 안정화하는 설정."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "AI 포토 메모리 스튜디오 (MemoryStudio)", "hash": "glossary-sec", "keywords": "AI 포토 메모리 스튜디오 AI Photo Memory Studio (Read-Only Media Indexer) MemoryStudio Photos/ 원본을 읽기 전용(Read-Only)으로 마운트해 YuNet 얼굴 검출, SFace 128-D 임베딩, YOLO11n 객체 태그, 지식 그래프 RAG 검색 및 Split-Wipe 비교를 제공하는 로컬 웹 스튜디오."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "YuNet + SFace 128-D (SFace)", "hash": "glossary-sec", "keywords": "YuNet + SFace 128-D YuNet Face Detector & SFace 128-D Embedding SFace 경량 얼굴 검출기 YuNet(conf≥0.6)과 128차원 L2 정규화 특징 벡터 SFace(코사인 유사도≥0.360)를 결합해 인물 클러스터링·검색을 수행하는 비전 파이프라인."}, {"type": "용어", "slug": "notes", "num": "07", "chTitle": "용어집 & 코드·문서·특허·아카이브 정합성 검증 노트", "title": "듀얼 뷰어 Split-Wipe (Split-Wipe)", "hash": "glossary-sec", "keywords": "듀얼 뷰어 Split-Wipe Dual-Viewer Before/After Split-Wipe & Loupe Split-Wipe 원본 이미지와 색보정/복원 결과물을 드래그 가능한 분할선(Split-Wipe)과 동기화 줌 루페(Synchronized Loupe)로 픽셀 단위 비교하는 인터랙티브 뷰어."}];

  const LOGO = `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="11" height="11" rx="3" fill="#e0443e"/>
    <rect x="15" y="2" width="11" height="11" rx="3" fill="#2da44e"/>
    <rect x="2" y="15" width="11" height="11" rx="3" fill="#2da44e" opacity=".82"/>
    <rect x="15" y="15" width="11" height="11" rx="3" fill="#2f6fe0"/>
  </svg>`;

  function rootPrefix() {
    const b = document.body;
    if (b && b.dataset.root) return b.dataset.root;
    return location.pathname.includes("/chapters/") ? "../" : "";
  }
  function currentSlug() {
    const b = document.body;
    if (b && b.dataset.chapter) return b.dataset.chapter;
    const m = location.pathname.match(/\/chapters\/([^\/]+)\.html/);
    return m ? m[1] : "index";
  }

  // ---------- Theme ----------
  const THEME_KEY = "kaist-grad-works-book-theme";
  function getSavedTheme() { try { return localStorage.getItem(THEME_KEY); } catch { return null; } }
  function applyTheme(t) {
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.dispatchEvent(new CustomEvent("sb:theme"));
  }
  const saved = getSavedTheme();
  if (saved) applyTheme(saved);

  SB.isDark = function () {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  SB.cssVar = function (name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };
  SB.palette = function () {
    const dark = SB.isDark();
    return {
      dark,
      bg: SB.cssVar("--canvas-bg") || (dark ? "#0f1522" : "#ffffff"),
      text: SB.cssVar("--text") || (dark ? "#e6ebf5" : "#141a26"),
      dim: SB.cssVar("--text-dim") || (dark ? "#9aa6bf" : "#566178"),
      faint: SB.cssVar("--text-faint") || (dark ? "#69748c" : "#8a93a8"),
      border: SB.cssVar("--border") || (dark ? "#273248" : "#d6dce8"),
      surface: SB.cssVar("--surface") || (dark ? "#171f30" : "#eef1f7"),
      accent: SB.cssVar("--accent") || (dark ? "#38b6f5" : "#0a84c6"),
      accent2: SB.cssVar("--accent-2") || (dark ? "#a585ff" : "#7a4ce0"),
      ok: SB.cssVar("--ok") || "#2da44e",
      warn: SB.cssVar("--warn") || "#d98a00",
      bad: SB.cssVar("--bad") || "#e0443e",
      red: SB.cssVar("--red") || "#e0443e",
      green: SB.cssVar("--green") || "#2da44e",
      blue: SB.cssVar("--blue") || "#2f6fe0",
      grid: SB.cssVar("--grid") || "rgba(128,128,128,0.12)",
      axis: SB.cssVar("--axis") || "rgba(128,128,128,0.5)",
    };
  };

  // ---------- Mount Topbar + Drawer ----------
  function mountTopbar() {
    const root = rootPrefix();
    const slug = currentSlug();
    const cur = SB.CHAPTERS.find(c => c.slug === slug);

    const bar = document.createElement("header");
    bar.className = "sb-topbar";
    bar.innerHTML = `
      <button class="sb-iconbtn" id="sb-open-drawer" aria-label="목차 열기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h12"/></svg>
        <span>챕터 ${cur ? cur.num : "목차"}</span>
      </button>
      <a class="sb-brand" href="${root}index.html">
        ${LOGO}
        <span>KAIST GRAD WORKS &amp; WORKSPACE <small>인터랙티브 아키텍처 가이드북</small></span>
      </a>
      <div class="sp"></div>
      <div class="book-search" id="book-search">
        <input type="search" class="book-search-input" id="book-search-input" placeholder="검색 (용어·시뮬레이터·섹션)…" autocomplete="off" aria-label="책 전체 검색">
        <div class="book-search-results" id="book-search-results" hidden></div>
      </div>
      <a class="sb-iconbtn series-link" href="https://scholar.google.com/citations?user=H3AQNpAAAAAJ" target="_blank" rel="noopener" title="Google Scholar — 출판 논문 및 등록 특허 원문 프로필">
        <span>🎓 Scholar</span>
      </a>
      <a class="sb-iconbtn series-link" href="https://yjqkrtk-ux.github.io/" target="_blank" rel="noopener" title="Yongjoon Song — Interactive Web Resume / CV">
        <span>📄 Resume</span>
      </a>
      <a class="sb-iconbtn series-link" href="${root}chapters/notes.html" title="용어집 및 코드·문서·아카이브 정합성 검증 노트">
        <span>용어집 · 검증</span>
      </a>
      <button class="sb-iconbtn" id="sb-theme" aria-label="테마 전환" title="라이트/다크 전환">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
      </button>
      <div class="sb-progress" id="sb-progress"></div>
    `;
    document.body.prepend(bar);

    const backdrop = document.createElement("div");
    backdrop.className = "sb-drawer-backdrop";
    const drawer = document.createElement("aside");
    drawer.className = "sb-drawer";
    drawer.innerHTML = `
      <div class="sb-drawer-head">
        <span>전체 목차 (7 Chapters · 3 Pillars)</span>
        <button class="sb-iconbtn" id="sb-close-drawer">닫기</button>
      </div>
      <nav class="sb-drawer-list">
        <a href="${root}index.html" class="${slug === "index" ? "active" : ""}">
          <span class="num">HOME</span>
          <span>가이드북 홈 · 3대 기둥 &amp; 5대 테마 로드맵</span>
        </a>
        ${SB.CHAPTERS.map(c => `
          <a href="${root}chapters/${c.slug}.html" class="${c.slug === slug ? "active" : ""}">
            <span class="num">CH.${c.num}</span>
            <span>${c.title}<div class="sub">${c.desc}</div></span>
          </a>
        `).join("")}
        <div style="margin:14px 10px 6px;padding-top:12px;border-top:1px solid var(--border);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.04em;">PUBLIC PAPERS · PATENTS · PROFILES ↗</div>
        <a href="https://scholar.google.com/citations?user=H3AQNpAAAAAJ" target="_blank" rel="noopener">
          <span class="num">GS</span>
          <span>Google Scholar 프로필<div class="sub">출판 논문 4편 · 한/미 특허 패밀리 전체 보기</div></span>
        </a>
        <a href="https://doi.org/10.1109/OJEMB.2021.3076156" target="_blank" rel="noopener">
          <span class="num">P1</span>
          <span>IEEE OJEMB (Apr 2021)<div class="sub">Local Alignment of DNA Sequence Based on DRL</div></span>
        </a>
        <a href="https://doi.org/10.1109/OJEMB.2021.3055424" target="_blank" rel="noopener">
          <span class="num">P2</span>
          <span>IEEE OJEMB (Jan 2021)<div class="sub">Pairwise Heuristic Sequence Alignment Based on DRL</div></span>
        </a>
        <a href="https://ieeexplore.ieee.org/document/8333425" target="_blank" rel="noopener">
          <span class="num">P3</span>
          <span>IEEE BHI (2018)<div class="sub">Evolutionary Distance Based on Word Frequency Variation</div></span>
        </a>
        <a href="https://ieeexplore.ieee.org/document/8037707" target="_blank" rel="noopener">
          <span class="num">P4</span>
          <span>IEEE EMBC (2017)<div class="sub">Classification of Genomic Sequences (Repeated K-Word)</div></span>
        </a>
        <a href="https://patents.google.com/patent/US12496917B2/en" target="_blank" rel="noopener">
          <span class="num">US</span>
          <span>US 12,496,917 B2 (Granted)<div class="sub">Vehicle Location-Based WPT Inverter Power Control</div></span>
        </a>
        <a href="https://patents.google.com/patent/KR20210092933A/en" target="_blank" rel="noopener">
          <span class="num">KR</span>
          <span>KR 10-2021-0092933 A<div class="sub">이미지 인식 기반 3D 무선전력전송 제어 장치 및 방법</div></span>
        </a>
        <a href="https://patents.google.com/patent/US20190385696A1/en" target="_blank" rel="noopener">
          <span class="num">US</span>
          <span>US 2019/0385696 A1<div class="sub">Predicting Disease Risk from Complex Genetic Info</div></span>
        </a>
        <a href="https://github.com/syjqkrtk" target="_blank" rel="noopener">
          <span class="num">GIT</span>
          <span>github.com/syjqkrtk<div class="sub">DQNalign · REminerII · ObjectDetectionForWPT 등 18개 공개 저장소</div></span>
        </a>
      </nav>
    `;
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    const close = () => document.body.classList.remove("drawer-open");
    document.getElementById("sb-open-drawer").addEventListener("click", () => document.body.classList.add("drawer-open"));
    document.getElementById("sb-close-drawer").addEventListener("click", close);
    backdrop.addEventListener("click", close);
    window.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    document.getElementById("sb-theme").addEventListener("click", () => {
      const next = SB.isDark() ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch {}
      applyTheme(next);
    });

    const prog = document.getElementById("sb-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - h.clientHeight);
      prog.style.width = Math.min(100, (h.scrollTop / max) * 100).toFixed(1) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Mount Right-hand TOC + Section Numbering ----------
  function mountToc() {
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.dataset.tocMounted) return;
      main.dataset.tocMounted = "1";
      const pageWrap = main.closest("[data-slug]");
      const slugPrefix = pageWrap ? pageWrap.dataset.slug + "-" : "";
      let layout = main.closest(".sb-layout");
      if (!layout) {
        layout = document.createElement("div");
        layout.className = "sb-layout";
        main.parentNode.insertBefore(layout, main);
        layout.appendChild(main);
      }
      const sections = Array.from(main.querySelectorAll(":scope > section"));
      if (!sections.length) return;

      const toc = document.createElement("aside");
      toc.className = "sb-toc";
      toc.innerHTML = `<h4>On this page</h4>`;
      const links = [];

      sections.forEach((sec, idx) => {
        const h2 = sec.querySelector("h2");
        if (!h2) return;
        if (!sec.id) sec.id = "sec-" + slugPrefix + (idx + 1);
        const rawTitle = h2.textContent.replace(/^\s*\d+(\.\d+)?\s*/, "").trim();
        if (!h2.querySelector(".h-num") && !sec.classList.contains("keypoints")) {
          const num = String(idx + 1).padStart(2, "0");
          h2.innerHTML = `<span class="h-num">${num}</span><span>${h2.innerHTML}</span>`;
        }
        const a = document.createElement("a");
        a.href = "#" + sec.id;
        a.textContent = rawTitle;
        toc.appendChild(a);
        links.push({ sec, a });
      });
      layout.appendChild(toc);

      const spy = () => {
        if (pageWrap && pageWrap.hidden) return;
        const y = window.scrollY + 110;
        let active = links[0];
        for (const item of links) {
          if (item.sec.offsetTop <= y) active = item;
        }
        links.forEach(item => item.a.classList.toggle("on", item === active));
      };
      window.addEventListener("scroll", spy, { passive: true });
      spy();
    });
  }

  // ---------- Mount Prev / Next Pager ----------
  function mountPager() {
    document.querySelectorAll("main.chapter").forEach(main => {
      if (main.dataset.pagerMounted) return;
      main.dataset.pagerMounted = "1";
      const pageWrap = main.closest("[data-slug]");
      const slug = (pageWrap && pageWrap.dataset.slug) || currentSlug();
      const idx = SB.CHAPTERS.findIndex(c => c.slug === slug);
      if (idx < 0) return;
      const prev = SB.CHAPTERS[idx - 1];
      const next = SB.CHAPTERS[idx + 1];
      const nav = document.createElement("nav");
      nav.className = "sb-pager";
      nav.innerHTML = `
        ${prev ? `<a class="prev" href="${prev.slug}.html"><span class="dir">← 이전 챕터 · CH.${prev.num}</span><span class="t">${prev.title}</span></a>` : `<span></span>`}
        ${next ? `<a class="next" href="${next.slug}.html"><span class="dir">다음 챕터 · CH.${next.num} →</span><span class="t">${next.title}</span></a>` : `<a class="next" href="../index.html"><span class="dir">완독 🎉</span><span class="t">홈으로 돌아가기</span></a>`}
      `;
      main.appendChild(nav);

      const foot = document.createElement("footer");
      foot.className = "sb-foot";
      foot.innerHTML = `GoogleDrive Master Workspace (Development · Documents · Photos) · 인터랙티브 아키텍처 가이드북 · Build 2026-11-01 (<code>dbcaf33</code>) · <code>docs/build_spec_portal.py</code> 자동 생성`;
      main.appendChild(foot);
    });
  }

  // ---------- Collapsible Details ----------
  function mountDetails() {
    document.querySelectorAll(".detail").forEach(box => {
      if (box.querySelector(".detail-toggle")) return;
      const title = box.dataset.title || box.querySelector(".detail-title")?.textContent || "수식 유도 / 심화 설명 보기";
      const tEl = box.querySelector(".detail-title");
      if (tEl) tEl.remove();
      const body = document.createElement("div");
      body.className = "detail-body";
      while (box.firstChild) body.appendChild(box.firstChild);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "detail-toggle";
      btn.textContent = title;
      btn.addEventListener("click", () => box.classList.toggle("open"));
      box.appendChild(btn);
      box.appendChild(body);
    });
  }

  // ---------- KaTeX Auto-render ----------
  function mountKaTeX() {
    const render = () => {
      if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "$", right: "$", display: false },
          ],
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option", "svg", "text", "g"],
          throwOnError: false,
        });
      }
    };
    if (window.renderMathInElement) render();
    else window.addEventListener("load", render);
  }

  // ---------- Canvas HiDPI + Theme Redraw Helper ----------
  SB.canvas = function (canvasOrId, aspectOrHeight, drawFn) {
    const c = typeof canvasOrId === "string" ? document.getElementById(canvasOrId.replace(/^#/, "")) : canvasOrId;
    if (!c) return { redraw() {} };
    const ctx = c.getContext("2d");
    let raf = 0;

    function resizeAndDraw() {
      const rect = c.parentElement.getBoundingClientRect();
      const w = Math.max(260, Math.floor(rect.width));
      const h = aspectOrHeight <= 2 ? Math.round(w * aspectOrHeight) : aspectOrHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.style.height = h + "px";
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      ctx.save();
      ctx.scale(dpr, dpr);
      const P = SB.palette();
      ctx.fillStyle = P.bg;
      ctx.fillRect(0, 0, w, h);
      drawFn(ctx, w, h, P);
      ctx.restore();
    }
    function schedule() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(resizeAndDraw);
    }
    window.addEventListener("resize", schedule);
    window.addEventListener("sb:theme", schedule);
    requestAnimationFrame(resizeAndDraw);
    return { redraw: schedule, canvas: c, ctx };
  };

  // ---------- Simple 2D Plot Helper ----------
  SB.chart = function (ctx, W, H, P, opts) {
    const pad = Object.assign({ l: 54, r: 18, t: 20, b: 36 }, opts.pad || {});
    const pw = W - pad.l - pad.r;
    const ph = H - pad.t - pad.b;
    const [x0, x1] = opts.xDomain;
    const [y0, y1] = opts.yDomain;
    const xLog = !!opts.xLog;
    const yLog = !!opts.yLog;
    const tx = x => xLog ? (Math.log10(x) - Math.log10(x0)) / (Math.log10(x1) - Math.log10(x0)) : (x - x0) / (x1 - x0);
    const ty = y => yLog ? (Math.log10(y) - Math.log10(y0)) / (Math.log10(y1) - Math.log10(y0)) : (y - y0) / (y1 - y0);
    const px = x => pad.l + Math.max(0, Math.min(1, tx(x))) * pw;
    const py = y => pad.t + (1 - Math.max(0, Math.min(1, ty(y)))) * ph;

    ctx.strokeStyle = P.grid;
    ctx.lineWidth = 1;
    ctx.fillStyle = P.dim;
    ctx.font = "11px 'JetBrains Mono', monospace";

    const xTicks = opts.xTicks || 5;
    const xList = Array.isArray(xTicks) ? xTicks : Array.from({ length: xTicks + 1 }, (_, i) => x0 + (x1 - x0) * (i / xTicks));
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    xList.forEach(v => {
      const x = px(v);
      ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ph); ctx.stroke();
      const lbl = opts.xFormat ? opts.xFormat(v) : (Math.abs(v) >= 100 ? v.toFixed(0) : Number(v.toPrecision(3)));
      ctx.fillText(lbl, x, pad.t + ph + 6);
    });

    const yTicks = opts.yTicks || 4;
    const yList = Array.isArray(yTicks) ? yTicks : Array.from({ length: yTicks + 1 }, (_, i) => y0 + (y1 - y0) * (i / yTicks));
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    yList.forEach(v => {
      const y = py(v);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + pw, y); ctx.stroke();
      const lbl = opts.yFormat ? opts.yFormat(v) : (Math.abs(v) >= 100 ? v.toFixed(0) : Number(v.toPrecision(3)));
      ctx.fillText(lbl, pad.l - 6, y);
    });

    ctx.strokeStyle = P.axis;
    ctx.strokeRect(pad.l, pad.t, pw, ph);

    ctx.fillStyle = P.dim;
    ctx.font = "11.5px Pretendard, sans-serif";
    if (opts.xLabel) {
      ctx.textAlign = "center"; ctx.textBaseline = "bottom";
      ctx.fillText(opts.xLabel, pad.l + pw / 2, H - 3);
    }
    if (opts.yLabel) {
      ctx.save();
      ctx.translate(13, pad.t + ph / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText(opts.yLabel, 0, 0);
      ctx.restore();
    }

    return {
      pad, pw, ph, px, py,
      line(points, color, width = 2.2, dash = []) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(pad.l, pad.t, pw, ph);
        ctx.clip();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.setLineDash(dash);
        ctx.beginPath();
        points.forEach(([x, y], i) => {
          const X = px(x), Y = py(y);
          if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
        });
        ctx.stroke();
        ctx.restore();
      },
      fillUnder(points, color) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(pad.l, pad.t, pw, ph);
        ctx.clip();
        ctx.fillStyle = color;
        ctx.beginPath();
        points.forEach(([x, y], i) => {
          const X = px(x), Y = py(y);
          if (i === 0) ctx.moveTo(X, pad.t + ph);
          ctx.lineTo(X, Y);
        });
        if (points.length) ctx.lineTo(px(points[points.length - 1][0]), pad.t + ph);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      },
      dot(x, y, color, r = 4, label) {
        const X = px(x), Y = py(y);
        ctx.fillStyle = color;
        ctx.beginPath(); ctx.arc(X, Y, r, 0, Math.PI * 2); ctx.fill();
        if (label) {
          ctx.font = "600 11px 'JetBrains Mono', monospace";
          ctx.fillStyle = color;
          ctx.textAlign = "left"; ctx.textBaseline = "bottom";
          ctx.fillText(label, X + 6, Y - 4);
        }
      },
      vline(x, color, label) {
        const X = px(x);
        ctx.save();
        ctx.strokeStyle = color; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(X, pad.t); ctx.lineTo(X, pad.t + ph); ctx.stroke();
        if (label) {
          ctx.fillStyle = color; ctx.font = "11px 'JetBrains Mono', monospace";
          ctx.textAlign = "left"; ctx.textBaseline = "top";
          ctx.fillText(label, X + 4, pad.t + 4);
        }
        ctx.restore();
      }
    };
  };

  // ---------- Control Wiring ----------
  SB.range = function (id, outId, fmt, onChange) {
    const el = document.getElementById(id);
    const out = outId ? document.getElementById(outId) : null;
    if (!el) return () => 0;
    const update = () => {
      const v = parseFloat(el.value);
      if (out) out.textContent = fmt ? fmt(v) : v;
      if (onChange) onChange(v);
    };
    el.addEventListener("input", update);
    update();
    return () => parseFloat(el.value);
  };

  SB.seg = function (containerId, onChange) {
    const box = document.getElementById(containerId);
    if (!box) return () => "";
    let cur = box.querySelector("button.on")?.dataset.value || box.querySelector("button")?.dataset.value;
    box.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        box.querySelectorAll("button").forEach(b => b.classList.toggle("on", b === btn));
        cur = btn.dataset.value;
        if (onChange) onChange(cur);
      });
    });
    return () => cur;
  };

  SB.stat = function (id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // ---------- Three.js Lazy Loader + Scene Bootstrap ----------
  let threePromise = null;
  SB.loadThree = function () {
    if (window.THREE) return Promise.resolve(window.THREE);
    if (threePromise) return threePromise;
    threePromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js";
      s.onload = () => resolve(window.THREE);
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return threePromise;
  };

  SB.three = async function (containerOrId, heightOrOpts, setupFn) {
    const host = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    if (!host) return null;
    const opts = typeof heightOrOpts === "number" ? { height: heightOrOpts } : (heightOrOpts || {});
    const H = opts.height || 340;
    host.style.height = H + "px";

    let THREE;
    try { THREE = await SB.loadThree(); }
    catch {
      host.innerHTML = `<div style="padding:24px;color:var(--text-dim)">3D 라이브러리를 불러오지 못했습니다.</div>`;
      return null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.innerHTML = "";
    host.appendChild(renderer.domElement);

    const hint = document.createElement("div");
    hint.className = "sim-overlay";
    hint.textContent = opts.hint || "드래그: 회전 · 휠: 줌";
    host.appendChild(hint);

    const amb = new THREE.AmbientLight(0xffffff, 0.72);
    const dir1 = new THREE.DirectionalLight(0xffffff, 0.78);
    dir1.position.set(6, 9, 7);
    const dir2 = new THREE.DirectionalLight(0x88aaff, 0.32);
    dir2.position.set(-6, -4, -5);
    scene.add(amb, dir1, dir2);

    const state = {
      theta: opts.theta ?? 0.55,
      phi: opts.phi ?? 1.05,
      radius: opts.radius ?? 9.5,
      target: new THREE.Vector3(...(opts.target || [0, 0, 0])),
      autoRotate: opts.autoRotate ?? true,
      dragging: false, lx: 0, ly: 0,
    };
    function updateCamera() {
      const sp = Math.sin(state.phi), cp = Math.cos(state.phi);
      const st = Math.sin(state.theta), ct = Math.cos(state.theta);
      camera.position.set(
        state.target.x + state.radius * sp * st,
        state.target.y + state.radius * cp,
        state.target.z + state.radius * sp * ct
      );
      camera.lookAt(state.target);
    }
    updateCamera();

    const dom = renderer.domElement;
    dom.style.cursor = "grab";
    dom.addEventListener("pointerdown", e => {
      state.dragging = true; state.autoRotate = false;
      state.lx = e.clientX; state.ly = e.clientY;
      dom.setPointerCapture(e.pointerId);
      dom.style.cursor = "grabbing";
    });
    dom.addEventListener("pointermove", e => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lx, dy = e.clientY - state.ly;
      state.lx = e.clientX; state.ly = e.clientY;
      state.theta -= dx * 0.008;
      state.phi = Math.max(0.18, Math.min(Math.PI - 0.18, state.phi - dy * 0.008));
      updateCamera();
    });
    const endDrag = () => { state.dragging = false; dom.style.cursor = "grab"; };
    dom.addEventListener("pointerup", endDrag);
    dom.addEventListener("pointercancel", endDrag);
    dom.addEventListener("wheel", e => {
      e.preventDefault();
      state.radius = Math.max(3.5, Math.min(26, state.radius * (1 + Math.sign(e.deltaY) * 0.08)));
      updateCamera();
    }, { passive: false });

    function makeLabel(text, color = "#ffffff", scale = 1.0) {
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      ctx.font = "600 28px 'Pretendard Variable', Pretendard, sans-serif";
      const m = ctx.measureText(text);
      const pad = 22;
      c.width = Math.ceil(m.width + pad * 2);
      c.height = 54;
      ctx.font = "600 26px 'Pretendard Variable', Pretendard, sans-serif";
      ctx.fillStyle = "rgba(15, 21, 34, 0.78)";
      const r = 14;
      ctx.beginPath();
      ctx.moveTo(r, 0); ctx.lineTo(c.width - r, 0);
      ctx.quadraticCurveTo(c.width, 0, c.width, r);
      ctx.lineTo(c.width, c.height - r);
      ctx.quadraticCurveTo(c.width, c.height, c.width - r, c.height);
      ctx.lineTo(r, c.height);
      ctx.quadraticCurveTo(0, c.height, 0, c.height - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.fillStyle = "#f2f5fb";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, c.width / 2, c.height / 2 + 1);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
      const sp = new THREE.Sprite(mat);
      sp.scale.set((c.width / 120) * scale, (c.height / 120) * scale, 1);
      return sp;
    }

    function resize() {
      const w = Math.max(260, host.clientWidth);
      const h = Math.max(200, host.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    window.addEventListener("resize", resize);
    resize();

    const tickFns = [];
    const api = {
      THREE, scene, camera, renderer, state, updateCamera, makeLabel,
      onTick(fn) { tickFns.push(fn); },
      onFrame(fn) { tickFns.push((t, dt) => fn(dt, t)); },
      label(text, pos, color) {
        const sp = makeLabel(text, color || "#38b6f5", 0.95);
        if (Array.isArray(pos)) sp.position.set(pos[0], pos[1], pos[2]);
        else if (pos) sp.position.copy(pos);
        scene.add(sp);
        return sp;
      },
      material(opts = {}) {
        return new THREE.MeshStandardMaterial(Object.assign({ roughness: 0.35, metalness: 0.15 }, opts));
      }
    };
    if (setupFn) setupFn(api);

    let visible = true;
    const io = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    io.observe(host);

    let t0 = performance.now();
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      if (state.autoRotate && !state.dragging) {
        state.theta += dt * (opts.rotateSpeed ?? 0.22);
        updateCamera();
      }
      for (const fn of tickFns) fn(now * 0.001, dt);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(loop);
    return api;
  };

  // ---------- Full-Book Instant Search ----------
  function mountSearch() {
    const input = document.getElementById("book-search-input");
    const box = document.getElementById("book-search-results");
    if (!input || !box) return;
    const root = rootPrefix();

    function itemHref(it) {
      const base = root + "chapters/" + it.slug + ".html";
      return it.hash ? base + "#" + it.hash : base;
    }

    let activeIdx = 0;
    let currentHits = [];

    function render(q) {
      const query = q.trim().toLowerCase();
      if (!query) { box.hidden = true; box.innerHTML = ""; currentHits = []; return; }
      const tokens = query.split(/\s+/).filter(Boolean);
      const scored = [];
      for (const it of PREBUILT_SEARCH) {
        const titleL = (it.title || "").toLowerCase();
        const kwL = (it.keywords || "").toLowerCase();
        let score = 0;
        let ok = true;
        for (const tk of tokens) {
          if (titleL.includes(tk)) score += titleL.startsWith(tk) ? 12 : 7;
          else if (kwL.includes(tk)) score += 3;
          else { ok = false; break; }
        }
        if (ok && score > 0) scored.push({ it, score });
      }
      scored.sort((a, b) => b.score - a.score);
      currentHits = scored.slice(0, 12).map(s => s.it);
      activeIdx = 0;

      if (!currentHits.length) {
        box.innerHTML = `<div class="sr-empty">"${q}" 검색 결과가 없습니다.</div>`;
        box.hidden = false;
        return;
      }
      box.innerHTML = currentHits.map((it, idx) => {
        const tc = it.type === "시뮬레이터" ? "sim" : (it.type === "용어" ? "gl" : "");
        return `<a href="${itemHref(it)}" class="${idx === 0 ? "on" : ""}" data-idx="${idx}">
          <div class="sr-head"><span class="sr-type ${tc}">${it.type}</span><span>${it.title}</span></div>
          <div class="sr-sub">CH.${it.num} ${it.chTitle}</div>
        </a>`;
      }).join("");
      box.hidden = false;
    }

    input.addEventListener("input", () => render(input.value));
    input.addEventListener("focus", () => { if (input.value.trim()) render(input.value); });
    input.addEventListener("keydown", e => {
      if (box.hidden || !currentHits.length) return;
      const links = box.querySelectorAll("a");
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % currentHits.length;
        links.forEach((a, i) => a.classList.toggle("on", i === activeIdx));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + currentHits.length) % currentHits.length;
        links.forEach((a, i) => a.classList.toggle("on", i === activeIdx));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (links[activeIdx]) links[activeIdx].click();
      } else if (e.key === "Escape") {
        box.hidden = true;
      }
    });
    document.addEventListener("click", e => {
      if (!e.target.closest("#book-search")) box.hidden = true;
    });
  }

  function boot() {
    mountTopbar();
    mountSearch();
    mountToc();
    mountDetails();
    mountPager();
    mountKaTeX();

    // Rewrite repo source code pills (<a class="src">) to public GitHub repos / Scholar / Resume when hosted on GitHub Pages
    if (location.protocol === "http:" || location.protocol === "https:") {
      const publicRepoMap = [
        ["DQNalign", "https://github.com/syjqkrtk/DQNalign"],
        ["REminerII", "https://github.com/syjqkrtk/REminerII"],
        ["REDNN", "https://github.com/syjqkrtk/Bio"],
        ["RERNN", "https://github.com/syjqkrtk/Bio"],
        ["PixelRE", "https://github.com/syjqkrtk/Bio"],
        ["InsilicoRE", "https://github.com/syjqkrtk/Bio"],
        ["EvolDist", "https://github.com/syjqkrtk/EvolDist"],
        ["clustering205", "https://github.com/syjqkrtk/Clustering205"],
        ["1092x", "https://github.com/syjqkrtk/ACGTGray"],
        ["ACGTgray", "https://github.com/syjqkrtk/ACGTGray"],
        ["AlignmentGenerator", "https://github.com/syjqkrtk/AlignmentGenerator"],
        ["Heuristic alignment", "https://github.com/syjqkrtk/HeuristicAlignment"],
        ["REMinerPattern", "https://github.com/syjqkrtk/REMinerPattern"],
        ["RepeatLengthPdf", "https://github.com/syjqkrtk/RepeatLengthPdf"],
        ["ObjectDetection", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["FIR", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["edgetpu_models", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["Telematics_and_GPS", "https://github.com/syjqkrtk/EVGPSforWPT"],
        ["1_Wireless_Power_Transfer_and_EV", "https://github.com/syjqkrtk/ObjectDetectionForWPT"],
        ["2_Bioinformatics_and_Genomics", "https://github.com/syjqkrtk/DQNalign"],
        ["WinnerIIChannel", "https://github.com/syjqkrtk/WinnerIIChannel"],
        ["Embedded_Casio_Engines", "https://github.com/syjqkrtk/CASIO"],
        ["4_Specialty_Systems", "https://github.com/syjqkrtk/WinnerIIChannel"],
        ["Documents/Resume", "https://yjqkrtk-ux.github.io/"],
        ["PhD_Administration", "https://scholar.google.com/citations?user=H3AQNpAAAAAJ"],
        ["Samsung_CIS", "https://yjqkrtk-ux.github.io/isocell/"]
      ];
      document.querySelectorAll("a.src[href]").forEach(a => {
        const h = a.getAttribute("href") || "";
        if (h.startsWith("../")) {
          const rel = h.replace(/^(\.\.\/)+/, "");
          let target = "https://github.com/syjqkrtk";
          for (const [kw, url] of publicRepoMap) {
            if (rel.includes(kw)) {
              target = url;
              break;
            }
          }
          a.href = target;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
