import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const browseSteps = [
  "浏览总作品集，了解作品方向与范围。",
  "选择感兴趣的作品集，进入独立详情页深入了解。",
  "结合简历与荣誉页，全面评估专业能力与背景。",
];

export default function PortfolioIndexPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SubpageNav
        links={[
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      <section className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="glow-orb top-0 right-0 h-96 w-96 opacity-10" />
        <Reveal>
          <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div className="space-y-8">
              <p className="section-kicker">Portfolio Hub</p>
              <h1 className="section-title text-5xl sm:text-6xl">总作品集</h1>
              <p className="section-copy">
                这里集中了 {portfolioItems.length} 个已整理完成的作品集方向。可根据兴趣或岗位需求选择深入浏览。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">Total</p>
                <h2 className="mt-4 font-serif-display text-4xl font-semibold">{portfolioItems.length}</h2>
                <p className="mt-4 text-xs leading-relaxed text-white/40">作品集总数</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">Focus</p>
                <h2 className="mt-4 font-serif-display text-4xl font-semibold">持续更新</h2>
                <p className="mt-4 text-xs leading-relaxed text-white/40">作品详情将逐步完善</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="glass-panel grid gap-12 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12 lg:items-center">
              <div className="space-y-6">
                <p className="section-kicker text-sm">Browsing Guide</p>
                <h2 className="font-serif-display text-4xl font-semibold text-white leading-tight">浏览建议</h2>
              </div>
              <div className="grid gap-4">
                {browseSteps.map((item, index) => (
                  <div key={item} className="flex items-center gap-6 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
                    <span className="font-serif-display text-3xl text-white/10">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 bg-white/[0.01]">
        <div className="mx-auto max-w-[1800px] px-6 py-32 sm:px-10 lg:px-16">
          <Reveal className="mb-20 max-w-4xl space-y-6">
            <p className="section-kicker">All Portfolios</p>
            <h2 className="section-title">作品集目录</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="glass-card group block h-full overflow-hidden rounded-[2.5rem] p-5"
                >
                  <div className="project-preview-frame relative mb-8 overflow-hidden rounded-[1.8rem] bg-black/40">
                    <Image
                      src={item.heroImage}
                      alt={`${item.title}缩略图`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  </div>
                  <div className="px-2 pb-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">{item.status}</p>
                    <h3 className="mt-4 font-serif-display text-3xl font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
                    <p className="mt-4 text-[11px] font-bold tracking-[0.1em] text-white/30 uppercase italic">{item.type}</p>
                    <p className="mt-6 text-sm leading-relaxed text-white/50 line-clamp-2">{item.summary}</p>
                    <div className="mt-10 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase transition group-hover:text-white">
                      <span>Explore</span>
                      <span className="h-px w-8 bg-white/10 transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageFooter
        heading="继续查看简历、荣誉或返回首页"
        links={[
          { label: "查看简历页", href: "/resume" },
          { label: "查看荣誉页", href: "/awards" },
          { label: "返回首页", href: "/", primary: true },
        ]}
      />
    </main>
  );
}
