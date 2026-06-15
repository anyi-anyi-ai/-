import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

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

      <section className="relative mx-auto max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-24">
        <div className="glow-orb top-0 right-0 h-96 w-96 opacity-10" />
        <Reveal>
          <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div className="space-y-8">
              <p className="section-kicker">作品集</p>
              <h1 className="section-title text-5xl sm:text-6xl">总作品集</h1>
              <p className="section-copy">
                这里汇集了 {portfolioItems.length} 个作品方向，涵盖文化叙事、商业体验、概念场景与家具设计等不同类型。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">数量</p>
                <h2 className="mt-4 font-serif-display text-4xl font-semibold">{portfolioItems.length}</h2>
                <p className="mt-4 text-xs leading-relaxed text-white/40">当前可浏览的作品项目</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">方向</p>
                <h2 className="mt-4 font-serif-display text-4xl font-semibold">多类型覆盖</h2>
                <p className="mt-4 text-xs leading-relaxed text-white/40">文化主题、商业空间、未来概念与单体设计</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/5 bg-white/[0.01] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-16">
          <Reveal className="mb-12 sm:mb-16 max-w-4xl space-y-6">
            <p className="section-kicker">全部作品</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">作品集目录</h2>
            <p className="section-copy">
              可根据感兴趣的项目类型进入详情页，查看项目概念、图像表达与设计说明。
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="glass-card group block h-full overflow-hidden p-0"
                >
                  <div className="project-card-image mb-6">
                    <Image
                      src={item.heroImage}
                      alt={`${item.title}缩略图`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  </div>
                  <div className="px-2 pb-2">
                    <p className="card-label">{item.status}</p>
                    <h3 className="mt-3 font-serif-display text-2xl font-semibold text-white transition-colors group-hover:text-[var(--color-accent)]">{item.title}</h3>
                    <p className="card-type mt-3">{item.type}</p>
                    <p className="mt-6 text-sm leading-relaxed text-white/50 line-clamp-2">{item.summary}</p>
                    <div className="mt-10 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase transition group-hover:text-white">
                      <span>查看作品</span>
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
