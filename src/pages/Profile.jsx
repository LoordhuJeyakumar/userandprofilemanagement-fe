import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProfilePicture from "../components/ProfilePicture";
import { useSelector } from "react-redux";
const sampleProfile = {
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "123-456-7890",
  gender: "male",
  profilePicture: "",
  dateOfBirth: "1990-01-01",
  address: "123 Main St, Anytown, USA",
  userId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  user: {
    username: "johndoe",
    email: "johndoe@example.com",
    password: "securepassword123",
    role: "user",
    isActive: true,
    isVerified: false,
  },
};
const Profile = () => {
  const { userId } = useParams();

  const { profileData } = useSelector((state) => state.profile);
  const [profile, setProfile] = useState(profileData);
  console.log(profileData);

  useEffect(() => {
    // Fetch profile data
    axios
      .get(`/api/profile/${userId}`)
      .then((response) => {
        setProfile(sampleProfile);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, [userId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-card card flex-column">
        <div className="profile-header">
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>

          <ProfilePicture />
        </div>

        <div className="d-flex gap-3 justify-content-around flex-wrap mt-3">
          <div className="profile-section ">
            <h3>
              Personal Information{" "}
              <Link to="/edit-profile" className="edit-icon">
                <i className="fas fa-pencil-alt"></i>
              </Link>{" "}
            </h3>
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {profile.dateOfBirth || "N/A"}
            </p>
            <p>
              <strong>Gender:</strong> {profile.gender || "N/A"}
            </p>
          </div>

          <div className="profile-section ">
            <h3>
              Contact Information{" "}
              <Link to="/edit-profile" className="edit-icon">
                <i className="fas fa-pencil-alt"></i>
              </Link>
            </h3>
            <p>
              <strong>Email:</strong> {profile.user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {profile.phoneNumber || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
          </div>

          <div className="profile-section ">
            <h3>
              Account Information{" "}
              <Link to="/edit-profile" className="edit-icon">
                <i className="fas fa-pencil-alt"></i>
              </Link>
            </h3>
            <p>
              <strong>Username:</strong> {profile.user.username}
            </p>
            <p>
              <strong>Role:</strong> {profile.user.role}
            </p>
            <p>
              <strong>Account Status:</strong>{" "}
              {profile.user.isActive ? "Active" : "Inactive"}
            </p>
            <p>
              <strong>Email Verified:</strong>{" "}
              {profile.user.isVerified ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="edit-button-container">
          <Link to="/edit-profile" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
