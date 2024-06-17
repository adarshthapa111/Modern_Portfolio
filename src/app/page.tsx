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
              <div className="space-x-2"></div>
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
                  <Image
                    src="/img/github.png"
                    alt=""
                    className="h-10 w-10"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adarsh-thapa-8393552b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <Image
                    src="/img/linkedin.png"
                    alt=""
                    className="h-10 w-10"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/sawndesh_thapa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <Image
                    src="/img/instagram.png"
                    alt=""
                    className="h-10 w-10"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
              <div className="bg-gray-200 rounded-full bg-gradient-to- relative">
                <Image
                  src="/img/hancy.png"
                  alt="Adarsh thapa"
                  className="h-96 w-96 rounded-full object-cover"
                  width={800}
                  height={800}
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

        <footer className="bg-white text-gray-700 py-8 px-4 md:px-6 shadow-md">
          <div className="container mx-auto max-w-6xl flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-bold font-playfair">Adarsh Thapa</h3>
              <p className="text-sm font-medium">Frontend Developer</p>
              <p className="text-sm mt-2">
                Passionate about building beautiful and functional web
                applications.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <GitlabIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <MailIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
