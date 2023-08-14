import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

// Importing Project Images
import bookSearch from '../assets/projects/bookSearch.jpg'
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    MERN: "MERN",
    API: "API",
    NoSQL: "NoSQL",
    PWA: "PWA"
  };

  const projectsData = [
    {
      title: "Book Search Engine",
      projectInfo:
        "This application is built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. This application takes a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo server.",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "August 08, 2023",
      url: {
        name: "Book Search Engine Heroku App",
        link: "https://mern-book-search-engine-ryans-bf5f87e59dcd.herokuapp.com/",
      },
      thumbImage: {bookSearch},
      categories: [filters.MERN, filters.API],
    },
    {
      title: "Magic Carpet ",
      projectInfo:
        "This application utilizes React on the front end, along with MongoDB Database, and Node.js/Express.js server and API. We are using a GraphQL API built with Apollo server to retrieve our data. The main goal of this application is to provide data bookings for our Users, so that they can see the world in a new perspective as a fellow traveler.",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "August 08, 2023",
      url: {
        name: "Magic Carpet Heroku App",
        link: "https://the-magic-carpet-037d75dd3e3d.herokuapp.com/",
      },
      thumbImage: "assets/projects/magicCarpet.jpg",
      categories: [filters.MERN, filters.API],
    },
    {
      title: "Weather Dashboard",
      projectInfo:
        "The main goal for the Weather Dashboard was to use a WeatherAPI and a GeoLocation API cohesively so that we can extract data and display it to our webapplication in our own way.",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "April 04, 2023",
      url: {
        name: "Weather App Github Deployed App",
        link: "https://ryanskang.github.io/Weather-Dashboard/",
      },
      thumbImage: "assets/projects/weatherApp.jpg",
      categories: [filters.API],
    },
    {
      title: "NoSQL Social Network BackEnd",
      projectInfo:
        "This application is a built API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application utilizes Express.js and Mongoose packages.",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "August 01, 2023",
      url: {
        name: "Video Walkthrough of back end functionality",
        link: "https://watch.screencastify.com/v/XZeZGGOWW8oloJLLxXZI",
      },
      thumbImage: "assets/projects/noSQLNetwork.jpg",
      categories: [filters.NoSQL, filters.API],
    },
    {
      title: "PWA Text Editor",
      projectInfo:
        "This application is a text editor that runs in the browser. This is a single-page application that meets the Progressive Web Applications criteria. An additional feature of this project will be persistence techniques that serve as redundancy in case one of the options is not supported by the browser (also able to function offline).",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "August 03, 2023",
      url: {
        name: "PWA Text Editor Heroku Application",
        link: "https://ryans-pwa-texteditor-f2ff23e03321.herokuapp.com/",
      },
      thumbImage: "assets/projects/pwaTextEditor.jpg",
      categories: [filters.PWA],
    },
    {
      title: "API Code Challenge",
      projectInfo:
        "The importance of creating a quiz game using HTML, CSS and JavaScript is to really help the web application be more dynamic when the user interacts with it.",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      date: "March 21, 2023",
      url: {
        name: "API Quiz Challenge Github Deployed Application",
        link: "https://ryanskang.github.io/APIs-Code-Challenge/",
      },
      thumbImage: "assets/projects/codeQuiz.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.API],
    }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
