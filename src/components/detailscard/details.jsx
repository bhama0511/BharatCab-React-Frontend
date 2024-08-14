import React from 'react';
import './details.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

const RideCard = () => {
  return (
    <div className="ride-card">

      <div className="ride-header">
        <div className="ride-time">
          <p className="ride-start">00:30</p>
          <p className="ride-duration">2h30</p>
          <p className="ride-end">03:00</p>
        </div>

        <div className="ride-cities">
          <span>Pune</span>
          <span>Mumbai</span>
        </div>
        <div className="ride-price">₹310.00</div>
      </div>




      <div className="ride-footer">
        <div className="ride-avatar">
          <PersonIcon className="avatar-icon" />
          <span>Nagesh</span>
        </div>
        <div className="ride-features">
          <DirectionsCarIcon />
          <span>Instant Booking</span>
          <FlashOnIcon />
          <span>Max. 2 in the back</span>
          <PeopleIcon />
        </div>
      </div>
    </div>
  );
};

export default RideCard;