"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <nav className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mt-4 flex h-16 items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-black/70 via-slate-900/60 to-black/70 px-4 sm:px-6 backdrop-blur-xl shadow-xl shadow-cyan-500/20">
                    {/* Logo + wordmark */}
                    <div className="flex items-center gap-3">
                        <Link href='/' className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 text-2xl font-bold text-black shadow-md shadow-cyan-500/30">
                            SY
                        </Link>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-100/70">Portfolio</span>
                            <span className="text-lg font-semibold text-white">Sean Yuan</span>
                        </div>
                    </div>

                    {/* Desktop / Tablet Menu */}
                    <ul className="hidden md:flex items-center gap-4 lg:gap-7 font-QuickSand text-sm lg:text-base text-white/80">
                        {navLinks.map((item) => (
                            <li key={item} className="relative group cursor-pointer">
                                <ScrollLink
                                    to={item}
                                    smooth={true}
                                    duration={500}
                                    className="relative z-10 px-2 py-2 transition-colors duration-300 hover:text-white"
                                >
                                    {item}
                                </ScrollLink>
                                <span className="pointer-events-none absolute inset-x-2 -bottom-1 block h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <ScrollLink
                        to="Contact"
                        smooth={true}
                        duration={500}
                        className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm shadow-cyan-500/40 transition hover:-translate-y-[1px] hover:border-cyan-300 hover:text-white hover:shadow-cyan-400/50"
                    >
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        Let&apos;s talk
                    </ScrollLink>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={handleClick}
                        className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-2xl text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
                        aria-label="Toggle navigation menu"
                        type="button"
                    >
                        {!nav ? <GiHamburgerMenu /> : <FaTimes />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black/80 backdrop-blur-md transition-transform duration-300 md:hidden ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-3 text-2xl text-white" onClick={handleClick}>
                    <FaTimes />
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-8 text-center font-QuickSand text-xl text-white/90">
                    {navLinks.map((item) => (
                        <ScrollLink
                            key={item}
                            to={item}
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                            className="w-full max-w-[240px] rounded-full border border-white/10 bg-white/5 px-8 py-3 transition hover:-translate-y-[1px] hover:border-cyan-400 hover:text-cyan-200"
                        >
                            {item}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to="Contact"
                        smooth={true}
                        duration={500}
                        onClick={handleClick}
                        className="flex items-center justify-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-400/10 px-8 py-3 text-base font-semibold text-cyan-100 shadow-sm shadow-cyan-500/40 transition hover:-translate-y-[1px] hover:border-cyan-300 hover:text-white hover:shadow-cyan-400/50"
                    >
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        Let&apos;s talk
                    </ScrollLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
