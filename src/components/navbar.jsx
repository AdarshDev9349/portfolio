
import logo from './logo/logo.svg'
const Navbar = () => {
 
  return (
    <nav className="navbar">
     
      <ul className='nav-menu'>
       <a href="" className="nav-logo  no-space"><img src={logo} alt="Logo" /></a>
     
        <li className="nav-item"><a href="" className="nav-link">Overview</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Stacks we offer</a></li>
       
        <li className="nav-item"><a href="#" className="nav-link">sponsors</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQ</a></li>
      </ul>
      <button>Contact us</button>
    </nav>
  );
};

export default Navbar;