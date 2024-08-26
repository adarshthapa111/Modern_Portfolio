"use client";
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";
import HorizentalScrolling from "./components/HorizentalScrolling";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <>
        <MainSection />
      </>
      <div>
        <section id="tools">
          <HorizentalScrolling />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
          {/* <ProjectShowcase/> */}
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="getintouch">
          <GetInTouch />
        </section>
      </div>

      <>
        <Footer />
      </>
    </>
  );
}
