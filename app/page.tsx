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
    { sender: "bot", text: "안녕하세요. LG전자 샛별자문단 AI 가이드입니다. 1편 Projects나 2편 GPTs에 대해 궁금한 점을 질문해 주세요." },
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
      title: "Google Custom Search API Schema",
      description: "구글 커스텀 검색 API를 호출해 실시간 보도자료 및 경쟁사 동향 정보를 수집하는 스키마입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Google Custom Search API",
    "version": "1.0.0"
  },
  "servers": [
    { "url": "https://www.googleapis.com/customsearch" }
  ],
  "paths": {
    "/v1": {
      "get": {
        "operationId": "searchGoogle",
        "parameters": [
          { "name": "q", "in": "query", "required": true, "schema": { "type": "string" } },
          { "name": "cx", "in": "query", "required": true, "schema": { "type": "string" } },
          { "name": "key", "in": "query", "required": true, "schema": { "type": "string" } }
        ]
      }
    }
  }
}`
    },
    youtube: {
      title: "YouTube Data API v3 Schema",
      description: "유튜브의 제품 리뷰 피드백이나 글로벌 테크 동영상을 검색하고 동향을 분석하는 스키마입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "YouTube Data API Search",
    "version": "1.0.0"
  },
  "servers": [
    { "url": "https://www.googleapis.com/youtube/v3" }
  ],
  "paths": {
    "/search": {
      "get": {
        "operationId": "searchYouTube",
        "parameters": [
          { "name": "part", "in": "query", "required": true, "schema": { "type": "string", "default": "snippet" } },
          { "name": "q", "in": "query", "required": true, "schema": { "type": "string" } },
          { "name": "key", "in": "query", "required": true, "schema": { "type": "string" } }
        ]
      }
    }
  }
}`
    },
    naver: {
      title: "Naver Search API Schema",
      description: "네이버 뉴스 검색 API를 연동하여 국내 뉴스 보도 자료와 시장 트렌드를 빠르게 취합하는 스키마입니다.",
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Naver News Search API",
    "version": "1.0.0"
  },
  "servers": [
    { "url": "https://openapi.naver.com" }
  ],
  "paths": {
    "/v1/search/news.json": {
      "get": {
        "operationId": "searchNaverNews",
        "parameters": [
          { "name": "query", "in": "query", "required": true, "schema": { "type": "string" } },
          { "name": "display", "in": "query", "required": false, "schema": { "type": "integer", "default": 10 } }
        ]
      }
    }
  }
}`
    }
  };

  const getProjectInitializeCode = () => `// LGE ChatGPT Projects Initialization Script
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function initProjectWorkspace() {
  const assistant = await openai.beta.assistants.create({
    name: "LGE HE TV Market Research Project Assistant",
    instructions: \`귀하는 LG전자 HE사업본부의 스마트 TV 글로벌 마케팅 기획팀 소속 가상 AI 전략 분석원입니다. 
본 프로젝트에 탑재된 스마트 TV 글로벌 마케팅 가이드라인 및 CSV 시장점유율 데이터 파일(Knowledge)을 기반으로만 모든 답변을 생성하십시오.
답변 작성 시 LG전자의 F.U.N (First, Unique, New) 고객경험 원칙을 톤앤매너로 삼아야 하며, 
절대 사내 보안 규정에 위배되는 미공개 제품 사양이나 개인정보를 외부 퍼블릭 인터넷 브라우징으로 유출해서는 안 됩니다.\`,
    model: "gpt-4o",
    tools: [{ type: "file_search" }]
  });
  console.log(\`Project Assistant created: \${assistant.id}\`);
}

initProjectWorkspace();`;

  const agentSpecs = {
    writer: {
      title: "프리미엄 카피라이터 (Writer)",
      subtitle: "LG F.U.N 브랜드 정체성을 기반으로 프리미엄 카피 제작을 자동화하는 에이전트",
      division: "HE / H&A 마케팅부문",
      before: "설정 안함 (일반 GPT): LG SIGNATURE 올레드 TV는 백라이트가 없어서 아주 얇고 화질이 훌륭한 프리미엄 TV입니다. 명암비가 높아서 블랙 표현력이 매우 우수하고 디자인도 세련되어 많은 소비자자들이 선호하고 구매하고 있습니다. 관심 있으시면 매장에 방문해서 구경해 보세요.",
      after: "설정 적용 (커스텀 GPT): [LG SIGNATURE OLED TV - 스스로 빛나는 완벽한 예술]\n\n빛을 잃었던 공간에, 백라이트 없이 스스로 빛나는 OLED가 더하는 압도적인 품격.\n\n오직 LG SIGNATURE OLED TV만이 표현할 수 있는 '완벽한 블랙'과 '무한한 명암비'를 통해, 평범한 TV 시청을 넘어 오직 첫 번째로, 오직 다르게, 오직 새롭게 전해지는 최고의 F.U.N(First, Unique, New) 고객경험 가치를 지금 느껴보십시오.",
      prompt: `[System Instruction]
- 역할 및 정체성: 당신은 LG전자 글로벌 마케팅 센터(Global Marketing Center) 소속의 최고 수석 브랜드 카피라이팅 디렉터입니다.
- 기본 임무: LG Signature 가전을 포함한 모든 프리미엄 제품군에 대한 제품 소개 및 광고 카피를 작성합니다.
- 핵심 가치 지향 (F.U.N):
  1) First: 고객이 이전에 경험해보지 못한 혁신적이고 신선한 가치를 먼저 제안하십시오.
  2) Unique: 타 경쟁 디스플레이(QLED 등)와의 확실한 차별화 포인트를 디테일하게 강조하십시오.
  3) New: 일상의 새로운 변화와 세련된 라이프스타일의 패러다임 전환을 선언적인 문체로 보여주십시오.
- 문체 및 어조: 품격이 느껴지며 깊이 있고 은유적인 명조체 톤앤매너를 구사하십시오. 문장은 짧고 강렬하게 단락을 나누어 전개해야 합니다.
- 금기사항: '화질이 우수하다', '성능이 뛰어납니다'와 같은 평이하고 저렴해 보이는 직접 수식어는 절대 사용하지 마십시오.`,
      schema: `{
  "openapi": "3.0.0",
  "info": { "title": "LG Brand CMS API", "version": "1.0.0" },
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
        "Capabilities에서 Web Search를 끄고 Actions에서 CMS 전송용 OpenAPI JSON 스키마를 입력해 저장합니다."
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
      subtitle: "구글/네이버/유튜브 API를 연동해 업계 트렌드 동향 보고를 한 단어로 끝내는 에이전트",
      division: "전사 전략기획실 / 각 사업본부 기획실",
      before: "설정 안함 (일반 GPT): (실시간 정보를 파악하지 못해 2023년 이전의 옛날 웹 지식이나 위키백과 정보만 출력함) 삼성이나 소니의 마이크로 LED 및 OLED TV의 최신 2026년 6월 출하량 데이터와 보도자료는 실시간 연동이 없기 때문에 구글에서 수동 검색하여 내용을 복사해주셔야 요약 가능합니다.",
      after: "설정 적용 (커스텀 GPT): [실시간 트렌드 보고서 - OLED TV 경쟁 동향 (2026년 6월 12일 기준)]\n\n1. 경쟁사 동향: 삼성전자는 차세대 Neo QLED 라인업에 AI 화질 최적화 프로세서 탑재를 공식 발표하였으며, 소니는 초대형 MicroLED 하이엔드 시장에 집중하고 있습니다.\n2. 시장 점유율 분석: 당월 글로벌 프리미엄 TV 출하량은 OLED TV 수요 회복세에 힘입어 전월 대비 4.2% 증가하였으며, 그 중 LG OLED TV가 53%의 시장 점유율을 굳건히 수호하고 있습니다.\n3. 핵심 유튜버 분석: 테크 인플루언서들은 LG의 새로운 독자 화질 알고리즘에 대한 디스플레이 균일도 성능을 긍정 평가 중입니다.",
      prompt: `[System Instruction]
- 역할 및 정체성: 당신은 LG전자 전사 전략기획실 소속의 수석 마켓 인텔리전스(Market Intelligence) 리서치 에이전트입니다.
- 임무: 구글 검색, 유튜브 API, 네이버 뉴스 검색 Actions 연동을 기반으로 실시간 최신 정보에 입각하여 글로벌 가전 업계 트렌드 보고서를 작성합니다.
- 데이터 가공 수칙:
  1) 사용자가 분석 키워드를 제공하면, 백그라운드 Actions를 실행하여 실시간 경쟁사 보도 자료와 출하량 동향을 취합하십시오.
  2) 수집된 정보는 반드시 가독성이 높은 구조화된 보고서 양식(1. 경쟁사 동향, 2. 시장 분석, 3. 미디어 여론)으로 논리정연하게 구조화하여 정리해야 합니다.
  3) 출처가 불분명하거나 유효성 검증이 불가능한 추측성 루머 데이터는 일체 기재하지 마십시오.`,
      schema: `{
  "openapi": "3.0.0",
  "info": { "title": "LGE Strategy Trend Search API", "version": "1.0.0" },
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
        "공식 API 인증 토큰을 Actions API Key에 Bearer/Custom 형태로 안전하게 저장합니다."
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
      subtitle: "가전 판매량 CSV/XLSX 원자료를 올리면 파이썬 샌드박스로 인사이트 차트를 그리는 에이전트",
      division: "HE / H&A 사업지원그룹 및 전사 재경부문",
      before: "설정 안함 (일반 GPT): 업로드하신 CSV 가전 판매량 데이터를 읽었습니다. 1분기 H&A 3500대, HE 2100대... (데이터를 단순히 텍스트 표로만 나열하며, 마케팅 보고서에 바로 쓸 수 있는 시각적인 고해상도 차트나 인사이트 그래프를 즉시 생성하지 못함)",
      after: "설정 적용 (커스텀 GPT): [2026년 상반기 LG 가전 사업본부별 판매 실적 분석 시각화 완료]\n\n업로드된 판매량 원본 데이터를 파이썬 Pandas를 사용해 정제하였으며, H&A사업본부의 매출 기여도(58.3%)와 HE사업본부의 스마트 TV 판매 상승 추이를 담은 고해상도 시각화 그래프 이미지를 생성 완료했습니다.\n\n- 핵심 인사이트: 2분기 H&A 본부의 시그니처 세탁건조기 판매량이 전년 동기 대비 14.5% 상승하며 전체 이익률 견인.\n- 분석 파일: lge_sales_report_2026_h1_visualized.png (고화질 이미지 차트 생성 완료)",
      prompt: `[System Instruction]
- 역할 및 정체성: 당신은 LG전자 HE/H&A 사업지원 그룹의 수석 비즈니스 데이터 애널리스트(Business Data Analyst)입니다.
- 임무: 사용자가 업로드한 엑셀, CSV, JSON 등 가전 판매 원데이터를 파이썬 판다스(Pandas) 모듈을 이용해 전처리하고 정밀 가공하여 시각화 차트와 인사이트를 도출합니다.
- 작동 규칙:
  1) 데이터를 입력받으면 즉시 내장 파이썬 환경(Code Interpreter)을 기동하여 연산을 진행하고, 실행한 소스 코드를 사용자에게 투명하게 보여주십시오.
  2) 보고서에 즉시 복사해서 첨부할 수 있도록 고해상도의 차트(한글 레이블 지원 필수)를 이미지 형태로 추출해야 합니다.
  3) 핵심 성장률 기여도, 기하평균 추이 등 단순 요약을 뛰어넘는 입체적인 경영 인사이트 3가지를 명시해 주십시오.`,
      schema: "N/A (Capabilities 내의 Code Interpreter 기본 기능을 활용하므로 추가 OpenAPI Schema 등록이 불필요합니다.)",
      guide: [
        "GPTs 설정의 Configure 메뉴에서 Capabilities의 'Code Interpreter' 항목을 필수로 체크해 활성화합니다.",
        "Instructions 영역에 LGE 비즈니스 데이터 애널리스트 프롬프트를 입력합니다.",
        "분석할 원본 엑셀 시트나 글로벌 판매 데이터 CSV 파일을 채팅 창에 직접 드래그앤드롭으로 업로드합니다."
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
      subtitle: "Jira/품질 센서 오류를 자동 감지해 슬랙/아웃룩으로 긴급 공지하는 에이전트",
      division: "VS(전장) 품질보증그룹",
      before: "설정 안함 (일반 GPT): 전장 센서의 장애 결함 코드를 분석했습니다. 이 결함 코드는 통신 오류로 보입니다. 이 내용을 부서원분들께 전달하고 싶으시다면, 메일이나 슬랙을 켜서 담당자 주소를 찾은 후 직접 복사해서 전달하시기 바랍니다. 제가 외부 메일이나 슬랙을 발송할 권한이 없습니다.",
      after: "설정 적용 (커스텀 GPT): [LGE VS 품질 긴급 경보 - Alert 시스템 자동 전파 완료]\n\n- 발생 일시: 2026-06-12 20:50\n- 오류 코드: ERR_CAN_BUS_TIMEOUT (전장 CAN 통신 일시 장애)\n- 전파 상태:\n  1) VS품질보증팀 아웃룩 그룹 메일 발송 완료 (수신처: vs_qa_all@lge.com)\n  2) 슬랙 채널(#vs-품질-경보-채널) 메시지 즉시 전송 완료 (Status 200).\n- 권고 조치: 게이트웨이 ECU 모듈 커넥터 접촉 불량 상태 긴급 점검 요망.",
      prompt: `[System Instruction]
- 역할 및 정체성: 당신은 LG전자 VS(전장)사업본부 품질보증팀의 자동화 시스템 인티그레이터(System Integrator) 에이전트입니다.
- 임무: 차량 제어 모듈 센서 로그나 Jira 개발자 티켓 이슈 결함 코드를 실시간으로 전송받아 장애 요인을 즉각 판독하고 긴급 전파합니다.
- 자동화 실행 프로토콜:
  1) 전달받은 센서 에러 코드를 분석하여 장애 중요도(Critical, Major, Minor)를 평가하고 결함 내용을 규격 양식으로 한 장 요약하십시오.
  2) 요약이 완료됨과 동시에 사내 Outlook API 및 Slack Webhook Actions을 호출하여 사전에 등록된 유관 부서 엔지니어 그룹에 이메일 전송 및 슬랙 푸시 알림을 원스톱으로 강제 실행해야 합니다.`,
      schema: `{
  "openapi": "3.0.0",
  "info": { "title": "LGE VS QA Alert and Dispatch API", "version": "1.0.0" },
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
        "로그 데이터를 GPTs에 입력하면 분석과 동시에 경보문 발송이 자동 실행됩니다."
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
        reply = "샛별자문단 5기는 LG전자 임직원들이 생성형 AI를 영구적인 사내 업무 지식 자산으로 전환하도록 돕는 가이드 매거진 제작 협의체입니다. 경영진과 실무진 모두 실질적 업무 효율을 낼 수 있도록 실전에 즉시 활용 가능한 Projects 및 GPTs 워크플로우를 제공합니다.";
      } else if (q.includes("프로젝트와 GPTs")) {
        reply = "1편의 'ChatGPT Projects'는 다수의 문서를 올려놓고 여러 팀원들과 함께 맥락을 공유하며 채팅방(Thread)을 나누어 협업하는 '종합 가상 기획 사무실'입니다. 반면 2편의 'Custom GPTs'는 특정 단일 직무(예: 카피 생성, 실시간 시장 리서치, 엑셀 시각화)를 사전에 입력해둔 프롬프트와 외부 OpenAPI(Actions)에 연결하여 고속 반복 수행하는 '직무 자동화 미니 앱'입니다.";
      } else if (q.includes("Before vs After")) {
        reply = "설정을 하지 않은 'Before' 상태에서는 동일한 설정 파일이나 엑셀 데이터를 매 대화 세션마다 업로드하고, 긴 프롬프트를 매번 복사해 붙여넣어야 합니다. 반면 설정을 마친 'After' 상태에서는 단 한 번의 파일 등록과 지침 고정으로, 한글 키워드 한 단어만 입력해도 완벽한 결과물이 즉시 출력되거나 백그라운드 자동화(Actions)가 실행됩니다.";
      } else if (q.includes("API 연동")) {
        reply = "GPTs 생성 화면의 [Configure] -> [Actions] -> [Create New Action]을 선택하고, 저희 매거진 2편에서 제공하는 Google, YouTube, Naver Search 등의 OpenAPI JSON 스키마를 붙여넣으십시오. 발급받으신 API 인증 키를 헤더 또는 쿼리에 연동하면 GPTs가 최신 웹 자료를 실시간 수집할 수 있게 됩니다.";
      } else {
        reply = "좋은 질문입니다. 샛별자문단 5기 프리미엄 AI 가이드 각 편(1편 Projects, 2편 GPTs & Actions) 탭으로 이동하시면 상세한 단계별 셋업 매뉴얼과 LG전자 임직원 맞춤형 원클릭 복사 스니펫이 제공됩니다. 직접 확인해 보십시오.";
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
    <div className={`min-h-screen transition-colors duration-300 font-sans antialiased ${darkMode ? "bg-[#0A0A0B] text-[#E4E4E7]" : "bg-[#FCFCFD] text-[#111113]"}`}>
      
      {/* High-End Editorial Header Block */}
      <div className={`w-full py-4 text-center text-[10px] tracking-[0.3em] font-medium uppercase border-b ${darkMode ? "border-neutral-900 text-neutral-500" : "border-gray-100 text-gray-400"}`}>
        LG Electronics — Satbyeal Advisory Group 5th AI Integration Journal
      </div>

      {/* Classic Magazine Title Banner */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center space-y-4">
        <span className="text-[9px] tracking-[0.4em] font-semibold text-gray-400 uppercase dark:text-neutral-500">
          THE PLATFORM STANDARD FOR WORKFLOW ACCELERATION
        </span>
        <h1 className="font-serif font-bold text-6xl md:text-8xl tracking-[0.1em] text-gray-900 dark:text-white uppercase leading-none select-none">
          SATBYEAL
        </h1>
        
        {/* Double Border Detail */}
        <div className={`border-t-4 border-b border-double py-1.5 flex items-center justify-between text-[9px] tracking-[0.2em] font-bold uppercase ${darkMode ? "border-neutral-800 text-neutral-450" : "border-gray-900 text-gray-500"}`}>
          <span>VOL. 05 // JUNE 2026</span>
          <span className="text-[#A50034]">SPECIAL REPORT: PERSISTENT CONTEXT</span>
          <span>LGE ADVISORY GROUP</span>
        </div>
      </div>

      {/* GNB Navigation Header */}
      <header className={`sticky top-0 z-45 w-full transition-all duration-300 border-b backdrop-blur-md ${isScrolled ? "py-4 shadow-sm" : "py-6"} ${darkMode ? "bg-[#0A0A0B]/95 border-neutral-900" : "bg-[#FCFCFD]/95 border-gray-100"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
          
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePageChange("home")}>
            <div className="h-4 w-4 bg-[#A50034] rounded-none flex items-center justify-center text-white font-bold text-[8px]">L</div>
            <span className="font-bold text-[10px] tracking-widest uppercase text-gray-950 dark:text-white">INDEX</span>
          </div>

          <nav className="flex items-center gap-10 md:gap-14">
            <button
              onClick={() => handlePageChange("home")}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-1 cursor-pointer ${
                currentPage === "home"
                  ? "text-[#A50034] border-b border-[#A50034]"
                  : "text-gray-400 dark:text-neutral-500 hover:text-gray-950 dark:hover:text-white"
              }`}
            >
              00 COVER
            </button>
            <button
              onClick={() => handlePageChange("part1")}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-1 cursor-pointer ${
                currentPage === "part1"
                  ? "text-[#A50034] border-b border-[#A50034]"
                  : "text-gray-400 dark:text-neutral-500 hover:text-gray-950 dark:hover:text-white"
              }`}
            >
              01 PROJECTS
            </button>
            <button
              onClick={() => handlePageChange("part2")}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-1 cursor-pointer ${
                currentPage === "part2"
                  ? "text-[#A50034] border-b border-[#A50034]"
                  : "text-gray-400 dark:text-neutral-500 hover:text-gray-950 dark:hover:text-white"
              }`}
            >
              02 GPTS & API
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              title="Toggle Theme"
            >
              {darkMode ? (
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setQuizOpen(true)}
              className="text-[9px] tracking-widest uppercase font-bold text-[#A50034] border-b border-[#A50034] pb-0.5 hover:text-red-800"
            >
              퀴즈 빌더
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-6 sm:px-8 py-20 sm:py-28">
        
        {/* ==================== 0. HOME VIEW (3-COLUMN PRINT STYLE) ==================== */}
        {currentPage === "home" && (
          <div className="space-y-28 animate-fadeIn">
            
            {/* The Classic 3-Column Front Page Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* Column 1: Manifesto */}
              <div className="md:col-span-4 space-y-6 text-left md:border-r border-gray-100 dark:border-neutral-900 md:pr-8">
                <span className="text-[9px] tracking-widest font-bold text-[#A50034] uppercase block">
                  I. Editorial Manifesto
                </span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white leading-tight">
                  일회성 채팅에서<br />사내 지식 자산으로의 전환
                </h3>
                <div className="border-b border-gray-105 dark:border-neutral-900 pb-2"></div>
                
                {/* Drop Cap Paragraph */}
                <p className="text-xs sm:text-[13px] text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                  <span className="text-[#A50034] text-5xl font-serif font-bold float-left mr-2.5 mt-1 leading-[0.8]">M</span>
                  매번 소속 본부명과 지시 사항을 복사하여 대화창에 수동으로 붙여넣고 계십니까? 샛별자문단 5기가 발행하는 이번 프리미엄 에디션은 임직원 및 임원진들이 일회성 대화라는 기존 생성형 AI의 구조적 한계를 탈피하도록 유도합니다. AI 모델을 가볍게 소모하는 차원을 넘어, 부서의 영구적인 지식 자산으로 고정하고 협업 환경에 안착시키는 실무 로드맵을 제공합니다.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  자문단이 제안하는 솔루션은 간단하지만 파급적입니다. 지식과 맥락을 보존하는 가상 사무실 구축(Projects)과 외부 검색 채널을 연결해 동작하는 자동화 에이전트(GPTs)의 결합입니다.
                </p>
              </div>

              {/* Column 2: Projects Overview */}
              <div className="md:col-span-4 space-y-6 text-left md:border-r border-gray-100 dark:border-neutral-900 md:pr-8">
                <span className="text-[9px] tracking-widest font-bold text-gray-450 dark:text-neutral-500 uppercase block">
                  II. Workspace Context
                </span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white leading-tight">
                  ChatGPT Projects:<br />영구 맥락 가상오피스
                </h3>
                <div className="border-b border-gray-105 dark:border-neutral-900 pb-2"></div>
                
                <p className="text-xs sm:text-[13px] text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                  프로젝트 기능은 최대 20개의 핵심 비즈니스 보고서 및 시장 점유율 데이터(.csv, .pdf 등)를 단 한 번 업로드함으로써 지식 맥락을 영구 고정합니다. 부서원들을 초대하여 동일한 지식 베이스를 상시 공유하고, 하위에서 각 용도에 맞게 대화 스레드를 분할하여 협업 능률을 극대화합니다.
                </p>
                <button
                  onClick={() => handlePageChange("part1")}
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-widest font-bold text-[#A50034] uppercase hover:underline cursor-pointer pt-2"
                >
                  READ SECTION 01 →
                </button>

                <div className="w-full aspect-video bg-gray-50 dark:bg-[#141416] flex items-center justify-center p-4 border border-gray-100 dark:border-neutral-850">
                  <Image
                    src="/chapter1_network.png"
                    alt="Projects Network Concept Illustration"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Column 3: Custom GPTs Overview */}
              <div className="md:col-span-4 space-y-6 text-left">
                <span className="text-[9px] tracking-widest font-bold text-gray-450 dark:text-neutral-500 uppercase block">
                  III. Job Automation
                </span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white leading-tight">
                  Custom GPTs & API:<br />특화 직무 에이전트
                </h3>
                <div className="border-b border-gray-105 dark:border-neutral-900 pb-2"></div>
                
                <p className="text-xs sm:text-[13px] text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                  특화 가전 마케팅 카피 작성을 보장하는 Writer, 외부 API 검색 Actions를 호출해 실시간 보고서를 완성하는 Researcher, 파이썬 코드 인터프리터 샌드박스로 엑셀 시각화를 그리는 Analyst 등을 조립합니다. 단 한 단어만 쳐도 부서 규격화 결과가 출력됩니다.
                </p>
                <button
                  onClick={() => handlePageChange("part2")}
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-widest font-bold text-[#A50034] uppercase hover:underline cursor-pointer pt-2"
                >
                  READ SECTION 02 →
                </button>

                <div className="w-full aspect-video bg-gray-50 dark:bg-[#141416] flex items-center justify-center p-4 border border-gray-100 dark:border-neutral-850">
                  <Image
                    src="/chapter2_robots.png"
                    alt="GPTs Actions Robots Concept Illustration"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>

            {/* Pull Quote Section */}
            <div className="border-t border-b border-gray-100 dark:border-neutral-900 py-12 text-center max-w-3xl mx-auto">
              <p className="font-serif italic text-2xl sm:text-3xl text-gray-800 dark:text-neutral-100 leading-relaxed">
                "AI 비서를 다루는 기술은 단순히 프롬프트를 화려하게 짜는 것에서 출발하지 않는다. 부서의 맥락(Context)을 고정하고, 이를 사내 자산으로 축적하는 아키텍처의 설계가 본질이다."
              </p>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 uppercase block mt-4">
                — SATBYEAL ADVISORY GROUP 5TH EDITORIAL
              </span>
            </div>

            {/* Table of Specification Details */}
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <h4 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
                ChatGPT Projects vs Custom GPTs 기술적 스펙 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-850 text-gray-450 dark:text-neutral-500 font-bold uppercase tracking-wider">
                      <th className="py-3 pr-4">비교 분류</th>
                      <th className="py-3 px-4">ChatGPT Projects (1편)</th>
                      <th className="py-3 pl-4">Custom GPTs & API Actions (2편)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-neutral-850 text-gray-600 dark:text-neutral-400">
                    <tr>
                      <td className="py-4 pr-4 font-bold text-gray-900 dark:text-white">개념 및 용도</td>
                      <td className="py-4 px-4 leading-relaxed">대규모 지식을 고정한 가상 부서 회의실 및 동시 다중 스레드 협업 공간</td>
                      <td className="py-4 pl-4 leading-relaxed">단일 직무 특화(카피라이터, 리서처, 데이터 차트 메이커) 자동화 미니앱</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-bold text-gray-900 dark:text-white">컨텍스트 제원</td>
                      <td className="py-4 px-4 leading-relaxed">최대 20개 지식 파일 업로드 지원, 최대 200,000 토큰 내재 가능</td>
                      <td className="py-4 pl-4 leading-relaxed">최대 20개 지식 파일 업로드, 외부 API Actions 전용 스키마 입력 연동</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-bold text-gray-900 dark:text-white">보안 및 공유범위</td>
                      <td className="py-4 px-4 leading-relaxed">LGE 사내 Enterprise 멤버 지정 초대 및 내부 도메인 내 안전 공유</td>
                      <td className="py-4 pl-4 leading-relaxed">나만 사용(Private), 링크 공유(유관부서), GPT Store(사내 전체 배포)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-bold text-gray-900 dark:text-white">외부 연동 한계</td>
                      <td className="py-4 px-4 leading-relaxed">외부 API 실시간 호출 불가 (정적 업로드 파일 기반 탐색만 지원)</td>
                      <td className="py-4 pl-4 leading-relaxed">구글/네이버/유튜브 등 OpenAPI Actions 통합 호출 및 데이터 파싱 지원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Diagnostic Onboarding Quiz CTA Block */}
            <div className="py-20 text-center space-y-8 bg-gray-50 dark:bg-[#141416] border border-gray-100 dark:border-neutral-900 p-8 sm:p-12 rounded-none">
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="text-[10px] tracking-[0.25em] font-semibold text-[#A50034] uppercase block">
                  Interactive Diagnosis Tool
                </span>
                <h2 className="font-serif font-bold text-3xl tracking-tight text-gray-900 dark:text-white">
                  부서 맞춤형 GPTs 설정을 진단해 드립니다.
                </h2>
                <p className="text-xs sm:text-sm text-gray-650 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto font-normal">
                  본인의 소속 사업본부(HE, H&A, VS 등)와 현재 업무상 마주하고 있는 주요 비효율 Pain Point를 선택해 주십시오. 즉시 시스템 프롬프트(Instructions)로 이식할 수 있는 최적의 설정 구조 분석안과 커스텀 `.json` 파일을 빌드하여 제공합니다.
                </p>
                <button
                  onClick={() => {
                    setQuizStep(1);
                    setQuizResultFileReady(false);
                    setQuizOpen(true);
                  }}
                  className="bg-gray-950 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-neutral-100 text-[10px] tracking-widest font-semibold px-8 py-4 rounded-none transition-all cursor-pointer uppercase border border-gray-900 dark:border-white"
                >
                  맞춤형 자가진단 시작
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ==================== 1. PART 1: PROJECTS (SECTION INTERFACE) ==================== */}
        {currentPage === "part1" && (
          <div className="space-y-24 animate-fadeIn text-left">
            
            {/* Section Cover Page Deco */}
            <div className="border-b border-gray-150 dark:border-neutral-850 pb-8 space-y-4">
              <div className="flex items-center justify-between text-[11px] tracking-[0.3em] font-bold text-gray-400 uppercase">
                <span>SECTION 01 // WORKSPACE PERSISTENCE</span>
                <span className="text-[#A50034]">CHAPTER ONE</span>
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
                Projects: 가상 사무실 구축
              </h1>
              <p className="text-sm sm:text-base text-gray-650 dark:text-neutral-400 max-w-3xl leading-relaxed">
                다수의 부서원들이 올레드 스마트 TV 로드맵과 시장점유율 데이터를 매번 다시 수동으로 업로드할 필요가 없습니다. Projects 기능은 일관된 백그라운드 지식을 유지하며 대화방을 안전하게 분할 분석해 줍니다.
              </p>
            </div>

            {/* Concept Info with Drop Cap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50 dark:bg-[#141416] p-8 sm:p-12 border border-gray-100 dark:border-neutral-900">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-square bg-white dark:bg-[#0A0A0B] p-4 border border-gray-150 dark:border-neutral-800 flex items-center justify-center">
                  <Image
                    src="/chapter1_network.png"
                    alt="Projects Network Concept"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[9px] tracking-wider font-bold text-gray-400 uppercase block">Context Retention System</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">단 한 번의 업로드로 구축되는 팀의 영구 브레인</h3>
                <p className="text-xs sm:text-[13px] text-gray-600 dark:text-neutral-450 leading-relaxed font-normal">
                  <span className="text-[#A50034] text-4xl font-serif font-bold float-left mr-2 mt-1 leading-[0.8]">K</span>
                  Knowledge 고정 기능은 최대 20개의 핵심 비즈니스 데이터를 프로젝트 폴더 내부에 영구 바인딩합니다. 개별 임직원들이 마케팅 보고서, 기술 사양표, 어조 톤앤매너 규칙 파일을 대화창을 켤 때마다 드래그앤드롭하여 분석하던 수동 데이터 낭비가 근본적으로 소멸됩니다. 부서 팀원들을 해당 프로젝트에 초대하는 것만으로, 모든 구성원이 동일한 지식 컨텍스트 위에서 안전하고 다채로운 분석 채팅 세션(Threads)을 개별 생성 및 병렬 구동할 수 있습니다.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="px-3 py-1 text-[9px] font-bold bg-white dark:bg-neutral-850 text-gray-500 border border-gray-150 dark:border-neutral-800">지식 지속 유지</span>
                  <span className="px-3 py-1 text-[9px] font-bold bg-white dark:bg-neutral-850 text-gray-500 border border-gray-150 dark:border-neutral-800">대화 스레드 분할</span>
                </div>
              </div>
            </div>

            {/* Before vs After (Split by vertical dotted line) */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white">설정 적용 여부에 따른 비포 & 애프터 비교</h3>
                
                <div className="flex border border-gray-150 dark:border-neutral-800 p-0.5 rounded-none self-start">
                  <button
                    onClick={() => setProjectBeforeAfterTab("sideBySide")}
                    className={`px-4 py-1.5 text-[10px] tracking-wider font-semibold rounded-none cursor-pointer uppercase transition-all duration-300 ${
                      projectBeforeAfterTab === "sideBySide"
                        ? "bg-gray-900 dark:bg-white text-white dark:text-black"
                        : "text-gray-400"
                    }`}
                  >
                    나란히 비교
                  </button>
                  <button
                    onClick={() => setProjectBeforeAfterTab("focus")}
                    className={`px-4 py-1.5 text-[10px] tracking-wider font-semibold rounded-none cursor-pointer uppercase transition-all duration-300 ${
                      projectBeforeAfterTab === "focus"
                        ? "bg-gray-900 dark:bg-white text-white dark:text-black"
                        : "text-gray-400"
                    }`}
                  >
                    애프터 집중
                  </button>
                </div>
              </div>

              {projectBeforeAfterTab === "sideBySide" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                  {/* Before */}
                  <div className="p-8 rounded-none border border-gray-150 dark:border-neutral-800 bg-white dark:bg-[#141416] space-y-4">
                    <span className="text-[10px] tracking-widest font-bold text-red-700 block uppercase">
                      Before / 미설정 기존 환경
                    </span>
                    <ul className="space-y-4 text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-normal list-disc pl-4">
                      <li>매 대화방을 새로 열 때마다 대용량 <strong>LG HE 스마트 TV 글로벌 마케팅 가이드라인 PDF</strong>와 <strong>경쟁사 판매율 엑셀 파일</strong>을 수동 드래그앤드롭으로 재업로드.</li>
                      <li>동일한 지시 규칙(LG F.U.N 가이드 및 사내 보안 준수 서약)을 매번 메모장에서 복사해 대화 시작 시점에 반복 수동 입력하는 비효율 발생.</li>
                      <li>팀원 간에 분석한 대화방 흐름이나 축적된 맥락이 공유되지 않아 부서원 10명이 각자 10번 중복 작업을 반복하여 리소스 낭비.</li>
                      <li>임시 세션의 메모리 한계로 인해 긴 질문을 주고받다 보면 이전 업로드된 문서의 세부 장단점 지식을 망각하고 환각(Hallucination) 오류 발생 빈도가 급증.</li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="p-8 rounded-none border border-gray-150 dark:border-neutral-800 bg-gray-50/50 dark:bg-[#141416] space-y-4 md:border-l-0 md:pl-8">
                    <span className="text-[10px] tracking-widest font-bold text-[#A50034] block uppercase">
                      After / Projects 도입 환경
                    </span>
                    <ul className="space-y-4 text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-normal list-disc pl-4">
                      <li>최초 프로젝트 생성 시 유럽 출시 사양 가이드 및 경쟁사 실적 데이터 엑셀을 <strong>Knowledge 데이터로 영구 등록</strong>하여 이후 생성되는 모든 하위 채팅 스레드가 이를 자동 참조.</li>
                      <li><strong>System Instructions를 상시 고정</strong>하므로, 어시스턴트가 언제나 사내 보안 유출 가이드라인과 LG 특화 톤앤매너 규칙을 내재한 상태로 안전한 답변 제공.</li>
                      <li><strong>Share Project 기능</strong>을 활용하여 부서원들을 일괄 초대, 동일한 고정 지식 브레인 하에서 개별 세션방(Threads)을 쪼개 협업하며 최종 산출물 완성.</li>
                      <li>영구 보존된 데이터 가이드 세팅으로 오랜 피드백 문답이 이어지더라도 컨텍스트 누출이 없고, 특정 로드맵과 딜러 가이드를 정확히 팩트 체크하여 출력.</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-none bg-gray-50 dark:bg-[#141416] border border-gray-150 dark:border-neutral-800 space-y-4">
                  <span className="text-[10px] tracking-widest font-bold text-[#A50034] block uppercase">
                    After / Projects 도입 효과 요약
                  </span>
                  <p className="text-xs text-gray-600 dark:text-neutral-400 leading-relaxed">
                    프로젝트 기능을 도입하면 '맥락 소실의 고통'이 완벽하게 해결됩니다. 하나의 프로젝트 폴더 내부에 타겟 고객 분석 보고서, 해외 바이어 협상 가이드, LG 시그니처 톤앤매너 룰을 결합하여 가상 분석 오피스를 셋업합니다. 이후 '독일 마켓 메일 작성방', '경쟁사 스펙 분석방' 등으로 채팅 스레드를 쪼개 사용하면서, 하나의 고정 지식 지휘소 하에서 각 방이 상시 협동하도록 관리할 수 있습니다.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study */}
            <div className="p-8 sm:p-12 rounded-none border border-gray-150 dark:border-neutral-800 bg-white dark:bg-[#141416] space-y-8">
              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white border-b border-gray-100 dark:border-neutral-850 pb-4">
                LG HE사업본부 스마트 TV 유럽 런칭 프로젝트 실무 사례
              </h3>
              
              <div className="space-y-6 text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                
                <div>
                  <strong className="block text-sm text-gray-800 dark:text-neutral-200 mb-1.5">1. 상황 배경 (Background Context)</strong>
                  <p>
                    HE사업본부 스마트 TV 글로벌 마케팅부문에서는 2026 하반기 전략 신모델 유럽 출시를 앞두고 현지 테크 미디어들의 평가 데이터(PDF), 현지 소매 유통 딜러들의 보조금 배정 내역(XLSX) 및 프리미엄 브랜드 커뮤니케이션 톤앤매너 가이드북을 하나의 일원화된 공간에서 분석하고 검토해야 하는 과제를 안고 있었습니다. 
                  </p>
                </div>

                <div>
                  <strong className="block text-sm text-gray-800 dark:text-neutral-200 mb-1.5">2. 프로젝트 설정 (Configuration details)</strong>
                  <p>
                    마케팅 팀장은 ChatGPT Enterprise Workspace 내에 <strong>'LGE HE Smart TV Europe Launch'</strong> 프로젝트를 개설했습니다. Knowledge 탭에 '2026_Europe_TV_Review_Agg.pdf'와 'EU_Retail_Pricing_Structure.xlsx'를 최초 1회 탑재하여 고정시켰습니다. 지침(Instructions) 란에는 '독일/이탈리아/프랑스 현지 미디어들의 강약점 지식에 입각해서만 답할 것' 및 '대외비 문서는 절대 외부 웹브라우징 검색 엔진에 흘리지 말 것'이라는 규칙을 고정 선언했습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="p-5 bg-gray-50 dark:bg-[#0A0A0B] border border-gray-100 dark:border-neutral-850">
                    <strong className="block text-gray-850 dark:text-neutral-200 mb-1 text-[11px]">3. 하위 스레드 활용 (Thread Breakdown)</strong>
                    <p className="text-[11px] leading-relaxed">
                      소속 팀원인 전주임은 해당 프로젝트 내에서 <strong>'독일 프리미엄 딜러 발송 메일 초안 작성 방'</strong>을 개설하여 작업하였고, 이대리는 <strong>'현지 유튜브 바이럴 카피 추출 방'</strong>을 개설해 활용했습니다. 서로의 대화 창을 간섭하지 않으면서도 상위 폴더에 적재된 동일한 리뷰 데이터와 단가 엑셀 지식을 고유 배경으로 삼아 완벽히 일치된 실무 답변을 취합하는 성과를 냈습니다.
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 dark:bg-[#0A0A0B] border border-gray-100 dark:border-neutral-850">
                    <strong className="block text-gray-850 dark:text-neutral-200 mb-1 text-[11px]">4. 정량적 성과 (Performance Outcome)</strong>
                    <p className="text-[11px] leading-relaxed">
                      이를 통해 매일 아침 평균 25분이 소요되던 자료 재업로드 및 시스템 지시 사항 복사 붙여넣기 과정이 완전 소멸되었습니다. 부서 내 데이터 활용 정합성이 기존 대비 40% 이상 향상되었으며, 일관성 없는 제안서 카피 문구가 작성되어 마케팅 커뮤니케이션실과 재검토를 반복하는 불필요한 공수가 완전히 사라졌습니다.
                    </p>
                  </div>
                </div>

              </div>

              {/* LGE Security Compliance Sidebar */}
              <div className="p-6 bg-[#A50034]/5 border-l-2 border-[#A50034] text-xs text-gray-650 dark:text-neutral-400 space-y-2">
                <span className="font-bold text-[#A50034] block uppercase tracking-wider text-[10px]">LGE IT Security & Compliance Alert</span>
                <p className="font-normal leading-relaxed">
                  프로젝트 내에 업로드하는 모든 문건은 LG전자의 보안 관리 규칙을 적용받습니다. 퍼블릭 브라우저 서버로 외부 유출되지 않도록 사내 Enterprise 라이선스 계정을 사용해야 하며, 경쟁사 스펙이나 미공개 TV 가격표 등의 1급 기밀 정보를 외부 브라우징 봇이 직접 수집하도록 허용해서는 절대 안 됩니다.
                </p>
              </div>

            </div>

            {/* Code Block */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">프로젝트 API 자동 초기화 스크립트</h3>
                  <p className="text-xs text-gray-500">Node.js 환경에서 OpenAI Assistants API의 프로젝트 가상 오피스를 자동으로 개설해 주는 템플릿 코드입니다.</p>
                </div>
                <button
                  onClick={() => handleCopyText(getProjectInitializeCode(), "project")}
                  className={`px-4 py-2 text-[10px] tracking-wider font-semibold rounded-none cursor-pointer uppercase border transition-all ${
                    projectCodeCopied
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-300 hover:border-[#A50034]"
                  }`}
                >
                  {projectCodeCopied ? "복사 완료" : "코드 복사"}
                </button>
              </div>
              <pre className="p-5 bg-gray-900 text-neutral-300 dark:bg-[#141416] rounded-none text-[11px] font-mono overflow-x-auto border border-gray-200 dark:border-neutral-800 leading-relaxed">
                {getProjectInitializeCode()}
              </pre>
            </div>

          </div>
        )}

        {/* ==================== 2. PART 2: GPTS & ACTIONS ==================== */}
        {currentPage === "part2" && (
          <div className="space-y-24 animate-fadeIn text-left">
            
            {/* Section Cover Page Deco */}
            <div className="border-b border-gray-150 dark:border-neutral-850 pb-8 space-y-4">
              <div className="flex items-center justify-between text-[11px] tracking-[0.3em] font-bold text-gray-400 uppercase">
                <span>SECTION 02 // AGENT AUTOMATION</span>
                <span className="text-[#A50034]">CHAPTER TWO</span>
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
                Custom GPTs & API Actions
              </h1>
              <p className="text-sm sm:text-base text-gray-650 dark:text-neutral-400 max-w-3xl leading-relaxed">
                나만의 고품격 챗봇을 빌드하고, 구글/유튜브/네이버 검색 API를 Action 스키마로 연동하십시오. 실무 가동 터미널 시뮬레이터를 통해 설정 전(Before)과 설정 후(After)의 극명한 품질 차이를 직접 눈으로 검증할 수 있습니다.
              </p>
            </div>

            {/* Flat Illustration Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50 dark:bg-[#141416] p-8 sm:p-12 border border-gray-100 dark:border-neutral-900">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-square bg-white dark:bg-[#0A0A0B] p-4 border border-gray-150 dark:border-neutral-800 flex items-center justify-center">
                  <Image
                    src="/chapter2_robots.png"
                    alt="GPTs Actions Robots Illustration"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[9px] tracking-wider font-bold text-gray-400 uppercase block">Agent Automations</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">나만의 실시간 AI 에이전트 구동</h3>
                <p className="text-xs sm:text-[13px] text-gray-600 dark:text-neutral-450 leading-relaxed font-normal">
                  <span className="text-[#A50034] text-4xl font-serif font-bold float-left mr-2 mt-1 leading-[0.8]">A</span>
                  Actions 외부 API 연동 아키텍처는 정적인 AI 데이터 학습 범위를 확장하여 완전히 살아 움직이는 인터랙티브 실시간 모니터링 환경을 만듭니다. 일반적인 ChatGPT는 업그레이드 전의 지식 베이스만을 참조하여 업계 출하 점유율 분석이나 오늘 자 경쟁사 보도 뉴스를 찾지 못하고 한계에 직면하지만, GPTs Configure에 OpenAPI 규격 검색 스키마를 로드하면 외부 구글/유튜브/네이버 채널 서버를 직간접적으로 원격 통신 호출(Trigger API)하여 원스톱 실시간 가공 요약을 알아서 수행해 냅니다.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="px-3 py-1 text-[9px] font-bold bg-white dark:bg-neutral-850 text-gray-500 border border-gray-150 dark:border-neutral-800">OpenAPI Actions</span>
                  <span className="px-3 py-1 text-[9px] font-bold bg-white dark:bg-neutral-850 text-gray-500 border border-gray-150 dark:border-neutral-800">실시간 서치 연동</span>
                </div>
              </div>
            </div>

            {/* Agent Playground */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white">LG전자 현업 특화 4대 에이전트 플레이그라운드</h3>
                <p className="text-xs text-gray-500">에이전트를 선택하고 프롬프트 복사 및 가동 시뮬레이션을 작동해 보십시오.</p>
              </div>

              {/* Minimal Text Selector */}
              <div className="flex flex-wrap gap-8 border-b border-gray-150 dark:border-neutral-850 pb-3">
                {(Object.keys(agentSpecs) as AgentType[]).map((agentKey) => (
                  <button
                    key={agentKey}
                    onClick={() => {
                      setSelectedAgent(agentKey);
                      setSimulationLogs([]);
                      setSimulationResult("");
                    }}
                    className={`pb-2 text-[10px] tracking-[0.2em] font-bold uppercase cursor-pointer transition-all duration-300 ${
                      selectedAgent === agentKey
                        ? "text-[#A50034] border-b-2 border-[#A50034]"
                        : "text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {agentSpecs[agentKey].title.split(" (")[0]}
                  </button>
                ))}
              </div>

              {/* Agent Playground Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Config and Instructions */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-wider font-semibold text-gray-400 block uppercase">
                      타겟 부서: {currentAgent.division}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-[#A50034]">{currentAgent.title}</h4>
                    <p className="text-xs text-gray-650 dark:text-neutral-450">{currentAgent.subtitle}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gray-800 dark:text-neutral-200 block">설정 매뉴얼 (Instructions)</span>
                    <ol className="list-decimal pl-4 space-y-1.5 text-xs text-gray-605 dark:text-neutral-400 leading-relaxed font-normal">
                      {currentAgent.guide.map((step, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-neutral-400">{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Prompt Copier */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-800 dark:text-neutral-200">1. 전용 지침 (System Instruction)</span>
                      <button
                        onClick={() => handleCopyText(currentAgent.prompt, "prompt")}
                        className={`text-[9px] tracking-wider font-semibold px-2.5 py-1 rounded-none border transition-all cursor-pointer uppercase ${
                          agentPromptCopied
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-500 hover:border-[#A50034]"
                        }`}
                      >
                        {agentPromptCopied ? "복사 완료" : "복사"}
                      </button>
                    </div>
                    <textarea
                      readOnly
                      value={currentAgent.prompt}
                      className="w-full h-36 p-3 bg-gray-50 dark:bg-[#141416] border border-gray-100 dark:border-neutral-850 rounded-none text-xs font-mono resize-none focus:outline-none text-gray-605 dark:text-neutral-450 leading-relaxed"
                    />
                  </div>

                  {/* Schema Copier */}
                  {selectedAgent !== "analyst" && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-800 dark:text-neutral-200">2. OpenAPI Actions 스키마</span>
                        <button
                          onClick={() => handleCopyText(currentAgent.schema, "schema")}
                          className={`text-[9px] tracking-wider font-semibold px-2.5 py-1 rounded-none border transition-all cursor-pointer uppercase ${
                            agentSchemaCopied
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-500 hover:border-[#A50034]"
                        }`}
                      >
                        {agentSchemaCopied ? "복사 완료" : "복사"}
                      </button>
                    </div>
                    <textarea
                      readOnly
                      value={currentAgent.schema}
                      className="w-full h-36 p-3 bg-gray-50 dark:bg-[#141416] border border-gray-100 dark:border-neutral-850 rounded-none text-xs font-mono resize-none focus:outline-none text-gray-605 dark:text-neutral-455 leading-relaxed"
                    />
                  </div>
                  )}
                </div>

                {/* Simulated Outputs & Console */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Flat Before vs After */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-none bg-white dark:bg-[#141416] border border-gray-100 dark:border-neutral-800">
                      <span className="text-[9px] font-bold text-red-700 block uppercase tracking-widest mb-2">Before / 일반 GPT</span>
                      <p className="text-[11px] text-gray-600 dark:text-neutral-400 leading-relaxed font-normal">
                        {currentAgent.before}
                      </p>
                    </div>
                    <div className="p-5 rounded-none bg-gray-50 dark:bg-[#141416] border border-gray-100 dark:border-neutral-800">
                      <span className="text-[9px] font-bold text-[#A50034] block uppercase tracking-widest mb-2">After / 설정 적용</span>
                      <p className="text-[11px] text-gray-900 dark:text-white leading-relaxed font-normal">
                        {currentAgent.after}
                      </p>
                    </div>
                  </div>

                  {/* Monospaced Simulated Terminal Console */}
                  <div className="rounded-none bg-[#09090B] p-6 flex flex-col justify-between min-h-[320px] border border-neutral-900">
                    <div className="space-y-3 font-mono text-[11px] text-left leading-relaxed text-gray-400">
                      <div className="flex items-center justify-between border-b border-neutral-900 pb-2 mb-2">
                        <span className="text-[9px] text-neutral-600 uppercase tracking-widest">LGE Agent System Sandbox</span>
                        <span className="text-[9px] text-[#A50034] font-bold">LGE-SIM-CAN-05</span>
                      </div>

                      <div className="text-neutral-600">$ lge-agent-run --name={selectedAgent}</div>

                      {simulationLogs.map((log, idx) => (
                        <div key={idx} className={log.includes("[SYSTEM]") ? "text-neutral-550" : log.includes("[API]") ? "text-cyan-600" : "text-neutral-200"}>
                          {log}
                        </div>
                      ))}

                      {simulationRunning && (
                        <div className="text-neutral-600 animate-pulse">Running process pipelines...</div>
                      )}

                      {simulationResult && (
                        <div className="mt-4 p-4 bg-[#141416] text-neutral-200 font-sans text-xs whitespace-pre-line leading-relaxed border border-neutral-900">
                          {simulationResult}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-900 flex justify-end">
                      <button
                        onClick={handleRunSimulation}
                        disabled={simulationRunning}
                        className={`text-[9px] tracking-widest font-semibold px-6 py-3 rounded-none transition-all uppercase cursor-pointer ${
                          simulationRunning
                            ? "bg-neutral-900 text-neutral-600"
                            : "bg-[#A50034] text-white hover:bg-[#85002a]"
                        }`}
                      >
                        {simulationRunning ? "시뮬레이션 중..." : "시뮬레이터 가동 (Run)"}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* OpenAPI Search schemas */}
            <div className="border-t border-gray-150 dark:border-neutral-800 pt-16 space-y-6">
              <div>
                <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white">OpenAPI Actions 실시간 외부 검색 연동 스키마</h3>
                <p className="text-xs text-gray-500">
                  Custom GPTs의 Configure 메뉴 최하단에 있는 'Actions' 기능을 사용해 외부 검색 엔진을 연동하면 실시간 최신 정보를 탐색하여 결과물을 도출해 냅니다.
                </p>
              </div>

              {/* Minimal Text Selector */}
              <div className="flex gap-8 border-b border-gray-150 dark:border-neutral-850 pb-2">
                {(Object.keys(apiSchemas) as APIProviderType[]).map((apiId) => (
                  <button
                    key={apiId}
                    onClick={() => setSelectedAPI(apiId)}
                    className={`pb-2 text-[10px] tracking-widest font-bold uppercase cursor-pointer transition-all duration-300 ${
                      selectedAPI === apiId
                        ? "text-[#A50034] border-b-2 border-[#A50034]"
                        : "text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {apiId} Search
                  </button>
                ))}
              </div>

              {/* API Details */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{apiSchemas[selectedAPI].title}</h4>
                    <p className="text-xs text-gray-550 mt-1">{apiSchemas[selectedAPI].description}</p>
                  </div>
                  <button
                    onClick={() => handleCopyText(apiSchemas[selectedAPI].schema, "api")}
                    className={`px-4 py-2 text-[10px] tracking-wider font-semibold rounded-none cursor-pointer uppercase border transition-all ${
                      apiCopied
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-600 hover:border-[#A50034]"
                    }`}
                  >
                    {apiCopied ? "복사 완료" : "스키마 복사"}
                  </button>
                </div>
                <pre className="p-5 bg-gray-900 text-neutral-300 dark:bg-[#141416] rounded-none text-[11px] font-mono overflow-x-auto border border-gray-200 dark:border-neutral-800 leading-relaxed max-h-[300px]">
                  {apiSchemas[selectedAPI].schema}
                </pre>
              </div>

              {/* Actions Setup Guide */}
              <div className="p-6 bg-gray-50 dark:bg-[#141416] border border-gray-100 dark:border-neutral-850 text-xs text-gray-650 dark:text-neutral-450 space-y-4">
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px]">LGE Actions API 인증 세부 매뉴얼</h4>
                <p className="leading-relaxed font-normal">
                  Actions를 통신 연동할 때는 **인증 방식 (Authentication)** 설정에 주의해 주십시오. 구글이나 네이버 API의 경우, 스키마 내에 API Key 변수 전달을 정의하거나 GPTs의 [Authentication] 설정 팝업에서 `API Key`를 선택한 후 헤더(Custom Header: `Authorization` 또는 `X-Naver-Client-Id` 등)에 값을 매핑해야만 정상적인 Status Code 200 데이터를 수신받을 수 있습니다.
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className={`border-t py-12 text-[10px] text-center space-y-3 font-medium ${darkMode ? "bg-[#0A0A0B] border-[#1C1C1E] text-neutral-600" : "bg-gray-50 border-gray-100 text-gray-450"}`}>
        <p>샛별자문단 5기 프리미엄 AI 가이드 매거진 © 2026 LG Electronics. All Rights Reserved.</p>
        <p className="tracking-wide text-neutral-500 dark:text-neutral-500 max-w-xl mx-auto leading-relaxed px-4 font-normal">
          본 사이트의 콘텐츠는 LG전자 임직원 교육 및 업무 활용 목적으로 제공되며, 외부 유출 및 영리 목적 배포를 엄격히 금합니다.
        </p>
      </footer>

      {/* ==================== 4. ONBOARDING QUIZ MODAL ==================== */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#141416] p-10 rounded-none max-w-xl w-full border border-gray-250 dark:border-neutral-850 shadow-sm relative text-left">
            
            {/* Close */}
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Steps indicator */}
            <div className="flex gap-1 mb-8">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-0.5 flex-1 transition-all duration-300 ${
                    quizStep >= step ? "bg-[#A50034]" : "bg-gray-100 dark:bg-neutral-850"
                  }`}
                />
              ))}
            </div>

            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-6 leading-snug">
              {quizStep === 1
                ? "현재 근무하고 계신 사업본부는 어디입니까?"
                : quizStep === 2
                ? "업무 수행 중 가장 크게 겪는 Pain Point는 무엇입니까?"
                : "메일 및 진단 분석 보고서 발행용 소속 이메일을 등록해 주세요."}
            </h3>

            {/* Quiz Step 1 */}
            {quizStep === 1 && (
              <div className="space-y-2">
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
                    className="w-full text-left p-4 rounded-none border border-gray-100 dark:border-neutral-850 hover:border-[#A50034] dark:hover:border-[#A50034] hover:bg-gray-50 dark:hover:bg-neutral-900 dark:bg-[#0B0B0C] transition-all font-semibold text-xs cursor-pointer text-gray-800 dark:text-neutral-200"
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            )}

            {/* Quiz Step 2 */}
            {quizStep === 2 && (
              <div className="space-y-2">
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
                    className="w-full text-left p-4 rounded-none border border-gray-100 dark:border-neutral-850 hover:border-[#A50034] dark:hover:border-[#A50034] hover:bg-gray-50 dark:hover:bg-neutral-900 dark:bg-[#0B0B0C] transition-all font-semibold text-xs cursor-pointer text-gray-800 dark:text-neutral-200"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}

            {/* Quiz Step 3 */}
            {quizStep === 3 && (
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-gray-400 block">이메일 주소</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="example@lge.com"
                    className="w-full p-3.5 border border-gray-100 dark:border-neutral-850 dark:bg-[#0B0B0C] rounded-none focus:outline-none focus:ring-1 focus:ring-[#A50034] text-xs font-semibold text-gray-800 dark:text-neutral-200"
                  />
                </div>

                {quizResultFileReady && (
                  <div className="p-4 rounded-none bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium leading-relaxed">
                    [진단 완료] LGE {userDivision} 최적화 {userPainPoint === "market" ? "Research" : userPainPoint === "report" ? "Analytics" : userPainPoint === "copy" ? "Copywriting" : "Automation"} GPTs 설정 분석이 완료되었습니다. 아래 버튼을 눌러 JSON 설정 파일을 다운로드하십시오.
                  </div>
                )}

                <div className="flex justify-between pt-4 gap-3">
                  <button
                    onClick={() => {
                      setQuizResultFileReady(false);
                      setQuizStep(2);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-neutral-850 dark:hover:bg-neutral-750 text-gray-650 dark:text-neutral-200 font-semibold text-[10px] tracking-widest uppercase px-5 py-3 rounded-none transition-colors cursor-pointer"
                  >
                    이전
                  </button>
                  {quizResultFileReady ? (
                    <button
                      onClick={downloadQuizConfig}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[10px] tracking-widest uppercase px-6 py-3 rounded-none transition-all cursor-pointer"
                    >
                      JSON 설정 다운로드
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (!userEmail.includes("@")) {
                          alert("올바른 이메일 주소를 입력해 주십시오.");
                          return;
                        }
                        setQuizResultFileReady(true);
                      }}
                      className="bg-[#A50034] hover:bg-[#85002a] text-white font-semibold text-[10px] tracking-widest uppercase px-6 py-3 rounded-none transition-all cursor-pointer"
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

      {/* ==================== 5. MINIMALIST CHATBOT WIDGET ==================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatbotOpen && (
          <div className="w-[340px] h-[440px] rounded-none border shadow-none flex flex-col mb-4 overflow-hidden transition-all duration-300 animate-fadeIn bg-white border-gray-250 dark:bg-[#141416] dark:border-neutral-800 text-[#1D1D1F] dark:text-neutral-350">
            
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-900 px-5 py-4 text-white">
              <span className="font-semibold text-[10px] tracking-widest uppercase">LGE FAQ Helper</span>
              <button onClick={() => setChatbotOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className={`flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed ${
              darkMode ? "bg-[#09090B]" : "bg-neutral-50/50"
            }`}>
              {chatbotMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-none max-w-[80%] text-left font-normal ${
                    msg.sender === "user"
                      ? "bg-gray-900 text-white"
                      : darkMode
                      ? "bg-neutral-850 text-neutral-350 border border-neutral-750"
                      : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="text-[10px] text-gray-400 font-medium">
                    <span className="animate-pulse">답변을 작성하고 있습니다...</span>
                  </div>
                </div>
              )}
              <div ref={chatbotEndRef} />
            </div>

            {/* FAQ Presets */}
            <div className={`px-4 py-2.5 flex flex-wrap gap-1.5 border-t text-left ${
              darkMode ? "bg-[#141416] border-neutral-800" : "bg-white border-gray-100"
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
                  className={`text-[9px] font-semibold py-1 px-2.5 rounded-none border transition-all cursor-pointer ${
                    darkMode
                      ? "border-neutral-700 bg-neutral-800 text-neutral-400 hover:border-[#A50034] hover:text-white"
                      : "border-gray-200 bg-gray-50 text-gray-655 hover:border-[#A50034] hover:text-[#A50034]"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleChatbotSubmit} className={`p-3 border-t flex gap-2 ${
              darkMode ? "bg-[#141416] border-neutral-800" : "bg-white border-gray-200"
            }`}>
              <input
                type="text"
                name="chatInput"
                placeholder="질문 입력..."
                className={`flex-1 px-3 py-2 text-xs rounded-none border focus:outline-none focus:ring-1 focus:ring-[#A50034] font-normal ${
                  darkMode ? "bg-neutral-900 border-neutral-800 text-white" : "bg-white border-gray-200 text-[#1D1D1F]"
                }`}
              />
              <button type="submit" className="bg-gray-900 text-white hover:bg-black rounded-none px-4 text-xs font-semibold tracking-wider transition-colors cursor-pointer uppercase">
                Send
              </button>
            </form>

          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="h-10 w-10 rounded-none bg-gray-900 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-neutral-800 shadow-none"
        >
          {chatbotOpen ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}
