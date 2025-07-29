// src/components/sections/Projects.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projectsData";
import "../../styles/components/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            Berikut adalah beberapa project yang telah saya kerjakan selama masa
            perkuliahan. Setiap project menunjukkan kemampuan teknis dan
            kreativitas dalam menyelesaikan masalah.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link github">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-link demo">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
