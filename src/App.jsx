import Navbar from "./components/navbar";
import MainPage from "./components/hero";
import ProjectSection from "./components/project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
      
        <Navbar menuItems={menuItems} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/project" element={<ProjectSection />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
