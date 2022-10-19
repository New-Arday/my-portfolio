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
          <Link
            to="/learnArabic"
            className="project__link"
            href="https://main--gatewaytoarabicproject.netlify.app/"
          >
            {" "}
            <h2 className="project__heading">Learn Arabic</h2>
            <img className="project__img" src={LearnArabic} />
          </Link>
          <ul className="projects__stack-list">
            <li className="style-list stack-js">JavaScript</li>
            <li className="style-list stack-react">React</li>
            <li className="style-list stack-node">NodeJs</li>
            <li className="style-list stack-express">Express</li>
            <li className="style-list stack-prisma">Prisma</li>
            <li className="style-list stack-postgres">PostgreSQL</li>
          </ul>
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
