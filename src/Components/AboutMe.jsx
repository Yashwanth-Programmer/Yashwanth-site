import React from "react";
import Navbar from "./Navbar";
import { FaArrowDown, FaRobot, FaLaptopCode, FaBrain, FaGraduationCap } from "react-icons/fa";
import "../styles/AboutMe.css";

const skills = [
  {
    icon: <FaLaptopCode className="skill-icon" />, // Full Stack
    title: "Full Stack Developer",
    desc: "Building robust, scalable web applications with seamless integration of frontend, backend, and APIs for exceptional user experiences."
  },
  {
    icon: <FaBrain className="skill-icon" />, // Data Analyst
    title: "Data Analyst",
    desc: "Transforming raw data into actionable insights using advanced analytics, visualization, and data-driven decision making."
  }
];

const education = [
  {
    degree: "BTech - Computer Science and Engineering",
    institution: "Malla Reddy University",
    years: "2022 - 2026",
    details: [
      "Percentage: 83% - 6th Semester",
      "Field Studies: Advanced Algorithms & Data Structures,Machine Learning, Database Management Systems, Object Oriented Programming, Software Engineering, Artificial Intelligence etc."
    ]
  },
  {
    degree: "Intermediate - MPC",
    institution: "Narayana Junior College",
    years: "2020 - 2022",
    details: [
      "Percentage: 80%",
      "Field Studies: Mathematics, Physics, Chemistry.",
     
    ]
  },
  {
    degree: "CBSE - 10th",
    institution: "Narayana E-Techno School",
    years: "2019 - 2020",
    details: [
      "Percentage: 81%",
    
    ]
  }
];

const AboutMe = () => {
  return (
    <div className="about-container">
    <div className="main-grid" style={{background: "#fff"}}>
      <Navbar />
      <div className="about-content">
        {/* Intro Section */}
        <div className="about-intro">
          <p className="about-description">
          Hi, I'm Yashwanth, a final-year student at Malla Reddy University and a keen developer. My favorite thing is building intelligent web and AI solutions that are both powerful and elegant. Equipped with expertise in full-stack development and AI, I turn ideas into beautiful and seamless digital experiences.

            </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
        {/* Education Section */}
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-icon-wrapper">
                <FaGraduationCap className="education-icon" />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-years">{edu.years}</div>
                <ul className="education-extra">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;

