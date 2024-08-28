import React, { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { Link } from "react-router-dom";
import { getUerDetails } from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log(userData);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await getUerDetails();
      console.log(res);
      if (res.success) {
        dispatch(setUserData(res.data.data.user));
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getProfile  = async () => {};

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
            <strong>Email:</strong> {userData.email}
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
