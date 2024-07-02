import React from 'react';
import { useState } from 'react';
import Questionnaire from './Questionnaire'; 

const CallToAction = () => {
  const [isQuestionnaireOpen, setQuestionnaireOpen] = useState(false);

  const openQuestionnaire = () => setQuestionnaireOpen(true);
  const closeQuestionnaire = () => setQuestionnaireOpen(false);

  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen bg-rose-800 text-white text-center p-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
        Let's talk about your next project!
      </h2>
      <div className="flex flex-row justify-between space-x-4">
        <div className="border-white border-2 bg-rose-800 rounded-full px-6 py-3 text-lg font-semibold hover:bg-rose-600 transition duration-300 ease-in-out">
          <a href="mailto:levbakin@gmail.com">
            Write a message
          </a>
        </div>
        <div className="border-white border-2 bg-rose-800 rounded-full px-6 py-3 text-lg font-semibold hover:bg-rose-600 transition duration-300 ease-in-out">
          <button onClick={openQuestionnaire}>
            Discuss Project
          </button>
        </div>
       
      <Questionnaire isOpen={isQuestionnaireOpen} onClose={closeQuestionnaire} />
      </div>
    </div>
  );
};

export default CallToAction;
