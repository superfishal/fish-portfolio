import React from "react";
import {
  AboutMeText,
  SuperfishalImg,
  AboutName,
  AboutContainer,
  AboutBold,
} from "./style";
import { Skills } from "../../components/Typewriter/style";
import Type from "../../components/Typewriter/index";
import superfishal from "../../assets/images/superFISHal.png";
import andy from "../../assets/images/andy.jpg";
function AboutMe() {
  return (
    <AboutContainer>
      <AboutName>Hi! I'm Andy.</AboutName>
      <br />
      <SuperfishalImg src={andy} alt="Superfishal" />
      <Skills>
        <Type />
      </Skills>
      <br />
      <AboutMeText>
        <br />
        Certified by the University of Oregon after completing a 24-week,
        intensive full-stack bootcamp on:
        <br />
        <AboutBold>
          HTML5, CSS3, Javascript ES6+, SQL, NoSQL, ORM/ODM's, PWA's, MERN
          stack, Command Line and Git.
        </AboutBold>
        <br />I am a strong team player and passionate about furthering my
        knowledge in the field.
        <br />
        Extensive background in event production, hospitality, and team
        management.
        <br />
        Comfortable with many development/design languages and frameworks.
        <br />
        My strengths lie in extensive research of documentation, communication,
        leadership, and critical thinking.
      </AboutMeText>
    </AboutContainer>
  );
}

export default AboutMe;
