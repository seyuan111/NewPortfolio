"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import Typewriter from 'typewriter-effect'; 
import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    <div id="Home" className="w-full h-screen bg-neutral-900">

      <div className="px-8 max-w-[1000px] mx-auto flex flex-col font-Cinzel justify-center h-full">
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('<span class="text-white text-3xl">Hello, I am</span>') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2000) 
            .callFunction(() => { 
              console.log('All strings were deleted'); 
            }) 
            .start(); 
        }} 
      />
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('<span class="text-4xl sm:text-5xl text-white">Sean Yuan</span>') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2000) 
            .callFunction(() => { 
              console.log('All strings were deleted'); 
            }) 
            .start(); 
        }} 
      />
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('<span class="text-3xl sm:text-4xl text-white">I am a full-stack developer</span>') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(3000) 
            .callFunction(() => { 
              console.log('All strings were deleted'); 
            }) 
            .start(); 
        }} 
      /> 
        <p className="py-4 tracking-wide text-neutral-400 max-w-[700px]">I work in various languages such as HTML, CSS, and JavaScript
        as well as Node, Express MongoDB, React and Next. I am focusing on
        building full-stack applications</p>

        <Typewriter
        className="text-neutral-500"
        options={{
          strings: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'MongoDB', 'React', 'Next'],
          autoStart: true,
          loop: true,
        }}
      />

        <div>
          <button><Link className="group text-xl text-white px-6 py-3 mt-6 rounded-md border-2 flex items-center hover:bg-black duration-300" href="https://drive.google.com/file/d/11iqtB7QqdeczM9rQEhGzS6-G7IDL1Bsg/view" target="_blank">Resume <span className="group-hover:rotate-90 duration-300"><FaArrowRight className="ml-2" size={20}/></span></Link></button></div>
        </div>

    </div>
  )
}

export default Hero