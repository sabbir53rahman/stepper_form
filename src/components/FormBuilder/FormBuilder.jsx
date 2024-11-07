import React, { useState } from "react";
import DynamicInputField from "../DynamicInputField/DynamicInputField";
import { useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const [allSteps, setAllSteps] = useState([]);

  const navigate = useNavigate();

  const handleTitleChange = (index, value) => {
    const updatedSteps = [...allSteps];
    updatedSteps[index].title = value;
    setAllSteps(updatedSteps);
  };

  const addStep = () => {
    setAllSteps([
      ...allSteps,
      {
        title: "",
        inputs: [
          {
            name: "",
            label: "",
            type: "text",
            id: "",
            value: ""
          }
        ]
      }
    ]);
  };

  const removeStep = (stepIndex) => {
    const updatedSteps = [...allSteps];
    updatedSteps.splice(stepIndex, 1);
    setAllSteps(updatedSteps);
  };

  const addInputGroup = (stepIndex) => {
    const updatedSteps = [...allSteps];
    updatedSteps[stepIndex].inputs.push({
      name: "",
      label: "",
      type: "text",
      id: "",
      value: ""
    });
    setAllSteps(updatedSteps);
  };

  const handleInputChange = (stepIndex, inputIndex, field, value) => {
    const updatedSteps = [...allSteps];
    updatedSteps[stepIndex].inputs[inputIndex][field] = value;
    setAllSteps(updatedSteps);
  };

  const deleteInputGroup = (stepIndex, inputIndex) => {
    const updatedSteps = [...allSteps];
    updatedSteps[stepIndex].inputs.splice(inputIndex, 1);
    setAllSteps(updatedSteps);
  };

  const handleSubmit = () => {
    localStorage.setItem("dynamicSteps", JSON.stringify(allSteps));
    alert("Steps saved successfully!");
    navigate('/stepper');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Dynamic Form Builder</h1>
      <button
        onClick={addStep}
        className="w-full bg-green-500 text-white rounded-md px-4 py-2 my-6 hover:bg-green-600 focus:outline-none"
      >
        Add Step
      </button>
      
      {allSteps.map((step, stepIndex) => (
        <div key={stepIndex} className="border border-gray-300 rounded-lg p-4 mb-6 bg-white shadow">
          <input
            type="text"
            placeholder="Enter step title"
            value={step.title}
            onChange={(e) => handleTitleChange(stepIndex, e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          {step.inputs.map((input, inputIndex) => (
            <div key={inputIndex} className="flex gap-4 mb-4">
              <DynamicInputField
                label="Name"
                name={`name-${inputIndex}`}
                type="text"
                value={input.name}
                onChange={(value) => handleInputChange(stepIndex, inputIndex, "name", value)}
              />
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Type</label>
                <select
                  value={input.type}
                  onChange={(e) => handleInputChange(stepIndex, inputIndex, "type", e.target.value)}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="email">Email</option>
                  <option value="password">Password</option>
                  <option value="date">Date</option>
                  <option value="tel">Telephone</option>
                  <option value="url">URL</option>
                </select>
              </div>
              <DynamicInputField
                label="Label"
                name={`label-${inputIndex}`}
                type="text"
                value={input.label}
                onChange={(value) => handleInputChange(stepIndex, inputIndex, "label", value)}
              />
              <DynamicInputField
                label="ID"
                name={`id-${inputIndex}`}
                type="text"
                value={input.id}
                onChange={(value) => handleInputChange(stepIndex, inputIndex, "id", value)}
              />
              <button
                onClick={() => deleteInputGroup(stepIndex, inputIndex)}
                className="bg-red-500 text-white rounded-md px-4 py-2 self-end hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={() => addInputGroup(stepIndex)}
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none"
          >
            Add Input
          </button>
          <button
            onClick={() => removeStep(stepIndex)}
            className="bg-red-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-red-600 focus:outline-none"
          >
            Remove Step
          </button>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white rounded-md px-4 py-2 mt-6 hover:bg-blue-600 focus:outline-none"
      >
        Submit Form
      </button>
    </div>
  );
};

export default FormBuilder;
