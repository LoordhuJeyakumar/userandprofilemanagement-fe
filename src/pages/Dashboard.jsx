import React, { useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { Link } from "react-router-dom";

const getRandomId = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Sample online avatars generated using avatar-placeholder
const preLoadedImages = [
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
];

const Dashboard = () => {
  const [profilePicture, setProfilePicture] = useState(preLoadedImages[0]);

  const handleUpdatePicture = (newPicture) => {
    setProfilePicture(newPicture);
    // Optionally, send the new picture to your backend for saving
  };

  return (
    <div className="container card p-5">
      <div className="text-center">
        <h2>Manage your profile information below.</h2>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Your Profile</h4>
          <p>
            <strong>Name:</strong> [First Name] [Last Name]
          </p>
          <p>
            <strong>Email:</strong> [User's Email]
          </p>
          <p>
            <strong>Phone Number:</strong> [Phone Number]
          </p>
          <p>
            <strong>Gender:</strong> [Gender]
          </p>

          <Link to={"/profile"} className="btn btn-secondary">
            Show More
          </Link>
          <Link to={"/edit-profile"} className="btn btn-primary ms-2">
            Edit Profile
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
