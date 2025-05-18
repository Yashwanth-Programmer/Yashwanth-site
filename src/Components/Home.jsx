import react from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WorkedWith from "./WorkedWith";
import CaseStudies from "./CaseStudies";
import ContactForm from "./ContactForm";
import "../styles/style.css";

function Home (){
  return (
    <>
      <div className="main-grid">
        <Navbar />
        <HeroSection />
        <WorkedWith />
      </div>
      <div className="case-studies-bg-full">
        <div className="main-grid">
          <CaseStudies />
        </div>
      </div>
      <ContactForm />
    
    </>
  );
};

export default Home; 