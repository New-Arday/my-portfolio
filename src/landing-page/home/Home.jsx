import React from "react";
import "./Home.css";
import Projects from "../../projects/projects-landingPage/Projects";
import About from "../about/About";
import Footer from "../../footer/Footer";
const Home = () => {
  return (
    <div className="home-container">
      <Projects />
      <About />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
