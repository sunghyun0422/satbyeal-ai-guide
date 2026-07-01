"use client";
import Link from 'next/link';
import ZoomableImage from '../components/ZoomableImage';

export default function Page() {
  return (
    <>
      <header className="bg-surface/80 glass-header sticky top-0 z-50 border-b border-border-subtle">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto w-full">
          <Link className="flex items-center h-12" href="/">
            <div className="h-full w-auto flex items-center">
              <span className="text-headline-md font-bold tracking-widest bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent drop-shadow-sm">샛별자문단 5기</span>
            </div>
          </Link>
        </div>
      </header>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        
        {/* Hero Section */}
        <section className="mt-stack-xl relative overflow-hidden rounded-xl bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-stack-lg">
            <div className="p-stack-lg lg:p-16 z-10">
              <span className="text-primary font-label-lg tracking-widest block mb-4">EPISODE 02</span>
              <h1 className="font-headline-xl text-headline-xl mb-6 break-keep">
                <span className="block">매번 똑같은 지시 내릴 건가요?</span>
                <span className="block">저도 지겨워서요🥱</span>
              </h1>
              <div className="font-body-lg text-body-lg text-on-surface-variant max-w-md space-y-4 break-keep">
                <blockquote className="border-l-4 border-primary pl-4 italic text-on-surface">
                  "당신은 지금까지 AI를 완전히 잘못 사용하고 있었다."
                </blockquote>
                <p>1편에서 공유 프로젝트로 팀의 자료와 맥락을 모았습니다. 그런데 이런 문제 남지 않나요?</p>
                <div className="bg-white p-4 rounded-lg shadow-sm text-body-md text-text-muted space-y-2">
                  <p>A: "회의록 요약해줘"</p>
                  <p>B: "담당자별 할 일까지 뽑아줘"</p>
                  <p>C: "보고서 형식으로 정리해줘"</p>
                </div>
                <p>같은 업무인데 결과물 형식이 제각각. 이럴 때 필요한 것이 바로 👉 <strong>GPTs</strong> 👈 입니다.</p>
                <p>매번 설명하던 업무 루틴, 이제 <strong>AI 비서</strong>에게 맡겨볼 차례입니다.</p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] bg-secondary-container flex items-center justify-center overflow-hidden">
              <img alt="Hero Visual" className="w-full h-full object-cover" src="/images/ai-magazine/exhausted_worker_meme.png" />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>
          </div>
        </section>

        {/* 01 GPTs란? */}
        <section className="mt-stack-xl">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4">01. GPTs란?</h2>
            <p className="font-body-lg text-body-lg font-bold mt-4">특정 목적에 맞게 만들어둔 맞춤형 ChatGPT예요.</p>
            <p className="font-body-md text-on-surface-variant mt-2">일반 ChatGPT가 범용 AI라면, GPTs는 특정 역할을 맡은 전문 AI에 가까워요. "내가 매번 설명하던 업무 방식을 미리 넣어둔 AI 비서"라고 이해하면 쉬워요🙆.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">지침 (Instructions)</h3>
              <p className="font-body-md text-on-surface-variant">GPT가 어떤 역할을 할지, 어떤 기준으로 답할지 정하는 부분</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">지식 (Knowledge)</h3>
              <p className="font-body-md text-on-surface-variant">브랜드 가이드, FAQ, 정책 문서 등 GPT가 참고할 자료</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">능력 (Capabilities)</h3>
              <p className="font-body-md text-on-surface-variant">웹 검색, 이미지 생성, 데이터 분석 등 추가 기능</p>
            </div>
          </div>
        </section>

        {/* 02 프로젝트와 GPTs 차이 */}
        <section className="mt-stack-xl bg-surface-container-low p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">02. 프로젝트와 GPTs는 어떻게 다를까?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">folder_open</span> 프로젝트</h3>
              <p className="font-body-md text-on-surface-variant mt-2"><strong>업무별 작업방🧑‍💻</strong><br/>관련 파일, 대화, 지침을 한곳에 모아두고 긴 업무를 이어갈 때 유용해요. (예: 2030 타겟 신제품 개발)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">smart_toy</span> GPTs</h3>
              <p className="font-body-md text-on-surface-variant mt-2"><strong>목적별 AI 비서🤖</strong><br/>특정 기능을 반복해서 수행하도록 만든 전문 도구. (예: 매거진 도입부 작성 GPT, 보고서 검수 GPT)</p>
            </div>
          </div>
          <table className="w-full text-left bg-white rounded-lg overflow-hidden border border-border-subtle">
            <thead className="bg-primary-container text-on-primary">
              <tr>
                <th className="p-4">구분</th>
                <th className="p-4">프로젝트</th>
                <th className="p-4">GPTs</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-on-surface-variant">
              <tr className="border-b border-border-subtle">
                <td className="p-4 font-bold text-on-surface">핵심 개념</td>
                <td className="p-4">업무별 작업방</td>
                <td className="p-4">목적별 AI 비서</td>
              </tr>
              <tr className="border-b border-border-subtle">
                <td className="p-4 font-bold text-on-surface">적합한 상황</td>
                <td className="p-4">자료와 대화를 모아 장기 작업할 때</td>
                <td className="p-4">반복 업무를 자동화하고 싶을 때</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 03 GPTs는 언제 사용할까? */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-6 border-l-4 border-primary pl-4">03. GPTs는 언제 사용할까?</h2>
          <p className="font-body-md text-on-surface-variant mb-6">GPTs는 <strong>반복되는 작업, 결과물의 형식이 정해진 작업, 특정 기준을 계속 지켜야 하는 작업</strong>에 잘 맞아요.</p>
          <div className="flex flex-col gap-8">
            <div className="w-full space-y-4">
              <div className="bg-white p-4 border border-border-subtle rounded text-body-sm text-text-muted">
                <strong>GPTs가 필요한 상황⚠️</strong><br/>
                - 매번 같은 역할을 AI에게 설명할 때<br/>
                - 매번 같은 출력 형식을 요구할 때<br/>
                - 회사 내부 자료나 정책을 기준으로 답변해야 할 때<br/>
                - 팀원들이 같은 기준으로 AI를 사용해야 할 때
              </div>
              <p className="font-body-md">일반 채팅에선 매번 긴 지시사항(형식, 말투 등)을 적어줘야 하지만, GPTs를 쓰면 <strong>회의록 내용만 복붙</strong>해도 완벽한 결과물이 나옵니다!</p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <ZoomableImage src="/images/ai-magazine/image 8.png" className="rounded-lg shadow-sm border border-border-subtle w-full object-contain" alt="일반 프롬프트 복잡함"/>
              <ZoomableImage src="/images/ai-magazine/image 9.png" className="rounded-lg shadow-sm border border-border-subtle w-full object-contain" alt="GPTs 깔끔함"/>
            </div>
          </div>
        </section>

        {/* 04 사용 방법 */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 border-l-4 border-primary pl-4">04. GPTs 직접 만들어 팀원에게 공유하기 🧑‍🤝‍🧑</h2>
          <p className="font-body-md text-on-surface-variant mb-8">우리 팀 업무 방식과 내부 기준을 담은 '우리 팀 맞춤형 GPT'를 직접 만들 수 있어요.</p>
          
          <div className="space-y-12">
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">GPT 만들기 화면 열기</h3>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/image 11.png" className="rounded-lg border border-border-subtle w-full" alt="만들기"/>
                  <ZoomableImage src="/images/ai-magazine/image 12.png" className="rounded-lg border border-border-subtle w-full" alt="만들기 진입"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">이름과 설명, 지침(Instructions) 입력</h3>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/image 14.png" className="rounded-lg border border-border-subtle w-full" alt="지침 입력"/>
                  <ZoomableImage src="/images/ai-magazine/image 15.png" className="rounded-lg border border-border-subtle w-full" alt="지침 상세"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">Knowledge(지식)에 참고 자료 업로드 & 기능 켜기</h3>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/image 16.png" className="rounded-lg border border-border-subtle w-full" alt="지식 업로드"/>
                  <ZoomableImage src="/images/ai-magazine/image 17.png" className="rounded-lg border border-border-subtle w-full" alt="기능 설정"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">실제 질문으로 테스트 및 수정</h3>
                <p className="font-body-md text-on-surface-variant mb-2">GPTs는 한 번에 완성되지 않아요. 실제 질문을 넣어가며 Instructions를 계속 다듬는 게 중요해요.</p>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/image 18.png" className="rounded-lg border border-border-subtle w-full" alt="테스트 1"/>
                  <ZoomableImage src="/images/ai-magazine/image 19.png" className="rounded-lg border border-border-subtle w-full" alt="테스트 2"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">5</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">공유 범위 설정</h3>
                <p className="font-body-md text-on-surface-variant mb-2">내부용 GPT라면 링크가 있는 사람만 볼 수 있게 하거나 워크스페이스 전용으로 설정해 보안을 지키세요.</p>
                <ZoomableImage src="/images/ai-magazine/image 20.png" className="rounded-lg border border-border-subtle w-full" alt="공유 범위"/>
              </div>
            </div>
          </div>
        </section>

        {/* 05/06 지침은 어떻게 쓸까? */}
        <section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg rounded-xl text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-primary border-b border-white/20 pb-4">05. 지침은 어떻게 쓸까?</h2>
          <p className="font-body-lg mb-6">Instructions는 GPTs의 핵심이에요. 지침이 모호하면 결과도 모호해지고, 구체적이면 안정적으로 나와요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline-md font-bold mb-4 text-primary-fixed">좋은 지침의 8요소</h3>
              <ul className="space-y-2 font-body-md text-white/80">
                <li>• GPT의 역할 / 목적</li>
                <li>• 사용자가 입력할 자료</li>
                <li>• 만들어야 할 결과물 / 형식</li>
                <li>• 말투와 문체</li>
                <li>• 반드시 지켜야 할 기준</li>
                <li>• 피해야 할 표현이나 행동</li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-headline-md mb-4 text-primary-fixed">지침 템플릿</h3>
              <pre className="whitespace-pre-wrap font-body-sm text-sm text-white/90">
                {`너는 [역할]이야.
이 GPT의 목적은 [목적]이야.
사용자가 [입력할 내용]을 주면, [해야 할 작업]을 수행해줘.

답변은 항상 [출력 형식]으로 정리해줘.
말투는 [원하는 톤]으로 작성해줘.

지켜야 할 기준: 1.[기준1] 2.[기준2]
피해야 할 것: 1.[금지1] 2.[금지2]

자료에 없는 내용은 단정하지 말고 확인 질문을 해.
결과물은 바로 복사해 쓸 수 있게 구체적으로 작성해줘.`}
              </pre>
            </div>
          </div>
        </section>

        {/* 07 Before/After */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-primary pl-4">06. Before / After</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-surface-variant p-8 rounded-xl border border-border-subtle">
              <h3 className="font-headline-md text-error flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined">cancel</span>
                BEFORE: 팀이 각자 AI를 따로 쓸 때
              </h3>
              <ZoomableImage src="/images/ai-magazine/IMG_1343.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="Before"/>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li>• 팀원마다 AI에게 다르게 물어봐서 결과물 형식이 제각각이에요.</li>
                <li>• 같은 업무를 매번 처음부터 세팅해야 해요.</li>
                <li>• 내가 없으면 새 팀원이 어떻게 해야 할지 몰라요.</li>
              </ul>
            </div>
            
            <div className="bg-primary-container text-on-primary p-8 rounded-xl">
              <h3 className="font-headline-md flex items-center gap-2 mb-6 text-on-primary">
                <span className="material-symbols-outlined">check_circle</span>
                AFTER: 팀 GPT를 만들고 나서 🙌
              </h3>
              <ZoomableImage src="/images/ai-magazine/IMG_1340.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="After"/>
              <ul className="space-y-3 font-body-md text-white/90">
                <li>• 팀원 누가 써도 같은 형식, 같은 기준으로 결과물이 나와요.</li>
                <li>• 내부 기준이 GPT 안에 담겨 따로 설명할 필요가 없어요.</li>
                <li>• 내가 없을 때도 팀이 같은 수준으로 AI를 활용할 수 있어요.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 08 GPTs 효율적 사용 팁 */}
        <section className="mt-stack-xl bg-surface-container p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">07. GPTs를 효율적으로 사용하는 팁 😽</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 1. 필요한 능력만 켜주세요 👀</h3>
                <p className="font-body-md text-on-surface-variant mb-4">웹 검색, 캔버스, 이미지 생성, 코드 인터프리터. 목적 없는 '기능 다 켜기'는 응답 속도만 늦춥니다. <strong>정말 필요한 기능만 딱 켜두는 게 고수의 세팅법</strong>입니다.</p>
              </div>
              <ZoomableImage src="/images/ai-magazine/image 21.png" className="rounded-lg border border-border-subtle w-full" alt="기능 켜기"/>
            </div>

            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-8">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 2. Knowledge에는 기준이 되는 자료를 ⬅️</h3>
                <p className="font-body-md text-on-surface-variant mb-4">기존 회의록 형식, 프로젝트 일정 가이드, FAQ 문서, 정책 문서 등. 자주 바뀌는 자료보다 오래 참고할 <strong>기준 자료</strong>를 넣는 것이 좋습니다.</p>
              </div>
              <ZoomableImage src="/images/ai-magazine/image 22.png" className="rounded-lg border border-border-subtle w-full" alt="지식 자료"/>
            </div>

            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-8">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 3. 파일을 넣을 땐 역할까지 정해주세요 🧑‍💼</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Knowledge에 파일만 두지 말고 Instructions에 역할을 명시하세요. (예: "브랜드 가이드는 금지 표현의 기준으로 써줘")</p>
                <div className="bg-white p-4 rounded text-sm mb-4">
                  "답변할 때는 업로드된 Knowledge 파일을 우선적으로 참고해줘. 자료에 없는 내용은 단정하지 마."
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <ZoomableImage src="/images/ai-magazine/image 23.png" className="rounded-lg border border-border-subtle w-full" alt="파일 역할"/>
                <ZoomableImage src="/images/ai-magazine/image 24.png" className="rounded-lg border border-border-subtle w-full" alt="지식 우선"/>
              </div>
            </div>
          </div>
        </section>

        {/* Outro */}
        <section className="mt-stack-xl text-center py-16 border-t border-border-subtle">
          <h2 className="font-headline-xl text-primary mb-6">마치며 😎</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            GPTs는 AI를 완전히 새로운 존재로 바꾸는 기능이 아니에요.<br/>
            <strong>AI가 특정 일을 더 안정적으로 반복하게 만드는 기능</strong>입니다.<br/><br/>
            AI를 잘 쓰는 사람은 질문을 길게 쓰는 사람이 아니라,<br/>
            <strong>반복되는 일을 AI가 바로 처리할 수 있도록 구조화해두는 사람</strong>이에요.
          </p>
          <Link href="/">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-lg hover:bg-primary/90 transition-colors">
              홈으로 돌아가기
            </button>
          </Link>
        </section>

      </main>
      
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
