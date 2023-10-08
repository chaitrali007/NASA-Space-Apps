import React from "react";
import "./CCP.css"; 
import img3 from '../../src/images/Group therapy-rafiki.png';
import cpp from '../../src/images/cpp.png'

const CCP = () => {
    return (
        <>
        
      <div className="ccp-container">
        <div className="ccp-content">
          <h1>Join Our Community Partner Program</h1>
          <p>
          Join our HelioConnect community program and embark on an incredible journey through the Heliophysics Big Year! As a member of our vibrant community, 
          you'll have the remarkable opportunity to immerse yourself in the captivating world of solar science. 
            
          </p>
          <p>
          From witnessing awe-inspiring solar eclipses to participating in citizen science projects and experiencing the magic of auroras, 
          you'll be at the forefront of solar exploration.
          </p>
          <button className="join-button">Join Us</button>
        </div>
        <div className="ccp-vector">
          <img src = {img3} className="ccp-img"/>
        </div>
      </div>
      <div classname="perks">
        <h1 className="whatyouget">What's in it for you?</h1>
        <img src={cpp} className="timeline-container"/>



        <div className="what-you-will-do">
      <h2 className="what">What You Will Do?</h2>
      <div className="card-container">
        <div className="perk-card">
          <h3>Promotion</h3>
          <p className="perk-content">Ambassadors will actively promote the Helio Big Year Campaign by spreading awareness and encouraging participation in their communities and networks.</p>
        </div>
        <div className="perk-card">
          <h3>Education</h3>
          <p className="perk-content">They will educate others about solar energy, environmental conservation, and the campaign's objectives through workshops, presentations, and informational materials.</p>
        </div>
        <div className="perk-card">
          <h3>Advocacy</h3>
          <p className="perk-content">Ambassadors will advocate for sustainable practices and support local initiatives, helping to drive positive change in their communities</p>
        </div>
      </div>
    </div>
    </div>
      </>
    );
  };
  
  export default CCP;
  