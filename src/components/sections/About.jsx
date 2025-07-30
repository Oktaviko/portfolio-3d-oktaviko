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
                memiliki minat besar dalam pengembangan aplikasi web dan mobile.
                Selama masa kuliah, saya aktif membuat beberapa proyek untuk
                melatih kemampuan saya dalam membangun aplikasi yang fungsional
                dan menarik secara tampilan.
              </p>

              <p className="about-paragraph">
                Saat ini saya masih terus belajar dan mengembangkan diri dalam
                berbagai teknologi pengembangan software, baik di sisi frontend,
                backend, maupun pengelolaan basis data. Beberapa teknologi yang
                sudah saya pelajari dan gunakan dalam proyek antara lain
                JavaScript, PHP, Flutter, serta framework-framework pendukung
                lainnya.
              </p>

              <p className="about-paragraph">
                Saya percaya bahwa proses belajar adalah bagian penting dari
                perjalanan karier saya, dan saya selalu bersemangat untuk
                mencoba hal baru, meningkatkan skill yang saya miliki, dan terus
                berkembang menjadi developer yang lebih baik.
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
                    Node.js, Express.js, MySQL
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
