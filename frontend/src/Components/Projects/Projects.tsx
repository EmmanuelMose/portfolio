import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-box">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-label">These are my projects</p>

        <div className="projects-container">
          {/* VelvetStay Project */}
          <div className="project-card">
            <h3 className="project-name">VelvetStay</h3>
            <img
              src="https://via.placeholder.com/300x180"
              alt="VelvetStay project"
              className="project-img"
            />
            <p className="project-desc">
              A hotel management system for managing rooms and ordering food.
            </p>
            <button className="project-btn">View</button>
          </div>

          {/* MediLab Project */}
          <div className="project-card">
            <h3 className="project-name">MediLab</h3>
            <img
              src="https://via.placeholder.com/300x180"
              alt="MediLab project"
              className="project-img"
            />
            <p className="project-desc">
              A hospital management system for patients, nurses, doctors, and
              other staff.
            </p>
            <button className="project-btn">View</button>
          </div>

          {/* EventFastisha Project */}
          <div className="project-card">
            <h3 className="project-name">EventFastisha</h3>
            <img
              src="https://via.placeholder.com/300x180"
              alt="EventFastisha project"
              className="project-img"
            />
            <p className="project-desc">
              A system for arranging events and booking rooms for events.
            </p>
            <button className="project-btn">View</button>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="more-projects">
          <p>View other projects</p>
          <a
            href="https://github.com/EmmanuelMose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-btn">GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
