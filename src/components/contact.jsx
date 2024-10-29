import { motion } from "framer-motion";

const inputVariants = {
  rest: {
    background: "rgba(31, 41, 55, 1)", // Solid color (e.g., dark gray) when not focused
    scale: 1,
    boxShadow: "none",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)", // Subtle hover effect
  },
  focus: { 
    background: [
        "linear-gradient(to right, #f0f -200%, #0ff -100%, #f0f 0%,   #0ff 100%)",
        "linear-gradient(to right, #f0f -100%, #0ff 0%,    #f0f 100%, #0ff 200%)",
        "linear-gradient(to right, #f0f 0%,    #0ff 100%,  #f0f 200%, #0ff 300%)"
    ],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

const buttonVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.3)" },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.6), 0px 0px 40px rgba(0, 255, 255, 0.4)",
    background: "linear-gradient(135deg, #00c6ff, #0072ff)", // Neon gradient for hover
    transition: { duration: 0.3 },
  },
  pressed: { scale: 0.95 }
};

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.form 
        className="w-full flex flex-col items-center max-w-lg p-8 md:bg-gray-900 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="text-white text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Get in Touch
        </motion.h2>

        {/* Name Input */}
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-4 rounded-lg text-white text-lg bg-gray-800 border-none outline-none"
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileFocus="focus"
          transition={{ duration: 0.3 }}
        />

        {/* Email Input */}
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-4 rounded-lg text-white text-lg bg-gray-800 border-none outline-none"
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileFocus="focus"
          transition={{ duration: 0.3 }}
        />

        {/* Message Input */}
        <motion.textarea
          placeholder="Your Message"
          className="w-full mb-4 p-4 rounded-lg text-white text-lg bg-gray-800 border-none outline-none h-32 resize-none"
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileFocus="focus"
          transition={{ duration: 0.3 }}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-1/2 py-4 bg-purple-500 text-white font-bold text-xl rounded-lg"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
