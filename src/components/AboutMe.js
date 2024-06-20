import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="your-picture-url.jpg" alt="Your Name" className="profile-pic" />
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>Hello! I'm Eduardo, a developer based in Hämeenlinna, Finland.</p>
      </div>
    </div>
  );
};

export default AboutMe;