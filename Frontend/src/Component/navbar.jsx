import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Employer Portal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/admin" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/myjobs" className="hover:text-gray-300">My Jobs</Link>
          <Link to="/post-job" className="hover:text-gray-300">Post Job</Link>
          <Link to="/applicants" className="hover:text-gray-300">Applicants</Link>
          <Link to="/company" className="hover:text-gray-300">Company Profile</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/settings" className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200">
            Settings
          </Link>
          <Link to="/logout" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </Link>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-2 px-4 py-3">
          <Link to="/admin" className="block hover:text-gray-300">Dashboard</Link>
          <Link to="/myjobs" className="block hover:text-gray-300">My Jobs</Link>
          <Link to="/post-job" className="block hover:text-gray-300">Post Job</Link>
          <Link to="/applicants" className="block hover:text-gray-300">Applicants</Link>
          <Link to="/company" className="block hover:text-gray-300">Company Profile</Link>
          <hr className="border-gray-600 my-2"/>
          <Link to="/settings" className="block bg-white text-gray-900 px-3 py-2 rounded">Settings</Link>
          <Link to="/logout" className="block bg-red-500 text-white px-3 py-2 rounded">Logout</Link>
        </div>
      )}
    </nav>
  );
}
