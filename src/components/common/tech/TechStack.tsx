import React from "react";
import { FaReact } from "react-icons/fa";
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiPrisma } from "react-icons/si";

const tech = [
  {
    name: "React.js",
    Icon: FaReact,
  },
  {
    name: "Next.js",
    Icon: RiNextjsFill,
  },
  {
    name: "Tailwind",
    Icon: RiTailwindCssFill,
  },
  {
    name: "CSS3",
    Icon: FaCss3,
  },
  {
    name: "Javascript",
    Icon: IoLogoJavascript,
  },
  {
    name: "Prisma",
    Icon: SiPrisma,
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    name: "HTML5",
    Icon: FaHtml5,
  },
];

export default function TechStack() {
  return (
    <div id="tech" className="fade-in mt-14">
      <h2 className="text-2xl md:text-4xl font-bold text-black/80">
        My tech stack
      </h2>

      <div className="flex flex-col md:flex-row gap-5 mt-5 fade-in flex-wrap">
        {tech.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 border-black/80 rounded-xl p-2 md:w-32"
          >
            <item.Icon className="text-5xl text-black/80" />
            <p className="text-lg font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
