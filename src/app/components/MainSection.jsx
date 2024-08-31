import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Socialicons from "./Socialicons";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const MainSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tools = [
    { name: "Figma", imagePath: "/img/tailwind.png" },
    { name: "Sketch", imagePath: "/img/next.jpeg" },
    { name: "XD", imagePath: "/img/react.png" },
  ];

  return (
    <>
      <Head>
        <title>Adarsh Thapa - Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Adarsh Thapa is a frontend developer with 6 months of experience, specializing in UI/UX design and full-stack development."
        />
        <meta
          name="keywords"
          content="Adarsh Thapa, Frontend Developer, UI/UX Design, Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.adarshthapa.com" />
      </Head>
      <div className="min-h-screen">
        <div className="bg-white min-h-screen">
          <header className="w-full bg-white border-b border-gray-400 max-w-7xl mx-auto sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">
                  Adarsh{" "}
                  <span className="text-red-500" aria-hidden="true">
                    ⚡︎
                  </span>
                </span>
              </div>
              <nav className="hidden md:flex space-x-6 items-center">
                {["Home", "Tools", "About", "Projects"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Let&apos;s chat
              </button>
              <button
                className="md:hidden text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </header>

          {isMenuOpen && (
            <nav className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center">
              {["Home", "Works", "About", "Projects"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-gray-600 hover:text-black transition duration-300 mb-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button
                className="mt-8 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s chat
              </button>
            </nav>
          )}

          <main className="flex flex-col items-center justify-center bg-white min-h-screen">
            <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-12">
              <div className="text-left lg:w-1/2 space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none text-black">
                  <span className="text-border-black text-gray-50">Hi!</span> I
                  Am
                  <span className="block rounded-md text-white px-2 mt-2 w-fit bg-gradient-to-r from-blue-500 to-purple-500">
                    Frontend Dev
                  </span>
                </h1>
                <h2 className="text-5xl text-white sm:text-6xl md:text-7xl font-extrabold leading-none">
                  <span className="text-gray-800">Adarsh Thapa</span>{" "}
                </h2>
                <p className="text-gray-700 text-xl max-w-md">
                  Working as a Frontend Dev for 6 months
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-lg">
                    Hire Me
                  </button>
                  <button className="border-2 border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition duration-300">
                    Projects →
                  </button>
                </div>
                <div className="flex flex-wrap gap-8 pt-8">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md border text-center">
                    <h3 className="text-4xl font-bold text-black">3+</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Months Experience
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md border">
                    <h3 className="text-4xl font-bold text-black text-center">
                      5+
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">Projects Done</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 shadow-md w-fit px-6 rounded-lg">
                  <Socialicons />
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-[50px] overflow-hidden bg-gradient-to-br from-gray-100 to-blue-100">
                  <Image
                    src="/img/bg.png"
                    alt="Adarsh Thapa - Frontend Developer"
                    width={500}
                    height={500}
                    className="object-contain absolute"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-black rounded-full p-2 animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`absolute bg-white rounded-full border p-4 shadow-lg ${
                      index === 0
                        ? "-top-4 -right-4"
                        : index === 1
                        ? "top-1/2 -left-4"
                        : "-bottom-4 right-1/4"
                    }`}
                  >
                    <Image
                      src={tool.imagePath}
                      alt={`${tool.name} icon`}
                      width={50}
                      height={50}
                      className="rounded-full animate-pulse"
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="w-full text-gray-800 py-16">
              <div className="max-w-7xl mx-auto px-6 border p-8 rounded-2xl">
                <div className="flex p-2 flex-col md:flex-row justify-between items-center mb-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-4 md:mb-0 text-gray-800">
                      Project Statistics 2024
                    </h2>
                    <svg
                      className="w-96 h-6"
                      viewBox="30 0 120 10"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 "
                        stroke="black"
                        fill="transparent"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg">
                    Know More
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "UI/UX Design", count: 2 },
                    { title: "Full Stack", count: 4 },
                    { title: "Frontend Development", count: 4 },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center"
                    >
                      <h3 className="text-2xl mb-2">{item.title}</h3>
                      <span className="text-5xl font-bold text-yellow-400">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainSection;
