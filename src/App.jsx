import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Introduction from './Component/Introduction'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Certification from './Component/Certification'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Internships from './Component/Internships'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="bg-gray-900 text-white min-h-scree overflow-hidden">
    <Navbar/>
    <Introduction/>
    <Skills/>
    <Internships/>
    <Certification/>
    <Education/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App