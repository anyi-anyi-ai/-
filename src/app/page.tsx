import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import GlassCard from "@/components/GlassCard";
import HomeProjectsSection from "@/components/HomeProjectsSection";
import { LocalizedText } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import {
  aboutProfile,
  activeGrowthSnapshot,
  capabilities,
  contactMethods,
  designFocuses,
  featuredProjects,
  learningCategories,
  projects,
  quickLinks,
} from "@/data/site-data";
import { homeAboutPlaylist } from "@/data/music-data";

const dashboardStats = [
  { label: "Works", value: projects.length.toString(), caption: "空间 / 室内 / 概念" },
  { label: "Featured", value: featuredProjects.length.toString(), caption: "首页策展项目" },
  { label: "Now", value: "2026", caption: "作品集第二轮重写" },
];

export default function Home() {
  const heroProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1, 3);

  return (
    <main id="main-content" className="portfolio-home min-h-screen text-slate-50 selection:bg-white/10">
      <Navbar />
      <FloatingMusicPlayer playlist={homeAboutPlaylist} theme="dark" storageKey="home" />

      <section className="relative z-10 mx-auto max-w-7xl px-8 pt-32 pb-24 lg:pt-48">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
          <div className="animate-soft-rise">
            <div className="mb-10 flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase">
              <span className="h-px w-12 bg-white/20"></span>
              Spatial Design Portfolio
            </div>
            
            <h1 className="home-hero-title text-5xl md:text-7xl lg:text-[8rem] leading-[0.85] text-balance">
              Anno 的
              <br />
              <span className="text-white/90">空间档案馆</span>
            </h1>
            
            <p className="mt-16 max-w-xl text-lg font-light leading-relaxed text-white/50 md:text-xl border-l border-white/20 pl-6">
              我把空间叙事、文化母题、材质光影和 AIGC 工作流整理成一个可浏览、可投递、可持续更新的个人作品入口。
            </p>

            <div className="mt-16 flex flex-wrap gap-8">
              <Link className="btn-primary" href="/projects"><LocalizedText zh="进入作品矩阵" en="Enter works matrix" /></Link>
              <Link className="btn-secondary" href="/progress"><LocalizedText zh="查看学习进程" en="View progress" /></Link>
            </div>
          </div>

          <div className="hidden lg:block animate-soft-rise delay-150">
            <div className="flex flex-col gap-px bg-white/10 border border-white/10">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="bg-[#060607] p-8 hover:bg-white/[0.02] transition-colors">
                  <span className="block text-3xl font-serif text-white">{stat.value}</span>
                  <span className="mt-3 block text-[9px] mono uppercase tracking-widest text-white/30">{stat.label}</span>
                  <span className="mt-1 block text-[10px] text-white/20">{stat.caption}</span>
                </div>
              ))}
              <div className="bg-[#060607] p-8 flex items-center gap-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
                </div>
                <span className="text-[9px] mono uppercase tracking-widest text-white/40">Active Session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - High Impact Editorial Style */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Link href={heroProject.route} className="group relative block aspect-[21/9] overflow-hidden bg-zinc-900">
          <Image 
            src={heroProject.cover} 
            alt={heroProject.title} 
            fill 
            className="object-cover opacity-80 grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/60">Featured Project / {heroProject.year}</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-serif text-white">{heroProject.title}</h2>
              <p className="mt-6 text-base text-white/50 leading-relaxed line-clamp-2">{heroProject.summary}</p>
            </div>
            <div className="text-white/40 text-xs font-medium uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition duration-300">
              View Project ↗
            </div>
          </div>
        </Link>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group bg-[#0a0a0c] p-10 transition-colors hover:bg-white/5">
              <div className="flex items-start justify-between">
                <span className="text-2xl text-white/80">{link.icon}</span>
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-white">
                  Enter →
                </span>
              </div>
              <h2 className="mt-12 text-lg font-medium tracking-tight text-white/90">{link.title}</h2>
              <p className="mt-4 text-xs leading-relaxed text-white/40">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 首页交互式作品分类与网格展示 */}
      <HomeProjectsSection />

      <section className="relative z-10 mx-auto max-w-7xl px-8 pb-48 pt-12">
        <div className="grid gap-px bg-white/10 border border-white/10 lg:grid-cols-[1fr_1fr]">
          <div className="bg-[#060607] p-12 md:p-16 border-r border-white/10">
            <div className="flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase mb-12">
              <span className="h-px w-8 bg-white/20"></span>
              About Preview
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-[1.3] tracking-tight">
              我关注空间为什么成立，<br/>以及人在其中如何被接住。
            </h2>
            <div className="mt-16 space-y-6">
              <p className="text-sm font-light leading-relaxed text-white/50">{aboutProfile.intro}</p>
              <p className="text-sm font-light leading-relaxed text-white/50 border-l border-white/20 pl-6">{aboutProfile.philosophy}</p>
            </div>
            <div className="mt-20 flex flex-wrap gap-8">
              <Link className="btn-primary" href="/about"><LocalizedText zh="进入关于页" en="Enter About" /></Link>
              <Link className="btn-secondary" href="/resume"><LocalizedText zh="查看简历" en="View resume" /></Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {designFocuses.map((focus, index) => (
              <div key={focus.title} className="bg-[#060607] p-12 transition-colors hover:bg-white/[0.02]">
                <div className="mb-12 flex justify-between items-start">
                  <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span className="mono text-[10px] text-white/20">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-serif text-white/90">{focus.title}</h3>
                <p className="mt-6 text-xs leading-relaxed text-white/40 font-light">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid gap-px bg-white/10 border border-white/10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="bg-[#060607] p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <p className="mono text-[10px] tracking-widest text-emerald-400/90 uppercase font-medium">
                  {activeGrowthSnapshot.status} · {activeGrowthSnapshot.period}
                </p>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-white/95 leading-tight">
                近期生长状态
              </h3>
              <p className="mt-4 text-xs text-white/40 font-light leading-relaxed max-w-xl">
                除了完成态的作品，我也在这里持续同步工具链攻坚、施工图落地推进与阶段目标。
              </p>

              <div className="mt-10 space-y-6 border-t border-white/5 pt-8">
                <div>
                  <span className="mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">
                    Current Focus / 当前聚焦
                  </span>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {activeGrowthSnapshot.currentFocus}
                  </p>
                </div>

                <div>
                  <span className="mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">
                    Next Milestone / 下一里程碑
                  </span>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {activeGrowthSnapshot.nextMilestone}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeGrowthSnapshot.tags.map((tag) => (
                  <span key={tag} className="mono text-[9px] text-white/30 border border-white/10 px-2.5 py-1 bg-white/[0.01]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/progress"
                className="btn-primary text-xs !py-3 !px-6"
              >
                <LocalizedText zh="查看完整成长进程 (3大模块) →" en="VIEW FULL PROGRESS ARCHIVE →" />
              </Link>
              <span className="mono text-[10px] text-white/30">
                能力底座 · 动态时间线 · 路线图
              </span>
            </div>
          </div>

          <div className="bg-[#060607] p-10 md:p-14 border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="h-1.5 w-1.5 bg-white/40 rounded-full"></span>
                <p className="mono text-[10px] tracking-widest text-white/30 uppercase">Identity & Contact</p>
              </div>
              <h3 className="text-4xl font-serif text-white">
                {aboutProfile.name}
              </h3>
              <p className="mt-4 text-sm text-white/40 font-light">{aboutProfile.identity}</p>
              <p className="mt-8 text-xs leading-relaxed text-white/40 font-light border-l border-white/20 pl-4">{aboutProfile.school} · 空间体验、情绪叙事、材质光影与网页化表达。</p>
            </div>

            <div className="mt-12 grid gap-px bg-white/10 border border-white/10">
              {contactMethods.map((item) => (
                <div key={item.label} className="bg-[#060607] p-5 flex justify-between items-center group transition-colors hover:bg-white/[0.03]">
                  <p className="mono text-[9px] uppercase tracking-[0.2em] text-white/30">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[10px] mono text-white/50 group-hover:text-white transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-[10px] mono text-white/50">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
