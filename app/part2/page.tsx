"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/20">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
              auto_awesome
            </span>
            <span className="font-bold text-xl tracking-tight text-foreground">
              샛별자문단 <span className="font-light text-text-muted">| 5기</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            홈으로
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-[1000px] mx-auto w-full px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wider uppercase mb-6 shadow-sm border border-primary/20">
            Premium Magazine Vol. 02
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6 max-w-4xl">
            에피소드 2. 나만의 AI 비서 만들기: <span className="text-gradient">GPTs</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl leading-relaxed mb-12">
            반복되는 프롬프트 입력에서 벗어나, 당신의 업무 스타일을 완벽히 이해하는 전담 어시스턴트를 구축하는 여정을 시작합니다.
          </p>
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img 
              alt="Premium AI Robots" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" 
            />
          </div>
        </section>

        {/* 01 GPTs란? */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 pl-6 border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">01. GPTs란 무엇인가?</h2>
              <p className="text-lg text-text-muted">특정 목적에 맞게 최적화된 맞춤형 AI</p>
            </div>
            <p className="text-text-muted leading-relaxed mb-8 text-lg">
              단순한 대화형 AI를 넘어, 복잡한 지침(Instructions), 전문 지식(Knowledge), 그리고 외부 도구(Capabilities)를 결합하여 나만의 디지털 페르소나를 생성합니다.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-surface border border-border rounded-2xl premium-shadow">
                <span className="material-symbols-outlined text-primary text-3xl">list_alt</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Instructions</h4>
                  <p className="text-text-muted text-sm">어떻게 행동하고 대답해야 하는지에 대한 정교한 가이드라인</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-surface border border-border rounded-2xl premium-shadow">
                <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Knowledge</h4>
                  <p className="text-text-muted text-sm">특정 프로젝트나 도메인에 특화된 고유 데이터 파일 업로드</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-12 border border-primary/20 aspect-square flex flex-col justify-center items-center text-center premium-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/40 relative z-10">
              <span className="material-symbols-outlined text-white text-5xl">smart_toy</span>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground relative z-10">Custom AI Agent</h3>
            <p className="text-primary font-medium tracking-wide relative z-10">No Coding Required. Just Logic.</p>
          </div>
        </section>

        {/* 02 Comparison */}
        <section className="mb-24">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">02. Project vs GPTs</h2>
            <p className="text-lg text-text-muted">워크룸 환경과 어시스턴트 환경의 차이</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-surface-dim p-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <span className="material-symbols-outlined text-text-muted">workspaces</span> 
                일반 대화 / 프로젝트
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-text-muted font-medium">
                  <span className="material-symbols-outlined text-red-400">close</span> 매번 같은 제약사항을 반복 입력
                </li>
                <li className="flex items-center gap-3 text-text-muted font-medium">
                  <span className="material-symbols-outlined text-red-400">close</span> 대화가 길어질수록 초기 설정 망각
                </li>
                <li className="flex items-center gap-3 text-text-muted font-medium">
                  <span className="material-symbols-outlined text-red-400">close</span> 범용적인 지식 기반 답변 제공
                </li>
              </ul>
            </div>
            <div className="bg-surface p-10 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">stars</span> 
                GPTs (어시스턴트)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 단 한 번의 설정으로 모든 대화에 적용
                </li>
                <li className="flex items-center gap-3 text-foreground font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 가이드라인을 영구적으로 유지 및 준수
                </li>
                <li className="flex items-center gap-3 text-foreground font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 업로드된 전문 문서를 우선적 참고
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 03 Professional Templates Bento Grid */}
        <section className="mb-24">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">03. Professional Templates</h2>
            <p className="text-lg text-text-muted">실무에 바로 적용하는 전문 프롬프트 템플릿</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-surface border border-border rounded-3xl premium-card flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Magazine Editor</h3>
              <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                "당신은 프리미엄 매거진 에디터입니다. 모든 답변은 세련된 문체로, 가독성 높은 레이아웃을 추천하며 작성하세요."
              </p>
              <div className="text-primary font-bold text-xs tracking-widest bg-primary/5 inline-block px-3 py-1 rounded-full self-start">#EDITORIAL_TONE</div>
            </div>
            
            <div className="p-8 bg-surface border border-border rounded-3xl premium-card flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">fact_check</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Review Bot</h3>
              <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                "고객 피드백 데이터를 분석하여 핵심 인사이트와 개선점 3가지를 표 형식으로 즉시 도출하는 분석 전문가입니다."
              </p>
              <div className="text-primary font-bold text-xs tracking-widest bg-primary/5 inline-block px-3 py-1 rounded-full self-start">#DATA_ANALYSIS</div>
            </div>
            
            <div className="p-8 bg-surface border border-border rounded-3xl premium-card flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">campaign</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">SNS Copywriter</h3>
              <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                "MZ세대의 언어 습관을 반영하여 인스타그램, 스레드에 최적화된 짧고 강렬한 카피와 해시태그를 제안합니다."
              </p>
              <div className="text-primary font-bold text-xs tracking-widest bg-primary/5 inline-block px-3 py-1 rounded-full self-start">#VIRAL_MARKETING</div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="font-bold text-foreground text-lg tracking-tight">LG Electronics</span>
            <p className="text-sm text-text-muted">
              Premium AI Advisory Group. 실무자를 위한 최적의 AI 경험을 디자인합니다.
            </p>
          </div>
          <div className="text-sm text-text-muted">
            © 2024 LG Electronics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
