import React from "react";
import "../styles/style.css";
import LinkedIn from "../Assets/LinkedIn.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Get In Touch</Link></li>
        <li><Link to="/about">About Me</Link></li>
        </ul>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/yashwanth-yanamadala-554269279" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="linkedin icon" />
          </a>
          {/* <a href="#"><img src={Behance} alt="behance icon" /></a>
          <a href="#"><img src={Twitter} alt="twitter icon" /></a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

