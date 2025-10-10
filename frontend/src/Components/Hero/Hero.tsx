import React from "react";
import "../Hero/Hero.css";
import homeimg from "../../assets/Images/homeimg.jpg";
import EmmanuelCV from "../../assets/EmmanuelCV.pdf";

const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-info">
        <h1>Hi, It's Emmanuel Guru 😊</h1>
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
          I am a computer science student at Masinde Muliro University,
          Innovative and results-driven Software Developer with a solid background in full-stack web development, data analysis, and 
          UI/UX design. Passionate about building scalable applications and intuitive user experiences. Skilled in modern technologies 
          including React.js, Node.js, Django, and Express.js, with experience delivering high-quality solutions. Proficient in data analysis 
          and visualization, enabling data-driven decision-making. Adept at cross-functional collaboration, project management, and 
          leveraging cloud computing to deploy reliable applications. 
        </p>
        <div className="btn-sci">
          <a
            href={EmmanuelCV}
            download="EmmanuelCV.pdf"
            className="btn"
          >
            Download CV
          </a>
          <div className="sci">
            <a href="https://github.com/.">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
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
            <img src={homeimg} alt="Emmanuel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
