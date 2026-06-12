"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const codeText = "AI Context Mode (Structured context) - customized prompt engineer, system message, setting system response. It helps to process complex tasks by providing structured context and memory persistence.";

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-lg-red selection:text-white">
      {/* GNB (Header) */}
      <header className="sticky top-0 z-50 w-full border-b border-lg-grey-medium bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-lg-red animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="font-extrabold text-sm tracking-wider sm:text-base">
              <span className="text-lg-red">SATBYEAL</span> ADVISORY GROUP{" "}
              <span className="text-lg-grey-dark font-medium">5th</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-lg-grey-dark">
            <Link
              href="#project"
              className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4"
            >
              프로젝트
            </Link>
            <Link
              href="#gpts"
              className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4"
            >
              GPTs
            </Link>
            <Link
              href="#cta"
              className="transition-colors hover:text-lg-red hover:underline decoration-2 underline-offset-4"
            >
              설정
            </Link>
          </nav>

          <div>
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-lg-red px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:scale-105 active:scale-95"
            >
              가이드 읽기
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lg-grey-light via-white to-white py-20 lg:py-32 border-b border-lg-grey-medium">
        {/* Background Visual Graphic */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full max-w-[50%] h-[80%] opacity-20 lg:opacity-100 pointer-events-none transition-opacity duration-500">
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
            <span className="inline-flex items-center rounded-full bg-lg-red/10 px-3.5 py-1 text-xs sm:text-sm font-bold text-lg-red tracking-wider uppercase mb-6 animate-bounce">
              압도적인 전문성
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1d1d1f] leading-[1.15] mb-6">
              샛별자문단 5기:
              <br />
              <span className="text-lg-red bg-clip-text">프리미엄 AI 가이드</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-lg-grey-dark leading-relaxed mb-10 max-w-lg lg:mx-0 mx-auto">
              최첨단 AI 인텔리전스로 데이터의 한계를 극복합니다. 직관적인 UI와 구조화된 맥락을 통해 비즈니스 의사결정의 수준을 한 단계 높이세요. 샛별자문단 5기의 프리미엄 AI 가이드를 만나보세요.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#project"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lg-red px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:-translate-y-0.5"
              >
                가이드북 다운로드
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="#gpts"
                className="inline-flex items-center justify-center rounded-xl border border-lg-grey-medium bg-white/60 backdrop-blur-sm px-6 py-3.5 text-sm sm:text-base font-bold text-lg-grey-dark transition-all duration-300 hover:bg-lg-grey-light hover:text-black"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 01: Projects */}
      <section id="project" className="py-20 lg:py-28 bg-white border-b border-lg-grey-medium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-lg-red/10 px-3 py-1 text-xs font-extrabold text-lg-red tracking-wider uppercase">
                  CHAPTER 01
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f] mb-6">
                에피소드 1: 프로젝트 - 구조화된 맥락
              </h2>
              <p className="text-base sm:text-lg text-lg-grey-dark leading-relaxed mb-8">
                솔루션 구현을 위해 데이터 아키텍처를 분석합니다. 지능형 추천 시스템을 통해 모든 프로젝트에 맥락과 연속성을 부여합니다. 콘텍스트 데이터베이스를 통한 맞춤형 지식 리소스로 나갑니다.
              </p>

              {/* Code/Context Card */}
              <div className="relative overflow-hidden rounded-2xl border border-lg-grey-medium bg-lg-grey-light p-6 shadow-sm group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-lg-red uppercase">
                    AI Context Mode (Structured context)
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-lg-grey-medium bg-white text-lg-grey-dark hover:text-black transition-colors"
                    title="복사하기"
                  >
                    {copied ? (
                      <span className="text-[10px] font-bold text-emerald-600 px-1">복사 완료!</span>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-sm font-medium font-mono text-[#1d1d1f] leading-relaxed select-all">
                  {codeText}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-lg-red to-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>

            {/* Graphic Column */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-lg-grey-medium bg-lg-grey-light p-4 shadow-md group">
                <Image
                  src="/chapter1_network.png"
                  alt="3D Networks Server Rack Asset"
                  width={800}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-white">
                  Episode 1: Projects. Data Node Efficiency: Synchronized vs Async Teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: GPTs */}
      <section id="gpts" className="py-20 lg:py-28 bg-lg-grey-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-lg-red/10 px-3 py-1 text-xs font-extrabold text-lg-red tracking-wider uppercase">
                  CHAPTER 02
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
                에피소드 2: GPTs - 업무 자동화
              </h2>
              <p className="text-base sm:text-lg text-lg-grey-dark leading-relaxed">
                나만의 맞춤형 AI 에이전트를 만나보세요. 쉽고 직관적인 빌더 툴에서부터, 나만의 GPTs 스토어를 통해 복잡한 업무를 자동화할 수 있습니다.
              </p>
            </div>
            {/* Slider Arrows */}
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-lg-grey-medium bg-white text-lg-grey-dark transition-all duration-200 hover:border-black hover:text-black">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-lg-grey-medium bg-white text-lg-grey-dark transition-all duration-200 hover:border-black hover:text-black">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Large Robots Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-lg-grey-medium bg-white p-6 sm:p-8 lg:p-12 mb-10 shadow-md">
            <div className="relative z-10 max-w-xl mb-8">
              <span className="text-xs font-bold text-lg-red tracking-wider uppercase mb-2 block">
                EPISODE 2: GPTs
              </span>
              <p className="text-sm sm:text-base text-lg-grey-dark font-medium leading-relaxed">
                Divertify Focused mini-AI robots with custom AI agents. Integrate automation and work automation.
              </p>
            </div>
            <div className="w-full h-auto rounded-2xl overflow-hidden mb-8 shadow-inner border border-lg-grey-light">
              <Image
                src="/chapter2_robots.png"
                alt="5 Cute Red Helper Robots"
                width={1200}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <div className="flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-xl bg-lg-red px-6 py-3 text-sm font-bold text-white shadow-md shadow-lg-red/10 transition-all duration-300 hover:bg-red-800 hover:scale-[1.03]">
                EXPLORE ALL AGENTS
              </button>
            </div>
          </div>

          {/* 4 Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Writer */}
            <div className="group rounded-2xl border border-lg-grey-medium bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">라이터 (Writer)</h3>
                <p className="text-sm text-lg-grey-dark leading-relaxed mb-6">
                  브랜드 콘텐츠부터 마케팅 문구까지 전문적인 글쓰기 템플릿 지원.
                </p>
              </div>
              <Link
                href="#cta"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                바로가기
                <span>→</span>
              </Link>
            </div>

            {/* Researcher */}
            <div className="group rounded-2xl border border-lg-grey-medium bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">리서처 (Researcher)</h3>
                <p className="text-sm text-lg-grey-dark leading-relaxed mb-6">
                  웹서칭 데이터를 실시간 분석 및 요약하여 깊이 있는 리서치 보고서 제공.
                </p>
              </div>
              <Link
                href="#cta"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                바로가기
                <span>→</span>
              </Link>
            </div>

            {/* Analyst */}
            <div className="group rounded-2xl border border-lg-grey-medium bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">애널리스트 (Analyst)</h3>
                <p className="text-sm text-lg-grey-dark leading-relaxed mb-6">
                  비즈니스 데이터셋 분석 및 데이터 시각화, 트렌드 모델링 및 예측 지원.
                </p>
              </div>
              <Link
                href="#cta"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                바로가기
                <span>→</span>
              </Link>
            </div>

            {/* Automator */}
            <div className="group rounded-2xl border border-lg-grey-medium bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lg-red/10 text-lg-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">오토메이터 (Automator)</h3>
                <p className="text-sm text-lg-grey-dark leading-relaxed mb-6">
                  서로 다른 서비스와 워크플로우를 연결하여 반복 업무를 스마트하게 자동화하는 흐름 구축.
                </p>
              </div>
              <Link
                href="#cta"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-lg-red transition-all duration-200 group-hover:gap-2.5 hover:underline"
              >
                바로가기
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-lg-grey-medium bg-white p-8 sm:p-16 text-center shadow-lg">
            {/* Top Logo Mark */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1.5 rounded-full border border-lg-grey-medium bg-lg-grey-light px-4 py-1.5">
                <svg
                  className="h-4 w-4 text-lg-red"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xs font-bold text-[#1d1d1f]">샛별자문단 5기</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
              AI 전략의 수준을 높일 준비가 되셨나요?
            </h2>
            <p className="text-base sm:text-lg text-lg-grey-dark leading-relaxed mb-10 max-w-2xl mx-auto">
              샛별자문단 5기와 함께하세요. 차별화된 업무와 다음 10년을 맞이할 파트너들이 준비되어 있습니다.
            </p>
            <div>
              <button className="inline-flex items-center justify-center rounded-xl bg-lg-red px-8 py-4 text-base font-bold text-white shadow-lg shadow-lg-red/20 transition-all duration-300 hover:bg-red-800 hover:scale-105 active:scale-95">
                지금 설정 시작하기
              </button>
            </div>

            {/* Premium Subtle Border Glow */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-lg-red via-rose-500 to-lg-red" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-lg-grey-medium bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-lg font-black tracking-wider text-lg-red block mb-1">
                SATBYEAL
              </span>
              <span className="text-sm font-semibold text-lg-grey-dark">
                가장 스마트한 AI 파트너, 샛별자문단 5기
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-lg-grey-dark">
              <Link href="#project" className="transition-colors hover:text-black">
                회사소개
              </Link>
              <Link href="#" className="transition-colors hover:text-black">
                개인정보처리방침
              </Link>
              <Link href="#" className="transition-colors hover:text-black">
                이용약관
              </Link>
              <Link href="#" className="transition-colors hover:text-black">
                Contact
              </Link>
              <Link href="#cta" className="transition-colors hover:text-lg-red">
                지금 설정 시작하기
              </Link>
            </div>

            <div className="text-xs text-lg-grey-dark">
              © 2026 SATBYEAL ADVISORY GROUP. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
