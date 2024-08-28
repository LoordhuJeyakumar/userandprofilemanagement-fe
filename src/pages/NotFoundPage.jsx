import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Import an icon

const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light notfound">
      <div className="text-center">
        <FaExclamationTriangle className="error-icon mb-4" /> {/* Warning icon */}
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
