import React from 'react';
import './Technology.css';

const Technology = ({ image, name }) => {
  return (
    <div className="technology">
      <div className="tech-image-wrapper">
        <img src={image} alt={name} className="tech-image" />
      </div>
      {/* <p className="tech-name">{name}</p> */}
    </div>
  );
};

export default Technology;
