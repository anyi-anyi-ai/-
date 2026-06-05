import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

export default function ProjectsIndexPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)]/30">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      <section className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="glow-orb bottom-0 left-0 h-96 w-96 opacity-10" />
        <Reveal>
          <div className="glass-panel grid gap-16 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-16">
            <div className="space-y-8">
              <p className="section-kicker text-sm">项目总览</p>
              <h1 className="section-title text-5xl sm:text-6xl lg:text-7xl">项目详情入口</h1>
              <p className="section-copy max-w-2xl text-white/60">
                这里集中展示各项目的详情页入口，进入后可查看设计概念、图像展示与完整说明。
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(212,163,115,0.5)]" />
                <p className="text-sm font-medium tracking-widest text-white/80 uppercase">项目状态</p>
              </div>
              <p className="text-sm leading-relaxed text-white/40">
                可快速浏览每个项目的方向与完成度，并进入对应详情页继续查看。
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative border-t border-white/5 bg-white/[0.01] py-32">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((project, index) => (
              <Reveal key={project.slug} delay={index * 100}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="glass-card group flex flex-col overflow-hidden rounded-[2.5rem] p-6"
                >
                  <div className="project-preview-frame relative mb-8 aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-black/40">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  </div>

                  <div className="px-2 pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase">{project.status}</span>
                    <span className="text-[10px] font-medium tracking-[0.1em] text-white/20 italic">项目</span>
                  </div>
                    <h3 className="font-serif-display text-3xl font-semibold text-white transition-colors group-hover:text-[var(--color-accent)]">{project.title}</h3>
                    <p className="mt-4 text-[11px] font-bold tracking-[0.1em] text-white/30 uppercase italic">{project.type}</p>
                    <p className="mt-6 text-sm leading-relaxed text-white/50 line-clamp-3">{project.summary}</p>

                    <div className="mt-10 border-t border-white/5 pt-8">
                      <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase transition group-hover:text-white">
                        <span>查看详情</span>
                        <span className="h-px w-8 bg-white/10 transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageFooter
        heading="继续查看作品分类或个人简历"
        links={[
          { label: "查看总作品集", href: "/portfolio" },
          { label: "查看简历页", href: "/resume" },
          { label: "返回首页", href: "/", primary: true },
        ]}
      />
    </main>
  );
}
