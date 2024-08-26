import React from "react";

function About() {
  return (
    <div className="container my-5 about-box">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">
            About User and Profile Management System
          </h2>
          <p className="lead text-justify">
            Welcome to the User and Profile Management System, a comprehensive
            solution designed to manage user accounts and profiles with ease and
            efficiency. This application is built to help administrators and
            users maintain secure, well-organized, and personalized accounts.
          </p>
          <h4 className="mt-4">Key Features:</h4>
          <div className="card">
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <i className="fa fa-user" aria-hidden="true"></i> &nbsp; User
                Authentication: Secure login and registration with JWT-based
                authentication.
              </li>
              <li className="list-group-item">
                <i className="fa fa-users" aria-hidden="true"></i> &nbsp;
                Profile Management: Create and update user profiles with
                detailed information, including personal details and contact
                information.
              </li>

              <li className="list-group-item">
                <i className="fa fa-shield" aria-hidden="true"></i> &nbsp;
                Security Measures: Passwords are securely hashed using bcrypt,
                ensuring that user data is well-protected.
              </li>
              <li className="list-group-item">
                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                User Verification: Email verification and password reset
                functionality to enhance account security.
              </li>
            </ul>
          </div>
          <h4 className="mt-4">Demo Credentials</h4>
          <p>
            Feel free to explore the application using the following demo
            credentials:
          </p>
          <div className="card mb-3">
            <div className="card-header bg-primary text-white">
              Demo Account - 1
            </div>
            <div className="card-body">
              <p>
                <strong>Email:</strong> admin@example.com
              </p>
              <p>
                <strong>Password:</strong> Admin@123
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header bg-secondary text-white">
              Demo Account - 2
            </div>
            <div className="card-body">
              <p>
                <strong>Email:</strong> user@example.com
              </p>
              <p>
                <strong>Password:</strong> User@123
              </p>
            </div>
          </div>
          <h4 className="mt-4">How to Use:</h4>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;
                <b>Login:</b> Use the demo credentials above to log in as either
                an admin or a regular user.
              </li>
              <li className="list-group-item">
                <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                <b>Profile Management:</b> Once logged in, navigate to the
                profile section to view or edit profile details.
              </li>
              <li className="list-group-item">
                <i className="fa fa-cogs" aria-hidden="true"></i> &nbsp;
                <b>User Management:</b> If logged in as an admin, you can manage
                other users, assign roles, and oversee account activities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
