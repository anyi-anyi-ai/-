"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { PortfolioItem } from "@/data/portfolio-data";

export default function ProjectContent({ project, relatedItems }: { project: PortfolioItem, relatedItems: PortfolioItem[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)]/30">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      {/* 1. ARCHITECTURAL HERO SECTION - IMMERSIVE SCALE */}
      <section className="relative h-[92vh] w-full overflow-hidden bg-[var(--color-muted)]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={`${project.title} 主视觉`}
            fill
            className="object-cover opacity-90 brightness-[0.98]"
            priority
            sizes="100vw"
          />
          {/* Overlay Grid */}
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgwLDAsMCwwLjA4KSIvPjwvc3ZnPg==')] opacity-40" />
        </div>

        {/* Hero Floating Card - Editorial Style */}
        <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/20 to-transparent pb-20 pt-40 px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="max-w-5xl space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[var(--color-accent)]" />
                <p className="text-xs font-medium tracking-[0.4em] text-[var(--color-accent)] uppercase">
                  Project Detail / {project.type}
                </p>
              </div>
              <h1 className="font-serif-display text-6xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 backdrop-blur-sm bg-white/5 p-2 rounded">
                {project.subtitle}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Decorative Vertical Line */}
        <div className="absolute top-0 right-16 hidden h-full w-[1px] bg-[var(--color-line)] lg:block" />
      </section>

      {/* 2. OVERVIEW & SPECS - ASYMMETRICAL GRID */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.6fr]">
          <Reveal>
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase italic">Overview</p>
                <h2 className="font-serif-display text-4xl font-semibold leading-snug lg:text-5xl text-white">
                  {project.overview}
                </h2>
              </div>
              <div className="h-[1px] w-full bg-[var(--color-line)]" />
              <p className="text-lg leading-[2] text-white/60">
                {project.designStatement}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] lg:sticky lg:top-32 backdrop-blur-md">
              <div className="absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
              <div className="space-y-8">
                <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase underline decoration-[var(--color-accent)] decoration-2 underline-offset-8">Specifications</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">Keywords</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.keywords.map(k => (
                        <span key={k} className="text-sm font-medium text-[var(--color-accent)] italic">#{k}</span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">Status</dt>
                    <dd className="mt-2 text-base font-serif-display text-[var(--color-accent)]">{project.status}</dd>
                  </div>
                  {project.portfolioHref && (
                    <div className="pt-4">
                      <Link href={project.portfolioHref} className="group inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition hover:text-[var(--color-accent)] text-white/60">
                        <span>Back to Portfolio</span>
                        <span className="h-[1px] w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                      </Link>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. HIGHLIGHTS & PROCESS - FULL WIDTH VISUAL FLOW */}
      <section className="bg-white/[0.02] py-24 text-[var(--color-paper)] lg:py-32 border-y border-white/5">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 text-white">
          <Reveal>
            <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl space-y-4">
                <p className="text-[11px] font-bold tracking-[0.4em] text-[var(--color-accent)] uppercase">Design Highlights</p>
                <h2 className="font-serif-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  以概念、体验与视觉表达共同构成项目阅读路径
                </h2>
              </div>
              <div className="text-[60px] font-serif-display text-white/10 leading-none lg:text-[120px]">01</div>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {project.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 150}>
                <div className="group relative border-l border-white/10 pl-8 transition hover:border-[var(--color-accent)]">
                  <span className="absolute -left-[1px] top-0 h-0 w-[1px] bg-[var(--color-accent)] transition-all duration-700 group-hover:h-full" />
                  <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-4">Highlight 0{i+1}</p>
                  <p className="text-lg leading-relaxed text-white/80">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN GALLERY - THE "SHEETS" SYSTEM */}
      <section className="mx-auto max-w-[1800px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 text-center space-y-4">
            <p className="text-[11px] font-bold tracking-[0.5em] text-[var(--color-accent)] uppercase italic">Project Gallery</p>
            <h2 className="font-serif-display text-3xl font-medium tracking-tight text-white">点击图片以进入沉浸式画廊模式</h2>
            <div className="mx-auto h-[1px] w-24 bg-white/10" />
          </div>
        </Reveal>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
          {project.gallery.map((img, index) => (
            <Reveal key={img} delay={(index % 3) * 100}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-white/[0.03] transition-all duration-500 hover:border-white/20"
              >
                <div className="absolute top-4 left-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <Image
                  src={img}
                  alt={`${project.title} 详情图 ${index + 1}`}
                  width={800}
                  height={1200}
                  className="h-auto w-full opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 right-4 z-10 text-[10px] font-medium tracking-[0.2em] text-white/20 uppercase transition group-hover:text-[var(--color-accent)]">
                  SH-0{index + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. VIDEO SECTION - IF EXISTS */}
      {project.videoSrc && (
        <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-black p-4 shadow-2xl border border-white/5">
              <video
                controls
                preload="metadata"
                className="w-full rounded-[1.8rem] opacity-90"
                poster={project.heroImage}
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </section>
      )}

      {/* 6. NEXT PROJECT NAV */}
      <section className="border-t border-white/5 bg-white/[0.01] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-16">
          <Reveal>
            <div className="space-y-10">
              <p className="text-[11px] font-bold tracking-[0.4em] text-white/30 uppercase">Keep Exploring</p>
              <h2 className="font-serif-display text-5xl font-semibold leading-tight text-white">阅览更多作品集，<br/>或查阅我的专业简历</h2>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Link
                  href="/portfolio"
                  className="ui-button-primary min-w-[200px]"
                >
                  返回总作品集页
                </Link>
                <Link
                  href="/resume"
                  className="ui-button-secondary min-w-[200px]"
                >
                  查看个人简历
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        images={project.gallery}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectTitle={project.title}
      />
    </main>
  );
}
