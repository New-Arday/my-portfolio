import logo from "./logo.svg";
import "./App.css";
import Home from "./landing-page/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./projects/Projects";
import Nav from "./landing-page/Nav";
import Project_LearnArabic from "./projects/Project_LearnArabic";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Routes>
        <Route path="/learnArabic" element={<Project_LearnArabic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
