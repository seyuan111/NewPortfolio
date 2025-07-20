import React from 'react';
import { DiJavascript, DiMongodb, DiNodejs } from "react-icons/di";

const Skills = () => {
  return (
    <div id="Skills" className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center w-full h-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center tracking-wide mb-10">
          My <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Skills</span>
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 text-center py-8">
          {[
            { name: "HTML", src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" },
            { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png" },
            { name: "JavaScript", icon: <DiJavascript className="text-yellow-400 w-20 h-20 mx-auto" /> },
            { name: "Node JS", icon: <DiNodejs className="text-white w-20 h-20 mx-auto" /> },
            { name: "MongoDB", icon: <DiMongodb className="text-green-600 w-20 h-20 mx-auto" /> },
            { name: "ReactJS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" }
          ].map((skill, index) => (
            <div key={index} className="group bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              {skill.icon || <img className="w-20 h-20 mx-auto brightness-90 group-hover:brightness-100" src={skill.src} alt={skill.name} />}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
