import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col p-5 gap-5 fixed w-[320px]">
      <div className=" shadow-md bg-gradient-to-tl from-lime-100 to-slate-50 p-8 rounded-3xl">
        <h1 className="text-4xl text-black/80 font-bold w-[80%] mx-auto">
          frontend developer
        </h1>
      </div>

      <div className=" bg-zinc-100 rounded-3xl shadow-md p-5 ">
        <div className=" flex flex-col gap-2 font-semibold uppercase">
          <Link
            href="#projects"
            className="hover:underline hover:text-black/50 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#tech"
            className="hover:underline hover:text-black/50 transition-colors"
          >
            Tech Stack
          </Link>
          <Link
            href="#about"
            className="hover:underline hover:text-black/50 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:underline hover:text-black/50 transition-colors"
          >
            Contact
          </Link>
          <h2 className="opacity-40 text-sm mt-5">
            Available for new projects
          </h2>
        </div>

        <div className="my-5 bg-gray-300 w-full h-[1px]" />

        <div className="mt-5 flex flex-col gap-2 ">
          <p className="text-black/80 font-semibold uppercase">Contacts</p>
          <div>
            <Link
              className="hover:underline hover:text-black/50 transition-colors"
              target="_blank"
              href="mailto:allandelgadodev@gmail.com"
            >
              e-mail
            </Link>
          </div>
          <p className="text-black/80 font-semibold uppercase ">Socials</p>
          <div className="flex flex-col">
            <Link
              className="hover:underline hover:text-black/50 transition-colors"
              href="https://github.com/delgadodev"
            >
              github
            </Link>
            <Link
              className="hover:underline hover:text-black/50 transition-colors"
              href="https://www.linkedin.com/in/lautarodelgadodev/"
            >
              linkedin
            </Link>
            <Link
              className="hover:underline hover:text-black/50 transition-colors"
              href="#"
            >
              x
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
