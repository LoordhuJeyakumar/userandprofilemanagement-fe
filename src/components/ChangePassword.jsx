import { useEffect, useState } from "react";
import * as Yup from "yup";
import React from "react";
import { Formik } from "formik";
import { changePassword } from "../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RedirectTo = ({ countDown, redirectPage }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(countDown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate(redirectPage);
    }
  }, [count, navigate, redirectPage]);

  return (
    <div>
      <p>
        You will be redirected to the login page in {count} seconds. If not
        redirected, click{" "}
        <a href={redirectPage} className="text-primary">
          here
        </a>
      </p>
    </div>
  );
};

function ChangePassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const passwordValidationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm new password is required"),
  });

  const handlePasswordChangeSubmit = async (values) => {
    setIsSubmitted(true);

    const newPasswordObj = {
      oldPassword: values.currentPassword,
      newPassword: values.newPassword,
    };

    try {
      const res = await changePassword(newPasswordObj);
      console.log(res);

      if (res.success) {
        toast.success(res.data.data.message);
        setSuccessMessage(res.data.data.message);
        setErrorMessage(null);
        setIsSubmitted(false);
      } else {
        toast.error(res.error.response.data.error);
        setErrorMessage(res.error.response.data.error);
        setSuccessMessage(null);
        setIsSubmitted(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setErrorMessage(error.response.data.message);
      setSuccessMessage(null);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="card mt-4" id="password">
      <div className="card-header">
        <h5>Change Password</h5>
      </div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={passwordValidationSchema}
        onSubmit={handlePasswordChangeSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="card-body py-0">
              <div className="row gap-2">
                <div className="col-12 mt-1">
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      name="currentPassword"
                      value={values.currentPassword}
                      onChange={handleChange}
                    />
                    {errors.currentPassword && touched.currentPassword && (
                      <div className="text-danger">
                        {errors.currentPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12 mt-1">
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      value={values.newPassword}
                      onChange={handleChange}
                    />
                    {errors.newPassword && touched.newPassword && (
                      <div className="text-danger">{errors.newPassword}</div>
                    )}
                  </div>
                </div>
                <div className="col-12 mt-1">
                  <div className="form-group">
                    <label htmlFor="confirmNewPassword">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      value={values.confirmNewPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmNewPassword &&
                      touched.confirmNewPassword && (
                        <div className="text-danger">
                          {errors.confirmNewPassword}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="row m-3">
                {
                  /* Error and Success message */
                  (errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )) ||
                    (successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                        <RedirectTo countDown={5} redirectPage={"/login"} />
                      </div>
                    ))
                }
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Change Password &nbsp;
                    <i class="fa fa-unlock" aria-hidden="true"></i>
                    &nbsp;
                    {isSubmitted ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ChangePassword;
