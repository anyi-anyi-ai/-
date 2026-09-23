type SiteBackgroundProps = {
  variant?: "light" | "dark";
};

const stars = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23 + 11) % 100}%`,
  delay: `${(index % 9) * 0.45}s`,
  size: `${1 + (index % 3)}px`,
}));

export default function SiteBackground({ variant = "light" }: SiteBackgroundProps) {
  return (
    <div className={`site-bg site-bg-${variant}`} aria-hidden="true">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />
      <div className="star-layer">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }}
          />
        ))}
      </div>
    </div>
  );
}
