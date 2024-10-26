

import Navbar from "./components/navbar";
import MainPage from "./components/hero";
import ProjectSection from "./components/project";

import "./index.css";
import Footer from "./components/footer";

const menuItems = [
  { href: "#overview", text: "Overview" },
  { href: "#stacks", text: "Stacks we offer" },
  { href: "#", text: "Sponsors" },
  { href: "#faq", text: "FAQ" },
];
function App() {


  return (

      <div className="App">
      
         
        
           
              
                <Navbar menuItems={menuItems} />
                <MainPage/>
                <ProjectSection/>
                  <Footer/>
            
           
   
      </div>
  
  );
}

export default App;
