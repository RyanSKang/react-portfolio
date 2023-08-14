import React, { useEffect, useRef } from "react";

import Slider from "react-slick";

const ProjectDetailsModal = ({ projectDetails }) => {
  const sliderRef = useRef();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(0);
  }, [projectDetails]);

  return (
    <>
      <div
        className="modal fade bg-dark-1"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className= "container ajax-container">
                <h2 className="text-6 font-weight-600 text-center mb-4">
                  {projectDetails?.title}
                </h2>
                <div className="row g-4">
                  <div className="col-md-7">
                    <Slider {...settings} ref={sliderRef}>
                      <div className="item">
                        <img
                          className="img-fluid"
                          alt=""
                          src={projectDetails?.thumbImage}
                        />
                      </div>
                    </Slider>
                  </div>
                  <div className="col-md-5">
                    <h4 className="text-4 font-weight-600">
                      Project Info:
                    </h4>
                    <p>{projectDetails?.projectInfo}</p>
                    <h4 className="text-4 font-weight-600 mt-4">
                      Project Details:
                    </h4>
                    <ul
                      className="list-style-2 ">
                      <li>
                        <span className= "text-dark font-weight-600 me-2">
                          Technologies:
                        </span>
                        {projectDetails?.technologies}
                      </li>
                      <li>
                        <span className="text-dark font-weight-600 me-2">
                          Date:
                        </span>
                        {projectDetails?.date}
                      </li>
                      <li>
                        <span className="text-dark font-weight-600 me-2" >
                          URL:
                        </span>
                        <a
                          href={projectDetails?.url?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {projectDetails?.url?.name}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
