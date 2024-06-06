import { useState } from 'react'
import Navbar from './components/navbar'
import Homepage from './components/landing'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="app">
  <Navbar/>
  <Homepage/>

 </div>
  )
}

export default App
