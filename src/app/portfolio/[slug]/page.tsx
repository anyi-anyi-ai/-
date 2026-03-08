import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems, portfolioMap } from "@/data/portfolio-data";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolio = portfolioMap[slug];

  if (!portfolio) {
    notFound();
  }

  const relatedItems = portfolioItems.filter((item) => item.slug !== portfolio.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-line)] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <Link href="/portfolio" className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75">
            ← 返回总作品集页
          </Link>
          <nav className="flex flex-wrap gap-4 text-xs tracking-[0.18em] text-[var(--color-muted-ink)] uppercase sm:text-sm">
            <Link href="/projects" className="transition hover:text-[var(--color-accent-deep)]">
              项目总览
            </Link>
            <Link href="/resume" className="transition hover:text-[var(--color-accent-deep)]">
              简历页
            </Link>
            <Link href="/awards" className="transition hover:text-[var(--color-accent-deep)]">
              荣誉页
            </Link>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)] p-4 shadow-[0_24px_80px_rgba(26,24,21,0.12)]">
            <div className="project-hero-frame relative">
              <Image
                src={portfolio.heroImage}
                alt={`${portfolio.title}主图`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-2"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="section-kicker">作品集分页</p>
              <h1 className="font-serif-display text-4xl leading-tight font-semibold sm:text-5xl">{portfolio.title}</h1>
              <p className="text-lg text-[var(--color-accent-deep)]">{portfolio.type}</p>
            </div>
            <p className="text-base leading-8 text-[var(--color-copy)]">{portfolio.overview}</p>
            <div className="flex flex-wrap gap-2">
              {portfolio.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-muted)] px-4 py-2 text-xs tracking-[0.16em] text-[var(--color-muted-ink)] uppercase"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5 text-sm leading-7 text-[var(--color-copy)] shadow-[0_14px_36px_rgba(26,24,21,0.05)]">
              <span className="block text-[11px] tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">当前状态</span>
              <span className="mt-3 block">{portfolio.status}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/65">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.76fr_1.24fr] lg:px-16">
          <div className="space-y-4">
            <p className="section-kicker">重点说明</p>
            <h2 className="section-title">这一页负责把单个作品集从“入口卡片”展开成可以独立阅读的内容页</h2>
          </div>
          <div className="grid gap-4">
            {portfolio.highlights.map((highlight) => (
              <article
                key={highlight}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5 text-sm leading-7 text-[var(--color-copy)] shadow-[0_16px_32px_rgba(26,24,21,0.05)]"
              >
                {highlight}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <p className="section-kicker">过程说明</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">先说明这个作品如何被建立，再展示它如何被阅读</h2>
            <div className="mt-6 grid gap-3">
              {portfolio.processNotes.map((item, index) => (
                <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-[var(--color-muted)]/24 px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/24 p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)]">
            <p className="section-kicker">能力总结</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">这一作品集在网站中的判断价值</h2>
            <p className="mt-6 text-sm leading-8 text-[var(--color-copy)]">{portfolio.capabilitySummary}</p>
            {portfolio.detailHref ? (
              <Link
                href={portfolio.detailHref}
                className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
              >
                查看对应项目详情页
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <p className="mt-6 text-sm leading-8 text-[var(--color-muted-ink)]">
                当前先以作品集页承接内容，后续将继续补足更细的项目详情结构。
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/28">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">图像展示</p>
              <h2 className="section-title">优先承接已有图像内容，后续再逐步补充过程图、展板图和说明材料</h2>
            </div>
            {portfolio.detailHref ? (
              <Link href={portfolio.detailHref} className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-80">
                查看项目详情页
              </Link>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.gallery.map((image, index) => (
              <figure
                key={image}
                className="overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white p-3 shadow-[0_18px_44px_rgba(26,24,21,0.08)]"
              >
                <div className="project-gallery-frame relative">
                  <Image
                    src={image}
                    alt={`${portfolio.title}图像 ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <p className="section-kicker">继续延伸</p>
            <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">看完这个作品集后，可以继续查看相关项目详情、简历页或其他作品集</h2>
            <p className="text-sm leading-8 text-[var(--color-copy)]">
              当前页面的任务是承接单个作品集本身。后续会继续增加与具体项目详情页、荣誉页和全站导航之间的更强联动关系。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedItems.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-muted)]/24 px-4 py-5 transition hover:border-[var(--color-accent-deep)]"
              >
                <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">其他作品集</p>
                <h3 className="mt-3 font-serif-display text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="space-y-3">
            <p className="section-kicker">页面跳转</p>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-copy)]">
              当前作品集页已经具备独立入口、图像展示区、过程说明和能力总结结构，后续将继续结合各作品的真实资料逐步深化内容。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
            >
              返回总作品集页
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
            >
              查看简历页
            </Link>
            <Link
              href="/awards"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
            >
              查看荣誉页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
