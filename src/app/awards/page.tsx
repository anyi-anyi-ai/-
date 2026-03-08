import Link from "next/link";

const awardHighlights = [
  {
    title: "全国大学生数字媒体科技作品及创意竞赛",
    level: "国赛三等奖",
    project: "燃梦立方",
    href: "/projects/ran-meng-li-fang",
    time: "阶段成果",
    description: "体现项目在概念表达、视觉完成度与展示组织方面已具备较完整的成果支撑。",
  },
  {
    title: "东方设计奖全国高校创新设计大赛",
    level: "国赛三等奖",
    project: "作品集方向综合成果",
    href: "/projects",
    time: "阶段成果",
    description: "说明作品表达和方案完成度已经通过更正式的竞赛评价体系检验。",
  },
  {
    title: "“华夏奖”文化艺术设计大赛",
    level: "优秀奖",
    project: "文化主题表达方向",
    href: "/projects",
    time: "阶段成果",
    description: "补充文化设计与图像表达方向上的成果证明，增强求职展示的整体可信度。",
  },
];

const pageValues = [
  "为首页中的荣誉摘要提供更完整的承接页面，让竞赛成果不只作为一句文字出现。",
  "把奖项与项目建立对应关系，帮助浏览者理解成果背后的设计内容，而不是只看奖项名称。",
  "后续可继续补充证书原图、获奖时间、赛事背景与参赛说明，形成更完整的证明材料页。",
];

const nextSteps = [
  "补充证书图片与更完整的获奖时间信息。",
  "为每项荣誉补充赛事简介、参赛类别与对应项目说明。",
  "在项目详情页中加入“相关荣誉”入口，形成双向跳转结构。",
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-line)] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <Link href="/" className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75">
            ← 返回首页
          </Link>
          <nav className="flex flex-wrap gap-4 text-xs tracking-[0.18em] text-[var(--color-muted-ink)] uppercase sm:text-sm">
            <Link href="/portfolio" className="transition hover:text-[var(--color-accent-deep)]">
              总作品集
            </Link>
            <Link href="/projects" className="transition hover:text-[var(--color-accent-deep)]">
              项目总览
            </Link>
            <Link href="/resume" className="transition hover:text-[var(--color-accent-deep)]">
              简历页
            </Link>
            <a href="#awards-list" className="transition hover:text-[var(--color-accent-deep)]">
              荣誉列表
            </a>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_70px_rgba(26,24,21,0.05)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-kicker">Awards</p>
            <h1 className="section-title">把首页中的荣誉摘要展开为可用于建立可信度的独立说明页面</h1>
            <p className="section-copy">
              这一页的重点不是单纯罗列奖项，而是说明这些成果如何与项目表达、竞赛验证和求职展示之间形成对应关系，从而为作品集提供更明确的真实性支撑。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {pageValues.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">价值 0{index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards-list" className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/32">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">荣誉列表</p>
            <h2 className="section-title">当前以核心竞赛成果为主，用于支撑项目表达的可信度与完成度判断</h2>
          </div>
          <div className="grid gap-5 xl:grid-cols-3">
            {awardHighlights.map((award) => (
              <article
                key={award.title}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_18px_40px_rgba(26,24,21,0.05)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.18em] uppercase">
                  <span className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-[var(--color-accent-deep)]">{award.level}</span>
                  <span className="text-[var(--color-muted-ink)]">{award.time}</span>
                </div>
                <h3 className="mt-5 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{award.title}</h3>
                <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-copy)]">
                  <p>
                    <span className="text-[var(--color-muted-ink)]">对应方向：</span>
                    {award.project}
                  </p>
                  <p>{award.description}</p>
                </div>
                <Link
                  href={award.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
                >
                  查看相关页面
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <p className="section-kicker">页面作用</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">让奖项从“文字标签”变成“可解释的成果证明”</h2>
            <p className="mt-4 text-sm leading-8 text-[var(--color-copy)]">
              对于求职型作品集网站来说，荣誉页的意义不只是展示获奖，而是帮助浏览者把“作品表达好”与“成果经过外部评价验证”联系起来。它与项目页、简历页共同组成网站中的可信度层。
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/25 p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <p className="section-kicker">后续补充</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">下一步将继续把证书材料与赛事信息补齐</h2>
            <div className="mt-6 grid gap-3">
              {nextSteps.map((item, index) => (
                <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker">继续浏览</p>
              <h2 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">如果需要完整判断背景与能力，可以继续查看项目总览页和简历页</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                查看项目页
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
              >
                查看简历页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
