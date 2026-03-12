"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  projectTitle,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-ink)]/98 backdrop-blur-xl transition-opacity duration-300">
      {/* Decorative Architectural Grid (Subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 h-[1px] w-full bg-white/20" />
        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/20" />
        <div className="absolute top-10 left-10 text-[10px] tracking-[0.2em] text-white">X: 0.000</div>
        <div className="absolute right-10 bottom-10 text-[10px] tracking-[0.2em] text-white">Y: 1.000</div>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-[210] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 active:scale-95"
        aria-label="关闭预览"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-8 z-[210] flex h-14 w-14 items-center justify-center rounded-full border border-white/5 text-white/40 transition hover:border-white/20 hover:text-white active:scale-95"
      >
        <span className="sr-only">上一张</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 z-[210] flex h-14 w-14 items-center justify-center rounded-full border border-white/5 text-white/40 transition hover:border-white/20 hover:text-white active:scale-95"
      >
        <span className="sr-only">下一张</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Main Image Container */}
      <div className="relative h-[85vh] w-[90vw] animate-reveal">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} 预览图 ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
          sizes="90vw"
        />
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-center text-white/60">
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase">
          {projectTitle} — SHEET {String(currentIndex + 1).padStart(2, "0")}
        </p>
        <div className="h-[1px] w-12 bg-white/20" />
        <p className="text-[10px] tracking-[0.1em]">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
