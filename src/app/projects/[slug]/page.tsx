import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategorizedProjectGallery from "@/components/CategorizedProjectGallery";
import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import { LocalizedText } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import SiteBackground from "@/components/SiteBackground";
import { worksPlaylist } from "@/data/music-data";
import { projectMap, projects } from "@/data/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  return {
    title: `${project?.title ?? "项目详情"}｜Anno Space`,
    description: project?.summary ?? "环境设计作品详情",
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  if (!project) notFound();

  const highlights = project.highlights ?? [];
  const processNotes = project.processNotes ?? [];
  const recommendationPool = projects.filter((item) => item.slug !== project.slug && item.slug !== "wen-zi-gao-tu-zhi");
  const sameCategoryProjects = recommendationPool.filter((item) => item.category === project.category);
  const fallbackProjects = recommendationPool.filter((item) => item.category !== project.category);
  const relatedProjects = [...sameCategoryProjects, ...fallbackProjects].slice(0, 3);

  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SiteBackground variant="dark" />
      <Navbar />
      <FloatingMusicPlayer playlist={worksPlaylist} theme="dark" storageKey={`project-${project.slug}`} />
      <article className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44">
        <Link href="/projects" className="text-sm text-white/55 transition hover:text-white">← <LocalizedText zh="返回作品集" en="Back to works" /></Link>

        <section className="mt-8 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.category} / {project.year}</p>
            <h1 className="mt-5 text-6xl font-semibold leading-[0.98] tracking-[-0.07em] md:text-8xl">{project.title}</h1>
            <p className="mt-5 text-xl text-white/45">{project.englishTitle}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-9 text-white/65">{project.summary}</p>
            {project.status ? (
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/62">
                当前状态：{project.status}
              </div>
            ) : null}
          </div>
        </section>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.42)]">
          <Image src={project.cover} alt={`${project.title} 主视觉`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        </div>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
            <p className="eyebrow">Project Overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">项目概览</h2>
            <p className="mt-5 text-base leading-9 text-white/66">{project.overview ?? project.summary}</p>
            {project.designStatement ? (
              <p className="mt-5 text-base leading-9 text-white/58">{project.designStatement}</p>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
            <p className="eyebrow">Project Info</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">项目信息</h2>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/34">类型</p>
                <p className="mt-2 text-base text-white/74">{project.type}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/34">氛围关键词</p>
                <p className="mt-2 text-base leading-8 text-white/68">{project.atmosphere}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/34">标签</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/65">{tag}</span>
                  ))}
                </div>
              </div>
              {project.capabilitySummary ? (
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/34">能力体现</p>
                  <p className="mt-3 text-sm leading-8 text-white/62">{project.capabilitySummary}</p>
                </div>
              ) : null}
            </div>
            {project.materialStatus ? (
              <p className="mt-6 text-sm leading-7 text-white/50">{project.materialStatus}</p>
            ) : null}
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl md:col-span-2">
            <p className="eyebrow">Design Concept</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">设计概念</h2>
            <p className="mt-5 text-base leading-9 text-white/66">{project.concept}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
            <p className="eyebrow">Project Value</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">项目价值</h2>
            <p className="mt-5 text-sm leading-8 text-white/62">{project.projectValue ?? "这个项目帮助网站补齐当前作品方向中的重要表达维度。"}</p>
          </div>
        </section>

        {project.slug === "ci-an-bi-an" ? (
          <section className="mt-8 rounded-[2rem] border border-emerald-200/12 bg-emerald-300/[0.06] p-7 backdrop-blur-xl">
            <p className="eyebrow">Project Note</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">项目说明</h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-white/66">
              本页文案依据项目研究与设计说明重新整理，用于网页展示与项目叙事；论文原稿仅作为内部写作素材，不在网站中公开展示。
            </p>
          </section>
        ) : null}

        {highlights.length > 0 ? (
          <section className="mt-16">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Highlights</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">设计亮点</h2>
              </div>
              <p className="max-w-2xl text-sm leading-8 text-white/45">
                这部分用来快速说明项目最值得被优先看到的空间特征、组织逻辑或表达价值。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item, index) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-200/55">0{index + 1}</p>
                  <p className="mt-4 text-base leading-8 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {processNotes.length > 0 ? (
          <section className="mt-16">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Process</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">过程路径</h2>
              </div>
              <p className="max-w-2xl text-sm leading-8 text-white/45">
                这里不只是结果说明，而是把项目从概念生成到表达成型的大致推进逻辑交代出来。
              </p>
            </div>
            <div className="relative space-y-5 before:absolute before:bottom-5 before:left-[0.72rem] before:top-5 before:w-px before:bg-gradient-to-b before:from-sky-200/0 before:via-sky-200/40 before:to-sky-200/0">
              {processNotes.map((item, index) => (
                <div key={item} className="relative pl-8">
                  <span className="absolute left-0 top-3 h-3.5 w-3.5 rounded-full border border-sky-100/35 bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.4)]" />
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/34">Step 0{index + 1}</p>
                    <p className="mt-3 text-sm leading-8 text-white/68">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">成果展示</h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-white/45 md:block">图像来自当前作品集素材整理，用于呈现项目的空间气质、节点关系与最终表达。</p>
          </div>
          {project.videos && project.videos.length > 0 ? (
            <div className="mb-10 grid gap-6">
              {project.videos.map((video) => (
                <div key={video.src} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                  <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                    <video
                      className="aspect-video w-full rounded-[1.5rem] bg-slate-950 object-cover"
                      controls
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={video.poster}
                    >
                      <source src={video.src} type="video/mp4" />
                      你的浏览器暂不支持视频播放。
                    </video>
                    <div className="p-2 lg:p-5">
                      <p className="eyebrow">Motion Media</p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{video.title}</h3>
                      {video.description ? (
                        <p className="mt-4 text-sm leading-8 text-white/58">{video.description}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {project.gallerySections && project.gallerySections.length > 0 ? (
            <CategorizedProjectGallery sections={project.gallerySections} projectTitle={project.title} />
          ) : project.gallery.length > 0 ? (
            <ProjectGallery images={project.gallery} projectTitle={project.title} />
          ) : (
            <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">素材正在补充中</h3>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-white/58">
                这个项目已经接入网站结构，但当前图像素材还在整理。先保留概念与项目位置，后续补充封面、图纸、效果图或过程稿后即可直接扩展。
              </p>
              {project.resourceHref ? (
                <a
                  href={project.resourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full border border-white/14 bg-white/[0.06] px-5 py-3 text-sm text-white/78 transition hover:border-sky-200/40 hover:bg-white/[0.1] hover:text-white"
                >
                  <LocalizedText zh="查看当前已接入资料" en="View attached resource" />
                </a>
              ) : null}
            </div>
          )}
        </section>

        {relatedProjects.length > 0 ? (
          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Continue Browsing</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">相关推荐</h2>
              </div>
              <p className="max-w-2xl text-sm leading-8 text-white/45">
                继续浏览同方向或相邻气质的项目，让这个作品不只是单页停留，而是回到整个作品集的阅读路径里。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={item.route}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-200/35 hover:bg-white/[0.1]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-white/5">
                    <Image
                      src={item.cover}
                      alt={`${item.title} 封面`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-3 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-white/42">{item.englishTitle} · {item.year}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-sky-100/55">{item.type}</p>
                      </div>
                      <span className="mt-1 text-2xl text-white/40 transition group-hover:translate-x-1 group-hover:text-white">→</span>
                    </div>
                    <p className="mt-4 line-clamp-2 text-sm leading-7 text-white/62">{item.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/58">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
      <Footer />
    </main>
  );
}
