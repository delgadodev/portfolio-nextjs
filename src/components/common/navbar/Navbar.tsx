"use client";
import clsx from "clsx";
import { useState } from "react";
import "./button.css";
import "./blur.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Fondo oscuro con transición */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 transition-all delay-300 lg:hidden" />
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 black backdrop-blur-[3px] transition-all delay-300 lg:hidden" />
      )}

      {/* Navbar */}
      <div className="bg-zinc-100 flex justify-between w-[90%] mx-auto p-1 rounded-full z-10 relative mt-5 lg:hidden">
        <p className="font-semibold  bg-zinc-800 text-white px-3 rounded-full text-sm p-3">
          Lautaro Delgado
        </p>
        <button className="p-2" type="button">
          <input onClick={handleToggle} type="checkbox" id="checkbox" />
          <label
            htmlFor="checkbox"
            className="
            relative
            w-[35px]
            h-[30px]
            cursor-pointer
            flex flex-col 
            items-center
            justify-center gap-[5px]
            duration-[0.5s]
            toggle
          "
          >
            <div
              className="bars w-full h-[4px] bg-black rounded-[4px]"
              id="bar1"
            ></div>
            <div
              className="bars w-full h-[4px] bg-black rounded-[4px]"
              id="bar2"
            ></div>
            <div
              className="bars w-full h-[4px] bg-black rounded-[4px]"
              id="bar3"
            ></div>
          </label>
        </button>
      </div>

      {/* Contenido del Navbar */}
      <div
        className={clsx(
          "mt-2 flex-col gap-2 z-10 transition-all absolute w-full lg:hidden",
          {
            flex: isOpen,
            hidden: !isOpen,
            "fade-in": isOpen,
            "fade-out": !isOpen,
          }
        )}
      >
        {isOpen && (
          <>
            {/* CONTAINER */}
            <div className=" w-[90%] mx-auto flex flex-col gap-2 lg:hidden">
              {/* LINKS */}
              <div className="bg-zinc-100 flex justify-center p-10 rounded-2xl ">
                <div className="text-center flex flex-col gap-2 font-semibold uppercase">
                  <Link
                    onClick={handleToggle}
                    href="#projects"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    onClick={handleToggle}
                    href="#tech"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    Tech Stack
                  </Link>
                  <Link
                    onClick={handleToggle}
                    href="#about"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    About
                  </Link>
                  <h2 className="opacity-40 text-sm mt-5">
                    available for new projects
                  </h2>
                </div>
              </div>

              {/* GRID LINKS SOCIALS */}
              <div className="grid grid-cols-3 gap-2 justify-between ">
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <Link
                    href="https://github.com/delgadodev"
                    target="_blank"
                    className="font-bold"
                  >
                    github
                  </Link>
                </div>
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <Link
                    href="https://www.linkedin.com/in/lautarodelgadodev/"
                    target="_blank"
                    className="font-bold"
                  >
                    linkedin
                  </Link>
                </div>
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <p className="font-bold">instagram</p>
                </div>
              </div>
              {/* LINK SOCIAL FULL */}
              <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                <Link
                  href="
                mailto:allanlautarodelgadodev@gmail.com
                "
                  target="_blank"
                  className="font-bold"
                >
                  email
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
