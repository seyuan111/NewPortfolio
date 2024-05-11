import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectButton from '../components/ProjectButton'

const ProjectCard = ({ image, title, description, githubLink, projectLink }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-neutral-700/90 p-4 rounded-lg shadow-lg">
        <Image src={image} alt={title} className="w-full h-auto mb-4" />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-neutral-400 mb-4">{description}</p>
          <div className="flex">
            <Link href={githubLink} className="border-2 text-white duration-300 px-4 py-2 rounded-md mr-2 hover:bg-neutral-500" target="_blank">GitHub</Link>
            <Link href={projectLink} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md hover:bg-neutral-500 hover:text-black duration-300" target="_blank">Project</Link>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard