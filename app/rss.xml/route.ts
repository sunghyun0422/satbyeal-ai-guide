import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://satbyeal-ai-guide.vercel.app';
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LG AI Advisory - Satbyeal AI Guide Magazine</title>
    <link>${baseUrl}</link>
    <description>LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드</description>
    <item>
      <title>Part 1. AI 활용 가이드 시작하기</title>
      <link>${baseUrl}/part1/</link>
      <description>AI 활용을 위한 첫 걸음과 기본 가이드</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/part1/</guid>
    </item>
    <item>
      <title>Part 2. 실무 적용 사례</title>
      <link>${baseUrl}/part2/</link>
      <description>LG전자 실무에 적용할 수 있는 구체적인 AI 활용 사례</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/part2/</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
