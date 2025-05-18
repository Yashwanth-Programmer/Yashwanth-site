import React from "react";
import "../styles/style.css";
import { FaJava, FaDatabase, FaGlobe ,FaLightbulb } from "react-icons/fa";
import { SiPython, SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";

function WorkedWith() {
  return (
    <section className="worked-with-section">
      <div className="worked-with-title">Skills I Aquired</div>
      <div className="worked-with-logos">
        <div className="company-logo"><FaJava size={28} /> <span>Java</span></div>
        <div className="company-logo"><SiPython size={28} /> <span>Python</span></div>
        <div className="company-logo"><SiMongodb size={28} /> <span>Mern Stack</span></div>
        <div className="company-logo"><SiReact size={28} /> <span>Full Stack </span></div>
        <div className="company-logo"><FaDatabase size={28} /> <span>Data Analytics</span></div>
        <div className="company-logo"><FaLightbulb  size={28} /> <span>Problem Solving</span></div>
      </div>
    </section>
  );
}

export default WorkedWith; 