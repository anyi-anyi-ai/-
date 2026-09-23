"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LocalizedText, useLanguage } from "@/components/LanguageProvider";
import type { MusicTrack } from "@/data/music-data";

type FloatingMusicPlayerProps = {
  playlist: MusicTrack[];
  theme?: "light" | "dark";
  storageKey?: string;
};

export default function FloatingMusicPlayer({
  playlist,
  theme = "light",
  storageKey = "default",
}: FloatingMusicPlayerProps) {
  const { locale } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stateKey = `anno-music-player:${storageKey}`;
  const [savedState] = useState(() => {
    if (typeof window === "undefined") {
      return {
        currentIndex: 0,
        isPlaying: false,
        hasStarted: false,
        isExpanded: false,
      };
    }

    const saved = window.localStorage.getItem(stateKey);
    if (!saved) {
      return {
        currentIndex: 0,
        isPlaying: false,
        hasStarted: false,
        isExpanded: false,
      };
    }

    try {
      const parsed = JSON.parse(saved) as {
        currentIndex?: number;
        isPlaying?: boolean;
        hasStarted?: boolean;
        isExpanded?: boolean;
      };

      return {
        currentIndex:
          typeof parsed.currentIndex === "number" && parsed.currentIndex >= 0 && parsed.currentIndex < playlist.length
            ? parsed.currentIndex
            : 0,
        isPlaying: typeof parsed.isPlaying === "boolean" ? parsed.isPlaying : false,
        hasStarted: typeof parsed.hasStarted === "boolean" ? parsed.hasStarted : false,
        isExpanded: typeof parsed.isExpanded === "boolean" ? parsed.isExpanded : false,
      };
    } catch {
      return {
        currentIndex: 0,
        isPlaying: false,
        hasStarted: false,
        isExpanded: false,
      };
    }
  });
  const [currentIndex, setCurrentIndex] = useState(savedState.currentIndex);
  const [isPlaying, setIsPlaying] = useState(savedState.isPlaying);
  const [hasStarted, setHasStarted] = useState(savedState.hasStarted);
  const [isExpanded, setIsExpanded] = useState(savedState.isExpanded);

  const currentTrack = useMemo(() => playlist[currentIndex], [playlist, currentIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      stateKey,
      JSON.stringify({
        currentIndex,
        isPlaying,
        hasStarted,
        isExpanded,
      })
    );
  }, [currentIndex, hasStarted, isExpanded, isPlaying, stateKey]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.05; // 默认音量 1/20 (5%)
    audio.src = currentTrack.src;

    if (isPlaying) {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrack, isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      if (!hasStarted) {
        audio.src = currentTrack.src;
        setHasStarted(true);
      }
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setHasStarted(true);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setHasStarted(true);
    setIsPlaying(true);
  };

  const surfaceClass =
    theme === "dark"
      ? "border-white/12 bg-slate-950/68 text-white shadow-[0_28px_100px_rgba(2,6,23,0.45)]"
      : "border-white/70 bg-white/78 text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.14)]";

  const subTextClass = theme === "dark" ? "text-white/60" : "text-slate-500";
  const pillClass =
    theme === "dark"
      ? "border-white/12 bg-white/6 text-white/70 hover:bg-white/10"
      : "border-slate-200 bg-white/70 text-slate-700 hover:bg-white";
  const mainButtonClass =
    theme === "dark"
      ? "bg-white text-slate-950 hover:bg-sky-100"
      : "bg-slate-950 text-white hover:bg-sky-700";

  return (
    <>
      <audio ref={audioRef} preload="none" />
      <div className="fixed bottom-5 right-5 z-[70] flex max-w-[calc(100vw-2rem)] justify-end">
        <div
          className={`rounded-[1.7rem] border backdrop-blur-2xl transition-all duration-300 ${surfaceClass} ${
            isExpanded ? "w-[22rem] p-4" : "w-auto p-3"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-semibold transition ${mainButtonClass}`}
              aria-label={locale === "zh" ? (isPlaying ? "暂停音乐" : "播放音乐") : (isPlaying ? "Pause music" : "Play music")}
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            {isExpanded ? (
              <div className="min-w-0 flex-1">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sky-500">
                  Music
                </p>
                <p className="mt-1 truncate text-sm font-semibold">{currentTrack.title}</p>
                <p className={`truncate text-xs ${subTextClass}`}>{currentTrack.artist}</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className={`rounded-full border px-3 py-2 text-xs transition ${pillClass}`}
              >
                <LocalizedText zh="音乐" en="Music" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className={`rounded-full border px-3 py-2 text-xs transition ${pillClass}`}
              aria-label={locale === "zh" ? (isExpanded ? "收起音乐面板" : "展开音乐面板") : (isExpanded ? "Collapse music panel" : "Expand music panel")}
            >
              {isExpanded ? <LocalizedText zh="收起" en="Collapse" /> : <LocalizedText zh="展开" en="Expand" />}
            </button>
          </div>

          {isExpanded ? (
            <>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={playPrev}
                  className={`rounded-full border px-3 py-2 text-xs transition ${pillClass}`}
                >
                  <LocalizedText zh="上一首" en="Previous" />
                </button>
                <button
                  type="button"
                  onClick={playNext}
                  className={`rounded-full border px-3 py-2 text-xs transition ${pillClass}`}
                >
                  <LocalizedText zh="下一首" en="Next" />
                </button>
                <span className={`ml-auto text-[11px] ${subTextClass}`}>
                  {currentIndex + 1} / {playlist.length}
                </span>
              </div>
              <p className={`mt-3 text-[11px] leading-6 ${subTextClass}`}>
                <LocalizedText zh="浏览器通常需要你先点击一次播放按钮，音乐才会开始播放。" en="Your browser may require one click before music can start." />
              </p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
