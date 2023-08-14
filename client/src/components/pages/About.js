import React from "react";
import resumeFile from "../../assets/Resume.pdf";
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import github from '../../assets/github.png'
import graphQL from '../../assets/graphql.png'
import html from '../../assets/html.png'
import sql from '../../assets/icons8-sql-100.png'
import js from '../../assets/js.png'
import mongo from '../../assets/mongo.png'
import nodejs from '../../assets/nodejs.png'
import reactjs from '../../assets/reactjs.png'
import vscode from '../../assets/vscode.png'



const AboutUs = () => {
    return (
        <>
        <section id="portfolio" className="bg-black">
            <div className="container ml-48">
                {/* Heading */}
                <div className="position-relative flex align-middle text-center justify-center mb-5">
                    <h2
                        className="text-8xl text-uppercase fw-600 w-100"  >
                        About Me
                    </h2>
                    <p className="absolute text-center mt-8 font-extrabold text-white text-4xl fw-600 position-absolute w-100 align-self-center lh-base mb-0">
                        {" "}
                        Know Me More
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                    </p>
                </div>
            </div>
        </section>
    <div className="row gy-5">
        {/* About me content start */}
        <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 text-white">
                I'm <span className="text-primary">Ryan Kang,</span> a Junior Web
                Developer
            </h2>
            <p className="text-white-50 text-center">
                A highly motivated and results oriented entry level Full Stack Developer with 3 years of experience in developing and implementing innovative solutions. Skilled in optimizing website performance and collaborating with cross-functional teams to achieve project goals. The primary focus of my studies in web development has been HTML, CSS, Bootstrap, JavaScript, jQuery and other back-end technologies. I recently turned my focus in furthering my skills by working more with ReactJS, graphQL, and MERN stack.
            </p>
        </div>
        {/* About me content end */}
        {/* about me personal detials start */}
        <div className="col-lg-5 col-xl-4 flex-col justify-end align-text-bottom text-left">
            <div className="ps-lg-4">
                <ul
                    className="list-item"
                >
                    <li>
                        <span className="fw-600 me-2">Name:</span>Ryan Kang
                    </li>
                    <li>
                        <span className="fw-600 me-2">Email:</span>
                        <a href="mailto:ryan.sanhae.kang@gmail.com">ryan.sanhae.kang@gmail.com</a>
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
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Download CV
                </a>
            </div>
        </div>
        {/* about me personal details end */}
    </div>
    {/* projects rewards counting start */ }
    <div
        className="grid-flow-col"
    >
        <div className="row">
            <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                    <h4>
                        <span>Skills</span>
                    </h4>
                    <div className="flex justify-between ml-0" id="icons">
                        <img src={css} />
                        <img src={express} />
                        <img src={github} />
                        <img src={graphQL} />
                        <img src={html} />
                        <img src={sql} />
                        <img src={js} />
                        <img src={mongo} />
                        <img src={nodejs} />
                        <img src={reactjs} />
                        <img src={vscode} />
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                    <h4
                    >
                        <span>20+</span>+
                    </h4>
                    <p>
                        Projects Done
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
    )};

export default AboutUs;
