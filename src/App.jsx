import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Introduction from './Component/Introduction'
import Services from './Component/Services'
import Education from './Component/Education'
import Certification from './Component/Certification'
import Projects from './Component/Projects'
import Contact from './Component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-900 text-white min-h-scree overflow-hidden">
    <Navbar/>
    <Introduction/>
    <Services/>
    <Education/>
    <Certification/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App