import React from "react";
import "../projects/Project.css";
import PortfolioHero from "../images/portfolio-hero.PNG";
import PortfolioTablet from "../images/responsive--tablet.PNG";
import PortfolioPc from "../images/projects-page.PNG";
import PortfolioPhone from "../images/responsive-capture.PNG";

function Project_Portfolio() {
  return (
    <>
      <div>
        <img src={PortfolioHero} className="project__hero" alt=""></img>
      </div>
      <div className="project__container">
        <div className="link-box">
          <h4 className="project-title">Links</h4>
          <a
            href="https://github.com/New-Arday/my-portfolio"
            target="_blank"
            className="view-links"
          >
            
            View Code
          </a>
          <a
            href="https://safia-ibrahim.netlify.app/"
            className="view-links"
            target="_blank"
          >
            Live Project
          </a>
        </div>
        <div className="project-about">
          <h4 className="project-title">My Portfolio</h4>
          <p className="project__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            inventore veritatis, praesentium magni delectus dignissimos,
            mollitia aliquid a accusamus porro dolorum voluptatibus nostrum qui?
            Omnis temporibus architecto praesentium quos illum.
            <p className="project__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam sequi sed numquam porro fugiat quibusdam distinctio
              dolorum labore. Praesentium libero voluptatibus accusamus maxime
              vitae cupiditate perspiciatis dicta quam officia blanditiis?
            </p>
            <p className="project__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi
              rem voluptatibus, eveniet reiciendis asperiores nostrum
              perspiciatis cupiditate dolores sed, eius quam consectetur? Ab
              expedita rerum sed ullam esse odio!
            </p>
          </p>
          <div className="project-img-samples">
            <img className="project-img " src={PortfolioTablet} alt='' />
            <img className="project-img " src={PortfolioPc} alt='' />
            <img className="project-img " src={PortfolioPhone} alt='' />
          </div>
        </div>
        <div className="teck-stack">
          <h4 className="teck-title">Used Stack</h4>
          <ul>
            <li className="stack-list stack-list-text" >
              React
            </li>
            <li className="stack-list stack-list-text">React Router Dom</li>
            <li className="stack-list stack-list-text">Grid</li>
            <li className="stack-list stack-list-text">Flexbox</li>
            <li className="stack-list stack-list-text">Media Query</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project_Portfolio;
