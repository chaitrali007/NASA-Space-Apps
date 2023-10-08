import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./Carousel";
import "./Home.css"

function Home(){
    return (
      <>
      <Carousel/>
        <div className="Info">
          <div className="h">
            <h1>What's Heliophysic Big Year?</h1>
            <div className="i">
              <p>
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
          <div className="image">
            <img src="https://science.nasa.gov/wp-content/uploads/2023/09/HBY_color_full.png"></img>
          </div>
        </div>
      </>
    );
}

export default Home;