import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "安翌｜环境设计作品集",
  description:
    "安翌的环境设计与室内设计个人作品集网站，聚焦空间叙事、文化主题转译与 AI 辅助设计表达。",
  keywords: ["环境设计", "室内设计", "空间设计", "作品集", "建筑设计", "文化转译"],
  authors: [{ name: "安翌" }],
  openGraph: {
    title: "安翌｜环境设计作品集",
    description: "环境设计与室内设计个人作品集，聚焦空间叙事与文化主题转译",
    type: "website",
    locale: "zh_CN",
    siteName: "安翌作品集",
  },
  twitter: {
    card: "summary_large_image",
    title: "安翌｜环境设计作品集",
    description: "环境设计与室内设计个人作品集",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-accent)] focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:text-[var(--color-charcoal)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent-glow)]"
        >
          跳转到主要内容
        </a>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
