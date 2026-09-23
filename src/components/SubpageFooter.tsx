"use client";

import Link from "next/link";
import { LocalizedText, useLanguage, type LocalizedCopy } from "@/components/LanguageProvider";

type FooterLink = {
  label: string | LocalizedCopy;
  href: string;
  primary?: boolean;
};

const labelTranslations: Record<string, string> = {
  查看总作品集: "View portfolio",
  查看项目页: "View projects",
  查看简历页: "View resume",
  查看荣誉页: "View awards",
  返回首页: "Back home",
  返回目录: "Back to catalog",
  项目总览: "Project overview",
  简历页面: "Resume",
};

function FooterLabel({ label }: { label: string | LocalizedCopy }) {
  const { locale } = useLanguage();
  if (typeof label !== "string") return <LocalizedText {...label} />;
  return locale === "zh" ? label : labelTranslations[label] ?? label;
}

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
            <p className="section-kicker">继续浏览</p>
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
                  <FooterLabel label={link.label} />
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ui-button-secondary min-w-[180px]"
                >
                  <FooterLabel label={link.label} />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
