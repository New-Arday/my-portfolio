import React from "react";
import "../projects/Project_Portfolio.css";
import PortfolioHero from "../images/portfolio-hero.PNG";
import PortfolioTablet from "../images/responsive--tablet.PNG";
import PortfolioPc from "../images/projects-page.PNG";
import PortfolioPhone from "../images/responsive-capture.PNG";
import ReactRouterDom from "../images/React-router-dom.PNG";
import CssGrid from "../images/CSS-Grid.PNG";
import CssCarousal from "../images/CSS-carousal.PNG";
import MediaQuery from "../images/Media-query.PNG";

function Project_Portfolio() {
  return (
    <section className="portfolio__project-bg-clr">
      <div>
        {/* <img src={PortfolioHero} className="portfolio__project__hero" alt=""></img> */}
      </div>

      {/* project details */}
      <div className="portfolio__project__container">
        <div className="portfolio__project-about">
          <h4 className="portfolio__project-title">My Portfolio</h4>
          <p className="portfolio__project__description center-text">
            This project hosts my projects, professional profile links and
            resume.
          </p>

          <div className="portfolio__project-img-samples-box">
            <div className="portfolio__project-img-samples">
              <div>
                <img
                  className="portfolio__project-img "
                  src={PortfolioTablet}
                  alt=""
                />
              </div>
              {/* <img className="project-img " src={PortfolioTablet} alt="" /> */}
              <img
                className="portfolio__project-img "
                src={PortfolioPc}
                alt=""
              />
              <img
                className="portfolio__project-img "
                src={PortfolioPhone}
                alt=""
              />
            </div>
          </div>
          {/* <div>
            <h3 className="worked-with-title">Worked with</h3>
            <div className="worked-with-box">
              <img className="used-list" src={ReactRouterDom} />
              <img className="used-list" src={CssGrid} />
              <img className="used-list" src={CssCarousal} />
              <img className="used-list" src={MediaQuery} />
            </div>
          </div> */}
        </div>
        <div className="portfolio__teck-stack">
          {/* Lists lists*/}
          <div className="portfolio__link-box">
            <h4 className="portfolio__project-title">Links</h4>
            <a
              href="https://github.com/New-Arday/my-portfolio"
              target="_blank"
              className="portfolio__view-links"
            >
              View Code
            </a>
            <a
              href="https://safia-ibrahim.netlify.app/"
              className="portfolio__view-links"
              target="_blank"
            >
              Live Project
            </a>
          </div>
          <h4 className="portfolio__teck-title">Used</h4>
          <ul className="portfolio__ul-container portfolio__used-stack-box">
            <li className="portfolio__stack-list portfolio__stack-list-text">
              React
            </li>
            <li className="portfolio__stack-list portfolio__stack-list-text">
              React Router Dom
            </li>
            <li className="portfolio__stack-list portfolio__stack-list-text">
              Grid
            </li>
            <li className="portfolio__stack-list portfolio__stack-list-text">
              Flexbox
            </li>
            <li className="portfolio__stack-list portfolio__stack-list-text">
              Media Query
            </li>
          </ul>
        </div>
        <div>
          <h3 className="portfolio__worked-with-title">Worked with</h3>
          <div className="portfolio__worked-with-box">
            <img className="portfolio__used-list" src={ReactRouterDom} />
            <img className="portfolio__used-list" src={CssGrid} />
            <img className="portfolio__used-list" src={CssCarousal} />
            <img className="portfolio__used-list" src={MediaQuery} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project_Portfolio;
