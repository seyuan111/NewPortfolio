"use client"
import React from 'react';
import Sean from '../assets/Sean.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="About"
      className="relative isolate w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 -bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:grid md:grid-cols-2 md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-fuchsia-500/15 backdrop-blur">
            <div className="absolute inset-x-6 top-6 h-24 rounded-2xl bg-gradient-to-r from-fuchsia-500/25 via-cyan-400/25 to-indigo-500/20 blur-3xl" />
            <Image
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-xl brightness-95 transition duration-300 hover:brightness-100"
              src={Sean}
              height={320}
              width={360}
              alt="Sean Yuan"
            />
            <div className="relative z-10 mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
              <div>
                <p className="font-semibold text-white">Sean Yuan</p>
                <p className="text-xs text-slate-300">Software Engineer · New York</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Open to collaborate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-200">
            About me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Work with Frontend and Backend JavaScript to build products
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            I am a Software Engineer based in New York. I started coding back in 2021 working with Frontend and Backend JavaScript. Based in New York, I love collaborating with teams to turn ideas into polished features. I have been working with mobile development using React Native. I am currently working as a Software Engineer in Immpression in New York City.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'React · Next.js · Node.js · MongoDB',
              'UI polish, accessibility, performance',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-sm shadow-fuchsia-500/10"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {[
              'Full-stack delivery',
              'UI Designs',
              'APIs',
              'Collaboration',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
