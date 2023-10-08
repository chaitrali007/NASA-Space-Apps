import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./Carousel";
import "./Home.css"
import Projects from "./Projects";
import Image from "./images/Black and Neon Green Modern Creative Agency Timeline Instagram Story.png";

function Home(){
    return (
      <>
        <Carousel />
        <div className="Info">
          <div className="h">
            <h1 className="whatis">What's Heliophysic Big Year?</h1>
            <div className="i">
              <p className="helioinfo">
                The Heliophysics Big Year is a global celebration of solar
                science and the Sun’s influence on Earth and the entire solar
                system. During the Heliophysics Big Year, you will have the
                opportunity to participate in many solar science events such as
                watching solar eclipses, experiencing an aurora, participating
                in citizen science projects, and other fun Sun-related
                activities.
              </p>
            </div>
          </div>
          <div className="image-hby">
            <img src="https://science.nasa.gov/wp-content/uploads/2023/09/HBY_color_full.png" className="nasa-img"></img>
          </div>
        </div>
        <br/>
        
        <Projects />
        <img className="timeline" src={Image}></img>
      </>
    );
}

export default Home;