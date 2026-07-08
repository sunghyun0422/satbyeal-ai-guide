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
                  "팀이 각자 AI를 따로 쓸 때 😮‍💨"
                </blockquote>
                <p>잠깐, 1편 보고 오셨나요? 1편에서 공유 프로젝트로 자료랑 맥락은 이미 한곳에 모았죠. 근데 이런 문제, 아직 남아있지 않나요?</p>
                <div className="bg-white p-4 rounded-lg shadow-sm text-body-md text-text-muted space-y-2">
                  <p>마케팅팀에서 일하는 장원영 씨는 오늘도 새 채팅창을 열었어요. 회의가 끝났고, 팀원들은 각자 회의록을 AI로 정리하기 시작해요.</p>
                </div>
                <p>장원영 씨는 본인 ChatGPT에 회의 내용을 붙여넣고 정리를 요청하고, 김재원 씨도 같은 내용을 본인 AI에 넣고 정리해요. 결과물 형식은 두 사람이 달라요. 누구 버전을 쓸지 다시 조율해야 해요.</p>
                <p className="leading-relaxed mt-4">
                  <span className="block mb-2">다음 주에도 같은 일이 반복돼요. 팀원이 바뀌어도, 업무가 바뀌어도, 매번 기준을 다시 맞춰야 해요. 😓</span>
                  <span className="block">반복 업무 방식 자체를 저장해두는 팀 전용 AI 비서, 👉 <strong>"GPTs"</strong> 👈</span>
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] bg-secondary-container flex items-center justify-center overflow-hidden">
              <img alt="Hero Visual" className="w-full h-full object-cover" src="/images/ai-magazine/notion/image 12.png" />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>
          </div>
        </section>

        <section className="mt-stack-xl flex justify-center">
            <ZoomableImage src="/images/ai-magazine/notion/image 13.png" className="rounded-lg shadow-sm border border-border-subtle max-w-2xl w-full object-contain" alt="회의록"/>
        </section>

        {/* 01 GPTs란? */}
        <section className="mt-stack-xl">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg border-l-4 border-primary pl-4">01. GPTs란?</h2>
            <p className="font-body-lg text-body-lg font-bold mt-4">GPTs는 특정 목적에 맞춰 세팅한 <strong>'맞춤형 전문가 AI'</strong>예요.</p>
            <p className="font-body-md text-on-surface-variant mt-2">범용적인 일반 ChatGPT와 달리, <strong>딱 맞는 역할</strong> 🤖 을 부여할 수 있죠. 예를 들어 이런 식으로 만들 수 있어요.</p>
            <ul className="space-y-2 text-sm bg-surface-container-low p-4 rounded-lg mt-4 text-on-surface-variant">
                <li>인스타그램 카피를 써주는 GPT</li>
                <li>회의록을 실행 계획으로 바꿔주는 GPT</li>
                <li>보고서의 허점을 찾아주는 GPT</li>
                <li>브랜드 톤앤매너를 지켜주는 GPT</li>
                <li>데이터를 분석해주는 GPT</li>
            </ul>
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
          <p className="font-body-md font-bold mt-4">즉, GPTs는 "내가 매번 설명하던 업무 방식을 미리 넣어둔 AI 비서"라고 이해하면 쉬워요🙆.</p>
        </section>

        {/* 02 프로젝트와 GPTs 차이 */}
        <section className="mt-stack-xl bg-surface-container-low p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">02. 프로젝트와 GPTs는 어떻게 다를까?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">folder_open</span> 프로젝트</h3>
              <p className="font-body-md text-on-surface-variant mt-2"><strong>업무별 작업방🧑‍💻</strong><br/>1편의 ‘프로젝트’는 AI가 일할 수 있는 작업방이었다면, (예: 2030 타겟 신제품 개발)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
              <h3 className="font-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">smart_toy</span> GPTs</h3>
              <p className="font-body-md text-on-surface-variant mt-2"><strong>목적별 AI 비서🤖</strong><br/>GPTs는 특정 업무를 반복 수행하는 <strong>전문 도구</strong>에 가까워요. (예: 매거진 도입부 작성 GPT, 보고서 검수 GPT)</p>
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
          <p className="font-body-md text-on-surface-variant mb-6">GPTs는 <strong>반복되는 작업, 결과물의 형식이 정해진 작업, 특정 기준(회사 정책, 팀의 기준)을 계속 지켜야 하는 작업</strong>에 잘 맞아요.</p>
          <div className="flex flex-col gap-8">
            <div className="w-full space-y-4">
              <p className="font-body-md">예를 들어 회의록을 작성할 때마다 일반 ChatGPT에게 이렇게 설명해야 한다고 해볼게요.</p>
              <ZoomableImage src="/images/ai-magazine/notion/image 14.png" className="rounded-lg shadow-sm border border-border-subtle w-full max-w-2xl mx-auto object-contain" alt="일반 프롬프트 복잡함"/>
              
              <p className="font-body-md mt-6">하지만 GPTs를 만들어두면 다음부터는 회의록만 첨부하면 돼요.</p>
              <ZoomableImage src="/images/ai-magazine/notion/image 15.png" className="rounded-lg shadow-sm border border-border-subtle w-full max-w-2xl mx-auto object-contain" alt="GPTs 깔끔함"/>
              <p className="font-body-md">이미 역할, 말투, 형식, 금지 표현이 저장되어 있기 때문에 설명을 반복하지 않아도 돼요🙅.</p>
            </div>
          </div>
        </section>

        {/* 04 사용 방법 */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 border-l-4 border-primary pl-4">04. GPTs 사용 방법 — 직접 만들어 팀원에게 공유하기🧑‍🤝‍🧑</h2>
          <p className="font-body-md text-on-surface-variant mb-8">GPTs의 진짜 장점은 내가 직접 만들어서 팀원에게 공유할 수 있다는 것이에요. GPT는 우리 팀의 업무 방식이나 기준까지 정확히 알지는 못해요. 그래서 직접 만들어 팀의 업무 방식과 내부 기준을 담은 우리 팀에 딱 맞게 작동하는 GPTs를 만들 수 있어요👐.</p>
          
          <div className="space-y-12">
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">만들고 싶은 GPT의 목적을 정한다.</h3>
                <ZoomableImage src="/images/ai-magazine/notion/image 16.png" className="rounded-lg border border-border-subtle max-w-sm w-full" alt="목적"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">GPT 만들기 화면을 연다.</h3>
                <ZoomableImage src="/images/ai-magazine/notion/image 17.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="만들기 진입"/>
                <ZoomableImage src="/images/ai-magazine/notion/image 18.png" className="rounded-lg border border-border-subtle w-full mt-4" alt="만들기 창"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">이름과 설명을 입력한다.</h3>
                <ZoomableImage src="/images/ai-magazine/notion/image 19.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="이름 입력"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">Instructions에 역할과 규칙을 적는다.</h3>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/notion/image 20.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="지침 입력"/>
                  <ZoomableImage src="/images/ai-magazine/notion/image 21.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="지침 상세"/>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">5</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">필요한 경우 Knowledge에 참고 자료를 업로드한다.</h3>
                <ZoomableImage src="/images/ai-magazine/notion/image 22.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="지식 업로드"/>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">6</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">웹 검색, 이미지 생성, 데이터 분석 등 필요한 기능을 켠다.</h3>
                <ZoomableImage src="/images/ai-magazine/notion/image 23.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="기능 설정"/>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">7</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">실제 업무 질문으로 테스트한다.</h3>
                <div className="flex flex-col gap-6 w-full">
                  <ZoomableImage src="/images/ai-magazine/notion/image 24.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="테스트 1"/>
                  <ZoomableImage src="/images/ai-magazine/notion/image 25.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="테스트 2"/>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">8</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">답변을 보며 지침을 테스트하며 수정한다.</h3>
                <p className="font-body-md text-on-surface-variant mb-2">GPTs는 처음부터 완벽하게 만드는 것보다, 실제로 사용하면서 계속 다듬는 것이 중요해요.</p>
                <div className="bg-surface-container-low p-4 rounded-lg font-body-sm text-on-surface-variant">
                  <strong>테스트할 때는 아래를 확인해보세요:</strong><br/>
                  내가 넣은 자료를 제대로 참고하는가?<br/>
                  답변 형식이 일정한가?<br/>
                  말투가 원하는 톤과 맞는가?<br/>
                  자료에 없는 내용을 단정하지 않는가?<br/>
                  실무자가 바로 쓸 수 있는 결과물인가?
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">9</div>
              <div className="w-full">
                <h3 className="font-headline-md mb-2">공유 범위는 목적에 맞게 설정한다.</h3>
                <p className="font-body-md text-on-surface-variant mb-2">혼자 쓰는 GPT라면 나만 보기로 설정하면 되고, 팀원들과 함께 쓰고 싶다면 링크 공유나 워크스페이스 공유를 활용할 수 있어요.</p>
                <ZoomableImage src="/images/ai-magazine/notion/image 26.png" className="rounded-lg border border-border-subtle w-full max-w-md" alt="공유 범위"/>
                <p className="font-body-sm text-error mt-2">🚨 특히 회사 자료나 내부 문서가 들어갔다면 내부용 GPT는 외부에 공개하지 않고, 필요한 사람에게만 공유하는 것이 안전해요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 지침은 어떻게 쓸까? */}
        <section className="mt-stack-xl bg-secondary dark:bg-inverse-surface p-stack-lg rounded-xl text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-primary border-b border-white/20 pb-4">05. 지침은 어떻게 쓸까?</h2>
          <p className="font-body-lg mb-6">Instructions는 GPTs의 핵심이에요. 아래 템플릿을 그대로 복사해서 대괄호 안만 바꿔도 좋아요. 👇</p>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-headline-md mb-4 text-primary-fixed">지침 템플릿</h3>
              <pre className="whitespace-pre-wrap font-body-sm text-sm text-white/90">
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
          </div>
        </section>

        {/* 06 Before/After */}
        <section className="mt-stack-xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-primary pl-4">Before / After</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-surface-variant p-8 rounded-xl border border-border-subtle">
              <h3 className="font-headline-md text-error flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined">cancel</span>
                BEFORE: 팀이 각자 AI를 따로 쓸 때
              </h3>
              <ZoomableImage src="/images/ai-magazine/notion/IMG_1343.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="Before"/>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li>• 결과물 형식은 두 사람이 달라요. 누구 버전을 쓸지 다시 조율해야 해요.</li>
                <li>• 다음 주에도 같은 일이 반복돼요. 매번 기준을 다시 맞춰야 해요. 😓</li>
              </ul>
            </div>
            
            <div className="bg-primary-container text-on-primary p-8 rounded-xl">
              <h3 className="font-headline-md flex items-center gap-2 mb-6 text-on-primary">
                <span className="material-symbols-outlined">check_circle</span>
                AFTER: 팀 GPT를 만들고 나서 🙌
              </h3>
              <ZoomableImage src="/images/ai-magazine/notion/IMG_1340.jpeg" className="rounded-lg mb-4 w-full aspect-[4/5] object-cover object-top border border-border-subtle" alt="After"/>
              <ul className="space-y-3 font-body-md text-white/90">
                <li>• 장원영 씨든, 새로 온 팀원이든, 회의 내용을 붙여넣기만 하면 돼요. </li>
                <li>• GPT는 항상 같은 형식으로, 같은 기준으로 정리해줘요. 누가 물어봐도 결과물이 일관돼요.</li>
                <li>• 김재원 씨가 자리를 비워도, 새 팀원이 와도 GPT가 기준을 대신 유지해줘요. 😉</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 07 GPTs 효율적 사용 팁 */}
        <section className="mt-stack-xl bg-surface-container p-stack-lg rounded-xl">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">07. GPTs를 효율적으로 사용하는 팁 😽</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 1. 필요한 능력만 켜주세요 👀</h3>
                <p className="font-body-md text-on-surface-variant mb-4">웹 검색, 캔버스, 이미지 생성, 코드 인터프리터. 목적 없는 '기능 다 켜기'는 응답 속도만 늦춥니다. <strong>정말 필요한 기능만 딱 켜두는 게 '고수'의 세팅법입니다. 🙋</strong></p>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 27.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="기능 켜기"/>
            </div>

            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-8">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 2. Knowledge에는 기준이 되는 자료를 넣어주세요 ⬅️</h3>
                <p className="font-body-md text-on-surface-variant mb-4">GPTs를 더 똑똑하게 쓰고 싶다면 Knowledge 기능을 활용해보세요.<br/>기존 회의록 정리 형식 예시, 팀 프로젝트 일정 가이드라인, 직원 핸드북, FAQ 문서 등. 자주 바뀌는 자료보다 비교적 오래 참고할 <strong>기준 자료</strong>를 넣는 것이 좋습니다.</p>
              </div>
              <ZoomableImage src="/images/ai-magazine/notion/image 28.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="지식 자료"/>
            </div>

            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-8">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 3. 파일을 넣을 때는 역할까지 함께 정해주세요 🧑‍💼</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Knowledge에 파일만 올려두고 끝내면 GPT가 그 자료를 어떻게 활용해야 할지 애매할 수 있어요. 그래서 Instructions에 파일의 역할을 함께 적어주는 것이 좋아요.</p>
                <div className="bg-white p-4 rounded text-sm mb-4">
                  업로드한 FAQ 문서는 사실관계를 확인하는 기준으로 사용해줘.<br/>
                  업로드한 정책 문서는 답변의 최우선 기준으로 사용해줘.
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <ZoomableImage src="/images/ai-magazine/notion/image 29.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="파일 역할"/>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-start border-t border-border-subtle pt-8">
              <div className="w-full">
                <h3 className="font-headline-md font-bold mb-2">팁 4. 지식 기반 답변을 원한다면 Instructions에 꼭 적어주세요 💁</h3>
                <p className="font-body-md text-on-surface-variant mb-4">GPT가 Knowledge 파일을 잘 활용하게 하려면 Instructions에 "업로드한 자료를 우선적으로 참고해달라"고 명확히 적어야 해요.</p>
                <div className="bg-white p-4 rounded text-sm mb-4">
                  답변할 때는 업로드된 Knowledge 파일을 우선적으로 참고해줘.<br/>
                  자료에 있는 내용은 자료 기준으로 답변하고, 자료에 없는 내용은 임의로 단정하지 마.<br/>
                  필요한 경우 어떤 자료를 참고했는지도 함께 알려줘.
                </div>
                <p className="font-body-md text-on-surface-variant mb-4">특히 사내 정책, 제품 정보와 같은 정확성이 중요한 내용은 출처 표시를 요청하는 것도 좋아요.</p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <ZoomableImage src="/images/ai-magazine/notion/image 30.png" className="rounded-lg border border-border-subtle w-full max-w-sm" alt="지식 우선"/>
              </div>
            </div>

          </div>
        </section>

        {/* Outro */}
        <section className="mt-stack-xl text-center py-16 border-t border-border-subtle">
          <h2 className="font-headline-xl text-primary mb-6">마치며 😎</h2>
          <ZoomableImage src="/images/ai-magazine/notion/image 31.png" className="rounded-lg shadow-sm border border-border-subtle mx-auto mb-8 max-w-md w-full object-contain" alt="마치며"/>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            GPTs는 AI를 갑자기 완전히 새로운 존재로 바꾸는 기능이 아니에요.<br/>
            <strong>AI가 특정 일을 더 안정적으로 반복하게 만드는 기능</strong>이에요.<br/><br/>
            일반 채팅창에서는 매번 설명해야 했던 역할, 기준, 말투, 출력 형식을 GPTs 안에 저장해두면 AI는 그때부터 하나의 전담 비서처럼 움직일 수 있어요. 👨‍💼<br/><br/>
            AI를 잘 쓰는 사람은 질문을 길게 쓰는 사람이 아니라,<br/>
            <strong>반복되는 일을 AI가 바로 처리할 수 있도록 구조화해두는 사람</strong>이에요.
          </p>
          <ZoomableImage src="/images/ai-magazine/notion/image 32.png" className="rounded-lg shadow-sm border border-border-subtle mx-auto mb-8 max-w-md w-full object-contain" alt="마치며2"/>
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
