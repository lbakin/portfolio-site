import { useState } from 'react';
import Step from './Step';

const Questionnaire = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch('https://formspree.io/f/xkgwnjwn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        setStep(totalSteps + 1); // Moves to the "Thank you" step
      } else {
        response.json().then(data => {
          if (data.errors) {
            console.error('Form submission errors:', data.errors);
          }
        });
      }
    }).catch(error => {
      console.error('Form submission error:', error);
    });
  };

  return (
    <div 
      className={`fixed inset-0 p-4 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className="relative p-8 bg-slate-50 w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg border-2 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600">
          X
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep}>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="w-full p-2 border rounded mt-2 text-black" 
                required 
              />
            </Step>
          )}
          {step === 2 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep} onPrevious={prevStep}>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                className="w-full p-2 border rounded mt-2 text-black" 
                required 
              />
            </Step>
          )}
          {step === 3 && (
            <Step stepNumber={step} totalSteps={totalSteps} onPrevious={prevStep}>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
                className="w-full p-2 border rounded mt-2 text-black" 
                required 
              />
            </Step>
          )}
          {step === 4 && (
            <div className="text-center">
              <h2 className="text-xl text-black font-semibold mb-4">Thank you for your request. I'm excited to start this project together!</h2>
              <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Close</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
