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
        
        {/* Title & Hero Section */}
        <section className="mt-stack-xl mb-stack-xl">
          <h1 className="font-headline-xl text-headline-xl mb-8 break-keep text-center md:text-left">
            <span className="block text-primary text-lg mb-2 tracking-wider font-bold">1편</span>
            <span className="block">또 학습시키고 시작해요?</span>
            <span className="block">저도요. 🔥 🙋</span>
          </h1>
          <div className="relative rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden h-[400px] lg:h-[600px]">
            <img alt="Hero Visual" className="w-full h-full object-cover" src="/images/ai-magazine/notion/image.png" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
        </section>

        {/* Before / After */}
        <section className="mt-stack-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Before */}
            <div className="bg-surface-variant p-8 rounded-xl border border-border-subtle flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="font-headline-md text-error flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-4xl">cancel</span>
                Before — 지금 우리 팀이 AI를 쓰는 방식
              </h3>
              <div className="font-body-lg text-on-surface-variant space-y-4 break-keep flex-1 flex flex-col">
                <p>장원영 씨, 오늘도 새 채팅창을 열었어요.<br/>김재원 씨가 만든 가이드라인을 ChatGPT에 붙여 넣고 또 처음부터 설명 시작.</p>
                <div className="bg-white p-4 rounded-lg shadow-sm text-body-md text-on-surface space-y-2 italic">
                  <p>"이 가이드라인 참고해서 초안 써줘. 우리 팀 톤은 이렇고, 목적은…"</p>
                </div>
                <p>
                  <span className="block mb-2">초안이 나오면 이번엔 김재원 씨 차례. 본인 ChatGPT에 또 넣어요. 배경 설명 또 처음부터. 😵‍💫</span>
                  <span className="block">새 팀원 오면요? "그 자료 어디 있어요?" 다시 처음부터. 🤦</span>
                </p>
                
                <div className="flex-1 flex flex-col justify-center my-6">
                  <ZoomableImage src="/images/ai-magazine/notion/IMG_1344.jpeg" className="rounded-lg w-full object-contain border border-border-subtle max-h-[400px]" alt="Before"/>
                </div>
              </div>
            </div>
            
            {/* After */}
            <div className="bg-primary-container text-on-primary p-8 rounded-xl flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="font-headline-md flex items-center gap-2 mb-6 text-on-primary">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
                After — '이것'을 더하고 나서 🙊
              </h3>
              <div className="font-body-lg text-white/90 space-y-4 break-keep flex-1 flex flex-col">
                <p>김재원 씨가 "팀 공유 프로젝트"를 하나 만들었어요.</p>
                <p>가이드라인, 조사 자료, 기존 결과물을 넣고 팀원들에게 링크 공유. 끝.</p>
                <p>이제 장원영 씨는 이렇게만 말해요.</p>
                <blockquote className="border-l-4 border-white/50 pl-4 italic text-white my-4 bg-white/10 py-3 rounded-r-lg">
                  "이 방향으로 초안 잡아줘."
                </blockquote>
                
                <div className="flex-1 flex flex-col justify-center my-6">
                  <ZoomableImage src="/images/ai-magazine/notion/IMG_1341.jpeg" className="rounded-lg w-full object-contain border border-white/20 max-h-[400px]" alt="After"/>
                </div>
                
                <p>AI는 이미 다 알고 있어요. 김재원 씨도 배경 설명 없이 바로 검토 시작. 새 팀원이 와도 링크 하나면 끝. 💁</p>
              </div>
            </div>

          </div>
        </section>

        {/* 연결 텍스트 */}
        <section className="mt-stack-xl mb-stack-lg">
          <div className="bg-surface-variant p-10 rounded-xl border border-border-subtle space-y-6 text-center w-full">
            <p className="font-body-lg text-on-surface-variant break-keep font-bold text-xl">
              여기서 잠깐, 손 좀 들어볼게요🙋
            </p>
            <p className="font-body-lg text-on-surface-variant break-keep">
              혹시 지금 팀에서 AI 쓰는 방식, 이거랑 똑같지 않나요?<br/>
              근데 여기서 '이것' 하나만 더하면?
            </p>
            <div className="py-2"></div>
            <p className="font-body-lg text-on-surface-variant break-keep font-bold text-xl">
              그래서 '이것'이 뭔지 궁금하시지 않나요?
            </p>
            <p className="font-body-lg text-on-surface-variant break-keep">
              그냥 그렇고 그런 방법 말고, 판을 뒤집는 진짜 비기. 이름하여 <strong className="text-primary text-2xl">👉 "공유 프로젝트" 👈</strong>
            </p>
            <p className="font-body-lg text-on-surface-variant break-keep">
              뭔지 알고 싶으면, 계속 따라오세요.
            </p>
          </div>
        </section>



        {/* 01 프로젝트란? */}
        <section className="mt-stack-xl">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4">01. 프로젝트란?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">일단 공유 프로젝트를 알기 전에 '프로젝트'가 무엇인지 알아야 하겠죠? 👐</p>
            <p className="font-body-lg font-bold mt-4">단순 1회성 대화방인 일반 채팅창과 달리, 프로젝트는 AI에게 '업무 전용 책상'을 만들어주는 기능이에요.</p>
            <p className="font-body-md mt-2">파일과 지침을 미리 설정해두면 AI가 이를 기준으로 훨씬 일관성 있는 답변을 제공해요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">settings</span>
              <h3 className="font-headline-md text-headline-md mb-2">지침 설정</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">AI의 역할, 말투, 답변 형식 사전 세팅</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">upload_file</span>
              <h3 className="font-headline-md text-headline-md mb-2">파일 업로드</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">보고서, 가이드 등 업무 참고 자료 첨부</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">forum</span>
              <h3 className="font-headline-md text-headline-md mb-2">대화 관리</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">동일한 주제의 채팅 내역을 한 곳에 보관</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-subtle hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">psychology</span>
              <h3 className="font-headline-md text-headline-md mb-2">맥락 유지</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">세팅된 지침과 자료를 바탕으로 정확한 답변 도출</p>
            </div>
          </div>
        </section>

        {/* 02 & 03 언제 쓸까? & 공유 프로젝트 */}
        <section className="mt-stack-xl flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-surface-container-low p-8 rounded-xl">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">02. 프로젝트는 언제 쓸까?</h2>
            <p className="font-body-md mb-6">프로젝트는 <strong>자료가 많은 업무</strong>, <strong>맥락 유지가 중요한 업무🙆</strong>에 잘 맞아요.</p>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex gap-2"><span className="text-primary">✓</span> 여러 파일을 참고해 작업할 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> 같은 설명을 반복해야 할 때</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> 톤앤매너나 내부 기준을 유지해야 할 때</li>
            </ul>
            <p className="font-body-md mt-6 text-on-surface-variant">한 번 묻고 끝나는 질문은 일반 채팅이 편해요. 하지만 계속 이어지는 업무라면 프로젝트를 만들어두는 편이 훨씬 효율적이에요.</p>
          </div>
          <div className="flex-1 bg-primary-container text-on-primary p-8 rounded-xl flex flex-col justify-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">03. 공유 프로젝트 🧑‍🤝‍🧑</h2>
              <p className="font-body-lg font-bold mb-4">공유 프로젝트는 말 그대로 프로젝트를 팀원들과 함께 쓰는 거예요.</p>
              <p className="font-body-md opacity-90 mb-4">
                한 명이 세팅해두면, 팀원 모두가 같은 파일·같은 지침·같은 맥락 위에서 바로 작업 시작.
              </p>
              <p className="font-body-md opacity-90">
                "나 이 자료 AI에 넣어뒀는데, 너도 다시 넣어야 해"는 이제 없어요.
              </p>
            </div>
          </div>
        </section>

        {/* 02 & 03 섹션 분리된 짤방 */}
        <section className="mt-stack-lg flex justify-center">
          <ZoomableImage src="/images/ai-magazine/notion/image 2.png" className="rounded-xl shadow-md border border-border-subtle w-full max-w-4xl object-contain" alt="해봐야지요"/>
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
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1353.jpeg" className="rounded-lg border border-border-subtle w-full" alt="새 프로젝트 만들기 1"/>
                <ZoomableImage src="/images/ai-magazine/notion/image 3.png" className="rounded-lg border border-border-subtle w-full" alt="새 프로젝트 만들기 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 2. 관련 파일 업로드하기 ⬇️</h3>
                <p className="font-body-md text-on-surface-variant mb-4">프로젝트 안에 AI가 참고해야 할 자료를 넣어주세요. 파일은 많을수록 좋은 게 아니라, <strong>기준이 될 만한 자료</strong>를 넣는 게 중요해요.</p>
                <div className="bg-surface-container-low p-4 rounded-lg font-body-sm text-on-surface-variant">
                  <strong>예를 들어 2030 타겟 신제품 캠페인 기획 프로젝트라면 이런 파일을 넣으면 좋아요:</strong><br/><br/>
                  고객 데이터 파일<br/>
                  경쟁사 캠페인 분석 문서<br/>
                  신제품 브리프 문서
                </div>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/notion/image 4.png" className="rounded-lg border border-border-subtle w-full" alt="파일 업로드 1"/>
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1354.jpeg" className="rounded-lg border border-border-subtle w-full" alt="파일 업로드 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 3. 프로젝트 지침 설정하기</h3>
                <p className="font-body-md text-on-surface-variant mb-4">지침은 AI에게 "이 프로젝트에서 어떻게 일해야 하는지" 알려주는 업무 매뉴얼이에요. 아래 내용을 넣으면 좋아요. 👇</p>
                <ul className="space-y-2 text-sm bg-surface-container-low p-4 rounded-lg">
                  <li><strong>작업 배경 설명:</strong> 프로젝트의 목적, 타겟 시청자/독자 등</li>
                  <li><strong>진행 방식 지침:</strong> 어떤 구조와 패턴으로 결과물을 만들어야 하는지</li>
                  <li><strong>어조 및 스타일 선호도:</strong> "친근하고 에너지 있는 대화체", "전문 용어는 쉽게 풀어서" 와 같이 구체적인 톤앤매너</li>
                  <li><strong>특정 요구 사항:</strong> 최종 결과물의 형태와 필수 포함 요소 (피해야 할 표현이나 행동)</li>
                </ul>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1355.jpeg" className="rounded-lg border border-border-subtle w-full" alt="지침 설정 1"/>
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1356.jpeg" className="rounded-lg border border-border-subtle w-full" alt="지침 설정 2"/>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="font-headline-md text-primary mb-2">Step 4. 팀원 초대 및 권한 설정 👥</h3>
                <p className="font-body-md text-on-surface-variant mb-4">1. 우측 상단에 있는 Share(공유) 버튼을 누릅니다.<br/>2. 초대할 팀원의 이메일 주소를 직접 입력하거나, 지정된 부서 그룹명을 검색해 추가합니다.<br/>3. 권한(Access Level)을 설정합니다.<br/>  - Chat(대화 권한): 프로젝트 내 설정 수정 불가<br/>  - Edit(편집 권한): 지침 수정 및 파일 삭제/추가 가능<br/>4. 설정을 마치고 Invite(초대) 버튼을 누르면 알림이 발송됩니다.</p>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-6">
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1357.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 1"/>
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1358.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 2"/>
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1359.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 3"/>
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1360.jpeg" className="rounded-lg border border-border-subtle w-full" alt="권한 4"/>
                <ZoomableImage src="/images/ai-magazine/notion/image 5.png" className="rounded-lg border border-border-subtle w-full" alt="권한 5"/>
              </div>
            </div>
          </div>
        </section>

        {/* 05 지침 가이드라인 */}
        <section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg rounded-xl text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-primary border-b border-white/20 pb-4">05. 지침, 어떻게 쓰면 좋을까? — 지침 가이드라인</h2>
          <p className="font-body-lg mb-6">지침은 짧은 것보다 <strong>명확한 것</strong>이 중요해요. 아래 템플릿을 그대로 복사해서 대괄호 안만 바꿔도 좋아요. 😎</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline-md text-primary-fixed">지침 템플릿</h3>
                <button
                  onClick={(e) => {
                    const text = `너는 내 [업무명] 담당자야.\n\n이 프로젝트의 목적은 [목적]이야.\n\n내가 업로드한 자료를 최우선 기준으로 답변해줘.\n자료에 없는 내용은 추측하지 말고, 필요한 경우 먼저 확인 질문을 해줘.\n\n답변은 실무자가 바로 사용할 수 있을 정도로 구체적으로 작성해줘.\n\n말투는 [친근하지만 전문적인 톤 / 짧고 명확한 톤 / 보고서용 비즈니스 톤]으로 해줘.\n\n금지할 표현은 [과장된 표현 / 확인되지 않은 수치 / 애매한 말 / 뻔한 조언]이야.`;
                    navigator.clipboard.writeText(text);
                    const el = e.currentTarget.querySelector('.btn-text') as HTMLElement;
                    if (el) {
                      const old = el.textContent;
                      el.textContent = '복사 완료!';
                      setTimeout(() => el.textContent = old, 2000);
                    }
                  }}
                  className="flex items-center gap-1 bg-primary/20 hover:bg-primary/30 text-primary-fixed px-3 py-1 rounded text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span className="btn-text">복사하기</span>
                </button>
              </div>
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
            
            <div className="flex items-center justify-center">
              <ZoomableImage src="/images/ai-magazine/notion/image 6.png" className="rounded-lg shadow-sm border border-border-subtle w-full object-contain" alt="지침 예시"/>
            </div>
          </div>
        </section>

        {/* 06 꿀팁 */}
        <section className="mt-stack-xl bg-surface-container p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">06. 프로젝트를 200% 활용하는 꿀팁🍯</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-headline-md font-bold mb-2">팁 1. 파일의 역할을 정해줘요</h3>
              <p className="font-body-md text-on-surface-variant mb-4">파일을 올릴 때 "참고해줘"라고만 하지 말고, 자료별 역할을 정해주면 좋아요. 👇</p>
              <div className="bg-white p-4 rounded text-sm text-on-surface">
                업로드한 고객 데이터 파일은 독자의 실제 페인포인트를 파악하는 기준으로 사용해줘.<br/>
                업로드한 신제품 브리프 문서는 도입부 후킹과 메시지 톤을 잡는 참고 자료로 사용해줘.
              </div>
              <p className="font-body-md text-on-surface-variant mt-4">같은 파일이라도 어떤 역할로 쓰라고 지시하느냐에 따라 결과가 달라져요.</p>
            </div>
            
            <div>
              <h3 className="font-headline-md font-bold mb-2">팁 2. 방을 '1회성 작업실'로 인식</h3>
              <p className="font-body-md text-on-surface-variant mb-4">대화가 길어지면 GPT가 앞선 맥락을 잊거나 속도가 느려질 수 있어요. 따라서 기존 작업이 끝나면 새 채팅방을 열 것!</p>
              <div className="flex flex-col gap-6 w-full">
                <div className="bg-white p-4 rounded border border-border-subtle">
                  <strong>1.</strong> 대화가 충분히 길어졌다면, 기존 방에서 계속 이어가지 말고 왼쪽 메뉴의 <code>+ New Chat</code>을 눌러요.
                  <ZoomableImage src="/images/ai-magazine/notion/image 7.png" className="rounded-lg border border-border-subtle w-full mt-4" alt="New chat"/>
                </div>
                <div className="bg-white p-4 rounded border border-border-subtle">
                  <strong>2단계 — 새 방 이름을 단계에 맞게 지어요</strong><br/>
                  '1-2. 타겟 고객 분석 최종 요약 및 인사이트 도출방'처럼 이전 작업과 연결되는 이름을 붙이면 흐름을 놓치지 않아요.
                  <ZoomableImage src="/images/ai-magazine/notion/IMG_1361.jpeg" className="rounded-lg border border-border-subtle w-full mt-4" alt="새 방 이름"/>
                </div>
                <div className="bg-white p-4 rounded border border-border-subtle">
                  <strong>3단계 — 새 방 첫 입력창에 2가지를 함께 넣어요 ⇒</strong><br/>
                  새 방이라도 맥락이 끊기지 않으려면 이전 결과 요약을 꼭 함께 넣어줘야 해요.
                  <ZoomableImage src="/images/ai-magazine/notion/image 8.png" className="rounded-lg border border-border-subtle w-full mt-4" alt="요약 입력"/>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 07 ChatGPT 외 도구 */}
        <section className="mt-stack-xl mb-20 bg-surface-container-low p-stack-lg rounded-xl border border-border-subtle">
          <h2 className="font-headline-lg text-headline-lg mb-4 border-l-4 border-primary pl-4">07. ChatGPT가 아니어도 활용할 수 있어요</h2>
          <p className="font-body-md text-on-surface-variant mb-8">이 방식은 ChatGPT에만 한정되지 않아요. Claude의 Projects나 Gemini의 Notebook에서도 비슷하게 활용할 수 있어요. 🏘️</p>
          <div className="flex flex-col gap-8 w-full">
            <ZoomableImage src="/images/ai-magazine/notion/image 9.png" className="rounded-lg border border-border-subtle w-full object-contain" alt="클로드 Project"/>
            <ZoomableImage src="/images/ai-magazine/notion/image 10.png" className="rounded-lg border border-border-subtle w-full object-contain" alt="제미나이 Notebook"/>
            <ZoomableImage src="/images/ai-magazine/notion/8fe0275e-c0b1-4784-af3d-514855dd5333.png" className="rounded-lg border border-border-subtle w-full object-contain" alt="노트북 화면"/>
          </div>
        </section>

        {/* Outro */}
        <section className="mt-stack-xl text-center py-16 border-t border-border-subtle">
          <h2 className="font-headline-xl text-primary mb-6">마치며😎</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            프로젝트는 AI를 더 똑똑하게 만드는게 아니라,<br/>
            <strong>팀 전체가 같은 맥락에서 AI를 쓰게 돕는 기능</strong>이에요.<br/><br/>
            초기에 한 번 잘 세팅해두면 매번 자료를 넣을 필요 없이 일관된 결과를 얻고, 새 팀원도 즉시 같은 출발선에서 시작할 수 있죠.<br/><br/>
            즉, AI를 잘 쓰는 팀은 개인의 프롬프트 실력보다 <strong>AI가 팀을 위해 일할 수 있는 환경을 먼저 만드는 팀🫂</strong>이에요.
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
