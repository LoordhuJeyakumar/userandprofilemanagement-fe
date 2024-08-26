import React from "react";
import { Link } from "react-router-dom";
import signinIllustrator from "../assets/signin.svg";

function LoginPage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row justify-content-center flex-row card mx-5 mt-4 p-5 signin-box pt-5 w-75">
        <div className="col-md-8 col-lg-6 col-xxl-5  ">
          <div className="card auth-card mb-0 mx-3">
            <div className="card-body">
              <h3 className="text-center mb-4">
                Sign in <i className="fa fa-sign-in" aria-hidden="true"></i>
              </h3>
              <hr />

              <form className="signin-form">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
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
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <Link
                    className="text-primary fw-semibold text-decoration-none"
                    to={"/forgot-password"}
                  >
                    Forgot Password ?
                  </Link>
                </div>
                <button className="btn btn-primary w-100 mb-4 signin-btn">
                  Sign In
                </button>
                <div className="d-flex align-items-center justify-content-center">
                  <p className=" mb-0 fw-semibold">Don't have an account?</p>
                  <Link
                    className="text-primary fw-bold ms-2 text-decoration-none"
                    to={"/signup"}
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/*  <div className="card mb-0">
            <div className="card-body">
           
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
                <button className="btn btn-primary w-100 mb-4 rounded-2">
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
          </div> */}
        </div>
        <div className="col-lg-6 col-xxl-6 d-flex  align-items-center  signin-box text-md-start text-center">
          <div className="w-100 text-center">
            <h2 className="fw-bold">Welcome back!</h2>
            <p className="mb-0">Sign in to your account to continue</p>
            <img
              src={signinIllustrator}
              alt=""
              className="img w-75 img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
