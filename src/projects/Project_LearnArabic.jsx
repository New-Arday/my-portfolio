import React from "react";
import "../projects/Project.css";
import { Link } from "react-router-dom";
function Project_LearnArabic() {
  return (
    <>
      <div>
        <div className="project__hero"></div>
        <h2 className="project__heading">Learn Arabic</h2>
      </div>
      <div className="project__container">
        <div>
          <h4>Teck Stack</h4>
        </div>
        <div className="link-box">
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
      </div>
    </>
  );
}

export default Project_LearnArabic;
