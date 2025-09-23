import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / App Name */}
        <Link to="/" className="text-2xl font-bold">
          JobBoard
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/jobs" className="hover:text-gray-200">Browse Jobs</Link>
          <Link to="/post-job" className="hover:text-gray-200">Post a Job</Link>
          <Link to="/companies" className="hover:text-gray-200">Companies</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signin" className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100">
            Sign In
          </Link>
          <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 space-y-2 px-4 py-3">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/jobs" className="block hover:text-gray-300">Browse Jobs</Link>
          <Link to="/post-job" className="block hover:text-gray-300">Post a Job</Link>
          <Link to="/companies" className="block hover:text-gray-300">Companies</Link>
          <Link to="/contact" className="block hover:text-gray-300">Contact</Link>
          <hr className="border-gray-500 my-2"/>
          <Link to="/signin" className="block bg-white text-indigo-600 px-3 py-2 rounded">Sign In</Link>
          <Link to="/signup" className="block bg-yellow-400 text-black px-3 py-2 rounded">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
