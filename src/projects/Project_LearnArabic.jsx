import React from "react";
import "../projects/Project.css";
import Lessons from "../images/lessons.PNG";
import LearnArabic from "../images/Learn-Arabic.PNG";
import ReactRouterDom from "../images/React-router-dom.PNG";
import CssGrid from "../images/CSS-Grid.PNG";
import CssCarousal from "../images/CSS-carousal.PNG";
import MediaQuery from "../images/Media-query.PNG";

function Project_LearnArabic() {
  return (
    <>
      <div>
        <img src={LearnArabic} className="project__hero" alt="" />
      </div>
      <div className="project__container">
        <div className="link-box">
          <h4 className="project-title">Links</h4>
          <a
            href="https://github.com/New-Arday/learn-arabic-client"
            target="_blank"
            className="view-links"
          >
            View Code
          </a>
          <a
            href="https://main--gatewaytoarabicproject.netlify.app/"
            target="_blank"
            className="view-links"
          >
            Live Project
          </a>
        </div>
        <div className="project-about">
          <h4 className="project-title">Gateway to Arabic</h4>
          <p className="project__description">
            The project is based on the book:
            <span className="title-of-book">Gateway to Arabic</span> level 2.
            The content is from the book.
          </p>
          <p className="project__description">
            The user is expected to be able to recognise and read basic Arabic
            words.
          </p>
          <p className="project__description">
            The lessons are separated into topics: fruits and vegetables,
            animals and colours.
          </p>
          <p className="project__description">
            There's an interactive quiz where the user can test their knowledge
            of what they've learnt.
          </p>
          <div>
            <h3 className="worked-with-title">Worked with</h3>
            <div className="worked-with-box">
              <img className="used-list" src={ReactRouterDom} />
              <img className="used-list" src={CssGrid} />
              <img className="used-list" src={CssCarousal} />
              <img className="used-list" src={MediaQuery} />
            </div>
          </div>
          <img className="project-img " src={Lessons} alt="" />
        </div>
        <div className="teck-stack">
          <h4 className="teck-title">Used Stack</h4>
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
