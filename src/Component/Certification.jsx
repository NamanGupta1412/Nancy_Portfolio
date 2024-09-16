import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SmapleImg from "./img.jpg"

function Certification() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const Section = ({ id, children }) => (
    <section id={id} className="py-20">
      {children}
    </section>)


  return (
    

    <Section id="certifications">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-orange-500 text-sm mb-2">CERTIFICATIONS</h2>
      <h3 className="text-3xl font-bold mb-8">Professional Certifications</h3>
    <Carousel
      swipeable={true}
      draggable={true}
      customTransition="transform 300ms ease-in-out"
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style "
      autoPlay="true"
      itemClass="carousel-item-padding-40-px"
    >
       <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="h-[300px] mr-7 ml-6 text-white">
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={SmapleImg} alt="Certificate" className="w-full h-48 object-cover" />
        <div className="p-6 pt-2 ps-2">
          <h4 className="text-xl font-semibold text-white">Certificate</h4>
          <p className="text-gray-400">Description</p>
          <div className="flex justify-between items-center">
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors ms-auto"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
</div>
    </Carousel>
    </div>
    </Section>
  
  )
}

export default Certification