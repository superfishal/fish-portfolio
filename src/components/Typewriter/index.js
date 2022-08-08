import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "MERN Stack",
          "Javascript",
          "UX/UI",
          "SQL",
          "GraphQL",
          "Figma",
          "Web3",
          "Events and Promotion",
          "Management",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;
