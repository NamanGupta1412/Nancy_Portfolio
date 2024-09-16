import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaBootstrap, FaGithub,FaNodeJs, FaPython, FaReact, FaVideo, FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiExpress, SiJavascript,SiTableau, SiPowerbi, SiTailwindcss} from "react-icons/si";

function Services() {


  const Section = ({ id, children }) => (
    <section id={id} className="py-20">
      {children}
    </section>)

  return (
    <Section id="skills">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-orange-500 text-2xl mb-2">Skills</h2>
      {/* <h3 className="text-3xl font-bold mb-8">What Am I Providing</h3>
      <p className="text-gray-400 mb-10">
        If you want any of the following service please go on the freelance section where you can find some of the freelance platforms where I am available.
      </p> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: FaPython, title: "Python" },
          { icon: SiMysql, title: "MYsql" },
          { icon: FaReact, title: "React" },
          { icon: SiMongodb , title: "Mongodb" },
          { icon: FaNodeJs, title: "NodeJs" },
          { icon: SiExpress, title: "ExpressJs" },
          { icon: SiJavascript, title: "JavaScript" },
          { icon: FaGithub, title: "Git and GitHub" },
          { icon: SiTableau, title: "Tableau" },
          { icon: SiPowerbi, title: "PowerBI" },
          { icon: FaBootstrap, title: "Bootstrap" },
          { icon: SiTailwindcss, title: "Taliwind CSS" },
        ].map((service, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <service.icon className="text-4xl mb-4 mx-auto text-orange-500" />
            <h4 className="text-lg font-semibold">{service.title}</h4>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        {/* <motion.button 
          className="bg-orange-500 text-white px-6 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUY SERVICE
        </motion.button> */}
      </div>
    </div>
  </Section>
  )
}

export default Services