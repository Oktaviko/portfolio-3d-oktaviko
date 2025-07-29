// src/components/sections/Contact.jsx
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut
            tentang project saya? Jangan ragu untuk menghubungi saya!
          </p>

          <div className="contact-cards">
            <div className="contact-card email">
              <Mail className="contact-icon" size={32} />
              <h3 className="contact-title">Email</h3>
              <p className="contact-info">{PERSONAL_INFO.email}</p>
            </div>

            <div className="contact-card github">
              <Github className="contact-icon" size={32} />
              <h3 className="contact-title">GitHub</h3>
              <p className="contact-info">{PERSONAL_INFO.github}</p>
            </div>

            <div className="contact-card linkedin">
              <Linkedin className="contact-icon" size={32} />
              <h3 className="contact-title">LinkedIn</h3>
              <p className="contact-info">{PERSONAL_INFO.linkedin}</p>
            </div>
          </div>

          <button className="download-cv-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
