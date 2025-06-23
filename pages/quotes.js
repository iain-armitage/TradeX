import React, { useState } from "react";

const sampleQuotes = [
  {
    id: "Q-001",
    client: "SB Homes",
    project: "12 Unit Residential - Bondi",
    status: "Submitted",
    date: "2025-06-20",
    total: "$148,200",
  },
  {
    id: "Q-002",
    client: "Urban Build Co",
    project: "Retail Fitout - Parramatta",
    status: "Draft",
    date: "2025-06-18",
    total: "$86,900",
  },
  {
    id: "Q-003",
    client: "Level Projects",
    project: "High School Upgrade - Liverpool",
    status: "Won",
    date: "2025-06-10",
    total: "$221,500",
  },
];

const Quotes = () => {
  const [quotes, setQuotes] = useState(sampleQuotes);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Quotes</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl">
          + New Quote
        </button>
      </div>

      <table className="w-full text-left text-sm">
        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="p-2">Quote ID</th>
            <th className="p-2">Client</th>
            <th className="p-2">Project</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
            <th className="p-2">Total</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id} className="border-b dark:border-gray-700">
              <td className="p-2">{quote.id}</td>
              <td className="p-2">{quote.client}</td>
              <td className="p-2">{quote.project}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    quote.status === "Won"
                      ? "bg-green-100 text-green-800"
                      : quote.status === "Submitted"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {quote.status}
                </span>
              </td>
              <td className="p-2">{quote.date}</td>
              <td className="p-2">{quote.total}</td>
              <td className="p-2 text-center">
                <button className="text-indigo-600 hover:underline text-sm">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quotes;
