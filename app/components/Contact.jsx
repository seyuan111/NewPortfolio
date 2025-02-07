import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center p-6">
      <form action="" className="flex flex-col max-w-2xl w-full bg-neutral-800 p-8 rounded-xl shadow-xl space-y-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl text-center tracking-wide text-white font-semibold mb-6">
          Contact
        </h1>

        {/* Name Input */}
        <input 
          className="bg-neutral-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 hover:bg-neutral-600"
          type="text" 
          placeholder="Name" 
          name="name" 
        />

        {/* Email Input */}
        <input 
          className="bg-neutral-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 hover:bg-neutral-600"
          type="email" 
          placeholder="Email" 
          name="email" 
        />

        {/* Message Textarea */}
        <textarea 
          className="bg-neutral-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 hover:bg-neutral-600"
          name="message" 
          rows="6" 
          placeholder="Message"
        ></textarea>

        {/* Submit Button */}
        <button 
          className="w-full border-2 border-neutral-200 text-white font-medium rounded-lg px-6 py-3 transition duration-300 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-500 focus:outline-none"
        >
          Connect
        </button>
      </form>
    </div>
  );
}

export default Contact;
