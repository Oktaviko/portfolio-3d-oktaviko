// src/components/common/Navigation.jsx
import React from "react";
import { Github, Linkedin } from "lucide-react";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import "../../styles/components/Navigation.css";

const Navigation = ({ currentSection, scrollToSection }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">Website Portofolio</div>

          <div className="nav-menu">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${
                  currentSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-social">
            <a
              href="https://github.com/Oktaviko"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/oktaviko-rizki-pratama/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
