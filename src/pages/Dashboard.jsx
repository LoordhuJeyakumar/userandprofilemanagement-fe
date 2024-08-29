import React, { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { Link } from "react-router-dom";
import { getUerDetails } from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/slices/userSlice";
import { setProfileData } from "../redux/slices/profileSlice";
import { getProfileDetails } from "../services/profileService";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { profileData } = useSelector((state) => state.profile);

  useEffect(() => {
    getUser();
    getProfile();
  }, []);

  const getUser = async () => {
    try {
      const res = await getUerDetails();

      if (res.success) {
        dispatch(setUserData(res.data.data.user));
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getProfile = async () => {
    try {
      const res = await getProfileDetails();

      if (res.success) {
        dispatch(setProfileData(res.data.data.profile));
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="container card p-5">
      <div className="text-center">
        <h2>Manage your profile information below.</h2>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3 className="mb-3 border-bottom fw-bolder">Your Profile</h3>
          <p>
            <strong>Name:</strong>{" "}
            {profileData?.firstName + " " + profileData?.lastName || (
              <span className="badge rounded-pill text-bg-secondary">
                Not Found
              </span>
            )}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {userData?.email || (
              <span className="badge rounded-pill text-bg-secondary">
                Not Found
              </span>
            )}
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
            <strong>Gender:</strong>{" "}
            {profileData?.gender || (
              <span className="badge rounded-pill text-bg-secondary">
                Not Found
              </span>
            )}
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
