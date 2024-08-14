import React from 'react';
import './searchbar.css'

const SearchBox = () => {
  return (
    <nav className="navbar2 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Leaving from"
          aria-label="Search"
        />
        <input
          className="form-control me-2"
          type="text"
          placeholder="Going to"
          aria-label="Search"
        />
        <input
          className="form-control me-2"
          type="date"
          aria-label="Search"
        />
        <input
          className="form-control me-2"
          type="number"
          placeholder="No. of passengers"
          aria-label="Search"
        />
        <button
          className="btn btn-primary"
          type="button"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default SearchBox;
