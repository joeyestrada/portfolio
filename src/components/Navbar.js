import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand">J.E.</a>
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
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/aboutme" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
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
