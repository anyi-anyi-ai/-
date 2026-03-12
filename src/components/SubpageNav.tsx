import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

export default function SubpageNav({
  backLabel = "← Back to Home",
  backHref = "/",
  links,
}: {
  backLabel?: string;
  backHref?: string;
  links: NavLink[];
}) {
  return (
    <section className="sticky top-0 z-50 border-b border-white/5 bg-[var(--color-paper)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <Link
          href={backHref}
          className="group flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-white/40 uppercase transition hover:text-[var(--color-accent)]"
        >
          <span className="h-px w-6 bg-white/10 transition-all group-hover:w-10 group-hover:bg-[var(--color-accent)]" />
          {backLabel}
        </Link>
        <nav className="flex flex-wrap gap-8 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase sm:text-xs">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </section>
  );
}
