import React from 'react';

const Projects = (props) => {
  return (
    <div id="projects-container" className="section-container">
      <h3 className="section-headers" id="projects-header">Featured Projects</h3>
      <div id="projects" className="align">
        {props.projects.map((project) => {
          return (
            <div id={project.id} className="project-container">
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