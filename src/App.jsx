import { useState } from "react";

import Navbar from "./components/navbar";
import Homepage from "./components/landing";
import Hackathon from "./components/hackathon";
import renvnza from "./components/logo/renvnza.svg";
import mulearn from "./components/logo/mulearn.svg";
import gdsc from "./components/logo/gdsc.png";
import ieee from "./components/logo/ieee.png";
import Timeline from "./components/timeline";
import Sponsorus from "./sponsorus";
import FAQ from "./components/faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/footer";
const menuItems = [
  { href: "#overview", text: "Overview" },
  { href: "#", text: "Stacks we offer" },
  { href: "#", text: "Sponsors" },
  { href: "#faq", text: "FAQ" },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bgimage"> </div>
                <Navbar menuItems={menuItems} />
               
                <Homepage/>
               <section id="overview" style={{paddingTop:'70px'}}> <Hackathon /></section>
                <div style={{display:'flex',color:'white',justifyContent:'center'}}>
                  <h1 style={{fontFamily:'bakbak one',fontWeight:'100',fontSize:'50px'  }}>Club Collaborators</h1>
                </div>
                <div className="logos">
                  <img src={renvnza} alt="Renvnza" />
                  <img src={mulearn} alt="Mulearn ucek" />
                  <img src={gdsc} alt="GDSC Ucek" />
                  <img src={ieee} alt="IEEE Ucek" />
                </div>
                  <Timeline />
                 <section id="faq"style={{paddingTop:'260px'}}> <FAQ/></section>
                  <Footer/>
                
              </>
            }
          />
          <Route path="/sponsor-us" element={<Sponsorus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
