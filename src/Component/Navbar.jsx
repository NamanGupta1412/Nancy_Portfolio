import React from 'react'


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
          {['Home', 'Skills', 'Education', 'Certifications', 'Projects', 'Contact Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>

  
  )
}

export default Navbar