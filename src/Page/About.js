import React from "react";
import profilePic from '../assets/profile-pic.jpeg'

const About = () => {
  return (
    <>
      <h3 id="about-me">About Me</h3>
      <section className="textbox">
        <img
          src={profilePic}
          alt="Me!"
          className="float-left"
        />
        <p>
          Hello there, my name is Abelardo Lugo! I am 28 years old and this is
          my personal website that I created to showcase my web development
          skills learned in bootcamp at the University of Arizona. I currently
          live in Tucson, AZ. I work as a supervisor at a package center, but I
          hope to make a career change soon after I finish bootcamp. This
          webpage will showcase all of the work I have done in this 24 week
          challenging but worthwile curriculum. Please feel free to contact me
          through email if you have any questions or inquiries! Thank you for
          visiting my portfolio webpage!
        </p>
      </section>
    </>
  );
};

export default About;
