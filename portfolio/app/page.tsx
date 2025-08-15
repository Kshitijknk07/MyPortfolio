import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-32 bg-white"></div>
      <AboutSection />
      <div className="h-32 bg-white"></div>
      <ProjectsSection />
    </>
  );
}
