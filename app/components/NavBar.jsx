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
            <div className="text-4xl font-bold font-Italliano cursor-pointer">
                <h1><Link href='/'>SY</Link></h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-QuickSand text-lg">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
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
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <ScrollLink key={item} to={item} smooth={true} duration={500} onClick={handleClick} className="py-4 cursor-pointer text-white hover:text-blue-400 transition-colors duration-300">
                        {item}
                    </ScrollLink>
                ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex fixed flex-col top-[35%] left-0 space-y-4">
                {[{
                    name: 'LinkedIn', icon: <FaLinkedin size={25} />, url: 'https://www.linkedin.com/in/sean-yuan-7965b5123/'
                }, {
                    name: 'Twitter', icon: <FaTwitter size={25} />, url: 'https://twitter.com/Emperor_Sean1'
                }, {
                    name: 'Github', icon: <FaGithub size={25} />, url: 'https://github.com/seyuan111'
                }, {
                    name: 'Instagram', icon: <FaInstagram size={25} />, url: 'https://www.instagram.com/emperor_sean1/'
                }].map(({ name, icon, url }) => (
                    <Link key={name} href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 w-[170px] h-[60px] ml-[-140px] hover:ml-0 bg-gray-800 rounded-md transition-all duration-300 p-4">
                        <span className="text-white font-bold">{name}</span>
                        {icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
