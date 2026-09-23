import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { LocalizedText } from "@/components/LanguageProvider";
import { healingPlaylist } from "@/data/music-data";
import { learningCategories, nextGoals, progressItems, skillProgress } from "@/data/site-data";

export default function ProgressPage() {
  const accentClassMap = {
    sky: "bg-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.4)]",
    cyan: "bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.4)]",
    violet: "bg-violet-400/80 shadow-[0_0_12px_rgba(167,139,250,0.4)]",
    amber: "bg-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.4)]",
  } as const;

  return (
    <main id="main-content" className="page-base min-h-screen text-white selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <Navbar />
      <FloatingMusicPlayer playlist={healingPlaylist} theme="dark" storageKey="progress" />
      
      {/* 顶部 PageHero */}
      <PageHero
        kicker="Growth System & Archive"
        title="学习进程 Progress"
        description="这里不是静态成果的陈列架，而是一个动态记录的成长档案。涵盖已掌握的专业技能底座、近期的真实攻坚学习轨迹，以及清晰的远期发展路线图。"
        stats={["能力底座：8 项核心工具", "近期学习：施工图 & AIGC", "动态演进：持续更新", "未来蓝图：双阶段规划"]}
      />

      {/* ========================================================= */}
      {/* 第一层：能力底座 (Mastered Skills & Capability Baseline)   */}
      {/* ========================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-20 border-b border-white/10">
        <div className="mb-14">
          <div className="flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase mb-4">
            <span className="h-px w-8 bg-sky-400/60"></span>
            Layer 01 / Capability Baseline
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light tracking-tight">
            已掌握的基本技能
          </h2>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/40 font-light leading-relaxed">
            涵盖工程制图规范、三维空间建模、光影渲染表现与 AIGC 参数化工作流，构成空间方案从概念到落地的稳定工具底座。
          </p>
        </div>

        <div className="bg-[#080809] border border-white/10 p-8 md:p-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-white/5">
            <p className="mono text-[10px] text-white/40 uppercase tracking-widest">
              Skill Progression & Proficiency Matrix
            </p>
            <span className="mono text-[10px] text-white/20">
              Proficiency / Status / Domain
            </span>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2">
            {skillProgress.map((skill) => (
              <div key={skill.name} className="group space-y-3.5 p-4 rounded-xl transition-colors hover:bg-white/[0.02]">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="mono text-[9px] uppercase tracking-widest text-white/30 block mb-1">
                      {skill.category}
                    </span>
                    <h3 className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="mono text-xs text-white/60 font-medium">
                      {skill.value}%
                    </span>
                  </div>
                </div>

                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${accentClassMap[skill.accent]} transition-all duration-1000`}
                    style={{ width: `${skill.value}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-[11px] text-white/40 font-light">
                    {skill.status}
                  </p>
                  <span className="mono text-[9px] text-white/20 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 第二层：动态推进 (Recent Learning Logs & Archive)           */}
      {/* ========================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24 border-b border-white/10">
        <div className="mb-14">
          <div className="flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase mb-4">
            <span className="h-px w-8 bg-cyan-400/60"></span>
            Layer 02 / Recent Learning & Archive
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light tracking-tight">
            近期学习记录与实战轨迹
          </h2>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/40 font-light leading-relaxed">
            按时间倒序记录近期攻坚项目、毕业设计施工节点深化、AIGC 空间生成工作流搭建与个人空间档案馆重写。
          </p>
        </div>

        {/* 时间线卡片列表 */}
        <div className="relative space-y-px bg-white/10 border border-white/10">
          {progressItems.map((item) => (
            <div
              key={item.title}
              className="grid gap-px md:grid-cols-[220px_1fr] bg-[#080809] group transition-colors hover:bg-white/[0.015]"
            >
              <div className="p-8 md:p-10 border-r border-white/10 flex flex-col justify-between">
                <div>
                  <span className="mono text-xs text-white/60 font-medium block">{item.time}</span>
                  <span className="mt-3 inline-block mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-white/10 bg-white/[0.02] text-white/40">
                    {item.status}
                  </span>
                </div>
                <p className="mono text-[9px] text-white/20 mt-6 md:mt-0 uppercase tracking-widest">{item.category}</p>
              </div>
              
              <div className="p-8 md:p-10">
                <p className="mono text-[9px] text-white/20 mb-3 tracking-widest uppercase">{item.category}</p>
                <h3 className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="mt-4 text-xs md:text-sm leading-relaxed text-white/45 max-w-3xl font-light">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="mono text-[9px] text-white/25 border border-white/5 bg-white/[0.01] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 学习方向矩阵补强 */}
        <div className="mt-16">
          <p className="mono text-[10px] text-white/30 tracking-widest uppercase mb-6">
            Ongoing Learning Channels / 持续学习方向
          </p>
          <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {learningCategories.map((channel) => (
              <div key={channel.title} className="bg-[#080809] p-8 transition-colors hover:bg-white/[0.02]">
                <h4 className="text-sm font-medium text-white/80">{channel.title}</h4>
                <p className="mt-3 text-xs leading-relaxed text-white/40 font-light min-h-[40px]">{channel.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {channel.tags.map((t) => (
                    <span key={t} className="mono text-[9px] text-white/20 border border-white/5 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 第三层：未来蓝图 (Roadmap & Next Goals)                   */}
      {/* ========================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24 pb-36">
        <div className="mb-14">
          <div className="flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase mb-4">
            <span className="h-px w-8 bg-violet-400/60"></span>
            Layer 03 / Roadmap & Milestones
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light tracking-tight">
            远期目标与发展蓝图
          </h2>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/40 font-light leading-relaxed">
            把复杂的长期发展拆解为具体可推进的近阶交付项与探索方向，实现从空间设计思维到多维媒介表达的持续深耕。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 近期目标 */}
          <div className="bg-[#080809] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div>
                <span className="mono text-[9px] uppercase tracking-widest text-cyan-400/80 block mb-1">Phase 01 / Near Goals</span>
                <h3 className="text-2xl font-serif text-white">近期近阶目标</h3>
              </div>
              <span className="mono text-xs text-white/20">可落地的执行清单</span>
            </div>

            <div className="space-y-4">
              {nextGoals.near.map((goal, idx) => (
                <div key={goal} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.015] rounded-xl">
                  <span className="mono text-[10px] text-cyan-400/80 mt-1 font-bold">0{idx + 1}</span>
                  <p className="text-xs md:text-sm leading-relaxed text-white/70 font-light">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 远期目标 */}
          <div className="bg-[#080809] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div>
                <span className="mono text-[9px] uppercase tracking-widest text-violet-400/80 block mb-1">Phase 02 / Long Goals</span>
                <h3 className="text-2xl font-serif text-white">远期探索愿景</h3>
              </div>
              <span className="mono text-xs text-white/20">中长期发展愿景</span>
            </div>

            <div className="space-y-4">
              {nextGoals.long.map((goal, idx) => (
                <div key={goal} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.015] rounded-xl">
                  <span className="mono text-[10px] text-violet-400/80 mt-1 font-bold">0{idx + 1}</span>
                  <p className="text-xs md:text-sm leading-relaxed text-white/70 font-light">
                    {goal}
                  </p>
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
