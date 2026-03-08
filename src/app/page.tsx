import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "道隐无名",
    slug: "dao-yin-wu-ming",
    type: "文化民宿 / 空间改造",
    tags: ["道家文化", "静修空间", "木石光影"],
    summary:
      "以道家天人合一为精神原型，将木、石、水与光影转化为静修型文化民宿空间，回应现代人对精神疗愈与文化体验的需求。",
    image: "/projects/dao-yin-wu-ming/cover.webp",
    imageAlt: "道隐无名项目封面",
  },
  {
    title: "尘埃之上",
    slug: "chen-ai-zhi-shang",
    type: "未来生态 / 概念居住",
    tags: ["异星居住", "四季系统", "精神缓冲带"],
    summary:
      "面向火星极端环境构想自给自足的生态居住系统，以地球四季意象构建兼具生存技术与心理慰藉的异星生活场景。",
    image: "/projects/chen-ai-zhi-shang/cover.webp",
    imageAlt: "尘埃之上项目封面",
  },
  {
    title: "觅踪",
    slug: "mi-zong",
    type: "零售体验 / 主题空间",
    tags: ["丝路转译", "二次元零售", "文化体验"],
    summary:
      "以丝路文脉与二次元消费文化为双重线索，通过文化转译与体验重构，打造可探索、可停留、可交流的青年零售空间。",
    image: "/projects/mi-zong/cover.webp",
    imageAlt: "觅踪项目封面",
  },
  {
    title: "燃梦立方",
    slug: "ran-meng-li-fang",
    type: "共享办公 / 商业空间",
    tags: ["校园创业", "立方秩序", "红色焦点"],
    summary:
      "以校园创业办公场景为背景，通过红色立方元素组织接待、洽谈、办公与展示空间，建立开放互助的共享办公秩序。",
    image: "/projects/ran-meng-li-fang/cover.webp",
    imageAlt: "燃梦立方项目封面",
  },
];

const allProjects = [
  { title: "道隐无名", href: "/projects/dao-yin-wu-ming", active: true },
  { title: "尘埃之上", href: "/projects/chen-ai-zhi-shang", active: true },
  { title: "觅踪", href: "/projects/mi-zong", active: true },
  { title: "燃梦立方", href: "/projects/ran-meng-li-fang", active: true },
  { title: "秦土旧腔", href: "#", active: false },
  { title: "岐黄养生轩", href: "#", active: false },
  { title: "娱乐空间", href: "#", active: false },
  { title: "家具设计", href: "#", active: false },
];

const capabilities = [
  {
    title: "空间叙事",
    description: "从概念原型、情绪氛围到空间路径，建立完整的阅读和体验逻辑。",
  },
  {
    title: "文化转译",
    description: "将道家、丝路、戏曲、中医等文化母题转化为空间语言，而不是停留在符号层面。",
  },
  {
    title: "视觉表达",
    description: "结合 3ds Max、V-Ray、Blender、PS 等工具完成高质量效果图与空间表达。",
  },
  {
    title: "AI 工作流",
    description: "在概念发散、风格测试和表达迭代中引入 AIGC 与 ComfyUI，提升创意效率。",
  },
];

