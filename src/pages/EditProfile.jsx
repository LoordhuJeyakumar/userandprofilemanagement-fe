import React, { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetails, updateProfile } from "../services/profileService";
import { setProfileData } from "../redux/slices/profileSlice";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { updateUser } from "../services/userService";
import ChangePassword from "../components/ChangePassword";
import DeleteAndDeactivate from "../components/DeleteAndDeactivate";

function EditProfile() {
  const { profileData } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [isUserFormDisabled, setIsUserFormDisabled] = useState(true);
  const [isUserEdit, setIsUserEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await getProfileDetails();

      if (res.success) {
        dispatch(setProfileData(res.data.data.profile));
        setIsFormDisabled(false);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  const userSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
  });

  const handleUpdateProfile = async (values) => {
    if (isFormDisabled) {
      toast.info("Please fetch the user first");
      setErrorMessage(`Please fetch the user first,`);
      return;
    }

    try {
      const res = await updateProfile(values);

      if (res.success) {
        setSuccessMessage(res.data.data.message);
        toast.success(res.data.data.message);
        setIsFormDisabled(true);
        setIsUserEdit(false);
        getProfile();
      } else {
        setErrorMessage(res.data.data.message);
        toast.error(res.data.data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.data.message);
      toast.error(error.response.data.data.message);
    }
  };

  const handleUpdateUser = async (values) => {
    if (isUserFormDisabled) {
      toast.info("Please fetch the user first");
      setErrorMessage(`Please fetch the user first, `);
      return;
    }

    try {
      const res = await updateUser(values);

      if (res.success) {
        setSuccessMessage(res.data.data.message);
        toast.success(res.data.data.message);
        setIsUserFormDisabled(true);
        setIsUserEdit(false);
        getProfile();
      } else {
        setErrorMessage(res.data.data.message);
        toast.error(res.data.data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.data.message);
      toast.error(error.response.data.data.message);
    }
  };

  return (
    <div>
      <div className="container-fluid my-3 py-3">
        <div className="row mb-5">
          <div className="col-lg-3">
            <div className="card position-sticky  " style={{ top: "90px" }}>
              <ul className="nav flex-column   rounded   p-3 settingsNav userEdit-menu-card">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#profile"
                  >
                    <i className="fa-solid fa-person"></i> &nbsp;
                    <span className="text-sm">Profile</span>
                  </a>
                </li>
                <li className="nav-item pt-2">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#account-info"
                  >
                    <i className="fa-solid fa-file-invoice"></i>
                    &nbsp;<span className="text-sm">Account Info</span>
                  </a>
                </li>
                <li className="nav-item pt-2">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#personal-info"
                  >
                    <i className="fa-solid fa-user"></i>
                    &nbsp;
                    <span className="text-sm">Personal Info</span>
                  </a>
                </li>
                <li className="nav-item pt-2">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#contact-info"
                  >
                    <i className="fa-solid fa-address-card"></i>
                    &nbsp;
                    <span className="text-sm">Contact Info</span>
                  </a>
                </li>
                <li className="nav-item pt-2">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#password"
                  >
                    <i className="fa-solid fa-key"></i>
                    &nbsp;
                    <span className="text-sm">Change Password</span>
                  </a>
                </li>

                <li className="nav-item pt-2">
                  <a
                    className="nav-link d-flex primary-hover-bg"
                    data-scroll=""
                    href="#delete"
                  >
                    <i className="fa-solid fa-trash"></i> &nbsp;
                    <span className="text-sm">Delete Account</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 mt-lg-0 mt-4 profile-settings">
            <div className="card card-body" id="profile">
              <div className="row justify-content-center align-items-center p-0 m-0">
                <div className="col-sm-auto col-2 ">
                  <ProfilePicture />
                </div>
                <div className=" col-4 my-auto">
                  <div className="h-100">
                    <h4 className="text-capitalize mb-1 font-weight-bolder">
                      {profileData?.firstName + " " + profileData?.lastName}
                    </h4>
                  </div>
                </div>
                <div className=" col-4 my-auto ">
                  <button
                    type="button"
                    className=" d-flex align-items-center btn btn-success"
                    onClick={getProfile}
                  >
                    Fetch User &nbsp;<i className="fa-solid fa-rotate"></i>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Formik
                initialValues={{
                  username: profileData?.User?.username || "",
                  email: profileData?.User?.email || "",
                }}
                validationSchema={userSchema}
                onSubmit={handleUpdateUser}
                enableReinitialize={true}
              >
                {({ values, handleChange }) => (
                  <Form className="update-form">
                    <div className="card mt-1" id="account-info">
                      <div className="card-header d-flex justify-content-between">
                        <h5>User Info</h5>
                        <div className="card-tools ">
                          <button
                            type="button"
                            className="btn btn-sm p-1 m-1 btn-outline-primary rounded-pill"
                            onClick={() => {
                              setIsUserEdit(!isUserEdit);
                              setIsUserFormDisabled(!isUserFormDisabled);
                            }}
                          >
                            {isUserEdit ? "Cancel" : "Edit User Details"}
                          </button>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>Username</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="username"
                                value={values?.username}
                                onChange={handleChange}
                                disabled={isUserFormDisabled}
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>Email</label>
                              <Field
                                type="email"
                                className="form-control"
                                name="email"
                                value={values?.email}
                                onChange={handleChange}
                                disabled={isUserFormDisabled}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {isUserEdit && (
                        <div className="card-footer d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-success bg-gradient-success"
                          >
                            Save
                          </button>
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {profileData ? (
              <Formik
                initialValues={{
                  firstName: profileData?.firstName || "",
                  lastName: profileData?.lastName || "",
                  phoneNumber: profileData?.phoneNumber || "",
                  gender: profileData?.gender || "",
                  dateOfBirth: profileData?.dateOfBirth || "",
                  address: profileData?.address || "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleUpdateProfile}
                enableReinitialize={true}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                }) => (
                  <Form
                    className="update-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (isFormDisabled) {
                        handleUpdateProfile(values, {
                          setSubmitting: () => {},
                        });
                      } else {
                        handleSubmit(e);
                      }
                    }}
                  >
                    <div className="card mt-1" id="personal-info">
                      <div className="card-header">
                        <h5>Personal Info</h5>
                      </div>
                      <div className="card-body pt-0">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>First name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={values?.firstName}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>Last name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={values?.lastName}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>Gender</label>
                              <select
                                className="form-control"
                                name="gender"
                                value={values?.gender}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                              <ErrorMessage
                                name="gender"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group-static">
                              <label>Date of birth</label>
                              <Field
                                type="date"
                                className="form-control"
                                name="dateOfBirth"
                                value={values?.dateOfBirth}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              />
                              <ErrorMessage
                                name="dateOfBirth"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-1" id="contact-info">
                      <div className="card-header">
                        <h5>Contact Info</h5>
                      </div>
                      <div className="card-body pt-0">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="input-group-static">
                              <label>Phone</label>
                              <Field
                                type="tel"
                                className="form-control"
                                name="phoneNumber"
                                value={values?.phoneNumber}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              />
                              <ErrorMessage
                                name="phoneNumber"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="input-group-static">
                              <label>Address</label>
                              <textarea
                                type="text"
                                className="form-control w-100"
                                name="address"
                                value={values?.address}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                              />
                              <ErrorMessage
                                name="address"
                                component="div"
                                className="error text-danger"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer justify-content-between w-100 d-flex">
                        {errorMessage && (
                          <p className="text-danger">
                            {errorMessage}
                            {errorMessage && (
                              <i className="fa-solid fa-up-long"></i>
                            )}
                          </p>
                        )}
                        {successMessage && (
                          <p className="text-success">{successMessage}</p>
                        )}
                        <button
                          className="btn  btn-info d-flex fw-bold"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Update Details &nbsp;
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <ChangePassword />

            <DeleteAndDeactivate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
