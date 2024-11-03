import React from 'react';

const StepOne = ({ formData, setFormData }) => (
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Personal Information</h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default StepOne;
