import React from "react";
import "../projects/Project.css";
import { Link } from "react-router-dom";
import Lessons from "../images/lessons.PNG";

function Project_LearnArabic() {
  return (
    <>
      <div>
        <div className="project__hero"></div>
      </div>
      <div className="project__container">
        <div className="link-box">
          <h4 className="project-title">Links</h4>
          <a
            href="https://github.com/New-Arday/learn-arabic-client"
            className="view-links"
          >
            {" "}
            View Code
          </a>
          <a
            href="https://main--gatewaytoarabicproject.netlify.app/"
            className="view-links"
          >
            View Project
          </a>
        </div>
        <div className="project-about">
          <h4 className="project-title">Gateway to Arabic</h4>
          <p className="project__description">
            The project is based on the book: 'Gateway to Arabic level 2'; the
            content is from the book but it does not cover all the learning
            concepts such as the grammer.
            <p className="project__description">
              The user is expected to have finished level 1 and be able to
              recognise and read basic Arabic.
            </p>
            <p className="project__description">
              The lessons are separated into topics for example: fruits and
              vegetables, animals and colours - the user can pick and choose the
              topic they wish to learn. There's a interactive quiz part where
              the user can challenge/test their knowledge of that particular
              topic.
            </p>
          </p>
          <img className="project-img " src={Lessons} />
        </div>
        <div className="teck-stack">
          <h4 className="teck-title">Teck Stack</h4>
          <ul>
            <li className="stack-list stack-js js">JavaScript</li>
            <li className="stack-list stack-react">React</li>
            <li className="stack-list stack-node">NodeJs</li>
            <li className="stack-list stack-express">Express</li>
            <li className="stack-list stack-prisma">Prisma</li>
            <li className="stack-list stack-postgres">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project_LearnArabic;
