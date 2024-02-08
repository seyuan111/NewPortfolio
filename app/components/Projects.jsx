import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sushi from '../assets/Sushi.png'
import Snake from '../assets/Snake.png'
import PharmRx from '../assets/PharmRx.png'
import WickedWines from '../assets/WickedWines.png'
import DeansList from '../assets/DeansList.png'
import Connect from '../assets/Connect.png'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="bg-slate-600 text-blue-300">

        <div className="max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full">

          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-gray-300">My Projects</p>
          </div>

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
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/benjimiles/NYC-Sushi"
          projectLink="https://sushi-eatery-h7xhgdwqp-seyuan111.vercel.app/"
          />

          <ProjectCard
          image={WickedWines}
          title="WickedWines"
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/seyuan111/WickedWines"
          projectLink="https://wicked-wines.vercel.app/"
          />

          <ProjectCard
          image={DeansList}
          title="DeansList"
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/seyuan111/MyDeansList"
          projectLink="https://my-deans-list.vercel.app/"
          />

          <ProjectCard
          image={PharmRx}
          title="PharmRx"
          description="Used with HTML, CSS, and JavaScript."
          githubLink="https://github.com/seyuan111/PharmRx"
          projectLink="https://pharm-rx.vercel.app/"
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