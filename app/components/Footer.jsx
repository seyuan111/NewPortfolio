import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-600/80 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.linkedin.com/in/sean-yuan-7965b5123/" className="text-white hover:text-gray-900 dark:hover:text-white sm:ml-5 mt-2 sm:mt-0 text-xl">
                <span><FaLinkedin /></span>
              </Link>
              <Link href="https://twitter.com/seyuan1111" className="text-white hover:text-gray-900 dark:hover:text-white sm:ml-5 mt-2 sm:mt-0 text-xl">
                <span><FaTwitter /></span>
              </Link>
              <Link href="https://github.com/seyuan111" className="text-white hover:text-gray-900 dark:hover:text-white sm:ml-5 mt-2 sm:mt-0 text-xl">
                <span><FaGithub /></span>
              </Link>
              <Link href="https://www.instagram.com/seyuan111/" className="rounded-md hover:text-gray-900 dark:hover:text-white sm:ml-5 mt-2 sm:mt-0 text-xl">
                <span><FaInstagram /></span>
              </Link>
            </div>
            <div className="text-white hover:text-gray-900 dark:hover:text-white mt-4 ml-4 sm:mt-0 text-xl">
              ysean54@yahoo.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer