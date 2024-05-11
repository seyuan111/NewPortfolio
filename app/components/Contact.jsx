import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="w-full min-h-screen bg-neutral-900 flex justify-center items-center p-4">
        <form action="" className="flex flex-col max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl text-center tracking-wide underline mb-6">
          Contact
          </h1>
            <input className="my-4 bg-neutral-800 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Name" name="name"></input>
            <input className="mb-4 bg-neutral-800 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="email" name="email"></input>
            <textarea className="bg-neutral-800 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="message" rows="6" placeholder="message"></textarea>
            <button className="mt-6 w-full text-white border-2 bg-neutral-600 hover:bg-neutral-800 duration-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Connect</button>  
        </form>
    </div>
  )
}

export default Contact