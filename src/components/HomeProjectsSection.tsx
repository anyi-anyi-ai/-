"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { LocalizedText } from "@/components/LanguageProvider";
import { categories, projects, type ProjectCategory } from "@/data/site-data";

const categoryLabels: Record<(typeof categories)[number], { zh: string; en: string }> = {
  全部: { zh: "全部", en: "All" },
  室内设计: { zh: "室内设计", en: "Interior" },
  毕业设计: { zh: "毕业设计", en: "Graduation" },
  概念设计: { zh: "概念空间", en: "Concept" },
  家具设计: { zh: "家具设计", en: "Furniture" },
  AIGC实验: { zh: "AIGC实验", en: "AIGC Lab" },
  其他: { zh: "其他", en: "Other" },
};

export default function HomeProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("全部");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "全部") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 py-32">
      {/* 头部标题区 */}
      <div className="mb-16 flex flex-col justify-between items-start gap-8 md:flex-row md:items-end border-b border-white/10 pb-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 text-[10px] mono tracking-[0.4em] text-white/40 uppercase mb-6">
            <span className="h-px w-8 bg-white/20"></span>
            Works Portfolio Matrix
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight leading-tight">
            作品不是缩略图堆叠，<br className="hidden sm:block" />而是一条阅读路径。
          </h2>
          <p className="mt-6 text-sm text-white/40 max-w-xl font-light leading-relaxed">
            从文化母题转译、情绪动线组织到施工节点深化。点击下方分类标签即可即时筛选空间方案。
          </p>
        </div>
        <Link 
          className="mono text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors pb-2 border-b border-white/10 hover:border-white" 
          href="/projects"
        >
          <LocalizedText zh="进入全量作品矩阵 →" en="VIEW FULL MATRIX →" />
        </Link>
      </div>

      {/* 分类切换按钮条 (Category Filter Pills) */}
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`mono text-[11px] px-5 py-2.5 transition-all duration-300 rounded-full border ${
                  isActive
                    ? "bg-white text-black border-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : "border-white/10 bg-white/[0.02] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <LocalizedText {...categoryLabels[category]} />
              </button>
            );
          })}
        </div>

        <div className="mono text-[10px] text-white/30 whitespace-nowrap self-end sm:self-center">
          Showing: <span className="text-white/80 font-medium">{visibleProjects.length}</span> / {projects.length} Works
        </div>
      </div>

      {/* 作品卡片网格 */}
      {visibleProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-white/10 py-24 text-center">
          <p className="mono text-xs text-white/30">当前分类暂无公开收录作品，正在整理进阶资料中</p>
        </div>
      )}
    </section>
  );
}
