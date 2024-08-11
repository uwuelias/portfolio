import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}
