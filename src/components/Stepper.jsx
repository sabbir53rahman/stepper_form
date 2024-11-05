import React, { useState, useEffect } from "react";
import DynamicInputField from "./DynamicInputField/DynamicInputField";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [steps, setSteps] = useState([]);

  
  useEffect(() => {
    const storedSteps = localStorage.getItem("dynamicSteps");
    if (storedSteps) {
      setSteps(JSON.parse(storedSteps)); 
    }
  }, []);

  const handleValidation = (whichStep) => {
    let shouldAccess = false;
    const validationIndex = whichStep - 2;

    if (steps[validationIndex]) {
      shouldAccess = steps[validationIndex].inputs.every(
        (single) => formData[single.name]
      );
    }

    return shouldAccess;
  };
  console.log(formData)

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Complete Your Profile
      </h1>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex justify-center items-center">
            <button
              onClick={() => {
                if (index + 1 === 1) {
                  setCurrentStep(index + 1);
                  return;
                }
                if (handleValidation(index + 1)) {
                  setCurrentStep(index + 1);
                }
              }}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold ${
                currentStep === index + 1
                  ? "bg-blue-500"
                  : index + 1 < currentStep
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
            {index !== steps.length - 1 && (
              <hr className="w-[120px]" />
            )}
          </div>
        ))}
      </div>

      {/* Render current step */}
      <div>
        {currentStep === steps.length + 1 ? (
          <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Information
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-gray-700">
              <p className="font-medium">Name:</p>
              <p>{formData.name || "N/A"}</p>

              <p className="font-medium">Age:</p>
              <p>{formData.age || "N/A"}</p>

              <p className="font-medium">Email:</p>
              <p>{formData.email || "N/A"}</p>

              <p className="font-medium">Phone:</p>
              <p>{formData.phone || "N/A"}</p>

              <p className="font-medium">Address:</p>
              <p>{formData.address || "N/A"}</p>

              <p className="font-medium">City:</p>
              <p>{formData.city || "N/A"}</p>
            </div>
          </div>
        ) : (
          steps.map((singleStep, i) => (
            <div key={i}>
              {i + 1 === currentStep && (
                <div>
                  <p className="text-center text-[30px] font-medium text-blue-800 pb-[20px]">
                    {singleStep.title}
                  </p>
                  {singleStep.inputs.map((singleInput, inputIndex) => 
                    {
                      console.log(singleInput)
                      return (<div key={inputIndex}>
                      <DynamicInputField
                        {...singleInput}
                        value={formData[singleInput.name]}
                        onChange={(value) => {
                          console.log(formData)
                          setFormData({
                            ...formData,
                            [singleInput.name]: value,
                          });
                        }}
                        
                      />
                    </div>)
                    }
                    
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <button onClick={handleBack} className="bg-gray-300 px-4 py-2 rounded">
            Back
          </button>
        )}
        {currentStep < steps.length + 1 ? (
          <button
          onClick={() => {
            if (handleValidation(currentStep + 1)) {
              setCurrentStep(currentStep + 1);
            }
          }}
          className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            {currentStep === steps.length ? "Review" : "Next"}
          </button>
        ) : (
          <button
            onClick={() => alert("Form Submitted!")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
