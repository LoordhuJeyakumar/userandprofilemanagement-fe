import React from "react";
import ProfilePicture from "../components/ProfilePicture";

function EditProfile() {
  return (
    <div>
      <div className="container-fluid my-3 py-3">
        <div
          className="modal fade deactivate text-light"
          id="handleDeactivateModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Deactivate
                </h1>
                <button
                  type="button"
                  className="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <h2 className="p-2">Are you sure ?</h2>
                <h5>Do you want to deactivate your account</h5>
                <p className="text-sm mb-0 p-2">
                  Once you deactivate your account, you have to verify your
                  email again. Please be certain.
                </p>
              </div>
              <div className="modal-footer p-3 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-secondary bg-gradient-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-warning bg-gradient-warning"
                >
                  Yes{" "}
                  <div
                    className={"spinner-border spinner-border-sm "}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade delete"
          id="handleDeleteModal"
          data-bs-backdrop="static"
          data-bs-keyboard="true"
          tabIndex="-1"
          aria-labelledby="handleDeleteModal"
          aria-hidden="true"
        >
          <div className="modal-dialog text-light">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="handleDeleteModal">
                  Delete Account
                </h1>
                <button
                  type="button"
                  className="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <h2 className="p-2">Are you sure ?</h2>
                <h5>Do you want to delete your account</h5>
                <p className="text-sm mb-0 p-2">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
              </div>
              <div className="modal-footer p-3 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-info "
                  data-bs-dismiss="modal"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/zhsxmjgz.json"
                    trigger="hover"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                </button>
                <button
                  type="button"
                  className="btn btn-danger bg-gradient-danger"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/hjbrplwk.json"
                    trigger="morph"
                    state="morph-trash-in"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                  <div
                    className={"spinner-border spinner-border-sm "}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
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
                    <h5 className="text-capitalize mb-1 font-weight-bolder">
                      basicInfo?.name{" "}
                    </h5>
                  </div>
                </div>
                <div className=" col-4 my-auto ">
                  <button
                    type="button"
                    className=" d-flex align-items-center btn btn-success"
                  >
                    Fetch User &nbsp;<i className="fa-solid fa-rotate"></i>
                  </button>
                </div>
              </div>
            </div>
            <form noValidate>
              <div className="card mt-4" id="account-info">
                <div className="card-header">
                  <h5>Account Info</h5>
                </div>

                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/*  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Active </label>
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Date of birth</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                        />
                      </div>
                    </div>
                  </div> */}
                  {/*  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                        />
                      </div>
                    </div>
                  </div> */}
                  {/*  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="card mt-1" id="personal-info">
                <div className="card-header">
                  <h5>Personal Info</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>First name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Gender</label>
                        <select className="form-control" name="gender" required>
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Date of birth</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          required
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
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group-static">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer justify-content-end d-flex">
                  <button
                    className="btn  btn-info d-flex fw-bold"
                    type="submit"
                  >
                    Update Details &nbsp;
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="card mt-4" id="password">
              <div className="card-header">
                <h5>Change Password</h5>
              </div>
              <form noValidate>
                <div className="card-body pt-0">
                  <div className="input-group-static mb-4">
                    <label>Current password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="currentPassword"
                      required
                      autoComplete="off"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter current password.
                    </div>
                  </div>

                  <div className="input-group-static my-4">
                    <label>New password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      required
                      minLength={3}
                      autoComplete="off"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter new password, minimum 3.
                    </div>
                  </div>
                  <div className="input-group-static">
                    <label>Confirm New password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmNewPassword"
                      required
                      minLength={3}
                      autoComplete="off"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Must match new password.
                    </div>
                  </div>
                  <h5 className="mt-5">Password requirements</h5>
                  <p className="text-muted mb-2">
                    Please follow this guide for a strong password:
                  </p>
                  <ul className="text-muted ps-4 mb-0 float-start">
                    <li>
                      <span className="text-sm">One special characters</span>
                    </li>
                    <li>
                      <span className="text-sm">Min 6 characters</span>
                    </li>
                    <li>
                      <span className="text-sm">
                        One number (2 are recommended)
                      </span>
                    </li>
                    <li>
                      <span className="text-sm">Change it often</span>
                    </li>
                  </ul>
                  <button
                    className="btn btn-info btn-lg float-end mt-2 mb-0"
                    type="submit"
                  >
                    Update password{" "}
                    <div
                      className={"spinner-border spinner-border-sm "}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>

            <div className="card mt-4" id="delete">
              <div className="card-body">
                <div className="d-flex align-items-center mb-sm-0 mb-4">
                  <div className="w-50">
                    <h5>Delete Account</h5>
                    <p className="text-sm mb-0">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                  </div>
                  <div className="w-50 text-end">
                    <button
                      className="btn btn-secondary mb-3 mb-md-0 ms-auto"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#handleDeactivateModal"
                    >
                      Deactivate
                    </button>
                    <button
                      className="btn btn-danger mb-0 ms-2"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#handleDeleteModal"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
