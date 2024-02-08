import React from 'react'

const Skills = () => {
  return (
    <div id="Skills" className="bg-slate-600 text-blue-300">
        <div className="max-w-[1000px] mx-auto p-6 py-[200px] flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-3xl font-bold inline border-b-4 border-gray-300">My Skills</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
                <div>
                    <img className="w-20 h-20 mx-auto" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"></img>
                    <p className="my-2">HTML</p>
                </div>

                <div>
                    <img className="w-20 h-20 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"></img>
                    <p className="my-2">CSS</p>
                </div>
                
                <div>
                    <img className="w-30 h-20 mx-auto" src="https://www.ramzamani.com/media/skills/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"></img>
                    <p className="my-2">JavaScript</p>
                </div>

                <div>
                    <img className="w-20 h-20 mx-auto" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"></img>
                    <p className="my-2">Node JS</p>
                </div>

                <div>
                    <img className="w-20 h-20 mx-auto" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"></img>
                    <p className="my-2">MongoDB</p>
                </div>

                <div>
                    <img className="w-20 h-20 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
                    <p className="my-2">ReactJS</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills