import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
function Footer() {
  return (
    <div className="main-grid contact-center-wrapper">
      <Navbar/>
      <section className="contact-section">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
        Got a question, feedback, or an idea you’d like to bring to life? I’d love to hear from you. Whether it’s a potential project, collaboration, or just a quick chat, feel free to reach out. I'm always open to exploring new opportunities and turning ideas into impactful work.        </p>
        <form className="contact-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Where we can reach you." required />
          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" name="mobile" placeholder="For quick contact, if needed." required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us what’s on your mind" rows={4} required />
          <button type="submit" className="hero-btn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Footer; 