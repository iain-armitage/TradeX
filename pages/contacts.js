import React, { useState } from "react";

const contactData = {
  Employees: [],
  Subcontractors: [],
  Clients: [],
  Suppliers: [],
};

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("Employees");
  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", role: "", phone: "", email: "" });

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactData[activeTab].push(newContact); // For now: updates in-memory mock
    console.log("Contact added to:", activeTab, newContact);
    setShowModal(false);
    setNewContact({ name: "", role: "", phone: "", email: "" });
  };

  const renderContacts = () => (
    <table className="w-full mt-4 text-left text-sm">
      <thead className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">{activeTab === "Employees" ? "Role" : "Company"}</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {contactData[activeTab].map((contact, index) => (
          <tr key={index} className="border-b dark:border-gray-700">
            <td className="p-2">{contact.name}</td>
            <td className="p-2">{contact.role || contact.company}</td>
            <td className="p-2">{contact.phone}</td>
            <td className="p-2">{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
        >
          + Add Contact
        </button>
      </div>

      <div className="flex space-x-4 mt-6">
        {Object.keys(contactData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-medium ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContacts()}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={newContact.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                name="role"
                value={newContact.role}
                onChange={handleChange}
                placeholder="Role or Company"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                name="phone"
                value={newContact.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                name="email"
                type="email"
                value={newContact.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
