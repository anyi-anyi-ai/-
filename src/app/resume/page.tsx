import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";

const education = {
  school: "烟台大学",
  major: "环境设计",
  degree: "本科 / 建筑学院",
  period: "2022.09 - 2026.07（预计）",
  summary:
    "系统学习室内空间、商业空间、展示设计与主题表达，持续把项目叙事、图像表达与网页化呈现结合到个人作品整理中。",
};

const skillGroups = [
  {
    title: "建模与渲染",
    items: ["3ds Max", "V-Ray", "Blender"],
    description: "用于空间体块建立、材质灯光推敲与效果图表现，保证方案具备完整展示力。",
  },
  {
    title: "制图与平面表达",
    items: ["AutoCAD", "Photoshop", "Illustrator"],
    description: "用于平面制图、版式整理、图像修整与项目展板输出，形成更清晰的视觉叙事。",
  },
  {
    title: "AI 辅助流程",
    items: ["AIGC", "ComfyUI"],
    description: "用于概念发散、风格测试、图像生成与后期润色，提升前期探索和表达迭代效率。",
  },
];

const experiences = [
  {
    title: "社区美育相关实践",
    period: "2023",
    description:
      "参与社区场景中的美育类活动执行，积累与真实使用场景相关的沟通、协作和落地经验。",
  },
  {
    title: "烟台演唱会布展工作",
    period: "2024",
    description:
      "参与现场布展与执行环节，进一步理解活动空间组织、现场配合和任务推进节奏。",
  },
  {
    title: "个人作品集与项目网站整理",
    period: "持续进行",
    description:
      "将课程设计、竞赛项目和图像成果系统整理为网页化作品集，强化线上求职场景中的阅读效率与表达完整度。",
  },
];

const awards = [
  {
    title: "全国大学生数字媒体科技作品及创意竞赛",
    level: "国赛三等奖",
    note: "对应项目《燃梦立方》，体现完整概念表达与成果展示能力。",
  },
  {
    title: "东方设计奖全国高校创新设计大赛",
    level: "国赛三等奖",
    note: "体现项目创意表达与视觉完成度已具备竞赛成果支撑。",
  },
  {
    title: "「华夏奖」文化艺术设计大赛",
    level: "优秀奖",
    note: "作为作品集可信度补充，后续将在荣誉页继续补充对应证明材料。",
  },
];

const projectLinks = featuredItems.map(item => ({
  label: item.title,
  href: item.detailHref,
  heroImage: item.heroImage,
}));

const contactItems = [
  { label: "邮箱", value: "ay1839628583@outlook.com", href: "mailto:ay1839628583@outlook.com" },
  { label: "电话", value: "19712029262", href: "tel:19712029262" },
  { label: "求职方向", value: "环境设计 / 室内设计 / 空间表达相关岗位" },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "荣誉证明", href: "/awards" },
          { label: "联系方式", href: "#contact" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <div className="ui-card grid gap-8 rounded-[2.2rem] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-kicker">Resume</p>
            <h1 className="section-title">用网页化方式集中呈现教育背景、技能结构、实践经验与求职方向</h1>
            <p className="section-copy">
              这一页承接首页中的简历摘要，把关键信息从「可快速浏览」扩展为「可正式判断」，帮助招聘方更高效地建立对我的背景、能力与项目方向的整体认知。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">教育信息</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{education.school}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{education.major} · {education.degree}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted-ink)]">{education.period}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">求职定位</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">环境设计 / 室内设计</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
                重点关注空间叙事、文化转译、主题场景与图像表达相关方向，希望进入兼顾概念与落地的设计岗位继续成长。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/35">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">教育背景</p>
            <h2 className="section-title">以系统学习为基础，把课程训练逐步转化为具备展示力的作品表达</h2>
          </div>
          <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{education.school}｜{education.major}</h3>
                <p className="mt-3 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase">{education.degree}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted-ink)]">{education.period}</p>
              </div>
              <p className="text-sm leading-8 text-[var(--color-copy)]">{education.summary}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="section-kicker">技能结构</p>
          <h2 className="section-title">把软件能力放回设计流程中说明，而不是只做工具名称罗列</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="ui-card rounded-[1.9rem] p-6"
            >
              <p className="text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">技能模块</p>
              <h3 className="mt-4 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-muted)] px-3 py-1 text-[11px] tracking-[0.16em] text-[var(--color-muted-ink)] uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--color-copy)]">{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/75">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">实践经历</p>
            <h2 className="section-title">通过项目执行、现场协作与作品整理，逐步建立真实场景中的设计推进能力</h2>
          </div>
          <div className="grid gap-5">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_16px_36px_rgba(26,24,21,0.04)] lg:grid lg:grid-cols-[0.28fr_0.72fr] lg:gap-8"
              >
                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{item.period}</p>
                  <h3 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                </div>
                <p className="text-sm leading-8 text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="ui-card rounded-[2.2rem] bg-white p-8">
            <p className="section-kicker">代表项目</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">让简历信息与真实项目互相支撑</h2>
            <p className="mt-4 text-sm leading-8 text-[var(--color-copy)]">
              简历页不是孤立展示背景信息，而应与作品页形成交叉印证。以下四个项目是当前网站中最适合作为进一步判断入口的代表作。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {projectLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-muted)]/35 px-4 py-2 text-sm text-[var(--color-copy)] transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {projectLinks.map((item) => (
                <Link key={item.label} href={item.href} className="project-preview-frame relative overflow-hidden rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-muted)]">
                  <Image
                    src={item.heroImage}
                    alt={`${item.label}缩略图`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/26 p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <p className="section-kicker">荣誉支撑</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">用阶段性竞赛成果补强可信度</h2>
            <div className="mt-6 grid gap-4">
              {awards.map((item) => (
                <article key={item.title} className="rounded-[1.4rem] border border-[var(--color-line)] bg-white px-5 py-5">
                  <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{item.level}</p>
                  <h3 className="mt-2 font-serif-display text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item.note}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/awards"
                className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
              >
                查看完整荣誉页面
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-muted-ink)] uppercase transition hover:text-[var(--color-accent-deep)]"
              >
                继续浏览作品集
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4">
              <p className="section-kicker">联系方式</p>
              <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">如果需要进一步沟通项目、实习或岗位信息，可以直接联系我</h2>
              <p className="text-sm leading-8 text-[var(--color-copy)]">
                当前简历页重点承接教育背景、技能与经历说明；后续将继续补充可下载简历版本、证书预览和更完整的求职资料入口。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactItems.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-[var(--color-line)] bg-white px-5 py-5">
                  <p className="text-[11px] tracking-[0.18em] text-[var(--color-muted-ink)] uppercase">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-3 block text-base text-[var(--color-copy)] transition hover:text-[var(--color-accent-deep)]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-base text-[var(--color-copy)]">{item.value}</p>
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
