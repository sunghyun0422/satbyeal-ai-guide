import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://satbyeal-ai-guide.vercel.app"),
  title: "LG전자 샛별자문단 5기 - 실무 밀착형 AI 활용 가이드",
  description: "LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드",
  keywords: [
    "샛별자문단", "샛별자문단 5기", "LG전자 샛별자문단", "lg 샛별자문단", "엘지전자 샛별자문단", 
    "샛별 자문단", "샛별자문단 ai", "lg전자 샛별자문단 ai", "엘지 샛별자문단 ai",
    "실무 밀착형 AI", "AI 활용 가이드", "생성형 AI 가이드", "LG AI Advisory", "Satbyeal AI Guide"
  ],
  openGraph: {
    title: "LG전자 샛별자문단 5기 - 실무 밀착형 AI 활용 가이드",
    description: "LG전자 샛별자문단 5기가 제안하는 실무 밀착형 AI 활용 가이드",
    url: "https://satbyeal-ai-guide.vercel.app",
    siteName: "LG전자 샛별자문단 AI 가이드",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": ["0a659f99f48a78d3dffa3daeb8e27534a1bb6681"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiasedScroll" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} min-h-full bg-[#fff8f7] text-[#291615] antialiased`}>
        {children}
      </body>
    </html>
  );
}
