import React from 'react';
import '../styles/Projects.css';


const Projects = (props) => {
  return (
    <div className="projects-container" id="projects">
        <div className='title'>
        <h2>Projects</h2>
      </div>
      <div className="projects-cards">
        {props.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
