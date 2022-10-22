import React from "react";
import { Link } from "react-router-dom";
import "../landing-page/Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__container">
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="links">
              Projects
            </Link>
          </li>
          <li>
            <a className="links" href="#">
              Resume
            </a>
          </li>
          <li>
            <a
              className="links"
              href="https://github.com/New-Arday"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="links"
              href="https://www.linkedin.com/in/safiaibrahim/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
