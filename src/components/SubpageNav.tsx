import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

export default function SubpageNav({
  backLabel = "← 返回首页",
  backHref = "/",
  links,
}: {
  backLabel?: string;
  backHref?: string;
  links: NavLink[];
}) {
  return (
    <section className="border-b border-[var(--color-line)] bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <Link
          href={backHref}
          className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
        >
          {backLabel}
        </Link>
        <nav className="flex flex-wrap gap-4 text-xs tracking-[0.18em] text-[var(--color-muted-ink)] uppercase sm:text-sm">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-accent-deep)]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-accent-deep)]"
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
