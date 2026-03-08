import Link from "next/link";

const projectGroups = [
  {
    title: "已上线详情",
    description: "这部分项目已经接入独立详情页，适合从总览页继续深入浏览。",
    items: [
      {
        title: "道隐无名",
        href: "/projects/dao-yin-wu-ming",
        portfolioHref: "/portfolio/dao-yin-wu-ming",
        type: "文化民宿 / 空间改造",
        summary: "以道家文化为母题，将精神疗愈、静修体验与自然材料语言转化为文化民宿空间。",
        status: "已上线详情页",
      },
      {
        title: "尘埃之上",
        href: "/projects/chen-ai-zhi-shang",
        portfolioHref: "/portfolio/chen-ai-zhi-shang",
        type: "未来生态 / 概念居住",
        summary: "面向火星极端环境构建生态居住原型，用四季系统回应技术与心理双重命题。",
        status: "已上线详情页",
      },
      {
        title: "觅踪",
        href: "/projects/mi-zong",
        portfolioHref: "/portfolio/mi-zong",
        type: "零售体验 / 主题空间",
        summary: "将丝路文化与二次元消费体验结合，组织可探索、可停留、可交流的青年零售场景。",
        status: "已上线详情页",
      },
      {
        title: "燃梦立方",
        href: "/projects/ran-meng-li-fang",
        portfolioHref: "/portfolio/ran-meng-li-fang",
        type: "共享办公 / 商业空间",
        summary: "通过红色立方构成接待、办公、洽谈与展示秩序，强调商业办公逻辑和空间焦点。",
        status: "已上线详情页",
      },
      {
        title: "家具设计",
        href: "/projects/jia-ju-she-ji",
        portfolioHref: "/portfolio/jia-ju-she-ji",
        type: "家具单体 / 结构表达",
        summary: "作为空间之外的单体设计补充，有助于展示尺度把控和细节推敲能力。",
        status: "已上线详情页",
      },
      {
        title: "岐黄养生轩",
        href: "/projects/qi-huang-yang-sheng-xuan",
        portfolioHref: "/portfolio/qi-huang-yang-sheng-xuan",
        type: "主题餐饮 / 中医文化",
        summary: "以中医养生理念为基础组织主题餐厅空间，体现文化符号与商业体验结合能力。",
        status: "已上线详情页",
      },
      {
        title: "秦土旧腔",
        href: "/projects/qin-tu-jiu-qiang",
        portfolioHref: "/portfolio/qin-tu-jiu-qiang",
        type: "文化展示 / 戏曲主题",
        summary: "围绕地方戏曲意象与文化记忆展开空间转译，适合进一步强化文化叙事线索。",
        status: "已上线详情页",
      },
      {
        title: "娱乐空间",
        href: "/projects/yu-le-kong-jian",
        portfolioHref: "/portfolio/yu-le-kong-jian",
        type: "公共娱乐 / 场景体验",
        summary: "偏向真实功能场景与体验表达，可补充项目类型的现实应用维度。",
        status: "已上线详情页",
      },
    ],
  },
];

const browsingSuggestions = [
  "先从总作品集页建立整体范围判断，再回到项目总览页选择具体详情页。",
  "如果希望快速比较不同作品的最终呈现效果，可以直接在这里查看 8 个项目详情入口。",
  "如果希望理解某个作品的完整上下文，可优先进入其对应作品集页再返回项目详情页。",
];

export default function ProjectsPage() {
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
            <Link href="/resume" className="transition hover:text-[var(--color-accent-deep)]">
              简历页
            </Link>
            <Link href="/awards" className="transition hover:text-[var(--color-accent-deep)]">
              荣誉页
            </Link>
            <a href="#project-groups" className="transition hover:text-[var(--color-accent-deep)]">
              项目分组
            </a>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_70px_rgba(26,24,21,0.05)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-kicker">Projects</p>
            <h1 className="section-title">项目总览页用于集中查看已接入详情页的作品，而总作品集页负责作品范围分发</h1>
            <p className="section-copy">
              这一页与总作品集页的区别在于：总作品集页负责先建立 8 个作品集的整体范围判断；项目总览页则更适合直接比较当前已经接入详情页的具体项目内容与完成状态。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">详情页数量</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">8 个</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">8 个作品方向现在都已经具备正式项目详情入口。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">页面分工</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">目录 + 跳转</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">在这里可以更直接地进入项目详情页，也可以回到作品集页查看完整上下文。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">浏览建议</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">先总后细</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先看总作品集页，再回到此页快速定位你最想比较的具体项目。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/32">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="section-kicker">浏览方式</p>
              <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">建议按“作品集判断 → 项目详情比较”的方式浏览</h2>
            </div>
            <div className="grid gap-3">
              {browsingSuggestions.map((item, index) => (
                <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-[var(--color-muted)]/25 px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project-groups" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12">
          {projectGroups.map((group) => (
            <section key={group.title} className="space-y-6">
              <div className="max-w-3xl space-y-4">
                <p className="section-kicker">项目分组</p>
                <h2 className="section-title">{group.title}</h2>
                <p className="section-copy">{group.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_14px_32px_rgba(26,24,21,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(26,24,21,0.08)]"
                  >
                    <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{project.status}</p>
                    <h3 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{project.title}</h3>
                    <p className="mt-3 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase">{project.type}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
                      >
                        查看详情
                        <span aria-hidden="true">→</span>
                      </Link>
                      <Link
                        href={project.portfolioHref}
                        className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-muted-ink)] uppercase transition hover:text-[var(--color-accent-deep)]"
                      >
                        查看作品集
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker">继续浏览</p>
              <h2 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">可以继续查看总作品集页、简历页与荣誉页，完成对项目之外信息的整体判断</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                查看总作品集
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                查看简历页
              </Link>
              <Link
                href="/awards"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
              >
                查看荣誉页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
