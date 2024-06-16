"use client";
import { useState } from "react";

const About = () => {

 const [activeSection, setActiveSection] = useState("skills");


  const showAll = () => {
    setShowDiv(true);
  }
  return (
    <>
      <div>
      <section
          className="section w-full h-full p-4 lg:flex lg:px-10 lg:justify-between max-w-6xl mx-auto py-10 lg:py-20"
          id="AboutUs"
        >
          <div className="left-side flex justify-center">
            <h1 className="font-extrabold broder border-gray-400 bg-white rounded-sm border-8 py-32 px-16 sm:px-24 sm:py-40 text-4xl  text-center shadow-lg">
              My <br /> Study
            </h1>
          </div>
          <div className="right-side my-6 lg:w-1/2">
            <div className="text-sm font-medium w-fit py-2 px-4 bg-white shadow-md rounded-full my-3">
              About Adarsh
            </div>
            <p className="font-bold text-2xl font-playfair xl:text-3xl">
              Completed my 
              <span className="text-red-500"> Undergraduate ►</span>
            </p>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas
              deleniti ducimus, a cum perferendis sequi ipsa, consectetur
              facilis reiciendis necessitatibus voluptatum eos explicabo!
            </p>
            <div className="buttons my-2 flex space-x-2">
              <button
                className="skillBtn btn px-6 py-3 text-white bg-gradient-to-tr from-red-500 to-red-400 rounded-sm text-sm shadow-md hover:shadow-purple-400 lg:px-8 font-medium"
                type="button"
                onClick={() => setActiveSection("skills")}
              >
                Main Skills
              </button>
              <button
                className="educationBtn btn px-4 py-3 rounded-sm font-medium text-sm shadow-md shadow-blue-200 lg:px-8 bg-white hover:shadow-gray-400"
                type="button"
                onClick={() => setActiveSection("education")}
              >
                Education
              </button>
            </div>
            {activeSection === "skills" && (
              <div className="column-one flex flex-col space-y-5">
                <div className="row-1">
                  <div className="flex space-x-2 items-center">
                    <div className="dot border border-red-500 rounded-full">
                      <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                    </div>
                    <div className="right">
                      <div className="para">
                        <p className="font-semibold">2-project in UI/UX-Design</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm ml-6">I have created a full UI of restaurant and room rental system website with the help of figma.</p>
                </div>
                <div className="row-2">
                  <div className="flex space-x-2 items-center">
                    <div className="dot border border-red-500 rounded-full">
                      <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                    </div>
                    <div className="right">
                      <div className="para">
                        <p className="font-semibold">Full Restaurant Website</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm ml-6">I have design a full front-end & back-end of system.</p>
                </div>
                <div className="row-3">
                  <div className="flex space-x-2 items-center">
                    <div className="dot border border-red-500 rounded-full">
                      <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                    </div>
                    <div className="right">
                      <div className="para">
                        <p className="font-semibold">Hotel Room Rental System</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm ml-6">I have created a full front-end and back-end of system.</p>
                </div>
                <div className="buttons my-2">
                  <button
                    className="px-6 py-3 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-500 lg:px-8 font-bold"
                    type="submit"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            )}
            {activeSection === "awards" && (
              <div className="award-Div">
                <div className="flex flex-col space-y-5">
                  <div className="row-1">
                    <div className="flex space-x-2 items-center">
                      <div className="dot border border-red-500 rounded-full">
                        <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                      </div>
                      <div className="right">
                        <div className="para">
                          <p className="font-semibold">No awards</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm ml-6">There are no awards</p>
                  </div>
                  <div className="buttons my-2">
                    <button
                      className="px-6 py-3 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-500 lg:px-8 font-bold"
                      type="submit"
                    >
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "education" && (
              <div className="education-div">
                <div className="flex flex-col space-y-5">
                  <div className="row-1">
                    <div className="flex space-x-2 items-center">
                      <div className="dot border border-red-500 rounded-full">
                        <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                      </div>
                      <div className="right">
                        <div className="para">
                          <p className="font-semibold">Redar's Public High School</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm ml-6">I completed my lower level of school education.</p>
                  </div>
                  <div className="row-2">
                    <div className="flex space-x-2 items-center">
                      <div className="dot border border-red-500 rounded-full">
                        <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                      </div>
                      <div className="right">
                        <div className="para">
                          <p className="font-semibold">Shree Siddhababa Secondary school.</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm ml-6">Completed my secondary level of school education.</p>
                  </div>
                  <div className="row-3">
                    <div className="flex space-x-2 items-center">
                      <div className="dot border border-red-500 rounded-full">
                        <div className="dot h-1 w-1 rounded-full bg-black m-1"></div>
                      </div>
                      <div className="right">
                        <div className="para">
                          <p className="font-semibold">Herald College Kathmandu.</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm ml-6">Studying undergraduate in this college.</p>
                  </div>
                  <div className="buttons my-2">
                    <button
                      className="px-6 py-3 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-500 lg:px-8 font-bold"
                      type="submit"
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
    </>
  );
};

export default About;
