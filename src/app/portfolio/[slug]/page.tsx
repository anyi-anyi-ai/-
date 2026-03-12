import { notFound } from "next/navigation";
import { portfolioItems, portfolioMap } from "@/data/portfolio-data";
import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = portfolioMap[slug];
  
  return {
    title: `${portfolio?.title || "作品集"} — 安翌｜环境设计作品集`,
    description: portfolio?.summary || "查看安翌的环境设计作品集详情",
  };
}

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

  return <PortfolioContent portfolio={portfolio} relatedItems={relatedItems} />;
}
