import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ed_tech from "../assets/projectoutput/ed-tech.png"
import instagram from "../assets/projectoutput/instagram.jpg"
import ai_assistance from "../assets/projectoutput/AI_Assistant.png"
import portfolio from "../assets/projectoutput/portfolio.png"
import BI from "../assets/projectoutput/BI-img.png"
import instagram_analysis from "../assets/projectoutput/Instagram-data-analysis.jpg"
const projects = [
  {
    title: "Ed-Tech Platform",
    description: "A full-stack EdTech solution with JS and PHP",
    image: ed_tech,
    github: "https://github.com/Nancy2707/edtech-platform",
    live: "https://edtech-platform-d4is.vercel.app/"
  },
  {
    title: "Instagram Clone",
    description: "Real-time weather forecasting using OpenWeatherMap API",
    image: instagram,
    github: "https://github.com/Nancy2707/instagram-clone-code",
    live: "https://instagram-clone-code.vercel.app/"
  },
  {
    title: "AI Assistant",
    description: "A productivity app built with React and Firebase",
    image: ai_assistance,
    github: "https://github.com/Nancy2707/Nancy_Portfolio",
    live: "https://ai-assistant-three-azure.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website using React.js",
    image: portfolio,
    github: "https://github.com/Nancy2707/Nancy_Portfolio",
    live: "https://my-portfolio-three-coral-32.vercel.app/"//needs updation
  },
  {
    title: "Sales Analysis Using PowerBI",
    description: "A analysing the sales of a store using powerBI dashboard",
    image: BI,
    github: "https://github.com/Nancy2707/Deep-Learning/tree/main/PowerBI",
    live: "https://www.linkedin.com/posts/nancy-sharma2707_powerbi-datavisualization-industrialtraining-activity-7219310894059511810-SdjY?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Instagram Data Analysis",
    description: "Analysing the data of Instagram reach using Machine Learning ",
    image: instagram_analysis,
    github: "https://github.com/Nancy2707/Deep-Learning/tree/main/Instagram_data_analysis",
    live: "https://www.linkedin.com/posts/nancy-sharma2707_deeplearning-instagramanalysis-datascience-activity-7219670632681127937-9WNP?utm_source=share&utm_medium=member_desktop"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-orange-500 text-sm mb-2">Projects</h2>
        <h3 className="text-3xl font-bold mb-8 text-white">My Projects Collection</h3>
        <p className="text-gray-400 mb-10">
          These are some of my projects I've worked on recently. Have a look at them and let me know what you think.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}