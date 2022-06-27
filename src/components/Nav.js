import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav>
      <h2>Andys Nav</h2>
      <ul>
        <Link to="/">
          <li>About Me</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contactme">
          <li>Contact</li>
        </Link>
        <Link to="/resume">
          <li>Resume</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
