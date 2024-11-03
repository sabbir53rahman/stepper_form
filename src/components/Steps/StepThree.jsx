import React from 'react';

const StepThree = ({ formData, setFormData }) => (
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Address</h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default StepThree;
