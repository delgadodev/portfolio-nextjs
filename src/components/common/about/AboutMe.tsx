import React from "react";

export default function AboutMe() {
  return (
    <div className="mt-14 fade-in" id="about">
      <h2 className="text-2xl md:text-4xl font-bold text-black/80">
        More about me
      </h2>

      <div className="flex flex-col gap-3 mt-5 text-lg w-10/12">
        <p>
          {" "}
          &quotI'm a frontend developer with a passion for design and creativity
          in web development. My journey in this industry started from my
          curiosity to understand how things work and how to improve them. I'm
          fascinated by the versatility of web development and the opportunity
          it provides to create impactful digital experiences.&quot
        </p>

        <p>
        &quotI particularly enjoy the challenges of teamwork, where each project
          is an opportunity to learn and grow professionally. My focus extends
          beyond programming; I'm also deeply interested in aesthetic and
          functional design that optimizes user experience.&quot
        </p>

        <p>
        &quotI firmly believe in striking a balance between aesthetics and
          functionality to develop web products that are both visually appealing
          and intuitive. My goal is to continue exploring new technologies and
          techniques to further evolve in this exciting field of web
          development.&quot
        </p>
      </div>
    </div>
  );
}
