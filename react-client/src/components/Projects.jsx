import React from 'react';

const Projects = (props) => {
  return (
    <div id="projects-container">
      <h3 id="projects-header">Featured Projects</h3>
      <div id="projects">
        {props.projects.map((project) => {
          return (
          <div id={project.name} className="project-container">
            <img src={project.image} className="project-image" />
            <div id="project-name">{project.name}</div>
          </div>
          )
        })}
    </div>
    </div>
  )
}

export default Projects;