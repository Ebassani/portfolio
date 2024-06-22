import React from 'react';
import '../styles/Skills.css';


const Skills = (props) => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-cards">
        {props.skills.map((item, index) => (
          <div key={index} className="skill-card">
            <h3>{item.skill}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;