import Link from "next/link";
import Image from "next/image";
import { awardItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const pageValues = [
  "为首页中的荣誉摘要提供更完整的承接页面，让竞赛成果不只作为一句文字出现。",
  "把奖项与项目建立对应关系，帮助浏览者理解成果背后的设计内容，而不是只看奖项名称。",
  "后续可继续补充证书原图、获奖时间、赛事背景与参赛说明，形成更完整的证明材料页。",
];

const nextSteps = [
  "证书图片已补充，后续继续完善获奖时间信息。",
  "为每项荣誉补充赛事简介、参赛类别与对应项目说明。",
  "在项目详情页中加入「相关荣誉」入口，形成双向跳转结构。",
];

export default function AwardsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)]/30">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉列表", href: "#awards-list" },
        ]}
      />

      <section className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="glow-orb top-0 left-0 h-96 w-96 opacity-10" />
        <Reveal>
          <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div className="space-y-8">
              <p className="section-kicker">Awards & Recognition</p>
              <h1 className="section-title text-5xl sm:text-6xl">建立设计成果的外部公信力</h1>
              <p className="section-copy max-w-2xl text-white/60">
                本页面不仅罗列奖项，更旨在说明成果如何与项目表达、竞赛验证和求职展示之间形成对应关系，为作品集提供明确的真实性支撑。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {pageValues.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">Value 0{index + 1}</p>
                  <p className="text-xs leading-relaxed text-white/50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="awards-list" className="relative border-y border-white/5 bg-white/[0.02] py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-20">
            <p className="section-kicker mb-4">Recognition Index</p>
            <h2 className="section-title text-4xl">当前以核心竞赛成果为主</h2>
          </Reveal>
          <div className="grid gap-8 xl:grid-cols-3">
            {awardItems.map((award, index) => (
              <Reveal key={award.title} delay={index * 100}>
                <article className="glass-card group flex h-full flex-col rounded-[2.5rem] p-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                      {award.level}
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/30">{award.time}</span>
                  </div>
                  
                  <h3 className="font-serif-display text-3xl font-semibold text-white leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    {award.title}
                  </h3>
                  
                  <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60 italic">
                    <p className="border-l border-white/10 pl-4">对应方向：{award.project}</p>
                    <p className="text-white/40">{award.description}</p>
                  </div>

                  {award.certificateImage && (
                    <div className="relative mt-10 aspect-[1.4/1] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      <Image
                        src={award.certificateImage}
                        alt={`${award.title}证书`}
                        fill
                        className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                      />
                    </div>
                  )}
                  
                  <div className="mt-10 mt-auto pt-8 border-t border-white/5">
                    <Link
                      href={award.href}
                      className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase transition group-hover:text-white"
                    >
                      <span>Explore Project</span>
                      <span className="h-px w-8 bg-white/10 transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-8">
              <p className="section-kicker">Philosophy</p>
              <h2 className="font-serif-display text-5xl font-semibold text-white leading-tight">让奖项从「标签」变为「成果证明」</h2>
              <p className="text-lg leading-relaxed text-white/60">
                对于求职型作品集来说，荣誉页的意义在于帮助浏览者建立信任链条。它与项目页、简历页共同组成网站中的可信度层。
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="glass-panel p-10 lg:p-12">
              <p className="section-kicker mb-8">Next Steps</p>
              <div className="space-y-4">
                {nextSteps.map((item, index) => (
                  <div key={item} className="flex gap-6 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                    <span className="font-serif-display text-2xl text-white/10">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-white/50">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SubpageFooter
        heading="进一步了解我的项目经历与个人背景"
        links={[
          { label: "查看总作品集", href: "/portfolio" },
          { label: "查看项目页", href: "/projects" },
          { label: "查看简历页", href: "/resume", primary: true },
        ]}
      />
    </main>
  );
}
