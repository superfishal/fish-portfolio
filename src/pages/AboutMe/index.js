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
function AboutMe() {
  return (
    <AboutContainer>
      <AboutName>Superfishal</AboutName>
      <br />
      <Skills>
        <Type />
      </Skills>
      <br />
      <SuperfishalImg src={superfishal} alt="Superfishal" />
      <AboutMeText>
        <br />
        Certified by the University of Oregon after completing a 24-week,
        intensive full-stack bootcamp on:
        <br />
        <AboutBold>
          HTML5, CSS3, Javascript ES6+, database languages, MERN stack, Command
          Line and Git.
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
