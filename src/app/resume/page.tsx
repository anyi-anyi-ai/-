import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/portfolio-data";
import { LocalizedText } from "@/components/LanguageProvider";
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
    note: "作为文化主题表达与作品集可信度的补充证明。",
  },
];

const projectLinks = featuredItems.map((item) => ({
  label: item.title,
  href: item.detailHref,
  heroImage: item.heroImage,
}));

const contactItems = [
  { label: "邮箱", value: "anyi@anyitmr.com", href: "mailto:anyi@anyitmr.com" },
  { label: "电话", value: "19712029262", href: "tel:19712029262" },
  { label: "求职方向", value: "环境设计 / 室内设计 / 空间表达相关岗位" },
];

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "荣誉证明", href: "/awards" },
          { label: "联系方式", href: "#contact" },
        ]}
      />

      {/* 1. HERO - TECHNICAL CV STYLE */}
      <section className="relative border-b border-white/10 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] items-end">
              <div className="max-w-4xl space-y-8">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-white/20"></span>
                  <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
                    Curriculum Vitae
                  </p>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light leading-[0.9] text-white tracking-tighter">
                  个人简历
                </h1>
                <p className="text-xl font-light leading-relaxed text-white/50 border-l border-white/20 pl-8 max-w-2xl">
                  集中展示教育背景、技能结构、实践经验与求职方向，方便快速了解我的学习经历与能力重点。
                </p>
              </div>
              
              <div className="mono text-[10px] text-white/30 space-y-2 border-l border-white/10 pl-6 hidden lg:block">
                <p>STATUS: SEEKING OPPORTUNITIES</p>
                <p>FIELD: ENVIRONMENTAL DESIGN</p>
                <p>UPDATED: 2026.06</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. EDUCATION - STRICT GRID */}
      <section className="relative py-32 border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Education</p>
              </div>
              <div className="border border-white/10 bg-[#080809] p-12 lg:p-16">
                <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
                  <div className="space-y-4">
                    <p className="mono text-[9px] text-white/30 tracking-widest">{education.period}</p>
                    <h3 className="text-4xl font-serif text-white">{education.school}</h3>
                    <p className="text-sm italic text-white/50">{education.major}</p>
                    <p className="mono text-[9px] text-white/30 tracking-widest uppercase mt-4 border border-white/10 inline-block px-2 py-1">{education.degree}</p>
                  </div>
                  <div className="lg:border-l border-white/10 lg:pl-12">
                    <p className="text-lg leading-relaxed text-white/60 font-light">
                      {education.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SKILLS - MONOSPACE DATA TABLES */}
      <section className="relative py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Skill Structure</p>
              </div>
              <div className="grid gap-px bg-white/10 border border-white/10">
                {skillGroups.map((group, index) => (
                  <div key={group.title} className="bg-[#080809] p-10 lg:p-12 transition-colors hover:bg-white/5">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
                      <div className="space-y-4">
                        <span className="mono text-[9px] text-white/20">0{index + 1} // CLASSIFICATION</span>
                        <h3 className="text-2xl font-serif text-white/90">{group.title}</h3>
                      </div>
                      <div className="space-y-8">
                        <p className="text-sm leading-relaxed text-white/50">{group.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span key={item} className="mono text-[9px] text-white/40 border border-white/10 bg-white/[0.02] px-3 py-1 uppercase tracking-widest hover:border-white/40 transition-colors">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. EXPERIENCES - TIMELINE LEDGER */}
      <section className="relative py-32 border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Experience</p>
              </div>
              <div className="space-y-px bg-white/10 border border-white/10">
                {experiences.map((item, index) => (
                  <div key={item.title} className="grid lg:grid-cols-[0.6fr_1.4fr] gap-px bg-white/10 group">
                    <div className="bg-[#080809] p-10 group-hover:bg-[#0b0b0d] transition-colors">
                      <span className="mono text-2xl lg:text-4xl text-white/20 group-hover:text-white/40 transition-colors">{item.period}</span>
                    </div>
                    <div className="bg-[#080809] p-10 group-hover:bg-[#0b0b0d] transition-colors space-y-4">
                      <h3 className="text-xl font-serif text-white/90">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/50 max-w-2xl">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. AWARDS & PROJECTS - SIDE BY SIDE PANELS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-px bg-white/10 border border-white/10 lg:grid-cols-2">
              <div className="bg-[#080809] p-12 lg:p-16">
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-12">Selected Works</p>
                <div className="grid grid-cols-2 gap-4">
                  {projectLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="group relative aspect-video overflow-hidden border border-white/10 bg-zinc-900 transition-all hover:border-white/30">
                      <Image
                        src={item.heroImage}
                        alt={item.label}
                        fill
                        className="object-cover opacity-60 grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute bottom-4 left-4 mono text-[9px] text-white/50 group-hover:text-white transition-colors">{item.label}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#080809] p-12 lg:p-16 border-white/10">
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-12">Awards Overview</p>
                <div className="space-y-6">
                  {awards.map((item) => (
                    <div key={item.title} className="border border-white/5 p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="mono text-[9px] text-white/30 tracking-widest uppercase mb-2 block">{item.level}</span>
                      <h3 className="font-serif text-lg text-white/90">{item.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/40 font-light">{item.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <Link href="/awards" className="mono text-[10px] text-white/40 hover:text-white transition-colors underline underline-offset-8">
                    <LocalizedText zh="查看完整荣誉列表 →" en="VIEW ALL AWARDS →" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer id="contact" className="border-t border-white/10 py-32 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] items-center">
              <div className="space-y-6">
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">Contact Requisition</p>
                <h2 className="font-serif text-4xl sm:text-5xl text-white">期待与您的交流</h2>
                <p className="text-sm leading-relaxed text-white/50 max-w-md">
                  如果您对我的环境设计方向、空间表达或是网页构建过程感兴趣，欢迎通过以下方式联系我。
                </p>
              </div>
              <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <div key={item.label} className="bg-[#080809] p-8 hover:bg-white/[0.04] transition-colors">
                    <p className="mono text-[9px] text-white/30 tracking-widest uppercase mb-4">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white/90 hover:text-white transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/90">{item.value}</p>
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
