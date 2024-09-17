// UserSignup.jsx
import React from 'react';

const UserSignup = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log("User form submitted");
    onClose(); // Close the modal after submission
  };

  return (
    <div>
      <button onClick={onClose} className="close-button">X</button>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSignup;
