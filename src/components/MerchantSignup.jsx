// MerchantSignup.jsx
import React from 'react';

const MerchantSignup = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log("Merchant form submitted");
    onClose(); // Close the modal after submission
  };

  return (
    <div>
      <button onClick={onClose} className="close-button">X</button>
      <h2>Merchant Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Business Name:</label>
          <input type="text" placeholder="Enter your business name" required />
        </div>
        <div>
          <label>Business Email:</label>
          <input type="email" placeholder="Enter your business email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MerchantSignup;
