import React from "react";
import { motion } from "framer-motion";

// JSON data for the projects
const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive and interactive personal portfolio built using React and Tailwind CSS.",
    github: "https://github.com/yourname/portfolio",
    demo: "https://your-portfolio-demo.com"
  },
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with user authentication and payment gateway.",
    github: "https://github.com/yourname/ecommerce-app",
    demo: "https://ecommerce-demo.com"
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecast app built using React and OpenWeather API.",
    github: "https://github.com/yourname/weather-app",
    demo: "https://weather-demo.com"
  }
];

const ProjectCard = ({ title, description, github, demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" max-w-sm bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
    >
      <div className="h-[200px] flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
        <p className="text-gray-400 mb-6 px-4">{description}</p>
        <div className="flex justify-around">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-200 font-semibold"
          >
            GitHub Repo
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-200 font-semibold"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};
const ProjectSection = () => {
    return (
      <div className="min-h-screen bg-black text-white py-16 flex justify-center">
        <div className="w-full max-w-6xl px-4">
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
