import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../components/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetails } from "../services/profileService";
import { setProfileData } from "../redux/slices/profileSlice";

const Profile = () => {
  const { profileData } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profileData) {
      getProfile();
    }
  }, [profileData]);

  async function getProfile() {
    try {
      const res = await getProfileDetails();

      if (res.success) {
        dispatch(setProfileData(res.data.data.profile));
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  /* if (!profileData) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <lord-icon
          src="https://cdn.lordicon.com/afixdwmd.json"
          trigger="loop"
          state="loop-cycle"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        <h1>Loading...</h1>
      </div>
    );
  } */

  return (
    <div className="profile-container">
      <h1 className="">Your Profile</h1>
      <div className="profile-card card flex-column">
        <div className="profile-header">
          <h2>
            {profileData?.firstName} {profileData?.lastName}
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
              <strong>First Name:</strong> {profileData?.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>{" "}
              {profileData?.lastName || (
                <span className="badge rounded-pill text-bg-secondary">
                  Not Found
                </span>
              )}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {profileData?.dateOfBirth || (
                <span className="badge rounded-pill text-bg-secondary">
                  Not Found
                </span>
              )}
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              {profileData?.gender || (
                <span className="badge rounded-pill text-bg-secondary">
                  Not Found
                </span>
              )}
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
              <strong>Email:</strong> {profileData?.User?.email}
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              {profileData?.phoneNumber || (
                <span className="badge rounded-pill text-bg-secondary">
                  Not Found
                </span>
              )}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {profileData?.address || (
                <span className="badge rounded-pill text-bg-secondary">
                  Not Found
                </span>
              )}
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
              <strong>Username:</strong> {profileData?.User?.username}
            </p>
            <p>
              <strong>Role:</strong> {profileData?.User?.role}
            </p>
            <p>
              <strong>Account Status:</strong>{" "}
              {profileData?.User?.isActive ? (
                <span className="badge rounded-pill text-bg-success">
                  Active
                </span>
              ) : (
                <span className="badge rounded-pill text-bg-danger">
                  Inactive
                </span>
              )}
            </p>
            <p>
              <strong>Email Verified:</strong>{" "}
              {profileData?.User?.isVerified ? (
                <span className="badge rounded-pill text-bg-success">
                  Verified
                </span>
              ) : (
                <span className="badge rounded-pill text-bg-danger">
                  Not Verified
                </span>
              )}
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
