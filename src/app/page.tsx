import AboutMe from "@/components/common/about/AboutMe";
import Contact from "@/components/common/contact/Contact";
import ProjectGrid from "@/components/common/project/ProjectGrid";
import TechStack from "@/components/common/tech/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <ProjectGrid />
      <TechStack />
      <AboutMe />
      <Contact />
    </main>
  );
}
