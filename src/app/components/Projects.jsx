"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  BriefcaseIcon,
  CodeIcon,
  UsersIcon,
  UserIcon,
  LockIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "lucide-react";

const projects = [
  {
    id: "khanaau",
    title: "Khana Aau",
    description:
      "A custom web application for a restaurant featuring online ordering, reservation system, and admin dashboard.",
    images: ["/img/khanaaau.png", "/img/khanaaau1.png", "/img/khanaaau2.png"],
    details: {
      duration: "3 months",
      team: "Alone",
      industry: "Hospitality",
      technologies: "HTML, Tailwind CSS, React Js, Firebase, Node Js",
    },
    demoAccounts: {
      user: { username: "sandesh@gmail.com", password: "Sandesh@1234" },
      admin: { username: "adarsh@gmail.com", password: "adarsh1234" },
    },
    links: {
      github: "https://github.com/adarshthapa111/Restaurant_Management_Website",
      demo: "https://khanaaau.vercel.app/",
    },
    color: "from-orange-500 to-red-500",
  },
  {
    id: "hamrofurniture",
    title: "Hamro Furniture",
    description:
      "An e-commerce web application for a leading furniture company with advanced product management tools.",
    images: [
      "/img/furniture.png",
      "/img/furniture2.png",
      "/img/furniture3.png",
    ],
    details: {
      duration: "1.5 months",
      team: "Alone",
      industry: "E-commerce",
      technologies: "HTML, Tailwind CSS, Next Js, Supabase, Firebase",
    },
    demoAccounts: {
      user: { username: "san@gmail.com", password: "san1234" },
    },
    links: {
      github: "https://github.com/adarshthapa111/Furniture-Website",
      demo: "https://hamrofurniture.vercel.app/",
    },
    color: "from-gray-500 to-slate-500",
  },
  {
    id: "bookmyroom",
    title: "Book My Room",
    description:
      "A hotel room booking application with user authentication and room management features.",
    images: [
      "/img/bookmyroom.png",
      "/img/bookmyroom2.png",
      "/img/bookmyroom1.png",
    ],
    details: {
      duration: "2 months",
      team: "Alone",
      industry: "Tours and Travel",
      technologies: "HTML, Tailwind CSS, Next Js, Supabase, Firebase",
    },
    demoAccounts: {
      user: { username: "sandesh@gmail.com", password: "Sandesh@1234" },
    },
    links: {
      github: "https://github.com/adarshthapa111/Hotel_Room_Rental_System",
      demo: "https://showmeroom.vercel.app/",
    },
    color: "from-purple-500 to-blue-500",
  },
];

export default function Component() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            My Overall Projects
          </span>
        </h1>

        <div className="w-full">
          <div className="flex justify-center mb-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-sm  transition-colors duration-200 ease-in-out
                  ${
                    selectedProject.id === project.id
                      ? "bg-gray-400 border border-gray-200 shadow-md text-gray-50"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg border shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <motion.h2
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent mb-4`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedProject.title}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-gray-600">{selectedProject.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Project Details
                    </h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CalendarIcon className="w-4 h-4" />
                        <span>
                          Duration: {selectedProject.details.duration}
                        </span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <UsersIcon className="w-4 h-4" />
                        <span>Team: {selectedProject.details.team}</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>
                          Industry: {selectedProject.details.industry}
                        </span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CodeIcon className="w-4 h-4" />
                        <span>
                          Technologies: {selectedProject.details.technologies}
                        </span>
                      </li>
                    </ul>
                  </div>
                  {selectedProject.demoAccounts && (
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Demo Accounts
                      </h3>
                      {Object.entries(selectedProject.demoAccounts).map(
                        ([type, account]) => (
                          <div key={type} className="space-y-1">
                            <h4 className="font-medium capitalize text-gray-700">
                              {type} Account
                            </h4>
                            <p className="flex items-center gap-2 text-gray-600">
                              <UserIcon className="w-4 h-4" />
                              <span>{account.username}</span>
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">
                              <LockIcon className="w-4 h-4" />
                              <span>{account.password}</span>
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </motion.div>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedProject.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`relative overflow-hidden rounded-lg ${
                        index === 0 ? "col-span-2" : "col-span-1"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full border border-gray-200 object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-between flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <GithubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r ${selectedProject.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
