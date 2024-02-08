import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectButton from '../components/ProjectButton'

const ProjectCard = ({ image, title, description, githubLink, projectLink }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-slate-800/60 p-4 rounded-lg shadow-md">
        <Image src={image} alt={title} className="w-full h-auto mb-4" />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-blue-300 mb-4">{description}</p>
          <div className="flex">
            <Link href={githubLink} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400">GitHub</Link>
            <Link href={projectLink} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Project</Link>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard