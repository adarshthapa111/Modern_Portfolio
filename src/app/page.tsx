"use client";
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";
import HorizentalScrolling from "./components/HorizentalScrolling";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen ">
        <header className="w-full bg-white shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-4">
              <h1 className="font-bold font-playfair text-4xl">
                Adarsh <span className="text-red-600">✓</span>
              </h1>
              <nav className="hidden md:flex space-x-6 pl-10">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                 Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Project
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-x-2">
  
              </div>
              <button className="bg-gray-900 rounded-md py-2 px-4 text-white font-medium hover:bg-gray-700 transition duration-300">
                <a
                  href="/File/CV.zip"
                  download
                  className="bg-gray-900 rounded-md py-2 px-4 text-white font-medium hover:bg-gray-700 transition duration-300"
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center md:-mt-24 bg-white min-h-screen">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="text-center md:text-left md:w-1/2 space-y-4">
              <p className="text-yellow-500 text-3xl text-center">👋</p>
              <p className="text-gray-700 text-xl">
                My name is Adarsh and I am recently completed BIT !
              </p>
              <h1 className="text-7xl font-bold leading-none bg-gray-900  text-transparent bg-clip-text text-gray-800 font-playfair tracking-wide z-10">
                Front-End React & Next Js{" "}
                <span className="text-red-600">Developer ✦</span>
              </h1>
              <p className="mt-4 text-gray-700 text-xl">
                from Kathmandu, Nepal.
              </p>
              <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4">
                <button className="bg-red-500 text-sm hover:bg-red-700 text-white py-3 px-6 rounded-md  transition duration-300">
                  You need a react developer
                </button>
                <button className="bg-gray-900 text-sm text-white py-3 px-6 rounded-md hover:bg-blue-400 transition duration-300">
                  You need a next developer
                </button>
              </div>
              <div className="flex space-x-6 pt-6">
                <Link
                  href="https://github.com/adarshthapa111"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <img src="/img/github.png" alt="" className="h-10" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adarsh-thapa-8393552b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <img src="/img/linkedin.png" alt="" className="h-10" />
                </Link>
                <Link
                  href="https://www.instagram.com/sawndesh_thapa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <img src="/img/instagram.png" alt="" className="h-10" />
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
              <div className="bg-gray-200 rounded-full bg-gradient-to- relative">
                <img
                  src="/img/hancy.png"
                  alt="Adarsh thapa"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
        <div>
          <HorizentalScrolling />
          <About />
          <Projects />
          <Skills />
          <GetInTouch />
        </div>

        <footer className="w-full bg-white shadow-md">
          <div className="max-w-6xl mx-auto flex justify-center items-center py-4 space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Behance
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Canva
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Loom
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

