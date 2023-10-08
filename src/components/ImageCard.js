import React from "react";

const ImageCard = ({imageSrc, onClick}) => {
    return (
        <div className="image-card" onClick={onClick}>
            <img src={imageSrc}></img>

        </div>
    );
};

export default ImageCard;