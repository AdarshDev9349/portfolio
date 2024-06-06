import { useState } from 'react'
import Navbar from './components/navbar'
import Homepage from './components/landing'
import Hackathon from './components/hackathon'
import renvnza from './components/logo/renvnza.svg'
import mulearn from './components/logo/mulearn.svg'
import gdsc from './components/logo/gdsc.png'
import ieee from './components/logo/ieee.png'
import Timeline from './components/timeline'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="app">
  <Navbar/>
  <Homepage/>
  <Hackathon/>
<div className="logos">
   <img src={renvnza} alt="Renvnza" />
   <img src={mulearn} alt="Mulearn ucek" />
   <img src={gdsc}  alt="GDSC Ucek" />
   <img src={ieee} alt="IEEE Ucek" />
</div>
 
  <Timeline/>

 </div>
  )
}

export default App;
