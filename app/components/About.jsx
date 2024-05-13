import React from 'react'
import Sean from '../assets/Sean.jpg'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About" className="w-full min-h-screen flex justify-center items-center bg-neutral-800 py-8 sm:py-22"> {/* Increased padding here */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"> {/* Removed padding from here */}
            <div className="flex justify-center items-center">
                <Image className="rounded-md brightness-50" src={Sean} height={200} width={250} alt="" />
            </div>
            <div>
                <h1 className="text-3xl sm:text-4xl text-center tracking-wide underline mb-8">
                    About <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">Me</span>
                </h1>
                <div className="text-neutral-400 tracking-wide">
                    <p>I am a Software Engineer in New York. I am proficient in both frontend and backend development. I have knowledge in HTML, CSS, Javascript, Node, MongoDB, and React. As a software Engineer, I love to connect with others, build my networks, and build projects with group members.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;