const awards = [
  {
    title: "全国大学生数字媒体科技作品及创意竞赛",
    level: "国赛三等奖",
    project: "燃梦立方",
  },
  {
    title: "东方设计奖全国高校创新设计大赛",
    level: "国赛三等奖",
    note: "证书与项目详情将在后续简历页继续补充。",
  },
  {
    title: "“华夏奖”文化艺术设计大赛",
    level: "优秀奖",
    note: "首页先以摘要建立可信度，后续承接完整荣誉信息。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="hero-shell relative isolate overflow-hidden text-white">
        <Image
          src="/projects/chen-ai-zhi-shang/cover.webp"
          alt="尘埃之上首页首屏主图"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.68)_34%,rgba(10,10,10,0.34)_66%,rgba(10,10,10,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,175,118,0.2)_0%,rgba(208,175,118,0)_36%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-4 border-b border-white/10 pb-4 text-sm tracking-[0.22em] text-white/72 uppercase sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium">安翌</span>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:gap-6 sm:text-sm">
              <a href="#projects" className="transition hover:text-white">
                作品
              </a>
              <a href="#about" className="transition hover:text-white">
                关于
              </a>
              <a href="#resume" className="transition hover:text-white">
                简历
              </a>
              <a href="#contact" className="transition hover:text-white">
                联系
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
            <div className="max-w-3xl space-y-8">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.28em] text-[var(--color-accent)] uppercase">
                  环境设计作品集
                </p>
                <h1 className="font-serif-display max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[0.02em] sm:text-6xl lg:text-7xl">
                  安翌｜环境设计作品集
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  聚焦空间叙事、文化转译与视觉表达，以真实项目与结构化信息构建面向求职展示的环境设计作品网站。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium tracking-[0.18em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
                >
                  查看作品
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium tracking-[0.18em] text-white uppercase transition hover:border-white/45 hover:bg-white/6"
                >
                  查看简历
                </a>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-md">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <p className="text-xs tracking-[0.24em] text-white/56 uppercase">主打项目</p>
                <h2 className="font-serif-display text-3xl font-semibold">尘埃之上</h2>
              </div>
              <p className="text-sm leading-7 text-white/78">
                项目从火星极端环境切入，尝试构建兼具生存技术、生态系统与精神慰藉的未来居住原型，用强叙事性视觉建立首页第一记忆点。
              </p>
              <dl className="grid gap-4 text-sm text-white/74 sm:grid-cols-3">
                <div>
                  <dt className="mb-1 text-xs tracking-[0.2em] text-white/48 uppercase">项目方向</dt>
                  <dd>未来生态</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs tracking-[0.2em] text-white/48 uppercase">核心关键词</dt>
                  <dd>四季系统</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs tracking-[0.2em] text-white/48 uppercase">项目定位</dt>
                  <dd>概念居住</dd>
                </div>
              </dl>
              <Link
                href="/projects/chen-ai-zhi-shang"
                className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent)] uppercase transition hover:text-white"
              >
                查看项目
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="section-kicker">精选项目</p>
            <h2 className="section-title">以项目为核心，建立你的专业形象与求职记忆点</h2>
            <p className="section-copy">
              第一版首页优先展示最能代表你能力结构的四个项目，分别对应文化转译、概念叙事、体验空间与商业办公逻辑。
            </p>
          </div>
          <a href="#contact" className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-80">
            联系我
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[0_24px_70px_rgba(26,24,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_84px_rgba(26,24,21,0.1)]"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </Link>
              <div className="flex h-full flex-col space-y-4 p-6">
                <div>
                  <p className="mb-2 text-xs tracking-[0.22em] text-[var(--color-accent-deep)] uppercase">{project.type}</p>
                  <h3 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{project.title}</h3>
                </div>
                <p className="text-sm leading-7 text-[var(--color-copy)]">{project.summary}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-muted)] px-3 py-1 text-[11px] tracking-[0.16em] text-[var(--color-muted-ink)] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
                  >
                    查看详情
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
          <div className="space-y-4">
            <p className="section-kicker">能力摘要</p>
            <h2 className="section-title">用结构化方式说明你会什么，而不是把首页做成简历截图</h2>
            <p className="section-copy">
              这一模块用于快速建立你的方法感与能力边界，让招聘方在看图之外，也能迅速判断你的工作方式和表达强项。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.65rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_18px_40px_rgba(26,24,21,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(26,24,21,0.08)]"
              >
                <p className="mb-4 text-xs tracking-[0.22em] text-[var(--color-accent-deep)] uppercase">能力方向</p>
                <h3 className="font-serif-display text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="section-kicker">荣誉摘要</p>
          <h2 className="section-title">用奖项摘要补强可信度，让作品表达与求职信息形成呼应</h2>
          <p className="section-copy">
            首页先以文字方式展示核心荣誉，后续在简历页与证书预览页继续承接完整奖项材料。
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_18px_36px_rgba(26,24,21,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(26,24,21,0.08)]"
            >
              <p className="mb-4 text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">荣誉奖项</p>
              <h3 className="font-serif-display text-2xl font-semibold leading-tight text-[var(--color-ink)]">
                {award.title}
              </h3>
              <div className="mt-6 space-y-3 text-sm text-[var(--color-copy)]">
                <p>
                  <span className="text-[var(--color-muted-ink)]">获奖级别：</span>
                  {award.level}
                </p>
                {award.project ? (
                  <p>
                    <span className="text-[var(--color-muted-ink)]">对应项目：</span>
                    {award.project}
                  </p>
                ) : null}
                {award.note ? <p>{award.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="bg-[var(--color-charcoal)] text-[var(--color-paper)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-16">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.26em] text-[var(--color-accent)] uppercase">简历预览</p>
            <h2 className="font-serif-display text-4xl leading-tight font-semibold sm:text-5xl">
              以网页化简历方式呈现教育背景、技能结构与实践经历。
            </h2>
            <p className="text-sm leading-8 text-white/74 sm:text-base">
              目前首页先展示核心简历摘要，后续将扩展为完整 Resume 页面，并承接证书预览与简历下载入口。
            </p>
          </div>

          <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 sm:grid-cols-2">
            <div className="space-y-3 rounded-[1.4rem] border border-white/8 bg-black/12 p-5 transition duration-300 hover:bg-black/18">
              <p className="text-xs tracking-[0.2em] text-white/54 uppercase">教育背景</p>
              <h3 className="font-serif-display text-2xl font-semibold">烟台大学｜环境设计</h3>
              <p className="text-sm leading-7 text-white/72">建筑学院，本科，预计 2026 年 7 月毕业，系统学习室内空间、商业空间与主题表达设计。</p>
            </div>
            <div className="space-y-3 rounded-[1.4rem] border border-white/8 bg-black/12 p-5 transition duration-300 hover:bg-black/18">
              <p className="text-xs tracking-[0.2em] text-white/54 uppercase">技能矩阵</p>
              <h3 className="font-serif-display text-2xl font-semibold">设计与 AI 工作流</h3>
              <p className="text-sm leading-7 text-white/72">3ds Max、V-Ray、Blender、CAD、Photoshop、Illustrator、AIGC、ComfyUI。</p>
            </div>
            <div className="space-y-3 rounded-[1.4rem] border border-white/8 bg-black/12 p-5 transition duration-300 hover:bg-black/18">
              <p className="text-xs tracking-[0.2em] text-white/54 uppercase">实践经历</p>
              <h3 className="font-serif-display text-2xl font-semibold">项目与实践经验</h3>
              <p className="text-sm leading-7 text-white/72">2023 年参与社区美育项目，2024 年参与烟台演唱会布展工作，逐步积累面向真实场景的执行经验。</p>
            </div>
            <div className="space-y-3 rounded-[1.4rem] border border-white/8 bg-black/12 p-5 transition duration-300 hover:bg-black/18">
              <p className="text-xs tracking-[0.2em] text-white/54 uppercase">个人特质</p>
              <h3 className="font-serif-display text-2xl font-semibold">持续学习与协作执行</h3>
              <p className="text-sm leading-7 text-white/72">关注前沿 AI 技术与设计工具，具备责任感、沟通意识与任务管理能力，能够在协作中稳定推进设计表达与交付。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="section-kicker">全部项目</p>
            <h2 className="section-title">先建立重点项目入口，再逐步扩展为完整作品目录</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {allProjects.map((project) =>
            project.active ? (
              <Link
                key={project.title}
                href={project.href}
                className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-copy)] shadow-[0_8px_18px_rgba(26,24,21,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(26,24,21,0.08)]"
              >
                {project.title}
              </Link>
            ) : (
              <span
                key={project.title}
                className="rounded-full border border-dashed border-[var(--color-line)] bg-[var(--color-muted)]/45 px-4 py-2 text-sm text-[var(--color-muted-ink)]"
              >
                {project.title}
              </span>
            ),
          )}
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          <div className="space-y-4">
            <p className="section-kicker">Contact</p>
            <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">让作品、简历与联系路径在同一网站中闭环</h2>
            <p className="max-w-2xl text-sm leading-8 text-[var(--color-copy)] sm:text-base">
              当前首页已接入核心项目、简历摘要与联系信息，后续将继续补充完整简历页、更多项目详情页与证书预览内容。
            </p>
          </div>
          <div className="space-y-3 text-sm text-[var(--color-copy)]">
            <p>
              邮箱：
              <a href="mailto:ay1839628583@outlook.com" className="transition hover:text-[var(--color-accent-deep)]">
                ay1839628583@outlook.com
              </a>
            </p>
            <p>
              电话：
              <a href="tel:19712029262" className="transition hover:text-[var(--color-accent-deep)]">
                19712029262
              </a>
            </p>
            <p>方向：环境设计 / 室内设计 / 实习求职</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
