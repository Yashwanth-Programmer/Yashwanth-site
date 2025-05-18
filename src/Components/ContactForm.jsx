import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
function ContactForm() {
  return (
    <div>
       <center>
    <section className="contact-section">
      <h2 className="contact-title">Let's make something great together!</h2>
      <p className="contact-desc">
      Have an idea or project in mind? I’d love to hear from you. Reach out anytime at yanamadalayash@gmail.com or use the form below — let’s make it happen.
</p>
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
    </center>
    </div>
  );
}

export default ContactForm; 