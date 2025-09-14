import React from "react";
import "../Navbar/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        My Portfolio.
      </a>
      <div className="menu-toggle" id="menu-toggle">
        <i className="bx bx-menu"></i>
      </div>
      <ul className="nav-menu" id="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="https://github.com/">ViewWorks</a>
        </li>
        <li>
          <a href="#contact">HireMe</a>
        </li>
        <li>
          <a href="Emmanuel_cv.pdf" download>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
