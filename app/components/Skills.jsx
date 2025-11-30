import React from 'react';
import { DiJavascript, DiMongodb, DiNodejs } from "react-icons/di";

const skills = [
  { name: 'HTML', src: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' },
  { name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png' },
  { name: 'JavaScript', icon: <DiJavascript className="text-yellow-400 w-14 h-14 mx-auto" /> },
  { name: 'Node.js', icon: <DiNodejs className="text-white w-14 h-14 mx-auto" /> },
  { name: 'MongoDB', icon: <DiMongodb className="text-green-600 w-14 h-14 mx-auto" /> },
  { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative isolate bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 pt-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm shadow-fuchsia-500/10 transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 mx-auto">
                {skill.icon || (
                  <img
                    className="h-10 w-10 object-contain brightness-95 group-hover:brightness-100 transition"
                    src={skill.src}
                    alt={skill.name}
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
