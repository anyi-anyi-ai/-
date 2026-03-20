import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import Reveal from "@/components/Reveal";

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
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)]/30">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "荣誉证明", href: "/awards" },
          { label: "联系方式", href: "#contact" },
        ]}
      />

      <section className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="glow-orb top-0 left-0 h-96 w-96 opacity-10" />
        <Reveal>
          <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div className="space-y-8">
              <p className="section-kicker">Resume</p>
              <h1 className="section-title text-5xl sm:text-6xl">个人简历与专业背景</h1>
              <p className="section-copy max-w-2xl text-white/60">
                集中展示教育背景、技能结构、实践经验与求职方向，提供清晰客观的能力评估参考。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-card rounded-[1.8rem] p-8">
                <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-6">Education</p>
                <h2 className="font-serif-display text-2xl font-semibold text-white leading-snug">{education.school}</h2>
                <p className="mt-4 text-sm text-white/70 italic">{education.major}</p>
                <p className="mt-2 text-xs text-white/40 tracking-[0.1em] uppercase">{education.degree}</p>
              </div>
              <div className="glass-card rounded-[1.8rem] p-8">
                <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-6">Positioning</p>
                <h2 className="font-serif-display text-2xl font-semibold text-white">环境设计 / 室内设计</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60">关注空间叙事、文化转译与图像表达，致力于兼顾概念与落地的设计成长。</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="glass-panel p-10 lg:p-16">
              <div className="mb-12 border-b border-white/5 pb-12">
                <p className="section-kicker mb-4">Academic Background</p>
                <h2 className="section-title text-4xl">教育背景</h2>
              </div>
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div className="space-y-4">
                  <h3 className="font-serif-display text-4xl font-semibold text-white">{education.school}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--color-accent)] italic">{education.major}</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-white/40 text-xs tracking-widest">{education.period}</span>
                  </div>
                </div>
                <p className="text-lg leading-[2] text-white/60 border-l border-white/10 pl-10 italic">
                  "{education.summary}"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 sm:px-10 lg:px-16">
        <Reveal className="mb-20 text-center">
          <p className="section-kicker mb-4">Core Skills</p>
          <h2 className="section-title text-4xl mx-auto">专业技能结构</h2>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <article className="glass-card flex h-full flex-col rounded-[2.5rem] p-10">
                <div className="flex items-center gap-4 mb-8 text-[10px] font-bold tracking-[0.4em] text-[var(--color-accent)] uppercase">
                  <span>Module 0{index + 1}</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3 className="font-serif-display text-3xl font-semibold text-white">{group.title}</h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-medium tracking-[0.1em] text-white/60 uppercase">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-white/50">{group.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.01] py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-20">
            <p className="section-kicker mb-4">Practice</p>
            <h2 className="section-title text-4xl">实践经验</h2>
          </Reveal>
          <div className="grid gap-6">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="glass-card group flex flex-col gap-8 rounded-[2rem] p-10 lg:flex-row lg:items-center">
                  <div className="lg:w-1/4">
                    <span className="font-serif-display text-4xl text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors duration-500">{item.period}</span>
                    <h3 className="mt-4 font-serif-display text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="flex-1 border-l border-white/5 pl-10">
                    <p className="text-lg leading-relaxed text-white/60">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass-panel p-10 lg:p-16 h-full">
              <p className="section-kicker mb-6">Evidence</p>
              <h2 className="font-serif-display text-4xl font-semibold text-white leading-tight mb-8">代表项目</h2>
              <div className="grid grid-cols-2 gap-4">
                {projectLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <Image
                      src={item.heroImage}
                      alt={`${item.label} 预览`}
                      fill
                      className="object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 opacity-100 group-hover:bg-black/10 transition-colors">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase text-center">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-panel p-10 lg:p-16 h-full border-[var(--color-accent)]/20">
              <p className="section-kicker mb-6">Recognition</p>
              <h2 className="font-serif-display text-4xl font-semibold text-white leading-tight mb-8">荣誉奖项</h2>
              <div className="space-y-6">
                {awards.map((item, index) => (
                  <div key={item.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">{item.level}</span>
                    <h3 className="mt-2 font-serif-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/40">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/5">
                <Link href="/awards" className="ui-button-primary w-full">查看完整荣誉页面</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/5 bg-white/[0.01] py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1fr_auto] lg:p-16 lg:items-center">
              <div className="space-y-6">
                <p className="section-kicker">Connect</p>
                <h2 className="font-serif-display text-4xl font-semibold text-white leading-tight sm:text-5xl">联系方式</h2>
                <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
                  欢迎通过以下方式探讨环境设计、室内空间等相关工作机会。
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <div key={item.label} className="glass-card rounded-2xl p-6 min-w-[240px]">
                    <p className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase mb-3">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base font-medium text-white hover:text-[var(--color-accent)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-white">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
