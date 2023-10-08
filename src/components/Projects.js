import React from "react";
import ImageCard from "./ImageCard";
import './Projects.css'; 
import three from '../images/three.jpg';

const projectData = [
    {
      id: 1,
      imageSrc: three,
      title: "Project 1",
      description: "Description of Project 1.",
    },
    {
      id: 2,
      imageSrc: three, 
      title: "Project 2",
      description: "Description of Project 2.",
    },
    {
      id: 3,
      imageSrc: three, 
      title: "Project 3",
      description: "Description of Project 3.",
    },
    {
      id: 4,
      imageSrc: three,
      title: "Project 4",
      description: "Description of Project 4.",
    },
  ];
  
  const Projects = () => {
    const handleImageClick = (id) => {
      console.log(`Clicked on image card with ID ${id}`);
    };
  
    return (
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <ImageCard
              imageSrc={project.imageSrc}
              onClick={() => handleImageClick(project.id)}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;