import React from "react";
import { AboutMeText, AboutName, AboutContainer } from "./style";

function AboutMe() {
  return (
    <AboutContainer>
      <AboutName>Superfishal</AboutName>
      <AboutMeText>
        Full-Stack Web Developer with extensive background in event production,
        service industry, and team management.
        <br />
        <br />
        Certified by the University of Oregon after completing a 24-week,
        intensive full-stack bootcamp on HTML5, CSS3, Javascript ES6+, database
        languages, MERN stack, Command Line and Git.
        <br />I am a strong team player and passionate about furthering my
        knowledge in the field. Despite any relevant experience I excel in
        unfamiliar jobs, everything I've done has been brand new to me and it's
        fascinating to explore the capabilities of the mind and code.
      </AboutMeText>
    </AboutContainer>
  );
}

export default AboutMe;
