import React from "react";
import Image from "next/image";
import Link from "next/link";


import {
  Calendar,
  Users,
  Briefcase,
  Code,
  User,
  Lock,
  ExternalLink,
  Github,
} from "lucide-react";

const ProjectShowcase = ({
  title,
  description,
  duration,
  team,
  industry,
  technologies=[],
  demoUser,
  demoAdmin,
  githubLink,
  liveLink,
  images = [],
  color,
}) => {
  return (
    <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <div className="group relative overflow-hidden">
        <div className="relative grid grid-cols-2 gap-4">
          {images.length > 0 && (
            <div className="col-span-2 z-10">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={600}
                height={400}
                className="rounded-lg h-96 object-cover overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          {images.length > 0 && (
            <div className="col-span-2 z-10">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={600}
                height={400}
                className="rounded-lg h-96 object-cover overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          {images.length > 0 && (
            <div className="col-span-2 z-10">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={600}
                height={400}
                className="rounded-lg h-96 object-cover overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <div className="mb-4 flex items-center justify-between">
            <h3
              className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} font-playfair`}
            >
              {title}
            </h3>
            <Link
              href={liveLink}
              className={`text-sm bg-gradient-to-r ${color} py-2 px-6 font-medium text-white rounded-xl border-2 border-gray-200`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-justify">{description}</p>
            <div>
              <h2 className="text-2xl my-2 tracking-wider font-semibold font-playfair text-gray-800">
                Project Details
              </h2>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Duration: {duration}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Team: {team}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Industry: {industry}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span>Technologies: {technologies.join(", ")}</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold font-playfair text-gray-800 my-2">
                  Demo User Account
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-5 h-5" />
                  <span>Username: {demoUser?.username || "adarsh"}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="w-5 h-5" />
                  <span>Password: {demoUser?.password}</span>
                </div>
              </div>
              {demoAdmin && (
                <div>
                  <h2 className="text-2xl font-semibold font-playfair text-gray-800 my-2">
                    Demo Admin Account
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-5 h-5" />
                    <span>Username: {demoAdmin?.username}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="w-5 h-5" />
                    <span>Password: {demoAdmin?.password}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="my-6 space-x-4">
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center bg-gradient-to-r ${color} py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center`}
              >
                <Github className="w-5 h-5 mr-2" />
                Link to Github
              </Link>
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center bg-gradient-to-r ${color} py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
