import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();

  const titles = {
    "/": "Lautaro Delgado",
    "/projects": "Projects | Lautaro Delgado",
    "/about": "About | Lautaro Delgado",
    "/contact": "Contact | Lautaro Delgado",
  };

  return (
    <>
      <Head>
        <title>{titles[router.pathname]}</title>
      </Head>
      <div className="p-5 flex flex-col md:flex-row mx-4 mt-8 md:mt-20">
        <div>
          <Navbar />
        </div>
        <main className="flex-auto min-w-0 md:mt-0 flex flex-col px-2 mt-6 md:px-0">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
