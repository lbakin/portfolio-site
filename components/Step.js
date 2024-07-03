const Step = ({ stepNumber, totalSteps, children, onNext, onPrevious }) => {
  return (
    <div>
      <h2 className="text-xl text-black font-semibold mb-4">Step {stepNumber} of {totalSteps}</h2>
      {children}
      <div className="mt-4 flex justify-between">
        {stepNumber > 1 && (
          <button 
            type="button" 
            onClick={onPrevious} 
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Previous
          </button>
        )}
        {stepNumber < totalSteps && (
          <button 
            type="button" 
            onClick={onNext} 
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        )}
        {stepNumber === totalSteps && (
          <button 
            type="submit" 
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
