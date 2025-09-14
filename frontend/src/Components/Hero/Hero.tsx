import React from "react";
import "../Hero/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-info">
        <h1>Hi, It's Emmanuel😊</h1>
        <h2>
          I'm a{" "}
          <span style={{ ["--i" as any]: 4 }} data-text="Frontend Developer">
            Frontend Developer
          </span>
          <span style={{ ["--i" as any]: 3 }} data-text="Backend Developer">
            Backend Developer
          </span>
          <span style={{ ["--i" as any]: 2 }} data-text="System Analyst">
            System Analyst
          </span>
          <span style={{ ["--i" as any]: 1 }} data-text="Designer">
            Designer
          </span>
        </h2>
        <p>
          I am a computer science student at Masinde Muliro University, passionate
          about technology and innovation. I am focused on both frontend and
          backend development. I am also skilled in computing fields such as data
          science, machine learning, artificial intelligence, data analysis, and
          cybersecurity. My aim is to transform the world through technology.
        </p>
        <div className="btn-sci">
          <a
            href="Emmanuel_cv.pdf"
            download="Emmanuel_cv(2).pdf"
            className="btn"
          >
            Download CV
          </a>
          <div className="sci">
            <a href="https://github.com/.">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com/home">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com/combmose/">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="emmanuel.jpg.jpg" alt="Emmanuel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
