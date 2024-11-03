import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import DynamicInputField from './components/DynamicInputField/DynamicInputField';

function App() {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    companyEmail: '',
    location: '',
    creationDate: '',
  });

  

  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEmployeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEmployees = [...employees];
    updatedEmployees[index][name] = value;
    setEmployees(updatedEmployees);
  };

  const addEmployee = () => {
    setEmployees([...employees, { name: '', birthdate: '', experience: '' }]);
  };

  const removeEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-beige shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Company Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <DynamicInputField
            label="Company Name"
            name="companyName"
            type="text"
            value={companyInfo.companyName}
            onChange={handleCompanyChange}
          />
          <DynamicInputField
            label="Company Email"
            name="companyEmail"
            type="email"
            value={companyInfo.companyEmail}
            onChange={handleCompanyChange}
          />
          <DynamicInputField
            label="Location"
            name="location"
            type="text"
            value={companyInfo.location}
            onChange={handleCompanyChange}
          />
          <DynamicInputField
            label="Date of Creation"
            name="creationDate"
            type="date"
            value={companyInfo.creationDate}
            onChange={handleCompanyChange}
          />
        </div>

        <h3 className="text-2xl font-semibold mt-8 text-gray-700">Employees Information</h3>
        {employees.map((employee, index) => (
          <div key={index} className="relative bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <button
              type="button"
              onClick={() => removeEmployee(index)}
              className="absolute top-2 right-2 bg-burgundy text-white w-10 h-10  rounded-full shadow bg-red-600"
            >
              &#10005;
            </button>
            <DynamicInputField
              label="Employee Name"
              name="name"
              type="text"
              value={employee.name}
              onChange={(e) => handleEmployeeChange(index, e)}
            />
            <DynamicInputField
              label="Birth Date"
              name="birthdate"
              type="date"
              value={employee.birthdate}
              onChange={(e) => handleEmployeeChange(index, e)}
            />
            <DynamicInputField
              label="Years of Experience"
              name="experience"
              type="number"
              value={employee.experience}
              onChange={(e) => handleEmployeeChange(index, e)}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addEmployee}
          className="bg-navy text-white px-4 py-2 rounded-lg shadow bg-blue-900 transition-shadow duration-200 mt-4"
        >
          Add Employee
        </button>

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800 transition-shadow duration-200 mt-6 w-full"
        >
          Submit
        </button>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Company Information</h2>
            <p><strong>Name:</strong> {companyInfo.companyName}</p>
            <p><strong>Email:</strong> {companyInfo.companyEmail}</p>
            <p><strong>Location:</strong> {companyInfo.location}</p>
            <p><strong>Created On:</strong> {companyInfo.creationDate}</p>

            <h3 className="text-xl font-bold mt-6">Employees</h3>
            {employees.map((employee, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="font-semibold">Employee {index + 1}</p>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Birthdate:</strong> {employee.birthdate}</p>
                <p><strong>Experience:</strong> {employee.experience} years</p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
