"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { LocalizedText } from "@/components/LanguageProvider";
import { categories, projects } from "@/data/site-data";

const categoryLabels: Record<(typeof categories)[number], { zh: string; en: string }> = {
  全部: { zh: "全部", en: "All" },
  室内设计: { zh: "室内设计", en: "Interior" },
  毕业设计: { zh: "毕业设计", en: "Graduation" },
  概念设计: { zh: "概念设计", en: "Concept" },
  家具设计: { zh: "家具设计", en: "Furniture" },
  AIGC实验: { zh: "AIGC实验", en: "AIGC Lab" },
  其他: { zh: "其他", en: "Other" },
};

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("全部");
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(
    () => {
      const normalizedQuery = query.trim().toLowerCase();
      return projects.filter((project) => {
        const matchesCategory = activeCategory === "全部" || project.category === activeCategory;
        const searchableText = [
          project.title,
          project.englishTitle,
          project.category,
          project.type,
          project.year,
          project.summary,
          project.concept,
          project.status,
          ...project.tags,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
      });
    },
    [activeCategory, query]
  );

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-md">
          <p className="mono text-[10px] text-white/30 mb-4">Filtering System</p>
          <p className="text-sm leading-relaxed text-white/40">
            用分类和关键词快速定位作品。输入项目名、类型、年份、关键词或主题，都可以直接过滤当前矩阵。
          </p>
        </div>
        <div className="relative group">
          <label htmlFor="project-search" className="sr-only">搜索作品</label>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Archive..."
            className="h-14 w-full border border-white/10 bg-white/[0.02] pl-12 pr-4 text-xs mono text-white outline-none transition-all focus:border-white/30 focus:bg-white/[0.04]"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-8">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`mono text-[10px] px-4 py-2 transition-all ${
                activeCategory === category 
                ? "bg-white text-black" 
                : "text-white/30 hover:text-white hover:bg-white/5"
              }`}
            >
              <LocalizedText {...categoryLabels[category]} />
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <p className="mono text-[10px] text-white/20">
            Results: <span className="text-white/60">{visibleProjects.length} / {projects.length}</span>
          </p>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mono text-[10px] text-white underline underline-offset-4 opacity-40 hover:opacity-100"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid gap-1 px-px bg-white/5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <div key={project.slug} className="bg-[#080809]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-white/10 p-20 text-center">
          <h2 className="font-serif text-3xl text-white/80">
            <LocalizedText zh="没有匹配到作品" en="No matching works" />
          </h2>
          <p className="mt-6 mono text-[10px] text-white/30">
            Try another keyword or return to All.
          </p>
        </div>
      )}
    </section>
  );
}
