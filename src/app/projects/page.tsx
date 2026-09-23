import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { worksPlaylist } from "@/data/music-data";
import { projectPageStats } from "@/data/site-data";

export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-base min-h-screen text-white selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <Navbar />
      <FloatingMusicPlayer playlist={worksPlaylist} theme="dark" storageKey="works" />
      <PageHero
        kicker="Selected Works Archive"
        title="作品矩阵 Works"
        description="这里整理了我的空间、室内、概念、家具与实验性设计作品。我希望通过图纸、模型、材质、光影和叙事线索，呈现每个项目从概念到表达的完整过程。"
        stats={projectPageStats}
      />
      <ProjectsGrid />
      <Footer theme="dark" />
    </main>
  );
}
