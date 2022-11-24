import React from "react";
import "./Home.css";
import Projects from "../../projects/projects-landingPage/Projects";
import About from "../about/About";
import Footer from "../../footer/Footer";
import Skills from "../skills/Skills";
const Home = () => {
  return (
    <div className="home-container">
      <Projects />
      <About />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
