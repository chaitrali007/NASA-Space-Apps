import React from "react";
import "./ImageCard.css";
const ImageCard = ({ imageSrc, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={imageSrc}></img>
    </div>
  );
};

export default ImageCard;
