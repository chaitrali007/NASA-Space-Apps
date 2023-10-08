import React from "react";
import ImageCard from "./ImageCard";
import "./Projects.css";
import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.jpg";
import p4 from "./images/p4.jpg";


const projectData = [
  {
    id: 1,
    imageSrc: p1,
    title: "The Sungrazer Project",
    description: "Discover and report previously unknown comets.",
    link: "https://sungrazer.nrl.navy.mil/",
  },
  {
    id: 2,
    imageSrc: p2,
    title: "Solar Jet Hunter",
    description:
      "Join the hunt for solar jets — enigmatic bursts of energy from our own star, the Sun.",
    link: "https://sungrazer.nrl.navy.mil/",
  },
  {
    id: 3,
    imageSrc: p3,
    title: "Eclipse Megamovie",
    description:
      "Use a DSLR camera to record dynamics in the solar corona during the total eclipse, or help analyze the images afterward.",
    link: "https://sungrazer.nrl.navy.mil/",
  },
  {
    id: 4,
    imageSrc: p4,
    title: "Citizen CATE 2024",
    description:
      "Help study structures and changes in the Sun’s outer atmosphere, or corona, by taking images of the total eclipse in polarized light.",
    link: "https://sungrazer.nrl.navy.mil/",
  },
];

const Projects = () => {
  const handleImageClick = (link,id) => {
    window.open(link, "_blank");
  };

  return (
    <>
    <h1>Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <ImageCard
              imageSrc={project.imageSrc}
              onClick={() => handleImageClick(project.link, project.id)}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
