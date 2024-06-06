import { useState } from 'react'
import Navbar from './components/navbar'
import Homepage from './components/landing'
import Hackathon from './components/hackathon'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="app">
  <Navbar/>
  <Homepage/>
  <Hackathon/>




 </div>
  )
}

export default App;
