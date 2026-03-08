import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems, portfolioMap } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="ui-card overflow-hidden rounded-[2.2rem] bg-[var(--color-muted)] p-4">
            <div className="project-hero-frame relative rounded-[1.7rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(236,229,216,0.78))]">
              <Image src={project.heroImage} alt={`${project.title}主图`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-contain p-3" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="section-kicker">项目详情</p>
              <h1 className="font-serif-display text-4xl leading-tight font-semibold sm:text-5xl">{project.title}</h1>
              <p className="text-lg text-[var(--color-accent-deep)]">{project.subtitle}</p>
            </div>
            <p className="text-base leading-8 text-[var(--color-copy)]">{project.overview}</p>
            {project.portfolioHref ? (
              <Link href={project.portfolioHref} className="ui-button-light w-full sm:w-fit">
                返回所属作品集
              </Link>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-muted)] px-4 py-2 text-xs tracking-[0.16em] text-[var(--color-muted-ink)] uppercase"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.76fr_1.24fr] lg:px-16">
          <div className="space-y-4">
            <p className="section-kicker">设计亮点</p>
            <h2 className="section-title">以概念、体验与视觉表达共同构成项目阅读路径</h2>
          </div>
          <div className="grid gap-4">
            {project.highlights.map((highlight) => (
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
        <div className="ui-card rounded-[2.2rem] bg-white p-8">
          <p className="section-kicker">设计说明</p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">项目的核心设计理念与出发点</h2>
          <div className="editorial-divider mt-6 mb-6" />
          <p className="text-sm leading-8 text-[var(--color-copy)]">{project.designStatement}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="ui-card rounded-[2.2rem] bg-white p-8">
            <p className="section-kicker">过程说明</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">每个项目都从概念判断、空间推演到最终表达，逐步形成完整方案</h2>
            <div className="mt-6 grid gap-3">
              {project.processNotes.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(236,229,216,0.45))] px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="ui-card rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(236,229,216,0.32),rgba(255,255,255,0.88))] p-8">
            <p className="section-kicker">项目总结</p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">这个项目能够呈现的设计特点</h2>
            <div className="editorial-divider mt-6 mb-6" />
            <p className="text-sm leading-8 text-[var(--color-copy)]">{project.capabilitySummary}</p>
          </div>
        </div>
      </section>

      {project.videoSrc ? (
        <section className="border-y border-[var(--color-line)] bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
            <div className="mb-10 space-y-4">
              <p className="section-kicker">项目视频</p>
              <h2 className="section-title">通过动态影像进一步呈现项目的空间氛围与场景体验</h2>
            </div>
            <div className="ui-card overflow-hidden rounded-[2rem] bg-[var(--color-muted)] p-3">
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full rounded-[1.6rem]"
                poster={project.heroImage}
              >
                <source src={project.videoSrc} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/24">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16">
          <div className="mb-10 space-y-4">
            <p className="section-kicker">图像展示</p>
            <h2 className="section-title">精选画面用于承接首页与作品集入口，建立更完整的项目印象</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery.map((image, index) => (
              <figure
                key={image}
                className="ui-card overflow-hidden rounded-[2rem] bg-[var(--color-muted)] p-3"
              >
                <div className="project-gallery-frame relative">
                  <Image
                    src={image}
                    alt={`${project.title}图像 ${index + 1}`}
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

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="space-y-3">
            <p className="section-kicker">继续浏览</p>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-copy)]">
              当前项目详情页已经覆盖 8 个作品方向，并将继续在过程图、展板资料与项目总结说明层面逐步深化内容。
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
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-copy)] uppercase transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
            >
              查看项目总览
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-charcoal)] uppercase transition hover:brightness-105"
            >
              查看简历页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
