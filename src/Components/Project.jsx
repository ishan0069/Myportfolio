import React from 'react';
import './Project.css';
import weather from './../Assets/image3.webp';

const Project = () => {
  const projects = [1, 2, 3]; // placeholder for 3 projects

  return (
    <section id="project">
      <h5>My Projects</h5>
      <h2>Projects</h2>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-10 col-md-6 col-lg-4">
              <div className="project_item text-center p-3">
                <div className="project_item-image mb-3">
                  <img src={weather} alt={`Project ${index + 1}`} className="img-fluid rounded" />
                </div>
                <h3>This is a project item title</h3>
                <div className="project_item-cta d-flex justify-content-center gap-2 mt-2">
                  <a href="http://github.com" className="btn btn-dark text-white">Github</a>
                  <a href="http://github.com" className="btn btn-dark text-white" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
