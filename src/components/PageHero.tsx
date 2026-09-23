type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  stats?: string[];
};

export default function PageHero({ kicker, title, description, stats = [] }: PageHeroProps) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-48">
      <div className="flex items-center gap-4 mb-8">
        <span className="h-px w-8 bg-white/20"></span>
        <p className="mono text-[10px] text-white/40 tracking-[0.2em]">{kicker}</p>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[0.9] text-balance">
        {title}
      </h1>
      
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/50">
          {description}
        </p>
        
        {stats.length > 0 && (
          <div className="flex flex-col gap-2 items-start lg:items-end">
            {stats.map((stat) => (
              <span key={stat} className="mono text-[9px] text-white/30 border-b border-white/5 pb-1">
                {stat}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-20 h-px w-full bg-white/10"></div>
    </section>
  );
}
