import React from "react";
import { ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Home.css";

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section pt-32 text-center">
      <div className="hero-content">
        {/* Foto Profil */}
        <div className="home-avatar">
          <div className="avatar-circle">
            <img
              src="/images/profile.jpg" // Pastikan file ini ada di /public/images/
              alt="Profile"
              className="avatar-image"
            />
          </div>
        </div>
        
        <h1 className="hero-title">{PERSONAL_INFO.name}</h1>
        <h2 className="hero-subtitle">{PERSONAL_INFO.title}</h2>
        <p className="hero-description">{PERSONAL_INFO.description}</p>

        {/* Tombol CTA */}
        <div className="cta-buttons">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary-gradient"
          >
            🚀 View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary-outline"
          >
            📬 Get In Touch
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={32} className="bounce-icon" />
      </div>
    </section>
  );
};

export default Home;
