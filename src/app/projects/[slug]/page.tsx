import { notFound } from "next/navigation";
import { portfolioItems, portfolioMap } from "@/data/portfolio-data";
import { Metadata } from "next";
import ProjectContent from "./ProjectContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioMap[slug];
  
  return {
    title: `${project?.title || "项目"} — 安翌｜环境设计作品集`,
    description: project?.summary || "查看安翌的环境设计项目详情",
  };
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioMap[slug];

  if (!project) {
    notFound();
  }

  const relatedItems = portfolioItems.filter((item) => item.slug !== project.slug).slice(0, 3);

  return <ProjectContent project={project} relatedItems={relatedItems} />;
}
