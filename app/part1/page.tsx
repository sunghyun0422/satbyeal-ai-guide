"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/*  TopNavBar  */}
<header className="bg-surface/80 glass-header sticky top-0 z-50 border-b border-border-subtle">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto w-full"><a className="flex items-center h-12" href="#"><div className="h-full w-auto flex items-center"><span className="text-headline-md font-bold tracking-widest bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent drop-shadow-sm">샛별자문단 5기</span></div></a></div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
{/*  Hero Section  */}
<section className="mt-stack-xl relative overflow-hidden rounded-xl bg-surface-container-low">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-stack-lg">
<div className="p-stack-lg lg:p-16 z-10">
<span className="text-primary font-label-lg tracking-widest block mb-4">EPISODE 01</span>
<h1 className="font-headline-xl text-headline-xl mb-6">AI가 바로 일할 수 있는<br />작업방 만들기: 프로젝트</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                        매번 똑같은 상황 설명을 반복하고 계신가요? LG AI 자문단이 제안하는 최적의 작업 효율화 솔루션, '프로젝트' 기능을 소개합니다.
                    </p>
</div>
<div className="relative h-[400px] lg:h-[600px]">
<img alt="Premium AI Workspace Visual" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvvbzAQqQY1z5RNCxcDe4rPNZWjh3MtAccSJbFJRcCR44dZ4H18SzlkzSb4_FOI98BiUCqmi9dE6uMD-RNDqTzhm9iYqkyurZ-VNzftQJ7DL4sTeQc6hQQBu53Qx86EiQzti2SCa5Np58_2ziWaACkVf_-dwP8z1D1EdKaP9hIB_lk-GnLlWbs4o6NPdTpMp0MBoYA51AQa3bgUSGpCxKGwb1SWgE4TYr0g2MejKw_x4YdoDWRVBrGfTQ" />
<div className="absolute inset-0 hero-gradient"></div>
</div>
</div>
</section>
{/*  01 프로젝트란? Bento Layout  */}
<section className="mt-stack-xl">
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4">01 프로젝트란?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">AI를 위한 전용 책상을 마련해주는 것과 같습니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-2 bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
<span className="material-symbols-outlined text-primary text-4xl mb-4">description</span>
<h3 className="font-headline-md text-headline-md mb-2">맞춤형 지침</h3>
<p className="font-body-md text-body-md text-on-surface-variant">이 프로젝트에서 AI가 어떤 역할을 수행해야 하는지, 어떤 톤앤매너를 유지해야 하는지 미리 정의합니다.</p>
</div>
<div className="md:col-span-1 bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
<span className="material-symbols-outlined text-primary text-4xl mb-4">upload_file</span>
<h3 className="font-headline-md text-headline-md mb-2">지식 베이스</h3>
<p className="font-body-md text-body-md text-on-surface-variant">관련 문서와 데이터를 업로드하여 AI가 맥락을 학습하게 합니다.</p>
</div>
<div className="md:col-span-1 bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
<span className="material-symbols-outlined text-primary text-4xl mb-4">history</span>
<h3 className="font-headline-md text-headline-md mb-2">대화 관리</h3>
<p className="font-body-md text-body-md text-on-surface-variant">하나의 주제로 이어지는 모든 대화 기록을 한눈에 관리합니다.</p>
</div>
</div>
</section>
{/*  02 언제 쓸까? Magazine Style Cards  */}
<section className="mt-stack-xl">
<h2 className="font-headline-lg text-headline-lg mb-stack-lg">02 언제 쓸까?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div className="group cursor-pointer">
<div className="aspect-[16/9] overflow-hidden rounded-xl mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional team in a modern LG office setting, brainstorming around a minimalist white table with digital displays in the background. The lighting is soft and neutral with signature red accents in the decor. High-end corporate editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxHd_ghONs3Xc8j43FC2_fuevEuLy3WhT42Bh6X81x569T38AdfCu0wnt1UJXzH952B8RvEWtvKOO_urbaUzm4m_tbc50FHGt2dQFLg2u4WB3wIWMCaQHD7Kcv_KdMHQTNVURCQf-6RGjuAF5qAvVcxl97i2R02j5SBLYZqChr0wkTDXgwk76DPsYrgvWf1vEZByMqP7JBRtnZkuTTFJULHasSpj3tYKkH6NQ6gdvkSRKqNPGxPQ36hkDlvyk2GWKwAFfDBe43qM" />
</div>
<span className="text-primary font-label-lg">SCENARIO 01</span>
<h3 className="font-headline-md text-headline-md mt-2">반복적인 상황 설명이 지칠 때</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">브랜드 가이드라인, 마케팅 타겟 정보를 매 채팅마다 붙여넣지 않아도 됩니다.</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/9] overflow-hidden rounded-xl mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist desktop workspace featuring high-tech gadgets and multiple thin documents laid out in an organized grid. The color palette is composed of cool grays and crisp whites with a single vibrant red desk lamp providing a focused surgical accent light. Professional and authoritative mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB447CCXpMu6oi_8sTHaDewwJ4FcdH7ZTqM-gDGUbsOrYTlfEI9TlYUkvyrjG_SL_9VHdusNzpRenygbMUl9y62qr8chiB6p9-Ub3DoKHjKpslFKKCfe1Zdy6vassAD_0LO7_njgjfDnkZhx8LDn_8KLtuu95yMHPwkAhPcl1OiiP5Tvsv0ECbMUH6-xMw4EgxIn_26aU8FcsGFEYvkoPCnnVMGzgI9ywVAwFJ9yMkzsFMfJKGOmNXQwSgUxJToVS6rrUFm3pFO_RU" />
</div>
<span className="text-primary font-label-lg">SCENARIO 02</span>
<h3 className="font-headline-md text-headline-md mt-2">방대한 참고 자료가 있을 때</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">수십 개의 PDF 보고서를 한꺼번에 분석하고 인사이트를 도출해야 하는 복합 프로젝트에 최적입니다.</p>
</div>
</div>
</section>
{/*  03 비교표 Comparison Table  */}
<section className="mt-stack-xl">
<h2 className="font-headline-lg text-headline-lg mb-stack-lg">03 한눈에 비교하기</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse border border-border-subtle bg-white">
<thead className="bg-surface-container-low">
<tr>
<th className="p-6 font-label-lg border-b border-border-subtle">구분</th>
<th className="p-6 font-label-lg border-b border-border-subtle">일반 채팅</th>
<th className="p-6 font-label-lg border-b border-border-subtle text-primary">프로젝트 (추천)</th>
<th className="p-6 font-label-lg border-b border-border-subtle">GPTs</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="hover:bg-surface-tint transition-colors">
<td className="p-6 border-b border-border-subtle font-semibold">사용 목적</td>
<td className="p-6 border-b border-border-subtle">단발성 질문</td>
<td className="p-6 border-b border-border-subtle">연속적인 업무/협업</td>
<td className="p-6 border-b border-border-subtle">특정 기능 자동화/도구화</td>
</tr>
<tr className="hover:bg-surface-tint transition-colors">
<td className="p-6 border-b border-border-subtle font-semibold">맥락 유지</td>
<td className="p-6 border-b border-border-subtle">낮음 (새 채팅 시 초기화)</td>
<td className="p-6 border-b border-border-subtle text-primary font-bold">매우 높음 (고정 지침)</td>
<td className="p-6 border-b border-border-subtle">높음 (시스템 메시지)</td>
</tr>
<tr className="hover:bg-surface-tint transition-colors">
<td className="p-6 border-b border-border-subtle font-semibold">자료 업로드</td>
<td className="p-6 border-b border-border-subtle">채팅당 제한적</td>
<td className="p-6 border-b border-border-subtle">대용량 지식 공유 가능</td>
<td className="p-6 border-b border-border-subtle">설계 시점 자료 고정</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  04 시작하는 법 Step-by-Step  */}
<section className="mt-stack-xl flex flex-col md:flex-row gap-stack-lg items-center">
<div className="flex-1 order-2 md:order-1">
<h2 className="font-headline-lg text-headline-lg mb-stack-lg">04 시작하는 법</h2>
<div className="space-y-stack-md">
<div className="flex gap-6 items-start">
<span className="font-display-lg text-display-lg text-primary leading-none">01</span>
<div>
<h4 className="font-headline-md text-headline-md mb-2">사이드바에서 '프로젝트' 선택</h4>
<p className="font-body-md text-body-md text-on-surface-variant">메인 화면 좌측 메뉴에서 프로젝트 아이콘을 클릭합니다.</p>
</div>
</div>
<div className="flex gap-6 items-start py-4 border-l border-primary/20 pl-0">
<span className="font-display-lg text-display-lg text-primary leading-none">02</span>
<div>
<h4 className="font-headline-md text-headline-md mb-2">지침 및 지식 베이스 설정</h4>
<p className="font-body-md text-body-md text-on-surface-variant">AI에게 부여할 역할(Custom Instructions)을 입력하고 참고할 파일들을 업로드하세요.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<span className="font-display-lg text-display-lg text-primary leading-none">03</span>
<div>
<h4 className="font-headline-md text-headline-md mb-2">대화 시작 및 지속 관리</h4>
<p className="font-body-md text-body-md text-on-surface-variant">설정된 맥락 안에서 자유롭게 질문하고 협업하세요. 모든 기록은 안전하게 저장됩니다.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2 rounded-xl overflow-hidden shadow-xl border border-border-subtle">
<img alt="Step-by-step UI Illustration" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida/AP1WRLuALUCjCKnBtSE9KDghASZr4e1GSw1MkcQIVTpRUio633vSLj42S81X-GfvU9xVXDR-CfZa9ZGpiXbA8xax50ocQIuj4moXTmXjVVWnwWXUon9hDB-RxQd2gu7Ioo9lynOMYcqdcBIEQNL4l0M4NLToopDxkjmx9Xu0h5c6gFju0_8X5JxrZv-k2WWp2OQDOMJHB6MBBewfjZ_P1FazgyODaWoTj8zVV9In5Ql3iAvuySIEc2McUOs1MKc" />
</div>
</section>
{/*  05/06 지침 가이드 Prompt Templates  */}
<section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg lg:p-16 rounded-xl text-on-primary">
<h2 className="font-headline-lg text-headline-lg mb-stack-lg text-on-primary">05/06 프로젝트 지침 가이드</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
<div className="bg-primary-container inline-flex p-3 rounded-lg mb-4">
<span className="material-symbols-outlined text-on-primary">rate_review</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-on-primary">마케팅 리뷰어</h3>
<p className="font-label-sm text-label-sm opacity-60 mb-2">INSTRUCTIONS</p>
<p className="font-body-md text-body-md mb-4">"너는 LG전자의 브랜드 마케팅 전문가야. 업로드된 브랜드 가이드라인에 맞춰 내가 작성한 카피를 리뷰해줘."</p>
<button className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all">복사하기</button>
</div>
<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
<div className="bg-primary-container inline-flex p-3 rounded-lg mb-4">
<span className="material-symbols-outlined text-on-primary">groups</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-on-primary">회의록 요약기</h3>
<p className="font-label-sm text-label-sm opacity-60 mb-2">INSTRUCTIONS</p>
<p className="font-body-md text-body-md mb-4">"업로드된 STT 파일을 분석해서 결정사항, 액션 플랜, 주요 논점을 구분하여 LG 표준 보고서 양식으로 요약해줘."</p>
<button className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all">복사하기</button>
</div>
<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
<div className="bg-primary-container inline-flex p-3 rounded-lg mb-4">
<span className="material-symbols-outlined text-on-primary">edit_note</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-on-primary">콘텐츠 크리에이터</h3>
<p className="font-label-sm text-label-sm opacity-60 mb-2">INSTRUCTIONS</p>
<p className="font-body-md text-body-md mb-4">"최신 기술 트렌드 자료를 기반으로 블로그 포스팅 초안을 작성해줘. 독자는 IT에 관심 많은 2030 직장인이야."</p>
<button className="w-full border border-white/40 py-2 rounded font-label-lg hover:bg-white/10 transition-all">복사하기</button>
</div>
</div>
</section>
{/*  07 Before/After Efficiency  */}
<section className="mt-stack-xl">
<h2 className="font-headline-lg text-headline-lg mb-stack-lg">07 효율의 변화 (Before &amp; After)</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-xl overflow-hidden">
<div className="bg-[#F2F2F2] p-stack-lg lg:p-12">
<div className="flex items-center gap-2 text-on-secondary-variant mb-6">
<span className="material-symbols-outlined">history</span>
<span className="font-label-lg">BEFORE</span>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-on-surface-variant font-body-md">
<span className="text-error">✕</span>
                            매 대화마다 "나는 LG전자 마케터이고..." 반복 입력
                        </li>
