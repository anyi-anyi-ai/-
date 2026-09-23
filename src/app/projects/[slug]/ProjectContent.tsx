"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LocalizedText } from "@/components/LanguageProvider";
import SubpageNav from "@/components/SubpageNav";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { PortfolioItem } from "@/data/portfolio-data";

export default function ProjectContent({ project }: { project: PortfolioItem, relatedItems: PortfolioItem[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      {/* 1. ARCHITECTURAL HERO SECTION - IMMERSIVE SCALE */}
      <section className="relative h-[90vh] w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover opacity-70 grayscale transition-all duration-[2s] hover:grayscale-0"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-8 py-20 lg:px-24">
          <Reveal>
            <div className="max-w-6xl space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-white/20"></span>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
                  Technical Documentation / {project.type}
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light leading-[0.85] text-white tracking-tighter">
                {project.title}
              </h1>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-white/50 border-l border-white/20 pl-8">
                {project.subtitle}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. OVERVIEW & SPECS - ASYMMETRICAL GRID */}
      <section className="mx-auto max-w-7xl px-8 py-32 lg:py-48">
        <div className="grid gap-24 lg:grid-cols-[1fr_0.6fr]">
          <Reveal>
            <div className="space-y-16">
              <div className="space-y-8">
                <p className="mono text-[11px] text-white/20 tracking-widest border-b border-white/5 pb-4 uppercase">Statement</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white/90 leading-tight">
                  {project.overview}
                </h2>
              </div>
              <div className="h-px w-16 bg-white/40"></div>
              <p className="text-xl leading-relaxed text-white/50 font-light">
                {project.designStatement}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#0b0b0d] border border-white/10 p-12 lg:sticky lg:top-32">
              <h3 className="mono text-[11px] text-white/20 tracking-widest border-b border-white/5 pb-6 mb-8 uppercase">Specifications</h3>
              <dl className="space-y-10">
                <div>
                  <dt className="mono text-[9px] text-white/30 mb-3">Classification</dt>
                  <dd className="text-sm font-serif text-white/80">{project.type}</dd>
                </div>
                <div>
                  <dt className="mono text-[9px] text-white/30 mb-3">Keywords</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.keywords.map(k => (
                      <span key={k} className="mono text-[9px] text-white/30 border border-white/10 px-2 py-1">#{k}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[9px] text-white/30 mb-3">Status</dt>
                  <dd className="text-sm font-serif text-white/80">{project.status}</dd>
                </div>
                {project.portfolioHref && (
                  <div className="pt-6">
                    <Link href={project.portfolioHref} className="mono text-[10px] text-white/40 hover:text-white underline underline-offset-8 transition-colors">
                      <LocalizedText zh="查看作品集版本" en="VIEW PORTFOLIO" />
                    </Link>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. HIGHLIGHTS & PROCESS */}
      <section className="border-y border-white/10 bg-white/[0.015] py-32 lg:py-48">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="mb-24 space-y-6">
              <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase">Architecture of concept</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white/90 max-w-4xl leading-tight">
                以概念、体验与视觉表达共同构成项目阅读路径
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3">
            {project.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 150}>
                <div className="group space-y-8">
                  <span className="mono text-[10px] text-white/10">PHASE 0{i + 1}</span>
                  <p className="text-lg leading-relaxed text-white/50 group-hover:text-white transition-colors">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN GALLERY - THE "SHEETS" SYSTEM */}
      <section className="mx-auto max-w-screen-2xl px-8 py-32">
        <Reveal className="mb-24">
          <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-4">Drawing Sheets</p>
          <h2 className="text-4xl font-serif text-white">图像序列展示</h2>
        </Reveal>

        <div className="columns-1 gap-12 sm:columns-2 lg:columns-3 space-y-12">
          {project.gallery.map((img, index) => (
            <Reveal key={img} delay={(index % 3) * 100}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-700"
              >
                <Image
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  width={1200}
                  height={1800}
                  className="h-auto w-full opacity-70 grayscale transition-all duration-1000 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 mono text-[9px] text-white/0 group-hover:text-white/40 transition-colors">
                  PL-0{index + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. VIDEO SECTION */}
      {project.videoSrc && (
        <section className="mx-auto max-w-7xl px-8 py-32">
          <Reveal>
            <div className="relative overflow-hidden bg-black border border-white/10 p-4">
              <video
                controls
                preload="metadata"
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                poster={project.heroImage}
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
              <div className="mt-4 mono text-[9px] text-white/20">VIDEO SEQUENCE ARCHIVE</div>
            </div>
          </Reveal>
        </section>
      )}

      {/* 6. NEXT PROJECT NAV */}
      <section className="border-t border-white/10 py-48 text-center bg-white/[0.01]">
        <div className="mx-auto max-w-4xl px-8">
          <Reveal>
            <div className="space-y-12">
              <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase">Archive Exit</p>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">阅览更多作品集，<br/>或查阅我的专业简历</h2>
              <div className="flex flex-wrap justify-center gap-8 pt-12">
                <Link href="/portfolio" className="btn-primary min-w-[240px]">
                  <LocalizedText zh="返回总作品集页" en="Back to portfolio" />
                </Link>
                <Link href="/resume" className="btn-secondary min-w-[240px]">
                  <LocalizedText zh="查看个人简历" en="View resume" />
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
