window.BOOK_GLOSSARY = {
  "version": 1,
  "generated_by": "docs/build_isocell_portal.py",
  "terms": [
    {
      "ko": "리모자이크 (Remosaic)",
      "en": "Non-Bayer to Bayer Conversion",
      "abbr": "Remosaic",
      "def": "Non-Bayer 멀티셀 컬러 필터 배열(2×2 Q-cell / 4×4 Hexadeca)을 표준 Camera ISP가 처리할 수 있는 2×2 Bayer (RGGB) 배열로 재배열·복원하여 200MP 초고해상도 촬영 및 2×/4× 무손실 인센서 줌을 가능하게 하는 핵심 알고리즘.",
      "chapters": [
        "isocell_sensors",
        "e2e_remosaic"
      ]
    },
    {
      "ko": "Tetra²pixel (4×4 Hexadeca CFA)",
      "en": "16-Cell Non-Bayer Color Filter Array",
      "abbr": "Tetra²pixel",
      "def": "인접한 4×4 = 16개 서브마이크론 포토다이오드에 동일 컬러 필터(R, G, B)를 배치해 저조도 12.5MP(4×4 비닝), 중조도 50MP(2×2 비닝), 고조도 200MP 풀해상도 및 4× 인센서 줌(Remosaic)을 모두 지원하는 삼성전자의 16-cell 컬러 필터 구조.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "QMSC (AI 4×4 Q-Cell Remosaic)",
      "en": "In-Sensor AI 4×4 Q-Cell Remosaic",
      "abbr": "QMSC",
      "def": "ISOCELL HP2 (0.6µm, 200MP) 센서 내부에 탑재된 AI 기반 4×4 Q-cell Remosaic 알고리즘으로, Galaxy S23 Ultra 메인 카메라의 200MP 촬영 및 12MP 4× 인센서 줌 모드를 구현한 핵심 기술.",
      "chapters": [
        "isocell_sensors"
      ]
    },
    {
      "ko": "E2E AI Remosaic",
      "en": "End-to-End 200MP S/W ISP Turn-Key Platform",
      "abbr": "E2E AI RMSC",
      "def": "DL Remosaic과 Camera ISP 연산을 모바일 이기종 연산기(CPU/GPU/NPU/ISP)에 분배하고 Camera ISP 파이프라인 상단에 직접 탑재하여 200MP 캡처 지연시간(cfa2yuv)을 최대 3배 단축(3s → 1s @ SM8550)한 삼성전자의 턴키 S/W ISP 플랫폼.",
      "chapters": [
        "e2e_remosaic"
      ]
    },
    {
      "ko": "이기종 SoC 병렬화",
      "en": "CPU / GPU / NPU / ISP Pipeline Distribution",
      "abbr": "HetSoC",
      "def": "Qualcomm Snapdragon 및 MediaTek Dimensity 모바일 AP의 CPU, GPU, NPU, H/W ISP에 DL Remosaic과 S/W ISP 서브태스크를 분할·스케줄링하여 Camera ISP 파이프라인 위에서 병렬 실행하는 아키텍처.",
      "chapters": [
        "e2e_remosaic"
      ]
    }
  ]
};
