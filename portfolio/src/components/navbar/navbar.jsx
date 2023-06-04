import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#header" className="navbar__link">Home</a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">About</a>
          </li>
          <li className="navbar__item">
            <a href="#portfolio" className="navbar__link">Portfolio</a>
          </li>
          <li className="navbar__item">
            <a href="#services" className="navbar__link">Services</a>
          </li>
          <li className="navbar__item">
            <a href="#experience" className="navbar__link">Experience</a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
