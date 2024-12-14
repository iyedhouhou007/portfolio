import React, { useState } from "react";
import "./NavBar.css";
import "@fontsource/material-symbols-outlined";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-container">
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
            <button className="contact-btn">Hire Me</button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
