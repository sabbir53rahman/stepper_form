import React, { useState } from "react";
import StepOne from "../components/Steps/StepOne";
import StepTwo from "../components/Steps/StepTwo";
import StepThree from "../components/Steps/StepThree";
import Summary from "../components/Summary/Summary";
import { div, p } from "framer-motion/client";
import DynamicInputField from "./DynamicInputField/DynamicInputField";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  console.log(formData);

  const AllSteps = [
    {
      title: "Personal Info",
      inputs: [
        {
          name: "name",
          label: "Enter your Name",
          type: "text",
          id: "name",
        },
        {
          name: "age",
          label: "Enter your age",
          type: "number",
          id: "age",
        },
      ],
    },

    {
      title: "Contact Info",
      inputs: [
        {
          name: "email",
          label: "Enter your email",
          type: "email",
          id: "email",
        },
        {
          name: "phone",
          label: "Enter you phone number",
          type: "number",
          id: "phone",
        },
      ],
    },
    {
      title: "Address",
      inputs: [
        {
          name: "address",
          label: "Enter your address",
          type: "text",
          id: "address",
        },
        {
          name: "city",
          label: "Enter you city",
          type: "text",
          id: "city",
        },
      ],
    },
  ];

  const handleValidation = (whichStep) => {
    let shouldAccess = false;
    const validationIndex = whichStep - 2;

    shouldAccess = AllSteps[validationIndex].inputs.every(
      (single) => formData[single.name]
    );

    return shouldAccess;
  };

  // const steps = ["Personal Info", "Contact Info", "Address"];

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  // const goToStep = (step) => {
  //   if (step <= currentStep) setCurrentStep(step);
  // };

  // const renderStep = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return <StepOne formData={formData} setFormData={setFormData} />;
  //     case 2:
  //       return <StepTwo formData={formData} setFormData={setFormData} />;
  //     case 3:
  //       return <StepThree formData={formData} setFormData={setFormData} />;
  //     case 4:
  //       return <Summary formData={formData} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Complete Your Profile
      </h1>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {AllSteps.map((step, index) => (
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
              className={`flex items-center justify-center w-10 h-10  rounded-full text-white font-bold ${
                currentStep === index + 1
                  ? "bg-blue-500"
                  : index + 1 < currentStep
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
            {index !== AllSteps.length - 1 && <hr className="w-[120px]" />}
          </div>
        ))}
      </div>

      {/* Render current step */}

      <div>
        {currentStep === AllSteps.length + 1 ? (
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
          AllSteps.map((singleStep, i) => (
            <div key={i}>
              {i + 1 === currentStep && (
                <div>
                  <p className="text-center text-[30px] font-medium text-blue-800 pb-[20px]">
                    {singleStep.title}
                  </p>
                  {singleStep.inputs.map((singleInput, inputIndex) => (
                    <div key={inputIndex}>
                      <DynamicInputField
                        value={formData[singleInput.name]}
                        onChange={(value) => {
                          setFormData({
                            ...formData,
                            [singleInput.name]: value,
                          });
                        }}
                        key={inputIndex}
                        {...singleInput}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Back
          </button>
        )}
        {currentStep < AllSteps.length + 1 ? (
          <button
            onClick={() => {
              if (handleValidation(currentStep + 1)) {
                setCurrentStep(currentStep + 1);
              }
            }}
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {currentStep === AllSteps.length ? "Review" : "Next"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Stepper;