<li className="flex gap-3 text-on-surface-variant font-body-md">
<span className="text-error">✕</span>
                            기존 대화 내용을 찾기 위해 스크롤 무한 반복
                        </li>
<li className="flex gap-3 text-on-surface-variant font-body-md">
<span className="text-error">✕</span>
                            업로드한 파일이 휘발되어 다시 업로드
                        </li>
</ul>
</div>
<div className="bg-surface-tint p-stack-lg lg:p-12">
<div className="flex items-center gap-2 text-primary mb-6">
<span className="material-symbols-outlined">auto_awesome</span>
<span className="font-label-lg">AFTER WITH PROJECTS</span>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-on-surface font-body-md">
<span className="text-primary">✓</span>
                            이미 세팅된 지침으로 즉시 본론부터 대화
                        </li>
<li className="flex gap-3 text-on-surface font-body-md">
<span className="text-primary">✓</span>
                            프로젝트 단위로 깔끔하게 정리된 워크스페이스
                        </li>
<li className="flex gap-3 text-on-surface font-body-md">
<span className="text-primary">✓</span>
                            영구 보존되는 지식 베이스 활용으로 답변 정확도 향상
                        </li>
</ul>
</div>
</div>
</section>
{/*  08 200% 활용 팁  */}
<section className="my-stack-xl">
<div className="bg-surface-container rounded-xl p-stack-lg flex flex-col md:flex-row items-center gap-8">
<div className="text-center md:text-left">
<h2 className="font-headline-lg text-headline-lg mb-2 text-primary">08 마케터를 위한 200% 활용 팁</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">프로젝트 지식 베이스에 '경쟁사 분석 보고서'와 '우리 브랜드 소구점'을 함께 넣어보세요. <br className="hidden md:block" /> 두 자료를 교차 분석하여 훨씬 날카로운 소구점을 AI가 제안해줍니다.</p>
</div>
<button className="whitespace-nowrap bg-on-surface text-surface px-8 py-4 rounded-xl font-label-lg hover:opacity-90 transition-opacity">
                    더 많은 팁 보기
                </button>
</div>
</section>
{/*  Final CTA  */}

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
<p className="">© 2024 LG Electronics. All rights reserved. Premium AI Advisory Group.</p>
</div>
</footer>




    </>
  );
}
