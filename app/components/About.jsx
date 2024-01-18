import React from 'react'
import Sean from '../assets/Sean.jpg'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About" className="w-full h-screen bg-slate-600 text-blue-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-3xl font-bold inline border-b-4 border-gray-300">About Me</p>
                </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="text-3xl font-bold">
                        <Image className="rounded-md" src={Sean} height={200} width={250}/>
                    </div>
                    <div className="font-bold">
                        <p>I am a Software Engineer in New York. I am proficient in both frontend and backend development. I have knowledge in HTML, CSS, Javascript, Node, MongoDB, and React. As a software Engineer, I love to connect with others, build my networks, and build projects with group members.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About