import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "安翌｜环境设计作品集",
  description:
    "安翌的环境设计与室内设计个人作品集网站，聚焦空间叙事、文化主题转译与 AI 辅助设计表达。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${geistSans.variable} bg-[var(--color-paper)] text-[var(--color-ink)] antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-accent)] focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:text-[var(--color-charcoal)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent-glow)]"
        >
          跳转到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
