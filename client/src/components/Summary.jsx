import React from "react";
import resumeFile from "../assets/Resume.pdf";

// Importing Icons 
import css from '../assets/icons/css.png'
import express from '../assets/icons/express.png'
import sql from '../assets/icons/sql.png'
import node from '../assets/icons/nodejs.png'
import github from '../assets/icons/github.png'
import graphql from '../assets/icons/graphql.png'
import html from '../assets/icons/html.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/reactjs.png'
import vscode from '../assets/icons/vscode.png'
import mongo from '../assets/icons/mongo.png'

const MySkills = ({ classicHeader, darkTheme }) => {

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Express/Node.js",
      percent: 65,
    },
    {
      name: "Bootstrap",
      percent: 70,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Skillset
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Summary
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* My Skills */}
        <div className="row gx-7">
          <container className="icons">
              <img src={js} alt="js"></img>
              <img src={react} alt="react"></img>
              <img src={express} alt="express"></img>
              <img src={node} alt="node"></img>
              <img src={mongo} alt="mongo"></img>
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={graphql} alt="graph"></img>
              <img src={sql} alt="sql"></img>
              <img src={github} alt="git"></img>
              <img src={vscode} alt="vs"></img>
          </container>
        </div>
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
