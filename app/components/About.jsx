"use client"
import React from 'react';
import Sean from '../assets/Sean.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="About" className="w-full min-h-screen flex justify-center items-center bg-neutral-800 py-20">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex justify-center items-center">
          <Image className="rounded-lg shadow-lg brightness-75 hover:brightness-100 transition duration-300" src={Sean} height={300} width={350} alt="Sean Yuan" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}>
          <h1 className="text-4xl sm:text-5xl text-center tracking-wide font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Me</span>
          </h1>
          <p className="text-neutral-300 text-lg leading-relaxed">
            I am a <span className="text-blue-400">Software Engineer</span> based in <span className="text-blue-400">New York</span>, specializing in <span className="text-blue-400">frontend</span> and <span className="text-blue-400">backend</span> development. With expertise in <span className="text-blue-400">HTML, CSS, JavaScript, Node.js, MongoDB, and React</span>, I enjoy building seamless, dynamic applications. I am passionate about <span className="text-blue-400">networking</span> and collaborating on projects to bring innovative ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
