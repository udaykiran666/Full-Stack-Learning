import React from 'react';
import './App.css' // Import CSS for styling

// Profile Component
const Profile = () => {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h2 className="profile-name">Rita Correia <span className="age">32</span></h2>
          <p className="location">London</p>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="profile-stats">
        <div className="stat">
          <h3>80K</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>803K</h3>
          <p>Likes</p>
        </div>
        <div className="stat">
          <h3>1.4K</h3>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
