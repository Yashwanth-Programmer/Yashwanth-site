import React, { useState, useEffect } from "react";
import "../styles/style.css";
import heroimage from "../Assets/HeroImage.png";
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWave(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">
          <Typewriter
            words={['HELLO THERE']}
            loop={1}
            cursor={true}
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={true}
            cursorColor='#FF3366'
          />
          {showWave && <span className="wave-emoji"></span>}
        </h1>
        <p className="hero-intro">
          I'm <span className="hero-name">YASH</span><br/>
          A passionate developer who enjoys building clean, responsive web applications and tackling complex problems through Java. With a strong focus on both Back-end and algorithmic thinking, I constantly push myself to write efficient, maintainable code and grow as an engineer.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn">MY RESUME</button>
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={heroimage} alt="Profile" />
      </div>
    </section>
  );
}

export default HeroSection; 