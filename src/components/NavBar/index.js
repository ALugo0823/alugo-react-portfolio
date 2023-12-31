import React from "react";
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      {pages.map((page) => (
        <li
          key={page}
          className={`nav-link ${page === currentPage && "active"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
    </nav>
  );
};

export default Nav;