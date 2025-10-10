import React from "react";
import { Briefcase, Users, Building2, Settings } from "lucide-react";

export default function AdminSidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`bg-gray-900 text-white w-64 min-h-screen transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-64 fixed md:relative`}
    >
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav className="mt-6 space-y-2">
        <a href="#" className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800">
          <Briefcase size={18} /> Manage Jobs
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800">
          <Users size={18} /> Applicants
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800">
          <Building2 size={18} /> Employers
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800">
          <Settings size={18} /> Settings
        </a>
      </nav>
    </aside>
  );
}
