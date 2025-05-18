import React from "react";
import "./styles/style.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; 
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App; 