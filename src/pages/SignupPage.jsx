import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row justify-content-center flex-row card mx-5 mt-4 p-5 signup-box pt-5 w-75">
        <div className="col-lg-6 col-xxl-6 d-flex  align-items-center order-md-0 order-1 justify-content-center text-md-start text-center">
          <div className="signup-content ">
            <h2 className="fw-bold">User and Profile</h2>
            <h3>Management System</h3>
            <p>Create an account to get started</p>
            <h6>Key Features </h6>
            <span>
              Manage users and their profiles | Easy to use interface | Secure
              data
            </span>
          </div>
        </div>

        <div className="col-md-8 col-lg-6 col-xxl-5 order-md-1 order-0">
          <div className="card mb-0">
            <div className="card-body">
              {/* Signup Form */}
              <h3 className="text-center mb-4">Register here</h3>
              <hr />
              <form className="signup-form">
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    aria-describedby="textHelp"
                    placeholder="Enter Username"
                    autoComplete=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    autoComplete=""
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    autoComplete=""
                  />
                </div>
                <button className="btn btn-primary w-100 mb-4 rounded-2 signup-btn">
                  Sign Up <i className="bi bi-arrow-right-short"></i>
                </button>

                <div className="d-flex align-items-center justify-content-center">
                  <span className=" mb-0 fw">Already have an Account?</span>
                  <Link className="text-primary fw-bold ms-2" to={"/login"}>
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
