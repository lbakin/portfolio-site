import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [delayBigWord, setDelayBigWord] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayBigWord(true);
    }, 500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen font-sans">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-tight">
        <span>Crafting</span>
        <div className={`transition-opacity duration-500 ${delayBigWord ? 'opacity-100 flair-word' : 'opacity-0'}`}>
          Smooth
        </div>
        <span> Digital Experiences</span>
      </h1>
    </div>
  );
};

export default Header;

