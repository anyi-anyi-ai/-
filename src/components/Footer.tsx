type FooterProps = {
  theme?: "light" | "dark";
};

export default function Footer({ theme = "light" }: FooterProps) {
  const borderClass = theme === "dark" ? "border-white/10" : "border-black/5";
  const textClass = theme === "dark" ? "text-white/30" : "text-slate-400";

  return (
    <footer className={`relative z-10 border-t ${borderClass} px-8 py-24 text-center ${textClass}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          <div className={`flex h-12 w-12 items-center justify-center border ${theme === "dark" ? "border-white/20 text-white" : "border-black/10 text-slate-900"}`}>
            A
          </div>
          <div className="text-[0.65rem] font-bold uppercase tracking-[0.3em]">
            Anno Space Archive
          </div>
          <div className="h-px w-12 bg-white/10"></div>
          <div className="flex flex-col gap-2">
            <p className="text-[0.65rem] tracking-[0.05em] uppercase font-medium">© 2026 Designed for Spatial Narrative</p>
            <p className="text-[0.6rem] opacity-60 uppercase tracking-widest">Environmental Design · Interior · AIGC Workflow</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
