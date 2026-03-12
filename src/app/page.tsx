import Image from "next/image";
import Link from "next/link";
import { portfolioItems, featuredItems, awardItems } from "@/data/portfolio-data";
import Reveal from "@/components/Reveal";

const allProjects = portfolioItems.map(item => ({
  title: item.title,
  href: item.detailHref,
  active: true,
  status: "已上线详情",
}));

const capabilities = [
  {
    title: "空间叙事",
    description: "擅长从概念母题、情绪氛围到浏览路径建立完整叙事，使空间方案在阅读时具备清晰节奏与记忆点。",
    evidence: "适用于概念居住、主题空间与文化民宿等需要先建立故事框架的项目。",
  },
  {
    title: "文化转译",
    description: "将道家、丝路、戏曲、中医等文化母题转化为空间语言，强调精神意象、材料气质与场景体验的统一。",
    evidence: "重点体现在「道隐无名」「觅踪」等项目中，避免文化符号化和表面化。",
  },
  {
    title: "视觉表达",
    description: "结合 3ds Max、V-Ray、Blender、Photoshop 等工具完成效果图、展板与项目图像表达，保证方案具有展示力。",
    evidence: "用于把复杂概念转译成可被快速理解的高完成度视觉结果。",
  },
  {
    title: "AI 工作流",
    description: "在概念发散、风格测试、图像生成与表达迭代中引入 AIGC 与 ComfyUI，提高创意探索与方案调整效率。",
    evidence: "帮助项目在早期发散和后期润色阶段都保持更高的迭代速度。",
  },
];

const resumeHighlights = [
  {
    label: "教育背景",
    title: "烟台大学｜环境设计",
    description: "建筑学院，本科，预计 2026 年 7 月毕业，系统学习室内空间、商业空间、展示设计与主题表达。",
  },
  {
    label: "技能矩阵",
    title: "设计软件与 AI 工作流",
    description: "熟悉 3ds Max、V-Ray、Blender、CAD、Photoshop、Illustrator，并持续把 AIGC 与 ComfyUI 纳入设计表达流程。",
  },
  {
    label: "实践经历",
    title: "项目执行与现场协作",
    description: "参与社区美育项目与演唱会布展工作，逐步积累面向真实场景的沟通、执行与交付经验。",
  },
  {
    label: "个人特质",
    title: "持续学习与稳定推进",
    description: "具备责任感、沟通意识与任务管理能力，能够在创意表达与实际落地之间保持稳定推进。",
  },
];

const contactItems = [
  {
    label: "邮箱",
    value: "ay1839628583@outlook.com",
    href: "mailto:ay1839628583@outlook.com",
  },
  {
    label: "电话",
    value: "19712029262",
    href: "tel:19712029262",
  },
  {
    label: "求职方向",
    value: "环境设计 / 室内设计 / 空间表达相关岗位",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "概念切入",
    description: "从文化母题、场景需求或主题命题出发，先明确项目为什么成立，再决定视觉方向。",
  },
  {
    step: "02",
    title: "空间组织",
    description: "围绕动线、功能、情绪和使用方式整理空间逻辑，让方案不只停留在意向层面。",
  },
  {
    step: "03",
    title: "图像表达",
    description: "通过效果图、展板和网页化排版让概念被快速理解，形成可阅读的项目展示结果。",
  },
];

const browseGuide = [
  "先看首页首屏与能力摘要，快速了解我的设计方向与表达方式。",
  "再进入总作品集页或项目总览页，浏览目前整理完成的 8 个作品，建立对我作品类型与风格的整体印象。",
  "最后回到简历摘要、荣誉页与联系模块，继续了解我的背景经历与求职信息。",
];


const profileStats = [
  { value: String(portfolioItems.length), label: "作品方向储备" },
  { value: String(featuredItems.length), label: "精选项目" },
  { value: "3", label: "核心竞赛成果" },
  { value: "2026", label: "预计毕业时间" },
];

const actionLinks = [
  { label: "查看精选项目", href: "#projects" },
  { label: "进入总作品集", href: "/portfolio" },
  { label: "浏览简历页", href: "/resume" },
  { label: "查看荣誉页", href: "/awards" },
  { label: "直接联系我", href: "#contact" },
];

