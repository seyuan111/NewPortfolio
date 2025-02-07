"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    <div id="Home" className="w-full h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="px-8 max-w-[1000px] mx-auto flex flex-col justify-center h-full text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl font-bold text-white"
        >
          Sean Yuan
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-3xl sm:text-4xl text-neutral-400 mt-2"
        >
          Software Engineer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.6 }}
          className="py-4 tracking-wide text-neutral-400 max-w-[700px] mx-auto"
        >
          Proficient in HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, and Next.js. Passionate about developing full-stack applications with seamless user experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="https://docs.google.com/document/d/1NVcH_IsYKG9OTShI_nlT95EaRL3qVB8YmnJm_Gnv1iw/edit?tab=t.0" target="_blank">
            <button className="group text-xl text-white px-6 py-3 mt-6 rounded-md border-2 flex items-center mx-auto hover:bg-black hover:border-neutral-700 transition duration-300">
              Resume <span className="group-hover:rotate-90 transition duration-300"><FaArrowRight className="ml-2" size={20}/></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
