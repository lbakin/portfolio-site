import React, { useState } from 'react';

const DisplayCards = ({ onHover }) => {
  return (
    <div className="flex flex-wrap justify-center items-center relative h-full w-full max-w-full">
      <div
        className="transform -rotate-12 -translate-x-16 md:-translate-x-32 transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-32 md:w-64 h-48 md:h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/ProfilePic2.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale group-hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div
        className="absolute rotate-6 transform transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-32 md:w-64 h-48 md:h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/ProfilePic3.png"
            alt="Showcase Image"
            className="w-full rounded-xl h-full object-cover grayscale group-hover:grayscale-0 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div
        className="absolute translate-x-16 md:translate-x-32 translate-y-12 rotate-[30deg] transform transition duration-1000 ease-in-out m-4 max-w-xs group"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="w-32 md:w-64 h-48 md:h-96 bg-gray-200 rounded-xl shadow-xl transition duration-1000 ease-in-out">
          <img
            src="/images/ProfilePic1.png"
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
    <div className={`flex flex-col xl:flex-row justify-center items-center h-auto xl:h-screen transition-all duration-1000 ease-in-out ${isHovered ? 'hover-gradient' : ''}`}>
      <div className="w-full xl:w-2/5 p-8 relative text-center xl:text-left mt-8 xl:mt-0">
        <p className="text-2xl sm:text-3xl md:text-4xl font-sans leading-relaxed tracking-wide">
        Hi, I'm Lev Bakin. I create websites that blend <span className="flair-word">visual</span> appeal with smooth usability. 
        I specialize in quickly building small portfolio sites that highlight your unique work and personal brand.
        </p>
      </div>
      <div className={`w-full xl:w-3/5 flex justify-center items-center mx-auto relative py-20 overflow-hidden`}>
        <DisplayCards onHover={setIsHovered} />
      </div>
    </div>
  );
};

export default Showcase;
