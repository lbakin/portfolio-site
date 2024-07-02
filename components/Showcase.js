import React from 'react';

const DisplayCards = () => {
  return (
    <div className="flex justify-center items-center relative h-full w-full">
      <div className="transform rotate-45 hover:rotate-0 transition duration-1000 ease-in-out m-4">
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-lg transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai2.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div className="transform rotate-12 hover:rotate-0 transition duration-1000 ease-in-out m-4">
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-lg transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai2.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div className="transform rotate-0 hover:rotate-0 transition duration-1000 ease-in-out m-4">
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-lg transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}

const Showcase = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="w-3/4 md:w-1/4 p-8 relative">
        <p className="text-4xl font-sans">
          I'm Lev Bakin, I create{' '}
          <span className="flair-word">aesthetically</span> pleasing and functional websites.
        </p>
      </div>
      <div className="w-full md:w-3/4 flex justify-center items-center mx-auto relative p-8">
        <DisplayCards />
      </div>
    </div>
  )
}

export default Showcase;
