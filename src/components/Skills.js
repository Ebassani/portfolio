import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  { skill: 'JavaScript', description: 'Experienced in ES6+' },
  { skill: 'React', description: 'Skilled in building SPAs' },
  { skill: 'CSS', description: 'Proficient in styling with CSS' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-cards">
        {skillsData.map((item, index) => (
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