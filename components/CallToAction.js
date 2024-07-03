import React from 'react';
import { useState } from 'react';
import Questionnaire from './Questionnaire'; 

const HalfMoon = () => {
  return (
    <svg
      id="c-circle"
      viewBox="0 0 1254 1254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      // style={{ transform: 'translate3d(-556.775px, -4.5541%, 0px)' }}
    >
      <circle cx="627" cy="627" r="627" fill="url(#paint0_radial_3260_3)" />
      <defs>
        <radialGradient
          id="paint0_radial_3260_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(627) rotate(90) scale(813)"
        >
          <stop stopColor="#F3F3F3" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const CallToAction = () => {
  const [isQuestionnaireOpen, setQuestionnaireOpen] = useState(false);

  const openQuestionnaire = () => setQuestionnaireOpen(true);
  const closeQuestionnaire = () => setQuestionnaireOpen(false);

  return (
    <div id="contact" className="relative flex flex-col items-center justify-center h-screen bg-rose-800 text-white text-center p-8 overflow-hidden">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

      <div className="absolute inset-0 flex items-center justify-center z-0 translate-y-1/3">
        <HalfMoon />
      </div>
      <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
        Let's talk about your next project!
      </h2>
      <div className="relative z-10 flex flex-row justify-center space-x-4 mb-8">
        <div className="border-white border-2 bg-rose-800 rounded-full px-6 py-3 text-lg font-semibold hover:bg-rose-600 transition duration-300 ease-in-out">
          <a href="mailto:levbakin@gmail.com">Write a message</a>
        </div>
        <div className="border-white border-2 bg-rose-800 rounded-full px-6 py-3 text-lg font-semibold hover:bg-rose-600 transition duration-300 ease-in-out">
          <button onClick={openQuestionnaire}>Discuss Project</button>
        </div>
      </div>
      <div className="relative z-10 flex flex-row space-x-6 mb-4">
        <a
          href="https://www.instagram.com/butterynubs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-rose-600 transition duration-300 ease-in-out"
        >
          <i className="fab fa-instagram text-3xl"></i>
        </a>
        <a
          href="mailto:levbakin@gmail.com"
          className="text-white hover:text-rose-500 transition duration-300 ease-in-out"
        >
          <i className="fas fa-envelope text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lev-bakin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-rose-600 transition duration-300 ease-in-out"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
      </div>
      <Questionnaire isOpen={isQuestionnaireOpen} onClose={closeQuestionnaire} />
    </div>
  );
};

export default CallToAction;