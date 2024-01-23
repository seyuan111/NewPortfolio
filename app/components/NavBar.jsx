"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleNavLinkClick = () => {
        setNav(false);
    };

    
    const scrollToElement = (elementId) => {
        scroll.scrollTo(document.getElementById(elementId).offsetTop, {
            duration: 500,
            smooth: true
        });
        handleNavLinkClick(); // Close the navbar after scrolling
    };

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-500 text-blue-300">

        <div className="text-[#66bfbf] text-3xl border-2 font-Italliano rounded px-4 py-2 font-bold cursor-pointer">
            <h1><Link href='/'>SY</Link></h1>
        </div>

            <ul className="hidden md:flex font-QuickSand text-xl">
                <li className="cursor-pointer px-4 font-bold tracking-widest hover:border-b-2 hover:border-blue-700 duration-300"><ScrollLink to="Home" smooth={true} duration={500}>Home</ScrollLink></li>
                <li className="cursor-pointer px-4 font-bold tracking-widest hover:border-b-2 hover:border-blue-700 duration-300"><ScrollLink to="About" smooth={true} duration={500}>About</ScrollLink></li>
                <li className="cursor-pointer px-4 font-bold tracking-widest hover:border-b-2 hover:border-blue-700 duration-300"><ScrollLink to="Skills" smooth={true} duration={500}>Skills</ScrollLink></li>
                <li className="cursor-pointer px-4 font-bold tracking-widest hover:border-b-2 hover:border-blue-700 duration-300"><ScrollLink to="Projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                <li className="cursor-pointer px-4 font-bold tracking-widest hover:border-b-2 hover:border-blue-700 duration-300"><ScrollLink to="Contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>

        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <GiHamburgerMenu className="text-2xl" /> : <FaTimes className="text-2xl" />}
        </div>

        <ul className={!nav ? "hidden" : "duration-400 absolute top-0 left-0 w-full h-screen bg-slate-800 text-blue-300 flex flex-col justify-center items-center font-bold tracking-widest"}>
            <li className="py-4 cursor-pointer text-2xl" onClick={() => scrollToElement("Home")}>Home</li>
            <li className="py-4 cursor-pointer text-2xl" onClick={() => scrollToElement("About")}>About</li>
            <li className="py-4 cursor-pointer text-2xl" onClick={() => scrollToElement("Skills")}>Skills</li>
            <li className="py-4 cursor-pointer text-2xl" onClick={() => scrollToElement("Projects")}>Projects</li>
            <li className="py-4 cursor-pointer text-2xl" onClick={() => scrollToElement("Contact")}>Contact</li>
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