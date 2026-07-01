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
              <span className="text-primary font-label-lg tracking-widest block mb-4">EPISODE 01</span>
              <h1 className="font-headline-xl text-headline-xl mb-6 break-keep">
                <span className="block">또 학습시키고 시작해요?</span>
                <span className="block">저도요. 🔥 🙋</span>
              </h1>
              <div className="font-body-lg text-body-lg text-on-surface-variant max-w-md space-y-4 break-keep">
                <blockquote className="border-l-4 border-primary pl-4 italic text-on-surface">
                  "당신은 지금까지 AI를 완전히 잘못 사용하고 있었다."
                </blockquote>
                <p>지금 팀에서 AI를 쓰는 방식이 혹시 이렇지 않나요?</p>
                <p className="bg-white p-4 rounded-lg shadow-sm text-body-md text-text-muted">
                  A가 자료를 AI에 넣고 초안을 만들어요. B가 그걸 받아서 본인 AI에 다시 넣고, C가 최종본 만들 때 또 처음부터 넣어요.
                </p>
                <p className="leading-relaxed">
                  <span className="block mb-2">같은 자료를 팀원 수만큼 반복해서 AI에 넣고 있다면,</span>
                  <span className="block">문제는 AI가 아니라 <strong>AI를 쓰는 구조</strong>예요.</span>
                </p>
                <p className="leading-relaxed mt-4">
                  <span className="block mb-2">답답한 거 못 참는 성격이라 제가 직접 해결책을 가져왔습니다🕴️.</span>
                  <span className="block">판을 뒤집을 '진짜' 비기. 이름하여 👉 <strong>"공유 프로젝트"</strong> 👈</span>
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <img alt="Hero Visual" className="w-full h-full object-cover" src="/images/ai-magazine/image.png" />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>
          </div>
        </section>

        {/* 01 프로젝트란? */}
        <section className="mt-stack-xl">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4">01. 프로젝트란?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">일단 공유 프로젝트를 알기 전에 프로젝트가 무엇인지 알아야 하겠죠? 👐</p>
            <p className="font-body-lg font-bold mt-4">프로젝트는 AI에게 업무 전용 책상을 만들어주는 기능이에요.</p>
            <p className="font-body-md mt-2">일반 채팅창이 그때그때 질문을 던지는 대화방이라면, 프로젝트는 특정 업무를 위해 만들어두는 <strong>작업 공간</strong>에 가까워요. 프로젝트 안에 파일을 넣고, 지침을 설정해두면 AI는 그 기준을 바탕으로 더 일관된 답변을 제공해요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">settings</span>
              <h3 className="font-headline-md text-headline-md mb-2">지침 설정</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">AI의 역할, 말투, 답변 형식, 주의사항을 미리 정할 수 있어요.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">upload_file</span>
              <h3 className="font-headline-md text-headline-md mb-2">파일 업로드</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">보고서, 회의록, 브랜드 가이드, 설문 결과 등을 넣어둘 수 있어요.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">forum</span>
              <h3 className="font-headline-md text-headline-md mb-2">대화 관리</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">같은 주제의 채팅을 프로젝트 안에 모아둘 수 있어요.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">psychology</span>
              <h3 className="font-headline-md text-headline-md mb-2">맥락 유지</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">프로젝트 안에서는 설정한 지침과 파일을 바탕으로 답변을 받을 수 있어요.</p>
            </div>
          </div>
        </section>

        {/* 02 & 03 언제 쓸까? & 공유 프로젝트 */}
        <section className="mt-stack-xl flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-surface-container-low p-8 rounded-xl">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">02. 프로젝트는 언제 쓸까?</h2>
            <p className="font-body-md mb-6">프로젝트는 <strong>자료가 많은 업무</strong>, <strong>맥락 유지가 중요한 업무🙆</strong>에 특히 잘 맞아요.</p>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex gap-2"><span className="text-primary">✓</span> 매번 같은 배경 설명을 반복할 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> 여러 파일을 바탕으로 기획안을 만들 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> 채팅이 쌓여서 이전 대화를 찾기 어려울 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> 브랜드 톤앤매너나 내부 기준을 계속 유지해야 할 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> AI를 콘텐츠팀, 리서치팀처럼 업무별로 나눠 쓸 때</li>
            </ul>
          </div>
          <div className="flex-1 bg-primary-container text-on-primary p-8 rounded-xl flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg mb-4">03. 공유 프로젝트 🧑‍🤝‍🧑</h2>
            <p className="font-body-lg font-bold mb-4">말 그대로예요. 프로젝트를 팀원들과 함께 쓰는 거예요.</p>
            <p className="font-body-md opacity-90 mb-4">
              프로젝트가 "나만의 AI 작업 공간"이라면, 공유 프로젝트는 그 작업 공간을 <strong>팀원들에게 열어주는 것</strong>이에요.
            </p>
            <p className="font-body-md opacity-90">
              한 명이 세팅해두면, 팀원 모두가 같은 파일·같은 지침·같은 맥락 위에서 바로 작업 시작.<br/>
              "나 이 자료 AI에 넣어뒀는데, 너도 다시 넣어야 해"는 이제 없어요.
            </p>
          </div>
        </section>

        {/* 04 시작하는 법 */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-primary pl-4">04. 공유 프로젝트 시작하는 법 🙌</h2>
          
          <div className="space-y-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 1. 새 프로젝트 만들기</h3>
                <p className="font-body-md text-on-surface-variant">ChatGPT 왼쪽 사이드바에서 <strong>프로젝트</strong> 메뉴를 선택하고 새 프로젝트를 만들어요.</p>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/IMG_1353.jpeg" className="rounded-lg border border-border-subtle w-full" alt="새 프로젝트 만들기 1"/>
                <ZoomableImage src="/images/ai-magazine/image 1.png" className="rounded-lg border border-border-subtle w-full" alt="새 프로젝트 만들기 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 2. 관련 파일 업로드하기 ⬇️</h3>
                <p className="font-body-md text-on-surface-variant mb-4">프로젝트 안에 AI가 참고해야 할 자료를 넣어주세요. 파일은 많을수록 좋은 게 아니라, <strong>기준이 될 만한 자료</strong>를 넣는 게 중요해요.</p>
                <div className="bg-surface-container-low p-4 rounded-lg font-body-sm">
                  <strong>예시 (2030 타겟 신제품 캠페인 기획):</strong><br/>
                  - 고객 데이터 파일<br/>
                  - 경쟁사 캠페인 분석 문서<br/>
                  - 신제품 브리프 문서
                </div>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/image 2.png" className="rounded-lg border border-border-subtle w-full" alt="파일 업로드 1"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1354.jpeg" className="rounded-lg border border-border-subtle w-full" alt="파일 업로드 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 3. 프로젝트 지침 설정하기</h3>
                <p className="font-body-md text-on-surface-variant mb-4">지침은 AI에게 “이 프로젝트에서 어떻게 일해야 하는지” 알려주는 업무 매뉴얼이에요.</p>
                <ul className="space-y-2 text-sm bg-surface-container-low p-4 rounded-lg">
                  <li><strong>작업 배경 설명:</strong> AI의 역할, 프로젝트의 목적</li>
                  <li><strong>진행 방식 지침:</strong> 참고해야 할 자료 기준</li>
                  <li><strong>어조 및 스타일:</strong> 원하는 답변 형식, 말투와 문체</li>
                  <li><strong>특정 요구 사항:</strong> 피해야 할 표현이나 행동</li>
                </ul>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/IMG_1355.jpeg" className="rounded-lg border border-border-subtle w-full" alt="지침 설정 1"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1356.jpeg" className="rounded-lg border border-border-subtle w-full" alt="지침 설정 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 4. 팀원 초대 및 권한 설정 👥</h3>
                <p className="font-body-md text-on-surface-variant mb-4">1. Share(공유) 버튼 클릭<br/>2. 팀원 이메일 검색 및 추가<br/>3. 권한(Chat 또는 Edit) 설정<br/>4. Invite(초대) 발송</p>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/IMG_1357.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 1"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1358.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 2"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1359.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 3"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1360.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 4"/>
              </div>
            </div>
          </div>
        </section>

        {/* 05 & 06 지침 가이드라인 */}
        <section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg rounded-xl text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-primary border-b border-white/20 pb-4">05. 지침, 어떻게 쓰면 좋을까?</h2>
          <p className="font-body-lg mb-6">지침은 짧은 것보다 <strong>명확한 것</strong>이 중요해요. 아래 템플릿을 그대로 복사해서 써보세요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-headline-md mb-4 text-primary-fixed">기본 템플릿</h3>
              <pre className="whitespace-pre-wrap font-body-sm text-sm text-white/90">
                {`너는 내 [업무명] 담당자야.

이 프로젝트의 목적은 [목적]이야.

내가 업로드한 자료를 최우선 기준으로 답변해줘.
자료에 없는 내용은 추측하지 말고, 필요한 경우 먼저 확인 질문을 해줘.

답변은 실무자가 바로 사용할 수 있을 정도로 구체적으로 작성해줘.

말투는 [친근하지만 전문적인 톤 / 짧고 명확한 톤 / 보고서용 비즈니스 톤]으로 해줘.

금지할 표현은 [과장된 표현 / 확인되지 않은 수치 / 애매한 말 / 뻔한 조언]이야.`}
              </pre>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-headline-md mb-4 text-primary-fixed">06. 바로 써먹는 예시: 마케팅 기획</h3>
              <pre className="whitespace-pre-wrap font-body-sm text-sm text-white/90">
                {`너는 내 [마케팅] 2030 타겟 신제품 캠페인 기획 프로젝트 담당자야.

이 프로젝트의 목적은 2030 소비자를 라이프스타일·소비 습관 기준으로 구체화하여, 론칭 3개월 내 전환율 20% 초과 달성하는 것이야.

내가 업로드한 자료를 최우선 기준으로 답변해줘.

말투는 짧고 명확한 비즈니스 톤으로 작성해줘. 결론을 먼저 쓰고 근거를 붙여줘.

금지할 표현:
- "2030은 디지털 네이티브입니다" 같은 출처 없는 일반론
- 근거 없는 수치
- 추상적인 가치 표현`}
              </pre>
            </div>
          </div>
        </section>

        {/* 07 Before/After */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-primary pl-4">07. 효율의 변화 (Before & After)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-surface-variant p-8 rounded-xl border border-border-subtle">
              <h3 className="font-headline-md text-error flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined">cancel</span>
                BEFORE: 각자 AI를 따로 쓸 때
              </h3>
              <ZoomableImage src="/images/ai-magazine/IMG_1344.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="Before"/>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li>• 장원영 씨, 김재원 씨 모두 각자의 AI에 같은 배경 설명을 처음부터 다시 입력해요.</li>
                <li>• 사람마다 AI 설정이 달라 결과물 품질에 편차가 생겨요.</li>
                <li>• 새 팀원이 오면 "그 자료 어디 있어요?"가 또 반복돼요.</li>
              </ul>
            </div>
            
            <div className="bg-primary-container text-on-primary p-8 rounded-xl">
              <h3 className="font-headline-md flex items-center gap-2 mb-6 text-on-primary">
                <span className="material-symbols-outlined">check_circle</span>
                AFTER: 공유 프로젝트를 쓸 때
              </h3>
              <ZoomableImage src="/images/ai-magazine/IMG_1341.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="After"/>
              <ul className="space-y-3 font-body-md text-white/90">
                <li>• 자료는 한 번만 넣으면 팀 전체가 같은 맥락에서 시작해요.</li>
                <li>• "이 방향으로 초안 잡아줘" 본론만 물어보면 끝!</li>
                <li>• 새 팀원도 링크 하나로 바로 같은 출발선에서 시작할 수 있어요.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 08 & 09 꿀팁 */}
        <section className="mt-stack-xl bg-surface-container p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">08. 프로젝트를 200% 활용하는 꿀팁 🍯</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-headline-md font-bold mb-2">팁 1. 파일의 역할을 정해줘요</h3>
              <p className="font-body-md text-on-surface-variant mb-4">자료별로 "참고해줘"가 아니라 어떤 역할로 쓸지 명확히 지시하세요.</p>
              <div className="bg-white p-4 rounded text-sm text-on-surface">
                - 업로드한 고객 데이터 파일은 페인포인트 파악 <strong>기준</strong>으로.<br/>
                - 경쟁사 분석 문서는 <strong>문체와 구성 방식</strong> 참고용으로.
              </div>
            </div>
            
            <div>
              <h3 className="font-headline-md font-bold mb-2">팁 2. 방을 ‘1회성 작업실’로 인식</h3>
              <p className="font-body-md text-on-surface-variant mb-4">대화가 너무 길어지면 앞선 맥락을 잊을 수 있어요. 작업 단계가 끝나면 `+ New Chat`을 누르세요. 새 방을 열 땐 이전 작업 요약을 꼭 함께 넣어주면 흐름이 끊기지 않아요.</p>
              <div className="flex flex-col gap-6 w-full">
                <ZoomableImage src="/images/ai-magazine/image 4.png" className="rounded-lg border border-border-subtle w-full" alt="팁 4"/>
                <ZoomableImage src="/images/ai-magazine/IMG_1361.jpeg" className="rounded-lg border border-border-subtle w-full" alt="팁 1361"/>
                <ZoomableImage src="/images/ai-magazine/image 5.png" className="rounded-lg border border-border-subtle w-full" alt="팁 5"/>
              </div>
            </div>

            <div>
              <h3 className="font-headline-md font-bold mb-2">09. ChatGPT가 아니어도 활용할 수 있어요</h3>
              <p className="font-body-md text-on-surface-variant mb-4">Claude의 Projects나 Gemini의 Notebook에서도 비슷하게 활용할 수 있답니다. 🏘️</p>
              <div className="flex flex-col gap-8 w-full">
                <ZoomableImage src="/images/ai-magazine/image 6.png" className="rounded-lg border border-border-subtle w-full object-contain" alt="클로드"/>
                <ZoomableImage src="/images/ai-magazine/image 7.png" className="rounded-lg border border-border-subtle w-full object-contain" alt="제미나이"/>
              </div>
            </div>
          </div>
        </section>

        {/* Outro */}
        <section className="mt-stack-xl text-center py-16 border-t border-border-subtle">
          <h2 className="font-headline-xl text-primary mb-6">마치며 😎</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            프로젝트는 AI를 갑자기 똑똑하게 만드는 기능이 아니에요.<br/>
            <strong>팀 전체가 AI를 같은 맥락에서 쓸 수 있게 만드는 기능</strong>이에요.<br/><br/>
            AI를 잘 쓰는 팀은 각자 프롬프트를 연구하는 팀이 아니라, <strong>AI가 팀 전체를 위해 일할 수 있는 환경을 먼저 만들어두는 팀 🫂</strong>입니다.
          </p>
          <Link href="/part2">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-lg hover:bg-primary/90 transition-colors">
              다음 편: 매번 똑같은 지시 내릴 건가요? GPTs 알아보기 ➔
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
