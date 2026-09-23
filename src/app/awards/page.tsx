import Link from "next/link";
import Image from "next/image";
import { awardItems } from "@/data/portfolio-data";
import { LocalizedText } from "@/components/LanguageProvider";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const pageValues = [
  "奖项为作品集提供外部评价参考，帮助招聘方更快建立信任。",
  "每项荣誉都与具体项目或能力方向相关，而不只是单独陈列的结果。",
  "荣誉页与项目页、简历页一起构成更完整的个人成果展示。",
];

export default function AwardsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉列表", href: "#awards-list" },
        ]}
      />

      <section className="relative border-b border-white/10 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] items-end">
              <div className="max-w-4xl space-y-8">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-white/20"></span>
                  <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
                    Recognitions & Awards
                  </p>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light leading-[0.9] text-white tracking-tighter">
                  荣誉奖项
                </h1>
                <p className="text-xl font-light leading-relaxed text-white/50 border-l border-white/20 pl-8 max-w-2xl">
                  这里集中展示与作品集相关的核心竞赛成果，用来补充项目完成度、表达能力与专业认可度。
                </p>
              </div>
              
              <div className="mono text-[10px] text-white/30 space-y-2 border-l border-white/10 pl-6 hidden lg:block">
                <p>STATUS: VERIFIED</p>
                <p>COUNT: {awardItems.length}</p>
                <p>UPDATED: 2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="awards-list" className="relative py-32 border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.3fr_1.7fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Index</p>
              </div>
              <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2">
                {awardItems.map((award, index) => (
                  <div key={award.title} className="group flex flex-col justify-between bg-[#080809] p-12 hover:bg-white/[0.04] transition-colors">
                    <div>
                      <div className="mb-8 flex items-center justify-between">
                        <span className="mono text-[9px] text-white/40 tracking-widest uppercase border border-white/10 px-3 py-1">
                          {award.level}
                        </span>
                        <span className="mono text-[9px] text-white/20">{award.time}</span>
                      </div>

                      <h3 className="font-serif text-2xl text-white/90 group-hover:text-white transition-colors">
                        {award.title}
                      </h3>

                      <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/40 font-light">
                        <p className="border-l border-white/10 pl-4 text-white/60">关联项目：{award.project}</p>
                        <p>{award.description}</p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                      <Link
                        href={award.href}
                        className="flex items-center justify-between mono text-[10px] text-white/30 group-hover:text-white transition-colors"
                      >
                        <span>VIEW ARCHIVE</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SubpageFooter
        heading="Archive Closure"
        links={[
          { label: { zh: "查看总作品集", en: "View portfolio" }, href: "/portfolio" },
          { label: { zh: "查看项目页", en: "View projects" }, href: "/projects" },
          { label: { zh: "查看简历页", en: "View resume" }, href: "/resume", primary: true },
        ]}
      />
    </main>
  );
}
