import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export default function SubpageFooter({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <section className="border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/22 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <p className="section-kicker">继续浏览</p>
            <h2 className="font-serif-display text-3xl font-semibold text-[var(--color-ink)]">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {links.map((link) =>
              link.primary ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
