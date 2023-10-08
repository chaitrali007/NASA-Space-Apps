import React from "react";
import "./Story.css";
import Image1 from "./images/Screenshot 2023-10-08 061108.png";
import Image2 from "./images/Screenshot 2023-10-08 061131.png";
import Image3 from "./images/Screenshot 2023-10-08 065210.png";
import Image4 from "./images/Screenshot 2023-10-08 065231.png";
import Image5 from "./images/Screenshot 2023-10-08 065254.png";

function Story(){
    return (
      <div className="stories">
        <div className="h">
          <h1>Related Stories</h1>
        </div>
        <div className="story-roll">
          <a href="https://science.nasa.gov/get-involved/citizen-science/know-python-or-have-a-dslr-camera-the-eclipse-megamovie-needs-your-help/">
            {" "}
            <img className="i1" src={Image1} />{" "}
          </a>
          <a href="https://www.nasa.gov/news-release/nasa-selects-four-small-explorer-mission-concept-studies/">
            {" "}
            <img className="i2" src={Image2} />{" "}
          </a>
        </div>
        <div className="articles">
          <a href="https://www.nasa.gov/centers-and-facilities/goddard/after-seventeen-years-a-spacecraft-makes-its-first-visit-home/">
            <img className="i3" src={Image3} />
          </a>
          <a href="https://www.nasa.gov/science-research/heliophysics/nasa-announces-monthly-themes-to-celebrate-the-heliophysics-big-year/">
            <img className="i4" src={Image4} />
          </a>
          <a href="https://science.nasa.gov/uncategorized/wallops-flight-facility-selected-to-manage-hesto-for-nasa-headquarters/">
            <img className="i5" src={Image5} />
          </a>
        </div>
      </div>
    );
}

export default Story;