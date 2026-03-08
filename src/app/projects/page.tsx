import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";

const projectGroups = [
  {
    title: "已上线详情",
    description: "这部分项目已经接入独立详情页，适合从总览页继续深入浏览。",
    items: portfolioItems.map(item => ({
      title: item.title,
      href: item.detailHref,
      portfolioHref: item.portfolioHref,
      type: item.type,
      summary: item.summary,
      status: "已上线详情页",
      heroImage: item.heroImage,
    })),
  },
];

const browsingSuggestions = [
  "先从总作品集页建立整体范围判断，再回到项目总览页选择具体详情页。",
  "如果希望快速比较不同作品的最终呈现效果，可以直接在这里查看 8 个项目详情入口。",
  "如果希望理解某个作品的完整上下文，可优先进入其对应作品集页再返回项目详情页。",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉页", href: "/awards" },
          { label: "项目分组", href: "#project-groups" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <div className="ui-card grid gap-8 rounded-[2.2rem] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-kicker">Projects</p>
            <h1 className="section-title">项目总览页用于集中查看已接入详情页的作品，而总作品集页负责作品范围分发</h1>
            <p className="section-copy">
              这一页与总作品集页的区别在于：总作品集页负责先建立 8 个作品集的整体范围判断；项目总览页则更适合直接比较当前已经接入详情页的具体项目内容与完成状态。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">详情页数量</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{portfolioItems.length} 个</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{portfolioItems.length} 个作品方向现在都已经具备正式项目详情入口。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">页面分工</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">目录 + 跳转</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">在这里可以更直接地进入项目详情页，也可以回到作品集页查看完整上下文。</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5">
              <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">浏览建议</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">先总后细</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">先看总作品集页，再回到此页快速定位你最想比较的具体项目。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/32">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="section-kicker">浏览方式</p>
              <h2 className="font-serif-display text-4xl font-semibold text-[var(--color-ink)]">建议按"作品集判断 → 项目详情比较"的方式浏览</h2>
            </div>
            <div className="grid gap-3">
              {browsingSuggestions.map((item, index) => (
                <div key={item} className="rounded-[1.3rem] border border-[var(--color-line)] bg-[var(--color-muted)]/25 px-4 py-4 text-sm leading-7 text-[var(--color-copy)]">
                  <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project-groups" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12">
          {projectGroups.map((group) => (
            <section key={group.title} className="space-y-6">
              <div className="max-w-3xl space-y-4">
                <p className="section-kicker">项目分组</p>
                <h2 className="section-title">{group.title}</h2>
                <p className="section-copy">{group.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((project) => (
                  <article
                    key={project.title}
                    className="ui-card rounded-[1.9rem] p-6"
                  >
                    <div className="project-preview-frame relative mb-4 overflow-hidden rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-muted)]">
                      <Image
                        src={project.heroImage}
                        alt={`${project.title}缩略图`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">{project.status}</p>
                    <h3 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{project.title}</h3>
                    <p className="mt-3 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase">{project.type}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link href={project.href} className="ui-button-light">
                        查看详情
                      </Link>
                      <Link href={project.portfolioHref} className="ui-button-light">
                        查看作品集
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <SubpageFooter
        heading="可以继续查看总作品集页、简历页与荣誉页，完成对项目之外信息的整体判断"
        links={[
          { label: "查看总作品集", href: "/portfolio" },
          { label: "查看简历页", href: "/resume" },
          { label: "查看荣誉页", href: "/awards", primary: true },
        ]}
      />
    </main>
  );
}
