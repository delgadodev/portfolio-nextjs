/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">About me</h1>

        <p>
          Hey, I'm Lautaro, a <strong>React Frontend Developer</strong> based in
          Santiago del Estero, Argentina.
        </p>

        <div className="h-[1px] bg-neutral-600"></div>

        <h1 className="text-2xl font-bold">Skills</h1>

        <div>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Styled Components</li>
            <li>Tailwind CSS - Chakra UI</li>
            <li>Astro</li>
          </ul>
        </div>

        <div className="h-[1px] bg-neutral-600"></div>

        <h1 className="text-xl font-bold">
          More
        </h1>

        <p>
          I am a passionate React frontend developer with a strong interest in
          technology. I thrive in team environments and am always looking to
          learn and grow. With my experience in React, I have developed a deep
          understanding of frontend web development and am always eager to stay
          up-to-date with the latest industry trends. I am a dedicated team
          player, collaborating with others to ensure the highest quality
          results. My love for technology drives me to continue learning,
          exploring new frameworks and technologies, and improving my skills to
          create innovative and efficient solutions for any project.
        </p>
      </div>
    </Layout>
  );
};

export default About;
