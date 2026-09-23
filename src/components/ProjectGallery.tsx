"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
};

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function openLightbox(index: number) {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => openLightbox(index)}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left outline-none transition duration-500 hover:-translate-y-1 hover:border-sky-200/35 focus-visible:border-sky-200/60 focus-visible:ring-4 focus-visible:ring-sky-300/15 ${index === 0 ? "aspect-[16/9] md:col-span-2 md:aspect-[16/8]" : "aspect-[4/3]"}`}
            aria-label={`查看 ${projectTitle} 图像 ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${projectTitle} 图像 ${index + 1}`}
              fill
              sizes={index === 0 ? "(max-width: 768px) 100vw, 1180px" : "(max-width: 768px) 100vw, 50vw"}
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/18 bg-slate-950/54 px-3 py-1 text-xs font-medium text-white/82 opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition group-hover:opacity-100">
              查看大图 {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectTitle={projectTitle}
      />
    </>
  );
}
