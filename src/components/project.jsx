import React from "react";
import { motion } from "framer-motion";

// JSON data for the projects
const projects = [
  {
    title: "Tech Fest Website",
    description: "A responsive and interactive website made with react",
    github: "https://github.com/adarshdev9349/mulearn-renvnza",
    demo: "https://mulearn.renvnza.in"
  },
  {
    title: "Hackathon website",
    description: "A responsive and interactive website made with react and tailwind css",
    github: "https://github.com/adarshdev9349/mulearn-hackathon",
    demo: "https://mulearn-hackathon.vercel.app"
  },
  {
    title: "Fighub",
    description: "A website made with django and figma api for designers to showcase their work.",
    github: "https://github.com/adarshdev9349/fig_hub",
    demo: "https://designers-hub.vercel.app"
  }
];

const ProjectCard = ({ title, description, github, demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm w-full bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
    >
      <div className="flex flex-col justify-center p-4">
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>

        {/* Live Preview (iframe with scaling) */}
        {demo && (
          <div className="relative mb-4" style={{ paddingTop: '56.25%' }}>
           
              <iframe
                src={demo}
                title={`${title} Preview`}
                width="1024" // Actual desktop width
                height="700" // Actual desktop height
                style={{
                  border: "none",
                  transform: "scale(0.25)", // Scale it down for desktop view
                  transformOrigin: "top left", // Keep the desktop view scaled
                  overflow: "hidden", // Prevent scroll bars
                  position:'absolute',
                  top:0,
                  left:30,
                  
                }}
                scrolling="no"
                className="rounded-md"
              ></iframe>
            </div>
          
        )}

        {/* Description */}
        <p className="text-gray-400 mb-6 px-4 text-center">{description}</p>

        {/* Links */}
        <div className="flex justify-around mb-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-200 font-semibold"
          >
            GitHub Repo
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-200 font-semibold"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex py-24 items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
