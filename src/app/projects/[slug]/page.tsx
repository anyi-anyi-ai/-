import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "dao-yin-wu-ming": {
    title: "道隐无名",
    subtitle: "文化民宿 / 空间改造",
    portfolioHref: "/portfolio/dao-yin-wu-ming",
    keywords: ["道家文化", "静修空间", "木石光影"],
    heroImage: "/projects/dao-yin-wu-ming/cover.webp",
    overview:
      "“道隐无名”立足于对道家天人合一哲思的体悟，以文化民宿为载体，将木、石、水、光影等自然元素转译为静修型空间语言，回应现代人对于精神疗愈、文化体验与返璞归真生活方式的想象。",
    highlights: [
      "以道家哲思为母题，通过虚实、动静与自然材质建立整体空间氛围。",
      "功能覆盖静修、讲解、香文化、素斋、太极养生等复合体验场景。",
      "强调精神场域营造，让文化主题与当代旅居体验形成结合。",
    ],
    gallery: [
      "/projects/dao-yin-wu-ming/cover.webp",
      "/projects/dao-yin-wu-ming/detail-1.webp",
      "/projects/dao-yin-wu-ming/detail-2.webp",
    ],
  },
  "chen-ai-zhi-shang": {
    title: "尘埃之上",
    subtitle: "未来生态 / 概念居住",
    portfolioHref: "/portfolio/chen-ai-zhi-shang",
    keywords: ["异星居住", "四季系统", "精神缓冲带"],
    heroImage: "/projects/chen-ai-zhi-shang/cover.webp",
    overview:
      "项目面向火星极端环境构建高度自给自足的生态居住系统，以地球“四季”为主题组织异星生活场景，不仅回应生存技术与社区发展需求，也尝试通过文化意象与生态微景观建立面向移民者的心理慰藉机制。",
    highlights: [
      "围绕高辐射、大温差、低气压等火星环境条件提出居住原型。",
      "通过四季主题与生态系统构建更具情感承接能力的异星日常场景。",
      "兼顾未来技术验证、社区演化与精神缓冲三重命题。",
    ],
    gallery: [
      "/projects/chen-ai-zhi-shang/cover.webp",
      "/projects/chen-ai-zhi-shang/detail-1.png",
      "/projects/chen-ai-zhi-shang/detail-2.png",
    ],
  },
  "mi-zong": {
    title: "觅踪",
    subtitle: "零售体验 / 主题空间",
    portfolioHref: "/portfolio/mi-zong",
    keywords: ["丝路转译", "二次元零售", "文化体验"],
    heroImage: "/projects/mi-zong/cover.webp",
    overview:
      "“觅踪”位于西安，是一个将丝路文脉与二次元青年消费文化结合的零售体验空间。项目以“丝路新生，次元织梦”为核心主题，通过文化转译与体验重构，把零售、停留、探索与社群连接组织成一条连续的空间叙事路径。",
    highlights: [
      "将丝路、蚕茧、丝线等意象转化为空间导视与体验结构。",
      "在探索零售、沉浸体验、交流活动和非遗转译之间建立节奏。",
      "强调文化认同、青年社群与商业体验的共同生成。",
    ],
    gallery: [
      "/projects/mi-zong/cover.webp",
      "/projects/mi-zong/detail-1.webp",
      "/projects/mi-zong/detail-2.webp",
    ],
  },
  "ran-meng-li-fang": {
    title: "燃梦立方",
    subtitle: "共享办公 / 商业空间",
    portfolioHref: "/portfolio/ran-meng-li-fang",
    keywords: ["校园创业", "立方秩序", "红色焦点"],
    heroImage: "/projects/ran-meng-li-fang/cover.webp",
    overview:
      "《燃梦立方》以大学校园中的创业办公场景为背景，围绕共享、交流、互助与展示需求搭建复合型办公空间。项目通过反复解构的红色立方元素组织接待、洽谈、办公与展览区域，形成鲜明而统一的视觉秩序。",
    highlights: [
      "以红色立方作为空间识别符号与功能承载元素。",
      "覆盖接待、洽谈、办公、展览、自主售卖等多种使用场景。",
      "适合体现商业空间逻辑、秩序构建与视觉焦点控制能力。",
    ],
    gallery: [
      "/projects/ran-meng-li-fang/cover.webp",
      "/projects/ran-meng-li-fang/detail-1.webp",
      "/projects/ran-meng-li-fang/detail-2.webp",
    ],
  },
  "jia-ju-she-ji": {
    title: "家具设计",
    subtitle: "家具单体 / 结构表达",
    portfolioHref: "/portfolio/jia-ju-she-ji",
    keywords: ["家具单体", "结构表达", "细节推敲"],
    heroImage: "/projects/jia-ju-she-ji/cover.jpg",
    overview:
      "《家具设计》作为空间项目之外的重要补充，重点展示单体家具在尺度、结构、细节与图像呈现方面的表达能力。通过真实图像接入，这一页开始承担从单体成果到设计逻辑说明的过渡作用。",
    highlights: [
      "通过单体家具设计补足空间项目之外的设计维度。",
      "强调结构关系、细部节点与尺度控制能力。",
      "适合作为网站中体现基础设计素养与细节推敲能力的补充案例。",
    ],
    gallery: [
      "/projects/jia-ju-she-ji/cover.jpg",
      "/projects/jia-ju-she-ji/detail-1.jpg",
      "/projects/jia-ju-she-ji/detail-2.png",
    ],
  },
  "qi-huang-yang-sheng-xuan": {
    title: "岐黄养生轩",
    subtitle: "主题餐饮 / 中医文化",
    portfolioHref: "/portfolio/qi-huang-yang-sheng-xuan",
    keywords: ["中医文化", "养生主题", "餐饮空间"],
    heroImage: "/projects/qi-huang-yang-sheng-xuan/cover.webp",
    overview:
      "《岐黄养生轩》围绕中医养生理念与主题餐饮空间体验展开，尝试在文化识别、商业功能与场景氛围之间建立平衡。当前详情页先承接核心图像与主题说明，后续将继续深化功能组织与设计推演内容。",
    highlights: [
      "以中医养生文化为主题线索，强化空间中的精神识别与场景气质。",
      "兼顾餐饮空间的现实功能与文化主题表达。",
      "适合作为文化主题与商业空间结合方向的重要补充案例。",
    ],
    gallery: [
      "/projects/qi-huang-yang-sheng-xuan/cover.webp",
      "/projects/qi-huang-yang-sheng-xuan/detail-1.webp",
      "/projects/qi-huang-yang-sheng-xuan/detail-2.webp",
    ],
  },
  "qin-tu-jiu-qiang": {
    title: "秦土旧腔",
    subtitle: "文化展示 / 戏曲主题",
    portfolioHref: "/portfolio/qin-tu-jiu-qiang",
    keywords: ["戏曲主题", "文化展示", "地方记忆"],
    heroImage: "/projects/qin-tu-jiu-qiang/cover.webp",
    overview:
      "《秦土旧腔》围绕地方戏曲文化、舞台感与地域记忆展开设计表达，通过更具情绪与戏剧性的画面组织空间叙事。当前页面先承接真实图像与主题说明，后续将继续深化展陈逻辑与文化母题分析。",
    highlights: [
      "强调地方戏曲文化与空间氛围塑造之间的关系。",
      "通过舞台感、视觉母题与文化记忆强化叙事张力。",
      "适合作为文化展示类作品在网站中的重要补充。",
    ],
    gallery: [
      "/projects/qin-tu-jiu-qiang/cover.webp",
      "/projects/qin-tu-jiu-qiang/detail-1.webp",
      "/projects/qin-tu-jiu-qiang/detail-2.webp",
    ],
  },
  "yu-le-kong-jian": {
    title: "娱乐空间",
    subtitle: "公共娱乐 / 场景体验",
    portfolioHref: "/portfolio/yu-le-kong-jian",
    keywords: ["公共娱乐", "体验场景", "空间功能"],
    heroImage: "/projects/yu-le-kong-jian/cover.jpg",
    overview:
      "《娱乐空间》聚焦更贴近现实使用场景的公共娱乐类空间表达，用于补充作品集中相对更强调功能应用与体验组织的方向。当前页面已承接真实图像，并可继续作为后续深化场景逻辑的重要基础。",
    highlights: [
      "补足现实娱乐与公共体验类场景方向。",
      "强调功能组织、体验节奏与场景应用的结合。",
      "适合作为现实感更强的空间案例补充网站结构。",
    ],
    gallery: [
      "/projects/yu-le-kong-jian/cover.jpg",
      "/projects/yu-le-kong-jian/detail-1.jpg",
      "/projects/yu-le-kong-jian/detail-2.jpg",
    ],
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-line)] bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          <Link href="/" className="text-sm tracking-[0.18em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75">
            ← 返回首页
          </Link>
          <span className="text-xs tracking-[0.22em] text-[var(--color-muted-ink)] uppercase">Project Detail</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-muted)] p-4 shadow-[0_24px_80px_rgba(26,24,21,0.12)]">
            <div className="project-hero-frame relative">
              <Image src={project.heroImage} alt={`${project.title}主图`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-contain p-2" />
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
              <Link
                href={project.portfolioHref}
                className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-[var(--color-accent-deep)] uppercase transition hover:opacity-75"
              >
                返回所属作品集
                <span aria-hidden="true">→</span>
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
        <div className="mb-10 space-y-4">
          <p className="section-kicker">图像展示</p>
          <h2 className="section-title">精选画面用于承接首页入口，建立更完整的项目印象</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.gallery.map((image, index) => (
            <figure
              key={image}
              className="overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-muted)] p-3 shadow-[0_18px_44px_rgba(26,24,21,0.08)]"
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
