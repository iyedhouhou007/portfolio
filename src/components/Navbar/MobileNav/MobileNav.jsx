import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu, toggleModal }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./assets/images/logo.svg" alt="Logo" />

          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact-me" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={toggleModal}>
              Hire Me
            </button>{" "}
            {/* Open the modal */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
