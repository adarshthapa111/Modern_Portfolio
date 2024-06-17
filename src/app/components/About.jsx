"use client";
import { useState } from "react";
import Card from "./Card";

const About = () => {
  const [activeSection, setActiveSection] = useState("skills");


  return (
    <div className="bg-gray-50 py-12 min-h-screen my-auto">
      <section className="section p-6 lg:flex max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="my-6 w-full">
          <div className="text-sm font-medium w-fit py-2 px-4 bg-white shadow-md rounded-full my-3 text-gray-700">
            About Adarsh
          </div>
          <p className="font-bold text-2xl font-playfair xl:text-4xl text-gray-800">
            Completed my <span className="text-red-500">Undergraduate ►</span>
          </p>
          <p className="text-sm text-justify text-gray-600 mt-2">
            I am Adarsh Thapa, a recent graduate from Herald College Kathmandu,
            where I completed my undergraduate studies. With a passion for
            technology and a drive to continuously learn and grow, my goal is to
            become a proficient full-stack developer. During my academic
            journey, I developed a strong foundation in various programming
            languages and web development technologies, which has fueled my
            ambition to excel in the field of software development. I am
            constantly seeking opportunities to expand my knowledge and enhance
            my skills, enabling me to create innovative and efficient solutions.
          </p>
          <div className="buttons my-4 flex space-x-3">
            <button
              className={`skillBtn btn px-6 py-3 rounded-sm text-sm shadow-md lg:px-8 font-medium ${
                activeSection === "skills"
                  ? "bg-gradient-to-tr from-gray-600 to-gray-800 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
              type="button"
              onClick={() => setActiveSection("skills")}
            >
              Main Skills
            </button>
            <button
              className={`educationBtn btn px-6 py-3 rounded-sm font-medium text-sm shadow-md lg:px-8 ${
                activeSection === "education"
                  ? "bg-gradient-to-tr from-red-500 to-red-400 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
              type="button"
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
          </div>
          {activeSection === "skills" && (
            <div className="column-one flex flex-col space-y-5 mt-4">
              <div className="row-1">
                <div className="flex space-x-3 items-center">
                  <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
                  </div>
                  <div className="right">
                    <p className="font-semibold text-gray-800">
                      2-project in UI/UX-Design
                    </p>
                  </div>
                </div>
                <p className="text-sm ml-6 text-gray-600">
                  I have created a full UI of restaurant and room rental system
                  website with the help of figma.
                </p>
              </div>
              <div className="row-2">
                <div className="flex space-x-3 items-center">
                  <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
                  </div>
                  <div className="right">
                    <p className="font-semibold text-gray-800">
                      Full Restaurant Website
                    </p>
                  </div>
                </div>
                <p className="text-sm ml-6 text-gray-600">
                  I have designed a full front-end & back-end of system.
                </p>
              </div>
              <div className="row-3">
                <div className="flex space-x-3 items-center">
                  <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
                  </div>
                  <div className="right">
                    <p className="font-semibold text-gray-800">
                      Hotel Room Rental System
                    </p>
                  </div>
                </div>
                <p className="text-sm ml-6 text-gray-600">
                  I have created a full front-end and back-end of system.
                </p>
              </div>
              <div className="buttons my-4">
                <button
                  className="px-6 py-3 border-2 border-gray-800 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-gray-900"
                  type="button"
                >
                  Download CV
                </button>
              </div>
            </div>
          )}
          {activeSection === "education" && (
            <div className="education-div mt-4">
              <div className="flex flex-col space-y-5">
                <div className="row-1">
                  <div className="flex space-x-3 items-center">
                    <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="right">
                      <p className="font-semibold text-gray-800">
                        Redar's Public High School
                      </p>
                    </div>
                  </div>
                  <p className="text-sm ml-6 text-gray-600">
                    I completed my lower level of school education.
                  </p>
                </div>
                <div className="row-2">
                  <div className="flex space-x-3 items-center">
                    <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="right">
                      <p className="font-semibold text-gray-800">
                        Shree Siddhababa Secondary School
                      </p>
                    </div>
                  </div>
                  <p className="text-sm ml-6 text-gray-600">
                    Completed my secondary level of school education.
                  </p>
                </div>
                <div className="row-3">
                  <div className="flex space-x-3 items-center">
                    <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="right">
                      <p className="font-semibold text-gray-800">
                        Herald College Kathmandu
                      </p>
                    </div>
                  </div>
                  <p className="text-sm ml-6 text-gray-600">
                    Studying undergraduate in this college.
                  </p>
                </div>
                <div className="buttons my-4">
                  <button
                    className="px-6 py-3 border-2 border-red-500 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-red-500"
                    type="button"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeSection === "awards" && (
            <div className="award-div mt-4">
              <div className="flex flex-col space-y-5">
                <div className="row-1">
                  <div className="flex space-x-3 items-center">
                    <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="right">
                      <p className="font-semibold text-gray-800">No awards</p>
                    </div>
                  </div>
                  <p className="text-sm ml-6 text-gray-600">
                    There are no awards
                  </p>
                </div>
                <div className="buttons my-4">
                  <button
                    className="px-6 py-3 border-2 border-red-500 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-red-500"
                    type="button"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
