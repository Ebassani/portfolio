import React from 'react';
import '../styles/AboutMe.css';
import image from '../images/Portrait.jpg'

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={image} alt="Eduardo" className="profile-pic" />
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>Hello! I'm Eduardo, a developer based in Hämeenlinna, Finland.</p>
      </div>
    </div>
  );
};

export default AboutMe;