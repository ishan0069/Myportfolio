import React from 'react';
import './Skill.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Frontend Skills */}
          <div className="col-12 col-md-6">
            <div className="skill_card p-4 h-100">
              <h3>Frontend Development</h3>
              <div className="skill_grid">
                {["HTML","CSS","Javascript","Bootstrap","React Js"].map((skill) => (
                  <article key={skill} className="skill_details d-flex align-items-center gap-2">
                    <AiFillCheckCircle className="skill_details-icon"/>
                    <div>
                      <h4>{skill}</h4>
                      <small className="text-light">Intermediate</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Data Analysis Skills */}
          <div className="col-12 col-md-6">
            <div className="skill_card p-4 h-100">
              <h3>Data Analysis</h3>
              <div className="skill_grid">
                {["Python","Numpy","Pandas","Matplotlib","Seaborn","Scikit-learn"].map((skill, i) => (
                  <article key={skill} className="skill_details d-flex align-items-center gap-2">
                    <AiFillCheckCircle className="skill_details-icon"/>
                    <div>
                      <h4>{skill}</h4>
                      <small className="text-light">
                        {["Python"].includes(skill) ? "Experienced" : i === 5 ? "Beginner" : "Intermediate"}
                      </small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;
