import Layout from "@/components/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800 h-[360px] rounded-md">
            <div className="bg-neutral-500 h-[50%] rounded-t-md"></div>

            <div className=" flex flex-col gap-2 mt-2 px-2">
              <h1 className="text-xl text-neutral-100 font-bold">Project 1</h1>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptate, quia, voluptas quae voluptatem
                quibusdam
              </p>

              <div className="flex gap-10">
                <a>Url</a>

                <a>Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
