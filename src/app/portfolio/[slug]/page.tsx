"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems, portfolioMap } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const portfolio = portfolioMap[slug];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!portfolio) {
    notFound();
  }

  const relatedItems = portfolioItems.filter((item) => item.slug !== portfolio.slug).slice(0, 3);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)]/30">
      <SubpageNav
        backLabel="← Portfolios"
        backHref="/portfolio"
        links={[
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      {/* 1. PORTFOLIO HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[var(--color-muted)]">
        <div className="absolute inset-0 z-0">
          <Image
            src={portfolio.heroImage}
            alt={`${portfolio.title} 主图`}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <div className="max-w-4xl space-y-6">
                <p className="section-kicker">Portfolio Entry</p>
                <h1 className="font-serif-display text-6xl font-bold leading-tight text-white sm:text-7xl lg:text-8xl">
                  {portfolio.title}
                </h1>
                <p className="text-xl tracking-widest text-[var(--color-accent)] uppercase">
                  {portfolio.type}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & HIGHLIGHTS */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <Reveal>
            <div className="space-y-12">
              <div className="space-y-6 text-2xl font-medium leading-relaxed text-white/90">
                {portfolio.overview}
              </div>
              <div className="h-px w-full bg-white/5" />
              <p className="text-lg leading-relaxed text-white/50 italic">
                "{portfolio.designStatement}"
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-2xl p-8">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">Status</p>
                  <p className="text-lg font-serif-display text-white">{portfolio.status}</p>
                </div>
                <div className="glass-card rounded-2xl p-8">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.keywords.map(k => (
                      <span key={k} className="text-xs font-medium text-white/40 italic">#{k}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-panel space-y-10 p-10 lg:p-12">
              <h3 className="text-xs font-bold tracking-[0.4em] text-white uppercase italic">Core Highlights</h3>
              <div className="space-y-6">
                {portfolio.highlights.map((h, i) => (
                  <div key={h} className="group flex gap-6">
                    <span className="font-serif-display text-2xl text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors">0{i+1}</span>
                    <p className="text-sm leading-relaxed text-white/60">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROCESS & CAPABILITY */}
      <section className="relative border-y border-white/5 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="glass-panel p-10 lg:p-16 h-full">
                <p className="section-kicker mb-8">Process Notes</p>
                <div className="space-y-6">
                  {portfolio.processNotes.map((note, index) => (
                    <div key={note} className="relative pl-10 border-l border-white/5">
                      <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(212,163,115,0.5)]" />
                      <p className="text-sm leading-relaxed text-white/60">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="glass-panel p-10 lg:p-16 h-full border-[var(--color-accent)]/20">
                <p className="section-kicker mb-8">Value Proposition</p>
                <h3 className="font-serif-display text-4xl font-semibold text-white leading-tight mb-8">能力总结与判断价值</h3>
                <p className="text-lg leading-relaxed text-white/70 italic border-l-4 border-[var(--color-accent)] pl-8">
                  {portfolio.capabilitySummary}
                </p>
                {portfolio.detailHref && (
                  <div className="mt-12">
                    <Link href={portfolio.detailHref} className="ui-button-primary w-full sm:w-fit">查看对应项目详情</Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="mx-auto max-w-[1800px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <Reveal className="mb-20 text-center">
          <p className="section-kicker mb-4">Gallery Sheets</p>
          <h2 className="section-title mx-auto">作品图像展示</h2>
        </Reveal>
        
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
          {portfolio.gallery.map((img, index) => (
            <Reveal key={img} delay={(index % 3) * 100}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-white/[0.03] transition-all duration-500 hover:border-white/20"
              >
                <Image
                  src={img}
                  alt={`${portfolio.title} 详情图 ${index + 1}`}
                  width={800}
                  height={1200}
                  className="h-auto w-full opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 right-4 text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase transition group-hover:text-[var(--color-accent)]">
                  SH-{String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. RELATED */}
      <section className="border-t border-white/5 bg-white/[0.01] py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-20">
            <p className="section-kicker mb-4">Connections</p>
            <h2 className="section-title text-4xl">继续延伸阅览</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {relatedItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="glass-card block rounded-2xl p-8 h-full"
                >
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-6">Related Portfolio</p>
                  <h3 className="font-serif-display text-2xl font-semibold text-white leading-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/40 line-clamp-2">{item.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageFooter
        heading="看完当前作品集，可以继续查看项目详情、简历或其他作品集"
        links={[
          { label: "项目总览", href: "/projects" },
          { label: "简历页面", href: "/resume" },
          { label: "返回目录", href: "/portfolio", primary: true },
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
