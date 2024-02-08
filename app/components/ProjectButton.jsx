import React from 'react'
import Link from 'next/link'

const ProjectButton = ({ href, children }) => {
    return (
      <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold">
        <Link href={href} target="_blank">
          {children}
        </Link>
      </button>
    );
  };

export default ProjectButton