const closingNotes = [
  "首页负责建立第一印象、能力判断与项目入口，不替代完整作品详情页。",
  "每个已上线项目都将继续补充过程图、展板图、视频与项目总结内容。",
  "后续将继续扩展独立简历页与证书展示页，形成更完整的求职资料闭环。",
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="hero-shell relative isolate overflow-hidden text-white">
        <div className="glow-orb top-[10%] left-[8%] h-40 w-40 opacity-70" />
        <div className="glow-orb right-[10%] bottom-[14%] h-56 w-56 opacity-60" />
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
          <header className="animate-reveal stagger-1 flex flex-col gap-4 border-b border-white/10 pb-4 text-sm tracking-[0.22em] text-white/72 uppercase sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium">安翌</span>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:gap-6 sm:text-sm">
              <a href="#projects" className="transition hover:text-white">
                作品
              </a>
              <a href="#about" className="transition hover:text-white">
                关于
              </a>
              <Link href="/resume" className="transition hover:text-white">
                简历
              </Link>
              <Link href="/awards" className="transition hover:text-white">
                荣誉
              </Link>
              <Link href="/projects" className="transition hover:text-white">
                总览
              </Link>
              <Link href="/portfolio" className="transition hover:text-white">
                作品集
              </Link>
              <a href="#contact" className="transition hover:text-white">
                联系
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
            <div className="max-w-3xl space-y-8">
              <div className="animate-reveal stagger-2 space-y-4">
                <p className="text-sm tracking-[0.28em] text-[var(--color-accent)] uppercase">
                  Environment Design Portfolio
                </p>
                <h1 className="font-serif-display max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[0.02em] sm:text-6xl lg:text-7xl">
                  安翌｜以空间叙事与视觉表达构建可阅读的环境设计作品集
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                  聚焦文化转译、主题空间、商业体验与概念叙事，用完整图像、结构化文案和逐步展开的项目详情，建立面向环境设计与室内设计岗位的线上作品展示入口。
                </p>
              </div>

              <div className="animate-reveal stagger-3 grid gap-4 text-sm text-white/78 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">专业方向</p>
                  <p className="mt-2 text-base text-white">环境设计 / 室内空间</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">核心优势</p>
                  <p className="mt-2 text-base text-white">文化转译 + 视觉表达</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">求职目标</p>
                  <p className="mt-2 text-base text-white">设计实习 / 初级岗位</p>
                </div>
              </div>

              <div className="animate-reveal stagger-4 grid gap-4 sm:grid-cols-4">
                {profileStats.map((item) => (
                  <div key={item.label} className="rounded-[1.3rem] border border-white/10 bg-black/18 px-4 py-4 text-center backdrop-blur-sm">
                    <p className="font-serif-display text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-[11px] tracking-[0.18em] text-white/52 uppercase">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="animate-reveal stagger-4 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="ui-button-primary">
                  查看精选作品
                </a>
                <Link href="/resume" className="ui-button-secondary text-white">
                  查看简历页
                </Link>
              </div>

              <div className="animate-reveal stagger-5 ui-panel rounded-[1.7rem] bg-black/24 p-5 text-sm leading-7 text-white/78">
                这个首页更像一块作品展陈前言：先了解我的设计定位与方法，再进入作品页细看项目内容，最后再判断是否适合进一步沟通 or 合作。
              </div>
            </div>

            <div className="animate-reveal stagger-5 ui-panel space-y-6 rounded-[2.2rem] border-white/10 bg-white/8 p-6 backdrop-blur-md">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <p className="text-xs tracking-[0.28em] text-white/56 uppercase">首页主打项目</p>
                <h2 className="font-serif-display text-3xl font-semibold">尘埃之上</h2>
                <p className="text-sm tracking-[0.18em] text-[var(--color-accent)] uppercase">未来生态 / 概念居住</p>
              </div>
              <p className="text-sm leading-7 text-white/82">
                项目从火星极端环境切入，尝试构建兼具生存技术、生态系统与精神慰藉的未来居住原型，用强叙事性视觉建立首页第一记忆点。
              </p>
              <div className="editorial-divider" />
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
                  <dt className="mb-1 text-xs tracking-[0.2em] text-white/48 uppercase">项目价值</dt>
                  <dd>概念叙事与系统表达</dd>
                </div>
              </dl>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/22 p-4 text-sm leading-7 text-white/74">
                它承担首页的第一视觉记忆点，也代表我在"概念构建—图像表达—项目叙述"三方面的综合能力。
              </div>
              <Link href="/projects/chen-ai-zhi-shang" className="ui-button-secondary w-full sm:w-fit text-white">
                查看项目
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-[1600px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="glow-orb top-0 right-0 h-96 w-96 opacity-20" />
        
        <Reveal>
          <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-6">
              <p className="section-kicker">Curated Projects</p>
              <h2 className="section-title">用代表作建立能力结构，而非作品缩略图的堆叠</h2>
              <p className="section-copy">
                精选四个项目，分别对应文化叙事、未来概念、体验空间与商业逻辑，展示从概念推导到视觉执行的完整链路。
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase italic">01 / Projects</span>
            </div>
          </div>

          <div className="glass-panel mb-16 overflow-hidden p-10 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">策展逻辑</p>
                <h3 className="font-serif-display text-4xl font-semibold text-white sm:text-5xl">不追求数量，而优先呈现能力覆盖面</h3>
                <p className="text-lg leading-relaxed text-white/60">
                  四个项目分别对应文化叙事、未来概念、青年体验与共享办公四种不同任务类型，体现你在概念、功能、场景和图像表达上的综合深度。
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                <Image 
                  src="/projects/dao-yin-wu-ming/cover.webp"
                  alt="Architecture Logic Illustration"
                  fill
                  className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Link
                href={`/projects/${project.slug}`}
                className="glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] p-4"
              >
                <div className="project-preview-frame relative mb-6 overflow-hidden rounded-[1.5rem] bg-black/40">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} 预览`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                
                <div className="flex flex-1 flex-col px-2 pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">{project.status}</span>
                    <span className="text-[10px] font-medium tracking-[0.1em] text-white/30 italic">SH-{index+1}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold text-white transition group-hover:text-[var(--color-accent)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs tracking-[0.15em] text-white/50 uppercase">{project.type}</p>
                  <p className="mt-6 text-sm leading-relaxed text-white/60 line-clamp-3">
                    {project.summary}
                  </p>
                  
                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase transition group-hover:text-white">
                      <span>View Project</span>
                      <span className="h-[1px] w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="relative border-y border-white/5 bg-white/[0.02] py-32">
        <div className="glow-orb bottom-0 left-0 h-96 w-96 opacity-10" />
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="grid gap-16 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr] lg:p-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="section-kicker">Methodology</p>
                  <h2 className="section-title">关注项目如何被阅读，而非仅仅最后一张效果图</h2>
                </div>
                <p className="section-copy">
                  在环境设计学习与项目表达中，我更重视"概念如何建立、空间如何组织、图像如何传达"这一整条链路。不仅展示结果，也刻意说明方法，帮助浏览者理解每个作品背后的判断逻辑。
                </p>
                <div className="h-[1px] w-24 bg-[var(--color-accent)]" />
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {workflowSteps.map((item, index) => (
                  <div key={item.step} className={`animate-reveal stagger-${index + 1}`}>
                    <article className="h-full rounded-[1.8rem] border border-white/5 bg-white/[0.02] p-6 transition hover:bg-white/[0.05]">
                      <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">Step 0{item.step}</p>
                      <h3 className="mt-4 font-serif-display text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">{item.description}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-24 grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <Reveal className="space-y-6 lg:sticky lg:top-32">
              <p className="section-kicker">Capabilities</p>
              <h2 className="section-title text-4xl lg:text-5xl">让招聘方先看懂你的方法，再决定深入浏览哪些项目</h2>
              <p className="section-copy">
                快速说明设计方法、表达优势与适配项目类型，帮助浏览者在看图之外理解你的工作方式。
              </p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <article
                    className="glass-card flex h-full flex-col rounded-[2.2rem] p-8"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">Expertise</span>
                      <div className="h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-40" />
                    </div>
                    <h3 className="font-serif-display text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-6 text-sm leading-relaxed text-white/60">{item.description}</p>
                    <div className="mt-8 mt-auto border-t border-white/5 pt-6 text-xs leading-relaxed text-[var(--color-accent)]/70 italic">
                      {item.evidence}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16">
        <Reveal>
          <div className="glass-panel px-8 py-12 lg:px-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="section-kicker">Career Positioning</p>
                <h2 className="font-serif-display text-4xl font-semibold leading-tight text-white sm:text-5xl">当前网站重点服务于环境设计与室内设计方向的求职展示</h2>
              </div>
              <p className="text-lg leading-relaxed text-white/60">
                首页的任务不是替代完整作品集，而是先帮助招聘方在较短时间内完成"判断方向、筛选项目、确认沟通意愿"三步。后续更深入的项目内容，会在各个详情页里逐步展开。
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl space-y-6">
              <p className="section-kicker">Recognition</p>
              <h2 className="section-title">奖项与成果建立的可信度支撑</h2>
              <p className="section-copy">
                首页展示核心荣誉，证明设计完成度已获竞赛支撑，详情见荣誉页。
              </p>
            </div>
            <Link href="/awards" className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase transition hover:text-white">
              <span>View All Awards</span>
              <span className="h-[1px] w-8 bg-[var(--color-accent)] transition-all group-hover:w-12" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {awardItems.map((award, index) => (
            <Reveal key={award.title} delay={index * 100}>
              <article
                className="glass-card flex h-full flex-col rounded-[2.2rem] p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">{award.level}</span>
                  <div className="h-px w-8 bg-white/10" />
                </div>
                <h3 className="font-serif-display text-2xl font-semibold text-white leading-snug">
                  {award.title}
                </h3>
                <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/50">
                  {award.project ? (
                    <p className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                      <span>项目：{award.project}</span>
                    </p>
                  ) : null}
                  {award.note ? <p className="italic">"{award.note}"</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="resume" className="relative overflow-hidden bg-white/[0.03] py-32">
        <div className="glow-orb top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="mx-auto grid max-w-[1600px] gap-20 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <Reveal className="space-y-8">
            <p className="section-kicker">Professional Profile</p>
            <h2 className="font-serif-display text-5xl font-bold leading-tight text-white sm:text-6xl">
              提炼教育背景、技能与经验，信息阅读比截图更清晰
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              首页呈现求职核心信息，完整版、证书预览及下载入口详见 Resume 页面。
            </p>
            <Link
              href="/resume"
              className="ui-button-primary"
            >
              进入完整简历页
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {resumeHighlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <div className="glass-card flex h-full flex-col rounded-[2.2rem] p-8">
                  <p className="mb-6 text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">{item.label}</p>
                  <h3 className="font-serif-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/50">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-kicker">全部项目</p>
            <h2 className="section-title">先建立重点项目入口，再逐步扩展为完整作品目录</h2>
            <p className="section-copy">
              目前这 8 个作品已经整理为完整的线上展示内容，你可以从项目总览页快速进入详情，也可以先通过总作品集页整体浏览，了解我的设计关注点与表达方式。
            </p>
          </div>
          <Link href="/projects" className="ui-button-light">
            进入项目总览
          </Link>
        </div>

        <div className="mb-10 grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/28 p-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">浏览引导</p>
            <h3 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">推荐按照"首页判断 → 项目深入 → 联系确认"的顺序浏览</h3>
          </div>
          <div className="grid gap-3">
            {browseGuide.map((item, index) => (
              <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {allProjects.map((project) =>
            project.active ? (
              <Link
                key={project.title}
                href={project.href}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5 shadow-[0_8px_18px_rgba(26,24,21,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(26,24,21,0.08)]"
              >
                <span className="block text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{project.status}</span>
                <span className="mt-3 block font-serif-display text-2xl font-semibold text-[var(--color-ink)]">{project.title}</span>
              </Link>
            ) : (
              <div
                key={project.title}
                className="rounded-[1.5rem] border border-dashed border-[var(--color-line)] bg-[var(--color-muted)]/45 p-5"
              >
                <span className="block text-xs tracking-[0.18em] text-[var(--color-muted-ink)] uppercase">{project.status}</span>
                <span className="mt-3 block font-serif-display text-2xl font-semibold text-[var(--color-ink)]">{project.title}</span>
              </div>
            ),
          )}
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker">行动入口</p>
              <h2 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">如果你已经完成浏览，可以直接继续查看项目、简历或联系信息</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {actionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">Contact</p>
              <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">让作品、简历与联系路径在同一网站中闭环</h2>
              <p className="max-w-2xl text-sm leading-8 text-[var(--color-copy)] sm:text-base">
                当前首页的目标，是让浏览者可以在一个页面中完成"认识你、浏览代表项目、判断能力方向、查看求职摘要、建立联系"这一整条基本路径。
              </p>
              <div className="grid gap-3 pt-2">
                {closingNotes.map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 text-sm text-[var(--color-copy)] sm:min-w-[20rem]">
              {contactItems.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/28 px-4 py-4">
                  <p className="text-[11px] tracking-[0.18em] text-[var(--color-muted-ink)] uppercase">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-2 block text-base transition hover:text-[var(--color-accent-deep)]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base text-[var(--color-copy)]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
