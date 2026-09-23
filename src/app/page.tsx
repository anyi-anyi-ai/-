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

      {/* 沉浸式通栏首屏 Hero - 还原大图视觉冲击，同时融合统计与主打项目卡片 */}
      <section className="relative isolate min-h-[92vh] lg:min-h-screen overflow-hidden flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        {/* 通栏项目主图大背景 */}
        <Image
          src={heroProject.cover}
          alt={`${heroProject.title} 视觉主图`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01] opacity-70"
        />

        {/* 电影质感分层渐变：确保文字与仪表盘极高可读性，同时边缘柔和融入全站深黑背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,7,0.92)_0%,rgba(6,6,7,0.78)_40%,rgba(6,6,7,0.36)_72%,rgba(6,6,7,0.18)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,163,115,0.16)_0%,rgba(212,163,115,0)_42%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#060607]/90 via-[#060607]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060607] via-[#060607]/60 to-transparent pointer-events-none" />

        {/* 首屏核心内容区 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl my-auto py-8">
          <div className="grid gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
            <div className="animate-soft-rise">
              <div className="mb-8 flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/50 uppercase">
                <span className="h-px w-12 bg-white/30"></span>
                Spatial Design Portfolio
              </div>
              
              <h1 className="home-hero-title text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.88] text-balance">
                Anno 的
                <br />
                <span className="text-white/95">空间档案馆</span>
              </h1>
              
              <p className="mt-10 max-w-xl text-base sm:text-lg font-light leading-relaxed text-white/65 md:text-xl border-l border-white/20 pl-6 backdrop-blur-[2px]">
                我把空间叙事、文化母题、材质光影和 AIGC 工作流整理成一个可浏览、可投递、可持续更新的个人作品入口。
              </p>

              <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
                <Link className="btn-primary" href="/projects">
                  <LocalizedText zh="进入作品矩阵" en="Enter works matrix" />
                </Link>
                <Link className="btn-secondary" href="/progress">
                  <LocalizedText zh="查看学习进程" en="View progress" />
                </Link>
              </div>
            </div>

            {/* 右侧微光卡片：展示当前精选作品与状态仪表盘 */}
            <div className="hidden lg:block animate-soft-rise delay-150">
              <div className="glass-surface p-8 space-y-6 backdrop-blur-xl bg-[#060607]/60 border border-white/10">
                <div className="flex items-start justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-[10px] mono uppercase tracking-[0.25em] text-[#d4a373] block">
                      Featured / {heroProject.year}
                    </span>
                    <h2 className="mt-1.5 text-2xl font-serif text-white tracking-wide">{heroProject.title}</h2>
                    <p className="mt-1 text-[11px] text-white/40 mono">{heroProject.type}</p>
                  </div>
                  <Link 
                    href={heroProject.route}
                    className="text-[10px] mono uppercase tracking-wider text-white/80 hover:text-white border border-white/20 hover:border-white/60 px-3.5 py-1.5 transition-colors"
                  >
                    View ↗
                  </Link>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                  {heroProject.summary}
                </p>

                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {dashboardStats.map((stat) => (
                    <div key={stat.label} className="bg-[#060607]/80 p-4 text-center">
                      <span className="block text-2xl font-serif text-white">{stat.value}</span>
                      <span className="mt-1 block text-[9px] mono uppercase tracking-widest text-white/40">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] mono text-white/40">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
                    </span>
                    <span>Active Session</span>
                  </div>
                  <span>{heroProject.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部细微指示栏 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl flex items-center justify-between pt-4 border-t border-white/10 text-[10px] mono text-white/30 uppercase tracking-widest">
          <span>Curated Works & Archives</span>
          <div className="flex items-center gap-2">
            <span>Scroll to Explore</span>
            <span>↓</span>
          </div>
        </div>
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
