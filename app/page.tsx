"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Types
type AgentType = "writer" | "researcher" | "analyst" | "automator";
type AppType = "qa" | "translate" | "sql";
type ToneType = "pro" | "creative" | "short";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function Home() {
  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Playground States (Chapter 01)
  const [appType, setAppType] = useState<AppType>("qa");
  const [tone, setTone] = useState<ToneType>("pro");
  const [playgroundCopied, setPlaygroundCopied] = useState(false);

  // Agent Modal States (Chapter 02)
  const [selectedAgent, setSelectedAgent] = useState<AgentType | null>(null);
  const [activeTab, setActiveTab] = useState<"beforeAfter" | "prompt" | "schema" | "guide">("beforeAfter");
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulationResult, setSimulationResult] = useState("");
  const [modalCopied, setModalCopied] = useState(false);

  // CTA Quiz States
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [userDivision, setUserDivision] = useState("H&A");
  const [userPainPoint, setUserPainPoint] = useState("market");
  const [userEmail, setUserEmail] = useState("");
  const [quizResultFileReady, setQuizResultFileReady] = useState(false);

  // Chatbot States
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotMessages, setChatbotMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "안녕하세요! LG전자 샛별 AI 가이드입니다. 무엇을 도와드릴까요?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Playground Dynamic Prompts and Code
  const getPlaygroundCode = () => {
    const prompts = {
      qa: {
        pro: `You are an expert Assistant for LG Electronics. Answer user questions about product specifications using structured XML context.\nTone: Professional, informative, and precise.\n[Instructions]\n- Divide response into H&A, HE, and VS business areas.\n- Present data in structured bullet points.`,
        creative: `You are a friendly Smart Home Guide for LG ThinQ. Help users create a connected home experience.\nTone: Welcoming, highly creative, and easy-to-understand.\n[Instructions]\n- Focus on customer value and convenience (F.U.N experience).`,
        short: `You are a Quick Specs Responder at LG CS Center. Return short, concise specification answers.\nTone: Extremely concise, direct, max 2 sentences.\n[Instructions]\n- Do not include greetings. List technical specs directly.`
      },
      translate: {
        pro: `You are a Professional Technical Translator at LG Global Communications. Translate engineering documents accurately.\nTone: Formal and industrial-standard.`,
        creative: `You are a Global Marketing Localizer at LG Electronics. Adapt English marketing copy into localized Korean copy.\nTone: Emotionally engaging, localized, and brand-aligned.`,
        short: `You are a Quick Multi-language Dictionary. Translate terms directly with no descriptions.\nTone: Minimalist.`
      },
      sql: {
        pro: `You are a Database Specialist at LG H&A Analytics. Generate optimal SQL queries for product registration databases.\nTone: Technically precise, SQL standard.`,
        creative: `You are an Interactive Database Assistant. Generate queries and explain the execution plan with optimization tips.\nTone: Instructive and detailed.`,
        short: `You are a Quick SQL Generator. Output raw SQL code blocks only with no markdown explanations.\nTone: Code-only.`
      }
    };

    const currentPrompt = prompts[appType][tone];
    
    return `// LG Electronics AI Structured Context Connector
import { Ollama } from "ollama";

const ollama = new Ollama({ host: "http://localhost:11434" });

async function run() {
  const response = await ollama.chat({
    model: "gemma4:e2b",
    messages: [
      {
        role: "system",
        content: \`${currentPrompt}\`
      },
      {
        role: "user",
        content: "<market_trend_data>\\n[LG Smart TV WebOS sales increase by 15% in Q1]\\n</market_trend_data>\\n\\n위 데이터를 바탕으로 시장 분석 보고서를 작성해줘."
      }
    ]
  });
  console.log(response.message.content);
}

run();`;
  };

  const handlePlaygroundCopy = () => {
    navigator.clipboard.writeText(getPlaygroundCode());
    setPlaygroundCopied(true);
    setTimeout(() => setPlaygroundCopied(false), 2000);
  };

  // Agent Specifications Data (LG Electronics focus)
  const agentSpecs = {
    writer: {
      title: "라이터 (Writer) - 프리미엄 카피라이터",
      division: "HE/H&A 마케팅",
      before: "LG Signature 올레드 TV는 화질이 우수하고 디자인이 뛰어납니다. 화면이 선명하며 얇게 제작되었습니다. 구매하시면 좋습니다.",
      after: "빛을 잃었던 일상에, 스스로 빛나는 OLED가 더하는 가치.\n\n백라이트 없이 완성된 완벽한 블랙과 무한한 명암비로, 오직 LG SIGNATURE OLED TV만이 전할 수 있는 F.U.N(First, Unique, New) 고객 경험을 선사합니다. 공간의 가치를 올리는 초슬림 월페이퍼 디자인으로 프리미엄 홈 스크린의 궁극적 정점을 직접 만나보세요.",
      prompt: `You are an elite Brand Copywriter at LG Electronics Global Marketing Center.
Your goal is to write copy that aligns with LG's brand identity: Premium, sophisticated, yet warm and customer-oriented.

[Guidelines]
1. Focus on F.U.N (First, Unique, New) experience values.
2. Emphasize innovative technologies (e.g. self-lit OLED pixels, AI DD motor, LG ThinQ Smart Home Ecosystem) as human-centric benefits, not just cold specs.
3. Keep the tone sophisticated, engaging, and premium.
4. Output format: Structured Markdown with a catchphrase, main description, and 3 key benefits.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "LG Electronics CMS Content Sync API",
    "version": "1.0.0",
    "description": "API to publish and synchronize generated marketing copy to the LG official CMS database."
  },
  "paths": {
    "/api/v1/cms/publish": {
      "post": {
        "operationId": "publishToCMS",
        "summary": "Publish Copy to LG CMS",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "campaignId": { "type": "string", "example": "LG_OLED_2026" },
                  "productCode": { "type": "string", "example": "OLED65G6" },
                  "copyText": { "type": "string" },
                  "authorDivision": { "type": "string", "example": "HE_Marketing" }
                },
                "required": ["productCode", "copyText"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Copy successfully published to CMS database.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "publishId": { "type": "string", "example": "CMS_TXT_78942" },
                    "status": { "type": "string", "example": "success" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`,
      guide: [
        "1. ChatGPT나 GPTs 빌더화면에서 'Create' 모드 대신 'Configure' 모드로 진입합니다.",
        "2. Name을 'LG Premium Brand Copywriter'로 설정하고 Description을 작성합니다.",
        "3. Instructions 칸에 오른쪽 'System Prompt' 탭에 있는 전체 가이드라인 프롬프트를 복사하여 그대로 입력합니다.",
        "4. Capabilities에서 'Web Search'와 'DALL-E' 항목을 비활성화하고 오직 텍스트 작문 역량에만 포커스하도록 유도합니다.",
        "5. 추가적으로 이미지나 보도자료 배포를 원한다면 Actions에 오른쪽 'API Action Schema' JSON을 붙여넣어 사내 CMS 웹훅과 연동합니다."
      ],
      simulationLogs: [
        "[SYSTEM] LG 마케팅 카피라이터 활성화 중...",
        "[DB] LG SIGNATURE 가치 전달 가이드라인 라이브러리 로드 성공.",
        "[AI] 입력값 분석 중: '올레드 TV 신모델'",
        "[AI] 프리미엄 톤앤매너 매핑: F.U.N 고객경험 가치 추출 완료.",
        "[AI] 카피 텍스트 생성 중..."
      ]
    },
    researcher: {
      title: "리서처 (Researcher) - 경쟁사/시장동향 요약기",
      division: "전사 기획 및 사업본부",
      before: "삼성과 소니의 TV 관련 보도자료를 각각 크롤링하고 수십 개의 구글 뉴스 링크를 일일이 들어가 분석한 뒤 워드 파일에 복사해서 수동으로 붙여넣음. (소요 시간: 4시간)",
      after: "출근 직후 Tavily API 검색 액션을 단 한 번 실행하여 경쟁사(삼성 Neo QLED, 소니 MicroLED 등) 신제품 및 특허 동향을 파악하고, 핵심 쟁점과 임원 보고서용 3줄 핵심 시사점(Bullet Points)을 자동으로 받아옴. (소요 시간: 10초)",
      prompt: `You are an Executive Market Intelligence Analyst at LG Electronics Strategic Planning Division.
Your goal is to monitor global competitors (e.g. Samsung, Sony in HE / Whirlpool in H&A) and synthesize key market trends.

[Rules]
1. Use Web Search Tool (Tavily/Serper) to fetch current articles and tech trends.
2. Group the findings into the requested Business Unit: HE (Home Entertainment), H&A (Home Appliance), or VS (Vehicle Components).
3. Present an Executive 3-Line Summary at the top.
4. For each trend, cite the source URL accurately.
5. Focus heavily on strategic implications for LG Electronics.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Tavily Search API Integration for Competitor Intelligence",
    "version": "1.0.0",
    "description": "API to perform real-time search queries to fetch latest news, press releases, and patent filings of competitors."
  },
  "paths": {
    "/search": {
      "post": {
        "operationId": "searchCompetitorNews",
        "summary": "Retrieve latest news from Tavily Search Engine",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "query": { "type": "string", "example": "Samsung OLED TV Neo QLED 2026 specs" },
                  "search_depth": { "type": "string", "enum": ["basic", "advanced"], "default": "advanced" },
                  "max_results": { "type": "integer", "default": 5 }
                },
                "required": ["query"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Search successful.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "results": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "title": { "type": "string" },
                          "url": { "type": "string" },
                          "content": { "type": "string" }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`,
      guide: [
        "1. GPTs 설정 화면의 Instructions 영역에 'System Prompt'의 리서치 가이드라인을 삽입합니다.",
        "2. Capabilities에서 'Web Search'를 필수로 활성화합니다.",
        "3. 만약 더 정밀하고 특화된 필터링 검색 결과를 원한다면, Actions 등록으로 이동합니다.",
        "4. 오른쪽의 'API Action Schema' JSON 코드를 복사하여 Actions에 입력합니다.",
        "5. Tavily API 키를 인증 헤더에 등록하여 경쟁사 최신 동향을 백그라운드에서 실시간 수집할 수 있도록 설정합니다."
      ],
      simulationLogs: [
        "[SYSTEM] 실시간 트렌드 크롤러 구동...",
        "[API] Tavily Search API 호출: 'Samsung Whirlpool 2026 Trend'",
        "[API] 데이터 수집 성공: 5개 유력 매체 기사 인덱싱 완료.",
        "[AI] 임원 보고용 요약 알고리즘 실행...",
        "[AI] HE, H&A 비즈니스 영역별 시사점 맵핑 중..."
      ]
    },
    analyst: {
      title: "애널리스트 (Analyst) - 가전 점유율 분석기",
      division: "전사 데이터 분석 및 마케팅",
      before: "글로벌 TV 분기별 판매량 원본 CSV 파일을 받아 엑셀로 정렬하고, 수동으로 파워포인트 차트를 만들고 요약 보고서를 작성하느라 하루 꼬박 소요됨.",
      after: "데이터 시각화 GPTs에 CSV 파일을 드래그앤드롭하고 실행하면, 파이썬 Pandas와 Matplotlib를 작동시켜 분기별 LG OLED vs 경쟁사 TV 점유율 변동 추이를 고해상도 차트로 즉시 생성하고 이상치(Outlier) 요인까지 즉시 분석함. (소요 시간: 15초)",
      prompt: `You are an expert Data Analyst in LG Electronics HE Business Intelligence Unit.
You write python code using Code Interpreter to clean, process, and visualize business data.

[Instructions]
1. Read the uploaded CSV data and inspect column schema first.
2. Clean missing values and format data index properly.
3. Create a high-quality line/bar chart using Matplotlib/Seaborn.
   - Use LG Brand Colors: Primary Red (#A50034), Secondary Dark Grey (#1d1d1f).
   - Set titles, legends, and grid lines clearly.
4. Interpret key data insights: identify positive trends, outliers, and competitor threats.
5. Provide actionable sales strategy recommendations for LG Electronics based on the charts.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Data Visualization & Interpretation Engine Setup",
    "version": "1.0.0",
    "description": "Internal specifications for activating sandbox-based python interpreter for data processing."
  },
  "paths": {
    "/api/v1/sandbox/execute": {
      "post": {
        "operationId": "runPythonScript",
        "summary": "Execute python data processing script",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "script": { "type": "string", "example": "import pandas as pd; df = pd.read_csv('sales.csv'); print(df.describe())" }
                },
                "required": ["script"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Code execution finished successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "stdout": { "type": "string" },
                    "plotImagePath": { "type": "string", "example": "/plots/output.png" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`,
      guide: [
        "1. GPTs 설정 화면의 Capabilities 영역에서 'Code Interpreter'를 필수로 활성화합니다.",
        "2. Instructions에 'System Prompt'의 데이터 처리 지침을 삽입하여 데이터 시각화와 논리적 분석이 함께 이뤄지도록 유도합니다.",
        "3. 사용자가 분석용 CSV 또는 Excel 파일을 챗 창에 즉시 드래그앤드롭하여 분석을 지시할 수 있음을 매뉴얼에 고지합니다.",
        "4. 만약 클라우드 서버 환경에서 파이썬을 자동으로 돌리려면, Actions 스키마를 사용하여 자체 보안 샌드박스 서버와 연결할 수 있습니다."
      ],
      simulationLogs: [
        "[SYSTEM] 파이썬 데이터 분석 샌드박스 시작...",
        "[FILE] 'lg_tv_share.csv' 파일 로드 완료. (Row: 1,200)",
        "[CODE] pandas 기반 분기별 가중 평균 점유율 연산 수행...",
        "[PLOT] LG OLED TV vs 경쟁사 추이 꺾은선그래프 이미지 렌더링 완료.",
        "[AI] 이상치 분석: 2026년 2분기 유럽 연합 관세 변동에 따른 마진 변화 시사점 분석 중..."
      ]
    },
    automator: {
      title: "오토메이터 (Automator) - 품질이슈/CS 긴급 전파기",
      division: "VS(전장) 사업본부 / H&A 품질관리부",
      before: "전장 부품이나 가전 센서에서 미세한 품질 오차(Jira 티켓 발행) 발생 시, 품질 관리자가 이메일을 구성하고 슬랙 채널을 찾아 수동으로 타이핑하여 공지하느라 품질 개선 피드백 루프 지연 발생.",
      after: "Jira에서 특정 부품의 오차 티켓이 발행되면 Webhook이 자동으로 GPTs Action을 작동. GPTs가 결함 분석 정보를 사내 표준 양식으로 요약하여 품질 부서의 슬랙 채널 및 메일룸 아웃룩에 즉시 전송 및 긴급 알림 전파 완료. (소요 시간: 실시간)",
      prompt: `You are an automated System Integrator for LG Electronics VS (Vehicle component Solutions) Quality Assurance.
You parse system alert notifications (such as Jira ticket logs) and broadcast formatted messages.

[Instructions]
1. Parse incoming JSON payloads containing quality alert details: Part Name, Error Level, Error Code, Inspector.
2. Format the message clearly:
   - Alert Category Badge: [🚨 URGENT QUALITY ALERT]
   - Summary of the issue.
   - Action Items: Assigned Team, Remediation Guide.
3. Call the Slack Webhook API (or Outlook Teams API) to publish the formatted message directly.
4. Verify the server API response status. If it fails, retry once and log the error code.`,
      schema: `{
  "openapi": "3.0.0",
  "info": {
    "title": "LG Quality Slack Webhook Connector API",
    "version": "1.0.0",
    "description": "API specs for posting automated error and quality status logs directly into Slack/Teams channels."
  },
  "paths": {
    "/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX": {
      "post": {
        "operationId": "postSlackAlert",
        "summary": "Post Alert message to designated QA Slack channel",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "text": { "type": "string", "example": "[🚨 긴급 품질 경보] VS본부 전장보드 오차코드 E-45 발생" },
                  "blocks": {
                    "type": "array",
                    "items": { "type": "object" }
                  }
                },
                "required": ["text"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Message posted successfully."
          }
        }
      }
    }
  }
}`,
      guide: [
        "1. GPTs 설정의 Actions 항목으로 이동해 'Create new action'을 선택합니다.",
        "2. 오른쪽의 'API Action Schema' JSON 양식(슬랙 웹훅 연동용 스키마)을 복사하여 Schema 영역에 붙여넣습니다.",
        "3. Authentication 설정을 'API Key' 또는 슬랙 커넥터 인증 방식을 지정합니다.",
        "4. Instructions(System Prompt)에 지라 이슈 로그나 제조 공정 센서 오차 페이로드를 어떻게 파싱하고, 슬랙 블록 키트로 정렬할지 명령 지침을 적어 배포합니다."
      ],
      simulationLogs: [
        "[SYSTEM] 품질 알림 브로드캐스터 활성화...",
        "[WEBHOOK] Jira 품질 보증 보드 티켓 감지: 'VS_BOARD_REV05 품질 이상 발생'",
        "[AI] 이슈 요약문 작성 완료 (오차 등급: URGENT, 부품명: 전장 제어 모듈)",
        "[API] Slack Webhook POST 전송 실행...",
        "[API] 전송 완료 (Status 200 OK) - 품질 관리 채널 및 이메일 전송 완료."
      ]
    }
  };

  // Run Simulation Effect
  useEffect(() => {
    if (simulationRunning && selectedAgent) {
      setSimulationLogs([]);
      setSimulationResult("");
      let logIndex = 0;
      const logs = agentSpecs[selectedAgent].simulationLogs;
      
      const interval = setInterval(() => {
        if (logIndex < logs.length) {
          setSimulationLogs((prev) => [...prev, logs[logIndex]]);
          logIndex++;
        } else {
          clearInterval(interval);
          setSimulationRunning(false);
          // Set simulated result text
          const resultText = agentSpecs[selectedAgent].after;
          setSimulationResult(resultText);
        }
      }, 900);

      return () => clearInterval(interval);
    }
  }, [simulationRunning, selectedAgent]);

  // Simulated Chatbot Logic
  const handleChatbotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("chatInput") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;

    setChatbotMessages((prev) => [...prev, { sender: "user", text }]);
    input.value = "";
    setIsTyping(true);

    setTimeout(() => {
      let reply = "죄송합니다, 관련 질문에 대해 답변을 찾지 못했습니다. 목록에 있는 실무 가이드 키워드를 선택해 주세요!";
      if (text.includes("5기") || text.includes("무엇")) {
        reply = "샛별자문단 5기는 LG전자 임직원 및 사업본부(H&A, HE, VS, BS)의 비즈니스 생산성을 AI 설정 프로젝트와 GPTs 자동화를 통해 혁신하는 사내 AI 특화 추진체입니다.";
      } else if (text.includes("로컬") || text.includes("Gemma") || text.includes("Ollama")) {
        reply = "로컬에서 Gemma4:e2b를 구동하려면 Ollama를 설치한 후 'ollama pull gemma4:e2b' 명령을 실행하세요. 이후 프로젝트 루트에 본 웹사이트 가이드의 antigravity.config.json 설정을 위치시키면 연동이 완료됩니다.";
      } else if (text.includes("에이전트") || text.includes("자동화") || text.includes("GPTs")) {
        reply = "업무를 자동화하려면 본 사이트 Chapter 2에서 제공하는 4대 에이전트(Writer, Researcher, Analyst, Automator)의 상세 가이드를 통해 프롬프트와 API 스키마를 복사하여 GPTs Configure 탭에 입력하면 바로 사용하실 수 있습니다.";
      }

      setChatbotMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const sendQuickQuestion = (question: string) => {
    setChatbotMessages((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      if (question.includes("샛별자문단 5기")) {
        reply = "샛별자문단 5기는 LG전자 임직원 및 사업본부(H&A, HE, VS, BS)의 비즈니스 생산성을 AI 설정 프로젝트와 GPTs 자동화를 통해 혁신하는 사내 AI 특화 추진체입니다.";
      } else if (question.includes("로컬 Gemma4 설정")) {
        reply = "로컬에서 Gemma4:e2b를 구동하려면 Ollama 설치 후 'ollama pull gemma4:e2b' 명령을 실행하고, 프로젝트 루트의 [antigravity.config.json](file:///c:/Users/sunghyun/Desktop/gemma4%20test/antigravity.config.json)을 연결하시면 됩니다.";
      } else if (question.includes("자동화 에이전트 구축")) {
        reply = "본 사이트 Chapter 2의 4대 에이전트 카드를 클릭해 보세요! 실제 복사해서 적용할 수 있는 브랜드 가이드라인 프롬프트, OpenAPI 스키마, 그리고 단계별 연동 가이드가 완벽히 내재되어 있습니다.";
      }

      setChatbotMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  // Generate dynamic JSON Config for User Division Quiz
  const downloadQuizConfig = () => {
    const customConfig = {
      userDivision,
      recommendedModel: "gemma4:e2b",
      recommendedAPI: userPainPoint === "market" ? "Tavily Search API" : userPainPoint === "report" ? "Code Interpreter Sandbox" : userPainPoint === "quality" ? "Jira & Slack Webhook Connector" : "LG Marketing CMS Sync API",
      customSystemPrompt: `You are an AI assistant customized for LG Electronics ${userDivision} division. Address pain points related to ${userPainPoint === "market" ? "Competitor Market Tracking" : userPainPoint === "report" ? "Executive Document Summarization" : userPainPoint === "quality" ? "Quality Anomaly Alert Automations" : "Premium Product Copy Writing"}. Output in LG official business template format.`
    };

    const blob = new Blob([JSON.stringify(customConfig, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lg_gpt_config_${userDivision.toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleModalCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setModalCopied(true);
    setTimeout(() => setModalCopied(false), 2000);
  };

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-[#121212] text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}>
      
      {/* GNB (Header) */}
      <header className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${darkMode ? "border-neutral-800 bg-[#121212]/90" : "border-lg-grey-medium bg-white/90"} backdrop-blur-md`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-lg-red animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="font-extrabold text-sm tracking-wider sm:text-base">
              <span className="text-lg-red">SATBYEAL</span> ADVISORY GROUP{" "}
              <span className={`font-medium ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>5th</span>
            </span>
          </div>

          <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold ${darkMode ? "text-neutral-300" : "text-[#515154]"}`}>
            <Link href="#project" className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4">프로젝트</Link>
            <Link href="#gpts" className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4">GPTs 에이전트</Link>
            <Link href="#quiz-intro" className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4">자가진단 퀴즈</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 ${darkMode ? "bg-neutral-800 border-neutral-700 text-yellow-400 hover:bg-neutral-700" : "bg-neutral-100 border-lg-grey-medium text-neutral-600 hover:bg-neutral-200"}`}
              title={darkMode ? "라이트 모드 켜기" : "다크 모드 켜기"}
            >
              {darkMode ? (
                // Sun Icon
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link
              href="#quiz-intro"
              className="inline-flex items-center justify-center rounded-lg bg-lg-red px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:scale-105 active:scale-95"
            >
              자가진단 시작
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden border-b transition-colors duration-300 ${darkMode ? "bg-neutral-950 border-neutral-900" : "bg-white border-lg-grey-medium"} py-20 lg:py-28`}>
        {/* Background Visual Graphic */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full max-w-[45%] h-[80%] opacity-10 lg:opacity-100 pointer-events-none">
          <Image
            src="/hero_3d_trophy.png"
            alt="Premium 3D Trophy Asset"
            width={600}
            height={600}
            priority
            className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:text-left text-center">
            <span className="inline-flex items-center rounded-full bg-lg-red/10 px-3.5 py-1 text-xs font-bold text-lg-red tracking-wider uppercase mb-6 animate-bounce">
              LG전자 임직원 및 임원진 실무 최적화
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
              샛별자문단 5기:
              <br />
              <span className="text-lg-red">프리미엄 AI 바이블 가이드</span>
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-lg lg:mx-0 mx-auto ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
              최첨단 AI 인텔리전스로 데이터와 업무 비효율 한계를 극복합니다. 직관적인 UI 가이드와 실무 동작 코드, 즉시 활용 가능한 시스템 프롬프트 및 OpenAPI 스키마를 탑재해 지금 바로 현업에 적용하세요.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#project"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lg-red px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:-translate-y-0.5"
              >
                가이드 가기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#quiz-intro"
                className={`inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-sm sm:text-base font-bold transition-all duration-300 ${darkMode ? "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-800" : "border-lg-grey-medium bg-white/60 text-lg-grey-dark hover:bg-lg-grey-light hover:text-black"}`}
              >
                자가 진단 퀴즈
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 01: Projects */}
      <section id="project" className={`py-20 lg:py-24 border-b transition-colors duration-300 ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-md bg-lg-red/10 px-3 py-1 text-xs font-extrabold text-lg-red tracking-wider uppercase mb-4">
              CHAPTER 01: AI 설정 프로젝트
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              구조화된 맥락(XML) 설계 가이드
            </h2>
            <p className={`text-base sm:text-lg ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
              LG전자 임직원이 보고서 작성, 시장 분석, 품질 데이터 검토 시 LLM의 맥락 유실과 요약 잘림 현상을 철저히 방지하기 위해 XML 형태의 데이터 구조화를 적용합니다.
            </p>
          </div>

          {/* Before & After Visual Component */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Before Card */}
            <div className={`p-8 rounded-3xl border transition-colors duration-300 ${darkMode ? "bg-neutral-950/40 border-red-950/20" : "bg-[#fff5f5] border-red-100"} relative overflow-hidden shadow-inner`}>
              <div className="absolute top-4 right-4 bg-red-600/15 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full">비효율적 사용 (Before)</div>
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                XML 미지정 및 비체계적 텍스트 입력
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                글로벌 가전 시장 분석 리포트를 일반 텍스트 문단으로 무작위 복사-붙여넣기하여 LLM에 프롬프팅하는 경우:
              </p>
              <ul className={`text-sm list-disc pl-5 space-y-2 mb-4 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                <li>어느 영역이 시장 추이 데이터이고, 어느 부분이 요구사항인지 혼동하여 환각(Hallucination) 유발.</li>
                <li>H&A, HE 등 사업본부 구분이 엉켜서 엉뚱한 분석 도출.</li>
                <li>대용량 데이터를 넣을 때 맥락 경계 인식이 둔화되어 핵심 보고 요약이 중간에 생략되거나 잘림.</li>
              </ul>
              <div className={`p-4 rounded-xl border font-mono text-xs ${darkMode ? "bg-neutral-900 border-neutral-800 text-red-400" : "bg-white border-red-200 text-red-600"}`}>
                "아래 시장조사내용 대충 요약하고 LG전자에 맞게 적어줘. [시장내용 복사붙여넣기...]"
              </div>
            </div>

            {/* After Card */}
            <div className={`p-8 rounded-3xl border transition-colors duration-300 ${darkMode ? "bg-neutral-950/40 border-emerald-950/20" : "bg-[#f5fbf8] border-emerald-100"} relative overflow-hidden shadow-inner`}>
              <div className="absolute top-4 right-4 bg-emerald-600/15 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full">샛별 구조화 가이드 (After)</div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                XML 구조화 데이터 컨텍스트 공급
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                데이터를 태그별로 분류하고, 명확한 System Prompt와 연결하여 컨텍스트 경계를 보장하는 경우:
              </p>
              <ul className={`text-sm list-disc pl-5 space-y-2 mb-4 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                <li>데이터의 시작과 끝이 명확해져 무관한 텍스트 노이즈 자동 배제.</li>
                <li>H&A, HE, VS 본부별 요구 템플릿에 맞추어 의사결정 시사점이 3줄 이내 요약으로 정확히 산출됨.</li>
                <li>대량의 리서치 결과 파일도 누락 없이 정교하게 매핑하여 맥락 완전성 98% 보장.</li>
              </ul>
              <div className={`p-4 rounded-xl border font-mono text-xs ${darkMode ? "bg-neutral-900 border-neutral-800 text-emerald-400" : "bg-white border-emerald-200 text-emerald-600"}`}>
                {"<market_data>\n  <he_division>[HE 스마트TV 시장 분석데이터...]</he_division>\n</market_data>"}
              </div>
            </div>
          </div>

          {/* Interactive Playground Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Setting Side */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Context Mode Prompt Playground</h3>
              <p className={`text-sm leading-relaxed mb-8 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                작업 성격과 전송할 어조를 선택하면, 로컬 Ollama/Gemma 환경 또는 클라우드 API 프로젝트에서 **그대로 실행할 수 있는 TypeScript 커넥터 코드와 시스템 프롬프트**를 동적으로 구성합니다.
              </p>

              {/* Setting Controls */}
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-lg-red block mb-3">1. 작업 유형 선택 (Task Type)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "qa", label: "의사결정 보고" },
                      { id: "translate", label: "마케팅 현지화" },
                      { id: "sql", label: "지표 DB 조회" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setAppType(btn.id as AppType)}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${appType === btn.id ? "bg-lg-red text-white border-lg-red" : darkMode ? "bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700" : "bg-white border-lg-grey-medium text-neutral-700 hover:bg-lg-grey-light"}`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-lg-red block mb-3">2. 출력 어조 선택 (Tone/Style)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "pro", label: "공식 보고체 (Pro)" },
                      { id: "creative", label: "친근한 가치 (F.U.N)" },
                      { id: "short", label: "3줄 단문 요약" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setTone(btn.id as ToneType)}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${tone === btn.id ? "bg-lg-red text-white border-lg-red" : darkMode ? "bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700" : "bg-white border-lg-grey-medium text-neutral-700 hover:bg-lg-grey-light"}`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Output Side */}
            <div className="lg:col-span-7">
              <div className={`relative overflow-hidden rounded-3xl border shadow-lg ${darkMode ? "border-neutral-800 bg-neutral-950" : "border-lg-grey-medium bg-neutral-900"}`}>
                <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-xs font-mono font-bold text-neutral-400 ml-2">ollama_context_connector.ts</span>
                  </div>
                  <button
                    onClick={handlePlaygroundCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                  >
                    {playgroundCopied ? (
                      <span className="text-emerald-500 font-bold">복사 완료!</span>
                    ) : (
                      <>
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        코드 복사
                      </>
                    )}
                  </button>
                </div>
                
                {/* Code Window */}
                <div className="p-6 overflow-x-auto">
                  <pre className="text-xs font-mono text-emerald-400 leading-relaxed whitespace-pre font-medium">
                    <code>{getPlaygroundCode()}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Chapter 02: GPTs */}
      <section id="gpts" className={`py-20 lg:py-24 transition-colors duration-300 ${darkMode ? "bg-neutral-950" : "bg-lg-grey-light"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-md bg-lg-red/10 px-3 py-1 text-xs font-extrabold text-lg-red tracking-wider uppercase mb-4">
              CHAPTER 02: GPTs 에이전트 바이블
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              사내 업무 자동화 4대 핵심 에이전트
            </h2>
            <p className={`text-base sm:text-lg ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
              각 에이전트의 상세 카드를 열어 **도입 전/후 비포 에프터 비교**, 복사해서 GPTs에 등록할 **최적화 시스템 프롬프트** 및 **외부 연동 OpenAPI 스키마**를 즉시 취득하세요.
            </p>
          </div>

          {/* 4 Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Writer */}
            <div className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">라이터 (Writer)</h3>
                <span className="text-xs font-bold text-lg-red block mb-3">HE/H&A 마케팅</span>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  LG 프리미엄 브랜드 아이덴티티와 F.U.N 가치를 살리는 프리미엄 상품 소개 및 보도자료 작성.
                </p>
              </div>
              <button
                onClick={() => { setSelectedAgent("writer"); setActiveTab("beforeAfter"); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                가이드 가기
                <span>→</span>
              </button>
            </div>

            {/* Researcher */}
            <div className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">리서처 (Researcher)</h3>
                <span className="text-xs font-bold text-lg-red block mb-3">전사 기획 및 사업본부</span>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  경쟁사(삼성, 소니 등) 특허 기술 및 최신 업계 동향 데이터를 실시간 수집 및 일간 3줄 핵심 보고.
                </p>
              </div>
              <button
                onClick={() => { setSelectedAgent("researcher"); setActiveTab("beforeAfter"); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                가이드 가기
                <span>→</span>
              </button>
            </div>

            {/* Analyst */}
            <div className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">애널리스트 (Analyst)</h3>
                <span className="text-xs font-bold text-lg-red block mb-3">전사 데이터 및 마케팅</span>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  글로벌 TV 시장 및 판매 지표 엑셀/CSV를 기반으로 한 고품질 파이썬 플롯 차트 생성 및 이상치 보고.
                </p>
              </div>
              <button
                onClick={() => { setSelectedAgent("analyst"); setActiveTab("beforeAfter"); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                가이드 가기
                <span>→</span>
              </button>
            </div>

            {/* Automator */}
            <div className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">오토메이터 (Automator)</h3>
                <span className="text-xs font-bold text-lg-red block mb-3">VS사업본부 품질관리</span>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  전장 부품 품질오차 티켓 발행 시, GPTs Action 웹훅으로 품질 관리 슬랙 채널 즉각 전송 자동화.
                </p>
              </div>
              <button
                onClick={() => { setSelectedAgent("automator"); setActiveTab("beforeAfter"); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                가이드 가기
                <span>→</span>
              </button>
            </div>

          </div>

          {/* Large Robots Banner Illustration */}
          <div className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-12 shadow-md transition-colors duration-300 ${darkMode ? "border-neutral-800 bg-neutral-900" : "border-lg-grey-medium bg-white"}`}>
            <div className="relative z-10 max-w-xl mb-8">
              <span className="text-xs font-bold text-lg-red tracking-wider uppercase mb-2 block">
                EPISODE 2: GPTs 에이전트 로드맵
              </span>
              <p className={`text-sm sm:text-base font-semibold leading-relaxed ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
                업무 환경에 최적화된 독립된 맞춤형 지능형 비서 로봇을 구축하여 부서의 품질, 속도, 정확도를 한번에 극대화하세요.
              </p>
            </div>
            <div className="w-full h-auto rounded-2xl overflow-hidden shadow-inner border border-lg-grey-light">
              <Image
                src="/chapter2_robots.png"
                alt="5 Cute Red Helper Robots"
                width={1200}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Onboarding Diagnostic Tool */}
      <section id="quiz-intro" className="py-20 lg:py-24 bg-white border-t border-b transition-colors duration-300 border-lg-grey-medium">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-lg-grey-medium bg-white p-8 sm:p-16 text-center shadow-lg">
            {/* Top Logo Mark */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1.5 rounded-full border border-lg-grey-medium bg-lg-grey-light px-4 py-1.5">
                <svg className="h-4 w-4 text-lg-red" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xs font-bold text-[#1d1d1f]">부서 맞춤형 자가진단</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
              우리 부서 AI 설정 & GPTs 진단 받기
            </h2>
            <p className="text-base sm:text-lg text-lg-grey-dark leading-relaxed mb-10 max-w-2xl mx-auto">
              현재 근무 중이신 사업본부 소속과 당면한 가장 큰 업무 비효율 영역을 선택하세요. 진단 결과에 맞추어 **실제 로드하여 즉시 사용 가능한 커스텀 GPTs 구성 설정파일(JSON)**을 제공해 드립니다.
            </p>
            <div>
              <button
                onClick={() => { setQuizOpen(true); setQuizStep(1); setQuizResultFileReady(false); }}
                className="inline-flex items-center justify-center rounded-xl bg-lg-red px-8 py-4 text-base font-bold text-white shadow-lg shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:scale-105 active:scale-95"
              >
                자가진단 시작하기
              </button>
            </div>

            {/* Premium Subtle Border Glow */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-lg-red via-rose-500 to-lg-red" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t bg-white py-12 lg:py-16 transition-colors duration-300 ${darkMode ? "bg-neutral-950 border-neutral-900" : "border-lg-grey-medium"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-lg font-black tracking-wider text-lg-red block mb-1">
                SATBYEAL
              </span>
              <span className={`text-sm font-semibold ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
                가장 스마트한 AI 파트너, 샛별자문단 5기
              </span>
            </div>

            <div className={`flex flex-wrap justify-center gap-6 text-sm font-semibold ${darkMode ? "text-neutral-400" : "text-lg-grey-dark"}`}>
              <Link href="#project" className="transition-colors hover:text-black">회사소개</Link>
              <Link href="#" className="transition-colors hover:text-black">개인정보처리방침</Link>
              <Link href="#" className="transition-colors hover:text-black">이용약관</Link>
              <Link href="#" className="transition-colors hover:text-black">Contact</Link>
              <button onClick={() => { setQuizOpen(true); setQuizStep(1); }} className="transition-colors hover:text-lg-red">자가진단 시작</button>
            </div>

            <div className={`text-xs ${darkMode ? "text-neutral-500" : "text-lg-grey-dark"}`}>
              © 2026 SATBYEAL ADVISORY GROUP. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modal - Agent Detail Guide (Chapter 2) */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 transition-colors duration-300 ${darkMode ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-lg-grey-medium text-[#1d1d1f]"}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-6 transition-colors duration-300 border-neutral-800">
              <div>
                <h3 className="text-2xl font-black">{agentSpecs[selectedAgent].title}</h3>
                <span className="text-xs font-bold text-lg-red mt-1 block">소속: {agentSpecs[selectedAgent].division}</span>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-neutral-800 mb-6 gap-4 text-sm font-semibold overflow-x-auto whitespace-nowrap">
              {[
                { id: "beforeAfter", label: "비포 & 애프터 비교" },
                { id: "prompt", label: "System Prompt (지시문)" },
                { id: "schema", label: "API Action Schema (스키마)" },
                { id: "guide", label: "GPTs 등록 가이드" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 transition-colors relative ${activeTab === tab.id ? "text-lg-red" : "text-neutral-500 hover:text-neutral-300"}`}
                >
                  {tab.label}
                  {activeTab === tab.id && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-lg-red" />}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="mb-8 min-h-[300px]">
              
              {/* Tab 1: Before & After */}
              {activeTab === "beforeAfter" && (
                <div className="space-y-6">
                  {/* Before */}
                  <div className={`p-5 rounded-2xl border ${darkMode ? "bg-neutral-950/40 border-red-950/20" : "bg-red-50/50 border-red-100"}`}>
                    <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      도입 전 실무 현황 (Before)
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-400">{agentSpecs[selectedAgent].before}</p>
                  </div>

                  {/* After */}
                  <div className={`p-5 rounded-2xl border ${darkMode ? "bg-neutral-950/40 border-emerald-950/20" : "bg-emerald-50/50 border-emerald-100"}`}>
                    <h4 className="text-sm font-bold text-emerald-600 mb-2 flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      도입 후 비즈니스 가치 (After)
                    </h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-neutral-300">{agentSpecs[selectedAgent].after}</p>
                  </div>

                  {/* Live Simulation Runner */}
                  <div className={`p-5 rounded-2xl border ${darkMode ? "bg-neutral-950/60 border-neutral-800" : "bg-neutral-100 border-lg-grey-medium"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-lg-red">에이전트 동작 시뮬레이션</h4>
                      <button
                        onClick={() => { setSimulationRunning(true); }}
                        disabled={simulationRunning}
                        className="bg-lg-red hover:bg-red-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                      >
                        {simulationRunning ? "작업 처리 중..." : "시뮬레이션 실행"}
                      </button>
                    </div>

                    {/* Console Logger */}
                    <div className="bg-black rounded-xl p-4 font-mono text-xs text-neutral-300 min-h-[120px] max-h-[200px] overflow-y-auto space-y-1">
                      {simulationLogs.map((log, i) => (
                        <div key={i} className="animate-fadeIn">{log}</div>
                      ))}
                      {simulationResult && (
                        <div className="text-emerald-400 mt-3 border-t border-neutral-800 pt-3 whitespace-pre-line animate-fadeIn">
                          [출력 결과 완료]<br />
                          {simulationResult}
                        </div>
                      )}
                      {!simulationRunning && simulationLogs.length === 0 && (
                        <div className="text-neutral-600">위 버튼을 눌러 시뮬레이션을 시작하세요.</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: System Prompt */}
              {activeTab === "prompt" && (
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-lg-red uppercase">GPTs Instructions</span>
                    <button
                      onClick={() => handleModalCopy(agentSpecs[selectedAgent].prompt)}
                      className="inline-flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border border-neutral-700"
                    >
                      {modalCopied ? "복사 완료!" : "프롬프트 복사"}
                    </button>
                  </div>
                  <pre className="bg-black/80 rounded-xl p-5 font-mono text-xs text-emerald-400 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto border border-neutral-800">
                    <code>{agentSpecs[selectedAgent].prompt}</code>
                  </pre>
                </div>
              )}

              {/* Tab 3: OpenAPI Schema */}
              {activeTab === "schema" && (
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-lg-red uppercase">OpenAPI Specification (JSON)</span>
                    <button
                      onClick={() => handleModalCopy(agentSpecs[selectedAgent].schema)}
                      className="inline-flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border border-neutral-700"
                    >
                      {modalCopied ? "복사 완료!" : "스키마 복사"}
                    </button>
                  </div>
                  <pre className="bg-black/80 rounded-xl p-5 font-mono text-xs text-blue-400 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto border border-neutral-800">
                    <code>{agentSpecs[selectedAgent].schema}</code>
                  </pre>
                </div>
              )}

              {/* Tab 4: Step-by-Step Guide */}
              {activeTab === "guide" && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-lg-red uppercase block mb-2">GPTs 설정 매뉴얼</span>
                  <div className="space-y-3">
                    {agentSpecs[selectedAgent].guide.map((step, i) => (
                      <div key={i} className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? "bg-neutral-950/40 border-neutral-800" : "bg-neutral-50 border-lg-grey-medium"}`}>
                        <div className="h-6 w-6 rounded-full bg-lg-red/10 text-lg-red font-bold text-xs flex items-center justify-center shrink-0">{i+1}</div>
                        <p className="text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="flex justify-end border-t pt-4 transition-colors duration-300 border-neutral-800">
              <button
                onClick={() => setSelectedAgent(null)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal - Onboarding Diagnostic Quiz (CTA) */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl p-6 sm:p-8 transition-colors duration-300 ${darkMode ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-lg-grey-medium text-[#1d1d1f]"}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-6 transition-colors duration-300 border-neutral-800">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <svg className="h-5 w-5 text-lg-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                AI 자가진단 및 커스텀 구성기 (Step {quizStep} of 3)
              </h3>
              <button
                onClick={() => setQuizOpen(false)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quiz Step 1: Division Selection */}
            {quizStep === 1 && (
              <div className="space-y-6">
                <label className="text-sm font-semibold block">현재 소속해 계신 사업본부를 선택하세요:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: "H&A", label: "H&A사업본부 (가전)" },
                    { id: "HE", label: "HE사업본부 (TV)" },
                    { id: "VS", label: "VS사업본부 (전장)" },
                    { id: "BS", label: "BS사업본부 (B2B)" },
                    { id: "HQ", label: "본사 (HQ / CTO)" }
                  ].map((div) => (
                    <button
                      key={div.id}
                      onClick={() => setUserDivision(div.id)}
                      className={`p-4 rounded-xl border font-bold text-sm text-center transition-all ${userDivision === div.id ? "bg-lg-red text-white border-lg-red" : darkMode ? "bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700" : "bg-white border-lg-grey-medium text-neutral-700 hover:bg-lg-grey-light"}`}
                    >
                      {div.label}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setQuizStep(2)}
                    className="bg-lg-red hover:bg-red-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                  >
                    다음 단계
                  </button>
                </div>
              </div>
            )}

            {/* Quiz Step 2: Pain Point Selection */}
            {quizStep === 2 && (
              <div className="space-y-6">
                <label className="text-sm font-semibold block">업무 중 가장 시간이 오래 걸리는 병목 영역을 고르세요:</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "market", label: "해외 매체 및 경쟁사 제품 출시 동향 서칭 및 모니터링" },
                    { id: "report", label: "일간/주간 매출 및 사업본부 판매 지표 데이터 취합 및 차트화" },
                    { id: "quality", label: "결함 이슈 발생 시 유관 부서 전파 및 이메일 수동 알림" },
                    { id: "writing", label: "프리미엄 제품 보도자료 및 가이드 마케팅 문구 초안 작성" }
                  ].map((pain) => (
                    <button
                      key={pain.id}
                      onClick={() => setUserPainPoint(pain.id)}
                      className={`p-4 rounded-xl border font-bold text-sm text-left transition-all ${userPainPoint === pain.id ? "bg-lg-red text-white border-lg-red" : darkMode ? "bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700" : "bg-white border-lg-grey-medium text-neutral-700 hover:bg-lg-grey-light"}`}
                    >
                      {pain.label}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setQuizStep(1)}
                    className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                  >
                    이전 단계
                  </button>
                  <button
                    onClick={() => setQuizStep(3)}
                    className="bg-lg-red hover:bg-red-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                  >
                    다음 단계
                  </button>
                </div>
              </div>
            )}

            {/* Quiz Step 3: Email Input & File Gen */}
            {quizStep === 3 && (
              <div className="space-y-6">
                <label className="text-sm font-semibold block">진단 리포트 및 GPTs 설정 JSON 파일을 받아보실 사내 이메일을 입력하세요:</label>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="example@lge.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className={`w-full p-4 rounded-xl border font-mono text-sm focus:outline-none focus:ring-2 focus:ring-lg-red ${darkMode ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-lg-grey-medium"}`}
                  />
                </div>
                {quizResultFileReady ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-bold text-center">
                    🎉 분석 진단 결과 생성 완료! 아래 다운로드 버튼을 눌러 JSON 설정 파일을 취득하세요.
                  </div>
                ) : null}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setQuizStep(2)}
                    className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                  >
                    이전 단계
                  </button>
                  {quizResultFileReady ? (
                    <button
                      onClick={downloadQuizConfig}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                    >
                      JSON 설정 파일 다운로드
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (!userEmail.includes("@")) {
                          alert("유효한 이메일 주소를 입력해 주세요!");
                          return;
                        }
                        setQuizResultFileReady(true);
                      }}
                      className="bg-lg-red hover:bg-red-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
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

      {/* Floating Chatbot Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatbotOpen && (
          <div className={`w-[360px] h-[480px] rounded-3xl border shadow-2xl flex flex-col mb-4 overflow-hidden transition-all duration-300 animate-fadeIn ${darkMode ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-lg-grey-medium text-[#1d1d1f]"}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between bg-lg-red px-5 py-4 text-white">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="font-bold text-sm">LG전자 샛별 AI 도우미</span>
              </div>
              <button onClick={() => setChatbotOpen(false)} className="text-white hover:opacity-85">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className={`flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed ${darkMode ? "bg-neutral-950" : "bg-neutral-50"}`}>
              {chatbotMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-2xl max-w-[80%] ${msg.sender === "user" ? "bg-lg-red text-white" : darkMode ? "bg-neutral-800 text-neutral-200" : "bg-white border border-lg-grey-medium text-neutral-800"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`p-3 rounded-2xl ${darkMode ? "bg-neutral-800" : "bg-white border border-lg-grey-medium"}`}>
                    <span className="animate-pulse">답변을 타이핑하고 있습니다...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Preset Help Questions */}
            <div className={`px-4 py-2 flex flex-wrap gap-1.5 border-t ${darkMode ? "bg-neutral-900 border-neutral-850" : "bg-white border-lg-grey-medium"}`}>
              {[
                "샛별자문단 5기는?",
                "로컬 Gemma4 설정",
                "자동화 에이전트 구축"
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => sendQuickQuestion(q)}
                  className={`text-[10px] font-bold py-1 px-2.5 rounded-full border transition-all ${darkMode ? "border-neutral-700 hover:border-neutral-500 bg-neutral-800 text-neutral-300" : "border-lg-grey-medium hover:border-black bg-neutral-100 text-neutral-700"}`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleChatbotSubmit} className={`p-3 border-t flex gap-2 ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-lg-grey-medium"}`}>
              <input
                type="text"
                name="chatInput"
                placeholder="질문을 입력하세요..."
                className={`flex-1 px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-lg-red ${darkMode ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-lg-grey-medium"}`}
              />
              <button type="submit" className="bg-lg-red hover:bg-red-800 text-white rounded-xl px-4 text-xs font-bold transition-colors">
                전송
              </button>
            </form>

          </div>
        )}

        {/* Float Toggle Button */}
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="h-14 w-14 rounded-full bg-lg-red text-white flex items-center justify-center shadow-2xl hover:bg-red-800 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

    </div>
  );
}
