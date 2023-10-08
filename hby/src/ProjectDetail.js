
import React from "react";
import './ProjectDetail.css';


const ProjectDetail = () => {
  return (
    <div className="project-detail">
      <div className="header-project">
        <h1>The Sungrazer Project</h1>
      </div>
      <div className="content">
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            Welcome to the "Sungrazer" citizen science Project comet program,
            based in the Solar Physics Department of the U.S. Naval Research
            Laboratory, Washington D.C.
          </p>
          <p>
            The Sungrazer Project is a NASA-funded program than enables the discovery and reporting of previously unknown comets in the ESA/NASA SOHO and NASA STEREO satellite instrument fields of view. Anyone, anywhere in the world can become a "Comet Hunter", and immediately begin looking for new comets in the spacecraft data. The Sungrazer Project provides this website to enable the reporting of these comets, and subsequently allows the project team to perform necessary measurements and data reduction to ultimately turn the comet reports into officially designated comets.
        </p>

        </div>
        <div className="contribute-card">
        <h2>How to Contribute</h2>
        <p>
          The Sungrazer Project is open to contributions from anyone around the
          world who is interested in discovering and reporting comets. Here's
          how you can get started:
        </p>

        <ul>
          <li>Download the latest images from SOHO or STEREO missions.</li>
          <li>Look for moving objects in the images, specifically comets.</li>
          <li>Submit your comet sightings through our website.</li>
        </ul>
        <button className="get-started-button">Get Started</button>
      </div>
 
      </div>

    </div>
  );
};

export default ProjectDetail;
