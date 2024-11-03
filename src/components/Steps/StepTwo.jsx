import React from 'react';

const StepTwo = ({ formData, setFormData }) => (
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Contact Information</h2>
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default StepTwo;
