"use client";

import { useState } from "react";
import ProjectGallery from "@/components/ProjectGallery";

type GallerySection = {
  title: string;
  description?: string;
  images: string[];
};

type CategorizedProjectGalleryProps = {
  sections: GallerySection[];
  projectTitle: string;
};

export default function CategorizedProjectGallery({ sections, projectTitle }: CategorizedProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  if (!activeSection) return null;

  return (
    <div className="space-y-8">
      <div className="sticky top-24 z-30 -mx-2 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/72 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <div className="flex min-w-max gap-2">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.14)]"
                    : "text-white/58 hover:bg-white/8 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {section.title}
                <span className={`ml-2 text-xs ${isActive ? "text-slate-500" : "text-white/34"}`}>
                  {section.images.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/55">Media Section</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">{activeSection.title}</h3>
          </div>
          {activeSection.description ? (
            <p className="max-w-xl text-sm leading-7 text-white/45">{activeSection.description}</p>
          ) : null}
        </div>
        <ProjectGallery images={activeSection.images} projectTitle={`${projectTitle} - ${activeSection.title}`} />
      </section>
    </div>
  );
}
