// Signup.jsx
import React, { useState } from 'react';
import './Signup.css';
import UserSignup from './UserSignup';
import MerchantSignup from './MerchantSignup';

const Signup = ({ onClose }) => {
  const [showForm, setShowForm] = useState(null); // null, 'user', or 'merchant'

  const handleUserSignupClick = () => {
    setShowForm('user');
  };

  const handleMerchantSignupClick = () => {
    setShowForm('merchant');
  };

  return (
    <>
      <div className="signup-overlay" onClick={onClose}></div>
      <div className="signup-modal">
        <button onClick={onClose} className="close-button">X</button>
        
        {showForm === null && (
          <>
            <h2>Select Signup Type</h2>
            <div className="signup-options">
              <button className="signup-option" onClick={handleUserSignupClick}>
                User Signup
              </button>
              <button className="signup-option" onClick={handleMerchantSignupClick}>
                Merchant Signup
              </button>
            </div>
          </>
        )}

        {showForm === 'user' && <UserSignup onClose={onClose} />}
        {showForm === 'merchant' && <MerchantSignup onClose={onClose} />}
      </div>
    </>
  );
};

export default Signup;
