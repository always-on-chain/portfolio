import React from 'react';

const Experience = (props) => {
  return (
    <div id="experience-container">
      <h3 id="experience-header">Experience</h3>
      <div id="experience">
        {props.experience.map((job) => {
          return (
            <div className="job-container">
              <img src={job.image} className="company-logo" />
              <div className="job-title">{job.title} - </div>
              <div className="employee-number">{job.employeeNum}</div>
              <div className="job-name">{job.name}</div>
              <div className="date">{job.date}</div>
              <div className="location">{job.location}</div>
              <div className="product-description">{job.productDescription}</div>
              {job.result.map((result) => {
                return <div className="results">{job.result}</div>
              })}
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Experience;

