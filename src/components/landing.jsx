
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home">
      
      <h1

      >
        Mine the problem Craft <br /> the Solution
      </h1>
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
