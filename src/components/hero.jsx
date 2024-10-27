import React from "react";
import { motion } from "framer-motion";
import profilePic from "/adarsh.jpg";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10">
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left Side - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <img
            src={profilePic}
            alt="Adarsh Dev"
            className=" w-48 h-48 md:w-[350px] md:h-[270px] border-4 border-gray-700 shadow-lg"
          />
        </motion.div>

        {/* Right Side - Introduction Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            I am <span className="text-teal-400">Adarsh Dev</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            A passionate <span className="text-teal-400">Web Developer</span> who
            loves building interactive and modern web applications.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Specialized in{" "}
            <span className="text-teal-400">React, Tailwind CSS</span> and
            crafting beautiful digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;
