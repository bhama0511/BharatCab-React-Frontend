import React from 'react';
import './footer.css';

function FooterMain() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Top carpool routes</h4>
            <ul>
              <li>Delhi → Chandigarh</li>
              <li>Mumbai → Pune</li>
              <li>Kanpur → Lucknow</li>
              <li>Bengaluru → Chennai</li>
              <li>Pune → Mumbai</li>
              <li>All carpool routes</li>
              <li>All carpool destinations</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>About</h4>
            <ul>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Help Centre</li>
              <li>Press</li>
              <li>We're Hiring!</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="language">
              <button className="btn btn-default">Language - English (India)</button>
            </div>
            <div className="social-media">
              <a href="#" className="social-media-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-media-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-media-link"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-media-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;