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



const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Ryan Kang,</span> a junior Web
              Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              A highly motivated and results oriented entry level Full Stack Developer
              with 3 years of experience in developing and implementing innovative solutions.
              Skilled in optimizing website performance and collaborating with cross-functional
              teams to achieve project goals. The primary focus of my studies in web development
              has been HTML, CSS, Bootstrap, JavaScript, jQuery and other back-end technologies.
              I recently turned my focus in furthering my skills by working more with ReactJS,
              graphQL, and MERN stack.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Ryan Kang
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:ryan.sanhae.kang@gmail.com">Ryan.Sanhae.Kang@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>27
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Aurora, Colorado
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
