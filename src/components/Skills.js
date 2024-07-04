import React from 'react';
import '../styles/Skills.css';


const Skills = (props) => {
  return (
    <div className="skills-container">
      <div className='title'>
        <h2>Skills</h2>
      </div>
      <div className="cards">
        {props.skills.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.skill}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;