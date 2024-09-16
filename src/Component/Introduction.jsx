import React from 'react'
import { motion } from 'framer-motion'
import Img from '../assets/Profile.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaTelegram, FaGithub , FaPaintBrush, FaCode, FaVideo, FaGraduationCap, FaCertificate } from 'react-icons/fa'
const PLACEHOLDER_IMAGE = [Img]
import { useEffect, useRef } from "react";
import Typed from "typed.js";



function Introduction() { 
  // const el = useRef(null);

  // useEffect(() => {
  // const typed = new Typed(el.current, {
  //   strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
  //   // Speed settings, try diffrent values untill you get good results
  //   startDelay: 300,
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   backDelay: 100,
  // })})
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Full Stack Developer", "JavaScript Frameworks", "Problem Solving Skills", "Responsive Web Design"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  const Section = ({ id, children }) => (
    <section id={id} className="py-20">
      {children}
    </section>);
     


  return (
    
    <Section id="home">
    <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nancy Sharma

          <div className="max-w-6xl my-10">
      <h2 className="text-orange-500 text-sm mb-2">INTRODUCTION</h2>
      {/* <h3 className="text-2xl font-bold mb-4">Graphic Designer, Web Developer, Video Editor.</h3> */}
      <p className="text-gray-400 text-base">
        I am a MEAN/MERN Web Developer<br/>
        <span ref={el}></span>
      </p>
    </div>
        </motion.h1>
        <div className="flex space-x-2 mb-4 text-3xl">
          {[FaInstagram, FaXTwitter, FaLinkedin, FaTelegram, FaGithub].map((Icon, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-white">
              <Icon />
            </a>
          ))}
        </div>
        <motion.button 
          className="bg-orange-500 text-white px-6 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT ME
        </motion.button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 ">
        <img src={PLACEHOLDER_IMAGE} alt="Nancy Sharma" className="w-[450px] h-[450px] max-w-md mx-auto rounded-full object-cover" />
      </div>
    </div>
    
  </Section>
  )
}

export default Introduction
