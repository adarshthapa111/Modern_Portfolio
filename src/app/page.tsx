"use client";
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";
import HorizentalScrolling from "./components/HorizentalScrolling";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

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
              <nav className="hidden md:flex space-x-6 pl-10 items-center">
                <a
                  href="#home"
                  className="hover:text-gray-900 transition duration-300 bg-black p-2 text-sm rounded-lg text-gray-100"
                >
                  Home
                </a>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer"
                >
                  Skills
                </ScrollLink>
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

        <main
          className="flex flex-col items-center justify-center md:-mt-24 bg-white min-h-screen"
          id="home"
        >
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="text-center md:text-left md:w-1/2 space-y-4">
              {/* <span className="text-yellow-500 text-3xl text-center">👋</span> */}
              <p className="text-gray-700 text-md">
                👋 My name is Adarsh and I am recently completed BIT !
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
          <section id="tools">
            <HorizentalScrolling />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="getintouch">
            <GetInTouch />
          </section>
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
                href="https://www.linkedin.com/in/adarsh-thapa-8393552b0/"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                {/* <Image className="w-5 h-5" /> */}
                <Image
                  src="/img/dark_linkedIn.png"
                  width={200}
                  height={200}
                  className="h-8 w-8 object-contain object-center"
                  alt="Linked In"
                />
              </Link>
              <Link
                href="https://github.com/adarshthapa111"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/img/dark_github.png"
                  width={200}
                  height={200}
                  className="h-8 w-8 object-contain object-center"
                  alt="Github"
                />
              </Link>
              <Link
                href="https://www.instagram.com/sawndesh_thapa/"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/img/dark_instagram.png"
                  width={200}
                  height={200}
                  className="h-8 w-8 object-contain object-center"
                  alt="dark_instagram.png"
                />
              </Link>
              <Link
                href="https://mail.google.com/mail/u/0/#drafts?compose=GTvVlcSGLrXWhZRsjpCQVfqwzMQPfRfwbxFrVnzbSTMGbCNJZsKdgJvNZPMTGqNsgKHDbZLjvNKsv"
                className="hover:text-gray-500 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/img/dark_mail.png"
                  width={200}
                  height={200}
                  className="h-8 w-8 object-contain object-center hover:border"
                  alt="Gmail"
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
