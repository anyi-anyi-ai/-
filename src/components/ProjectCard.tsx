"use client";

import Image from "next/image";
import Link from "next/link";
import { LocalizedText } from "@/components/LanguageProvider";
import type { SiteProject } from "@/data/site-data";
import { useRef, MouseEvent } from "react";

export default function ProjectCard({ project }: { project: SiteProject }) {
  return (
    <Link 
      href={project.route} 
      className="group relative block overflow-hidden border border-white/5 bg-white/[0.02] p-5 transition-all duration-700 hover:border-white/20"
    >
      {/* 结构化角落装饰 */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20 transition-all group-hover:border-white/50" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-white/20 transition-all group-hover:border-white/50" />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/20 transition-all group-hover:border-white/50" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/20 transition-all group-hover:border-white/50" />

      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image 
          src={project.cover} 
          alt={project.title} 
          fill 
          className="object-cover opacity-80 grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        
        {/* 元数据标签：改为极简风格 */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="mono bg-black/40 px-2 py-1 text-[9px] text-white/60 backdrop-blur-sm border border-white/10">
            {project.type}
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-xl font-serif text-white/90 group-hover:text-white transition-colors">{project.title}</h2>
            <p className="mono text-[10px] text-white/20">{project.englishTitle}</p>
          </div>
          <span className="mono text-[10px] text-white/30 border-b border-white/10 pb-0.5">{project.year}</span>
        </div>
        
        <p className="line-clamp-2 text-xs leading-relaxed text-white/40 font-light">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="mono text-[9px] text-white/25 border border-white/5 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-6 flex items-center justify-between">
          <span className="mono text-[9px] text-white/20 group-hover:text-white/60 transition-colors">
            Archive Ref. 0{Math.floor(Math.random() * 9) + 1}
          </span>
          <div className="h-px flex-1 bg-white/5 mx-4"></div>
          <span className="mono text-[10px] text-white/40 group-hover:translate-x-1 transition-transform">
            OPEN →
          </span>
        </div>
      </div>
    </Link>
  );
}
