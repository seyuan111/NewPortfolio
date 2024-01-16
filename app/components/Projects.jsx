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
    <div className="w-full md:h-screen bg-slate-600 text-blue-300">

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-gray-300">My Projects</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
              <div>
                <span>
                  <p className="font-bold">The Snake Game</p>
                  <Image src={Snake} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/SnakeGame">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://thesnakegame1.netlify.app/">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
              <div>
                <span>
                  <p className="font-bold">Sushi Project</p>
                  <Image src={Sushi} height={250} width={250}></Image>
                </span>
                <div className="pt-6 text-center">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/benjimiles/NYC-Sushi">Github</Link></button>
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://sushi-eatery-h7xhgdwqp-seyuan111.vercel.app/">Project</Link></button>
                </div>
              </div>
            </div>

            <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
              <div>
                <span>
                  <p className="font-bold">Wicked Wines</p>
                  <Image src={WickedWines} height={250} width={250}></Image>
                </span>
              <div className="pt-6 text-center">
                <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/WickedWines">Github</Link></button>
                <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://wicked-wines-6did8tc87-seyuan111.vercel.app/">Project</Link></button>
              </div>
            </div>
        </div>

        <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
        <div>
          <span>
            <p className="font-bold">The Deans List</p>
            <Image src={DeansList} height={250} width={250}></Image>
          </span>
          <div className="pt-6 text-center">
            <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/MyDeansList">Github</Link></button>
            <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://my-deans-list.vercel.app/">Project</Link></button>
          </div>
        </div>
      </div>

      <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
      <div>
        <span>
          <p className="font-bold">PharmRx</p>
          <Image src={PharmRx} height={250} width={250}></Image>
        </span>
        <div className="pt-6 text-center">
          <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/PharmRx">Github</Link></button>
          <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://pharm-rx.vercel.app/">Project</Link></button>
        </div>
      </div>
    </div>

    <div className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
    <div>
      <span>
        <p className="font-bold">Connect 4</p>
        <Image src={Connect} height={250} width={250}></Image>
      </span>
      <div className="pt-6 text-center">
        <button className="text-center rounded-md px-4 py-2 m-2 bg-red-500 text-white font-bold"><Link href="https://github.com/seyuan111/Connect-4">Github</Link></button>
        <button className="text-center rounded-md px-4 py-2 m-2 bg-blue-500 text-white font-bold"><Link href="https://connect4app.netlify.app/">Project</Link></button>
      </div>
    </div>
  </div>
          </div>

        </div>

    </div>
  )
}

export default Projects