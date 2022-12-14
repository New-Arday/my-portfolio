import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_transparent.png";
const NavItems = () => {
  return (
    <div className="navigation ">
      <div className="navigation__container">
        {/* <div > */}
        <Link to="/" className="center-logo">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <h2 className="name">Full Stack Developer</h2>
        {/* </div> */}
        <ul className="ul__link-list">
          <li>
            <Link to="/projects" className="links">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/about" className="links">
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/skills" className="links">
              Skills
            </Link>
          </li> */}

          <li>
            <Link to="/resume" className="links">
              Resume
            </Link>
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
      </div>
    </div>
  );
};

export default NavItems;
