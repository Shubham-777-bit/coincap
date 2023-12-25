import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="inner-container">
        {/* Left Part */}
        <div className="left-part">
          <div className="nav-item">Coin</div>
          <div className="nav-item">Exchange</div>
          <div className="nav-item">Swap</div>
        </div>

        {/* Middle Part */}
        <div className="middle-part">
          {/* Placeholder text or icon */}
          <div className="logo-placeholder">Logo</div>
        </div>

        {/* Right Part */}
        <div className="right-part">
          <div className="nav-item">USD</div>
          <div className="nav-item">English</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



