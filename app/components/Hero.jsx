"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    <div id="Home" className="w-full h-screen bg-slate-600">

      <div className="px-8 max-w-[1000px] mx-auto flex flex-col font-Cinzel justify-center h-full">
        <h1 className="text-blue-300 font-bold text-2xl">Hello, I am</h1>
        <h2 className="text-4xl font-bold sm:text-5xl text-blue-200">Sean Yuan</h2>
        <h2 className="text-4xl font-bold sm:text-5xl text-blue-400">I am a full stack developer</h2>
        <p className="py-4 text-blue-200 max-2-[700px] font-bold">I work in various languages such as HTML, CSS, and JavaScript
        as well as Node, Express MongoDB, React and Next. I am focusing on
        building full-stack applications</p>

        <div>
          <button><Link className="group text-xl text-white px-6 py-3 my-2 rounded-md bg-gray-400 flex items-center hover:bg-black duration-300" href="https://docs.google.com/document/d/1Fn0YlAT7r5QCfNNefyHRsO0xpyC1PYDCkxxhIImHUzY/edit" target="_blank">Resume <span className="group-hover:rotate-90 duration-300"><FaArrowRight className="ml-2" size={20}/></span></Link></button></div>
        </div>

    </div>
  )
}

export default Hero