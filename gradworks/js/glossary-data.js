window.BOOK_GLOSSARY = {
  "version": 1,
  "generated_by": "docs/build_spec_portal.py",
  "terms": [
    {
      "ko": "관심사 분리 헌장",
      "en": "Separation of Concerns Charter",
      "abbr": "SoC",
      "def": "GoogleDrive 마스터 워크스페이스에서 연구·개발 코드는 Development/, 학술·이력서·행정 문서는 Documents/, 평생 미디어 원본은 Photos/로 엄격히 격리하는 제1 운영 원칙.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Zero-ZIP 정책",
      "en": "Zero-ZIP Policy",
      "abbr": "Zero-ZIP",
      "def": "Google 포토 백업 클라이언트가 압축 아카이브 내부 미디어를 색인하지 못하는 한계를 방지하기 위해 Photos/ 내 모든 .zip/.tar/.7z 파일을 전면 금지하고 즉시 압축 해제하는 정책.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "Zero Non-Media 정책",
      "en": "Zero Non-Media Policy",
      "abbr": "Zero-Doc",
      "def": "Photos/ 저장소에 .hwp, .pdf, .pptx, .xlsx, .apk 등 비미디어 파일 혼입을 원천 차단하고 Development/ 또는 Documents/로 이전하는 운영 규칙.",
      "chapters": [
        "overview",
        "archive",
        "notes"
      ]
    },
    {
      "ko": "일상 앨범 순도 보존",
      "en": "Purity of Daily Feed",
      "abbr": "DailyPurity",
      "def": "Photos/일상/20XX년/ 폴더에는 카메라로 직접 촬영한 순수 사진·영상(YYYYMMDD_HHMMSS)만 보존하고, 웨딩·해외여행·출장·스크린샷·웹 다운로드를 독립 최상위 폴더로 격리하는 원칙.",
      "chapters": [
        "overview",
        "archive"
      ]
    },
    {
      "ko": "단일 진실 공급원",
      "en": "Single Source of Truth",
      "abbr": "SSOT",
      "def": "가이드북의 모든 파라미터, 수식 상수, 파일 경로를 수기 복제하지 않고 빌드 시점에 실제 Python/C++/MATLAB/JSON/Markdown 소스에서 직접 파싱·검증하는 원칙.",
      "chapters": [
        "overview",
        "notes"
      ]
    },
    {
      "ko": "서브모듈 모노레포",
      "en": "40-Submodule Monorepo",
      "abbr": "GitSubmodule",
      "def": "Development/ 루트의 .gitmodules를 통해 4개 연구 테마의 40개 독립 Git 저장소를 단일 커밋 트리로 동기화하는 구조.",
      "chapters": [
        "overview",
        "notes"
      ]
    },
    {
      "ko": "심층 강화학습 서열 정렬",
      "en": "Deep Reinforcement Learning Sequence Alignment",
      "abbr": "DQNAlign",
      "def": "전역 DP O(N1·N2) 대신 고정 크기 국소 부분정렬 창(window_size)만 관측하며 매 스텝 정방향(0)·삽입(1)·결실(2) 행동을 선택해 선형 시간 O(L)에 정렬 경로를 추적하는 프레임워크 (IEEE OJEMB 2021).",
      "chapters": [
        "bio",
        "overview"
      ]
    },
    {
      "ko": "마르코프 결정 과정",
      "en": "Markov Decision Process",
      "abbr": "MDP",
      "def": "서열 정렬 위치 (x, y)를 상태, 국소 윈도우 원-핫 텐서를 관측, 이동 방향 a∈{0,1,2}를 행동, 매칭/불일치/인델 점수를 보상으로 정의한 수학적 의사결정 모델.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Dueling Double DQN",
      "en": "Dueling Double Deep Q-Network",
      "abbr": "D3QN",
      "def": "상태 가치 V(s)와 이점 A(s,a) 스트림을 분리해 Q값을 결합하고, 행동 선택(mainQN)과 가치 평가(targetQN)를 분리해 과대추정을 억제하는 심층 강화학습 아키텍처.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Exact Match Skip",
      "en": "Exact Match Fast-Forward Heuristic",
      "abbr": "Skip",
      "def": "현재 정렬 좌표 이후 두 서열의 부분 문자열이 정확히 일치하는 구간에서는 신경망 추론을 건너뛰고 대각선 방향으로 즉시 전진하여 추론 속도를 수십 배 가속하는 기법.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "지퍼 정렬",
      "en": "Zipper Alignment",
      "abbr": "Zipper",
      "def": "다중 서열 정렬(MSA)에서 프로필 간 국소 윈도우를 지퍼처럼 맞물려 단계적으로 병합하는 DQNAlign 확장 알고리즘.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Seed-and-Extend",
      "en": "Seed-and-Extend Genomic Mining",
      "abbr": "REminerII",
      "def": "고정 길이 WORD_SIZE(14bp) 시드 해싱 및 허용 오차(ALLOW_SIZE=1) 필터링 후 양방향 Greedy X-drop 확장으로 염색체 규모의 반복서열(RE)을 고속 탐색하는 C++ 알고리즘.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "2비트 뉴클레오타이드 패킹",
      "en": "2-Bit Nucleotide Bit-Packing",
      "abbr": "2-Bit",
      "def": "A, C, G, T 염기를 각각 2비트로 부호화해 1바이트당 4개 염기를 저장하고 비트 연산으로 역상보 서열(Reverse Complement)을 고속 처리하는 기법.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "Jukes-Cantor 진화 거리",
      "en": "Jukes-Cantor Evolutionary Distance",
      "abbr": "JC69",
      "def": "관측된 염기 치환 비율 p로부터 다중 치환(Multiple Hits)을 보정해 실제 진화 거리 d = -3/4 ln(1 - 4/3 p)를 추정하는 계통발생 모델.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "신경망 공진화 상호정보",
      "en": "Neural Mutual Information Coevolution",
      "abbr": "NMI",
      "def": "단백질 다중서열정렬(MSA)에서 잔기 쌍 간 공진화 신호를 신경망으로 추정하여 3차원 접촉 맵을 예측하는 기법.",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "바이오마커 특징 선택",
      "en": "Cancer Biomarker Feature Selection",
      "abbr": "REDNN",
      "def": "고차원 유전자 발현/반복서열 행렬에서 F-통계량, 상호정보량, 결정트리 중요도로 핵심 마커를 추려 암 위험도를 분류하는 파이프라인 (US 2019/0385696 A1).",
      "chapters": [
        "bio"
      ]
    },
    {
      "ko": "공진 유도 무선전력전송",
      "en": "Resonant Inductive Wireless Power Transfer",
      "abbr": "3D WPT",
      "def": "송신 코일과 수신 코일 간 자기 공진 결합을 이용해 수 미터 거리에서 최대 1 kW급 전력을 무선 전달하는 시스템.",
      "chapters": [
        "wpt",
        "overview"
      ]
    },
    {
      "ko": "Tsai 카메라 캘리브레이션",
      "en": "Tsai Two-Stage Camera Calibration",
      "abbr": "Tsai 11-DoF",
      "def": "방사 왜곡에 불변인 반경 방향 평행성 제약(RAC)으로 외부 회전·평행이동 파라미터를 먼저 구한 뒤 초점거리와 왜곡 계수 κ1을 2단계로 추정하는 11자유도 보정 알고리즘.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "양안 3D 광선 삼각측량",
      "en": "Binocular Skew-Ray Midpoint Triangulation",
      "abbr": "3D Stereo",
      "def": "두 대의 보정된 카메라 광학 중심에서 투사된 3차원 광선(Ray) 사이의 최단 수직선분 중점을 계산해 수신기/인체의 3D 월드 좌표 (X,Y,Z)를 복원하는 기법.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "멀티모달 에지 안전 인터록",
      "en": "Multimodal Edge Vision Safety Interlock",
      "abbr": "WPT-Safety",
      "def": "RGB SSD 객체 검출(Coral EdgeTPU)과 FLIR Lepton 장파장 적외선(LWIR) 80×60 열화상 온도 임계값을 결합해 충전 금지 구역 내 인체 진입 시 송신 전력을 즉시 차단하는 기술 (US 12,496,917 B2).",
      "chapters": [
        "wpt",
        "overview"
      ]
    },
    {
      "ko": "FLIR Lepton 열화상",
      "en": "FLIR Lepton Long-Wave Infrared Sensor",
      "abbr": "LWIR",
      "def": "8~14 μm 파장 대역의 복사열을 80×60 해상도로 감지해 조도 변화나 마네킹 오검출 없이 실제 인체 체온을 판별하는 열화상 센서.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "Coral EdgeTPU",
      "en": "Google Coral Edge Tensor Processing Unit",
      "abbr": "EdgeTPU",
      "def": "INT8 양자화된 MobileNet SSD V1/V2 텐서플로 라이트 모델을 수 밀리초 내에 추론하는 저전력 USB/SoM 신경망 가속기.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "주행중 무선충전 전기버스",
      "en": "On-Line Electric Vehicle",
      "abbr": "OLEV",
      "def": "도로 매설 급전 세그먼트로부터 85 kHz 자기장을 통해 주행 또는 정차 중 무선으로 전력을 공급받는 KAIST 개발 전기버스 시스템.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "UTM 좌표 변환",
      "en": "Universal Transverse Mercator Projection",
      "abbr": "UTM",
      "def": "WGS84 위경도 좌표를 미터(m) 단위의 2차원 평면 직교 좌표로 투영하여 차량 주행 거리, 속도, 급전소 접근 반경을 정밀 계산하는 측지 좌표계.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "동시 무선 정보 및 전력 전송",
      "en": "Simultaneous Wireless Information and Power Transfer",
      "abbr": "SWIPT",
      "def": "동일한 RF 신호를 전력 수확(Energy Harvesting)과 정보 복조(Information Decoding)에 동시 활용하며 시간 전환(TS) 또는 전력 분할(PS) 비율을 최적화하는 기술.",
      "chapters": [
        "wpt"
      ]
    },
    {
      "ko": "DirectInput 스캔코드 후킹",
      "en": "Win32 DirectInput Hardware ScanCode Injection",
      "abbr": "ScanCode",
      "def": "가상 키코드(VK) 대신 하드웨어 키보드 컨트롤러 수준의 16진수 스캔코드를 SendInput API로 주입해 DirectX 기반 게임 엔진의 입력 필터링을 통과하는 기법.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "13-상태 유한상태기계",
      "en": "13-State Priority Finite State Machine",
      "abbr": "PyMaple FSM",
      "def": "미니맵 캐릭터 템플릿 매칭, 룬/엘리트보스/돌발미션/폴로프리토 감지를 우선순위 큐와 13개 상태 전이로 조율하는 비전 자동화 루프.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "흡수 마르코프 체인",
      "en": "Absorbing Markov Chain",
      "abbr": "AMC",
      "def": "목표 달성 상태(예: 22성 도달)를 흡수 상태(Absorbing State)로 두고 기본 행렬 N = (I - Q)^(-1)을 역행렬로 풀어 기대 시행 횟수와 기대 비용을 오차 없이 닫힌 해로 구하는 확률 모델.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "찬스 타임 상태 확장",
      "en": "Chance-Time State Space Augmentation",
      "abbr": "StarForce",
      "def": "직전 강화 하락 여부를 별도 상태(d12_2 ~ d19_2)로 분리하여 2연속 하락 시 다음 강화 성공 확률이 100%가 되는 비마르코프 규칙을 1차 마르코프 전이 행렬(31×31)로 정확히 변환한 기법.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "돌파고 조합 최적화",
      "en": "LostArk Ability Stone Optimal Policy Solver",
      "abbr": "Lophago",
      "def": "25% ~ 75% 사이에서 10%p씩 가변하는 성공 확률과 세 줄의 남은 슬롯 상태 공간에서 목표 각인(예: 7/7/4 이하) 달성 확률을 최대화하는 동적계획법 솔버.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "Casio FX-9860G 그래픽 엔진",
      "en": "Casio FX-9860G 128x64 1-Bit VRAM Engine",
      "abbr": "FX-SDK",
      "def": "SuperH SH-3/SH-4 임베디드 코어와 128×64 흑백 디스플레이 위에서 Bdisp_PutDisp_DD 더블 버퍼링과 비트마스크 스프라이트 렌더링으로 구현한 C 게임 엔진 (RPG/RTS).",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "WINNER II 3D 채널 모델",
      "en": "WINNER II / 3GPP 3D Geometry-Based Stochastic Channel Model",
      "abbr": "WINNER II",
      "def": "방위각(Azimuth)과 고도각(Elevation) 양방향의 다중경로 클러스터 및 대기 산소 흡수 감쇠(60 GHz)를 반영해 밀리미터파 3D MIMO 채널 계수를 생성하는 시뮬레이터.",
      "chapters": [
        "automation"
      ]
    },
    {
      "ko": "환불 부호 보존 원칙",
      "en": "Refund Sign-Preservation Rule",
      "abbr": "-tx['amount']",
      "def": "취소/환불 거래 분류 시 절대값 abs()를 씌우지 않고 음수 부호를 그대로 유지해 카테고리 지출 합계에서 자동 차감되도록 보장하는 무결성 규칙.",
      "chapters": [
        "life",
        "notes"
      ]
    },
    {
      "ko": "순수소비 vs 재무부담 분리",
      "en": "Pure Consumption vs. Financial Burden Dual-Track",
      "abbr": "2-Track",
      "def": "고정 재무의무 항목을 변동 운영비(순수소비)에서 분리 집계하여 소비 성향 통계 왜곡을 막는 이중 재무 분석 체계.",
      "chapters": [
        "life"
      ]
    },
    {
      "ko": "무의존성 OOXML 빌더",
      "en": "Zero-Dependency OpenXML (.xlsx) Builder",
      "abbr": "OOXML",
      "def": "외부 엑셀 라이브러리 없이 Python 표준 zipfile과 XML 문자열 조합만으로 다중 시트·수식·스타일시트가 포함된 .xlsx 통합문서를 생성하는 경량 엔진.",
      "chapters": [
        "life"
      ]
    },
    {
      "ko": "오프라인 지도 웹 플래너",
      "en": "Offline-First JSON & Leaflet Web Planner",
      "abbr": "WebPlanner",
      "def": "지역 명소 JSON 데이터베이스와 일차별 동선 타임라인, 예산 계산기, Leaflet 지도 마커를 결합한 반응형 단일 페이지 웹앱.",
      "chapters": [
        "life",
        "archive"
      ]
    },
    {
      "ko": "16:9 와이드스크린 PPTX 빌더",
      "en": "Automated 16:9 Widescreen PPTX Deck Builder",
      "abbr": "TripPPTX",
      "def": "python-pptx를 활용해 다크 네이비 헤더, KPI 카드, 일정 타임라인, 비교 테이블 그리드를 13.333×7.5인치 슬라이드로 자동 조립하는 보고서 생성기.",
      "chapters": [
        "life",
        "archive"
      ]
    },
    {
      "ko": "KAIST 학술·학위 아카이브",
      "en": "KAIST Graduate Academic & Laboratory Archive",
      "abbr": "Documents/",
      "def": "2010~2021년 KAIST 전기및전자공학부 석박사통합과정 중 축적된 전공 교과목 강의노트(449개), UMLS 주간 랩세미나(430개), 박사학위 심사서류(129개), 연구실 자산/안전 행정(220+개)을 총괄하는 1,200+ 문서 마스터 저장소.",
      "chapters": [
        "archive",
        "overview",
        "notes"
      ]
    },
    {
      "ko": "전공 교과목 아카이브",
      "en": "KAIST EE & Physics Coursework Archive",
      "abbr": "Coursework",
      "def": "전자설계실험(EE405), 무선통신망(EE686), 정보이론(EE528), 볼록최적화(EE827), 현대제어이론 등 15개 이상 KAIST 대학원 전공 과목의 강의노트·솔루션·텀프로젝트 보관소.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "UMLS 랩세미나 아카이브",
      "en": "Communication & Systems Lab Weekly Seminar Archive",
      "abbr": "LabMeetings",
      "def": "2010년부터 2020년까지 조동호 교수님 연구실(UMLS)에서 발표된 심층 강화학습(Averaged-DQN), 유전체 정렬(Minimap2), 분자 모델링(MoleculeNet), 85kHz OLEV 무선충전 세미나 슬라이드 430개 컬렉션.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "박사학위 행정 아카이브",
      "en": "PhD Qualifying Exam, Proposal & Defense Archive",
      "abbr": "PhD-Admin",
      "def": "박사 자격시험(QE) 기출/합격증, 학위논문 연구계획서(Proposal), 최종 디펜스 심사위원 의결서 및 BK21 플러스 연구 실적 증빙을 보존하는 공식 학위 기록 보관소.",
      "chapters": [
        "archive"
      ]
    },
    {
      "ko": "이력서 배포 패리티 규칙",
      "en": "Resume Master-to-Deploy Parity Rule",
      "abbr": "DeployParity",
      "def": "Documents/Resume/resume_yongjoon_song.html 마스터 파일 수정 시 GitHub Pages 배포 사본(deploy/index.html)과 100% 바이트 단위 동일성을 유지하고 A4 2페이지 인쇄 규격을 검증하는 규칙.",
      "chapters": [
        "archive",
        "notes"
      ]
    },
    {
      "ko": "개인정보 격리 게이트",
      "en": "Personal Identifiable Information Isolation Gate",
      "abbr": "PrivacyGate",
      "def": "Documents/Personal/ 비공개 디렉터리 및 로컬 데이터 파일(Data/*.xlsx)을 .gitignore와 빌드 타임 감사 게이트로 이중 차단해 외부 유출을 원천 봉쇄하는 보안 체계.",
      "chapters": [
        "archive",
        "overview",
        "notes"
      ]
    },
    {
      "ko": "20TB 마스터 미디어 아카이브",
      "en": "Google One 20TB Original-Quality Master Media Archive",
      "abbr": "Photos/",
      "def": "Events, Travel, Business_Trips, Family_Archive, Daily, Screenshots, Downloads의 7대 최상위 카테고리로 구조화되어 무손실 원래 화질(Original Quality)로 동기화되는 미디어 저장소.",
      "chapters": [
        "archive",
        "overview"
      ]
    },
    {
      "ko": "EXIF 촬영일시 무결성",
      "en": "EXIF DateTimeOriginal & Filesystem Timestamp Integrity",
      "abbr": "EXIF",
      "def": "클라우드 타임라인 정렬의 기준이 되는 EXIF DateTimeOriginal 태그와 파일 CreationTime/LastWriteTime을 파일 이동·분류 시 절대 변조하지 않는 보존 원칙.",
      "chapters": [
        "archive",
        "notes"
      ]
    },
    {
      "ko": "로컬 클라우드 캐시 분리",
      "en": "Dedicated D-Drive Cloud Cache Isolation",
      "abbr": "DriveCache",
      "def": "Google Drive 데스크톱 앱의 로컬 캐시 경로를 D:\\GoogleDriveCache로 고정해 C드라이브(OS 파티션) 용량 고갈을 방지하고 대용량 미디어 스트리밍 I/O를 안정화하는 설정.",
      "chapters": [
        "archive",
        "overview"
      ]
    },
    {
      "ko": "AI 포토 메모리 스튜디오",
      "en": "AI Photo Memory Studio (Read-Only Media Indexer)",
      "abbr": "MemoryStudio",
      "def": "Photos/ 원본을 읽기 전용(Read-Only)으로 마운트해 YuNet 얼굴 검출, SFace 128-D 임베딩, YOLO11n 객체 태그, 지식 그래프 RAG 검색 및 Split-Wipe 비교를 제공하는 로컬 웹 스튜디오.",
      "chapters": [
        "archive",
        "life"
      ]
    },
    {
      "ko": "YuNet + SFace 128-D",
      "en": "YuNet Face Detector & SFace 128-D Embedding",
      "abbr": "SFace",
      "def": "경량 얼굴 검출기 YuNet(conf≥0.6)과 128차원 L2 정규화 특징 벡터 SFace(코사인 유사도≥0.360)를 결합해 인물 클러스터링·검색을 수행하는 비전 파이프라인.",
      "chapters": [
        "archive",
        "life"
      ]
    },
    {
      "ko": "듀얼 뷰어 Split-Wipe",
      "en": "Dual-Viewer Before/After Split-Wipe & Loupe",
      "abbr": "Split-Wipe",
      "def": "원본 이미지와 색보정/복원 결과물을 드래그 가능한 분할선(Split-Wipe)과 동기화 줌 루페(Synchronized Loupe)로 픽셀 단위 비교하는 인터랙티브 뷰어.",
      "chapters": [
        "archive",
        "life"
      ]
    }
  ]
};
