import ProjectCard from "@/components/common/project/ProjectCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { projects } from "@/projects";
import Image from "next/image";

export default function ProjectGrid() {
  return (
    <>
      <div className="md:hidden shadow-md bg-gradient-to-tl from-lime-100 to-slate-50 p-8 rounded-3xl">
        <h1 className="text-4xl text-black/80 font-bold  mx-auto">
          frontend developer
        </h1>
      </div>

      <div className="p-2 md:grid md:grid-cols-2">
        <div className="fade-in">
          <h2 className="font-semibold mb-3 md:text-2xl">Hello! I&apos;m Lautaro</h2>

          <p className="md:text-xl">
            Web Developer with 2 years of experience. My passion lies in
            creating captivating websites, whether it&apos; through creative
            projects featuring unique animations or clean and commercial
            designs.
          </p>
        </div>

        <div className="text-center flex justify-center items-center text-2xl text-zinc-500">
          <TextGenerateEffect words="based in Santiago del Estero, Argentina" />
        </div>
      </div>

      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold text-black/80">
          Here are my most recent projects
        </h2>

        <div className="grid md:grid-cols-3 mt-5 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              image={project.image}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              title={project.title}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </>
  );
}
