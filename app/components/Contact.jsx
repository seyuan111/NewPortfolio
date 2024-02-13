import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="w-full min-h-screen bg-slate-600 flex justify-center items-center p-4 text-blue-300">
        <form action="" className="flex flex-col max-w-xl w-full">
            <div className="pb-8">
                <p className="text-3xl font-bold inline border-b-4 border-gray-300">Contact</p>
            </div>
            <input className="p-2 rounded" type="text" placeholder="Name" name="name"></input>
            <input className="rounded my-4 p-2" type="text" placeholder="email" name="email"></input>
            <textarea className="p-2 rounded" name="message" rows="6" placeholder="message"></textarea>
            <button className="rounded px-4 py-2 mt-2 bg-blue-500 text-white font-bold">Connect</button>  
        </form>
    </div>
  )
}

export default Contact