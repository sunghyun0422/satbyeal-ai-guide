"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/*  TopNavBar Navigation  */}
<header className="bg-surface/80 glass-header sticky top-0 z-50 border-b border-border-subtle"><div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto w-full"><Link className="flex items-center h-12" href="/"><div className="h-full w-auto flex items-center"><span className="text-headline-md font-bold tracking-widest bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent drop-shadow-sm">샛별자문단 5기</span></div></Link></div></header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
{/*  Hero Section  */}
<header className="py-stack-xl flex flex-col items-center text-center">
<div className="inline-block bg-primary text-on-primary px-4 py-1 rounded-sm font-label-sm text-label-sm mb-6 tracking-widest uppercase">Premium Magazine Vol. 02</div>
<h1 className="font-display-lg text-display-lg md:text-headline-xl mb-6 max-w-3xl leading-tight">에피소드 2. 나만의 AI 비서 만들기: GPTs</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">반복되는 프롬프트 입력에서 벗어나, 당신의 업무 스타일을 완벽히 이해하는 전담 어시스턴트를 구축하는 여정을 시작합니다.</p>
<div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[21/9]">
<img alt="Premium AI Robots" className="w-full h-full object-cover" src="/images/premium_ai_robots.png" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
</header>
{/*  01 Introduction: Moving beyond repeating  */}
<section className="py-stack-xl grid md:grid-cols-2 gap-stack-lg items-center">
<div>
<span className="text-primary font-bold text-headline-md block mb-4">01</span>
<h2 className="font-headline-xl text-headline-xl mb-6">GPTs란 무엇인가?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                    단순한 대화형 AI를 넘어, 특정 목적에 맞게 최적화된 맞춤형 ChatGPT입니다. 복잡한 지침(Instructions), 전문 지식(Knowledge), 그리고 외부 도구(Capabilities)를 결합하여 나만의 디지털 페르소나를 생성합니다.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>list_alt</span>
<div>
<div className="font-bold">Instructions</div>
<div className="text-label-lg text-on-surface-variant">어떻게 행동하고 대답해야 하는지에 대한 정교한 가이드라인</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>auto_stories</span>
<div>
<div className="font-bold">Knowledge</div>
<div className="text-label-lg text-on-surface-variant">특정 프로젝트나 도메인에 특화된 고유 데이터 파일 업로드</div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-high rounded-3xl p-stack-lg border border-border-subtle aspect-square flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-white text-5xl">smart_toy</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Custom AI Agent</h3>
<p className="text-on-surface-variant">No Coding Required. Just Logic.</p>
</div>
</section>
{/*  02 프로젝트 vs GPTs: Comparison table  */}
<section className="py-stack-xl">
<div className="text-center mb-stack-lg">
<span className="text-primary font-bold text-headline-md block mb-4">02</span>
<h2 className="font-headline-xl text-headline-xl">Project vs GPTs</h2>
<p className="text-on-surface-variant">워크룸 환경과 어시스턴트 환경의 차이</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
<div className="bg-secondary-fixed p-stack-lg">
<div className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">workspaces</span> 일반 대화 / 프로젝트
                    </div>
<ul className="space-y-3 font-body-md text-body-md">
<li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">close</span> 매번 같은 제약사항을 반복 입력</li>
<li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">close</span> 대화가 길어질수록 초기 설정 망각</li>
<li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">close</span> 범용적인 지식 기반 답변 제공</li>
</ul>
</div>
<div className="bg-surface-tint p-stack-lg border-l-2 border-primary">
<div className="font-headline-md text-headline-md mb-4 flex items-center gap-2 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span> GPTs (어시스턴트)
                    </div>
<ul className="space-y-3 font-body-md text-body-md">
<li className="flex items-center gap-2 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 단 한 번의 설정으로 모든 대화에 적용</li>
<li className="flex items-center gap-2 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 가이드라인을 영구적으로 유지 및 준수</li>
<li className="flex items-center gap-2 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 업로드된 전문 문서를 우선적 참고</li>
</ul>
</div>
</div>
</section>
{/*  04/05 사용 방법  */}
<section className="py-stack-xl">
<div className="grid lg:grid-cols-12 gap-stack-lg">
<div className="lg:col-span-4">
<span className="text-primary font-bold text-headline-md block mb-4">04-05</span>
<h2 className="font-headline-xl text-headline-xl mb-6">시작하기: 생성과 탐색</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                        기존에 만들어진 글로벌 GPTs를 활용하거나, 단 10분 만에 본인만의 전용 어시스턴트를 구축할 수 있습니다.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
<p className="font-body-md">ChatGPT 메인 화면의 'Explore GPTs' 클릭</p>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
<p className="font-body-md">'+ Create' 버튼으로 에디터 진입</p>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
<p className="font-body-md">'Configure' 탭에서 이름, 설명, 지침 입력</p>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="rounded-3xl overflow-hidden border border-border-subtle shadow-2xl">
<img alt="LG AI Center Branding with Crystal" className="w-full h-full object-cover aspect-video" src="/images/lg_ai_center.png" />
</div>
</div>
</div>
</section>
{/*  06/07 지침 작성법 & 예시: Bento Grid  */}
<section className="py-stack-xl">
<h2 className="font-headline-xl text-headline-xl text-center mb-stack-lg">Professional Templates</h2>
<div className="grid md:grid-cols-3 gap-6">
{/*  Magazine Editor  */}
<div className="p-8 bg-white border border-border-subtle rounded-2xl hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">auto_awesome</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Magazine Editor</h3>
<p className="text-on-surface-variant text-label-lg mb-6 leading-relaxed">
                        "당신은 프리미엄 매거진 에디터입니다. 모든 답변은 세련된 문체로, 가독성 높은 레이아웃을 추천하며 작성하세요."
                    </p>
