import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Empowering Technology, One Solution at a Time</h2>
          <p>
            Passionate Computer Science Student | Bridging Innovation with
            Real-World Applications in Robotics, Web Development, and IoT.
            Transforming ideas into impactful digital experiences.
          </p>
        </div>
      </div>

      <div className="hero-img">
        {/* Personal Image and React Icon */}
        <div className="personal-img-container">
          <div className="tech-image">
            <img
              src="./assets/images/react.png"
              alt="React.js"
              title="React.js - JavaScript library for building UIs"
            />
          </div>

          <img
            src="./assets/images/PersonalImg.png"
            alt="Iyed"
            className="personal-img"
          />
        </div>

        {/* Tech Icons */}
        <div className="tech-images-container">
          <div className="tech-image">
            <img
              src="./assets/images/html5.svg"
              alt="HTML5"
              title="HTML5 - Web development"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/css3.svg"
              alt="CSS3"
              title="CSS3 - Styling"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/js.png"
              alt="JavaScript"
              title="JavaScript - Programming language for web development"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/python.png"
              alt="Python"
              title="Python - General-purpose programming language"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/java.png"
              alt="Java"
              title="Java - Object-oriented programming language"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/php.png"
              alt="PHP"
              title="PHP - Server-side scripting language"
            />
          </div>
          <div className="tech-image">
            <img
              src="./assets/images/arduino-ide.svg"
              alt="Arduino IDE"
              title="Arduino IDE - Embedded development platform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
