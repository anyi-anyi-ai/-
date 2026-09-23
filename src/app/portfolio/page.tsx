import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio-data";
import { LocalizedText } from "@/components/LanguageProvider";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

export default function PortfolioIndexPage() {
  return (
    <main id="main-content" className="page-base min-h-screen text-white selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <SubpageNav
        links={[
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      <section className="relative mx-auto max-w-7xl px-8 py-32 lg:py-48">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-end">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-white/20"></span>
                <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">Collections</p>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif leading-[0.85] text-white tracking-tighter">
                总作品集
              </h1>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-white/50">
                这里汇集了 {portfolioItems.length} 个作品方向，涵盖文化叙事、商业体验、概念场景与家具设计等不同类型。
              </p>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="bg-[#080809] p-8">
                <span className="mono text-[10px] text-white/20 block mb-4">Total Files</span>
                <span className="text-4xl font-serif">{portfolioItems.length}</span>
              </div>
              <div className="bg-[#080809] p-8">
                <span className="mono text-[10px] text-white/20 block mb-4">System</span>
                <span className="text-4xl font-serif">V2.1</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-8 py-32">
          <Reveal className="mb-24">
            <p className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-4">Archive Index</p>
            <h2 className="text-4xl font-serif text-white">作品目录</h2>
          </Reveal>
          
          <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group relative block bg-[#080809] p-12 transition-colors hover:bg-white/5"
                >
                  <div className="flex flex-col gap-10">
                    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 border border-white/5">
                      <Image
                        src={item.heroImage}
                        alt={item.title}
                        fill
                        className="object-cover opacity-60 grayscale transition duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="mono text-[9px] text-white/20 mb-2">{item.type}</p>
                          <h3 className="text-3xl font-serif text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                        </div>
                        <span className="mono text-[10px] text-white/40 border border-white/10 px-3 py-1">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/40 line-clamp-2 font-light">{item.summary}</p>
                      
                      <div className="pt-6 flex items-center gap-4">
                        <span className="mono text-[10px] text-white/30 group-hover:text-white transition-colors">EXPLORE ARCHIVE</span>
                        <div className="h-px flex-1 bg-white/5 group-hover:bg-white/20 transition-colors"></div>
                        <span className="mono text-[12px] text-white/40 group-hover:translate-x-1 transition-transform">→</span>
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
        heading="Archive Closure"
        links={[
          { label: { zh: "查看简历页", en: "View resume" }, href: "/resume" },
          { label: { zh: "查看荣誉页", en: "View awards" }, href: "/awards" },
          { label: { zh: "返回首页", en: "Back home" }, href: "/", primary: true },
        ]}
      />
    </main>
  );
}
