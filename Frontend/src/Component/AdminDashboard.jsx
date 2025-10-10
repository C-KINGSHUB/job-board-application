import React, { useState } from "react";
import Navbar from "./Navbar";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <AdminHome />
        </main>
      </div>
    </div>
  );
}
