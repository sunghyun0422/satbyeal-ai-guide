"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/*  TopNavBar  */}
<header className="bg-surface/80 glass-header sticky top-0 z-50 border-b border-border-subtle">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto w-full"><Link className="flex items-center h-12" href="/"><div className="h-full w-auto flex items-center"><span className="text-headline-md font-bold tracking-widest bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent drop-shadow-sm">샛별자문단 5기</span></div></Link></div>
</header>
<main className="w-full">
{/*  Hero Section  */}
<section className="relative w-full h-[80vh] overflow-hidden flex items-center bg-[#f0f2f5]">
<div className="absolute inset-0">
<img alt="Premium AI Background" className="w-full h-full object-cover" src="/images/premium_ai_bg.png" />
</div>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-on-surface">
<div className="max-w-2xl">
<span className="inline-block bg-primary text-white font-label-lg px-4 py-1 rounded-sm mb-stack-md uppercase tracking-widest">Premium Advisory Group</span>
<h1 className="font-display-lg text-display-lg mb-stack-md leading-tight text-on-surface">샛별자문단<div className="">AI 가이드 매거진</div></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-lg">
                        LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드. 복잡한 기술을 넘어 당신의 업무를 가속화하는 실제적인 인사이트를 제공합니다.
                    </p>
<div className="flex gap-4">
<a href="/part1" className="bg-primary text-white px-8 py-4 rounded-lg font-headline-md flex items-center gap-2 hover:bg-primary-container transition-all group">가이드 보기 <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></a>

</div>
</div>
</div>
</section>
{/*  Main Grid Section  */}
<section className="max-w-container-max mx-auto px-margin-desktop py-stack-xl">
<div className="flex flex-col md:flex-row justify-between items-end mb-stack-xl">
<div>
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">실무를 위한 에피소드</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">가장 먼저 시작해야 할 AI 워크플로우의 핵심</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 border border-border-subtle rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 border border-border-subtle rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/*  Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
{/*  Episode 1 Card  */}
<article className="flex flex-col bg-surface-container-lowest border border-border-subtle overflow-hidden card-hover-effect cursor-pointer" onClick={() => { window.location.href='/part1' }}>
<div className="aspect-[16/9] overflow-hidden group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/step_by_step_ui.png" style={{"transform":"scale(1)"}} />
</div>
<div className="p-stack-lg flex flex-col h-full">
<div className="flex items-center gap-2 mb-stack-sm">
<span className="text-primary font-bold font-label-lg">EPISODE 01</span>
<span className="w-1 h-1 rounded-full bg-border-subtle"></span>
<span className="text-on-surface-variant font-label-lg">PROJECTS</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-stack-md leading-tight text-on-surface">
                            AI가 바로 일할 수 있는 작업방 만들기: 프로젝트
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg flex-grow">
                            효과적인 AI 활용의 시작은 맥락(Context)을 구조화하는 것부터 시작됩니다. 슬랙 채널처럼 체계화된 데이터 환경을 구축하여 AI가 기업 특유의 언어와 프로세스를 완벽히 이해하도록 만드는 법을 공개합니다.
                        </p>
<div className="flex justify-between items-center mt-auto border-t border-border-subtle pt-stack-md">

<a className="text-primary font-bold flex items-center gap-1 group" href="/part1">
                                이동하기
                                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  Episode 2 Card  */}
<article className="flex flex-col bg-surface-container-lowest border border-border-subtle overflow-hidden card-hover-effect cursor-pointer" onClick={() => { window.location.href='/part2' }}>
<div className="aspect-[16/9] overflow-hidden group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/lg_ai_center.png" style={{"transform":"scale(1)"}} />
</div>
<div className="p-stack-lg flex flex-col h-full">
<div className="flex items-center gap-2 mb-stack-sm">
<span className="text-primary font-bold font-label-lg">EPISODE 02</span>
<span className="w-1 h-1 rounded-full bg-border-subtle"></span>
<span className="text-on-surface-variant font-label-lg">GPTS</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-stack-md leading-tight text-on-surface">
                            나만의 AI 비서 만들기: GPTs
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg flex-grow">
                            범용 AI를 넘어 당신의 특정 직무에 특화된 커스텀 에이전트를 구축하세요. 리서치, 기획서 작성, 코드 리뷰 등 반복되는 업무를 지능적으로 자동화하는 LG 샛별자문단만의 레시피를 제안합니다.
                        </p>
<div className="flex justify-between items-center mt-auto border-t border-border-subtle pt-stack-md">

<a className="text-primary font-bold flex items-center gap-1 group" href="/part2">
                                이동하기
                                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-secondary py-stack-xl border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-lg w-full">
<div className="flex flex-col gap-4">

<p className="font-body-md text-surface-variant/80 max-w-xs">
                    Premium AI Advisory Group. 실무자를 위한 최적의 AI 경험을 디자인합니다.
                </p>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-surface-variant/60 font-body-md">
<p className="">© 2026 LG Electronics. All rights reserved. 5th Satbyeal Advisory Group.</p>
</div>
</footer>












    </>
  );
}
