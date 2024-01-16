import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    
    

<footer className="bg-slate-200 dark:bg-gray-900">
<div className="mx-auto w-full max-w-screen-xl p-4 py-2">
  <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Contact me at</span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
          <Link href="https://www.linkedin.com/in/sean-yuan-7965b5123/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span><FaLinkedin /></span>
          </Link>
          <Link href="https://twitter.com/seyuan1111" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span><FaTwitter /></span>
          </Link>
          <Link href="https://github.com/seyuan111" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span><FaGithub /></span>
          </Link>
          <Link href="https://www.instagram.com/seyuan111/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span><FaInstagram /></span>
          </Link>
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">ysean54@yahoo.com</span>
      </div>
  </div>
</div>
</footer>


    </div>
  )
}

export default Footer