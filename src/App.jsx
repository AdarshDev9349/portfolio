import { useState } from 'react'
import Navbar from './components/navbar'
import Homepage from './components/landing'
import Hackathon from './components/hackathon'
import renvnza from './components/logo/renvnza.svg'
import mulearn from './components/logo/mulearn.svg'
import gdsc from './components/logo/gdsc.png'
import ieee from './components/logo/ieee.png'
import Timeline from './components/timeline'
import Sponsorus from './sponsorus'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
const menuItems = [
  { href: '', text: 'Overview' },
  { href: '#', text: 'Stacks we offer' },
  { href: '#', text: 'Sponsors' },
  { href: '#', text: 'FAQ' }
];
function App() {
  const [count, setCount] = useState(0)


return (
  <Router>
    <div className="App">
     
        <Routes>
          <Route path="/" element={
            <>
           <Navbar menuItems={menuItems}/>
           <Homepage/>
           <Hackathon/>
       <div className="logos">
       <img src={renvnza} alt="Renvnza" />
       <img src={mulearn} alt="Mulearn ucek" />
       <img src={gdsc}  alt="GDSC Ucek" />
       <img src={ieee} alt="IEEE Ucek" />
       </div>
 
       <Timeline/>
            </>
          } />
          <Route path="/sponsor-us" element={<Sponsorus />} />
        </Routes>
     
    </div>
  </Router>
);
}

export default App;


