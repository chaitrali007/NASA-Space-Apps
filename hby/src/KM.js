import React from "react";
import ReactDOM from "react-dom/client";
import "./KM.css";
import Story from "./Story";


function Know() {
  return (
    <div className="know-more">
      <div className="heliophy">
        <div className="helio">
          <h1>Heliophysics</h1>
        </div>
        <div className="p">
          <p>
            Heliophysics Division studies the nature of the Sun, and how it
            influences the very nature of space — and, in turn, the atmospheres
            of planets and the technology that exists there. Space is not, as is
            often believed, completely empty; instead, we live in the extended
            atmosphere of an active star. Our Sun sends out a steady outpouring
            of particles and energy -- the solar wind - as well as a constantly
            writhing magnetic system. This extensive, dynamic solar atmosphere
            surrounds the Sun, Earth, the planets, and extends far out into the
            solar system.
          </p>
          <br></br>
          <p>
            Studying this system not only helps us understand fundamental
            information about how the universe works, but also helps protect our
            technology and astronauts in space. NASA seeks knowledge of
            near-Earth space, because -- when extreme -- space weather can
            interfere with our communications, satellites and power grids. The
            study of the Sun and space can also teach us more about how stars
            contribute to the habitability of planets throughout the universe.
          </p>
        </div>
      </div>
      <div className="video">
        <iframe
          className="imp"
          src="https://www.youtube.com/embed/lfnst1W33OI?si=xGPNtdNHTjSGP650"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <Story></Story>
    </div>
  );
}
export default Know;