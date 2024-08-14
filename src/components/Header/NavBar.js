import React, { useState } from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">BharatCab</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/publishride">Publish a ride</Link></li>

        {/* Profile Dropdown */}
        <li className="dropdown">
          <span onClick={toggleDropdown} className="dropdown-toggle">
            Profile
          </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/your-rides">Your Rides</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/payments-refunds">Payments & Refunds</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
