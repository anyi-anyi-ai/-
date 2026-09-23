"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle, LocalizedText } from "@/components/LanguageProvider";

const links = [
  { label: { zh: "首页", en: "Home" }, href: "/" },
  { label: { zh: "作品", en: "Works" }, href: "/projects" },
  { label: { zh: "关于", en: "About" }, href: "/about" },
  { label: { zh: "进程", en: "Progress" }, href: "/progress" },
  { label: { zh: "留言", en: "Message" }, href: "/message" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkSurface = pathname === "/" || pathname.startsWith("/projects") || pathname.startsWith("/progress");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex items-center justify-between border-b px-8 py-6 transition-all duration-500 ${
          isDarkSurface
            ? "border-white/10 bg-[#0a0a0c]/80 text-white backdrop-blur-md"
            : "border-black/5 bg-white/80 text-slate-900 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-4 text-[0.7rem] font-bold tracking-[0.25em] uppercase">
          <span
            className={`flex h-8 w-8 items-center justify-center border ${
              isDarkSurface ? "border-white/20 text-white" : "border-black/10 text-slate-900"
            }`}
          >
            A
          </span>
          <span className="hidden sm:inline">
            <LocalizedText zh="安翌空间" en="Anno Space" />
          </span>
        </Link>
        
        <div className="hidden items-center gap-12 md:flex">
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-100 ${
                  pathname === link.href
                    ? "opacity-100"
                    : "opacity-40"
                }`}
              >
                <LocalizedText {...link.label} />
              </Link>
            ))}
          </div>
          <div className="h-4 w-px bg-white/10 mx-2"></div>
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] md:hidden ${
            isDarkSurface ? "text-white/60" : "text-slate-900/60"
          }`}
          aria-expanded={menuOpen}
          aria-label="导航菜单"
        >
          {menuOpen ? <LocalizedText zh="CLOSE" en="CLOSE" /> : <LocalizedText zh="MENU" en="MENU" />}
        </button>
      </nav>
      {menuOpen ? (
        <div
          className={`fixed inset-0 top-[81px] z-40 flex flex-col items-center justify-center gap-8 p-8 transition-all duration-500 md:hidden ${
            isDarkSurface ? "bg-[#0a0a0c] text-white" : "bg-white text-slate-900"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-serif tracking-tight ${
                pathname === link.href ? "opacity-100" : "opacity-30"
              }`}
            >
              <LocalizedText {...link.label} />
            </Link>
          ))}
          <div className="mt-12 pt-12 border-t border-white/10 w-full flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
