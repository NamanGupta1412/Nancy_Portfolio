import React from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import SLT from "../assets/SLT.jpg"
import DigitalPe from "../assets/DigitalPe.jpg"
import Skolar from "../assets/Skolar.jpg"
const internships = [
  {
    company: "Success Ladder Technologies",
    position: "Software Development Intern",
    duration: "July 2024 - September 2024",
    location: "Alwar(On-site)",
    description: "Built responsive UIs using React and Angular in MERN/MEAN stacks. Integrated RESTful APIs and optimized frontend performance.",
    logo: SLT,
  },
  {
    company: "Skolar",
    position: "SWE Intern",
    duration: "March 2024 – May 2024",
    location: "Remote",
    description: "Architected complex single-page applications using React and Angular, leveraging custom hooks and directives to optimize component performance. Enhanced SEO and load times with server-side rendering in React apps.",
    logo: Skolar,
    link:"https://drive.google.com/file/d/1o8tyKreaiPZv8MoSB_XrtlgDPjmU4Ckt/view?usp=drive_link"
  },
  {
    company: "DigitalPe",
    position: "SWE Intern",
    duration: "March 2024 – April 2024",
    location: "Remote",
    description: "Crafted reusable components for scalable web applications. Enhanced UX through dynamic routing and smooth animations.",
    logo: DigitalPe,
    link:"https://drive.google.com/file/d/1SKeMYh7XY3Os3H_hJyauRETKkQAB-m_z/view?usp=drive_link"
  }
]

export default function Internships() {
  return (
    <section id="internships" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-orange-500 text-sm mb-2">Experience</h2>
        <h3 className="text-3xl font-bold mb-8 text-white">My Internships</h3>
        <p className="text-gray-400 mb-10">
          Here are some of the valuable internship experiences I've gained. Each opportunity has contributed significantly to my professional growth.
        </p>
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <a href={internship.link}><img src={internship.logo} alt={internship.company} title="view internship completion certificate" className="w-16 h-16 rounded-full mr-4" /></a>
                <div>
                  <h4 className="text-xl font-semibold text-white">{internship.company}</h4>
                  <p className="text-orange-500">{internship.position}</p>
                </div>
              </div>
              <div className="mb-4 space-y-2">
                <div className="flex items-center text-gray-400">
                  <FaCalendar className="mr-2" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{internship.location}</span>
                </div>
              </div>
              <p className="text-gray-400">{internship.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}