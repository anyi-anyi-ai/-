"use client";

import { useState, useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 初始化音频
  useEffect(() => {
    const audio = new Audio("/audio/healing/takeshi-senoo-summer-festival-dream-fireworks.mp3");
    audio.loop = true;
    audio.volume = 0.1; // 默认音量10%，作为背景音更柔和
    audio.preload = "auto";

    // 监听加载状态
    audio.addEventListener("canplaythrough", () => {
      setIsLoading(false);
    });

    // 监听错误
    audio.addEventListener("error", (e) => {
      console.error("音频加载失败:", e);
      setError("音频加载失败");
      setIsLoading(false);
    });

    // 监听播放状态
    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    audioRef.current = audio;

    // 清理
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // 尝试自动播放（在用户首次交互后）
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying && !error) {
        attemptPlay();
        // 移除监听器，只触发一次
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
      }
    };

    // 添加多种交互事件监听
    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying, error]);

  // 尝试播放音频
  const attemptPlay = async () => {
    if (!audioRef.current || error) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setError(null);
    } catch (err) {
      console.warn("自动播放被阻止或失败:", err);
      // 不设置错误状态，让用户可以手动点击播放
    }
  };

  // 手动切换播放/暂停
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
        setError(null);
      } catch (err) {
        console.error("播放失败:", err);
        setError("播放失败，请重试");
      }
    }
  };

  // 调整音量
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const volume = parseFloat(e.target.value);
      audioRef.current.volume = volume;
    }
  };

  // 如果加载失败或有错误，不显示控件
  if (error) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[150] flex items-center gap-2 sm:bottom-6 sm:right-6">
      {/* 音乐控制按钮 */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 touch-target ${
          isLoading
            ? "border-white/10 bg-white/5 cursor-wait"
            : isPlaying
            ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/20"
            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
        }`}
        aria-label={isPlaying ? "暂停背景音乐" : "播放背景音乐"}
        title={isPlaying ? "暂停音乐" : "播放音乐"}
      >
        {/* 加载动画 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-accent)] border-t-transparent" />
          </div>
        )}

        {/* 播放图标 */}
        {!isLoading && !isPlaying && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white/60 transition-colors group-hover:text-white"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}

        {/* 暂停图标 */}
        {!isLoading && isPlaying && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[var(--color-accent)] animate-pulse"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>

      {/* 音量控制（仅在播放时显示） */}
      {isPlaying && (
        <div className="hidden items-center gap-2 sm:flex">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white/40"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            defaultValue="0.1"
            onChange={handleVolumeChange}
            className="w-20 accent-[var(--color-accent)] cursor-pointer"
            aria-label="音量控制"
          />
        </div>
      )}
    </div>
  );
}
