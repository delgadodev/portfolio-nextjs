import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "Home",
  },

  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/contact": {
    name: "Contact",
  },
};

const Navbar = () => {
  let pathname = usePathname();

  return (
    <aside className="md:flex-shrink-0 md:px-0 -mx-4 md:mx-0 md:w-[150px]">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start">
          <div className="flex flex-row w-[100%] justify-between items-center">
            <h1 className="text-3xl font-black">L</h1>
            <h1 className="font-black text-3xl md:hidden ">C</h1>
          </div>
        </div>

        <LayoutGroup>
          <nav className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10 mb-2 mt-2 md:mt-0 md:flex-col">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    href={path}
                    key={path}
                    className="transition-all flex align-middle "
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}

                      {pathname === path && (
                        <motion.div
                          className="absolute inset-0 bg-[#333333] rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="md:flex px-4 mt-10 hidden">
              <h1>C</h1>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
};

export default Navbar;
