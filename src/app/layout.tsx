import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

import clsx from "clsx";
import Navbar from "@/components/common/navbar/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lautaro Delgado - Frontend Developer",
  description:
    "I'm a frontend developer based in Santiago del Estero, Argentina. I specialize in building websites and web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={clsx(
          inter.className,
          "bg-background text-pretty antialiased scroll-smooth"
        )}
      >
        <Navbar />
        <div className="md:grid lg:grid-cols-[1fr,3fr]">
          <div className="w-[320px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
