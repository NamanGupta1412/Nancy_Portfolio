import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.com"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting using OpenWeatherMap API",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-app-demo.com"
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website using Next.js",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com"
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://blog-platform-demo.com"
  },
  {
    title: "Movie Database",
    description: "A movie information app using the TMDB API",
    image: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/yourusername/movie-database",
    live: "https://movie-database-demo.com"
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