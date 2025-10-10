import React from "react";
import "./Projects.css";
import hotel from "../../assets/Images/hotel.png";
import event from "../../assets/Images/event.png";
import medilab from "../../assets/Images/medilab.png"


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
              src={hotel}
              alt="VelvetStay project"
              className="project-img"
            />
            <p className="project-desc">
              A hotel management system for managing rooms and ordering food.
            </p>
            <a href="https://hotel-management-system-hazel.vercel.app/" target="_blank">
              <button className="project-btn">View</button>
            </a>
          </div>

          {/* MediLab Project */}
          <div className="project-card">
            <h3 className="project-name">MediLab</h3>
            <img
              src={medilab}
              alt="MediLab project"
              className="project-img"
            />
            <p className="project-desc">
              A hospital management system for patients, nurses, doctors, and
              other staff.
            </p>
            <a href="https://medilab-beige.vercel.app/" target="_blank">
             <button className="project-btn">View</button>
            </a>
          </div>

          {/* EventFastisha Project */}
          <div className="project-card">
            <h3 className="project-name">EventFastisha</h3>
            <img
              src={event}
              alt="EventFastisha project"
              className="project-img"
            />
            <p className="project-desc">
              A system for arranging events and booking rooms for events.
            </p>
            <a href="" target="_blank">
             <button className="project-btn">View</button>
            </a>
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
