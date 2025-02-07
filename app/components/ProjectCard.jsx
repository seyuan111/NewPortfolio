import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ image, title, description, githubLink, projectLink }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-neutral-700/60 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <Image 
        src={image} 
        alt={title} 
        className="w-full h-auto mb-4 rounded-md object-cover transform transition-transform hover:scale-105 duration-300" 
      />
      
      {/* Text Section */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-white mb-2 transition duration-300">{title}</h2>
        <p className="text-sm text-neutral-300">{description}</p>
        
        {/* Button Section */}
        <div className="flex space-x-4">
          <Link 
            href={githubLink} 
            className="border-2 border-neutral-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white"
            target="_blank"
          >
            GitHub
          </Link>
          
          <Link 
            href={projectLink} 
            className="bg-neutral-500 hover:bg-black text-white px-6 py-2 rounded-md transition duration-300"
            target="_blank"
          >
            Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
