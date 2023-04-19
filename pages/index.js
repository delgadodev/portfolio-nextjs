/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <>
        <Layout>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Lautaro Delgado</h1>

            <p>
              Hey, I'm Lautaro, a <strong>React Frontend Developer</strong>{" "}
              based in Santiago del Estero, Argentina.
            </p>

            <div
              className="bg-white w-24 h-24 rounded-full bg-[url('https://scontent.fcor10-3.fna.fbcdn.net/v/t1.6435-9/82893961_2910230095688646_6009259082236559360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE56SVia8cSXEHAND2W_rC_4bmaupk4YGzhuZq6mThgbOFBuLH1iPe_LeWzZmpD_5lzrO4JmH5bV9z7GZVs-KyC&_nc_ohc=5pxZJ6QJioMAX-u_3if&_nc_ht=scontent.fcor10-3.fna&oh=00_AfA319wpK2g9iU2OSFZX79wGdb9jr4jxM_NJ7a7wEGjxvQ&oe=64669C22')]
            no-repeat
            bg-center
            bg-cover
            "
            ></div>

            <p className="mt-5">
              I absolutely love web development and technology. I'm passionate
              about exploring new technologies and frameworks, and always
              striving to improve my skills in order to create more efficient
              and innovative solutions in web application development.
            </p>

            <div className="flex flex-col mt-10 gap-3 text-neutral-400">
              {/* faltanlinks */}
              <a className="border-[1px] w-[50%] p-2 rounded-xl border-neutral-700">
                follow me on Twitter
              </a>

              <a className="border-[1px] w-[50%] p-2 rounded-xl border-neutral-700">
                check out my Github
              </a>
            </div>
          </div>

          <footer className="mt-16 text-center text-neutral-600">
            <p className="text-sm">
              Inspiration from{" "}
              <a
                className="font-semibold"
                href="https://leerob.io"
                target="_blank"
              >
                Lee Robinson
              </a>
            </p>
          </footer>
        </Layout>
      </>
    </>
  );
}
