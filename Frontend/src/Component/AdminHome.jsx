import React from "react";

export default function AdminHome() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-gray-500">Total Jobs</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-2">120</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-gray-500">Applicants</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-2">458</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-gray-500">Active Employers</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-2">87</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-gray-500">Pending Reviews</h3>
          <p className="text-3xl font-semibold text-gray-800 mt-2">12</p>
        </div>
      </div>

      {/* Recent Jobs Table */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Job Posts</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Applicants</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Frontend Developer</td>
              <td className="p-3">TechCorp</td>
              <td className="p-3">25</td>
              <td className="p-3 text-green-600">Active</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">UI Designer</td>
              <td className="p-3">Designify</td>
              <td className="p-3">10</td>
              <td className="p-3 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
