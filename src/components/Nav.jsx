// src/components/Nav.jsx
import React, { useState } from 'react';
import './Nav.css'; 
import Signup from './Signup';

const Nav = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <nav>
      <div className="nav-container"> 
        <div className="nav-logo">
          <div className="logo"> </div>
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="#">HOME</a></li> 
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">GALLERY</a></li> 
            <li><a href="#">CONTACT US</a></li>
            <li>
              <button className="signup-button" onClick={handleSignupClick}>
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      </div> {showSignup && <Signup onClose={handleCloseSignup} />}
    </nav>
  );
}

export default Nav;
