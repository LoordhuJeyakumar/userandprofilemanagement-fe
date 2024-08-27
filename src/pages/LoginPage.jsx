import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import signinIllustrator from "../assets/signin.svg";
import { setError, setStatus, setUserData } from "../redux/slices/userSlice";
import { login } from "../services/userService";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector((state) => state.user);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(setStatus("loading"));
      // Replace with your actual login API request
      const response = await login(values);
      console.log(response);

      if (response.success) {
        toast.success(response.data.message)
        dispatch(setUserData(response.data.data));
        dispatch(setStatus("succeeded"));
        //navigate("/dashboard");
      } else {
        dispatch(setError(response.message));
        dispatch(setStatus("failed"));
      }
    } catch (err) {
      dispatch(setError("Invalid credentials"));
      dispatch(setStatus("failed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="row justify-content-center flex-row card mx-5 mt-4 p-5 signin-box pt-5 w-75">
        <div className="col-md-8 col-lg-6 col-xxl-5">
          <div className="card auth-card mb-0 mx-3">
            <div className="card-body">
              <h3 className="text-center mb-4">
                Sign in <i className="fa fa-sign-in" aria-hidden="true"></i>
              </h3>
              <hr />
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="signin-form">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <Link
                        className="text-primary fw-semibold text-decoration-none"
                        to={"/forgot-password"}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-4 signin-btn"
                      disabled={isSubmitting || status === "loading"}
                    >
                      {isSubmitting || status === "loading"
                        ? "Signing In..."
                        : "Sign In"}
                    </button>
                    {error && (
                      <div className="text-danger text-center">{error}</div>
                    )}
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="mb-0 fw-semibold">Don't have an account?</p>
                      <Link
                        className="text-primary fw-bold ms-2 text-decoration-none"
                        to={"/signup"}
                      >
                        Create an account
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-6 d-flex align-items-center signin-box text-md-start text-center">
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
};

// Replace this function with your actual API call
const fakeApiLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve({ data: { id: 1, name: "Test User", email } });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export default LoginPage;
