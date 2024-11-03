import React from 'react';

const Summary = ({ formData }) => (
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Summary</h2>
    <div className="space-y-4">
      <div className="flex justify-between border-b pb-2">
        <strong className="text-gray-600">First Name:</strong>
        <span>{formData.firstName}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <strong className="text-gray-600">Last Name:</strong>
        <span>{formData.lastName}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <strong className="text-gray-600">Email:</strong>
        <span>{formData.email}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <strong className="text-gray-600">Phone Number:</strong>
        <span>{formData.phone}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <strong className="text-gray-600">Address:</strong>
        <span>{formData.address}</span>
      </div>
      <div className="flex justify-between">
        <strong className="text-gray-600">City:</strong>
        <span>{formData.city}</span>
      </div>
    </div>
    <button
      onClick={() => alert("Form Submitted!")}
      className="mt-8 w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      Submit
    </button>
  </div>
);

export default Summary;
