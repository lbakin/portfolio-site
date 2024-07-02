const Step = ({ stepNumber, totalSteps, children, onNext, onPrevious }) => {
  return (
    <div>
      <h2 className="text-xl text-black font-semibold mb-4">Step {stepNumber} of {totalSteps}</h2>
      {children}
      <div className="mt-4 ">
        {stepNumber > 1 && (
          <button onClick={onPrevious} className="bg-gray-500 text-white py-2 px-4 rounded">
            Previous
          </button>
        )}
        {stepNumber < totalSteps && (
          <button onClick={onNext} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        )}
        {stepNumber === totalSteps && (
          <button type="submit" onClick={onNext} className="ml-2 bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
