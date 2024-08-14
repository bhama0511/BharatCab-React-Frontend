import React, { useState } from 'react';
import userImage from './user.png'; // Adjust the path as necessary
import './style.css'; // Ensure this path is correct based on your directory structure
import { useNavigate } from 'react-router-dom';

export default function Page1() {
  const [imageSrc, setImageSrc] = useState(userImage);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    navigate('/Page2'); // Change '/Page2' to the route you want to navigate to
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <img src={imageSrc} alt="User" className={imageSrc !== userImage ? "img-display-after" : "img-display-before"} />
        <h1>Don't wear sunglasses, look straight ahead, and make sure you're alone.</h1>
        <label className="image-upload-label" htmlFor="image-upload-input">Choose an image</label>
        <input id="image-upload-input" type="file" accept="image/*" className="image-upload-input" onChange={handleImageChange} />
        <button className="image-upload-button" onClick={handleClick}>Next</button>
      </div>
    </div>
  );
}
