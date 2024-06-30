import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sushi from '../assets/Sushi.png'
import Snake from '../assets/Snake.png'
import BusinessCard from '../assets/BusinessCard.png'
import Flippers from '../assets/Flippers.png'
import DeansList from '../assets/DeansList.png'
import Connect from '../assets/Connect.png'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="bg-neutral-800">

        <div className="max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full">

          <h1 className="text-3xl sm:text-4xl text-center tracking-wide underline mb-6">
            My <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">Projects</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">

          <ProjectCard
          image={Snake}
          title="The Snake Game"
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/seyuan111/SnakeGame"
          projectLink="https://thesnakegame1.netlify.app/"
          />

          <ProjectCard
          image={Sushi}
          title="Sushi Project"
          description="Built in Next, Tailwind, and Django."
          githubLink="https://github.com/benjimiles/NYC-Sushi"
          projectLink="https://nyc-sushi.vercel.app/"
          />

          <ProjectCard
          image={Flippers}
          title="Flippers"
          description="Used with React Vite and Tailwind."
          githubLink="https://github.com/seyuan111/flipperZone"
          projectLink="https://flipper-zone.vercel.app/"
          />

          <ProjectCard
          image={DeansList}
          title="DeansList"
          description="Built in MERN and tailwind css."
          githubLink="https://github.com/seyuan111/MyDeansList"
          projectLink="https://my-deans-list.vercel.app/"
          />

          <ProjectCard
          image={BusinessCard}
          title="Business Card"
          description="Used with MERN and tailwind."
          githubLink="https://github.com/seyuan111/BusinessCardsFrontend"
          projectLink="https://business-cards-frontend.vercel.app/"
          />

          <ProjectCard
          image={Connect}
          title="Connect 4"
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/seyuan111/Connect-4"
          projectLink="https://connect4app.netlify.app/"
          />

          </div>

        </div>

    </div>
  )
}

export default Projects