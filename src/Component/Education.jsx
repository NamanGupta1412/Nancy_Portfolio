import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegram, FaDesktop, FaPaintBrush, FaCode, FaVideo, FaGraduationCap, FaCertificate } from 'react-icons/fa'
import EducationBtn from './EducationButton'

function Education() {
  const Section = ({ id, children }) => (
    <section id={id} className="py-20">
      {children}
    </section>)

  return (
    <Section id="education">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-orange-500 text-sm mb-2">EDUCATION</h2>
      <h3 className="text-3xl font-bold mb-8">My Academic Background</h3>
      <div className="space-y-8">
        {[
          { degree: "Bachelor of Technology in Computer Science", institution: "Modern Institute of Technology and Research Center", year: "2021 - 2025",link:"https://drive.google.com/file/d/1gPNkmVyxgbZVxXVJIljdMH5GUQSbdt5D/view?usp=sharing" },
          { degree: "Senior Secondary Education", institution: "SGHPS", year: "2020 - 2021", link:"https://drive.google.com/file/d/1TFUjFoXFSU3HDbbZvdvIlgq6kT1Z6Bj-/view?usp=sharing"},
          { degree: "Secondary Education", institution: "SGHPS", year: "2018 - 2019", link:"https://drive.google.com/file/d/1ieNdSwXD211byF-HoW12oysovt0kwd8t/view?usp=sharing"},
        ].map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-2xl text-orange-500 mr-2" />
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
            </div>
            <div className="sm:flex justify-between"> 
            <div className="ms-6 ps-2"><p className="text-gray-400">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p></div>
            <EducationBtn link={edu.link} name={edu.degree}/>
            </div>
           
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
  )
}

export default Education