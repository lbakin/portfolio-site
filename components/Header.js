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
    <div className="flex justify-center items-center h-4/6 font-sans p-8 text-center">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-medium">
        Crafting
        <div className={`transition-opacity duration-500 pt-2 pb-4 ${delayBigWord ? 'opacity-100 flair-word' : 'opacity-0'}`}>
          Smooth
        </div>
        Digital Experiences
      </h1>
    </div>
  );
};

export default Header;

