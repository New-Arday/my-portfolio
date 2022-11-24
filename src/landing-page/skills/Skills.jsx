import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="dev-skills-section-box">
      <h2 className="dev-skills-section__heading">Skills</h2>
      <div className="dev-skills-section">
        <div className="front-end skills-card">
          <h3 className="dev-skills__heading">Front-End</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="back-end skills-card">
          <h3 className="dev-skills__heading">Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div className="other skills-card">
          <h3 className="dev-skills__heading">Other</h3>
          <ul>
            <li>Rest-API</li>
            <li>OOP</li>
            <li>TDD</li>
            <li>Git/GitHub</li>
            <li>NPM</li>
            <li>Material UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
