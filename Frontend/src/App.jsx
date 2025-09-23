import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./Component/Owner";
import Navbar from "./Component/Navbar";


export default function App() {
  return (
    <>
      
        <Navbar/>
        <Owner  />
      
    </>
  );
}
