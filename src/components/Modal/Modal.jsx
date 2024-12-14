import React from "react";
import ContactForm from "../ContactMe/ContactForm/ContactForm"; // Import the ContactForm component
import "./Modal.css";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Contact Me</h2>
        <ContactForm /> {/* Use the ContactForm component here */}
      </div>
    </div>
  );
};

export default Modal;
