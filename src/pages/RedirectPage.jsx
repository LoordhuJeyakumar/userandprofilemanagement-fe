import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // Import an icon for animation

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      //navigate("/target-page"); // Replace with your target path
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light redirect">
      <div className="text-center">
        <FaSpinner className="spinner-icon mb-4" /> {/* Spinning icon */}
        <h1 className="display-4">Redirecting...</h1>
        <p className="lead">You are being redirected to the dashboard.</p>
        <p>
          If you are not redirected automatically,{" "}
          <a href="/dashboard" className="text-decoration-none">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RedirectPage;
