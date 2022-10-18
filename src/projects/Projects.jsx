import React from "react";
import LearnArabic from "../images/Capture2.PNG";
import ExpenseTracker from "../images/expense-tracker.jpg";
import TodoList from "../images/todo-list.jpg";
import "../projects/Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="project">
      <h2 className="projects-page-heading"> Projects</h2>
      <section className="projects__container">
        <article className="project__card">
          <h2 className="project__heading">Full Stack App</h2>
          <Link
            to="/learnArabic"
            className="project__link"
            href="https://main--gatewaytoarabicproject.netlify.app/"
          >
            <img className="project__img" src={LearnArabic} />
            Learn Arabic
          </Link>
        </article>
        {/* <article className="project__card">
          <h2 className="project__heading">React App</h2>
          <img className="project__img" src={ExpenseTracker} />
          <Link
            className="project__link"
            href=" https://main--gatewaytoarabicproject.netlify.app/"
          >
            Expense Tracker
          </Link>
        </article> */}
        {/* <article className="project__card">
          <h2 className="project__heading">REST API</h2>
          <img className="project__img" src={TodoList} />
          <Link
            className="project__link"
            href="https://main--gatewaytoarabicproject.netlify.app/"
          >
            Todo List
          </Link>
        </article> */}
      </section>
    </div>
  );
};

export default Projects;
