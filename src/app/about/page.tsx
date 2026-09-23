import Link from "next/link";
import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import { LocalizedText } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { homeAboutPlaylist } from "@/data/music-data";
import {
  aboutProfile,
  contactMethods,
  designFocuses,
  toolGroups,
} from "@/data/site-data";

export default function AboutPage() {
  return (
    <main id="main-content" className="page-base min-h-screen text-white selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <Navbar />
      <FloatingMusicPlayer playlist={homeAboutPlaylist} />
      
      {/* 1. HERO - TECHNICAL EDITORIAL */}
      <section className="relative border-b border-white/10 pt-48 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] items-end">
              <div className="max-w-4xl space-y-8">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-white/20"></span>
                  <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
                    Creator Profile
                  </p>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light leading-[0.9] text-white tracking-tighter">
                  关于我
                </h1>
                <p className="text-xl font-light leading-relaxed text-white/50 border-l border-white/20 pl-8 max-w-2xl">
                  {aboutProfile.intro}
                </p>
              </div>
              
              <div className="mono text-[10px] text-white/30 space-y-2 border-l border-white/10 pl-6 hidden lg:block uppercase">
                <p>NAME: {aboutProfile.name}</p>
                <p>ROLE: {aboutProfile.identity}</p>
                <p>BASE: 烟台大学</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION - ARCHIVE GRID */}
      <section className="relative py-32 border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-px bg-white/10 border border-white/10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="bg-[#080809] p-12 md:p-16 border-r border-white/10 transition-colors hover:bg-white/5">
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-10 border-b border-white/5 pb-4">Introduction</p>
                
                <h2 className="text-4xl md:text-5xl font-serif text-white/90">你好，我是 {aboutProfile.name}</h2>
                <p className="mt-4 mono text-[10px] text-white/40 tracking-widest uppercase border border-white/10 inline-block px-3 py-1 bg-white/[0.02]">{aboutProfile.role}</p>
                
                <div className="mt-16 space-y-8">
                  <p className="text-sm leading-relaxed text-white/60 font-light">{aboutProfile.intro}</p>
                  <p className="text-sm leading-relaxed text-white/60 font-light border-l border-white/20 pl-6">{aboutProfile.philosophy}</p>
                </div>
                
                <div className="mt-16 flex flex-wrap gap-6">
                  <Link className="btn-primary" href="/projects"><LocalizedText zh="查看作品" en="View works" /></Link>
                  <a className="btn-secondary" href="#contact-card"><LocalizedText zh="联系我" en="Contact me" /></a>
                </div>
              </div>

              <div className="bg-[#080809] p-12 md:p-16 flex flex-col justify-between">
                <div>
                  <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-10 border-b border-white/5 pb-4">Identity Snapshot</p>
                  <h3 className="text-3xl font-serif text-white/90 mb-6">{aboutProfile.identity}</h3>
                  <p className="text-xs leading-relaxed text-white/40">{aboutProfile.school} · 环境与室内相关设计学习 · 持续把数字工具与网页表达接回作品集系统。</p>
                </div>

                <div className="mt-16 grid gap-12 sm:grid-cols-2 border-t border-white/10 pt-12">
                  <div>
                    <p className="mono text-[9px] text-white/30 mb-4">Main Focus</p>
                    <p className="text-xs leading-relaxed text-white/50">
                      空间体验、文化转译、材料与光影、AIGC 辅助设计。
                    </p>
                  </div>
                  <div>
                    <p className="mono text-[9px] text-white/30 mb-4">Website Role</p>
                    <p className="text-xs leading-relaxed text-white/50">
                      既是作品展示入口，也是整理思考、记录学习和承接联系的数字空间。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. DESIGN FOCUS - MINIMAL LIST */}
      <section className="relative py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Design Focus</p>
              </div>
              <div className="space-y-32">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif text-white/90 leading-tight">我在意的空间线索</h2>
                  <p className="max-w-md text-xs leading-relaxed text-white/40 pb-2">
                    这些方向共同构成我的设计关注点：它们不是彼此分离的标签，而是在项目中经常一起出现的工作视角。
                  </p>
                </div>
                
                <div className="grid gap-px bg-white/10 md:grid-cols-2 border border-white/10">
                  {designFocuses.map((focus, index) => (
                    <div key={focus.title} className="bg-[#080809] p-10 lg:p-12 transition-colors hover:bg-white/5">
                      <div className="flex justify-between items-start mb-10">
                        <h3 className="text-2xl font-serif text-white/80">{focus.title}</h3>
                        <p className="mono text-[10px] text-white/20">0{index + 1}</p>
                      </div>
                      <p className="text-xs leading-relaxed text-white/40 font-light">{focus.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SKILLS & TOOLS - TECHNICAL GRID */}
      <section className="relative py-32 border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#080809] p-12 md:p-16 border-r border-white/10">
                <p className="mono text-[10px] text-white/40 mb-10 tracking-[0.4em] uppercase border-b border-white/5 pb-4">Skills & Tools</p>
                <h2 className="text-4xl font-serif text-white/90 leading-tight mb-8">技能与工具</h2>
                <p className="text-xs leading-relaxed text-white/40 max-w-sm">
                  这些工具既服务于图纸、建模、渲染与排版，也服务于网页表达与数字工作流的搭建。
                </p>
              </div>
              <div className="bg-[#080809] p-12 md:p-16">
                <div className="grid gap-12 sm:grid-cols-2">
                  {toolGroups.map((group) => (
                    <div key={group.label}>
                      <h3 className="text-sm font-medium text-white/80 mb-3">{group.label}</h3>
                      <p className="text-[10px] text-white/30 mb-6 leading-relaxed min-h-[40px]">{group.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="mono text-[9px] text-white/40 border border-white/10 bg-white/[0.02] px-3 py-1 uppercase tracking-widest transition-colors hover:border-white/40 hover:text-white">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. CONTACT - REQUISITION FORM STYLE */}
      <section id="contact-card" className="relative py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
              <div>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase sticky top-32">Contact Identity</p>
              </div>
              <div className="grid gap-px bg-white/10 border border-white/10 lg:grid-cols-[1fr_1fr]">
                <div className="bg-[#080809] p-12 lg:p-16 border-r border-white/10">
                  <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-8">联系方式</h2>
                  <p className="text-xs leading-relaxed text-white/40 max-w-md">
                    如果你对我的作品、学习记录或网站内容感兴趣，欢迎通过下面的方式联系我。更即时的轻交流，也可以直接去在线留言页。
                  </p>
                  <div className="mt-12 flex flex-wrap gap-6">
                    <Link className="btn-primary" href="/message"><LocalizedText zh="在线留言" en="Leave a message" /></Link>
                  </div>
                </div>

                <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                  {contactMethods.map((item) => (
                    <div key={item.label} className="bg-[#080809] p-10 transition-colors hover:bg-white/5">
                      <p className="mono text-[9px] text-white/30 mb-6 tracking-[0.2em] uppercase">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="block text-sm font-medium text-white/80 transition-colors hover:text-white break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white/80">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}

