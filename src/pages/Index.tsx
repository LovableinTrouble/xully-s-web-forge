import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 scanline pointer-events-none z-50 opacity-40" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
