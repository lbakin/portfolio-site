import { useState } from 'react';
import Step from './Step';

const Questionnaire = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '',
    websiteTimeline: '',
    budget: ''   
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const totalSteps = 5;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validation check
    if (!formData.name || !formData.email) {
      setError('Name and Email are required.');
      return;
    }

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
              <h3 className="text-lg mb-4 text-black">When do you need your website?</h3>
              <div className="space-y-2 text-black text-left">
              <label className="block">
                  <input 
                    type="radio" 
                    name="websiteTimeline" 
                    value="As soon as possible" 
                    checked={formData.websiteTimeline === 'As soon as possible'}
                    onChange={() => handleOptionChange('websiteTimeline', 'As soon as possible')}
                    className="mr-2"
                  />
                  As soon as possible
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="websiteTimeline" 
                    value="In the next 2 months" 
                    checked={formData.websiteTimeline === 'In the next 2 months'}
                    onChange={() => handleOptionChange('websiteTimeline', 'In the next 2 months')}
                    className="mr-2"
                  />
                  In the next 2 months
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="websiteTimeline" 
                    value="Within 6 months" 
                    checked={formData.websiteTimeline === 'Within 6 months'}
                    onChange={() => handleOptionChange('websiteTimeline', 'Within 6 months')}
                    className="mr-2"
                  />
                  Within 6 months
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="websiteTimeline" 
                    value="There's no rush" 
                    checked={formData.websiteTimeline === "There's no rush"}
                    onChange={() => handleOptionChange('websiteTimeline', "There's no rush")}
                    className="mr-2"
                  />
                  There's no rush
                </label>
              </div>
            </Step>
          )}
          {step === 2 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep} onPrevious={prevStep}>
              <h3 className="text-lg mb-4 text-black">What is your budget?</h3>
              <div className="space-y-2 text-black text-left">
                <label className="block">
                  <input 
                    type="radio" 
                    name="budget" 
                    value="$500" 
                    checked={formData.budget === '$500'}
                    onChange={() => handleOptionChange('budget', '$500')}
                    className="mr-2"
                  />
                  $500
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="budget" 
                    value="$1000" 
                    checked={formData.budget === '$1000'}
                    onChange={() => handleOptionChange('budget', '$1000')}
                    className="mr-2"
                  />
                  $1000
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="budget" 
                    value="$1500" 
                    checked={formData.budget === '$1500'}
                    onChange={() => handleOptionChange('budget', '$1500')}
                    className="mr-2"
                  />
                  $1500
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="budget" 
                    value="$2000+" 
                    checked={formData.budget === '$2000+'}
                    onChange={() => handleOptionChange('budget', '$2000+')}
                    className="mr-2"
                  />
                  $2000+
                </label>
              </div>
            </Step>
          )}
          {step === 3 && (
            <Step stepNumber={step} totalSteps={totalSteps} onNext={nextStep} onPrevious={prevStep}>
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
          {step === 4 && (
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
          {step === 5 && (
            <Step stepNumber={step} totalSteps={totalSteps} onPrevious={prevStep}>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Tell me a little about your project!" 
                className="w-full p-2 border rounded mt-2 text-black" 
                required 
              />
            </Step>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {step === 6 && (
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
