import superfishal from "../../assets/images/superfishal_cover_photo.jpeg";
import poke from "../../assets/images/pokebuilder_cover_photo.png";
import deepthoughts from "../../assets/images/deepthoughts_cover_phot.png";
import pizzahunt from "../../assets/images/pizzaHunt_cover_photo.png";
import budget from "../../assets/images/budget-tracker-screenshot.png";
import notetaker from "../../assets/images/NoteTake_cover_photo.png";
import {
  ProjectContainer,
  ProjectCard,
  ProjectLink,
  Links,
  CoverPhoto,
} from "./style";
const projects = [
  {
    title: "Proper Sound / Superfishal",
    img: superfishal,
    github: "https://www.facebook.com/propersoundpdx/",
    deployed: "https://www.facebook.com/superfishaldj",
  },
  {
    title: "Poke Builder V2",
    img: poke,
    github: "https://github.com/superfishal/poke-builder-V2",
    deployed: "https://pokebuilder-v2.herokuapp.com/",
  },
  {
    title: "Deep Thoughts",
    img: deepthoughts,
    github: "https://github.com/superfishal/deep-thoughts",
    deployed: "https://superfishal-deep-thoughts.herokuapp.com/",
  },
  {
    title: "Pizza Hunt",
    img: pizzahunt,
    github: "https://github.com/superfishal/Pizza-Hunt",
    deployed: "https://whispering-meadow-86661.herokuapp.com/",
  },
  {
    title: "Budget Tracker",
    img: budget,
    github: "https://github.com/superfishal/budget-tracker",
    deployed: "https://superfishal-budget-tracker.herokuapp.com/",
  },
  {
    title: "Note Taker",
    img: notetaker,
    github: "https://github.com/superfishal/Note-Taker",
    deployed: "https://superfishal-note-taker.herokuapp.com/",
  },
];
// map function to display each project as a card
function Projects() {
  return (
    <ProjectContainer>
      {projects.map((project) => {
        return (
          <ProjectCard>
            <h2>{project.title}</h2>
            <CoverPhoto>
              <img src={project.img} alt={project.title} />
            </CoverPhoto>
            <br />
            <Links>
              <ProjectLink href={project.github}>Github</ProjectLink>
              <ProjectLink href={project.deployed}>Deployed</ProjectLink>
            </Links>
          </ProjectCard>
        );
      })}
    </ProjectContainer>
  );
}

// ask jude about packages for styling/organization
// react-bootstrap / should i integrate MERN stack
export default Projects;
