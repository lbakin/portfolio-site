import React from 'react';

const CallToAction = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen bg-red-600 text-white text-center p-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
        Let's talk about your next project!
      </h2>
      <div className="flex space-x-4">
        <a href="mailto:levbakin@gmail.com" className="bg-white text-red-600 rounded-full px-6 py-3 text-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
          Write a message
        </a>
        <a href="mailto:levbakin@gmail.com" className="bg-white text-red-600 rounded-full px-6 py-3 text-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
          Discuss Project
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
