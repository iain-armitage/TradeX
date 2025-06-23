import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { date: "01 Jun", revenue: 10000 },
  { date: "05 Jun", revenue: 12500 },
  { date: "10 Jun", revenue: 16500 },
  { date: "15 Jun", revenue: 20000 },
  { date: "20 Jun", revenue: 23000 },
  { date: "23 Jun", revenue: 28000 },
];

const quotesData = [
  { date: "Week 1", quotes: 5 },
  { date: "Week 2", quotes: 8 },
  { date: "Week 3", quotes: 6 },
  { date: "Week 4", quotes: 10 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="text-gray-500">Active Projects</p>
          <p className="text-2xl font-semibold">7</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="text-gray-500">Quotes Won</p>
          <p className="text-2xl font-semibold">23</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="text-gray-500">Upcoming Tasks</p>
          <p className="text-2xl font-semibold">12</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="text-gray-500">Revenue This Month</p>
          <p className="text-2xl font-semibold">$28,000</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="mb-2 font-medium">Revenue Forecast</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
          <p className="mb-2 font-medium">Quotes Won Per Week</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quotesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quotes" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
        <p className="mb-2 font-medium">This Week’s Activity</p>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✔️ Site audit completed at Project Alpha</li>
          <li>📤 Submitted quote for 12-unit residential at Bondi</li>
          <li>🚧 New project started at Liverpool High School</li>
          <li>📆 Scheduled QA inspection for Project Luna (Thursday)</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
