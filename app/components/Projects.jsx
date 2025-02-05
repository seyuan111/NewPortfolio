import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sushi from '../assets/Sushi.png'
import Snake from '../assets/Snake.png'
import Flippers from '../assets/Flippers.png'
import DeansList from '../assets/DeansList.png'
import Connect from '../assets/Connect.png'
import Japan from '../assets/Little-Japan.png'
import ProjectCard from '../components/ProjectCard'
import PharmRx from '../assets/PharmRx.png'

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
          description="The snake eats the food and it grows bigger. If the snake touches the wall you lose."
          githubLink="https://github.com/seyuan111/SnakeGame"
          projectLink="https://thesnakegame1.netlify.app/"
          />

          <ProjectCard
          image={Sushi}
          title="NYC Sushi"
          description="Do you want to order your sushi. Here is the sushi menu for people who wants to open up a Japanese Restaurant."
          githubLink="https://github.com/benjimiles/NYC-Sushi"
          projectLink="https://nyc-sushi.vercel.app/"
          />

          <ProjectCard
          image={Flippers}
          title="Flippers"
          description="Anyone uses Flippers? Here is the flipper webiste where you can sell your flipper devices."
          githubLink="https://github.com/seyuan111/flipperZone"
          projectLink="https://flipper-zone.vercel.app/"
          />

          <ProjectCard
          image={DeansList}
          title="DeansList"
          description="This website allows you to add your top candidates and it also creates business cards."
          githubLink="https://github.com/seyuan111/MyDeansList"
          projectLink="https://my-deans-list.vercel.app/"
          />

          <ProjectCard
          image={Japan}
          title="Little-Japan"
          description="Check out the Japanese Menu. This is the Japanese website version of grubhub for anyone who wants to open up a Japanese restaurant."
          githubLink="https://github.com/seyuan111/little-japan"
          projectLink="https://little-japan.vercel.app/"
          />

          <ProjectCard
          image={PharmRx}
          title="PharmRx"
          description="This is PharmRx which allows you to order your medication and have them delivered to your home."
          githubLink="https://github.com/seyuan111/PharmRx"
          projectLink="https://pharm-rx.vercel.app/"
          />

          </div>

        </div>

    </div>
  )
}

export default Projects