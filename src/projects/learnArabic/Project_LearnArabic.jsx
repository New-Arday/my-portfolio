import React from "react";
import "./Project_LearnArabic.css";
import Lessons from "../../images/lessons.PNG";
import LearnArabic from "../../images/Learn-Arabic.PNG";
import ReactRouterDom from "../../images/React-router-dom.PNG";
import CssGrid from "../../images/CSS-Grid.PNG";
import CssCarousal from "../../images/CSS-carousal.PNG";
import MediaQuery from "../../images/Media-query.PNG";

function Project_LearnArabic() {
  return (
    <div className="arabic__project-bg-clr">
      <div>
        <img src={LearnArabic} className="arabic__project-hero" alt="" />
      </div>
      <div className="arabic__project-container">
        <div className="arabic__project-about">
          <h4 className="arabic__project-title">Gateway to Arabic</h4>
          <p className="arabic__project-description">
            The project is based on the book:
            <span className="arabic__title-of-book"> Gateway to Arabic </span>
            level 2. The content is from the book.
          </p>
          <p className="arabic__project-description">
            The user is expected to be able to recognise and read basic Arabic
            words.
          </p>
          <p className="arabic__project-description">
            The lessons are separated into topics: fruits and vegetables,
            animals and colours.
          </p>
          <p className="arabic__project-description">
            There's an interactive quiz where the user can test their knowledge
            of what they've learnt.
          </p>

          {/* Worked with section */}
          <div>
            <h3 className="arabic__worked-with-title">Worked with</h3>
            <div className="arabic__worked-with-box">
              <img className="arabic__used-list" src={ReactRouterDom} />
              <img className="arabic__used-list" src={CssGrid} />
              <img className="arabic__used-list" src={CssCarousal} />
              <img className="arabic__used-list" src={MediaQuery} />
            </div>
          </div>
          <img className="arabic__project-img " src={Lessons} alt="" />
        </div>

        {/* Tech used section */}
        <div className="link-and-stack-box">
          <div className="arabic__teck-stack">
            <div className="arabic__link-box">
              <h4 className="arabic__teck-title">Links</h4>
              <div className="link-style-phone">
                <a
                  href="https://github.com/New-Arday/learn-arabic-client"
                  target="_blank"
                  className="arabic__view-links"
                >
                  View Code
                </a>
                <a
                  href="https://main--gatewaytoarabicproject.netlify.app/"
                  target="_blank"
                  className="arabic__view-links live"
                >
                  Live Project
                </a>
              </div>
            </div>
            <h4 className="arabic__teck-title">Used Stack</h4>
            <ul className="arabic__ul-container">
              <li className="arabic__stack-list stack-js js">JavaScript</li>
              <li className="arabic__stack-list stack-react">React</li>
              <li className="arabic__stack-list stack-node">NodeJs</li>
              <li className="arabic__stack-list stack-express">Express</li>
              <li className="arabic__stack-list stack-prisma">Prisma</li>
              <li className="arabic__stack-list stack-postgres">PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project_LearnArabic;
