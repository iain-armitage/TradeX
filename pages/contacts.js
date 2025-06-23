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
    </table
