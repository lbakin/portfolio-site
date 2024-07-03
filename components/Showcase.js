import React, { useState } from 'react';

const DisplayCards = ({ onHover }) => {
  return (
    <div className="flex flex-wrap justify-center items-center relative h-full w-full max-w-full">
      <div
        className="transform rotate-45 hover:rotate-0 transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai2.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale group-hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div
        className="transform rotate-12 hover:rotate-0 transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai3.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale group-hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div
        className="transform rotate-0 hover:rotate-0 transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-64 h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/card_ai.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale group-hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex flex-col xl:flex-row justify-center items-center h-auto xl:h-screen ${isHovered ? 'hover-gradient' : ''} transition-all duration-1000 ease-in-out`}>
      <div className="w-full xl:w-1/4 p-8 relative text-center xl:text-left mt-8 xl:mt-0">
        <p className="text-2xl sm:text-3xl md:text-4xl font-sans leading-relaxed">
          
          I'm Lev Bakin, I create{' '}
          <span className="flair-word">aesthetically</span> pleasing and functional websites.
        </p>
      </div>
      <div className={`w-full xl:w-3/4 flex justify-center items-center mx-auto relative py-20 overflow-hidden`}>
        <DisplayCards onHover={setIsHovered} />
      </div>
    </div>
  );
};

export default Showcase;
