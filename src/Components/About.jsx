import React from 'react';
import ME from '../Assets/me.jpeg';
import { FaAward } from 'react-icons/fa';
import { GrPersonalComputer } from 'react-icons/gr';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="row align-items-center mb-4">

          
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <div className="about_me-image mx-auto mb-4">
              <img src={ME} alt="About Image" className="img-fluid rounded" />
            </div>
          </div>


          <div className="col-12 col-md-8 about_content text-center text-md-start">
            <div className="about_cards d-flex flex-wrap justify-content-center gap-3 mb-3">

              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Education</h5>
                <small>8+ SGPA</small>
              </article>

              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Achievements</h5>
                <small>Smart India Hackathon Final Participant</small>
              </article>

              <article className="about_card">
                <GrPersonalComputer className="about_icon" />
                <h5>Career Objective</h5>
                <small>Aspiring Web Developer & Analyst</small>
              </article>

            </div>

            <p>
              Hi, I’m Ishan — a B.Tech student passionate about tech and problem-solving. 
              I love building creative projects, exploring new tools, and sharpening my skills. 
              As a fresher, I bring curiosity, adaptability, and a drive to learn fast. 
              My goal is to grow into a well-rounded professional while contributing to impactful projects.
            </p>

            <a href="#contact" className="btn btn-dark text-white mt-3 d-block d-lg-inline mx-auto mx-lg-0">Let's Talk</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
