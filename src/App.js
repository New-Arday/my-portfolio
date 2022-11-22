import "./App.css";
import Home from "./landing-page/home/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./projects/projects-landingPage/Projects";
import Nav from "./landing-page/navigation/Nav";
import Project_LearnArabic from "./projects/learnArabic/Project_LearnArabic";
import Project_Portfolio from "./projects/potfolio/Project_Portfolio";
import NoMatch from "./NoMatch/NoMatch.jsx";
import Cv from "./landing-page/navigation/cv/Cv";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Projects />} />
        <Route path="/resume" element={<Cv />} />

        <Route path="/learnArabic" element={<Project_LearnArabic />} />

        <Route path="/portfolio" element={<Project_Portfolio />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
