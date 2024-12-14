import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqggjyr", // Replace with your EmailJS service ID
        "template_k75dve6", // Replace with your EmailJS template ID
        e.target,
        "3e0nVHgUDpbuTweOP" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Clear the form fields
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          required
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
