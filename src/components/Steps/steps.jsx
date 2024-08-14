import React from 'react';
import './FullWidthSteps.css';
import stepsImage from './steps.png'; // Import the image

const FullWidthImage = () => {
  return (
    <div className="image-container">
      <img src={stepsImage} alt="Steps" className="responsive-image" />
    </div>
  );
};

export default FullWidthImage;
