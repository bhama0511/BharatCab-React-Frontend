import React from 'react';
import './style.css'; // Ensure this path is correct based on your directory structure

export default function Page3() {
  return (
    <div className="page3-container">
      <h1>What would you like other members to know about you?</h1>
      <textarea 
        name="ta" 
        id="ta" 
        placeholder="What are your interests" 
        className="text-area"
      ></textarea>
    </div>
  );
}
