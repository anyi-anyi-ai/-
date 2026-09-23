"use client";

import Link from "next/link";
import { LanguageToggle, LocalizedText, useLanguage, type LocalizedCopy } from "@/components/LanguageProvider";

type NavLink = {
  label: string | LocalizedCopy;
  href: string;
};

const labelTranslations: Record<string, string> = {
  返回首页: "Back home",
  返回作品集: "Back to portfolio",
  总作品集: "Portfolio",
  项目总览: "Projects",
  简历页: "Resume",
  简历页面: "Resume",
  荣誉页: "Awards",
  荣誉列表: "Awards list",
  关于我: "About",
};

function NavLabel({ label }: { label: string | LocalizedCopy }) {
  const { locale } = useLanguage();
  if (typeof label !== "string") return <LocalizedText {...label} />;
  return locale === "zh" ? label : labelTranslations[label] ?? label;
}

export default function SubpageNav({
  backLabel = "返回首页",
  backHref = "/",
  links,
}: {
  backLabel?: string;
  backHref?: string;
  links: NavLink[];
}) {
  return (
    <section className="sticky top-0 z-50 border-b border-white/5 bg-[#080809]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href={backHref}
          className="group flex items-center gap-4 transition-all"
        >
          <span className="flex h-6 w-6 items-center justify-center border border-white/20 text-[10px] mono text-white/40 group-hover:border-white/60 group-hover:text-white transition-colors">
            ←
          </span>
          <span className="mono text-[10px] text-white/40 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            <NavLabel label={backLabel} />
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mono text-[9px] text-white/30 tracking-widest uppercase transition hover:text-white"
              >
                <NavLabel label={link.label} />
              </Link>
            ))}
          </nav>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <LanguageToggle compact />
        </div>
      </div>
    </section>
  );
}
