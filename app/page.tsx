"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Premium Glass Header */}
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
        </div>
      </header>

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-white border-b border-border">
          {/* Subtle Background Pattern/Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-white to-white pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wider uppercase mb-6 shadow-sm border border-primary/20">
              Premium AI Guide
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              실무를 혁신하는 <br />
              <span className="text-gradient">AI 매거진</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed font-medium">
              LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드. 
              복잡한 기술을 넘어 당신의 업무를 가속화하는 실제적인 인사이트를 제공합니다.
            </p>
            
            <div className="flex gap-4">
              <Link href="/part1" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-3 group">
                가이드 시작하기
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Episodes Grid Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="flex flex-col mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              에피소드 라인업
            </h2>
            <p className="text-lg text-text-muted">가장 먼저 시작해야 할 AI 워크플로우의 핵심</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Episode 1 Card */}
            <Link href="/part1" className="group">
              <article className="premium-card bg-surface rounded-3xl overflow-hidden border border-border premium-shadow h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    alt="Episode 1 Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    src="https://lh3.googleusercontent.com/aida/AP1WRLuALUCjCKnBtSE9KDghASZr4e1GSw1MkcQIVTpRUio633vSLj42S81X-GfvU9xVXDR-CfZa9ZGpiXbA8xax50ocQIuj4moXTmXjVVWnwWXUon9hDB-RxQd2gu7Ioo9lynOMYcqdcBIEQNL4l0M4NLToopDxkjmx9Xu0h5c6gFju0_8X5JxrZv-k2WWp2OQDOMJHB6MBBewfjZ_P1FazgyODaWoTj8zVV9In5Ql3iAvuySIEc2McUOs1MKc" 
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold tracking-wider text-primary shadow-sm">
                      EPISODE 01
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold text-text-muted tracking-wide">
                    <span className="material-symbols-outlined text-[18px]">folder_open</span>
                    PROJECTS
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground leading-snug group-hover:text-primary transition-colors">
                    AI가 바로 일할 수 있는 작업방 만들기
                  </h3>
                  <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                    효과적인 AI 활용의 시작은 맥락(Context)을 구조화하는 것부터 시작됩니다. 슬랙 채널처럼 체계화된 데이터 환경을 구축하여 AI가 기업 특유의 언어와 프로세스를 완벽히 이해하도록 만드는 법을 공개합니다.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    자세히 보기
                    <span className="material-symbols-outlined ml-2 text-[20px]">arrow_right_alt</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Episode 2 Card */}
            <Link href="/part2" className="group">
              <article className="premium-card bg-surface rounded-3xl overflow-hidden border border-border premium-shadow h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    alt="Episode 2 Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    src="https://lh3.googleusercontent.com/aida/AP1WRLsjGuYSnjyVmFHbN_Nqh3iEcYOL9ob3PnC4GD-XHScS8IuJpmBejSMJr0UgYBlpp49EXtZvIUzZPj2r3XP858lApo4SYSiT6cHd9HLz2P8SjILQZtaiuL4UPxHsCLapckd9EJv4t-z_jSv7gvc2Zyx2jSEr6tR_DxaHafw2yl1JR2sUNtGdVbA8ZzI2JBZHshjOCuy_2sl24GewjJ7r9BIBXD1WSINqCK7zxxBLhUpSjQ090-hylVYTdt8" 
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold tracking-wider text-primary shadow-sm">
                      EPISODE 02
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold text-text-muted tracking-wide">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                    GPTS
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground leading-snug group-hover:text-primary transition-colors">
                    나만의 AI 비서 만들기: GPTs
                  </h3>
                  <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                    범용 AI를 넘어 당신의 특정 직무에 특화된 커스텀 에이전트를 구축하세요. 리서치, 기획서 작성, 코드 리뷰 등 반복되는 업무를 지능적으로 자동화하는 LG 샛별자문단만의 레시피를 제안합니다.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    자세히 보기
                    <span className="material-symbols-outlined ml-2 text-[20px]">arrow_right_alt</span>
                  </div>
                </div>
              </article>
            </Link>

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
