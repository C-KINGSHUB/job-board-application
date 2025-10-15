import { Briefcase, Users, Building2, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen">
      <h2 className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        Admin Panel
      </h2>

      <nav className="mt-6 space-y-2">
        <Link
          to="/myjobs"
          className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800"
        >
          <Briefcase size={18} /> Manage Jobs
        </Link>

        <Link
          to="/applicants"
          className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800"
        >
          <Users size={18} /> Applicants
        </Link>

        <Link
          to="/"
          className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800"
        >
          <Building2 size={18} /> Employers
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 px-6 py-2 hover:bg-gray-800"
        >
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
