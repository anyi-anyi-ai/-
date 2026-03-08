import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";

const browseSteps = [
  "先通过总作品集页快速确认全部 8 个作品集范围与方向。",
  "再选择最符合岗位兴趣的作品集进入独立分页深入浏览。",
  "最后结合简历页与荣誉页完成对能力、背景与成果的整体判断。",
];

const pageRoles = [
  "总作品集页负责集中分发 8 个作品集入口，帮助浏览者先建立范围判断。",
  "项目总览页更偏向展示已上线详情项目与接入状态，适合作为项目目录型补充页面。",
  "作品集独立页则负责承接单个作品的说明、图像、过程提示与能力判断。",
];

export default function PortfolioIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-line)] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <Link href="/" className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75">
            ← 返回首页
          </Link>
          <nav className="flex flex-wrap gap-4 text-xs tracking-[0.18em] text-[var(--color-muted-ink)] uppercase sm:text-sm">
            <Link href="/projects" className="transition hover:text-[var(--color-accent-deep)]">
              项目总览
            </Link>
            <Link href="/resume" className="transition hover:text-[var(--color-accent-deep)]">
              简历页
            </Link>
            <Link href="/awards" className="transition hover:text-[var(--color-accent-deep)]">
              荣誉页
            </Link>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <div className="ui-card grid gap-8 rounded-[2.2rem] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-kicker">Portfolio Hub</p>
            <h1 className="section-title">总作品集分页负责统一分发 8 个作品集入口，而不是只展示零散项目链接</h1>
            <p className="section-copy">
              这里是整个网站中所有作品内容的中心页。你可以从这里快速了解当前已整理完成的 8 个作品集方向，并进一步进入每一个作品集独立分页，按兴趣或岗位方向进行深入浏览。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">作品集总数</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">8 个</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">全部来源于根目录中的作品集素材，并逐步接入网站结构。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">当前目标</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">逐页完善</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先建立完整页面结构，再按统一模板逐步深化图像、说明与导航关系。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">阅读方式</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">先总后分</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先看全部作品集范围，再按单个作品集进入，最后延伸到简历与荣誉页。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="section-kicker">浏览建议</p>
              <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">推荐按“总览判断 → 单个作品集 → 背景资料”的顺序浏览</h2>
            </div>
            <div className="grid gap-3">
              {browseSteps.map((item, index) => (
                <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-[var(--color-muted)]/24 px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="section-kicker">页面分工</p>
          <h2 className="section-title">总作品集页、项目总览页与作品集详情页各自承担不同阅读任务</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {pageRoles.map((item, index) => (
            <article key={item} className="ui-card rounded-[1.8rem] p-6">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">分工 0{index + 1}</p>
              <p className="mt-4 text-sm leading-8 text-[var(--color-copy)]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">全部作品集入口</p>
            <h2 className="section-title">当前网站将围绕这 8 个作品集逐步建立独立页面与更完整的内容承接结构</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="ui-card group rounded-[1.9rem] p-6"
              >
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{item.status}</p>
                <h3 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase">{item.type}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{item.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition group-hover:opacity-75">
                  进入作品集
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker">继续浏览</p>
              <h2 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">完成作品集浏览后，可以继续查看简历页、荣誉页或返回首页</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                查看简历页
              </Link>
              <Link
                href="/awards"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                查看荣誉页
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
