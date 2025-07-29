// src/components/sections/About.jsx
import React from "react";
import { Code, Briefcase } from "lucide-react";
import { SKILLS } from "../../utils/constants";
import "../../styles/components/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <div className="about-grid">
            <div className="about-text">
              <h3 className="about-subtitle">
                Fresh Graduate in Information Technology
              </h3>

              <p className="about-paragraph">
                Saya adalah lulusan baru dari jurusan Teknologi Informasi yang
                memiliki passion tinggi dalam web development. Selama masa
                perkuliahan, saya telah mengembangkan berbagai project yang
                menggabungkan kreativitas dengan teknologi terdepan.
              </p>

              <p className="about-paragraph">
                Keahlian saya meliputi frontend development dengan React,
                backend development dengan Node.js dan Express.js, serta
                database management. Saya selalu antusias untuk mempelajari
                teknologi baru dan menerapkannya dalam project-project inovatif.
              </p>

              <div className="skills-overview">
                <div className="skill-card">
                  <Code className="skill-icon frontend" size={24} />
                  <h4 className="skill-title">Frontend</h4>
                  <p className="skill-description">
                    React, JavaScript, HTML, CSS
                  </p>
                </div>

                <div className="skill-card">
                  <Briefcase className="skill-icon backend" size={24} />
                  <h4 className="skill-title">Backend</h4>
                  <p className="skill-description">
                    Node.js, Express.js, MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <div className="skills-card">
                <h3 className="skills-title">Skills & Technologies</h3>
                <div className="skills-list">
                  {SKILLS.map((item, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{item.skill}</span>
                        <span className="skill-percentage">{item.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
