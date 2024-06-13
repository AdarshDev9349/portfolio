import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home">
      <div className="herotext">
        <motion.h1
          className="Orginal"
          animate={{ x: 45 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Mine the Problem <br /> Craft the Solution
        </motion.h1>
        <motion.h1
          className="Wrapper"
          animate={{ x: 45 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Mine the Problem <br /> Craft the Solution
        </motion.h1>
      </div>
      {/* <h3 className="subtext">Hhehehehehehehe</h3> */}
      <div className="button-container">
        <button className="button2 register">Register Now</button>
        <Link to={"/sponsor-us"}>
          <button className="button1">Sponsor us</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
