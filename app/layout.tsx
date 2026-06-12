import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://satbyeal-ai-guide.vercel.app"),
  title: "샛별자문단 5기 프리미엄 AI 가이드",
  description: "최첨단 AI 인텔리전스로 데이터의 한계를 극복합니다. 직관적인 UI와 구조화된 맥락을 통해 비즈니스 의사결정의 수준을 한 단계 높이세요. 샛별자문단 5기의 프리미엄 AI 가이드를 만나보세요.",
  openGraph: {
    title: "샛별자문단 5기 프리미엄 AI 가이드",
    description: "최첨단 AI 인텔리전스로 데이터의 한계를 극복합니다. 비즈니스 의사결정의 수준을 한 단계 높이세요.",
    url: "https://satbyeal-ai-guide.vercel.app",
    siteName: "샛별자문단 5기 프리미엄 AI 가이드",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/hero_3d_trophy.png",
        width: 1200,
        height: 630,
        alt: "샛별자문단 5기 프리미엄 AI 가이드 메인",
      }
    ]
  },
  // 네이버 및 구글 소유권 확인용 HTML 메타 태그 입력 공간 (필요 시 아래 주석 해제 후 코드 입력)
  // other: {
  //   "naver-site-verification": "YOUR_NAVER_VERIFICATION_CODE",
  //   "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiasedScroll`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full bg-white text-black font-sans antialiased">{children}</body>
    </html>
  );
}
