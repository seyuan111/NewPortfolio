"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <nav className="border-b-2 fixed w-full h-[70px] flex justify-between items-center px-6 bg-gradient-to-r from-black to-gray-700 text-white shadow-lg z-50">
            {/* Logo */}
            <div className="border-2 px-4 rounded-md py-1 text-4xl font-bold font-Italliano cursor-pointer">
                <h1><Link href='/'>SY</Link></h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-QuickSand text-lg">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <li key={item} className="relative group cursor-pointer">
                        <ScrollLink to={item} smooth={true} duration={500} className="relative z-10 px-3 py-2">
                            {item}
                        </ScrollLink>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div onClick={handleClick} className="md:hidden z-50 cursor-pointer text-3xl">
                {!nav ? <GiHamburgerMenu /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden flex flex-col justify-center items-center text-2xl`}> 
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <ScrollLink key={item} to={item} smooth={true} duration={500} onClick={handleClick} className="py-4 cursor-pointer text-white hover:text-blue-400 transition-colors duration-300">
                        {item}
                    </ScrollLink>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
