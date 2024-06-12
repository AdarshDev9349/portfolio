import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home">
      
      <motion.h1
        animate={{ x: 45 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Mine the problem Craft <br /> the Solution
      </motion.h1>
      <p>Hackathon </p>
      <div className="button-container">
        <button className="button2 register">Register Now</button>
        <Link to={"/sponsor-us"}>
          {" "}
          <button className="button1">Sponsor us</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
