import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Resume from "./Resume";
import "./style.css";

const Page = ({ currentPage }) => {
  const renderPage = (page) => {
    switch (page) {
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactMe />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
};
export default Page;
