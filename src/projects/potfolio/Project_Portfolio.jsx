import React from "react";
import "./Project_Portfolio.css";
import PortfolioHero from "../../images/facebook_cover_photo_2.png";
import PortfolioTablet from "../../images/responsive--tablet.PNG";
import PortfolioPc from "../../images/my-portfolio.png";
import ReactRouterDom from "../../images/React-router-dom.PNG";
import CssGrid from "../../images/CSS-Grid.PNG";
import MediaQuery from "../../images/Media-query.PNG";

function Project_Portfolio() {
  return (
    <section className="portfolio__project-bg-clr">
      <div>
        <img
          src={PortfolioHero}
          className="portfolio__project__hero"
          alt=""
        ></img>
      </div>

      {/* project details */}
      <div className="portfolio__project__container">
        <div className="portfolio__project-about">
          <h4 className="portfolio__project-title">My Portfolio</h4>
          <p className="portfolio__project__description center-text">
            This project hosts my projects, professional profile links and
            resume.
          </p>
          {/* Portfolio image*/}

          <div className="portfolio__project-img-samples-box">
            <div className="portfolio__project-img-samples">
              {/* <div> */}
              <img
                className="portfolio__project-img item-span "
                src={PortfolioPc}
                alt=""
              />

              <img
                className="portfolio__project-img "
                src={PortfolioTablet}
                alt=""
              />
            </div>
          </div>
          <div>
            <h3 className="portfolio__worked-with-title">Worked with</h3>
            <div className="portfolio__worked-with-box">
              <img className="portfolio__used-list" src={ReactRouterDom} />
              <img className="portfolio__used-list" src={CssGrid} />

              <img className="portfolio__used-list" src={MediaQuery} />
            </div>
          </div>
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
            {/* <a
              href="https://safia-ibrahim.netlify.app/"
              className="portfolio__view-links "
              target="_blank"
            >
              Live Project
            </a> */}
          </div>

          <ul className="portfolio__ul-container portfolio__used-stack-box">
            <h4 className="portfolio__teck-title">Used</h4>
            <li className="portfolio__stack-list portfolio__stack-list-text react">
              React
            </li>
            <li className="portfolio__stack-list portfolio__stack-list-text">
              Material UI
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Project_Portfolio;
