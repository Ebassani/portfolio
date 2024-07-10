import React from 'react';
import '../styles/Skills.css';

const icons = [
  {name: "Rust", path:require('../icons/rust.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/css-3.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/docker-icon.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/firebase.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/git-icon.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/google-cloud.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/html-5.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/javascript.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/java.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/kotlin-icon.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/nodejs-icon.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/python.svg').default, link:"link/to/page"},
  {name: "Rust", path:require('../icons/tensorflow.svg').default, link:"link/to/page"},
]



const Skills = (props) => {
  return (
    <div className="skills-container">
      <div className='title'>
        <h2>Skills</h2>
      </div>
      <div className='skills'>
        {icons.map(icon => (
          <div className='skill_icon'>
            <img src={icon.path} alt={icon.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;