import React from "react";
import { Nav, NavLinks, NavLink, Superfishal } from "./style";
import { BsPersonCircle, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrCodeSandbox, GrDocumentText } from "react-icons/gr";
function NavBar() {
  return (
    <Nav>
      <Superfishal>
        <BsPersonCircle />
        Superfishal
      </Superfishal>
      <NavLinks>
        <NavLink to="/">
          <li>
            <BsFillEmojiSunglassesFill />
            About Me
          </li>
        </NavLink>
        <NavLink to="/projects">
          <li>
            <GrCodeSandbox />
            Projects
          </li>
        </NavLink>
        <NavLink to="/contactme">
          <li>
            <MdOutlineConnectWithoutContact />
            Contact
          </li>
        </NavLink>
        <NavLink to="/resume">
          <li>
            <GrDocumentText />
            Resume
          </li>
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

export default NavBar;
