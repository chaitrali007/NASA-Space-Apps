import React, { useState } from "react";
import "./ProjectsPage.css"; 
import img1 from '../src/images/three.jpg';
import { Link } from "react-router-dom";

const ProjectsPage = () => {

  const [filters, setFilters] = useState({
    level: {
      beginner: false,
      intermediate: false,
      advanced: false,
    },
    theme: {
      photography: false,
      dataAnalysis: false,
      computing: false,
    },
  });


  const projectData = [
    {
      id: 1,
      imageSrc: { img1 },
      description: "HAMSCI",
      level: "beginner",
      theme: "photography",

    },
    {
      id: 2,
      imageSrc: {},
      description: "sungrazer project",
      level: "intermediate",
      theme: "dataAnalysis",

    },
  ];


  const handleFilterChange = (category, option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [option]: !prevFilters[category][option],
      },
    }));
  };





  const filteredProjects = projectData.filter((project) => {
    return (
      (filters.level[project.level] || !Object.values(filters.level).some(Boolean)) &&
      (filters.theme[project.theme] || !Object.values(filters.theme).some(Boolean))
    );
  });

  return (
    <div className="projects-page">
      <div className="filter-bar">
        <h2>Filter Projects</h2>
        <div className="filter-category">
          <h3>Level</h3>
          <label>
            <input
              type="checkbox"
              checked={filters.level.beginner}
              onChange={() => handleFilterChange("level", "beginner")}
            />
            Beginner-friendly
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.level.intermediate}
              onChange={() => handleFilterChange("level", "intermediate")}
            />
            Intermediate
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.level.advanced}
              onChange={() => handleFilterChange("level", "advanced")}
            />
            Advanced
          </label>
        </div>
        <div className="filter-category">
          <h3>Theme</h3>
          <label>
            <input
              type="checkbox"
              checked={filters.theme.photography}
              onChange={() => handleFilterChange("theme", "photography")}
            />
            Photography
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.theme.dataAnalysis}
              onChange={() => handleFilterChange("theme", "dataAnalysis")}
            />
            Data Analysis
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.theme.computing}
              onChange={() => handleFilterChange("theme", "computing")}
            />
            Computing
          </label>
        </div>
      </div>
      <div className="projects-cards">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projects-card">
            <Link to="/project">
              <img src={img1} />
              <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
