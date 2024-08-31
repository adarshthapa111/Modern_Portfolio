"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
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
    // {
    //   id: "awards",
    //   title: "Awards",
    //   icon: Award,
    //   color: "from-yellow-500 to-red-500",
    // },
  ];

  const skills = [
    {
      title: "2-project in UI/UX-Design",
      description:
        "I have created a full UI of restaurant and room rental system website with the help of figma.",
    },
    {
      title: "Full Stack Restaurant Management System",
      description: "I have designed a full front-end & back-end of system.",
    },
    {
      title: "Full Stack Furniture Website",
      description: "I have created a full front-end and back-end of system.",
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
      description: "Completed undergraduate in this college.",
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

export default About;
