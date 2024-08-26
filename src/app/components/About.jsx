// "use client";
// import { useState } from "react";

// const About = () => {
//   const [activeSection, setActiveSection] = useState("skills");

//   return (
//     <div className="bg-gray-50 py-12 min-h-screen my-auto">
//       <section className="section p-6 lg:flex max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
//         <div className="my-6 w-full">
//           <div className="text-sm font-medium w-fit py-2 px-4 bg-white shadow-md rounded-full my-3 text-gray-700">
//             About Adarsh
//           </div>
//           <p className="font-bold text-2xl font-playfair xl:text-4xl text-gray-800">
//             Completed my <span className="text-red-500">Undergraduate &#x25BA;</span>
//           </p>
//           <p className="text-sm text-justify text-gray-600 mt-2">
//             I am Adarsh Thapa, a recent graduate from Herald College Kathmandu,
//             where I completed my undergraduate studies. With a passion for
//             technology and a drive to continuously learn and grow, my goal is to
//             become a proficient full-stack developer. During my academic
//             journey, I developed a strong foundation in various programming
//             languages and web development technologies, which has fueled my
//             ambition to excel in the field of software development. I am
//             constantly seeking opportunities to expand my knowledge and enhance
//             my skills, enabling me to create innovative and efficient solutions.
//           </p>
//           <div className="buttons my-4 flex space-x-3">
//             <button
//               className={`skillBtn btn px-6 py-3 rounded-sm text-sm shadow-md lg:px-8 font-medium ${
//                 activeSection === "skills"
//                   ? "bg-gradient-to-tr from-gray-600 to-gray-800 text-white"
//                   : "bg-white text-gray-700 border border-gray-300"
//               }`}
//               type="button"
//               onClick={() => setActiveSection("skills")}
//             >
//               Main Skills
//             </button>
//             <button
//               className={`educationBtn btn px-6 py-3 rounded-sm font-medium text-sm shadow-md lg:px-8 ${
//                 activeSection === "education"
//                   ? "bg-gradient-to-tr from-red-500 to-red-400 text-white"
//                   : "bg-white text-gray-700 border border-gray-300"
//               }`}
//               type="button"
//               onClick={() => setActiveSection("education")}
//             >
//               Education
//             </button>
//           </div>
//           {activeSection === "skills" && (
//             <div className="column-one flex flex-col space-y-5 mt-4">
//               <div className="row-1">
//                 <div className="flex space-x-3 items-center">
//                   <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
//                     <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
//                   </div>
//                   <div className="right">
//                     <p className="font-semibold text-gray-800">
//                       2-project in UI/UX-Design
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-sm ml-6 text-gray-600">
//                   I have created a full UI of restaurant and room rental system
//                   website with the help of figma.
//                 </p>
//               </div>
//               <div className="row-2">
//                 <div className="flex space-x-3 items-center">
//                   <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
//                     <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
//                   </div>
//                   <div className="right">
//                     <p className="font-semibold text-gray-800">
//                       Full Restaurant Website
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-sm ml-6 text-gray-600">
//                   I have designed a full front-end & back-end of system.
//                 </p>
//               </div>
//               <div className="row-3">
//                 <div className="flex space-x-3 items-center">
//                   <div className="dot h-4 w-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
//                     <div className="dot h-2 w-2 rounded-full bg-gray-900"></div>
//                   </div>
//                   <div className="right">
//                     <p className="font-semibold text-gray-800">
//                       Hotel Room Rental System
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-sm ml-6 text-gray-600">
//                   I have created a full front-end and back-end of system.
//                 </p>
//               </div>
//               <div className="buttons my-4">
//                 <button
//                   className="px-6 py-3 border-2 border-gray-800 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-gray-900"
//                   type="button"
//                 >
//                   Download CV
//                 </button>
//               </div>
//             </div>
//           )}
//           {activeSection === "education" && (
//             <div className="education-div mt-4">
//               <div className="flex flex-col space-y-5">
//                 <div className="row-1">
//                   <div className="flex space-x-3 items-center">
//                     <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
//                       <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
//                     </div>
//                     <div className="right">
//                       <p className="font-semibold text-gray-800">
//                         Reader&#39;s Public High School
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-sm ml-6 text-gray-600">
//                     I completed my lower level of school education.
//                   </p>
//                 </div>
//                 <div className="row-2">
//                   <div className="flex space-x-3 items-center">
//                     <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
//                       <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
//                     </div>
//                     <div className="right">
//                       <p className="font-semibold text-gray-800">
//                         Shree Siddhababa Secondary School
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-sm ml-6 text-gray-600">
//                     Completed my secondary level of school education.
//                   </p>
//                 </div>
//                 <div className="row-3">
//                   <div className="flex space-x-3 items-center">
//                     <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
//                       <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
//                     </div>
//                     <div className="right">
//                       <p className="font-semibold text-gray-800">
//                         Herald College Kathmandu
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-sm ml-6 text-gray-600">
//                     Studying undergraduate in this college.
//                   </p>
//                 </div>
//                 <div className="buttons my-4">
//                   <button
//                     className="px-6 py-3 border-2 border-red-500 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-red-500"
//                     type="button"
//                   >
//                     Download CV
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//           {activeSection === "awards" && (
//             <div className="award-div mt-4">
//               <div className="flex flex-col space-y-5">
//                 <div className="row-1">
//                   <div className="flex space-x-3 items-center">
//                     <div className="dot h-4 w-4 border-2 border-red-500 rounded-full flex items-center justify-center">
//                       <div className="dot h-2 w-2 rounded-full bg-red-500"></div>
//                     </div>
//                     <div className="right">
//                       <p className="font-semibold text-gray-800">No awards</p>
//                     </div>
//                   </div>
//                   <p className="text-sm ml-6 text-gray-600">
//                     There are no awards
//                   </p>
//                 </div>
//                 <div className="buttons my-4">
//                   <button
//                     className="px-6 py-3 border-2 border-red-500 bg-white rounded-sm text-sm shadow-md hover:shadow-lg lg:px-8 font-bold text-red-500"
//                     type="button"
//                   >
//                     Download CV
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const ModernAbout = () => {
  const [activeSection, setActiveSection] = useState("skills");

  const sections = [
    {
      id: "skills",
      title: "Main Skills",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "awards",
      title: "Awards",
      icon: Award,
      color: "from-yellow-500 to-red-500",
    },
  ];

  const skills = [
    {
      title: "2-project in UI/UX-Design",
      description:
        "I have created a full UI of restaurant and room rental system website with the help of figma.",
    },
    {
      title: "Full Restaurant Website",
      description: "I have designed a full front-end & back-end of system.",
    },
    {
      title: "Hotel Room Rental System",
      description: "I have created a full front-end and back-end of system.",
    },
  ];

  const education = [
    {
      title: "Reader's Public High School",
      description: "I completed my lower level of school education.",
    },
    {
      title: "Shree Siddhababa Secondary School",
      description: "Completed my secondary level of school education.",
    },
    {
      title: "Herald College Kathmandu",
      description: "Studying undergraduate in this college.",
    },
  ];

  const awards = [{ title: "No awards", description: "There are no awards" }];

  const contentMap = {
    skills,
    education,
    awards,
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold mb-6">
              About Adarsh
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Completed my{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                Undergraduate ✦
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              I am Adarsh Thapa, a recent graduate from Herald College
              Kathmandu, where I completed my undergraduate studies. With a
              passion for technology and a drive to continuously learn and grow,
              my goal is to become a proficient full-stack developer. During my
              academic journey, I developed a strong foundation in various
              programming languages and web development technologies, which has
              fueled my ambition to excel in the field of software development.
              I am constantly seeking opportunities to expand my knowledge and
              enhance my skills, enabling me to create innovative and efficient
              solutions.
            </p>

            <div className="flex space-x-4 mb-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {contentMap[activeSection].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${
                      sections.find((s) => s.id === activeSection).color
                    } flex items-center justify-center`}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <button className="mt-8 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAbout;
