import budgetTracker from "../assets/images/budget-tracker-screenshot.png";

const projects = [
  {
    title: "Proper Sound / Superfishal",
    img: "../assets/images/PS_Cover_Photo.jpeg",
    github: "https://www.facebook.com/propersoundpdx/",
    deployed: "https://www.facebook.com/superfishaldj",
  },
  {
    title: "Poke Builder V2",
    img: "../assets/images/pokebuilder_cover_photo.png",
    github: "https://github.com/superfishal/poke-builder-V2",
    deployed: "https://pokebuilder-v2.herokuapp.com/",
  },
  {
    title: "Deep Thoughts",
    img: "../assets/images/deepthoughts_cover_phot.png",
    github: "https://github.com/superfishal/deep-thoughts",
    deployed: "https://superfishal-deep-thoughts.herokuapp.com/",
  },
  {
    title: "Pizza Hunt",
    img: "../assets/images/pizzaHunt_cover_photo.png",
    github: "https://github.com/superfishal/Pizza-Hunt",
    deployed: "https://whispering-meadow-86661.herokuapp.com/",
  },
  {
    title: "Budget Tracker",
    img: "../assets/images/budget-tracker-screenshot.png",
    github: "https://github.com/superfishal/budget-tracker",
    deployed: "https://superfishal-budget-tracker.herokuapp.com/",
  },
  {
    title: "Note Taker",
    img: "../assets/images/PS_Cover_Photo.jpeg",
    github: "https://github.com/superfishal/Note-Taker",
    deployed: "https://superfishal-note-taker.herokuapp.com/",
  },
];
// map function to display each project as a card
function Projects() {
  return (
    <div className="projectCards">
      {projects.map((project) => {
        return (
          <div>
            <h2>{project.title}</h2>
            <img src={project.img} alt={project.title} />
            <br />
            <a href={project.github}>Github</a>
            <a href={project.deployed}>Deployed</a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
