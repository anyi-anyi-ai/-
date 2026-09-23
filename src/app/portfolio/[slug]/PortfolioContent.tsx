"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LocalizedText } from "@/components/LanguageProvider";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { PortfolioItem } from "@/data/portfolio-data";

export default function PortfolioContent({ portfolio, relatedItems }: { portfolio: PortfolioItem, relatedItems: PortfolioItem[] }) {
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
        backLabel="返回作品集"
        backHref="/portfolio"
        links={[
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      {/* 1. PORTFOLIO HERO - ASYMMETRICAL EDITORIAL */}
      <section className="relative h-[90vh] w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={portfolio.heroImage}
            alt={portfolio.title}
            fill
            className="object-cover opacity-60 grayscale transition-all duration-[2s] hover:grayscale-0 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-8 py-20 lg:px-24">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] items-end">
            <Reveal>
              <div className="max-w-6xl space-y-8">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-white/20"></span>
                  <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
                    Archive / Case Study
                  </p>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.85] text-white tracking-tighter">
                  {portfolio.title}
                </h1>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="mono text-[10px] text-white/30 space-y-2 border-l border-white/10 pl-6 hidden lg:block">
                <p>REF NO. {portfolio.slug.toUpperCase()}</p>
                <p>SECTOR: {portfolio.type}</p>
                <p>SYSTEM: VER 2.0</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & HIGHLIGHTS - ARCHITECTURAL MARGIN NOTES */}
      <section className="mx-auto max-w-7xl px-8 py-32 lg:px-12">
        <div className="grid gap-24 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Side Info */}
          <Reveal>
            <div className="space-y-16 lg:sticky lg:top-32">
              <div className="space-y-8">
                <h3 className="mono text-[11px] text-white/20 tracking-widest border-b border-white/5 pb-4">Classification</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="mono text-[9px] text-white/40 mb-2">Project Type</p>
                    <p className="text-sm font-serif">{portfolio.type}</p>
                  </div>
                  <div>
                    <p className="mono text-[9px] text-white/40 mb-2">Current Status</p>
                    <p className="text-sm font-serif">{portfolio.status}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="mono text-[11px] text-white/20 tracking-widest border-b border-white/5 pb-4">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolio.keywords.map(k => (
                    <span key={k} className="mono text-[9px] text-white/30 border border-white/10 px-3 py-1 hover:border-white/40 transition-colors">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Main Statement */}
          <Reveal delay={200}>
            <div className="space-y-20">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-5xl font-serif text-white/90 leading-tight">
                  {portfolio.overview}
                </h2>
                <div className="h-px w-16 bg-white/40"></div>
                <p className="text-xl leading-relaxed text-white/50 font-light max-w-3xl">
                  {portfolio.designStatement}
                </p>
              </div>

              <div className="grid gap-12 sm:grid-cols-2">
                {portfolio.highlights.map((h, i) => (
                  <div key={h} className="group border-t border-white/10 pt-10">
                    <p className="mono text-[10px] text-white/20 mb-6">Point 0{i + 1}</p>
                    <p className="text-base leading-relaxed text-white/60 group-hover:text-white transition-colors">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROCESS & CAPABILITY - TECHNICAL LAYERS */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-32 lg:py-48">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-24 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-12">
                <div>
                  <span className="mono text-[10px] text-white/20">Layer 01</span>
                  <h3 className="mt-4 text-3xl font-serif text-white/90">设计演进过程</h3>
                </div>
                <div className="space-y-8">
                  {portfolio.processNotes.map((note, i) => (
                    <div key={note} className="flex gap-8 group">
                      <span className="mono text-[10px] text-white/10 mt-1">[{i + 1}]</span>
                      <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/70 transition-colors">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-[#0b0b0d] border border-white/10 p-12 lg:p-16">
                <span className="mono text-[10px] text-white/20">Synthesis</span>
                <h3 className="mt-4 text-3xl font-serif text-white/90 mb-10 leading-tight">能力与实践总结</h3>
                <p className="text-lg leading-relaxed text-white/50 font-light border-l border-white/20 pl-8">
                  {portfolio.capabilitySummary}
                </p>
                {portfolio.detailHref && (
                  <div className="mt-16">
                    <Link href={portfolio.detailHref} className="btn-primary w-full sm:w-auto text-center">
                      <LocalizedText zh="阅读详细图纸" en="View technical drawings" />
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. GALLERY - RAW IMAGE PLACEMENT */}
      <section className="mx-auto max-w-screen-2xl px-8 py-32">
        <Reveal className="mb-24 flex flex-col items-start gap-4">
          <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase">Visual Archive</p>
          <h2 className="text-4xl font-serif text-white">图像序列展示</h2>
        </Reveal>
        
        <div className="columns-1 gap-12 sm:columns-2 lg:columns-3 space-y-12">
          {portfolio.gallery.map((img, index) => (
            <Reveal key={img} delay={(index % 3) * 100}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-700"
              >
                <Image
                  src={img}
                  alt={`${portfolio.title} ${index + 1}`}
                  width={1200}
                  height={1800}
                  className="h-auto w-full opacity-70 grayscale transition-all duration-1000 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 mono text-[9px] text-white/0 group-hover:text-white/40 transition-colors">
                  IMG-0{index + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. RELATED - MINIMAL LIST */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal className="mb-20">
            <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-4">Navigation</p>
            <h2 className="text-4xl font-serif text-white">延伸阅读</h2>
          </Reveal>
          <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-3">
            {relatedItems.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group bg-[#080809] p-12 transition-colors hover:bg-white/5"
              >
                <p className="mono text-[9px] text-white/20 mb-8">Next Suggestion</p>
                <h3 className="text-2xl font-serif text-white/80 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="mt-6 text-xs leading-relaxed text-white/40 line-clamp-2">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SubpageFooter
        heading="Archive Closure"
        links={[
          { label: { zh: "项目总览", en: "Project overview" }, href: "/projects" },
          { label: { zh: "简历页面", en: "Resume" }, href: "/resume" },
          { label: { zh: "返回目录", en: "Back to catalog" }, href: "/portfolio", primary: true },
        ]}
      />

      <Lightbox
        images={portfolio.gallery}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectTitle={portfolio.title}
      />
    </main>
  );
}
