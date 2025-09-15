import React, { useState } from "react";
import "../Navbar/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        My Portfolio.
      </a>

      {/* Menu Toggle Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </div>

      {/* Nav Menu */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="https://github.com/" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>Hire</a>
        </li>
        <li>
          <a href="Emmanuel_cv.pdf" download onClick={() => setIsOpen(false)}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
        <li>
          <a href="Certifications" onClick={() => setIsOpen(false)}>Certifications</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
