import Link from "next/link";
import Image from "next/image";
import { awardItems } from "@/data/portfolio-data";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";

const pageValues = [
  "为首页中的荣誉摘要提供更完整的承接页面，让竞赛成果不只作为一句文字出现。",
  "把奖项与项目建立对应关系，帮助浏览者理解成果背后的设计内容，而不是只看奖项名称。",
  "后续可继续补充证书原图、获奖时间、赛事背景与参赛说明，形成更完整的证明材料页。",
];

const nextSteps = [
  "证书图片已补充，后续继续完善获奖时间信息。",
  "为每项荣誉补充赛事简介、参赛类别与对应项目说明。",
  "在项目详情页中加入「相关荣誉」入口，形成双向跳转结构。",
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SubpageNav
        links={[
          { label: "总作品集", href: "/portfolio" },
          { label: "项目总览", href: "/projects" },
          { label: "简历页", href: "/resume" },
          { label: "荣誉列表", href: "#awards-list" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
        <Reveal>
          <div className="ui-card grid gap-8 rounded-[2.2rem] bg-white p-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5">
              <p className="section-kicker">Awards</p>
              <h1 className="section-title">把首页中的荣誉摘要展开为可用于建立可信度的独立说明页面</h1>
              <p className="section-copy">
                这一页的重点不是单纯罗列奖项，而是说明这些成果如何与项目表达、竞赛验证和求职展示之间形成对应关系，从而为作品集提供更明确的真实性支撑。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {pageValues.map((item, index) => (
                <div key={item} className={`rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-muted)]/35 p-5 animate-reveal stagger-${index + 1}`}>
                  <p className="text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">价值 0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="awards-list" className="border-y border-[var(--color-line)] bg-[var(--color-muted)]/32">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <Reveal className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">荣誉列表</p>
            <h2 className="section-title">当前以核心竞赛成果为主，用于支撑项目表达的可信度与完成度判断</h2>
          </Reveal>
          <div className="grid gap-5 xl:grid-cols-3">
            {awardItems.map((award, index) => (
              <Reveal key={award.title} delay={index * 100}>
                <article
                  className="ui-card rounded-[2rem] p-6 h-full"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.18em] uppercase">
                    <span className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-[var(--color-accent-deep)]">{award.level}</span>
                    <span className="text-[var(--color-muted-ink)]">{award.time}</span>
                  </div>
                  <h3 className="mt-5 font-serif-display text-3xl font-semibold text-[var(--color-ink)]">{award.title}</h3>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-copy)]">
                    <p>
                      <span className="text-[var(--color-muted-ink)]">对应方向：</span>
                      {award.project}
                    </p>
                    <p>{award.description}</p>
                  </div>
                  {award.certificateImage && (
                    <div className="project-preview-frame relative mt-5 overflow-hidden rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-muted)] transition duration-500 hover:scale-[1.02]">
                      <Image
                        src={award.certificateImage}
                        alt={`${award.title}证书`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                  <Link
                    href={award.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
                  >
                    查看相关页面
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)] h-full">
              <p className="section-kicker">页面作用</p>
              <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">让奖项从「文字标签」变成「可解释的成果证明」</h2>
              <p className="mt-4 text-sm leading-8 text-[var(--color-copy)]">
                对于求职型作品集网站来说，荣誉页的意义不只是展示获奖，而是帮助浏览者把「作品表达好」与「成果经过外部评价验证」联系起来。它与项目页、简历页共同组成网站中的可信度层。
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)]/25 p-8 shadow-[0_18px_46px_rgba(26,24,21,0.05)] h-full">
              <p className="section-kicker">后续补充</p>
              <h2 className="mt-4 font-serif-display text-4xl font-semibold text-[var(--color-ink)]">下一步将继续把证书材料与赛事信息补齐</h2>
              <div className="mt-6 grid gap-3">
                {nextSteps.map((item, index) => (
                  <div key={item} className={`rounded-[1.3rem] border border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-copy)] animate-reveal stagger-${index + 1}`}>
                    <span className="mr-3 text-xs tracking-[0.18em] text-[var(--color-accent-deep)] uppercase">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SubpageFooter
        heading="如果你想进一步了解我的项目经历与个人背景，可以继续浏览作品集、项目总览和简历页面"
        links={[
          { label: "查看总作品集", href: "/portfolio" },
          { label: "查看项目页", href: "/projects" },
          { label: "查看简历页", href: "/resume", primary: true },
        ]}
      />
    </main>
  );
}
