import React from "react";
import prework from "../../../assets/pwst-ss.png";
import passwordGeneratorApp from "../../../assets/";
import quizGame from "../../../assets/coding-quiz-game.png";
import noteTakerAPP from "../../../assets/note-taker.png";
import textEditApp from "../../../assets/jate-ss.png";

const BestChallenges = () => {
    return (
      <div className="d-flex justify-content-center align-items-center projects" style={{ minHeight: "100vh" }}>
        <div id="carouselExample" className="carousel slide mx-auto">
        <h2>Some of my best challenges from the bootcamp (showing both front end and back end) </h2>
		{/* prework study guide */}
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box" id="box-1">
              <h3 className="text-center">Prework Study Guide</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={ prework }
                  alt="prework study guide ss"
                  className="img-fluid rounded"
                />
              </div>
              <p>
                This was the first assignment that was given to me in the bootcamp. Built a study guide website for students who are beginning in the bootcamp.
              </p>
              <a href="https://alugo0823.github.io/prework-study-guide/">
                Click here to view the deployed Prework Study Guide!
              </a>
            </section>
          </div>

		  {/* note taker app */}

          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Note Taker App</h3>
              <div className="d-flex justify-content-center">
              <img
                src={noteTakerAPP}
                alt="note taker app ss"
                className="img-fluid rounded"
              />
              </div>
              <p>
			  This application will use an Express.js back end and will save and retrieve note data from a JSON file.  The use will be able to post new notes as well as delete notes. Upon refresh, the user will also be able to see their previous notes stored on the left hand side of the app.              </p>
              <a href="https://note-taker-app-express-6d24a8e12696.herokuapp.com/">
                Click to visit the deployed app
              </a>
            </section>
          </div>

		  {/* Password generator */}

          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center"> Password Generator App </h3>
              <div className="d-flex justify-content-center">
              <img
                src={passwordGeneratorApp}
                alt="password gen ss"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This was the first app we built using the JavaScript logic taught to us. The app will generate a random password based on the questions the user will answer when prompted.
              </p>
              <a href="https://alugo0823.github.io/Password-Generator-Machine/">
                Click here to view the Password Generator App!
              </a>
            </section>
          </div>
		  {/*  quiz game */}

          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Timed Coding Quiz</h3>
              <div className="d-flex justify-content-center">
              <img
                src={quizGame}
                alt="coding quiz ss"
                className="img-fluid rounded"
              />
              </div>
              <p>
                Another app using vanilla JavaScript logic and also CSS/HTML. This timed quiz will challenge users on random world trivia. For each answer they get wrong, they will lose time off the clock!
              </p>
              <a href="https://github.com/ALugo0823/code-quiz-game/">
                Click here to visit the Timed Coding Quiz!
              </a>
            </section>
          </div>
          {/* text editor app */}

          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">J.A.T.E text editor app</h3>
              <div className="d-flex justify-content-center">
              <img
                src={textEditApp}
                alt="text edit app screenshot"
                className="img-fluid rounded"
              />
              </div>
              <p>
               This front and back end app was refactored to work both online and offline. It is a simple text editor that a user can use anywhere!
              </p>
              <a href="https://text-editor-jate-app-1ccddd765a73.herokuapp.com/">
                Click here to visit the app!
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
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
          data-bs-target="#carouselExample"
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
    )
}

export default BestChallenges;