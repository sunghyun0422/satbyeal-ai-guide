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
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block text-primary font-bold tracking-widest text-sm mb-4 bg-primary/10 px-3 py-1 rounded-full">EPISODE 01</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
              AI가 바로 일할 수 있는 <br/> <span className="text-gradient">작업방 만들기: 프로젝트</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
              매번 똑같은 상황 설명을 반복하고 계신가요? LG AI 자문단이 제안하는 최적의 작업 효율화 솔루션, '프로젝트' 기능을 소개합니다.
            </p>
          </div>
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img 
              alt="Premium AI Workspace Visual" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" 
            />
          </div>
        </section>

        {/* 01 프로젝트란? */}
        <section className="mb-24">
          <div className="mb-10 pl-6 border-l-4 border-primary">
            <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">01. 프로젝트란?</h2>
            <p className="text-lg text-text-muted">AI를 위한 전용 책상을 마련해주는 것과 같습니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface p-8 rounded-3xl border border-border premium-card">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">description</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">맞춤형 지침</h3>
              <p className="text-text-muted leading-relaxed">이 프로젝트에서 AI가 어떤 역할을 수행해야 하는지, 어떤 톤앤매너를 유지해야 하는지 미리 정의합니다.</p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-border premium-card">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">지식 베이스</h3>
              <p className="text-text-muted leading-relaxed text-sm">관련 문서와 데이터를 업로드하여 AI가 맥락을 학습하게 합니다.</p>
            </div>
            <div className="md:col-span-3 bg-surface p-8 rounded-3xl border border-border premium-card flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 min-w-14 h-14 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">history</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">대화 관리</h3>
                <p className="text-text-muted leading-relaxed">하나의 주제로 이어지는 모든 대화 기록을 한눈에 관리하여 지속적인 컨텍스트를 유지합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 언제 쓸까? */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">02. 언제 쓸까?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-6 border border-border premium-shadow">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxHd_ghONs3Xc8j43FC2_fuevEuLy3WhT42Bh6X81x569T38AdfCu0wnt1UJXzH952B8RvEWtvKOO_urbaUzm4m_tbc50FHGt2dQFLg2u4WB3wIWMCaQHD7Kcv_KdMHQTNVURCQf-6RGjuAF5qAvVcxl97i2R02j5SBLYZqChr0wkTDXgwk76DPsYrgvWf1vEZByMqP7JBRtnZkuTTFJULHasSpj3tYKkH6NQ6gdvkSRKqNPGxPQ36hkDlvyk2GWKwAFfDBe43qM" alt="Scenario 1" />
              </div>
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block">SCENARIO 01</span>
              <h3 className="text-2xl font-bold mb-3 text-foreground">반복적인 상황 설명이 지칠 때</h3>
              <p className="text-text-muted leading-relaxed">브랜드 가이드라인, 마케팅 타겟 정보를 매 채팅마다 붙여넣지 않아도 됩니다.</p>
            </div>
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-6 border border-border premium-shadow">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB447CCXpMu6oi_8sTHaDewwJ4FcdH7ZTqM-gDGUbsOrYTlfEI9TlYUkvyrjG_SL_9VHdusNzpRenygbMUl9y62qr8chiB6p9-Ub3DoKHjKpslFKKCfe1Zdy6vassAD_0LO7_njgjfDnkZhx8LDn_8KLtuu95yMHPwkAhPcl1OiiP5Tvsv0ECbMUH6-xMw4EgxIn_26aU8FcsGFEYvkoPCnnVMGzgI9ywVAwFJ9yMkzsFMfJKGOmNXQwSgUxJToVS6rrUFm3pFO_RU" alt="Scenario 2" />
              </div>
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block">SCENARIO 02</span>
              <h3 className="text-2xl font-bold mb-3 text-foreground">방대한 참고 자료가 있을 때</h3>
              <p className="text-text-muted leading-relaxed">수십 개의 PDF 보고서를 한꺼번에 분석하고 인사이트를 도출해야 하는 복합 프로젝트에 최적입니다.</p>
            </div>
          </div>
        </section>

        {/* 03 비교표 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">03. 한눈에 비교하기</h2>
          <div className="overflow-x-auto rounded-3xl border border-border premium-shadow">
            <table className="w-full text-left border-collapse bg-surface min-w-[600px]">
              <thead className="bg-surface-dim">
                <tr>
                  <th className="p-6 text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border">구분</th>
                  <th className="p-6 text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border">일반 채팅</th>
                  <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider border-b border-border bg-primary/5">프로젝트 (추천)</th>
                  <th className="p-6 text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border">GPTs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground font-medium">
                <tr className="hover:bg-surface-dim/50 transition-colors">
                  <td className="p-6">사용 목적</td>
                  <td className="p-6 text-text-muted">단발성 질문</td>
                  <td className="p-6 bg-primary/5">연속적인 업무/협업</td>
                  <td className="p-6 text-text-muted">특정 기능 자동화/도구화</td>
                </tr>
                <tr className="hover:bg-surface-dim/50 transition-colors">
                  <td className="p-6">맥락 유지</td>
                  <td className="p-6 text-text-muted">낮음 (새 채팅 시 초기화)</td>
                  <td className="p-6 text-primary font-bold bg-primary/5">매우 높음 (고정 지침)</td>
                  <td className="p-6 text-text-muted">높음 (시스템 메시지)</td>
                </tr>
                <tr className="hover:bg-surface-dim/50 transition-colors">
                  <td className="p-6">자료 업로드</td>
                  <td className="p-6 text-text-muted">채팅당 제한적</td>
                  <td className="p-6 bg-primary/5">대용량 지식 공유 가능</td>
                  <td className="p-6 text-text-muted">설계 시점 자료 고정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 04/05 가이드 & Before After */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 04 시작하는 법 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">04. 시작하는 법</h2>
            <div className="space-y-10 relative">
              <div className="absolute left-[23px] top-[40px] bottom-10 w-[2px] bg-border z-0"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-primary/30">1</div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold mb-2 text-foreground">사이드바에서 '프로젝트' 선택</h4>
                  <p className="text-text-muted leading-relaxed">메인 화면 좌측 메뉴에서 프로젝트 아이콘을 클릭합니다.</p>
                </div>
              </div>
              <div className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-primary/30">2</div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold mb-2 text-foreground">지침 및 지식 베이스 설정</h4>
                  <p className="text-text-muted leading-relaxed">AI에게 부여할 역할을 입력하고 참고할 파일들을 업로드하세요.</p>
                </div>
              </div>
              <div className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-primary/30">3</div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold mb-2 text-foreground">대화 시작 및 지속 관리</h4>
                  <p className="text-text-muted leading-relaxed">설정된 맥락 안에서 자유롭게 질문하고 협업하세요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 05 Before/After Efficiency */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">05. 효율의 변화</h2>
            <div className="flex flex-col gap-6">
              <div className="bg-surface border border-border p-8 rounded-3xl premium-shadow">
                <div className="flex items-center gap-3 text-text-muted mb-4 font-semibold tracking-wider">
                  <span className="material-symbols-outlined text-xl">history</span>
                  BEFORE
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-text-muted">
                    <span className="text-red-500 font-bold">✕</span> 매 대화마다 배경 설명 반복 입력
                  </li>
                  <li className="flex gap-3 text-text-muted">
                    <span className="text-red-500 font-bold">✕</span> 업로드한 파일이 휘발되어 다시 업로드
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl premium-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-8xl text-primary">auto_awesome</span>
                </div>
                <div className="flex items-center gap-3 text-primary mb-4 font-bold tracking-wider relative z-10">
                  <span className="material-symbols-outlined text-xl">star</span>
                  AFTER WITH PROJECTS
                </div>
                <ul className="space-y-4 relative z-10">
                  <li className="flex gap-3 text-foreground font-medium">
                    <span className="text-primary font-bold">✓</span> 이미 세팅된 지침으로 즉시 본론부터 대화
                  </li>
                  <li className="flex gap-3 text-foreground font-medium">
                    <span className="text-primary font-bold">✓</span> 영구 보존되는 지식 베이스 활용으로 답변 정확도 향상
                  </li>
                </ul>
              </div>
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
