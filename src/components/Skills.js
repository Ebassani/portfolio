import React from 'react';
import '../styles/Skills.css';

const icons = [
  {name: "Rust", path:require('../icons/rust.svg').default, link:"link/to/page"}
]



const Skills = (props) => {
  return (
    <div className="skills-container">
      <div className='title'>
        <h2>Skills</h2>
      </div>
      {icons.map(icon => (
        <div>
          <img src={icon.path} alt={icon.name} />
        </div>
      ))}
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