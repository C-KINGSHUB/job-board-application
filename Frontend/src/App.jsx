import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./Component/Owner";
import Navbar from "./Component/Navbar";
import AdminDashboard from "./Component/AdminDashboard";
import Applicants from "./Component/Applicants";
import PostJob from "./Component/PostJob";
import MyJobs from "./Component/MyJobs";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Owner />} /> {/* Home/Owner page */}
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
        <Route path="/applicants" element={<Applicants />} /> {/* Applicants page */}
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/myjobs" element={<MyJobs />} />

      </Routes>
    </Router>
  );
}
