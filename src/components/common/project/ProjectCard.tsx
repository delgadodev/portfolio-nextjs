"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  liveUrl: string;
  repoUrl: string;
  techStack: string[];
}

export default function ProjectCard({
  image,
  liveUrl,
  repoUrl,
  title,
  techStack,
}: Props) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="flex flex-col gap-5 md:w-full h-[450px]">
      <div className="bg-backgroundCard h-[300px] flex items-center rounded-3xl p-5">
        <Image
          className="w-full h-[200px] object-contain"
          src={image}
          alt={title}
          width={960}
          height={720}
        />
      </div>

      <div className="flex flex-col justify-between h-full gap-2 ">
        <div className="flex flex-col gap-2">
          <p className="text-lg">{title}</p>
          <div className="flex gap-2 flex-wrap">
            {techStack?.map((tech, index) => (
              <div key={index} className="bg-zinc-200 py-1 px-3 w-18  text-center rounded-3xl">
                <span className="text-zinc-800 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          className="relative p-5 bg-black/80 w-full rounded-3xl text-white font-medium text-center"
        >
          <div
            className={`transition-opacity duration-500 ${
              mouseEnter ? "opacity-0" : "opacity-100"
            }`}
          >
            view
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-500 ${
              mouseEnter ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={liveUrl}
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              live
            </a>
            {" / "}
            <a
              href={repoUrl}
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
