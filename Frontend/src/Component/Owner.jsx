import React from "react";
import { Building, CheckCircle, Users, TrendingUp } from "lucide-react";
import Navbar from "./Navbar";

export default function Owner() {
  // Example job data (you should fetch or pass this as props)
  const jobs = [
    { id: 1, status: "active", applicants: 5 },
    { id: 2, status: "closed", applicants: 8 },
    { id: 3, status: "active", applicants: 3 },
  ];

  return (
    <>
    <Navbar/>
    <div className="space-y-6">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
            </div>
            <Building className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <span className="text-green-600">↗ 2</span> from last month
          </p>
        </div>

        {/* Active Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-900">
                {jobs.filter((j) => j.status === "active").length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <span className="text-green-600">↗ 1</span> from last week
          </p>
        </div>

        {/* Total Applicants */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Applicants
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {jobs.reduce((sum, job) => sum + job.applicants, 0)}
              </p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <span className="text-green-600">↗ 12</span> this week
          </p>
        </div>

        {/* Avg. Applications */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg. Applications
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  jobs.reduce((sum, job) => sum + job.applicants, 0) /
                    jobs.length
                )}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">per job posting</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm">
                New application received for{" "}
                <span className="font-medium">Senior Frontend Developer</span>
              </p>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm">
                Interview scheduled for{" "}
                <span className="font-medium">Product Manager</span> position
              </p>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="text-sm">
                <span className="font-medium">UX Designer</span> job posting
                paused
              </p>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <p className="text-sm">
                Candidate hired for{" "}
                <span className="font-medium">Data Analyst</span> position
              </p>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
