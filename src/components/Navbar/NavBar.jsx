import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import Modal from "../Modal/Modal"; // Import the Modal component

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        toggleModal={toggleModal}
      />

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
            <button className="contact-btn" onClick={toggleModal}>
              Hire Me
            </button>{" "}
            {/* Open the modal */}
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal} />
    </>
  );
};

export default NavBar;
