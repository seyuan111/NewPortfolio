"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-500 text-blue-300">

        <div className="text-[#66bfbf] text-2xl font-bold cursor-pointer">
            <h1><Link href='/'>SY</Link></h1>
        </div>

            <ul className="hidden md:flex">
                <li className="cursor-pointer px-4 font-bold tracking-widest">Home</li>
                <li className="cursor-pointer px-4 font-bold tracking-widest">About</li>
                <li className="cursor-pointer px-4 font-bold tracking-widest">Skills</li>
                <li className="cursor-pointer px-4 font-bold tracking-widest">Projects</li>
                <li className="cursor-pointer px-4 font-bold tracking-widest">Contact</li>
            </ul>

        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <GiHamburgerMenu className="text-2xl" /> : <FaTimes className="text-2xl" />}
        </div>

        <ul className={!nav ? "hidden" : "duration-400 absolute top-0 left-0 w-full h-screen bg-slate-800 text-blue-300 flex flex-col justify-center items-center font-bold tracking-widest"}>
            <li className="py-4 cursor-pointer text-2xl">Home</li>
            <li className="py-4 cursor-pointer text-2xl">About</li>
            <li className="py-4 cursor-pointer text-2xl">Skills</li>
            <li className="py-4 cursor-pointer text-2xl">Projects</li>
            <li className="py-4 cursor-pointer text-2xl">Contact</li>
        </ul>

        <div className="hidden md:flex fixed flex-col top-[35%] left-0">

            <ul>
                <li className="rounded-md w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 px-2">
                    <Link className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com/in/sean-yuan-7965b5123/">LinkedIn <FaLinkedin size={25} /></Link>
                </li>
            </ul>

            <ul className="mt-4">
                <li className="rounded-md w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 px-2">
                    <Link className="flex justify-between items-center w-full text-blue-400" href="https://twitter.com/seyuan1111">Twitter <FaTwitter size={25} /></Link>
                </li>
            </ul>

            <ul className="mt-4">
                <li className="rounded-md w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 px-2">
                    <Link className="flex justify-between items-center w-full text-white" href="https://github.com/seyuan111">Github <FaGithub size={25} /></Link>
                </li>
            </ul>

            <ul className="mt-4">
                <li className="rounded-md w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 px-2">
                    <Link className="flex justify-between items-center w-full text-purple-500" href="https://www.instagram.com/seyuan111/">Instagram <FaInstagram size={25} /></Link>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default NavBar