import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <section className="about">
        <h2 className="about__me">About Me</h2>
        <div className="about__description">
          <p>
            <span className="about-intro">
              Hi, my name is Safia and I'm a Full Stack Developer.
            </span>
          </p>
          <p>
            I'm motivated and skilled front-end and back-end developer with
            strong knowledge of HTML, CSS, and JavaScript, Node.js, Express,
            Prisma, PostgreSQL knowledge of working with JavaScript React
            framework. Experienced with version control systems such as GIT.
            Constantly looking to develop myself by learning new technologies.
          </p>
          <p>
            I'm a graduate of Boolean.co.uk Tech academy where I learned the
            fundamentals of full-stack development. I also developed core
            skills, such as: independent learning, design and system-level
            thinking, and principles of clean code.
          </p>
        </div>

        <Link to="/resume" className="links-cta">
          Resume
        </Link>
      </section>
    </div>
  );
}

export default About;