<div className="text-primary font-bold text-label-sm tracking-widest">#Editorial_Tone</div>
</div>
{/*  Review Bot  */}
<div className="p-8 bg-white border border-border-subtle rounded-2xl hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">fact_check</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Review Bot</h3>
<p className="text-on-surface-variant text-label-lg mb-6 leading-relaxed">
                        "고객 피드백 데이터를 분석하여 핵심 인사이트와 개선점 3가지를 표 형식으로 즉시 도출하는 분석 전문가입니다."
                    </p>
<div className="text-primary font-bold text-label-sm tracking-widest">#Data_Analysis</div>
</div>
{/*  SNS Copywriter  */}
<div className="p-8 bg-white border border-border-subtle rounded-2xl hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">campaign</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">SNS Copywriter</h3>
<p className="text-on-surface-variant text-label-lg mb-6 leading-relaxed">
                        "MZ세대의 언어 습관을 반영하여 인스타그램, 스레드에 최적화된 짧고 강렬한 카피와 해시태그를 제안합니다."
                    </p>
<div className="text-primary font-bold text-label-sm tracking-widest">#Viral_Marketing</div>
</div>
</div>
</section>
{/*  08 Before/After Section  */}
<section className="py-stack-xl bg-surface-container rounded-[2rem] px-margin-mobile md:px-margin-desktop overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
<div className="relative z-10">
<span className="text-primary font-bold text-headline-md block mb-4 text-center">08 Efficiency Boost</span>
<h2 className="font-headline-xl text-headline-xl text-center mb-stack-lg">일반 채팅 vs 특화 GPTs</h2>
<div className="grid md:grid-cols-2 gap-12 items-stretch">
<div className="flex flex-col">
<div className="bg-secondary/10 px-4 py-2 rounded-t-xl font-bold text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-sm">history</span> Before: 일반 ChatGPT
                        </div>
<div className="bg-white/50 p-6 rounded-b-xl border border-border-subtle flex-grow">
<div className="space-y-4 opacity-60">
<div className="h-4 bg-secondary-container rounded w-3/4"></div>
<div className="h-4 bg-secondary-container rounded w-full"></div>
<div className="h-4 bg-secondary-container rounded w-5/6"></div>
<p className="text-label-sm mt-4 text-secondary italic">"매번 톤앤매너를 다시 설명하고 예시 파일을 다시 올리는 중..."</p>
</div>
<div className="mt-8 flex justify-between items-end">
<span className="text-headline-md font-bold text-on-surface">5분 소요</span>
<span className="text-label-sm text-secondary">준비 단계 포함</span>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="active-red-gradient px-4 py-2 rounded-t-xl font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span> After: LG 전용 GPTs
                        </div>
<div className="bg-white p-6 rounded-b-xl border-2 border-primary flex-grow shadow-lg">
<div className="space-y-4">
<div className="h-4 bg-primary/20 rounded w-full"></div>
<div className="h-4 bg-primary/20 rounded w-full"></div>
<div className="h-4 bg-primary/20 rounded w-full"></div>
<p className="text-label-sm mt-4 text-primary font-bold">"파일 업로드 없이 즉시 분석 시작. 정해진 양식으로 자동 출력."</p>
</div>
<div className="mt-8 flex justify-between items-end">
<span className="text-headline-md font-bold text-primary">30초 이내</span>
<span className="text-label-sm text-primary">즉시 실행</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  09 효율 활용 팁  */}
<section className="py-stack-xl">
<h2 className="font-headline-md text-headline-md mb-8 border-l-4 border-primary pl-4">Pro Tips: 더 똑똑한 비서 만들기</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-2">
<div className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">language</span> Web Browsing
                    </div>
<p className="text-on-surface-variant font-body-md">최신 정보를 검색해야 하는 업무라면 지침에 '항상 실시간 웹 검색을 선행할 것'을 명시하세요.</p>
</div>
<div className="flex flex-col gap-2">
<div className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">data_object</span> Code Interpreter
                    </div>
<p className="text-on-surface-variant font-body-md">복잡한 엑셀 데이터 분석이나 데이터 시각화가 필요한 경우 이 옵션을 반드시 활성화해야 합니다.</p>
</div>
<div className="flex flex-col gap-2">
<div className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">palette</span> DALL·E 3
                    </div>
<p className="text-on-surface-variant font-body-md">보고서용 삽화나 브랜드 이미지를 자동 생성하도록 설정하여 시각적 완성도를 높이세요.</p>
</div>
</div>
</section>
</main>
{/*  Footer CTA  */}
<footer className="bg-secondary py-stack-xl border-t border-white/10"><div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-lg w-full"><div className="flex flex-col gap-4"><p className="font-body-md text-surface-variant/80 max-w-xs">Premium AI Advisory Group. 실무자를 위한 최적의 AI 경험을 디자인합니다.</p></div></div><div className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-surface-variant/60 font-body-md"><p className="">© 2026 LG Electronics. All rights reserved. 5th Satbyeal Advisory Group.</p></div></footer>
{/*  FAB for quick action  */}

    </>
  );
}
