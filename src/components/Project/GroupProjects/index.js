import React from "react";
import projOne from "../../../assets/project-screenshot.png";
import projTwo from "../../../assets/updated-main.png";

const GroupProjects = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center projects"
      style={{ minHeight: "100vh" }}
    >
        {/* project 1 */}

      <div id="carouselExample3" className="carousel slide mx-auto">
        <h2>Group Projects from the Bootcamp</h2>
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3 className="text-center">Project 1: City Capers</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={projOne}
                  alt="city capers screenshot"
                  className="img-fluid rounded"
                />
              </div>
              <p>
                This first group project focused on utilizing the basics of HTML, CSS, and JS while also implementing a third party web API to retrieve and serve data onto the website we built.
                It was my first collaborative project.
              </p>
              <a href="https://alugo0823.github.io/travel-guide-api/">
                Visit City Capers here!
              </a>
            </section>
          </div>
          {/* project 2 */}

          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Happy Tails Pet Supply</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={projTwo}
                  alt="happy tails screenshot"
                  className="img-fluid rounded"
                />
              </div>
              <p>
                This was our first full stack website built using node.js, express.js, MySQL2, MVD diagram, and of course HTML/CSS. It is a pet supplies website with categories, on sale products,
                and a functional login and logout feature.
              </p>
              <a href="https://happy-tails-pet-supply-e05726b13b79.herokuapp.com/">
                Need pet supplies? Click the link above!
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GroupProjects;