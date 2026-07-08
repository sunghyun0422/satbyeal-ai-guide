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
            <span className="block text-primary text-lg mb-2 tracking-wider font-bold">2편</span>
            <span className="block">매번 똑같은 지시 내릴 건가요?</span>
            <span className="block">저도 지겨워서요🥱</span>
          </h1>
          <div className="relative rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden h-[400px] lg:h-[600px]">
            <img alt="Hero Visual" className="w-full h-full object-cover" src="/images/ai-magazine/notion/image 12.png" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
        </section>

        {/* Before / After */}
        <section className="mt-stack-xl">
          <div className="grid grid-cols-1 gap-12">
            
            {/* Before */}
            <div className="bg-surface-variant p-8 rounded-xl border border-border-subtle">
              <h2 className="font-headline-lg text-error flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl">cancel</span>
                Before - 팀이 각자 AI를 따로 쓸 때 😮‍💨
              </h2>
              <div className="font-body-lg text-on-surface-variant space-y-4 break-keep">
                <p>잠깐, 1편 보고 오셨나요?</p>
                <p>1편에서 공유 프로젝트로 자료랑 맥락은 이미 한곳에 모았죠. 근데 이런 문제, 아직 남아있지 않나요?</p>
                
                <ZoomableImage src="/images/ai-magazine/notion/image 13.png" className="rounded-lg shadow-sm border border-border-subtle w-full max-w-3xl mx-auto my-6 object-contain" alt="팀 각자 쓰는 모습"/>
                
                <p>마케팅팀에서 일하는 장원영 씨는 오늘도 새 채팅창을 열었어요.</p>
                <p>회의가 끝났고, 팀원들은 각자 회의록을 AI로 정리하기 시작해요.</p>
                <p>장원영 씨는 본인 ChatGPT에 회의 내용을 붙여넣고 정리를 요청하고, 김재원 씨도 같은 내용을 본인 AI에 넣고 정리해요.</p>
                <p>결과물 형식은 두 사람이 달라요. 누구 버전을 쓸지 다시 조율해야 해요.</p>
                
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1343.jpeg" className="rounded-lg w-full max-w-2xl mx-auto object-cover border border-border-subtle my-6" alt="Before"/>
                
                <p>다음 주에도 같은 일이 반복돼요. 팀원이 바뀌어도, 업무가 바뀌어도, 매번 기준을 다시 맞춰야 해요. 😓</p>
              </div>
            </div>
            
            {/* After */}
            <div className="bg-primary-container text-on-primary p-8 rounded-xl">
              <h2 className="font-headline-lg flex items-center gap-3 mb-6 text-on-primary">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
                After - 팀 GPT를 만들고 나서 🙌
              </h2>
              <div className="font-body-lg text-white/90 space-y-4 break-keep">
                <p>김재원 씨가 &gt;팀 회의록 정리 GPT&lt;를 만들었어요.</p>
                <p>Knowledge에는 팀의 회의록 작성 가이드라인과 기존 잘 나온 샘플을 넣어뒀어요. Instructions에는 항상 실행 항목, 담당자, 마감일 순서로 정리하도록 기준을 잡아뒀고요. 그리고 팀원들에게 GPT 링크를 공유했어요.</p>
                <p>이제 장원영 씨든, 새로 온 팀원이든, 회의 내용을 붙여넣기만 하면 돼요.</p>
                <blockquote className="border-l-4 border-white/50 pl-4 italic text-white my-4 bg-white/10 py-3 rounded-r-lg">
                  "오늘 회의 내용 정리해줘."
                </blockquote>
                
                <ZoomableImage src="/images/ai-magazine/notion/IMG_1340.jpeg" className="rounded-lg w-full max-w-2xl mx-auto object-cover border border-white/20 my-6" alt="After"/>
                
                <p>GPT는 항상 같은 형식으로, 같은 기준으로 정리해줘요. 누가 물어봐도 결과물이 일관돼요. 김재원 씨가 자리를 비워도, 새 팀원이 와도 GPT가 기준을 대신 유지해줘요. 😉</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-bold text-xl">자, 이 ‘팀 회의록 정리 GPT’ — 어떻게 만드는 건지 궁금하시죠? 🕴️</p>
                  <p className="mt-4">공유 프로젝트는 자료를 모으는 작업방, 이건 반복 업무 방식 자체를 저장해두는 팀 전용 AI 비서,</p>
                  <p className="text-3xl font-bold text-white text-center my-8">👉 "GPTs" 👈</p>
                  <p>매번 설명하던 업무 루틴, 이제 비서한테 맡길 차례예요.</p>
                  <p className="font-bold text-xl mt-4">Let's dig in! 🏃</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 01 GPTs란? */}
        <section className="mt-stack-xl">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4 mb-6">01. GPTs란?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant break-keep">
              GPTs는 특정 목적에 맞춰 세팅한 <strong>'맞춤형 전문가 AI'</strong>예요.<br/><br/>
              범용적인 일반 ChatGPT와 달리, <strong>딱 맞는 역할</strong> 🤖 을 부여할 수 있죠.
            </p>
            <p className="font-body-md text-on-surface-variant mt-6 mb-4">예를 들어 이런 식으로 만들 수 있어요.</p>
            <div className="bg-surface-container-low p-6 rounded-lg text-on-surface-variant font-body-md space-y-3 mb-8 border border-border-subtle">
              <p>• 인스타그램 카피를 써주는 GPT</p>
              <p>• 회의록을 실행 계획으로 바꿔주는 GPT</p>
              <p>• 보고서의 허점을 찾아주는 GPT</p>
              <p>• 브랜드 톤앤매너를 지켜주는 GPT</p>
              <p>• 데이터를 분석해주는 GPT</p>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-6">원하는 역할에 맞춰 크게 세 가지를 설정할 수 있어요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">지침 (Instructions)</h3>
              <p className="font-body-md text-on-surface-variant">AI의 역할과 답변 기준</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">지식 (Knowledge)</h3>
              <p className="font-body-md text-on-surface-variant">참고할 맞춤형 업무 자료 (가이드, 보고서 등)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-primary mb-2">능력 (Capabilities)</h3>
              <p className="font-body-md text-on-surface-variant">웹 검색, 이미지 생성 등의 추가 기능</p>
            </div>
          </div>
          <p className="font-body-lg font-bold mt-8 text-on-surface">즉, GPTs는 "내가 매번 설명하던 업무 방식을 미리 넣어둔 AI 비서"라고 이해하면 쉬워요🙆.</p>
        </section>

        {/* 02 프로젝트와 GPTs 차이 */}
        <section className="mt-stack-xl bg-surface-container-low p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">02. 프로젝트와 GPTs는 어떻게 다를까?</h2>
          <p className="font-body-lg text-on-surface-variant mb-8 break-keep leading-relaxed">
            1편의 ‘프로젝트’는 AI가 일할 수 있는 작업방<strong>🧑‍💻</strong>이었다면,<br/>
            GPTs는 특정 업무를 반복 수행하는 <strong>전문 도구</strong>에 가까워요.
          </p>
          
          <div className="bg-white p-6 rounded-lg font-body-lg font-bold mb-8 border border-border-subtle text-center text-on-surface">
            <p className="mb-2">프로젝트 = 업무별 작업방</p>
            <p>GPTs = 목적별 AI 비서</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-lg overflow-hidden border border-border-subtle">
              <thead className="bg-primary-container text-on-primary font-headline-md">
                <tr>
                  <th className="p-4 border-b border-border-subtle">구분</th>
                  <th className="p-4 border-b border-border-subtle">프로젝트</th>
                  <th className="p-4 border-b border-border-subtle">GPTs</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-on-surface-variant">
                <tr className="border-b border-border-subtle hover:bg-surface transition-colors">
                  <td className="p-4 font-bold text-on-surface">핵심 개념</td>
                  <td className="p-4">업무별 작업방</td>
                  <td className="p-4">목적별 AI 비서</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-surface transition-colors">
                  <td className="p-4 font-bold text-on-surface">적합한 상황</td>
                  <td className="p-4">자료와 대화를 모아 장기 작업할 때</td>
                  <td className="p-4">반복 업무를 자동화하고 싶을 때</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-surface transition-colors">
                  <td className="p-4 font-bold text-on-surface">예시</td>
                  <td className="p-4">2030 타겟 신제품 개발</td>
                  <td className="p-4">매거진 도입부 작성 GPT, 보고서 검수 GPT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 03 GPTs는 언제 사용할까? */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-6 border-l-4 border-primary pl-4">03. GPTs는 언제 사용할까?</h2>
          <p className="font-body-lg text-on-surface-variant mb-8 break-keep">
            GPTs는 <strong>반복되는 작업, 결과물의 형식이 정해진 작업, 특정 기준(회사 정책, 팀의 기준)을 계속 지켜야 하는 작업</strong>에 잘 맞아요.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="w-full space-y-6">
              <p className="font-body-md">예를 들어 회의록을 작성할 때마다 일반 ChatGPT에게 이렇게 설명해야 한다고 해볼게요.</p>
              <ZoomableImage src="/images/ai-magazine/notion/image 14.png" className="rounded-lg shadow-sm border border-border-subtle w-full max-w-2xl object-contain" alt="일반 프롬프트 복잡함"/>
              
              <p className="font-body-md mt-8">하지만 GPTs를 만들어두면 다음부터는 회의록만 첨부하면 돼요.</p>
              <ZoomableImage src="/images/ai-magazine/notion/image 15.png" className="rounded-lg shadow-sm border border-border-subtle w-full max-w-2xl object-contain" alt="GPTs 깔끔함"/>
              <p className="font-body-md mt-4">이미 역할, 말투, 형식, 금지 표현이 저장되어 있기 때문에 설명을 반복하지 않아도 돼요🙅.</p>
            </div>
          </div>
        </section>

        {/* 04 사용 방법 */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 border-l-4 border-primary pl-4">04. GPTs 사용 방법 — 직접 만들어 팀원에게 공유하기🧑‍🤝‍🧑</h2>
          <p className="font-body-lg text-on-surface-variant mb-6 break-keep">GPTs의 진짜 장점은 내가 직접 만들어서 팀원에게 공유할 수 있다는 것이에요.</p>
          <p className="font-body-lg text-on-surface-variant mb-8 break-keep">GPT는 우리 팀의 업무 방식이나 기준까지 정확히 알지는 못해요. 그래서 직접 만들어 팀의 업무 방식과 내부 기준을 담은 우리 팀에 딱 맞게 작동하는 GPTs를 만들 수 있어요👐.</p>
          
          <div className="flex flex-col gap-6 mb-12">
            <ZoomableImage src="/images/ai-magazine/notion/image 16.png" className="rounded-lg border border-border-subtle max-w-md w-full object-contain" alt="GPTs 화면1"/>
            <ZoomableImage src="/images/ai-magazine/notion/image 17.png" className="rounded-lg border border-border-subtle max-w-md w-full object-contain" alt="GPTs 화면2"/>
          </div>

          <h3 className="font-headline-lg text-on-surface mb-8 border-b border-border-subtle pb-4">만드는 순서</h3>
          
          <div className="space-y-16">
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">만들고 싶은 GPT의 목적을 정한다.</h4>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">GPT 만들기 화면을 연다.</h4>
                <ZoomableImage src="/images/ai-magazine/notion/image 18.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="만들기 창"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">이름과 설명을 입력한다.</h4>
                <ZoomableImage src="/images/ai-magazine/notion/image 19.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="이름 입력"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">Instructions에 역할과 규칙을 적는다.</h4>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/notion/image 20.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="지침 입력 1"/>
                  <ZoomableImage src="/images/ai-magazine/notion/image 21.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="지침 입력 2"/>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">5</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">필요한 경우 Knowledge에 참고 자료를 업로드한다.</h4>
                <ZoomableImage src="/images/ai-magazine/notion/image 22.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="지식 업로드"/>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">6</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">웹 검색, 이미지 생성, 데이터 분석 등 필요한 기능을 켠다.</h4>
                <ZoomableImage src="/images/ai-magazine/notion/image 23.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="기능 설정"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">7</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">실제 업무 질문으로 테스트한다.</h4>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/notion/image 24.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="테스트 1"/>
                  <ZoomableImage src="/images/ai-magazine/notion/image 25.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="테스트 2"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">8</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">답변을 보며 지침을 테스트하며 수정한다.</h4>
                <p className="font-body-md text-on-surface-variant mb-6">GPTs는 한 번 만들었다고 바로 완성되는 도구가 아니에요. 실제 질문을 넣어보고 답변이 원하는 방향으로 나오는지 확인해야 해요.</p>
                <div className="bg-surface-container-low p-6 rounded-lg font-body-md text-on-surface-variant mb-6 border border-border-subtle">
                  <p className="font-bold mb-4">테스트할 때는 아래를 확인해보세요.</p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>내가 넣은 자료를 제대로 참고하는가?</li>
                    <li>답변 형식이 일정한가?</li>
                    <li>말투가 원하는 톤과 맞는가?</li>
                    <li>자료에 없는 내용을 단정하지 않는가?</li>
                    <li>실무자가 바로 쓸 수 있는 결과물인가?</li>
                  </ul>
                </div>
                <p className="font-body-md text-on-surface-variant mb-4">답변이 너무 길거나, 너무 추상적이거나, 원하는 자료를 잘 반영하지 못한다면 Instructions를 수정하면 돼요.</p>
                <p className="font-body-md text-on-surface-variant">GPTs는 처음부터 완벽하게 만드는 것보다, 실제로 사용하면서 계속 다듬는 것이 중요해요.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">9</div>
              <div className="w-full">
                <h4 className="font-headline-md mb-4">공유 범위는 목적에 맞게 설정한다.</h4>
                <p className="font-body-md text-on-surface-variant mb-4">GPTs를 만든 뒤에는 공개 범위를 설정할 수 있어요. 혼자 쓰는 GPT라면 나만 보기로 설정하면 되고, 팀원들과 함께 쓰고 싶다면 링크 공유나 워크스페이스 공유를 활용할 수 있어요.</p>
                <ZoomableImage src="/images/ai-magazine/notion/image 26.png" className="rounded-lg border border-border-subtle w-full max-w-md mb-6" alt="공유 범위"/>
                <p className="font-body-md text-on-surface-variant mb-4">외부 사용자도 검색해서 사용할 수 있게 하려면 GPT Store 공개를 선택할 수 있어요.</p>
                <p className="font-body-md text-error font-bold mb-4">🚨 다만 공개하기 전에는 이름, 설명, 지침, Knowledge 파일, 답변 품질이 의도대로 작동하는지 마지막으로 확인하는 것이 좋아요!</p>
                <p className="font-body-md text-on-surface-variant mb-4">특히 회사 자료나 내부 문서가 들어갔다면 공개 범위를 신중하게 설정해야 하니, 내부용 GPT는 외부에 공개하지 않고, 필요한 사람에게만 공유하는 것이 안전해요.</p>
                <p className="font-body-md text-on-surface-variant">처음부터 완벽하게 만들 필요는 없어요. 실제로 써보면서 계속 고치는 것이 더 중요해요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 지침은 어떻게 쓸까? */}
        <section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg rounded-xl text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-primary border-b border-white/20 pb-4">06. 지침은 어떻게 쓸까?</h2>
          <p className="font-body-lg mb-6">Instructions는 GPTs의 핵심이에요.</p>
          <p className="font-body-lg mb-8">아래 템플릿을 <strong>그대로</strong> 복사해서 대괄호 안만 바꿔도 좋아요. 👇</p>
          
          <div className="bg-white/10 p-8 rounded-xl border border-white/20 shadow-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap font-body-md text-white/95 leading-relaxed">
{`너는 [역할]이야.

이 GPT의 목적은 [목적]이야.

사용자가 [입력할 내용]을 주면, 너는 [해야 할 작업]을 수행해줘.

답변은 항상 [출력 형식]으로 정리해줘.

말투는 [원하는 톤]으로 작성해줘.

반드시 지켜야 할 기준은 다음과 같아.

1. [기준 1]
2. [기준 2]
3. [기준 3]

피해야 할 것은 다음과 같아.

1. [금지 사항 1]
2. [금지 사항 2]
3. [금지 사항 3]

자료에 없는 내용은 단정하지 말고, 필요한 경우 사용자에게 확인 질문을 해줘.
결과물은 실무자가 바로 복사해 사용할 수 있을 정도로 구체적으로 작성해줘.`}
            </pre>
          </div>
        </section>

        {/* 07 GPTs 효율적 사용 팁 */}
        <section className="mt-stack-xl bg-surface-container p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-10 text-primary border-b border-border-subtle pb-4">07. GPTs를 효율적으로 사용하는 팁 😽</h2>
          
          <div className="space-y-12">
            {/* 팁 1 */}
            <div className="flex flex-col gap-6 items-start">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-4">팁 1. 필요한 능력만 켜주세요 👀</h3>
                <p className="font-body-md text-on-surface-variant mb-4">GPTs를 만들 때는 아래 기능들을 추가할 수 있어요.</p>
                <ul className="list-disc list-inside font-body-md text-on-surface-variant space-y-3 mb-6 ml-4">
                  <li><strong>웹 검색 (Web Browsing)</strong></li>
                  <li><strong>캔버스 (Canvas)</strong> : AI와 결과물을 실시간으로 함께 다듬으며 디테일한 편집 가능.</li>
                  <li><strong>이미지 생성 (DALL-E)</strong></li>
                  <li><strong>코드 인터프리터 (Code Interpreter)</strong> : 엑셀 파일 분석, 설문 결과 도출, 복잡한 수치 계산</li>
                </ul>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 27.png" className="rounded-lg border border-border-subtle w-full max-w-md object-contain mb-4" alt="기능 켜기"/>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-border-subtle w-full text-body-md text-on-surface">
                <strong>Tip.</strong> 목적 없는 '기능 다 켜기'는 응답 속도만 늦춥니다. <strong>정말 필요한 기능만 딱 켜두는 게 '고수'의 세팅법입니다. 🙋</strong>
              </div>
            </div>

            {/* 팁 2 */}
            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-10">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-4">팁 2. Knowledge에는 기준이 되는 자료를 넣어주세요 ⬅️</h3>
                <p className="font-body-md text-on-surface-variant mb-4">GPTs를 더 똑똑하게 쓰고 싶다면 <strong>Knowledge</strong> 기능을 활용해보세요. Knowledge는 GPT가 참고할 자료를 넣어두는 공간이에요.</p>
                <p className="font-body-md text-on-surface-variant mb-4">예를 들어 이런 자료를 넣을 수 있어요. 👇</p>
                
                <div className="bg-surface-variant p-6 rounded-lg font-body-md text-on-surface-variant mb-6 space-y-2">
                  <p>기존 회의록 정리 형식 예시</p>
                  <p>팀 프로젝트 일정 가이드라인</p>
                  <p>직원 핸드북</p>
                  <p>FAQ 문서</p>
                  <p>연구 보고서</p>
                </div>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 28.png" className="rounded-lg border border-border-subtle w-full max-w-md object-contain mb-4" alt="지식 자료"/>
              <div className="w-full">
                <p className="font-body-md text-on-surface-variant mb-4">파일을 많이 넣는다고 무조건 좋은 것은 아니에요.</p>
                <p className="font-body-md font-bold text-on-surface mb-4">중요한 것은 "이 GPT가 어떤 기준을 보고 답해야 하는가"예요. 👈</p>
                <p className="font-body-md text-on-surface-variant">따라서 Knowledge에는 자주 바뀌는 자료보다, 비교적 오래 참고할 수 있는 기준 자료를 넣는 것이 좋아요.</p>
              </div>
            </div>

            {/* 팁 3 */}
            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-10">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-4">팁 3. 파일을 넣을 때는 역할까지 함께 정해주세요 🧑‍💼</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Knowledge에 파일만 올려두고 끝내면 GPT가 그 자료를 어떻게 활용해야 할지 애매할 수 있어요. 그래서 Instructions에 파일의 역할을 함께 적어주는 것이 좋아요.</p>
                <p className="font-body-md text-on-surface-variant mb-4">예를 들어 이렇게 지시할 수 있어요. 👇</p>
                <div className="bg-surface-variant p-6 rounded-lg font-body-md mb-6 space-y-2">
                  <p>업로드한 FAQ 문서는 사실관계를 확인하는 기준으로 사용해줘.</p>
                  <p>업로드한 정책 문서는 답변의 최우선 기준으로 사용해줘.</p>
                </div>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 29.png" className="rounded-lg border border-border-subtle w-full max-w-md object-contain" alt="파일 역할"/>
            </div>

            {/* 팁 4 */}
            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-10">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-4">팁 4. 지식 기반 답변을 원한다면 Instructions에 꼭 적어주세요 💁</h3>
                <p className="font-body-md text-on-surface-variant mb-4">GPT가 Knowledge 파일을 잘 활용하게 하려면 Instructions에 "업로드한 자료를 우선적으로 참고해달라"고 명확히 적어야 해요.</p>
                <p className="font-body-md text-on-surface-variant mb-4">아래 문장을 그대로 활용해도 좋아요. 👇</p>
                <div className="bg-surface-variant p-6 rounded-lg font-body-md mb-6 space-y-2">
                  <p>답변할 때는 업로드된 Knowledge 파일을 우선적으로 참고해줘.</p>
                  <p>자료에 있는 내용은 자료 기준으로 답변하고, 자료에 없는 내용은 임의로 단정하지 마.</p>
                  <p>필요한 경우 어떤 자료를 참고했는지도 함께 알려줘.</p>
                </div>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 30.png" className="rounded-lg border border-border-subtle w-full max-w-md object-contain mb-6" alt="지식 우선"/>
              <p className="font-body-md text-on-surface-variant">특히 답변의 신뢰도를 높이기 위해 사내 정책, 제품 정보와 같은 정확성이 중요한 내용은 출처 표시를 요청하는 것도 좋아요.</p>
            </div>

          </div>
        </section>

        {/* Outro */}
        <section className="mt-stack-xl text-center py-16 border-t border-border-subtle">
          <h2 className="font-headline-xl text-primary mb-10">마치며 😎</h2>
          <ZoomableImage src="/images/ai-magazine/notion/image 31.png" className="rounded-lg shadow-sm border border-border-subtle mx-auto mb-10 max-w-lg w-full object-contain" alt="마치며"/>
          <div className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 space-y-6 break-keep">
            <p>GPTs는 AI를 갑자기 완전히 새로운 존재로 바꾸는 기능이 아니에요.</p>
            <p className="text-2xl font-bold text-on-surface">AI가 특정 일을 더 안정적으로 반복하게 만드는 기능이에요.</p>
            <p>일반 채팅창에서는 매번 설명해야 했던 역할, 기준, 말투, 출력 형식을 GPTs 안에 저장해두면 AI는 그때부터 하나의 전담 비서처럼 움직일 수 있어요. 👨‍💼</p>
            <p>AI를 잘 쓰는 사람은 질문을 길게 쓰는 사람이 아니라,</p>
            <p className="text-2xl font-bold text-on-surface">반복되는 일을 AI가 바로 처리할 수 있도록 구조화해두는 사람이에요.</p>
          </div>
          <ZoomableImage src="/images/ai-magazine/notion/image 32.png" className="rounded-lg shadow-sm border border-border-subtle mx-auto mb-12 max-w-lg w-full object-contain" alt="마치며2"/>
          <Link href="/">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-label-lg hover:bg-primary/90 transition-colors shadow-sm">
              홈으로 돌아가기
            </button>
          </Link>
        </section>

      </main>
      
      <footer className="bg-secondary py-stack-xl border-t border-white/10 mt-stack-xl">
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
