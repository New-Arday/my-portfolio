import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
const CvContent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="cv-container">
        <div className="cv-heading section">
          <h1>
            <span className="myName">Safia Ibrahim</span>
            <span className="role-title">Full Stack Developer</span>{" "}
          </h1>

          <div className="contact-and-link-box">
            <ul className="details">
              <li>
                <span>
                  <MapPinIcon className="icon" />
                </span>
                London, UK
              </li>
              <li>
                <span>
                  <EnvelopeIcon className="icon" />
                </span>
                safia.ibrahim2121@gmail.com
              </li>
            </ul>

            <ul className="cv-links-container">
              <li className="cv-links__list">
                <a
                  href="https://safia-ibrahim.netlify.app/"
                  className="cv-links "
                  target="_blank"
                >
                  Portfolio
                </a>
              </li>
              <li className="cv-links__list">
                <a
                  className="cv-links"
                  href="https://github.com/New-Arday"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li className="cv-links__list">
                <a
                  className="cv-links"
                  href="https://www.linkedin.com/in/safiaibrahim/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <h3 className="sub-heading">Skills</h3>
          <ul className="skills">
            <li className="skills-list">JavaScript</li>
            <li className="skills-list">Node.js</li>
            <li className="skills-list">React</li>
            <li className="skills-list">Express</li>
            <li className="skills-list">Prisma</li>
            <li className="skills-list">PostgreSQL</li>
            <li className="skills-list">HTML & CSS</li>
            <li className="skills-list">Git/GitHub</li>
          </ul>
        </div>
        <div className="profile section">
          <h3 className="sub-heading">Profile</h3>
          <p className="cv-profile__description">
            Experienced at developing applications using JavaScript, Node.js,
            Express, Prisma, React, PostgreSQL, HTML and CSS. A problem solver
            with a positive attitude. Comfortable working in a fast-paced
            environment and able to adapt to new technologies quickly. A team
            player who is also able to work independently when required in an
            Agile/Scrum environment
          </p>
        </div>

        <div className="relevant-experience section">
          <h3 className="sub-heading"> Relevant Experience</h3>
          <h4 className="h4-heading">Bootcamp: Boolean, London</h4>
          <h5 className="h5-heading">November 2021 – May 2022</h5>
          <ul className="relevant-experience__list">
            <li>Completed 6-month full-stack development bootcamp course.</li>
            <li>
              Front-end: learnt to develop with plain JavaScript, React,
              responsive content and design systems.
            </li>

            <li>
              Learnt to use Node.js to build servers. Created RESTful
              server-side applications using Express.
            </li>
            <li>Worked in team development projects using Kanban.</li>
            <li>
              Participated in planning sessions, stand-ups, retrospectives,
              feature demonstrations.
            </li>
            <li>
              Worked with Git and Continuous Integration in an agile development
              process.
            </li>
          </ul>
          <div className="sub-section">
            <h4 className="h4-heading">Personal Assistant: Academy</h4>
            <h5 className="h5-heading">December 2019 – March 2021</h5>
            <ul className="list">
              <li>Organising events via Eventbrite</li>
              <li>Logging and responding to complaints</li>
              <li>Managing diary </li>
              <li>Managing emails</li>
              <li>Organising meetings and taking minutes</li>
            </ul>
          </div>
        </div>
        <div className="education section">
          <h3 className="sub-heading">Education</h3>
          <ul className="education__list">
            <li>Bootcamp</li>
            <li>Travel and Tourism</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default CvContent;
