import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-6 text-white">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <Link href="https://www.linkedin.com/in/sean-yuan-7965b5123/" className="hover:text-blue-400 transition duration-300 text-3xl">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/Emperor_Sean1" className="hover:text-blue-400 transition duration-300 text-3xl">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/seyuan111" className="hover:text-blue-400 transition duration-300 text-3xl">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/emperor_sean1/" className="hover:text-pink-400 transition duration-300 text-3xl">
            <FaInstagram />
          </Link>
        </div>

        {/* Contact Info */}
        <p className="text-neutral-400 text-lg mb-4">ysean54@yahoo.com</p>

        {/* Copyright */}
        <div className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Sean Yuan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
