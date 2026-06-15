"use client";

import { useState, useEffect, useRef } from "react";

// Types
type PageType = "home" | "part1" | "part2";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function Home() {
  // Theme and Page Routing States
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Copy success states
  const [mktReviewerCopied, setMktReviewerCopied] = useState(false);
  const [meetingSummaryCopied, setMeetingSummaryCopied] = useState(false);
  const [contentCreatorCopied, setContentCreatorCopied] = useState(false);
  
  const [magEditorCopied, setMagEditorCopied] = useState(false);
  const [reviewBotCopied, setReviewBotCopied] = useState(false);
  const [snsCopyCopied, setSnsCopyCopied] = useState(false);

  // Onboarding Quiz States
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

  // Dark/Light Mode Toggle Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // GNB Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reading Progress bar effect
  useEffect(() => {
    const handleReadingScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById("readingProgress");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };
    window.addEventListener("scroll", handleReadingScroll);
    return () => window.removeEventListener("scroll", handleReadingScroll);
  }, []);

  // Auto scroll for chatbot
  useEffect(() => {
    if (chatbotEndRef.current) {
      chatbotEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatbotMessages, isTyping]);

  // Page Change Scroll Reset
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyText = async (text: string, type: "mkt" | "meeting" | "creator" | "mag" | "review" | "sns") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "mkt") {
        setMktReviewerCopied(true);
        setTimeout(() => setMktReviewerCopied(false), 2000);
      } else if (type === "meeting") {
        setMeetingSummaryCopied(true);
        setTimeout(() => setMeetingSummaryCopied(false), 2000);
      } else if (type === "creator") {
        setContentCreatorCopied(true);
        setTimeout(() => setContentCreatorCopied(false), 2000);
      } else if (type === "mag") {
        setMagEditorCopied(true);
        setTimeout(() => setMagEditorCopied(false), 2000);
      } else if (type === "review") {
        setReviewBotCopied(true);
        setTimeout(() => setReviewBotCopied(false), 2000);
      } else if (type === "sns") {
        setSnsCopyCopied(true);
        setTimeout(() => setSnsCopyCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
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
      let reply = "";
      const q = text.toLowerCase();
      if (q.includes("5기") || q.includes("샛별") || q.includes("satbyeal")) {
        reply = "샛별자문단 5기는 LG전자 임직원들이 생성형 AI를 영구적인 사내 업무 지식 자산으로 전환하도록 돕는 가이드 매거진 제작 협의체입니다. 경영진과 실무진 모두 실질적 업무 효율을 낼 수 있도록 실전에 즉시 활용 가능한 Projects 및 GPTs 워크플로우를 제공합니다.";
      } else if (q.includes("프로젝트") || q.includes("project") || q.includes("차이")) {
        reply = "1편의 'ChatGPT Projects'는 다수의 문서를 올려놓고 여러 팀원들과 함께 맥락을 공유하며 채팅방(Thread)을 나누어 협업하는 '종합 가상 기획 사무실'입니다. 반면 2편의 'Custom GPTs'는 특정 단일 직무(예: 카피 생성, 실시간 시장 리서치, 엑셀 시각화)를 사전에 입력해둔 프롬프트와 외부 OpenAPI(Actions)에 연결하여 고속 반복 수행하는 '직무 자동화 미니 앱'입니다.";
      } else if (q.includes("before") || q.includes("after") || q.includes("효과") || q.includes("비포")) {
        reply = "설정을 하지 않은 'Before' 상태에서는 동일한 설정 파일이나 엑셀 데이터를 매 대화 세션마다 업로드하고, 긴 프롬프트를 매번 복사해 붙여넣어야 합니다. 반면 설정을 마친 'After' 상태에서는 단 한 번의 파일 등록과 지침 고정으로, 한글 키워드 한 단어만 입력해도 완벽한 결과물이 즉시 출력되거나 백그라운드 자동화(Actions)가 실행됩니다.";
      } else if (q.includes("api") || q.includes("action") || q.includes("액션") || q.includes("연동")) {
        reply = "GPTs 생성 화면의 [Configure] -> [Actions] -> [Create New Action]을 선택하고, 저희 매거진 2편에서 제공하는 Google, YouTube, Naver Search 등의 OpenAPI JSON 스키마를 붙여넣으십시오. 발급받으신 API 인증 키를 헤더 또는 쿼리에 연동하면 GPTs가 최신 웹 자료를 실시간 수집할 수 있게 됩니다.";
      } else {
        reply = `'${text}'에 대해 답변해 드립니다. LG전자 업무 환경에서 ChatGPT Projects는 데이터 유출 방지 조치와 파일 20개 통합 관리에 매우 뛰어나며, GPTs는 OpenAPI Actions 연동을 통해 수동 리서치를 획기적으로 줄여줍니다. 상세 단계는 본 매거진의 1편과 2편 상단 클릭형 메뉴를 이동하여 복사 가능한 프롬프트 및 예제 스키마를 확인하십시오.`;
      }
      setChatbotMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen text-on-surface bg-background dark:bg-[#0A0A0B] dark:text-[#E4E4E7] selection:bg-primary-fixed selection:text-on-primary-fixed transition-colors duration-300">
      <div className="progress-bar" id="readingProgress"></div>

      {/* 1. Header (Stitch TopNavBar Navigation) */}
      <header className="bg-surface/80 dark:bg-[#0A0A0B]/80 glass-header sticky top-0 z-50 border-b border-border-subtle dark:border-neutral-900">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto w-full gap-8">
          <div className="flex items-center gap-stack-lg cursor-pointer" onClick={() => handlePageChange("home")}>
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLu8Vt5TpO_SGuz4XcD2GmHjdQRrXwbUELgiWj1U2tNGD0Cy-gmmHBd2P4iZHVVpCZ4L7hmYrOCA6FS4MPbyO2X6oYe8EQHdg3lyhA9SSeduoeI1yhQxPhPjTwIiZhWIIEKSqbypdaKpMri1qbyfCwXWl0jRsS3Szx7F6_RFHmYOTFsvwGxgQQx04hVBv9YMeoHQtWK7W7tErRURgz62jYCydxEiOKDpkHBSZu6CuXXaurS8YT1bkrETGQ" 
              alt="LG AI Advisory Logo" 
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <button 
              onClick={() => handlePageChange("home")}
              className={`font-headline-md text-headline-md transition-colors cursor-pointer ${
                currentPage === "home" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              홈
            </button>
            <button 
              onClick={() => handlePageChange("part1")}
              className={`font-headline-md text-headline-md transition-colors cursor-pointer ${
                currentPage === "part1" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              프로젝트
            </button>
            <button 
              onClick={() => handlePageChange("part2")}
              className={`font-headline-md text-headline-md transition-colors cursor-pointer ${
                currentPage === "part2" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              GPTs
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full hover:bg-surface-container dark:hover:bg-neutral-800 text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
              {darkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setQuizOpen(true)}
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg hover:bg-primary-container transition-all active:scale-95 duration-200 cursor-pointer"
            >
              Get Advisory
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Page Views Routing */}
      <main className="w-full">

        {/* ==================== HOME VIEW ==================== */}
        {currentPage === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden flex items-center bg-black">
              <div className="absolute inset-0 opacity-80">
                <img 
                  alt="LG AI Advisory Banner" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
              <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-white text-left space-y-6">
                <span className="inline-block bg-primary text-white font-label-lg px-4 py-1.5 rounded-sm uppercase tracking-widest text-xs">
                  Premium Advisory Group
                </span>
                <h1 className="font-display-lg text-display-lg leading-tight tracking-tight">
                  샛별 AI 가이드<br />매거진
                </h1>
                <p className="font-body-lg text-body-lg text-surface-container-low max-w-lg font-light leading-relaxed">
                  LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드. 복잡한 기술을 넘어 당신의 업무를 가속화하는 실제적인 인사이트를 제공합니다.
                </p>
                <div className="flex gap-4 pt-2">
                  <button 
                    onClick={() => handlePageChange("part1")}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-headline-md flex items-center gap-2 hover:bg-primary-container transition-all group cursor-pointer shadow-lg shadow-primary/20"
                  >
                    가이드 보기
                    <span className="text-sm group-hover:translate-x-1 transition-transform">➔</span>
                  </button>
                  <button 
                    onClick={() => setQuizOpen(true)}
                    className="border border-white/30 backdrop-blur-md text-white hover:bg-white/10 px-8 py-4 rounded-lg font-headline-md transition-all cursor-pointer"
                  >
                    구독하기
                  </button>
                </div>
              </div>
            </section>

            {/* Bento Grid Episodes */}
            <section className="max-w-container-max mx-auto px-margin-desktop py-stack-xl space-y-16">
              <div className="text-left space-y-2">
                <h2 className="font-headline-xl text-headline-xl text-on-surface">실무를 위한 에피소드</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">가장 먼저 시작해야 할 AI 워크플로우의 핵심</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
                {/* Episode 1 Card */}
                <article className="flex flex-col bg-surface-container-lowest dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 overflow-hidden card-hover-effect rounded-lg">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      alt="Episode 1 Projects illustration" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" 
                      src="https://lh3.googleusercontent.com/aida/AP1WRLuALUCjCKnBtSE9KDghASZr4e1GSw1MkcQIVTpRUio633vSLj42S81X-GfvU9xVXDR-CfZa9ZGpiXbA8xax50ocQIuj4moXTmXjVVWnwWXUon9hDB-RxQd2gu7Ioo9lynOMYcqdcBIEQNL4l0M4NLToopDxkjmx9Xu0h5c6gFju0_8X5JxrZv-k2WWp2OQDOMJHB6MBBewfjZ_P1FazgyODaWoTj8zVV9In5Ql3iAvuySIEc2McUOs1MKc" 
                    />
                  </div>
                  <div className="p-stack-lg flex flex-col flex-grow text-left space-y-4 justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold font-label-lg">EPISODE 01</span>
                        <span className="w-1 h-1 rounded-full bg-border-subtle dark:bg-neutral-800"></span>
                        <span className="text-on-surface-variant font-label-lg">PROJECTS</span>
                      </div>
                      <h3 className="font-headline-lg text-headline-lg leading-tight text-on-surface dark:text-white">
                        AI가 바로 일할 수 있는 작업방 만들기: 프로젝트
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                        효과적인 AI 활용의 시작은 맥락(Context)을 구조화하는 것부터 시작됩니다. 슬랙 채널처럼 체계화된 데이터 환경을 구축하여 AI가 기업 특유의 언어와 프로세스를 완벽히 이해하도록 만드는 법을 공개합니다.
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto border-t border-border-subtle dark:border-neutral-850 pt-stack-md">
                      <span className="font-label-sm text-text-muted text-xs">6 min read</span>
                      <button 
                        onClick={() => handlePageChange("part1")}
                        className="text-primary font-bold flex items-center gap-1 group cursor-pointer hover:underline text-xs"
                      >
                        이동하기 ➔
                      </button>
                    </div>
                  </div>
                </article>

                {/* Episode 2 Card */}
                <article className="flex flex-col bg-surface-container-lowest dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 overflow-hidden card-hover-effect rounded-lg">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      alt="Episode 2 GPTs illustration" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" 
                      src="https://lh3.googleusercontent.com/aida/AP1WRLsjGuYSnjyVmFHbN_Nqh3iEcYOL9ob3PnC4GD-XHScS8IuJpmBejSMJr0UgYBlpp49EXtZvIUzZPj2r3XP858lApo4SYSiT6cHd9HLz2P8SjILQZtaiuL4UPxHsCLapckd9EJv4t-z_jSv7gvc2Zyx2jSEr6tR_DxaHafw2yl1JR2sUNtGdVbA8ZzI2JBZHshjOCuy_2sl24GewjJ7r9BIBXD1WSINqCK7zxxBLhUpSjQ090-hylVYTdt8" 
                    />
                  </div>
                  <div className="p-stack-lg flex flex-col flex-grow text-left space-y-4 justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold font-label-lg">EPISODE 02</span>
                        <span className="w-1 h-1 rounded-full bg-border-subtle dark:bg-neutral-800"></span>
                        <span className="text-on-surface-variant font-label-lg">GPTS</span>
                      </div>
                      <h3 className="font-headline-lg text-headline-lg leading-tight text-on-surface dark:text-white">
                        나만의 AI 비서 만들기: GPTs
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                        범용 AI를 넘어 당신의 특정 직무에 특화된 커스텀 에이전트를 구축하세요. 리서치, 기획서 작성, 코드 리뷰 등 반복되는 업무를 지능적으로 자동화하는 LG 샛별자문단만의 레시피를 제안합니다.
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto border-t border-border-subtle dark:border-neutral-850 pt-stack-md">
                      <span className="font-label-sm text-text-muted text-xs">8 min read</span>
                      <button 
                        onClick={() => handlePageChange("part2")}
                        className="text-primary font-bold flex items-center gap-1 group cursor-pointer hover:underline text-xs"
                      >
                        이동하기 ➔
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[#5f5e5e] dark:bg-[#1E1919] text-white py-20 text-center">
              <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col items-center space-y-6">
                <h2 className="font-headline-xl text-headline-xl">변화하는 AI 트렌드를 놓치지 마세요</h2>
                <p className="font-body-lg text-body-lg text-surface-container-low max-w-xl font-light">
                  매주 화요일, LG 샛별자문단이 엄선한 실무형 AI 케이스 스터디와 최신 프롬프트 엔지니어링 팁을 이메일로 보내드립니다.
                </p>
                <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 pt-2">
                  <input 
                    type="email" 
                    placeholder="이메일 주소를 입력하세요" 
                    className="flex-grow px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-primary-container text-white placeholder:text-white/50 text-sm font-normal"
                  />
                  <button 
                    onClick={() => alert("구독이 신청되었습니다!")}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container transition-all"
                  >
                    구독하기
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PROJECTS VIEW ==================== */}
        {currentPage === "part1" && (
          <div className="animate-fadeIn max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 space-y-24">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-xl bg-surface-container-low dark:bg-[#1A1818] border border-border-subtle dark:border-neutral-850">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-stack-lg lg:p-16 text-left space-y-6">
                  <span className="text-primary font-label-lg tracking-widest block">EPISODE 01</span>
                  <h1 className="font-headline-xl text-headline-xl">AI가 바로 일할 수 있는<br />작업방 만들기: 프로젝트</h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
                    매번 똑같은 상황 설명을 반복하고 계신가요? LG AI 자문단이 제안하는 최적의 작업 효율화 솔루션, '프로젝트' 기능을 소개합니다.
                  </p>
                </div>
                <div className="relative h-[300px] lg:h-[450px]">
                  <img 
                    alt="Premium AI Workspace Visual" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" 
                  />
                  <div className="absolute inset-0 hero-gradient dark:from-[#1A1818] dark:to-transparent"></div>
                </div>
              </div>
            </section>

            {/* 01 프로젝트란? */}
            <section className="text-left space-y-8">
              <div className="border-l-4 border-primary pl-4 space-y-1">
                <h2 className="font-headline-lg text-headline-lg">01 프로젝트란?</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">AI를 위한 전용 책상을 마련해주는 것과 같습니다.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#141416] p-8 rounded-xl border border-border-subtle dark:border-neutral-850 hover:shadow-lg transition-all space-y-4">
                  <span className="material-symbols-outlined text-primary text-4xl block">description</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">맞춤형 지침</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                    이 프로젝트에서 AI가 어떤 역할을 수행해야 하는지, 어떤 톤앤매너를 유지해야 하는지 미리 정의합니다.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#141416] p-8 rounded-xl border border-border-subtle dark:border-neutral-850 hover:shadow-lg transition-all space-y-4">
                  <span className="material-symbols-outlined text-primary text-4xl block">upload_file</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">지식 베이스</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                    관련 문서와 데이터를 업로드하여 AI가 맥락을 학습하게 합니다.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#141416] p-8 rounded-xl border border-border-subtle dark:border-neutral-850 hover:shadow-lg transition-all space-y-4">
                  <span className="material-symbols-outlined text-primary text-4xl block">history</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">대화 관리</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                    하나의 주제로 이어지는 모든 대화 기록을 한눈에 관리합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 02 언제 쓸까? */}
            <section className="text-left space-y-8">
              <h2 className="font-headline-lg text-headline-lg">02 언제 쓸까?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[16/9] overflow-hidden rounded-xl">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxHd_ghONs3Xc8j43FC2_fuevEuLy3WhT42Bh6X81x569T38AdfCu0wnt1UJXzH952B8RvEWtvKOO_urbaUzm4m_tbc50FHGt2dQFLg2u4WB3wIWMCaQHD7Kcv_KdMHQTNVURCQf-6RGjuAF5qAvVcxl97i2R02j5SBLYZqChr0wkTDXgwk76DPsYrgvWf1vEZByMqP7JBRtnZkuTTFJULHasSpj3tYKkH6NQ6gdvkSRKqNPGxPQ36hkDlvyk2GWKwAFfDBe43qM" 
                      alt="LG Office Team meeting"
                    />
                  </div>
                  <span className="text-primary font-label-lg block">SCENARIO 01</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">반복적인 상황 설명이 지칠 때</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                    브랜드 가이드라인, 마케팅 타겟 정보를 매 채팅마다 붙여넣지 않아도 됩니다.
                  </p>
                </div>

                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[16/9] overflow-hidden rounded-xl">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB447CCXpMu6oi_8sTHaDewwJ4FcdH7ZTqM-gDGUbsOrYTlfEI9TlYUkvyrjG_SL_9VHdusNzpRenygbMUl9y62qr8chiB6p9-Ub3DoKHjKpslFKKCfe1Zdy6vassAD_0LO7_njgjfDnkZhx8LDn_8KLtuu95yMHPwkAhPcl1OiiP5Tvsv0ECbMUH6-xMw4EgxIn_26aU8FcsGFEYvkoPCnnVMGzgI9ywVAwFJ9yMkzsFMfJKGOmNXQwSgUxJToVS6rrUFm3pFO_RU" 
                      alt="Minimal desk items"
                    />
                  </div>
                  <span className="text-primary font-label-lg block">SCENARIO 02</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">방대한 참고 자료가 있을 때</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
                    수십 개의 PDF 보고서를 한꺼번에 분석하고 인사이트를 도출해야 하는 복합 프로젝트에 최적입니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 03 한눈에 비교하기 Table */}
            <section className="text-left space-y-8">
              <h2 className="font-headline-lg text-headline-lg">03 한눈에 비교하기</h2>
              <div className="overflow-x-auto rounded-xl border border-border-subtle dark:border-neutral-850">
                <table className="w-full text-left border-collapse bg-white dark:bg-[#141416]">
                  <thead className="bg-surface-container-low dark:bg-[#1E1919]">
                    <tr>
                      <th className="p-6 font-label-lg border-b border-border-subtle dark:border-neutral-800 text-gray-800 dark:text-white">구분</th>
                      <th className="p-6 font-label-lg border-b border-border-subtle dark:border-neutral-800 text-gray-500 dark:text-neutral-350">일반 채팅</th>
                      <th className="p-6 font-label-lg border-b border-border-subtle dark:border-neutral-800 text-primary dark:text-red-400">프로젝트 (추천)</th>
                      <th className="p-6 font-label-lg border-b border-border-subtle dark:border-neutral-800 text-gray-500 dark:text-neutral-350">GPTs</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-gray-700 dark:text-neutral-300">
                    <tr className="hover:bg-surface-tint dark:hover:bg-neutral-900 transition-colors">
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 font-semibold text-gray-900 dark:text-white">사용 목적</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">단발성 질문</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 text-primary dark:text-red-400 font-bold">연속적인 업무/협업</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">특정 기능 자동화/도구화</td>
                    </tr>
                    <tr className="hover:bg-surface-tint dark:hover:bg-neutral-900 transition-colors">
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 font-semibold text-gray-900 dark:text-white">맥락 유지</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">낮음 (새 채팅 시 초기화)</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 text-primary dark:text-red-400 font-bold">매우 높음 (고정 지침)</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">높음 (시스템 메시지)</td>
                    </tr>
                    <tr className="hover:bg-surface-tint dark:hover:bg-neutral-900 transition-colors">
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 font-semibold text-gray-900 dark:text-white">자료 업로드</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">채팅당 제한적</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800 text-primary dark:text-red-400 font-semibold">대용량 지식 공유 가능</td>
                      <td className="p-6 border-b border-border-subtle dark:border-neutral-800">설계 시점 자료 고정</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 04 시작하는 법 Step-by-Step */}
            <section className="flex flex-col lg:flex-row gap-stack-lg items-center text-left">
              <div className="flex-1 order-2 lg:order-1 space-y-8">
                <h2 className="font-headline-lg text-headline-lg text-gray-950 dark:text-white">04 시작하는 법</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <span className="font-display-lg text-display-lg text-primary leading-none">01</span>
                    <div className="space-y-1">
                      <h4 className="font-headline-md text-headline-md text-gray-900 dark:text-white">사이드바에서 '프로젝트' 선택</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">메인 화면 좌측 메뉴에서 프로젝트 아이콘을 클릭합니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start py-4 border-l border-primary/20 pl-0">
                    <span className="font-display-lg text-display-lg text-primary leading-none">02</span>
                    <div className="space-y-1">
                      <h4 className="font-headline-md text-headline-md text-gray-900 dark:text-white">지침 및 지식 베이스 설정</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">AI에게 부여할 역할(Custom Instructions)을 입력하고 참고할 파일들을 업로드하세요.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="font-display-lg text-display-lg text-primary leading-none">03</span>
                    <div className="space-y-1">
                      <h4 className="font-headline-md text-headline-md text-gray-900 dark:text-white">대화 시작 및 지속 관리</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">설정된 맥락 안에서 자유롭게 질문하고 협업하세요. 모든 기록은 안전하게 저장됩니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 order-1 lg:order-2 rounded-xl overflow-hidden shadow-xl border border-border-subtle dark:border-neutral-850">
                <img 
                  alt="Step-by-step UI Illustration" 
                  className="w-full h-auto" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuALUCjCKnBtSE9KDghASZr4e1GSw1MkcQIVTpRUio633vSLj42S81X-GfvU9xVXDR-CfZa9ZGpiXbA8xax50ocQIuj4moXTmXjVVWnwWXUon9hDB-RxQd2gu7Ioo9lynOMYcqdcBIEQNL4l0M4NLToopDxkjmx9Xu0h5c6gFju0_8X5JxrZv-k2WWp2OQDOMJHB6MBBewfjZ_P1FazgyODaWoTj8zVV9In5Ql3iAvuySIEc2McUOs1MKc" 
                />
              </div>
            </section>

            {/* 05/06 프로젝트 지침 가이드 */}
            <section className="bg-secondary dark:bg-[#1E1919] p-stack-lg lg:p-16 rounded-xl text-on-primary text-left space-y-10">
              <h2 className="font-headline-lg text-headline-lg text-on-primary">05/06 프로젝트 지침 가이드</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Marketing Reviewer */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="bg-primary-container inline-flex p-3 rounded-lg">
                      <span className="material-symbols-outlined text-on-primary">rate_review</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary">마케팅 리뷰어</h3>
                    <p className="font-label-sm text-label-sm opacity-60">INSTRUCTIONS</p>
                    <p className="font-body-md text-body-md font-light leading-relaxed">
                      "너는 LG전자의 브랜드 마케팅 전문가야. 업로드된 브랜드 가이드라인에 맞춰 내가 작성한 카피를 리뷰해줘."
                    </p>
                  </div>
                  <button 
                    onClick={() => handleCopyText('"너는 LG전자의 브랜드 마케팅 전문가야. 업로드된 브랜드 가이드라인에 맞춰 내가 작성한 카피를 리뷰해줘."', "mkt")}
                    className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    {mktReviewerCopied ? "복사됨!" : "복사하기"}
                  </button>
                </div>

                {/* Meeting Summarizer */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="bg-primary-container inline-flex p-3 rounded-lg">
                      <span className="material-symbols-outlined text-on-primary">groups</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary">회의록 요약기</h3>
                    <p className="font-label-sm text-label-sm opacity-60">INSTRUCTIONS</p>
                    <p className="font-body-md text-body-md font-light leading-relaxed">
                      "업로드된 STT 파일을 분석해서 결정사항, 액션 플랜, 주요 논점을 구분하여 LG 표준 보고서 양식으로 요약해줘."
                    </p>
                  </div>
                  <button 
                    onClick={() => handleCopyText('"업로드된 STT 파일을 분석해서 결정사항, 액션 플랜, 주요 논점을 구분하여 LG 표준 보고서 양식으로 요약해줘."', "meeting")}
                    className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    {meetingSummaryCopied ? "복사됨!" : "복사하기"}
                  </button>
                </div>

                {/* Content Creator */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="bg-primary-container inline-flex p-3 rounded-lg">
                      <span className="material-symbols-outlined text-on-primary">edit_note</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary">콘텐츠 크리에이터</h3>
                    <p className="font-label-sm text-label-sm opacity-60">INSTRUCTIONS</p>
                    <p className="font-body-md text-body-md font-light leading-relaxed">
                      "최신 기술 트렌드 자료를 기반으로 블로그 포스팅 초안을 작성해줘. 독자는 IT에 관심 많은 2030 직장인이야."
                    </p>
                  </div>
                  <button 
                    onClick={() => handleCopyText('"최신 기술 트렌드 자료를 기반으로 블로그 포스팅 초안을 작성해줘. 독자는 IT에 관심 많은 2030 직장인이야."', "creator")}
                    className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    {contentCreatorCopied ? "복사됨!" : "복사하기"}
                  </button>
                </div>
              </div>
            </section>

            {/* 07 효율의 변화 (Before & After) */}
            <section className="text-left space-y-8">
              <h2 className="font-headline-lg text-headline-lg">07 효율의 변화 (Before &amp; After)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-xl overflow-hidden shadow-sm">
                <div className="bg-[#F2F2F2] dark:bg-[#202022] p-stack-lg lg:p-12 space-y-6">
                  <div className="flex items-center gap-2 text-on-secondary-variant font-bold text-xs">
                    <span className="material-symbols-outlined">history</span>
                    <span className="font-label-lg text-xs uppercase">BEFORE</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-on-surface-variant font-body-md text-sm font-light">
                      <span className="text-error">✕</span> 매 대화마다 "나는 LG전자 마케터이고..." 반복 입력
                    </li>
                    <li className="flex gap-3 text-on-surface-variant font-body-md text-sm font-light">
                      <span className="text-error">✕</span> 기존 대화 내용을 찾기 위해 스크롤 무한 반복
                    </li>
                    <li className="flex gap-3 text-on-surface-variant font-body-md text-sm font-light">
                      <span className="text-error">✕</span> 업로드한 파일이 휘발되어 다시 업로드
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-tint dark:bg-[#1E1414] p-stack-lg lg:p-12 space-y-6">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    <span className="font-label-lg text-xs uppercase">AFTER WITH PROJECTS</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-on-surface font-body-md text-sm font-semibold text-gray-900 dark:text-white">
                      <span className="text-primary">✓</span> 이미 세팅된 지침으로 즉시 본론부터 대화
                    </li>
                    <li className="flex gap-3 text-on-surface font-body-md text-sm font-semibold text-gray-900 dark:text-white">
                      <span className="text-primary">✓</span> 프로젝트 단위로 깔끔하게 정리된 워크스페이스
                    </li>
                    <li className="flex gap-3 text-on-surface font-body-md text-sm font-semibold text-gray-900 dark:text-white">
                      <span className="text-primary">✓</span> 영구 보존되는 지식 베이스 활용으로 답변 정확도 향상
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 08 200% 활용 팁 */}
            <section className="text-left">
              <div className="bg-surface-container dark:bg-[#1E1919] rounded-xl p-stack-lg flex flex-col md:flex-row items-center gap-8 border border-border-subtle dark:border-neutral-850">
                <div className="text-center md:text-left space-y-2 max-w-3xl">
                  <h2 className="font-headline-lg text-headline-lg text-primary dark:text-red-400">08 마케터를 위한 200% 활용 팁</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
                    프로젝트 지식 베이스에 '경쟁사 분석 보고서'와 '우리 브랜드 소구점'을 함께 넣어보세요. <br className="hidden md:block" /> 두 자료를 교차 분석하여 훨씬 날카로운 소구점을 AI가 제안해줍니다.
                  </p>
                </div>
                <button 
                  onClick={() => alert("더 많은 마케터 팁 로딩 중...")}
                  className="whitespace-nowrap bg-on-surface hover:opacity-90 dark:bg-primary text-surface dark:text-white px-8 py-4 rounded-xl font-label-lg font-bold text-sm cursor-pointer"
                >
                  더 많은 팁 보기
                </button>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-stack-xl border-t border-border-subtle dark:border-neutral-850 space-y-6">
              <img 
                alt="LG Logo" 
                className="h-12 mx-auto dark:invert" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm0bU0IPTPh6J0HEn2C1GafxBkYmjI3nvo-U0F4fzzG3lSMxbojlpEX0zWpo2407hD-NCWHA189k4kRtK7JpMuxeQlg7O7Haxj1I1miOSZmFFXL5qpkejePn2Tj35qvq7XCj24rsOgumsTDULlQM0scTlNNhZyB0S318o1wKtNK1qi6KN9TsYf2UaocsdXakmlWMYoDgWDvIJNfgJ2O8MmQhI84RHxSlVkdRQiyrJh0aRs_oqSeS2FUyX0dBz5KsISCq4Uyjwwkz0" 
              />
              <h2 className="font-display-lg text-display-lg text-gray-950 dark:text-white">이제 당신만의 AI 작업방을<br />만들어보세요</h2>
              <button 
                onClick={() => setQuizOpen(true)}
                className="bg-primary hover:bg-primary-container text-on-primary px-12 py-5 rounded-full font-headline-md text-headline-md active:scale-95 transition-all shadow-lg cursor-pointer"
              >
                프로젝트 시작하기
              </button>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-60 mt-4">LG전자 샛별자문단 5기가 함께합니다.</p>
            </section>

          </div>
        )}

        {/* ==================== GPTS VIEW ==================== */}
        {currentPage === "part2" && (
          <div className="animate-fadeIn max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 space-y-24">
            
            {/* Hero Section */}
            <header className="py-stack-xl flex flex-col items-center text-center space-y-6">
              <div className="inline-block bg-primary text-on-primary px-4 py-1 rounded-sm font-label-sm text-label-sm tracking-widest uppercase text-xs">
                Premium Magazine Vol. 02
              </div>
              <h1 className="font-display-lg text-display-lg max-w-3xl leading-tight text-gray-950 dark:text-white">
                에피소드 2. 나만의 AI 비서 만들기: GPTs
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed font-light">
                반복되는 프롬프트 입력에서 벗어나, 당신의 업무 스타일을 완벽히 이해하는 전담 어시스턴트를 구축하는 여정을 시작합니다.
              </p>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[21/9]">
                <img 
                  alt="Premium AI Robots" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" 
                />
              </div>
            </header>

            {/* 01 GPTs란 무엇인가? */}
            <section className="py-stack-xl grid md:grid-cols-2 gap-stack-lg items-center text-left">
              <div className="space-y-6">
                <span className="text-primary font-bold text-headline-md block">01</span>
                <h2 className="font-headline-xl text-headline-xl text-gray-950 dark:text-white">GPTs란 무엇인가?</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
                  단순한 대화형 AI를 넘어, 특정 목적에 맞게 최적화된 맞춤형 ChatGPT입니다. 복잡한 지침(Instructions), 전문 지식(Knowledge), 그리고 외부 도구(Capabilities)를 결합하여 나만의 디지털 페르소나를 생성합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-surface-container dark:bg-[#1E1919] rounded-xl border border-outline-variant dark:border-neutral-850">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm">Instructions</div>
                      <div className="text-xs text-on-surface-variant font-light mt-1">어떻게 행동하고 대답해야 하는지에 대한 정교한 가이드라인</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-surface-container dark:bg-[#1E1919] rounded-xl border border-outline-variant dark:border-neutral-850">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm">Knowledge</div>
                      <div className="text-xs text-on-surface-variant font-light mt-1">특정 프로젝트나 도메인에 특화된 고유 데이터 파일 업로드</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high dark:bg-[#201A1A] rounded-3xl p-stack-lg border border-border-subtle dark:border-neutral-850 aspect-square flex flex-col justify-center items-center text-center space-y-6 shadow-sm">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 text-white">
                  <span className="material-symbols-outlined text-5xl">smart_toy</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">Custom AI Agent</h3>
                <p className="text-on-surface-variant text-xs font-light">No Coding Required. Just Logic.</p>
              </div>
            </section>

            {/* 02 Project vs GPTs */}
            <section className="py-stack-xl text-left space-y-8">
              <div className="text-center space-y-2">
                <span className="text-primary font-bold text-headline-md block">02</span>
                <h2 className="font-headline-xl text-headline-xl text-gray-950 dark:text-white">Project vs GPTs</h2>
                <p className="text-on-surface-variant text-sm font-light">워크룸 환경과 어시스턴트 환경의 차이</p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-border-subtle dark:bg-neutral-800 border border-border-subtle dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-secondary-fixed dark:bg-[#202022] p-stack-lg space-y-4">
                  <div className="font-headline-md text-headline-md flex items-center gap-2 text-gray-800 dark:text-white font-bold">
                    <span className="material-symbols-outlined text-secondary">workspaces</span> 일반 대화 / 프로젝트
                  </div>
                  <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant font-light text-sm">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">close</span> 매번 같은 제약사항을 반복 입력</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">close</span> 대화가 길어질수록 초기 설정 망각</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">close</span> 범용적인 지식 기반 답변 제공</li>
                  </ul>
                </div>

                <div className="bg-surface-tint dark:bg-[#1E1414] p-stack-lg border-l-2 border-primary space-y-4">
                  <div className="font-headline-md text-headline-md flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> GPTs (어시스턴트)
                  </div>
                  <ul className="space-y-3 font-body-md text-body-md text-on-surface font-semibold text-sm">
                    <li className="flex items-center gap-2 text-gray-800 dark:text-white"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 단 한 번의 설정으로 모든 대화에 적용</li>
                    <li className="flex items-center gap-2 text-gray-800 dark:text-white"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 가이드라인을 영구적으로 유지 및 준수</li>
                    <li className="flex items-center gap-2 text-gray-800 dark:text-white"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 업로드된 전문 문서를 우선적 참고</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 04-05 시작하기 */}
            <section className="py-stack-xl text-left">
              <div className="grid lg:grid-cols-12 gap-stack-lg items-center">
                <div className="lg:col-span-4 space-y-6">
                  <span className="text-primary font-bold text-headline-md block">04-05</span>
                  <h2 className="font-headline-xl text-headline-xl text-gray-950 dark:text-white">시작하기: 생성과 탐색</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    기존에 만들어진 글로벌 GPTs를 활용하거나, 단 10분 만에 본인만의 전용 어시스턴트를 구축할 수 있습니다.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                      <p className="font-body-md text-xs sm:text-sm font-semibold">ChatGPT 메인 화면의 'Explore GPTs' 클릭</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                      <p className="font-body-md text-xs sm:text-sm font-semibold">'+ Create' 버튼으로 에디터 진입</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                      <p className="font-body-md text-xs sm:text-sm font-semibold">'Configure' 탭에서 이름, 설명, 지침 입력</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-border-subtle dark:border-neutral-850 shadow-2xl">
                  <img 
                    alt="LG AI Center Branding with Crystal" 
                    className="w-full h-full object-cover aspect-video" 
                    src="https://lh3.googleusercontent.com/aida/AP1WRLsjGuYSnjyVmFHbN_Nqh3iEcYOL9ob3PnC4GD-XHScS8IuJpmBejSMJr0UgYBlpp49EXtZvIUzZPj2r3XP858lApo4SYSiT6cHd9HLz2P8SjILQZtaiuL4UPxHsCLapckd9EJv4t-z_jSv7gvc2Zyx2jSEr6tR_DxaHafw2yl1JR2sUNtGdVbA8ZzI2JBZHshjOCuy_2sl24GewjJ7r9BIBXD1WSINqCK7zxxBLhUpSjQ090-hylVYTdt8" 
                  />
                </div>
              </div>
            </section>

            {/* Professional Templates */}
            <section className="py-stack-xl text-left space-y-8">
              <h2 className="font-headline-xl text-headline-xl text-center text-gray-950 dark:text-white">Professional Templates</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Magazine Editor */}
                <div className="p-8 bg-white dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container dark:bg-[#201A1A] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">Magazine Editor</h3>
                    <p className="text-on-surface-variant text-label-lg leading-relaxed font-light text-xs sm:text-sm">
                      "당신은 프리미엄 매거진 에디터입니다. 모든 답변은 세련된 문체로, 가독성 높은 레이아웃을 추천하며 작성하세요."
                    </p>
                  </div>
                  <div>
                    <div className="text-primary font-bold text-xs tracking-widest mb-4">#Editorial_Tone</div>
                    <button 
                      onClick={() => handleCopyText('"당신은 프리미엄 매거진 에디터입니다. 모든 답변은 세련된 문체로, 가독성 높은 레이아웃을 추천하며 작성하세요."', "mag")}
                      className="w-full border border-primary/40 py-2.5 rounded font-label-lg hover:bg-primary hover:text-white transition-all text-xs font-semibold text-primary cursor-pointer text-center"
                    >
                      {magEditorCopied ? "복사 완료!" : "프롬프트 복사"}
                    </button>
                  </div>
                </div>

                {/* Review Bot */}
                <div className="p-8 bg-white dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container dark:bg-[#201A1A] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                      <span className="material-symbols-outlined">fact_check</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">Review Bot</h3>
                    <p className="text-on-surface-variant text-label-lg leading-relaxed font-light text-xs sm:text-sm">
                      "고객 피드백 데이터를 분석하여 핵심 인사이트와 개선점 3가지를 표 형식으로 즉시 도출하는 분석 전문가입니다."
                    </p>
                  </div>
                  <div>
                    <div className="text-primary font-bold text-xs tracking-widest mb-4">#Data_Analysis</div>
                    <button 
                      onClick={() => handleCopyText('"고객 피드백 데이터를 분석하여 핵심 인사이트와 개선점 3가지를 표 형식으로 즉시 도출하는 분석 전문가입니다."', "review")}
                      className="w-full border border-primary/40 py-2.5 rounded font-label-lg hover:bg-primary hover:text-white transition-all text-xs font-semibold text-primary cursor-pointer text-center"
                    >
                      {reviewBotCopied ? "복사 완료!" : "프롬프트 복사"}
                    </button>
                  </div>
                </div>

                {/* SNS Copywriter */}
                <div className="p-8 bg-white dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container dark:bg-[#201A1A] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                      <span className="material-symbols-outlined">campaign</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-gray-900 dark:text-white">SNS Copywriter</h3>
                    <p className="text-on-surface-variant text-label-lg leading-relaxed font-light text-xs sm:text-sm">
                      "MZ세대의 언어 습관을 반영하여 인스타그램, 스레드에 최적화된 짧고 강렬한 카피와 해시태그를 제안합니다."
                    </p>
                  </div>
                  <div>
                    <div className="text-primary font-bold text-xs tracking-widest mb-4">#Viral_Marketing</div>
                    <button 
                      onClick={() => handleCopyText('"MZ세대의 언어 습관을 반영하여 인스타그램, 스레드에 최적화된 짧고 강렬한 카피와 해시태그를 제안합니다."', "sns")}
                      className="w-full border border-primary/40 py-2.5 rounded font-label-lg hover:bg-primary hover:text-white transition-all text-xs font-semibold text-primary cursor-pointer text-center"
                    >
                      {snsCopyCopied ? "복사 완료!" : "프롬프트 복사"}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 08 Efficiency Boost */}
            <section className="py-stack-xl bg-surface-container dark:bg-[#1E1919] rounded-[2rem] px-margin-mobile md:px-margin-desktop overflow-hidden relative text-left border border-border-subtle dark:border-neutral-850">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-primary font-bold text-headline-md block">08 Efficiency Boost</span>
                  <h2 className="font-headline-xl text-headline-xl text-gray-950 dark:text-white">일반 채팅 vs 특화 GPTs</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                  <div className="flex flex-col">
                    <div className="bg-[#e5e2e1] dark:bg-neutral-800 px-4 py-2 rounded-t-xl font-bold text-secondary flex items-center gap-2 text-xs">
                      <span className="material-symbols-outlined text-sm">history</span> Before: 일반 ChatGPT
                    </div>
                    <div className="bg-white/50 dark:bg-neutral-900/60 p-6 rounded-b-xl border border-border-subtle dark:border-neutral-800 flex-grow flex flex-col justify-between shadow-sm">
                      <div className="space-y-4 opacity-60">
                        <div className="h-4 bg-secondary-container rounded w-3/4"></div>
                        <div className="h-4 bg-secondary-container rounded w-full"></div>
                        <div className="h-4 bg-secondary-container rounded w-5/6"></div>
                        <p className="text-label-sm mt-4 text-secondary italic text-xs">"매번 톤앤매너를 다시 설명하고 예시 파일을 다시 올리는 중..."</p>
                      </div>
                      <div className="mt-8 flex justify-between items-end pt-4 border-t border-border-subtle dark:border-neutral-850">
                        <span className="text-headline-md font-bold text-on-surface dark:text-white">5분 소요</span>
                        <span className="text-label-sm text-secondary text-xs">준비 단계 포함</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="active-red-gradient px-4 py-2 rounded-t-xl font-bold text-white flex items-center gap-2 text-xs">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span> After: LG 전용 GPTs
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-b-xl border-2 border-primary flex-grow shadow-lg flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="h-4 bg-primary/20 rounded w-full"></div>
                        <div className="h-4 bg-primary/20 rounded w-full"></div>
                        <div className="h-4 bg-primary/20 rounded w-full"></div>
                        <p className="text-label-sm mt-4 text-primary font-bold text-xs">"파일 업로드 없이 즉시 분석 시작. 정해진 양식으로 자동 출력."</p>
                      </div>
                      <div className="mt-8 flex justify-between items-end pt-4 border-t border-border-subtle dark:border-neutral-850">
                        <span className="text-headline-md font-bold text-primary">30초 이내</span>
                        <span className="text-label-sm text-primary font-bold text-xs">즉시 실행</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pro Tips */}
            <section className="py-stack-xl text-left space-y-8">
              <h2 className="font-headline-md text-headline-md border-l-4 border-primary pl-4">Pro Tips: 더 똑똑한 비서 만들기</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary">language</span> Web Browsing
                  </div>
                  <p className="text-on-surface-variant font-body-md font-light leading-relaxed text-xs sm:text-sm">
                    최신 정보를 검색해야 하는 업무라면 지침에 '항상 실시간 웹 검색을 선행할 것'을 명시하세요.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary">data_object</span> Code Interpreter
                  </div>
                  <p className="text-on-surface-variant font-body-md font-light leading-relaxed text-xs sm:text-sm">
                    복잡한 엑셀 데이터 분석이나 데이터 시각화가 필요한 경우 이 옵션을 반드시 활성화해야 합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary">palette</span> DALL·E 3
                  </div>
                  <p className="text-on-surface-variant font-body-md font-light leading-relaxed text-xs sm:text-sm">
                    보고서용 삽화나 브랜드 이미지를 자동 생성하도록 설정하여 시각적 완성도를 높이세요.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-secondary dark:bg-[#1E1919] mt-stack-xl rounded-2xl p-12 text-white">
              <div className="max-w-container-max mx-auto px-margin-desktop py-stack-xl flex flex-col items-center text-center gap-stack-lg">
                <img 
                  alt="LG 5th Advisory Logo" 
                  className="h-24 w-auto mb-4 grayscale brightness-200 dark:invert" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu8Vt5TpO_SGuz4XcD2GmHjdQRrXwbUELgiWj1U2tNGD0Cy-gmmHBd2P4iZHVVpCZ4L7hmYrOCA6FS4MPbyO2X6oYe8EQHdg3lyhA9SSeduoeI1yhQxPhPjTwIiZhWIIEKSqbypdaKpMri1qbyfCwXWl0jRsS3Szx7F6_RFHmYOTFsvwGxgQQx04hVBv9YMeoHQtWK7W7tErRURgz62jYCydxEiOKDpkHBSZu6CuXXaurS8YT1bkrETGQ" 
                />
                <h2 className="text-on-primary font-headline-xl text-headline-xl text-white">지금 바로 첫 번째 비서를 고용하세요.</h2>
                <button 
                  onClick={() => setQuizOpen(true)}
                  className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-full font-headline-md text-headline-md transition-all active:scale-95 shadow-xl shadow-black/20 cursor-pointer"
                >
                  GPTs 제작 시작하기
                </button>
              </div>
            </section>

          </div>
        )}

      </main>

      {/* 3. Call-to-Action (CTA) White-Red Banner on Home Page */}
      {currentPage === "home" && (
        <section className="max-w-container-max mx-auto px-margin-desktop py-16">
          <div className="bg-white dark:bg-[#141416] p-12 md:p-16 border-t-4 border-primary text-center space-y-8 border border-border-subtle dark:border-neutral-850 shadow-md relative rounded-3xl">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 px-5 py-2 border border-border-subtle dark:border-neutral-800 rounded-full bg-[#fff0ef] dark:bg-[#1E1919]">
                <span className="text-primary font-black text-xs">★</span>
                <span className="text-xs font-bold text-gray-800 dark:text-neutral-200">샛별자문단 5기</span>
              </div>
            </div>

            <h2 className="font-display-lg text-display-lg text-gray-950 dark:text-white leading-tight">
              AI 전략의 수준을 높일 <span className="text-primary">준비가 되셨나요?</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed font-light text-xs sm:text-sm">
              샛별자문단 5기와 함께하세요. 진화된 업무의 다음 10년을 맞이할 세미나의 문이 활짝 열려 있습니다.
            </p>
            
            <button
              onClick={() => setQuizOpen(true)}
              className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-full font-headline-md text-headline-md transition-all active:scale-95 duration-200 inline-block shadow-md cursor-pointer"
            >
              지금 빌딩 시작하기
            </button>
          </div>
        </section>
      )}

      {/* 4. Footer */}
      <footer className="bg-secondary dark:bg-[#0A0A0B] py-stack-xl border-t border-white/10 mt-12 text-left">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-lg w-full">
          <div className="flex flex-col gap-4">
            <img 
              alt="LG Electronics Logo" 
              className="h-8 w-auto invert brightness-0 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRwgFPbE3ma30kxpWXkTxZuUubWVcp_83jdflukSj2qsDx3srX5UnkhcEio447m_hOqB6-l1wExtyZolk3_g_VAkuN_yVr9GelgPdmwST1_cGn10ub2crGSoX1y5j5Qj5ZisUrf5rT78Zn9VDs9hiw521kEbST4LAs2Rv7RjP8aHkgfh4ellWPms3bL6t-QuQrhduBwCkM-MOtTsqF0ZElXvZSQ0z64qpzQqKtOWGM1FZgJ3WP0AtbtbM0e6ixlcRjLDs9E4pbK4c" 
            />
            <p className="font-body-md text-surface-variant/85 dark:text-neutral-450 max-w-xs text-xs font-light">
              Premium AI Advisory Group. 실무자를 위한 최적의 AI 경험을 디자인합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-xs">
            <div className="flex flex-col gap-2">
              <h4 className="font-label-lg text-on-primary dark:text-white mb-2 font-bold">Navigation</h4>
              <button onClick={() => handlePageChange("part1")} className="text-surface-variant/80 hover:text-white transition-colors cursor-pointer text-left">Projects</button>
              <button onClick={() => handlePageChange("part2")} className="text-surface-variant/80 hover:text-white transition-colors cursor-pointer text-left">GPTs</button>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-label-lg text-on-primary dark:text-white mb-2 font-bold">Legal</h4>
              <button onClick={() => handlePageChange("part1")} className="text-surface-variant/80 hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button>
              <button onClick={() => handlePageChange("part2")} className="text-surface-variant/80 hover:text-white transition-colors cursor-pointer text-left">Terms of Service</button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-surface-variant/60 dark:text-neutral-500 font-body-md text-xs py-4">
          <p>© 2024 LG Electronics. All rights reserved. Premium AI Advisory Group.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">share</span>
          </div>
        </div>
      </footer>

      {/* ==================== 5. ONBOARDING QUIZ MODAL ==================== */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#141416] p-8 md:p-10 rounded-2xl max-w-xl w-full border border-border-subtle dark:border-neutral-850 shadow-2xl relative text-left space-y-6">
            
            {/* Close */}
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
            >
              <span className="text-sm">✕</span>
            </button>

            {/* Steps indicator */}
            <div className="flex gap-1.5">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-0.5 flex-1 transition-all duration-300 rounded-full ${
                    quizStep >= step ? "bg-primary" : "bg-gray-250 dark:bg-neutral-800"
                  }`}
                />
              ))}
            </div>

            <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
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
                    className="w-full text-left p-4 rounded-xl border border-gray-150 dark:border-neutral-850 hover:border-primary dark:hover:border-primary hover:bg-[#fff5f6] dark:hover:bg-neutral-900 dark:bg-[#0B0B0C] transition-all font-semibold text-xs cursor-pointer text-gray-800 dark:text-neutral-200"
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
                    className="w-full text-left p-4 rounded-xl border border-gray-150 dark:border-neutral-850 hover:border-primary dark:hover:border-primary hover:bg-[#fff5f6] dark:hover:bg-neutral-900 dark:bg-[#0B0B0C] transition-all font-semibold text-xs cursor-pointer text-gray-800 dark:text-neutral-200"
                  >
                    {p.label}
                  </button>
                ))}
                <div className="pt-4 flex justify-start">
                  <button
                    onClick={() => setQuizStep(1)}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-600 dark:text-neutral-300 font-semibold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    이전
                  </button>
                </div>
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
                    className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-1 focus:ring-primary font-semibold text-xs ${
                      darkMode ? "bg-neutral-900 border-neutral-800 text-white" : "bg-white border-gray-200 text-[#291615]"
                    }`}
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setQuizStep(2)}
                    className="bg-gray-150 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-600 dark:text-neutral-300 font-semibold text-[10px] tracking-widest uppercase px-6 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    이전
                  </button>
                  <button
                    onClick={() => {
                      if (!userEmail || !userEmail.includes("@")) {
                        alert("올바른 이메일 주소를 입력해 주십시오.");
                        return;
                      }
                      setQuizResultFileReady(true);
                      alert("진단이 완료되었습니다. 결과 구성 파일을 다운로드하여 커스텀 GPTs 생성 시 업로드해 사용할 수 있습니다.");
                    }}
                    className="bg-primary hover:bg-primary-container text-white font-bold text-xs px-6 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    분석 진행
                  </button>
                </div>

                {quizResultFileReady && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-3">
                    <span className="text-[10px] tracking-wider uppercase font-extrabold text-emerald-600 dark:text-emerald-400 block">진단 분석 파일 생성 완료</span>
                    <p className="text-[11px] leading-relaxed text-gray-600 dark:text-neutral-400">
                      사용자의 {userDivision} 업무 본부와 {userPainPoint} 문제점에 최적화된 GPTs 지침 파일이 생성되었습니다. 아래의 다운로드 버튼을 클릭하여 소스 파일을 내보내십시오.
                    </p>
                    <button
                      onClick={downloadQuizConfig}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      결과 파일 다운로드
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== 6. CHATBOT WIDGET ==================== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {chatbotOpen && (
          <div className="w-80 md:w-96 rounded-2xl bg-white dark:bg-[#141416] border border-border-subtle dark:border-neutral-850 shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn h-[450px]">
            
            {/* Header */}
            <div className="bg-primary p-4 text-left text-white flex justify-between items-center">
              <div>
                <span className="font-extrabold text-sm block">샛별 가이드 챗봇 비서</span>
                <span className="text-[9px] text-red-100 block">AI Advisory Assistant</span>
              </div>
              <button 
                onClick={() => setChatbotOpen(false)}
                className="text-white hover:text-red-200"
              >
                ✕
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-normal">
              {chatbotMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-left leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200 rounded-tl-none border border-gray-200/50 dark:border-neutral-700/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-neutral-850 text-gray-400 px-4 py-3 rounded-2xl rounded-tl-none animate-pulse">
                    답변 작성 중...
                  </div>
                </div>
              )}
              <div ref={chatbotEndRef} />
            </div>

            {/* Quick Questions Switcher */}
            <div className="px-4 pb-2 pt-2 border-t border-gray-100 dark:border-neutral-850 bg-gray-50/50 dark:bg-neutral-900/50 flex flex-wrap gap-1.5 justify-start">
              {[
                "샛별 5기는?",
                "프로젝트와 GPTs 차이?",
                "Before vs After 효과?",
                "API 연동 방법?"
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => sendQuickQuestion(q)}
                  className="px-3 py-1.5 rounded-full border border-gray-250 dark:border-neutral-800 hover:border-primary hover:bg-[#fff5f6] dark:hover:bg-neutral-850 text-[10px] text-gray-600 dark:text-neutral-350 font-bold transition-all cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleChatbotSubmit} className="p-3 border-t border-gray-150 dark:border-neutral-850 bg-white dark:bg-[#141416] flex gap-2">
              <input
                type="text"
                name="chatInput"
                placeholder="질문 입력..."
                className={`flex-1 px-4 py-2 text-xs rounded-full border focus:outline-none focus:ring-1 focus:ring-primary font-normal ${
                  darkMode ? "bg-neutral-900 border-neutral-850 text-white" : "bg-white border-gray-200 text-[#291615]"
                }`}
              />
              <button 
                type="submit" 
                className="bg-gray-900 hover:bg-black text-white dark:bg-primary dark:hover:bg-primary-container rounded-full px-4 text-xs font-semibold tracking-wider transition-colors cursor-pointer uppercase"
              >
                Send
              </button>
            </form>

          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="h-12 w-12 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center transition-all cursor-pointer border border-[#ffe1df] shadow-2xl hover:scale-105 active:scale-95 duration-200"
        >
          {chatbotOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">💬</span>
          )}
        </button>
      </div>

    </div>
  );
}
