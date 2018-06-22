import React from 'react';
// import Carousel from 'react-bootstrap/lib/Carousel';

const Projects = (props) => {
  return (
    <div id="projects-container" className="section-container">
      <h3 className="section-headers" id="projects-header">Featured Projects</h3>
      <div id="projects" className="align">
        {props.projects.map((project) => {
          return (
            <div id={project.id} className="project">
              <a href={project.url} target="_blank">
                <img src={project.image} className="project-image" />
              </a>
              <div id="project-name">{project.name}</div>
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Projects;