import Link from "next/link";
import Image from "next/image";
import { awardItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const pageValues = [
  "竞赛荣誉是设计完成度与创意能力的外部验证，为作品集提供可信度支撑。",
  "每项荣誉都与具体项目或能力方向紧密关联，体现系统化的学习与实践成果。",
  "荣誉页与项目页、简历页相互呼应，构成完整的个人专业能力展示体系。",
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
              <p className="section-kicker">荣誉奖项</p>
              <h1 className="section-title text-5xl sm:text-6xl">设计成果与竞赛证明</h1>
              <p className="section-copy max-w-2xl text-white/60">
                这里集中展示与作品集相关的核心竞赛成果，用来补充项目完成度、表达能力与专业认可度。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {pageValues.map((item) => (
                <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                  <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">重点</p>
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
            <p className="section-kicker mb-4">奖项列表</p>
            <h2 className="section-title text-4xl">当前展示核心竞赛成果</h2>
          </Reveal>
          <div className="grid gap-8 xl:grid-cols-3">
            {awardItems.map((award, index) => (
              <Reveal key={award.title} delay={index * 100}>
                <article className="glass-card group flex h-full flex-col rounded-[2.5rem] p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                      {award.level}
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/30">{award.time}</span>
                  </div>

                  <h3 className="font-serif-display text-3xl font-semibold leading-snug text-white transition-colors group-hover:text-[var(--color-accent)]">
                    {award.title}
                  </h3>

                  <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60 italic">
                    <p className="border-l border-white/10 pl-4">对应项目：{award.project}</p>
                    <p className="text-white/40">{award.description}</p>
                  </div>

                  {award.certificateImage ? (
                    <div className="relative mt-10 aspect-[1.4/1] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      <Image
                        src={award.certificateImage}
                        alt={`${award.title}证书`}
                        fill
                        className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                      />
                    </div>
                  ) : null}

                  <div className="mt-auto mt-10 border-t border-white/5 pt-8">
                    <Link
                      href={award.href}
                      className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase transition group-hover:text-white"
                    >
                      <span>查看项目</span>
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
              <p className="section-kicker">成果说明</p>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold leading-tight text-white">荣誉是设计能力的有力证明</h2>
              <p className="text-lg leading-relaxed text-white/60">
                竞赛奖项体现项目完成度与创意水平，为作品集提供专业认可与可信度支撑。
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="glass-panel p-10 lg:p-12">
              <p className="section-kicker mb-8">查看建议</p>
              <div className="space-y-4">
                {awardItems.map((item) => (
                  <div key={item.title} className="flex gap-6 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]/60" />
                    <p className="text-sm leading-relaxed text-white/50">
                      {item.title}，{item.level}，可结合对应项目页一起查看。
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SubpageFooter
        heading="探索更多作品与经历"
        links={[
          { label: "查看总作品集", href: "/portfolio" },
          { label: "查看项目页", href: "/projects" },
          { label: "查看简历页", href: "/resume", primary: true },
        ]}
      />
    </main>
  );
}
