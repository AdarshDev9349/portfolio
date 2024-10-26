import React from "react";
import { motion } from "framer-motion";
import logo1 from "./img/instagram.svg";
import logo2 from "./img/twitter.svg";
import logo3 from "./img/reddit.svg";
import logo4 from "./img/github.svg";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-14 border-y">
      
      <br></br>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="footer-content flex flex-col lg:flex-row justify-around items-center space-y-10 lg:space-y-0"
      >
        {/* Social Media Section */}
        <motion.div
          className="social flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="logo flex gap-6">
            <motion.img
              src={logo1}
              alt="Instagram"
              whileHover={{ scale: 1.2 }}
              className="w-8 h-8"
            />
            <motion.img
              src={logo2}
              alt="Twitter"
              whileHover={{ scale: 1.2 }}
              className="w-8 h-8"
            />
            <motion.img
              src={logo3}
              alt="Reddit"
              whileHover={{ scale: 1.2 }}
              className="w-8 h-8"
            />
            <motion.img
              src={logo4}
              alt="GitHub"
              whileHover={{ scale: 1.2 }}
              className="w-8 h-8"
            />
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="quick-links flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-3 text-center">
            <li>
              <a href="#" className="hover:text-teal-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">
               Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">
                Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          className="contact-us flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="text-center">
            <li><a href="mailto: adarshdev9349@gmail.com">Email: adarshdev9349@gmail.com</a></li>
            <li>Phone: 7907977205</li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
