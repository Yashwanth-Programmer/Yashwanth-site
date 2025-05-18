import React from "react";
import "../styles/style.css";

const caseStudies = [
  {
    category: "Tourist App",
    categoryClass: "case-label-tourist",
    buttonClass: "case-btn-tourist",
    title: "Smart Tourist Guide",
    description: "A Python-based app that helps tourists discover attractions, plan routes, and get real-time recommendations using intelligent algorithms.",
    button: "View Project",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    reverse: false
  },
  {
    category: "Quiz App",
    categoryClass: "case-label-quiz",
    buttonClass: "case-btn-quiz",
    title: "Interactive Quiz Platform",
    description: "A full-stack MERN application for creating, sharing, and taking quizzes. Features real-time scoring, user authentication, and a modern UI.",
    button: "View Project",
    image: "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg?auto=compress&w=800&q=80",
    reverse: true
  },
  {
    category: "Data Analysis",
    categoryClass: "case-label-data",
    buttonClass: "case-btn-data",
    title: "Customer Churn Prediction",
    description: "A data science project using machine learning to predict customer churn. Includes data cleaning, feature engineering, model training, and insightful visualizations.",
    button: "View Project",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&w=800&q=80",
    reverse: false
  }
];

function CaseStudies() {
  return (
    <section className="case-studies-section flat-bg">
      <div className="case-studies-header">
        <h2 className="case-studies-title flat-title">Case Studies</h2>
        <p className="case-studies-desc flat-desc">
          Solving user & business problems since last 15+ years.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="case-studies-list">
        {caseStudies.map((study, idx) => (
          <div className={`case-study-card flat-card${study.reverse ? ' reverse' : ''}`} key={idx}>
            <div className="case-study-content">
              <span className={`case-label ${study.categoryClass}`}>{study.category}</span>
              <h3 className="case-study-heading flat-heading">{study.title}</h3>
              <p className="flat-desc2">{study.description}</p>
              <button className={`case-btn ${study.buttonClass}`}>{study.button}</button>
            </div>
            <div className="case-study-image flat-image">
              <img src={study.image} alt={study.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies; 