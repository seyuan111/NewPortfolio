import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sushi from '../assets/Sushi.png'
import Snake from '../assets/Snake.png'
import PharmRx from '../assets/PharmRx.png'
import WickedWines from '../assets/WickedWines.png'
import DeansList from '../assets/DeansList.png'
import Connect from '../assets/Connect.png'

const Projects = () => {
  return (
    <div id="Projects" className="w-full md:h-screen bg-slate-600 text-blue-300">

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-gray-300">My Projects</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={Snake} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <p className="font-bold">The Snake Game</p>
                  <p>used with HTML, CSS, and JavaScript.</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/SnakeGame" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://thesnakegame1.netlify.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={Sushi} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                <p className="font-bold">Sushi Project</p>
                <p class="card-text">This is built with NextJS</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/benjimiles/NYC-Sushi" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://sushi-eatery-h7xhgdwqp-seyuan111.vercel.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={WickedWines} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <p className="font-bold">Wicked Wines</p>
                  <p>This is built with React and Tailwind</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/WickedWines" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://wicked-wines-6did8tc87-seyuan111.vercel.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={DeansList} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <p className="font-bold">The Deans List</p>
                  <p>This is built with NextJS along with Backend JavaScript and MongoDB</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/MyDeansList" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://my-deans-list.vercel.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={PharmRx} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <p className="font-bold">PharmRx</p>
                  <p>This is used with React, Tailwind and react router</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/PharmRx" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://pharm-rx.vercel.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto mb-8 content-div">
              <div>
                <span>
                  <Image src={Connect} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <p className="font-bold">Connect 4</p>
                  <p>This is built with JavaScript, HTML, and CSS.</p>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-red-800 duration-300 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/Connect-4" target="_blank">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 hover:bg-blue-800 duration-300 bg-blue-500 text-white font-bold"><Link href="https://connect4app.netlify.app/" target="_blank">Project</Link></button>
                </div>
              </div>
            </div>

          </div>

        </div>

    </div>
  )
}

export default Projects