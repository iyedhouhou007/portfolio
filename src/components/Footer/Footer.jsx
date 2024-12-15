import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&#169; 2024 HOUHOU Mohamed Iyed. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://www.facebook.com/iyedhouho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-iyad-abdelhadi-houhou-816252233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/iyedhouhou007"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="quick-links">
          <a href="#skills">Skills</a>
          <a href="#work-experience">Work Experience</a>
          <a href="#contact-me">Contact</a>
        </div>

        <div className="contact-info">
          <p>
            Email:
            <a href="mailto:Houhou.med.iyed@gmail.com">
              Houhou.med.iyed@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+213549845542">+213549845542</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
