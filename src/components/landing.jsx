import image from './images/bg.svg'

const Homepage = () => {
  return (
    <div className="home">
      <img src={image} alt="Background" className="background-image" />
      <div className="button-container">
        <button className="button2 register">Register Now</button>
        <button className="button1">Sponsor us</button>
      </div>
    </div>
  );
};

export default Homepage;
