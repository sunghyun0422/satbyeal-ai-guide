"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Types
type PageType = "home" | "part1" | "part2";
type AgentType = "writer" | "researcher" | "analyst" | "automator";
type APIProviderType = "google" | "youtube" | "naver";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function Home() {
  // Theme and Page Routing States
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // GNB Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page Change Scroll Reset
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1편 (Projects) States
  const [projectBeforeAfterTab, setProjectBeforeAfterTab] = useState<"sideBySide" | "focus">("sideBySide");
  const [projectCodeCopied, setProjectCodeCopied] = useState(false);

  // 2편 (GPTs) States
  const [selectedAgent, setSelectedAgent] = useState<AgentType>("writer");
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulationResult, setSimulationResult] = useState("");
  const [agentPromptCopied, setAgentPromptCopied] = useState(false);
  const [agentSchemaCopied, setAgentSchemaCopied] = useState(false);

  // 2편 API Connection States
  const [selectedAPI, setSelectedAPI] = useState<APIProviderType>("google");
  const [apiCopied, setApiCopied] = useState(false);

  // Onboarding Quiz States (CTA)
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [userDivision, setUserDivision] = useState("H&A");
  const [userPainPoint, setUserPainPoint] = useState("market");
  const [userEmail, setUserEmail] = useState("");
  const [quizResultFileReady, setQuizResultFileReady] = useState(false);

  // Chatbot Widget States
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotMessages, setChatbotMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "안녕하세요! LG전자 샛별자문단 AI 매거진 가이드 에디터봇입니다. 1편 Projects나 2편 GPTs에 대해 궁금한 점을 편하게 질문해 주세요!" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatbotEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll for chatbot
  useEffect(() => {
    if (chatbotEndRef.current) {
      chatbotEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatbotMessages, isTyping]);

  // API Action Schemas for Google, YouTube, Naver Search APIs
  const apiSchemas = {
    google: {
      title: "Google Custom Search API OpenAPI JSON Schema",
      description: "구글 커스텀 검색 API를 호출해 실시간 보도자료나 업계 뉴스 정보를 마켓 분석에 자동 수집하도록 돕는 JSON Schema입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Google Custom Search API",
    "description": "LGE Market intelligence real-time Google search trigger",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://www.googleapis.com/customsearch"
    }
  ],
  "paths": {
    "/v1": {
      "get": {
        "operationId": "searchGoogle",
        "summary": "Queries google search index for real-time competitor news",
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "required": true,
            "description": "Search keyword query (e.g. LG HE Smart TV)",
            "schema": { "type": "string" }
          },
          {
            "name": "cx",
            "in": "query",
            "required": true,
            "description": "Google Search Engine ID (CX)",
            "schema": { "type": "string" }
          },
          {
            "name": "key",
            "in": "query",
            "required": true,
            "description": "Google API Developer Key",
            "schema": { "type": "string" }
          }
        ]
      }
    }
  }
}`
    },
    youtube: {
      title: "YouTube Data API v3 OpenAPI JSON Schema",
      description: "유튜브의 특정 비디오 리스트나 테크 리뷰어들의 LG 가전 반응 영상을 검색하고 동향을 자동 요약하는 API Schema입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "YouTube Data API Search",
    "description": "LGE Product Review tracking through YouTube Search",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://www.googleapis.com/youtube/v3"
    }
  ],
  "paths": {
    "/search": {
      "get": {
        "operationId": "searchYouTube",
        "summary": "Search YouTube videos by query",
        "parameters": [
          {
            "name": "part",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "default": "snippet" }
          },
          {
            "name": "q",
            "in": "query",
            "required": true,
            "schema": { "type": "string" }
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "default": "video" }
          },
          {
            "name": "key",
            "in": "query",
            "required": true,
            "schema": { "type": "string" }
          }
        ]
      }
    }
  }
}`
    },
    naver: {
      title: "Naver Search API OpenAPI JSON Schema",
      description: "네이버 뉴스/블로그 검색 API를 호출해 국내 여론 반응, IT 테크 미디어 보도 자료를 실시간으로 요약해 정리해주는 API Schema입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Naver News Search API",
    "description": "LGE Domestic Tech Trends Naver Search API connection",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://openapi.naver.com"
    }
  ],
  "paths": {
    "/v1/search/news.json": {
      "get": {
        "operationId": "searchNaverNews",
        "summary": "Fetch Naver News results by search term",
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "schema": { "type": "string" }
          },
          {
            "name": "display",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "default": 10 }
          }
        ]
      }
    }
  }
}`
    }
  };

  const getProjectInitializeCode = () => `// LG Electronics ChatGPT Projects Workspace Auto-Initializer Script
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function initProjectWorkspace() {
  console.log("LG HE 스마트 TV 마케팅 기획 프로젝트 워크스페이스 구축 시작...");
  
  // 1. 프로젝트 전용 어시스턴트 생성 (Knowledge + Instructions 내장)
  const assistant = await openai.beta.assistants.create({
    name: "LG HE TV Market Research Project Assistant",
    instructions: \`귀하는 LG전자 HE사업본부의 스마트 TV 글로벌 마케팅 기획팀 소속 가상 AI 전략 분석원입니다. 
본 프로젝트에 탑재된 스마트 TV 글로벌 마케팅 가이드라인 및 CSV 시장점유율 데이터 파일(Knowledge)을 기반으로만 모든 답변을 생성하십시오.
답변 작성 시 LG전자의 F.U.N (First, Unique, New) 고객경험 원칙을 톤앤매너로 삼아야 하며, 
절대 사내 보안 규정에 위배되는 미공개 제품 사양이나 개인정보를 외부 퍼블릭 인터넷 브라우징으로 유출해서는 안 됩니다.\`,
    model: "gpt-4o-2024-05-13",
    tools: [{ type: "file_search" }] // 프로젝트 전용 파일 서치 툴 활성화
  });
  
  console.log(\`[성공] 프로젝트 어시스턴트가 생성되었습니다. ID: \${assistant.id}\`);
}

initProjectWorkspace();`;

  const agentSpecs = {
    writer: {
      title: "프리미엄 카피라이터 (Writer)",
      subtitle: "LG F.U.N 마케팅 카피 작성을 자동화하고 톤앤매너를 영구 고정하는 에이전트",
      division: "HE / H&A 마케팅부문",
      before: "설정 안함 (일반 GPT): LG SIGNATURE 올레드 TV는 백라이트가 없어서 아주 얇고 화질이 훌륭한 프리미엄 TV입니다. 명암비가 높아서 블랙 표현력이 매우 우수하고 디자인도 세련되어 많은 소비자들이 선호하고 구매하고 있습니다. 관심 있으시면 매장에 방문해서 구경해 보세요.",
      after: "설정 적용 (커스텀 GPT): [LG SIGNATURE OLED TV - 스스로 빛나는 완벽한 예술]\n\n빛을 잃었던 공간에, 백라이트 없이 스스로 빛나는 OLED가 더하는 압도적인 품격.\n\n오직 LG SIGNATURE OLED TV만이 표현할 수 있는 '완벽한 블랙'과 '무한한 명암비'를 통해, 평범한 TV 시청을 넘어 오직 첫 번째로, 오직 다르게, 오직 새롭게 전해지는 최고의 F.U.N(First, Unique, New) 고객경험 가치를 지금 느껴보십시오.",
      prompt: `[System Instruction]
- 역할: LG전자 글로벌 마케팅 본부의 브랜드 카피라이팅 디렉터.
- 타겟: LG 프리미엄 가전 구매 고객층 및 사내 마케터.
- 핵심 톤앤매너: LG전자의 핵심 가치인 F.U.N (First: 신선함, Unique: 차별성, New: 새로움) 원칙을 녹여내며, 은유적이고 고급스러우며 명료한 단어를 선택합니다.
- 금기사항: '화질이 우수하다', '성능이 좋다' 같은 평범하고 상투적인 표현 대신, 고객의 라이프스타일 변화를 이끌어내는 정서적 문구를 사용하십시오.
- 양식: 헤드카피 (대괄호 표기) + 바디카피 3문장 이내로 직관적 단락 구분.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "LG Brand CMS API",
    "version": "1.0.0"
  },
  "servers": [{ "url": "https://api.lge.com/marketing" }],
  "paths": {
    "/v1/cms/copywriters": {
      "post": {
        "operationId": "uploadMarketingCopy",
        "summary": "작성된 프리미엄 카피라이팅을 LG 사내 CMS에 자동 전송 및 저장"
      }
    }
  }
}`,
      guide: [
        "GPTs 설정 화면(Configure)으로 들어가 Name을 'LGE Premium Copywriter'로 명명합니다.",
        "Instructions 영역에 위 LG F.U.N 카피라이터 전용 System Prompt를 그대로 붙여넣습니다.",
        "Capabilities에서 Code Interpreter를 체크 해제하고 Web Search 기능을 활성화합니다.",
        "Actions에서 Create New Action을 클릭한 뒤 CMS 전송용 OpenAPI JSON 스키마를 입력해 저장합니다."
      ],
      simulationLogs: [
        "[SYSTEM] LGE Premium Copywriter GPTs 가동...",
        "[AI] 마케팅 카피 추출용 원본 텍스트 확인 완료 (LG SIGNATURE OLED TV)",
        "[AI] LG F.U.N 가이드라인 로드: First (신선함), Unique (차별성), New (새로움) 키워드 톤앤매너 세팅",
        "[AI] '스스로 빛나는 블랙', '무한한 명암비' 등 프리미엄 수식어 결합 및 검토 중...",
        "[SYSTEM] CMS API 전송용 임시 페이로드 생성 완료.",
        "[AI] 최종 카피 생성 성공. (아래 출력을 확인하십시오)"
      ]
    },
    researcher: {
      title: "트렌드 리서처 (Researcher)",
      subtitle: "구글/네이버 검색 API를 Action으로 연동해 동향 보고를 한 단어로 끝내는 에이전트",
      division: "전사 전략기획실 / 각 사업본부 기획실",
      before: "설정 안함 (일반 GPT): (실시간 정보를 파악하지 못해 2023년 이전의 옛날 웹 지식이나 위키백과 정보만 출력함) 삼성이나 소니의 마이크로 LED 및 OLED TV의 최신 2026년 6월 출하량 데이터와 보도자료는 실시간 연동이 없기 때문에 구글에서 수동 검색하여 내용을 복사해주셔야 요약 가능합니다.",
      after: "설정 적용 (커스텀 GPT): [실시간 트렌드 보고서 - OLED TV 경쟁 동향 (2026년 6월 12일 기준)]\n\n1. 경쟁사 동향: 삼성전자는 차세대 Neo QLED 라인업에 AI 화질 최적화 프로세서 탑재를 공식 발표하였으며, 소니는 초대형 MicroLED 하이엔드 시장에 집중하고 있습니다.\n2. 시장 점유율 분석: 당월 글로벌 프리미엄 TV 출하량은 OLED TV 수요 회복세에 힘입어 전월 대비 4.2% 증가하였으며, 그 중 LG OLED TV가 53%의 시장 점유율을 굳건히 수호하고 있습니다.\n3. 핵심 유튜버 분석: 테크 인플루언서들은 LG의 새로운 독자 화질 알고리즘에 대한 디스플레이 균일도 성능을 긍정 평가 중입니다.",
      prompt: `[System Instruction]
- 역할: LG전자 전략기획본부 전사 Intelligence Research 분석원.
- 임무: 구글, 네이버 뉴스 검색 API와 유튜브 서치 API를 Actions로 호출하여 글로벌 프리미엄 가전 시장과 경쟁사의 가장 최신 기사 및 테크 트렌드 리포트를 실시간 작성합니다.
- 정보 가공 규칙: 수집된 개별 데이터를 파편적으로 출력하지 말고, [실시간 트렌드 보고서] 포맷으로 묶어 1) 경쟁사 동향, 2) 시장 분석, 3) 여론 분석(유튜브)으로 정밀하게 분류하여 요약해야 합니다.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "LGE Strategy Trend Search API",
    "version": "1.0.0"
  },
  "servers": [{ "url": "https://api.lge.com/strategy" }],
  "paths": {
    "/v1/trends/search": {
      "get": {
        "operationId": "fetchMarketTrends",
        "summary": "구글/네이버/유튜브 통합 검색 API로 최신 경쟁 동향 데이터를 원격 호출"
      }
    }
  }
}`,
      guide: [
        "GPTs 설정에서 Instructions에 전사 Intelligence Research 프롬프트를 입력합니다.",
        "Capabilities에서 Web Search를 끄고, 대신 Actions를 통해 구글/네이버/유튜브 OpenAPI Schema를 통합 입력합니다.",
        "공식 API 인증 토큰을 Actions API Key에 Bearer/Custom 형태로 안전하게 저장합니다.",
        "이제 사용자가 특정 키워드(예: 'OLED TV 경쟁 동향')만 입력하면 백그라운드에서 실시간 실습 데이터를 취합합니다."
      ],
      simulationLogs: [
        "[SYSTEM] Trend Researcher GPTs 가동...",
        "[API] Google Search API 호출 중... Query: 'Samsung Sony OLED TV 2026 June'",
        "[API] Naver News API 호출 중... Query: 'LG 프리미엄 TV 출하량 점유율'",
        "[API] YouTube API 호출 중... Query: 'LG OLED TV 화질 리뷰'",
        "[AI] 수집된 뉴스 기사 15건 및 동영상 리뷰 8건 파싱...",
        "[AI] 경쟁사 동향, 시장 점유율, 유튜브 여론 부문으로 데이터 분할 요약 중..."
      ]
    },
    analyst: {
      title: "데이터 애널리스트 (Analyst)",
      subtitle: "가전 판매 원자료(CSV/XLSX)를 올리면 파이썬 샌드박스로 자동 시각화하는 에이전트",
      division: "HE / H&A 사업지원그룹 및 전사 재경부문",
      before: "설정 안함 (일반 GPT): 업로드하신 CSV 가전 판매량 데이터를 읽었습니다. 1분기 H&A 3500대, HE 2100대... (데이터를 단순히 텍스트 표로만 나열하며, 마케팅 보고서에 바로 쓸 수 있는 시각적인 고해상도 차트나 인사이트 그래프를 즉시 생성하지 못함)",
      after: "설정 적용 (커스텀 GPT): [2026년 상반기 LG 가전 사업본부별 판매 실적 분석 시각화 완료]\n\n업로드된 판매량 원본 데이터를 파이썬 Pandas를 사용해 정제하였으며, H&A사업본부의 매출 기여도(58.3%)와 HE사업본부의 스마트 TV 판매 상승 추이를 담은 고해상도 시각화 그래프 이미지를 생성 완료했습니다.\n\n- 핵심 인사이트: 2분기 H&A 본부의 시그니처 세탁건조기 판매량이 전년 동기 대비 14.5% 상승하며 전체 이익률 견인.\n- 분석 파일: lge_sales_report_2026_h1_visualized.png (고화질 이미지 차트 생성 완료)",
      prompt: `[System Instruction]
- 역할: LG전자 전사 데이터분석센터 가전 시장 비즈니스 데이터 애널리스트.
- 임무: 사용자가 업로드한 CSV, Excel 파일의 원본 수치 데이터를 정제하고 통계적 인사이트를 도출합니다.
- 작동 수칙: 반드시 GPT 내부의 'Code Interpreter' 기능을 호출하여 파이썬 코드로 연산을 수행하고, 그 코드 분석 과정을 사용자에게 명확히 보고해야 합니다. 보고서 제출용으로 즉각 활용 가능한 고해상도 시차트(Line, Bar, Pie)를 한국어 레이블과 함께 생성하십시오.`,
      schema: "N/A (Capabilities 내의 Code Interpreter 기본 기능을 활용하므로 추가 OpenAPI Schema 등록이 불필요합니다.)",
      guide: [
        "GPTs 설정의 Configure 메뉴에서 Capabilities의 'Code Interpreter' 항목을 필수로 체크해 활성화합니다.",
        "Instructions 영역에 LGE 비즈니스 데이터 애널리스트 프롬프트를 입력합니다.",
        "분석할 원본 엑셀 시트나 글로벌 판매 데이터 CSV 파일을 채팅 창에 직접 드래그앤드롭으로 업로드합니다.",
        "데이터를 올리며 '본부별 실적을 차트로 시각화해주고 시사점 3가지를 정리해줘'라고 한글로 요청합니다."
      ],
      simulationLogs: [
        "[SYSTEM] Data Analyst GPTs 가동...",
        "[SYSTEM] Capabilities: Code Interpreter (Python Sandbox) 활성화 확인.",
        "[SYSTEM] User Upload File 로드 성공: 'lge_sales_data.csv' (15,420 rows)",
        "[CODE] import pandas as pd\n[CODE] df = pd.read_csv('lge_sales_data.csv')\n[CODE] df_grouped = df.groupby('Division')['Sales'].sum()",
        "[CODE] import matplotlib.pyplot as plt\n[CODE] # 한국어 폰트 설정 및 본부별 판매량 파이 차트 생성 완료",
        "[AI] 분석 데이터 연산 완료. 인사이트 요약본 작성 중..."
      ]
    },
    automator: {
      title: "VS 품질 오토메이터 (Automator)",
      subtitle: "Jira/품질 센서 장애를 감지해 아웃룩 메일 및 슬랙 채널로 요약 전파하는 자동화 에이전트",
      division: "VS(전장) 품질보증그룹",
      before: "설정 안함 (일반 GPT): 전장 센서의 장애 결함 코드를 분석했습니다. 이 결함 코드는 통신 오류로 보입니다. 이 내용을 부서원분들께 전달하고 싶으시다면, 메일이나 슬랙을 켜서 담당자 주소를 찾은 후 직접 복사해서 전달하시기 바랍니다. 제가 외부 메일이나 슬랙을 발송할 권한이 없습니다.",
      after: "설정 적용 (커스텀 GPT): [LGE VS 품질 긴급 경보 - Alert 시스템 자동 전파 완료]\n\n- 발생 일시: 2026-06-12 20:50\n- 오류 코드: ERR_CAN_BUS_TIMEOUT (전장 CAN 통신 일시 장애)\n- 전파 상태:\n  1) VS품질보증팀 아웃룩 그룹 메일 발송 완료 (수신처: vs_qa_all@lge.com)\n  2) 슬랙 채널(#vs-품질-경보-채널) 메시지 즉시 전송 완료 (Status 200).\n- 권고 조치: 게이트웨이 ECU 모듈 커넥터 접촉 불량 상태 긴급 점검 요망.",
      prompt: `[System Instruction]
- 역할: LG전자 VS사업본부 품질보증 스마트 모니터링 시스템 자동화 에이전트.
- 임무: VS 전장 부품 생산 라인 또는 SW 검증 과정에서 발생한 결함 코드와 로그 데이터를 해석하여, 양식화된 품질 경보문을 즉시 생성합니다.
- 자동 전파 규칙: 경보문 작성이 끝나면, Actions에 연결된 Outlook 메일 API와 Slack Webhook API를 백그라운드에서 실시간 호출하여 관련 유관 부서 전원에게 메일 발송 및 실시간 메시지 전파를 수동 개입 없이 수행 완료하십시오.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "LGE VS QA Alert and Dispatch API",
    "version": "1.0.0"
  },
  "servers": [{ "url": "https://api.lge.com/vs-qa" }],
  "paths": {
    "/v1/alerts/dispatch": {
      "post": {
        "operationId": "dispatchQualityAlert",
        "summary": "품질 경보문 및 전파 알림(슬랙, 메일)을 관련 커뮤니케이션 서버에 동시 전송"
      }
    }
  }
}`,
      guide: [
        "GPTs 설정에서 Instructions에 LGE VS 품질보증 자동화 프롬프트를 정확히 기입합니다.",
        "Actions 메뉴를 생성하고, 사내 메일 발송 서버 및 Slack Webhook API와 호환되는 OpenAPI Schema를 JSON 형식으로 등록합니다.",
        "보안을 위해 API Access Token을 지정 유형에 맞추어 설정합니다.",
        "오류 로그를 GPTs에 복사해 넣으면 경보문 요약부터 발송까지 일사천리로 자동 실행됩니다."
      ],
      simulationLogs: [
        "[SYSTEM] VS Quality Automator GPTs 가동...",
        "[AI] 입력받은 로그 분석: 'ERR_CAN_BUS_TIMEOUT' 발생 감지.",
        "[AI] 긴급 장애 전파 규격 템플릿 로드 완료.",
        "[API] Outlook Mail Dispatch API 호출 -> vs_qa_all@lge.com (성공)",
        "[API] Slack Notification API Webhook 호출 -> Channel ID: C092812A (성공)",
        "[SYSTEM] 외부 자동 전파 연동 절차 모두 성공."
      ]
    }
  };

  const currentAgent = agentSpecs[selectedAgent];

  const handleCopyText = (text: string, type: "prompt" | "schema" | "project" | "api") => {
    navigator.clipboard.writeText(text);
    if (type === "prompt") {
      setAgentPromptCopied(true);
      setTimeout(() => setAgentPromptCopied(false), 2000);
    } else if (type === "schema") {
      setAgentSchemaCopied(true);
      setTimeout(() => setAgentSchemaCopied(false), 2000);
    } else if (type === "project") {
      setProjectCodeCopied(true);
      setTimeout(() => setProjectCodeCopied(false), 2000);
    } else if (type === "api") {
      setApiCopied(true);
      setTimeout(() => setApiCopied(false), 2000);
    }
  };

  const handleRunSimulation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setSimulationLogs([]);
    setSimulationResult("");

    let logIndex = 0;
    const logs = currentAgent.simulationLogs;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        setSimulationLogs((prev) => [...prev, logs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
        setSimulationRunning(false);
        setSimulationResult(currentAgent.after);
      }
    }, 600);
  };

  const downloadQuizConfig = () => {
    const config = {
      gpts_name: `LGE ${userDivision} ${
        userPainPoint === "market"
          ? "Intelligence Trend Researcher"
          : userPainPoint === "report"
          ? "Sales Data Analyst"
          : userPainPoint === "copy"
          ? "Premium Brand Copywriter"
          : "VS Quality Automator"
      }`,
      target_division: userDivision,
      pain_point_focus: userPainPoint,
      author: "LGE Satbyeal Advisory Group 5th",
      gpt_capabilities: userPainPoint === "report" ? ["code_interpreter"] : ["web_browsing"],
      instructions: `[System Instruction]
- 역할: LG전자 ${userDivision} 사업본부 소속의 특화 AI 직무 비서입니다.
- 임무: ${
        userPainPoint === "market"
          ? "구글/네이버/유튜브 OpenAPI 검색 액션을 연동하여 시장 동향 및 기술 뉴스자료를 실시간 통합 요약하십시오."
          : userPainPoint === "report"
          ? "원자료 CSV/XLSX 데이터를 파이썬 Code Interpreter를 가동해 정밀 분석하고, 고화질 이미지 차트로 시각화하십시오."
          : userPainPoint === "copy"
          ? "LG F.U.N (First, Unique, New) 가이드라인을 기반으로, 고객 경험 중심의 품격 있고 간결한 프리미엄 카피를 작성하십시오."
          : "Jira 및 장비 로그 이슈 코드를 해석한 뒤, OpenAPI Actions를 트리거하여 관련 유관부서원들의 아웃룩 메일 및 슬랙 채널에 자동 전파 알림을 전송하십시오."
      }
- 사내 보안 규정: LG전자의 미공개 상품 기획안, 개인정보 및 1급 보안 코드는 퍼블릭 브라우저 서버로 외부 유출되지 않도록 전처리를 권고하십시오.`,
      recommended_api_actions:
        userPainPoint === "market"
          ? "Google Custom Search API / Naver News Search API"
          : userPainPoint === "automator"
          ? "LGE Dispatch Alert Mail API / Slack Webhook URL"
          : "N/A (Use Built-in Code Interpreter Sandbox)",
      created_at: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `LGE_GPTs_Config_${userDivision}_${userPainPoint}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sendQuickQuestion = (q: string) => {
    setChatbotMessages((prev) => [...prev, { sender: "user", text: q }]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      if (q.includes("5기는")) {
        reply = "샛별자문단 5기는 LG전자 임직원들이 생성형 AI를 단순 채팅을 넘어 영구적인 사내 업무 지식 자산으로 전환하도록 돕는 프리미엄 가이드 매거진 제작 협의체입니다. 경영진과 실무진 모두 실질적 업무 효율을 낼 수 있도록 실전에 즉시 활용 가능한 Projects 및 GPTs 워크플로우를 제공합니다.";
      } else if (q.includes("프로젝트와 GPTs")) {
        reply = "1편의 'ChatGPT Projects'는 다수의 문서를 올려놓고 여러 팀원들과 함께 맥락을 공유하며 채팅방(Thread)을 나누어 협업하는 '종합 가상 기획 사무실'입니다. 반면 2편의 'Custom GPTs'는 특정 단일 직무(예: 카피 생성, 실시간 시장 리서치, 엑셀 시각화)를 사전에 입력해둔 프롬프트와 외부 OpenAPI(Actions)에 연결하여 고속 반복 수행하는 '직무 자동화 미니 앱'입니다.";
      } else if (q.includes("Before vs After")) {
        reply = "설정을 하지 않은 'Before' 상태에서는 동일한 톤앤매너 설정 파일이나 엑셀 데이터를 매 대화 세션마다 업로드하고, 긴 프롬프트를 매번 복사해 붙여넣어야 합니다. 반면 설정을 마친 'After' 상태에서는 단 한 번의 파일 등록과 지침 고정으로, 한글 키워드 한 단어만 입력해도 완벽한 결과물을 즉시 받아보거나 백그라운드 자동화(Actions)가 실행됩니다.";
      } else if (q.includes("API 연동")) {
        reply = "GPTs 생성 화면의 [Configure] -> [Actions] -> [Create New Action]을 선택하고, 저희 매거진 2편에서 제공하는 Google, YouTube, Naver Search 등의 OpenAPI JSON 스키마를 붙여넣으십시오. 발급받으신 API 인증 키를 헤더 또는 쿼리에 연동하면 GPTs가 최신 웹 자료를 실시간 수집할 수 있게 됩니다.";
      } else {
        reply = "좋은 질문입니다! 샛별자문단 5기 프리미엄 AI 가이드 각 편(1편 Projects, 2편 GPTs & Actions) 탭으로 이동하시면 상세한 단계별 셋업 매뉴얼과 LG전자 임직원 맞춤형 원클릭 복사 스니펫이 제공됩니다. 직접 확인해 보십시오!";
      }

      setChatbotMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  const handleChatbotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("chatInput") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;

    setChatbotMessages((prev) => [...prev, { sender: "user", text }]);
    input.value = "";
    setIsTyping(true);

    setTimeout(() => {
      let reply = `'${text}'에 대해 답변해 드립니다. LG전자 업무 환경에서 ChatGPT Projects는 데이터 유출 방지 조치와 파일 20개 통합 관리에 매우 뛰어나며, GPTs는 OpenAPI Actions 연동을 통해 수동 리서치를 획기적으로 줄여줍니다. 상세 단계는 본 매거진의 1편과 2편 상단 클릭형 메뉴를 이동하여 복사 가능한 프롬프트 및 예제 스키마를 확인하십시오.`;
      setChatbotMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? "bg-[#0B0B0C] text-[#E5E5EA]" : "bg-[#F9F9FB] text-[#1D1D1F]"}`}>
      
      {/* Editorial Top Info Header */}
      <div className={`w-full text-center py-2 text-[10px] tracking-[0.2em] font-extrabold uppercase border-b ${darkMode ? "bg-[#141417] border-[#222226] text-neutral-500" : "bg-[#FFFFFF] border-[#E5E5EA] text-neutral-500"}`}>
        LG Electronics — Satbyeal Advisory Group 5th Premium AI Editorial — Vol.05 (June 2026)
      </div>

      {/* Main GNB Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 border-b backdrop-blur-md ${isScrolled ? "py-3 shadow-md" : "py-6"} ${darkMode ? "bg-[#0B0B0C]/90 border-[#222226]" : "bg-[#F9F9FB]/90 border-[#E5E5EA]"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handlePageChange("home")}>
            <div className="h-9 w-9 rounded-full bg-[#A50034] flex items-center justify-center text-white font-black text-lg shadow-lg">L</div>
            <div className="leading-tight">
              <span className="font-extrabold text-base tracking-wider block text-[#A50034]">SATBYEAL 5th</span>
              <span className="text-[9px] tracking-widest uppercase text-neutral-400 font-bold block">AI PREMIUM GUIDE</span>
            </div>
          </div>

          {/* Clickable Magazine Router Tabs */}
          <nav className="flex items-center gap-1.5 p-1.5 rounded-full border bg-opacity-80 transition-all duration-300 shadow-sm bg-neutral-100/30 dark:bg-neutral-800/30 border-neutral-250 dark:border-neutral-700">
            <button
              onClick={() => handlePageChange("home")}
              className={`py-2 px-5 text-xs font-black rounded-full transition-all duration-300 ${
                currentPage === "home"
                  ? "bg-[#A50034] text-white shadow-md"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              홈 (HOME)
            </button>
            <button
              onClick={() => handlePageChange("part1")}
              className={`py-2 px-5 text-xs font-black rounded-full transition-all duration-300 ${
                currentPage === "part1"
                  ? "bg-[#A50034] text-white shadow-md"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              1편 (PROJECTS)
            </button>
            <button
              onClick={() => handlePageChange("part2")}
              className={`py-2 px-5 text-xs font-black rounded-full transition-all duration-300 ${
                currentPage === "part2"
                  ? "bg-[#A50034] text-white shadow-md"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              2편 (GPTS & API)
            </button>
          </nav>

          {/* Theme Switch & Quick CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                darkMode
                  ? "border-neutral-700 hover:bg-neutral-800 text-yellow-400"
                  : "border-neutral-300 hover:bg-neutral-100 text-neutral-600"
              }`}
              title="다크모드 전환"
            >
              {darkMode ? (
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setQuizOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#A50034] text-white hover:bg-red-800 font-bold text-xs py-2.5 px-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              자가진단 실행
            </button>
          </div>
        </div>
      </header>

      {/* Main Magazine Layout Body */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ==================== 1. HOME VIEW (COVER STORY) ==================== */}
        {currentPage === "home" && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* Magazine Cover Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b pb-12 dark:border-neutral-800">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-block px-3 py-1 bg-[#A50034]/15 text-[#A50034] dark:text-[#E6004B] font-black text-xs uppercase tracking-widest rounded">
                  Cover Story & Special Issue
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                  AI를 비서가 아닌<br />
                  <span className="text-[#A50034]">동료의 수준으로</span><br />
                  세팅하십시오.
                </h1>
                <p className="text-base sm:text-lg text-neutral-500 leading-relaxed font-medium">
                  매번 소속 본부명과 지시 사항을 복사하여 붙여넣고 계십니까? 샛별자문단 5기가 발행하는 이번 프리미엄 에디션은 임직원 및 임원분들께서 수동 반복 검색과 무의미한 업로드를 획기적으로 탈피할 수 있는 <strong>ChatGPT Projects</strong>와 <strong>Custom GPTs & Actions</strong> 가이드를 제안합니다.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => handlePageChange("part1")}
                    className="bg-black dark:bg-[#E5E5EA] text-white dark:text-black hover:bg-neutral-850 dark:hover:bg-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    1편: Projects 가상오피스 읽기
                  </button>
                  <button
                    onClick={() => handlePageChange("part2")}
                    className="bg-[#A50034] hover:bg-red-800 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    2편: GPTs 직무자동화 읽기
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 flex items-center justify-center p-6">
                  <Image
                    src="/hero_3d_trophy.png"
                    alt="LG Active Intel Hero Graphic"
                    width={380}
                    height={380}
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 dark:bg-black/80 backdrop-blur-md border border-neutral-700 p-3.5 rounded-2xl text-center">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-300 font-bold block">EDITORIAL ARTWORK</span>
                    <span className="text-xs text-white font-extrabold">샛별자문단 5기 프리미엄 가이드 커버 일러스트</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Letter & Video Comparison Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Editorial Column */}
              <div className="md:col-span-4 p-8 rounded-3xl border border-dashed text-left space-y-4 dark:border-neutral-800 dark:bg-[#0F0F11]">
                <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">Letter From Editors</h3>
                <h4 className="text-lg font-bold">"일시적 대화창에서 벗어나 지속 가능한 사내 자산으로"</h4>
                <p className="text-xs text-neutral-500 leading-relaxed space-y-2">
                  기존의 대화형 AI 인터페이스는 매 세션이 끝날 때마다 데이터 업로드와 가이드라인 세팅이 초기화되는 한계를 가집니다. 임직원이 수집한 마케팅 데이터, 결함 이슈 양식, 엑셀 정렬 분석 룰은 사내 지식 자산으로 축적되어야 합니다.
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  1편에서는 다수의 지식 데이터 맥락을 고정한 채 다양한 분석 방을 열어 부서원과 협업하는 <strong>Projects</strong>를, 2편에서는 단 한 번의 설정과 API Actions 연동으로 수동 비즈니스 보고서 추출을 자동 전파하는 <strong>Custom GPTs</strong>를 전격 비교 설명합니다.
                </p>
                <div className="border-t pt-4 dark:border-neutral-800 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold">LGE</div>
                  <div>
                    <span className="text-xs font-bold block">샛별자문단 5기 에디터 일동</span>
                    <span className="text-[9px] text-neutral-400 block font-medium">LG Electronics AI Guide Project</span>
                  </div>
                </div>
              </div>

              {/* Core Feature Matrix Accordion */}
              <div className="md:col-span-8 space-y-6 text-left">
                <h3 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100">
                  핵심 비교: ChatGPT Projects vs Custom GPTs
                </h3>
                <p className="text-sm text-neutral-500">
                  용도와 범위에 맞는 AI 협업 툴을 선정하는 것이 전사 생산성 향상의 핵심 첫 단추입니다. 아래 비교 핵심을 확인하십시오.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Card 1: Projects */}
                  <div className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-[#141417] bg-white border-neutral-200">
                    <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[#A50034] font-black mb-4">
                      01
                    </div>
                    <h4 className="text-lg font-extrabold mb-2 text-neutral-900 dark:text-neutral-100">
                      1편: ChatGPT Projects
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                      최대 20개, 총 20만 토큰에 달하는 방대한 사내 보고서와 CSV 문서를 업로드해 영구 고정시킨 뒤, 다수의 서브 스레드(채팅방)를 개설하여 팀 부서원들과 지식 베이스를 공유 및 실시간 동시 협업하는 '가상 전략 사무실'입니다.
                    </p>
                    <button
                      onClick={() => handlePageChange("part1")}
                      className="text-xs font-bold text-[#A50034] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      상세 사용 매뉴얼 바로가기 →
                    </button>
                  </div>

                  {/* Card 2: GPTs */}
                  <div className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-[#141417] bg-white border-neutral-200">
                    <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[#A50034] font-black mb-4">
                      02
                    </div>
                    <h4 className="text-lg font-extrabold mb-2 text-neutral-900 dark:text-neutral-100">
                      2편: Custom GPTs & API Actions
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                      특정 직무 롤(마케팅 카피라이팅, 분석 보고서 작성, 센서 에러 전파 등)을 위해 전용 System Prompt와 API를 연동하여 특정 단일 명령만으로 작업을 수행하는 '업무 최적화용 단일 용도 자동화 비서'입니다.
                    </p>
                    <button
                      onClick={() => handlePageChange("part2")}
                      className="text-xs font-bold text-[#A50034] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      구축 방법 및 시뮬레이션 바로가기 →
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Diagnostic Onboarding Quiz (CTA Card) */}
            <div className="p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden bg-gradient-to-br from-[#A50034] to-red-900 text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                </svg>
              </div>
              <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                <span className="px-3.5 py-1 bg-white/15 text-white font-extrabold text-xs uppercase tracking-widest rounded-full">
                  1-Min Interactive Tool
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  부서 맞춤형 GPTs 설정을 즉시 진단해 드립니다.
                </h2>
                <p className="text-sm text-red-100 font-medium">
                  본인의 소속 사업본부와 현재 업무상 겪고 계신 불편함(Pain Point)을 바탕으로, 복사해 바로 사용할 수 있는 최적의 GPTs System Instructions 프롬프트와 다운로드 가능한 설정 파일(.json)을 즉각 추출해 가십시오.
                </p>
                <button
                  onClick={() => {
                    setQuizStep(1);
                    setQuizResultFileReady(false);
                    setQuizOpen(true);
                  }}
                  className="bg-white hover:bg-neutral-100 text-[#A50034] font-black text-sm px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  맞춤형 자가진단 및 JSON 설정 빌드 시작하기
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ==================== 2. PART 1: PROJECTS VIEW ==================== */}
        {currentPage === "part1" && (
          <div className="space-y-12 animate-fadeIn text-left">
            
            {/* Part 1 Title Cover */}
            <div className="border-b pb-8 dark:border-neutral-800 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-[#A50034] tracking-widest">CHAPTER 01</span>
                <span className="h-1 w-8 bg-[#A50034]"></span>
                <span className="text-xs text-neutral-400 font-bold">팀 단위 협업과 대규모 지식 맥락 영구 고정</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                1편: ChatGPT Projects - 가상 사무실 구축
              </h1>
              <p className="text-base text-neutral-500 max-w-4xl">
                다수의 부서원들이 올레드 스마트 TV 로드맵과 시장점유율 데이터를 매번 다시 수동으로 업로드할 필요가 없습니다. Projects 기능은 일관된 백그라운드 지식을 유지하며 대화방을 안전하게 분할 분석해 줍니다.
              </p>
            </div>

            {/* Premium Artwork Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#141417] p-8 rounded-3xl border dark:border-neutral-800">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 p-4">
                  <Image
                    src="/chapter1_network.png"
                    alt="Projects Network Concept Illustration"
                    width={340}
                    height={340}
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#A50034]">Workflow Visualized</span>
                <h3 className="text-xl font-bold">"파일 업로드 1회로 부서의 영구 브레인 셋업"</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  프로젝트 기능은 최대 20개의 텍스트 파일, 제품 매뉴얼, 코드 가이드, 엑셀 시트 등 대용량 데이터 맥락(Context)을 고정하여 지침을 상시 적용합니다. 팀원들을 프로젝트에 한 번만 초대하면, 모든 인원이 완벽하게 동기화된 가상 AI 조력자와 함께 실시간 개별 세션에서 안전하게 대화하며 결과를 산출할 수 있습니다.
                </p>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded">지식 지속 유지</span>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded">대화 스레드 분할</span>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-[#A50034]/10 text-[#A50034] rounded">팀 협업 초대</span>
                </div>
              </div>
            </div>

            {/* Before vs After Section - Projects */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  비포 & 애프터 체감 비교 (설정을 하고 안하고)
                </h3>
                <div className="flex bg-neutral-100 dark:bg-neutral-850 p-1 rounded-lg">
                  <button
                    onClick={() => setProjectBeforeAfterTab("sideBySide")}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      projectBeforeAfterTab === "sideBySide"
                        ? "bg-[#A50034] text-white shadow-sm"
                        : "text-neutral-500"
                    }`}
                  >
                    나란히 비교
                  </button>
                  <button
                    onClick={() => setProjectBeforeAfterTab("focus")}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      projectBeforeAfterTab === "focus"
                        ? "bg-[#A50034] text-white shadow-sm"
                        : "text-neutral-500"
                    }`}
                  >
                    애프터 집중
                  </button>
                </div>
              </div>

              {projectBeforeAfterTab === "sideBySide" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before card */}
                  <div className="p-8 rounded-3xl border border-red-200/60 dark:border-red-900/40 bg-red-50/10 dark:bg-red-950/5 relative overflow-hidden space-y-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl"></div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span>
                      <h4 className="text-lg font-bold text-red-700 dark:text-red-400">설정 안함 (Before - 기존의 일반 대화)</h4>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      1. 매번 새 대화를 열 때마다 20MB 상당의 <strong>LG HE 스마트 TV 글로벌 마케팅 가이드라인 PDF</strong> 파일과 <strong>경쟁사 제품 단가 엑셀 데이터</strong>를 다시 드래그앤드롭으로 수동 업로드해야 함.
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      2. 'LG전자 톤앤매너 규칙(F.U.N), 보안 서약 준수 의무' 등과 같은 4,000자 분량의 시스템 프롬프트 지침을 매번 메모장에서 찾아 복사하고 대화 시작 시점에 수동으로 재입력하는 피로 발생.
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      3. 팀원들이 개별적으로 AI를 사용하며 공유가 되지 않아, 동일 문서 분석을 부서 내 10명이 각자 10번 업로드하여 활용하는 시간적 낭비와 불통의 환경 초래.
                    </p>
                  </div>

                  {/* After card */}
                  <div className="p-8 rounded-3xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-50/10 dark:bg-emerald-950/5 relative overflow-hidden space-y-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                      <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">설정 적용 (After - Projects 가상오피스 구축)</h4>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      1. 최초 생성 단계에서 마케팅 가이드라인 PDF와 경쟁사 데이터를 단 한 번 <strong>Knowledge 파일로 업로드해 두면</strong>, 이후 개설되는 모든 하위 채팅방(Thread)이 이를 기본적으로 기억 및 탐색함.
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      2. 프로젝트 상단에 <strong>System Instructions를 고정 적용</strong>하므로, 어시스턴트가 항상 LG의 F.U.N 정체성과 사내 기밀 유출 금지 보안 서약 서명을 상시 유념한 상태로 답변을 제공.
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      3. **프로젝트 내 팀원 초대 기능(Share Project)**을 통해, 수십 명의 사업본부 동료가 하나의 고정된 가상 업무 지식 데이터 브레인 위에서 동시 실시간 개별 과제(세션 분할)를 조화롭게 해결.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-3xl border border-emerald-500/30 bg-emerald-50/5 dark:bg-emerald-950/5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">✓</span>
                    <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                      Projects 애프터(After) 업무 최적화 모델 요약
                    </h4>
                  </div>
                  <p className="text-sm text-neutral-500">
                    프로젝트 기능을 도입하면 '맥락 소실의 고통'이 완벽하게 해결됩니다. 하나의 프로젝트 폴더 내부에 타겟 고객 분석 보고서, 해외 바이어 협상 가이드, LG 시그니처 톤앤매너 룰을 결합하여 가상 분석 오피스를 셋업합니다. 이후 '독일 마켓 메일 작성방', '경쟁사 스펙 분석방' 등으로 채팅 스레드를 쪼개 사용하면서, 하나의 고정 지식 지휘소 하에서 각 방이 상시 협동하도록 관리할 수 있습니다.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study: HE Smart TV Marketing */}
            <div className="p-8 rounded-3xl border dark:border-neutral-800 dark:bg-[#0F0F11]">
              <h3 className="text-xl font-bold mb-4">LG HE사업본부 스마트 TV 프로젝트 기획 실제 실무 사례</h3>
              <div className="space-y-4 text-xs text-neutral-500">
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <strong className="block text-sm text-neutral-800 dark:text-neutral-200 mb-1">상황 설정 (Context)</strong>
                  HE사업본부 스마트 TV 해외 마케팅 담당팀은 신모델 런칭을 앞두고 독일, 프랑스, 이탈리아의 현지 미디어 가전 분석 통계 보고서(PDF)와 내부 제품 톤앤매너 가이드를 하나의 가상 오피스 내에서 취합하고, 여러 담당자가 협업하며 해외 광고 카피 및 바이어 발송용 이메일 영문 안을 초안 작성해야 했습니다.
                </div>
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <strong className="block text-sm text-neutral-800 dark:text-neutral-200 mb-1">실무 활용 방법 (How to Play)</strong>
                  팀장은 <strong>'LGE HE Smart TV Europe Launch'</strong> 프로젝트를 생성하고, Knowledge 업로드 영역에 '유럽 미디어 가이드라인.pdf'와 '2026 하반기 HE 사양표.xlsx'를 등록합니다. 팀원인 전주임과 이대리를 초대합니다. 전주임은 '독일 딜러용 이메일 스레드'를 열어 문건을 작성하고, 이대리는 동일 프로젝트 내에서 '유튜브 카피 스레드'를 열어 다르게 분석합니다. 둘은 동일 지식 데이터베이스 상에서 서로 간섭 없이 개별 성과를 도출해 냅니다.
                </div>
              </div>
            </div>

            {/* Programmatic Project Initializer Block */}
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">프로젝트 API 자동 초기화 스크립트 코드</h3>
                  <p className="text-xs text-neutral-500">Node.js 환경에서 OpenAI Assistants API의 프로젝트 전용 가상 오피스를 자동으로 개설해 주는 템플릿 코드입니다.</p>
                </div>
                <button
                  onClick={() => handleCopyText(getProjectInitializeCode(), "project")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    projectCodeCopied
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 hover:border-[#A50034]"
                  }`}
                >
                  {projectCodeCopied ? "복사 성공!" : "코드 복사하기"}
                </button>
              </div>
              <pre className="p-5 bg-[#0F0F11] text-emerald-400 rounded-2xl text-[11px] font-mono overflow-x-auto border border-neutral-800 leading-relaxed shadow-lg">
                {getProjectInitializeCode()}
              </pre>
            </div>

          </div>
        )}

        {/* ==================== 3. PART 2: GPTS & ACTIONS VIEW ==================== */}
        {currentPage === "part2" && (
          <div className="space-y-12 animate-fadeIn text-left">
            
            {/* Part 2 Title Cover */}
            <div className="border-b pb-8 dark:border-neutral-800 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-[#A50034] tracking-widest">CHAPTER 02</span>
                <span className="h-1 w-8 bg-[#A50034]"></span>
                <span className="text-xs text-neutral-400 font-bold">특화된 단일 목적 에이전트 구축 및 외부 실시간 서치 연동</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                2편: Custom GPTs & OpenAPI Actions
              </h1>
              <p className="text-base text-neutral-500 max-w-4xl">
                나만의 고품격 챗봇을 빌드하고, 구글/유튜브/네이버 검색 API를 Action 스키마로 연동하십시오. 실무 가동 터미널 시뮬레이터를 통해 설정 전(Before)과 설정 후(After)의 극명한 품질 차이를 직접 눈으로 검증할 수 있습니다.
              </p>
            </div>

            {/* Premium Artwork Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#141417] p-8 rounded-3xl border dark:border-neutral-800">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 p-4">
                  <Image
                    src="/chapter2_robots.png"
                    alt="GPTs Actions Robots Concept Illustration"
                    width={340}
                    height={340}
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#A50034]">Agent Automations</span>
                <h3 className="text-xl font-bold">"나만의 실시간 AI 에이전트 구동"</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  일반 ChatGPT는 훈련 데이터가 멈춘 시점까지만 정보를 답변하므로 시장 가격이나 뉴스 동향 추적이 불가능합니다. 하지만 GPTs에 OpenAPI 검색 스키마(Actions)를 등록하면, 외부 네이버 뉴스 API나 구글 검색 등을 호출하여 실시간 트렌드 데이터 리포트를 즉각 스스로 산출하는 자동화 에이전트로 업그레이드됩니다.
                </p>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded">OpenAPI Actions</span>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded">실시간 서치 연동</span>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-[#A50034]/10 text-[#A50034] rounded">4대 부서 맞춤 롤</span>
                </div>
              </div>
            </div>

            {/* LG Custom 4-Agent Interactive Simulator Console */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">LG전자 현업 특화 4대 에이전트 플레이그라운드</h3>
                <p className="text-xs text-neutral-500">원하시는 특화 에이전트를 선택하고 프롬프트 복사 및 가동 시뮬레이션을 작동해 보십시오.</p>
              </div>

              {/* Agent selector tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(Object.keys(agentSpecs) as AgentType[]).map((agentKey) => (
                  <button
                    key={agentKey}
                    onClick={() => {
                      setSelectedAgent(agentKey);
                      setSimulationLogs([]);
                      setSimulationResult("");
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                      selectedAgent === agentKey
                        ? "border-[#A50034] bg-[#A50034]/5 ring-1 ring-[#A50034]"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white dark:bg-[#141417]"
                    }`}
                  >
                    <span className="text-[10px] block text-[#A50034] font-black uppercase mb-1">
                      {agentKey === "writer" ? "Writing" : agentKey === "researcher" ? "Research" : agentKey === "analyst" ? "Analytics" : "Automation"}
                    </span>
                    <span className="font-extrabold text-xs text-neutral-800 dark:text-neutral-100 block">
                      {agentSpecs[agentKey].title.split(" - ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Agent Playground Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Specs and Copy Panel */}
                <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4 text-left">
                    <div>
                      <span className="px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-850 text-neutral-500 text-[10px] font-bold rounded">
                        타겟 부서: {currentAgent.division}
                      </span>
                      <h4 className="text-xl font-bold mt-1 text-[#A50034]">{currentAgent.title}</h4>
                      <p className="text-xs text-neutral-500">{currentAgent.subtitle}</p>
                    </div>

                    {/* Step Guide */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 block">설정 매뉴얼 (Instructions)</span>
                      <ol className="list-decimal pl-4 space-y-1 text-xs text-neutral-500">
                        {currentAgent.guide.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* System Prompt Copier */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                          1. 전용 지침 (System Instruction)
                        </span>
                        <button
                          onClick={() => handleCopyText(currentAgent.prompt, "prompt")}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded border transition-all cursor-pointer ${
                            agentPromptCopied
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "hover:border-[#A50034] text-neutral-500"
                          }`}
                        >
                          {agentPromptCopied ? "복사 성공!" : "프롬프트 복사"}
                        </button>
                      </div>
                      <textarea
                        readOnly
                        value={currentAgent.prompt}
                        className="w-full h-24 p-3 bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 rounded-xl text-xs font-mono resize-none focus:outline-none"
                      />
                    </div>

                    {/* Action Schema Copier (if not analyst) */}
                    {selectedAgent !== "analyst" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                            2. OpenAPI Actions 스키마
                          </span>
                          <button
                            onClick={() => handleCopyText(currentAgent.schema, "schema")}
                            className={`text-[10px] font-bold px-2.5 py-1 rounded border transition-all cursor-pointer ${
                              agentSchemaCopied
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "hover:border-[#A50034] text-neutral-500"
                            }`}
                          >
                            {agentSchemaCopied ? "복사 성공!" : "스키마 복사"}
                          </button>
                        </div>
                        <textarea
                          readOnly
                          value={currentAgent.schema}
                          className="w-full h-24 p-3 bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 rounded-xl text-xs font-mono resize-none focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Simulated Run Terminal & Before/After comparison */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  
                  {/* Before vs After comparison for agent */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-500/5 text-left">
                      <span className="text-[10px] font-black text-red-600 block uppercase tracking-wider mb-1">Before (일반 GPT)</span>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">
                        {currentAgent.before}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-emerald-250 dark:border-emerald-900/40 bg-emerald-500/5 text-left">
                      <span className="text-[10px] font-black text-emerald-600 block uppercase tracking-wider mb-1">After (설정 적용)</span>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">
                        {currentAgent.after}
                      </p>
                    </div>
                  </div>

                  {/* Terminal Console Screen */}
                  <div className="flex-1 rounded-2xl bg-[#0F0F11] border border-neutral-800 p-5 flex flex-col justify-between shadow-2xl min-h-[260px]">
                    <div className="space-y-3 font-mono text-[11px] text-left leading-relaxed">
                      
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-red-500"></span>
                          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                          <span className="h-3 w-3 rounded-full bg-green-500"></span>
                        </div>
                        <span className="text-[9px] text-neutral-500">lge-agent-run --name={selectedAgent}</span>
                      </div>

                      {/* Initial CLI Prompt */}
                      <div className="text-neutral-500">$ npm run dev --simulate-agent</div>

                      {/* Loading/Simulation logs */}
                      {simulationLogs.map((log, idx) => (
                        <div key={idx} className={log.includes("[SYSTEM]") ? "text-yellow-600" : log.includes("[API]") ? "text-cyan-400" : "text-neutral-300"}>
                          {log}
                        </div>
                      ))}

                      {simulationRunning && (
                        <div className="text-yellow-600 animate-pulse">Running process pipelines...</div>
                      )}

                      {/* Final Simulated Output */}
                      {simulationResult && (
                        <div className="mt-4 p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400 font-sans text-xs whitespace-pre-line leading-relaxed">
                          {simulationResult}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-800 flex justify-end">
                      <button
                        onClick={handleRunSimulation}
                        disabled={simulationRunning}
                        className={`font-black text-xs px-6 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer ${
                          simulationRunning
                            ? "bg-neutral-800 text-neutral-500"
                            : "bg-[#A50034] text-white hover:bg-red-800"
                        }`}
                      >
                        {simulationRunning ? "시뮬레이터 실행 중..." : "시뮬레이터 가동 (Run)"}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* OpenAPI Search Integration Guide */}
            <div className="border-t pt-10 dark:border-neutral-800 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">OpenAPI Actions 실시간 외부 검색 연동 스키마</h3>
                <p className="text-xs text-neutral-500">
                  Custom GPTs의 Configure 메뉴 최하단에 있는 'Actions' 기능을 사용해 외부 검색 엔진을 연동하면, 오래된 데이터의 장벽을 부수고 실시간 LG 보도자료 및 테크 여론 반응을 검색할 수 있습니다.
                </p>
              </div>

              {/* API Provider Selector Tabs */}
              <div className="flex gap-2 border-b dark:border-neutral-800 pb-2">
                {(Object.keys(apiSchemas) as APIProviderType[]).map((apiId) => (
                  <button
                    key={apiId}
                    onClick={() => setSelectedAPI(apiId)}
                    className={`py-2 px-4 text-xs font-black border-b-2 transition-all duration-300 uppercase cursor-pointer ${
                      selectedAPI === apiId
                        ? "border-[#A50034] text-[#A50034]"
                        : "border-transparent text-neutral-400 hover:text-neutral-700"
                    }`}
                  >
                    {apiId} Search
                  </button>
                ))}
              </div>

              {/* Selected API Schema block */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                      {apiSchemas[selectedAPI].title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {apiSchemas[selectedAPI].description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopyText(apiSchemas[selectedAPI].schema, "api")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      apiCopied
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 hover:border-[#A50034]"
                    }`}
                  >
                    {apiCopied ? "복사 성공!" : "API 스키마 복사"}
                  </button>
                </div>
                <pre className="p-5 bg-[#0F0F11] text-cyan-400 rounded-2xl text-[11px] font-mono overflow-x-auto border border-neutral-800 leading-relaxed shadow-lg max-h-[300px]">
                  {apiSchemas[selectedAPI].schema}
                </pre>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Magazine Footer */}
      <footer className={`border-t py-12 text-xs font-bold text-center space-y-4 ${darkMode ? "bg-[#0E0E10] border-[#222226] text-neutral-600" : "bg-[#F5F5F7] border-[#E5E5EA] text-neutral-400"}`}>
        <p>샛별자문단 5기 프리미엄 AI 가이드 매거진 © 2026 LG Electronics. All Rights Reserved.</p>
        <p className="text-[10px] tracking-wider text-neutral-500">본 사이트의 콘텐츠는 LG전자 임직원 교육 및 업무 활용 목적으로 제공되며, 외부 유출 및 영리 목적 배포를 엄격히 금합니다.</p>
      </footer>

      {/* ==================== 4. DIAGNOSTIC ONBOARDING QUIZ MODAL ==================== */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#141417] p-8 rounded-3xl max-w-xl w-full border dark:border-neutral-800 shadow-2xl relative">
            
            {/* Modal Close */}
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Step Indicators */}
            <div className="flex gap-1.5 mb-6">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1 flex-1 rounded transition-all duration-300 ${
                    quizStep >= step ? "bg-[#A50034]" : "bg-neutral-200 dark:bg-neutral-800"
                  }`}
                />
              ))}
            </div>

            {/* Title based on steps */}
            <h3 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6 text-left">
              {quizStep === 1
                ? "Q1. 현재 근무하고 계신 사업본부는 어디입니까?"
                : quizStep === 2
                ? "Q2. 업무 수행 중 가장 크게 겪는 Pain Point는 무엇입니까?"
                : "Q3. 메일 및 진단 분석 보고서 발행용 소속 이메일을 등록해 주세요."}
            </h3>

            {/* Step Content */}
            {quizStep === 1 && (
              <div className="space-y-3">
                {[
                  { id: "H&A", label: "H&A 사업본부 (리빙/주방 가전)" },
                  { id: "HE", label: "HE 사업본부 (스마트 TV/오디오)" },
                  { id: "VS", label: "VS 사업본부 (전장/품질보증)" },
                  { id: "Corporate", label: "전사 스탭 / 기타 지원부서" }
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setUserDivision(d.id);
                      setQuizStep(2);
                    }}
                    className="w-full text-left p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-[#A50034] dark:hover:border-[#A50034] hover:bg-[#A50034]/5 dark:bg-[#1C1C1E] transition-all font-bold text-xs cursor-pointer text-neutral-800 dark:text-neutral-200"
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            )}

            {quizStep === 2 && (
              <div className="space-y-3">
                {[
                  { id: "market", label: "시장 및 경쟁사 트렌드 파악이 너무 느리고 파편화됨" },
                  { id: "report", label: "원자료 엑셀을 보고서용 통계 차트로 그리는 수동 과정이 번거로움" },
                  { id: "copy", label: "LG F.U.N 정체성에 부합하는 광고/제품 카피 작성이 어려움" },
                  { id: "automator", label: "품질 센서 장애 및 Jira 결함 보고 시 전파 아웃룩 메일을 일일이 손으로 씀" }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setUserPainPoint(p.id);
                      setQuizStep(3);
                    }}
                    className="w-full text-left p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-[#A50034] dark:hover:border-[#A50034] hover:bg-[#A50034]/5 dark:bg-[#1C1C1E] transition-all font-bold text-xs cursor-pointer text-neutral-800 dark:text-neutral-200"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}

            {quizStep === 3 && (
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 block">이메일 주소</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="example@lge.com"
                    className="w-full p-3.5 border dark:border-neutral-800 dark:bg-[#1C1C1E] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#A50034] text-xs font-bold text-neutral-800 dark:text-neutral-200"
                  />
                </div>

                {quizResultFileReady && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold leading-relaxed">
                    [자가진단 성공] LGE {userDivision} 최적화 {userPainPoint === "market" ? "Research" : userPainPoint === "report" ? "Data Analytics" : userPainPoint === "copy" ? "Brand Copywriting" : "Quality Automator"} GPTs 설정 분석이 완료되었습니다. 아래 버튼을 눌러 JSON 설정 파일을 다운로드 받아 즉시 GPTs에 로드해 활용해 보세요!
                  </div>
                )}

                <div className="flex justify-between pt-4 gap-3">
                  <button
                    onClick={() => {
                      setQuizResultFileReady(false);
                      setQuizStep(2);
                    }}
                    className="bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    이전 단계
                  </button>
                  {quizResultFileReady ? (
                    <button
                      onClick={downloadQuizConfig}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      JSON 설정 파일 다운로드
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (!userEmail.includes("@")) {
                          alert("올바른 이메일 주소를 입력해 주십시오!");
                          return;
                        }
                        setQuizResultFileReady(true);
                      }}
                      className="bg-[#A50034] hover:bg-red-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      결과 분석 실행
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ==================== 5. FLOATING CHATBOT WIDGET ==================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatbotOpen && (
          <div className={`w-[360px] h-[480px] rounded-3xl border shadow-2xl flex flex-col mb-4 overflow-hidden transition-all duration-300 animate-fadeIn ${
            darkMode ? "bg-[#141417] border-neutral-800 text-neutral-150" : "bg-white border-neutral-200 text-[#1D1D1F]"
          }`}>
            
            {/* Chatbot Header */}
            <div className="flex items-center justify-between bg-[#A50034] px-5 py-4 text-white">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="font-extrabold text-sm tracking-wide">LGE 샛별 AI 도우미</span>
              </div>
              <button onClick={() => setChatbotOpen(false)} className="text-white hover:opacity-80 cursor-pointer">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chatbot Messages */}
            <div className={`flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed ${
              darkMode ? "bg-[#0B0B0C]" : "bg-neutral-50"
            }`}>
              {chatbotMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-left font-medium ${
                    msg.sender === "user"
                      ? "bg-[#A50034] text-white rounded-tr-none shadow"
                      : darkMode
                      ? "bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-750"
                      : "bg-white text-neutral-800 rounded-tl-none border shadow-sm border-neutral-200"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`p-3 rounded-2xl rounded-tl-none text-[11px] font-bold ${
                    darkMode ? "bg-neutral-800 text-neutral-400" : "bg-white text-neutral-400 border border-neutral-200 shadow-sm"
                  }`}>
                    <span className="animate-pulse">샛별 에디터가 답변을 작성 중입니다...</span>
                  </div>
                </div>
              )}
              <div ref={chatbotEndRef} />
            </div>

            {/* Preset help questions panel */}
            <div className={`px-4 py-2.5 flex flex-wrap gap-1.5 border-t text-left ${
              darkMode ? "bg-[#141417] border-neutral-800" : "bg-white border-neutral-100"
            }`}>
              {[
                "샛별자문단 5기는?",
                "프로젝트와 GPTs 차이?",
                "Before vs After 효과?",
                "API 연동 방법?"
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => sendQuickQuestion(q)}
                  className={`text-[10px] font-bold py-1.5 px-2.5 rounded-full border transition-all cursor-pointer ${
                    darkMode
                      ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-[#A50034] hover:text-white"
                      : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-[#A50034] hover:text-[#A50034]"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleChatbotSubmit} className={`p-3 border-t flex gap-2 ${
              darkMode ? "bg-[#141417] border-neutral-850" : "bg-white border-neutral-200"
            }`}>
              <input
                type="text"
                name="chatInput"
                placeholder="가이드 챗봇에게 무엇이든 질문해 보세요..."
                className={`flex-1 px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#A50034] font-medium ${
                  darkMode ? "bg-neutral-900 border-neutral-850 text-white" : "bg-white border-neutral-200 text-[#1D1D1F]"
                }`}
              />
              <button type="submit" className="bg-[#A50034] hover:bg-red-800 text-white rounded-xl px-4 text-xs font-black transition-colors cursor-pointer">
                전송
              </button>
            </form>

          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="h-14 w-14 rounded-full bg-[#A50034] text-white flex items-center justify-center shadow-2xl hover:bg-red-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {chatbotOpen ? (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}
