import React from 'react'
import Sean from '../assets/Sean.jpg'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full h-screen bg-slate-600 text-blue-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-3xl font-bold inline border-b-4 border-gray-300">About Me</p>
                </div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-3xl font-bold">
                        <Image className="h-20" src={Sean} />
                    </div>
                    <div className="font-bold">
                        <p>Back in 2018, I have began learning my first language SQL, then I learned Java, then C++, then Python, and in 2021, I have focused on JavaScript. I have been working in JavaScript and moved to React and Next.
                        Then I have learned Node Express and MongoDB with NextJS to focus on building full-stack applications. I am focused on building Full-Stack applications. I am now working on building full-stack applications.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About