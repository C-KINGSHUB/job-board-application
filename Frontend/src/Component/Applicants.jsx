import React, { useState } from "react";
import { Search, User, Mail, FileText, CheckCircle, XCircle } from "lucide-react";

export default function Applicants() {
  const [searchTerm, setSearchTerm] = useState("");

  const applicants = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      position: "Frontend Developer",
      status: "Pending",
      resume: "#",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      position: "Backend Developer",
      status: "Accepted",
      resume: "#",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      position: "UI/UX Designer",
      status: "Rejected",
      resume: "#",
    },
  ];

  const filteredApplicants = applicants.filter((applicant) =>
    applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 md:mb-0">
            👥 Applicants
          </h2>

          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search applicants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Position</th>
                <th className="px-6 py-3">Resume</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.length > 0 ? (
                filteredApplicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-3 flex items-center gap-2">
                      <User size={18} /> {applicant.name}
                    </td>
                    <td className="px-6 py-3 flex items-center gap-2">
                      <Mail size={18} /> {applicant.email}
                    </td>
                    <td className="px-6 py-3">{applicant.position}</td>
                    <td className="px-6 py-3">
                      <a
                        href={applicant.resume}
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <FileText size={16} /> View
                      </a>
                    </td>
                    <td className="px-6 py-3">
                      {applicant.status === "Accepted" && (
                        <span className="flex items-center text-green-600 font-medium gap-1">
                          <CheckCircle size={16} /> Accepted
                        </span>
                      )}
                      {applicant.status === "Pending" && (
                        <span className="flex items-center text-yellow-500 font-medium gap-1">
                          ⏳ Pending
                        </span>
                      )}
                      {applicant.status === "Rejected" && (
                        <span className="flex items-center text-red-500 font-medium gap-1">
                          <XCircle size={16} /> Rejected
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No applicants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
