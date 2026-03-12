import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const browseSteps = [
  "先通过总作品集页快速确认全部作品集范围与方向。",
  "再选择最符合岗位兴趣的作品集进入独立分页深入浏览。",
  "最后结合简历页与荣誉页完成对能力、背景与成果的整体判断。",
];

const pageRoles = [
  "总作品集页负责集中分发作品集入口，帮助浏览者先建立范围判断。",
  "项目总览页更偏向展示已上线详情项目与接入状态，适合作为项目目录型补充页面。",
  "作品集独立页则负责承接单个作品的说明、图像、过程提示与能力判断。",
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

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <Reveal>
          <div className="ui-card grid gap-8 rounded-[2.2rem] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5">
              <p className="section-kicker">Portfolio Hub</p>
              <h1 className="section-title">总作品集分页负责统一分发 {portfolioItems.length} 个作品集入口，而不是只展示零散项目链接</h1>
              <p className="section-copy">
                这里是整个网站中所有作品内容的中心页。你可以从这里快速了解当前已整理完成的 {portfolioItems.length} 个作品集方向，并进一步进入每一个作品集独立分页，按兴趣或岗位方向进行深入浏览。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5 animate-reveal stagger-1">
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">作品集总数</p>
                <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{portfolioItems.length} 个</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">全部来源于根目录中的作品集素材，并逐步接入网站结构。</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5 animate-reveal stagger-2">
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">当前目标</p>
                <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">逐页完善</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先建立完整页面结构，再按统一模板逐步深化图像、说明与导航关系。</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5 animate-reveal stagger-3">
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">阅读方式</p>
                <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">先总后分</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先看全部作品集范围，再按单个作品集进入，最后延伸到简历与荣誉页。</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <Reveal>
            <div className="grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                <p className="section-kicker">浏览建议</p>
                <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">推荐按"总览判断 → 单个作品集 → 背景资料"的顺序浏览</h2>
              </div>
              <div className="grid gap-3">
                {browseSteps.map((item, index) => (
                  <div key={item} className={`rounded-[1.3rem] border border-[var(--color-line)] bg-[var(--color-muted)]/24 px-4 py-4 text-sm leading-7 text-[var(--color-copy)] animate-reveal stagger-${index + 1}`}>
                    <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <Reveal className="mb-10 max-w-3xl space-y-4">
          <p className="section-kicker">页面分工</p>
          <h2 className="section-title">总作品集页、项目总览页与作品集详情页各自承担不同阅读任务</h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {pageRoles.map((item, index) => (
            <Reveal key={item} delay={index * 100}>
              <article className="ui-card rounded-[1.8rem] p-6 h-full">
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">分工 0{index + 1}</p>
                <p className="mt-4 text-sm leading-8 text-[var(--color-copy)]">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <Reveal className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">全部作品集入口</p>
            <h2 className="section-title">当前网站将围绕这 {portfolioItems.length} 个作品集逐步建立独立页面与更完整的内容承接结构</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="ui-card group rounded-[1.9rem] p-6 block h-full"
                >
                  <div className="project-preview-frame relative mb-4 overflow-hidden rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-muted)]">
                    <Image
                      src={item.heroImage}
                      alt={`${item.title}缩略图`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-contain p-2 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{item.status}</p>
                  <h3 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase">{item.type}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{item.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition group-hover:opacity-75">
                    进入作品集
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageFooter
        heading="完成作品集浏览后，可以继续查看简历页、荣誉页或返回首页"
        links={[
          { label: "查看简历页", href: "/resume" },
          { label: "查看荣誉页", href: "/awards" },
          { label: "返回首页", href: "/", primary: true },
        ]}
      />
    </main>
  );
}
