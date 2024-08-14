import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">

      <div className="profile-header">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <h2>Shubham</h2>
          <p>Newcomer</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="profile-section">
        <p className="section-title">Profile Details</p>
        <ul>
          <li><a href="#">Edit personal details</a></li>
          <li><p className="section-title">Verify your profile.</p></li>
          <li><a href="#">+ Verify your Govt. ID</a></li>
          <li><a href="#">+ Confirm email belikebhama@gmail.com</a></li>
          <li className="verified-item"><span>✔</span> +917058788128</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="profile-section">
        <p className="section-title">About you</p>
        <ul>
          <li><a href="#">+ Add a mini bio</a></li>
          <li><a href="#">+ Edit travel preferences</a></li>
        </ul>
      </div>

      <div className="profile-section">
        <p className="section-title">Vehicles</p>
        <ul>
          <li><a href="#">+ Add vehicle</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
