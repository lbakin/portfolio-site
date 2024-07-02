import { useState } from 'react';
import Step from './Step';

const Questionnaire = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        onClose();
      } else {
        response.json().then(data => {
          if (data.errors) {
            console.error(data.errors);
          }
        });
      }
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600">
          X
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded mt-2 text-black" required />
            </Step>
          )}
          {step === 2 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep} onPrevious={prevStep}>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded mt-2 text-black" required />
            </Step>
          )}
          {step === 3 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep} onPrevious={prevStep}>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border rounded mt-2 text-black" required />
            </Step>
          )}
          
        </form>

      </div>
    </div>
  );
};

export default Questionnaire;
