import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-box">
        <h2 style={{ textAlign: "center" }}>Contact</h2>
        <form id="contact-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <div className="button-container">
            <button type="submit">
              <span>Send via Email</span>
            </button>
            <button type="button" id="whatsapp-btn">
              <span>Send via WhatsApp</span>
              <i className="bx bxl-whatsapp"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
