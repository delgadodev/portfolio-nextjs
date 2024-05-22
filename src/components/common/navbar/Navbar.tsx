"use client";
import clsx from "clsx";
import { useState } from "react";
import "./button.css";
import "./blur.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Fondo oscuro con transición */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 transition-all delay-300 md:hidden" />
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 black backdrop-blur-[3px] transition-all delay-300 md:hidden" />
      )}

      {/* Navbar */}
      <div className="bg-zinc-100 flex justify-between w-[90%] mx-auto p-1 rounded-full z-10 relative mt-5 md:hidden">
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
          "mt-2 flex-col gap-2 z-10 transition-all absolute w-full md:hidden",
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
            <div className=" w-[90%] mx-auto flex flex-col gap-2 md:hidden">
              {/* LINKS */}
              <div className="bg-zinc-100 flex justify-center p-10 rounded-2xl ">
                <div className="text-center flex flex-col gap-2 font-semibold uppercase">
                  <a
                  onClick={handleToggle}
                    href="#projects"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                  onClick={handleToggle}
                    href="#experience"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    Experience
                  </a>
                  <a
                  onClick={handleToggle}
                    href="#about"
                    className="hover:underline hover:text-black/50 transition-colors"
                  >
                    About
                  </a>
                  <h2 className="opacity-40 text-sm mt-5">
                    Disponible para nuevos proyectos
                  </h2>
                </div>
              </div>

              {/* GRID LINKS SOCIALS */}
              <div className="grid grid-cols-3 gap-2 justify-between ">
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <p className="font-bold">github</p>
                </div>
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <p className="font-bold">linkedin</p>
                </div>
                <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                  <p className="font-bold">instagram</p>
                </div>
              </div>
              {/* LINK SOCIAL FULL */}
              <div className="bg-zinc-100 p-5 text-center rounded-2xl">
                <p className="font-bold">email</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
