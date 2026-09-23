"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursorType = () => {
      const hoveredElement = document.querySelector(":hover");
      if (!hoveredElement) return;

      const isClickable =
        window.getComputedStyle(hoveredElement).cursor === "pointer" ||
        hoveredElement.tagName.toLowerCase() === "a" ||
        hoveredElement.tagName.toLowerCase() === "button";

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [pathname]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 mix-blend-difference transition-all duration-300 ease-out hidden md:block ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-[2.5] bg-white/10" : "scale-100"}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`,
        }}
      />
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[10000] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-opacity duration-300 hidden md:block ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "opacity-0" : "opacity-100"}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}