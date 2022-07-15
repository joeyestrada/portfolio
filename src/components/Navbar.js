import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            J.E.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <ScrollLink
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <ScrollLink
                  className="nav-link"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  About Me
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <ScrollLink
                  className="nav-link"
                  to="previousjobs"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Where I've Worked
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <ScrollLink
                  className="nav-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <ScrollLink
                  className="nav-link"
                  to="contactme"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Contact Me
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="https://github.com/joeyestrada">
                  GitHub
                </a>
              </li>
              <li className="navbar-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/joseph-estrada/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
