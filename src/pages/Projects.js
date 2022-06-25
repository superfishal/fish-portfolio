const projects = [
  {
    title: "runbuddy",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
  {
    title: "propersound",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
  {
    title: "deep thoughts",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
  {
    title: "nextproject",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
  {
    title: "nextproject1",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
  {
    title: "lastproject",
    img: "https://via.placeholder.com/350x250",
    github: "www.github.com",
    deployed: "www.heroku.com",
  },
];

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
        // turn this div into a card for each project
      })}
    </div>
  );
}

export default Projects;
