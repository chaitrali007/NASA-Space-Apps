import React from "react";
import "./Story.css";
import ImageCard from "./ImageCard";
import s1 from "./images/s1.webp";
import s2 from "./images/s2.webp";
import s3 from "./images/sun1.jpg";
import s4 from "./images/s4.webp";

const storyData = [
  {
    id: 1,
    imageSrc: s1,
    title:
      "Know Python? Or have a DSLR Camera? The Eclipse Megamovie needs your help!",
  },
  {
    id: 2,
    imageSrc: s2,
    title: "NASA Selects Four Small Explorer Mission Concept Studies",
    description:
      "Join the hunt for solar jets — enigmatic bursts of energy from our own star, the Sun.",
  },
  {
    id: 3,
    imageSrc: s3,
    title:
      "NASA Announces Monthly Themes to Celebrate the Heliophysics Big Year",
    description:
      "Use a DSLR camera to record dynamics in the solar corona during the total eclipse, or help analyze the images afterward.",
  },
  {
    id: 4,
    imageSrc: s4,
    title:
      "Wallops Flight Facility selected to manage HESTO for NASA Headquarters",
    description:
      "Help study structures and changes in the Sun’s outer atmosphere, or corona, by taking images of the total eclipse in polarized light.",
  },
];

const Story = () => {
  const handleImageClick = (id) => {
    console.log(`Clicked on image card with ID ${id}`);
  };

  return (
    <>
      <h1>Related Stories</h1>
      <div className="stories-container">
        {storyData.map((story) => (
          <div key={story.id} className="story-card">
            <ImageCard
              imageSrc={story.imageSrc}
              onClick={() => handleImageClick(story.id)}
            />
            <h2>{story.title}</h2>
            {/* <p>{story.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};
export default Story;