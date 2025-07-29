// src/components/sections/Home.jsx
import React from "react";
import { User, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Home.css";

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-avatar">
          <div className="avatar-circle">
            <User size={60} className="avatar-icon" />
          </div>
        </div>

        <h1 className="home-title">{PERSONAL_INFO.name}</h1>

        <h2 className="home-subtitle">{PERSONAL_INFO.title}</h2>

        <p className="home-description">{PERSONAL_INFO.description}</p>

        <div className="home-actions">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary"
          >
            Get In Touch
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
