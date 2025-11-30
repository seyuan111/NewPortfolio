"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const focusAreas = [
  'Make Business Cards online',
  'Add your contacts',
  'Print your business card',
];

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
        <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-28 flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 max-w-2xl text-center lg:text-left space-y-6 relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Sean Yuan
            <span className="block">
              Software Engineer
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            I am a Software Engineer who works with Frontend and Backend JavaScript and MongoDb. I also work with mobile development using React Native.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:items-start lg:justify-start gap-4 pt-2">
            <Link
              href="https://docs.google.com/document/d/1sTjk-N_6ibKlcqfzZql7n2suue-I1ngo/edit"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-lg font-semibold shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/30"
            >
              View Resume
              <span className="rounded-full bg-slate-900/10 p-2 transition group-hover:rotate-45">
                <FaArrowRight />
              </span>
            </Link>

            <Link
              href="#Projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:border-fuchsia-300/60 hover:bg-white/10"
            >
              Explore Work
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-slate-300 pt-3 w-full max-w-xl md:max-w-2xl mx-auto lg:mx-0">
            <Link
              href="https://github.com/seyuan111"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-fuchsia-300/50 hover:text-white"
            >
              <FaGithub />
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/sean-yuan-7965b5123/"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-fuchsia-300/50 hover:text-white"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/emperor_sean1/"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-fuchsia-300/50 hover:text-white"
            >
              <FaInstagram />
              Instagram
            </Link>
            <Link
              href="https://x.com/Emperor_Sean1"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-fuchsia-300/50 hover:text-white"
            >
              <FaTwitter />
              Twitter
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="flex-1 w-full max-w-lg relative z-10"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-7 shadow-2xl shadow-fuchsia-500/15 backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-slate-300">Currently building</p>
                <p className="text-xl font-semibold text-white">Business Card App</p>
                <p className="mt-2 text-sm text-slate-200">
                  Built with Node, Express, MongoDB, and React; collaborating with teammates to streamline how we share, brand, and track professional intros.
                </p>
              </div>
              <Link
                href="https://business-card-frontend.vercel.app/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-slate-900 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-slate-950"
                aria-label="Open Business Card App"
              >
                <FaArrowRight className="text-base" />
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {focusAreas.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(52,211,153,0.25)]" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/25 to-indigo-500/30 px-4 py-3 text-white">
                <p className="text-sm text-slate-200">Tech stack</p>
                <p className="font-semibold">Node / Express / MongoDB / React</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                <p className="text-sm text-slate-200">Collaboration</p>
                <p className="font-semibold">Built with the team across design & backend</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
