
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home">
      <div className="herotext">
        <h1
          className="Orginal"

        >
          Mine the Problem <br /> Craft the Solution
        </h1>
        <h1
          className="Wrapper"

        >
          Mine the Problem <br /> Craft the Solution
        </h1>
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
