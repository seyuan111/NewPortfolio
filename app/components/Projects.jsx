import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sushi from '../assets/Sushi.png';
import Snake from '../assets/Snake.png';
import Flippers from '../assets/Flippers.png';
import DeansList from '../assets/DeansList.png';
import Japan from '../assets/Little-Japan.png';
import ProjectCard from '../components/ProjectCard';
import PharmRx from '../assets/PharmRx.png';
import WickedWines from '../assets/WickedWines.png'
import BusinessCards from '../assets/BusinessCards.png'

const Projects = () => {
  return (
    <div id="Projects" className="bg-gradient-to-b from-black to-gray-900 min-h-screen py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col justify-center w-full h-full text-white">

        {/* Heading Section */}
        <h1 className="text-4xl sm:text-5xl text-center tracking-wide mb-12">
          My{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

          <ProjectCard
            image={Snake}
            title="The Snake Game"
            description="A fun classic snake game. Eat food, grow longer, and avoid the walls."
            githubLink="https://github.com/seyuan111/SnakeGame"
            projectLink="https://thesnakegame1.netlify.app/"
          />

          <ProjectCard
            image={WickedWines}
            title="WickedWines"
            description="Order wines and check out events at a winery with an interactive menu."
            githubLink="https://github.com/seyuan111/WickedWines"
            projectLink="https://wicked-wines.vercel.app/"
          />

          <ProjectCard
            image={Flippers}
            title="Flippers"
            description="Buy and sell flipper devices on this e-commerce platform."
            githubLink="https://github.com/seyuan111/flipperZone"
            projectLink="https://flipper-zone.vercel.app/"
          />

          <ProjectCard
            image={BusinessCards}
            title="Business Cards"
            description="Make your own phonebook online. You can keep track of your business cards online."
            githubLink="https://github.com/seyuan111/Business-Card-Frontend"
            projectLink="https://business-card-frontend.vercel.app/"
          />

          <ProjectCard
            image={Japan}
            title="Little-Japan"
            description="A Japanese menu platform for restaurant owners looking to launch."
            githubLink="https://github.com/seyuan111/little-japan"
            projectLink="https://little-japan.vercel.app/"
          />

          <ProjectCard
            image={PharmRx}
            title="PharmRx"
            description="Order your medication online and have it delivered to your doorstep."
            githubLink="https://github.com/seyuan111/PharmRx"
            projectLink="https://pharm-rx.vercel.app/"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
