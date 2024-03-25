import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ isOpen, toggleMenu }) {
  const closeMenu = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="header">
      <h1>Sabella Fisseha</h1>
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
