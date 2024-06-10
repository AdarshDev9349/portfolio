import image from './images/bg.svg'
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className="home">
      <img src={image} alt="Background" className="background-image" />
      <div className="button-container">
        <button className="button2 register">Register Now</button>
       <Link to={'/sponsor-us'}> <button className="button1">Sponsor us</button></Link>
      </div>
    </div>
  );
};

export default Homepage;
