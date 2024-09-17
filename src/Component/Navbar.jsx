import React from 'react'
import {Link,Tab} from 'react-scroll';

function Navbar() {
  const Section = ({ id, children }) => (
    <section id={id} className="py-20">
      {children}
    </section>)
  return (
  
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <span className="text-2xl font-bold text-white">Nancy</span>
        <div className="flex space-x-4 text-sm">
          {['Home', 'Skills', 'Education', 'Internships', 'Certifications', 'Projects', 'Contact'].map((item) => (
            // <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white">
            //   {item}
            // </a>
            <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="relative mx-auto flex w-fit rounded-full bg-transparent p-1 "
          >
       
<Link to={item.toLowerCase()} 
className="text-gray-300 hover:text-white"
spy={true}
smooth={true}
offset={50}
  duration={500}
>{item}</Link>
      </ul>
            
          ))}
        </div>
      </div>
    </div>
  </nav>

  
  )
}

export default Navbar