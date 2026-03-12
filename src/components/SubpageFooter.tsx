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
    <section className="border-t border-white/5 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16">
        <div className="glass-panel grid gap-12 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div className="space-y-6">
            <p className="section-kicker">Keep Exploring</p>
            <h2 className="font-serif-display text-4xl font-semibold text-white leading-tight lg:text-5xl">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            {links.map((link) =>
              link.primary ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ui-button-primary min-w-[180px]"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ui-button-secondary min-w-[180px]"
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
