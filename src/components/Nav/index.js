import React from "react";
import { Nav, NavLinks, NavLink, Superfishal } from "./style";
import { GiCirclingFish } from "react-icons/gi";
function NavBar() {
  return (
    <Nav>
      <Superfishal>
        <GiCirclingFish />
        Superfishal
      </Superfishal>
      <NavLinks>
        <NavLink to="/">
          <li>About Me</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/resume">
          <li>Resume</li>
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

export default NavBar;
