import { useState } from "react";
import React from "react";
import { deactivateUser, logout } from "../services/userService";
import RedirectTo from "./RedirectTo";

function DeleteAndDeactivate() {
  const [isDeactivatetStart, setIsDeactivateStart] = useState(false);
  const [isDeleteStart, setIsDeleteStart] = useState(false);
  const [isDeactivateSuccess, setIsDeactivateSuccess] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isDeactivateError, setIsDeactivateError] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDeactivate = async () => {
    setIsDeactivateStart(true);
    setIsDeactivateError(false);
    setIsDeactivateSuccess(false);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await deactivateUser();
      console.log(response);

      if (response.success) {
        //navigate to home page and Reloade the page

        setIsDeactivateSuccess(true);
        setSuccessMessage(response.data.data.message);
        setIsDeactivateStart(false);

        logout();

        // Close the modal after 5 seconds
        setTimeout(() => {
          const modalElement = document.getElementById("handleDeactivateModal");
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
          window.location.reload();
        }, 5500);
      } else {
        setIsDeactivateError(true);
        setErrorMessage(response.error.response.data.error);
        setIsDeactivateStart(false);
      }
    } catch (error) {
      setIsDeactivateError(true);
      setErrorMessage(error.response.data.message);
      setIsDeactivateStart(false);
    }
  };
  const handleDeletAccount = async () => {};

  return (
    <div className="card mt-4" id="delete">
      <div className="card-body">
        <div className="d-flex align-items-center mb-sm-0 mb-4">
          <div className="w-50">
            <h5>Delete Account</h5>
            <p className="text-sm mb-0">
              Once you delete your account, there is no going back. Please be
              certain.
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
      <div
        className="modal fade deactivate text-light"
        id="handleDeactivateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " data-bs-theme="dark">
          <div className="modal-content bg-dark">
            <div className="modal-header bg-dark">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Deactivate
              </h1>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <h2 className="p-2">Are you sure ?</h2>
              <h5>Do you want to deactivate your account</h5>
              <p className="text-sm mb-0 p-2">
                Once you deactivate your account, you have to verify your email
                again. Please be certain.
              </p>
            </div>
            {/* <!-- Modal footer --> */}

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
                onClick={handleDeactivate}
              >
                Yes{" "}
                {isDeactivatetStart && (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
            </div>
            {/* <!-- Modal footer --> */}
            <div data-bs-theme="dark">
              {isDeactivateError && (
                <div className="alert alert-danger mt-3 " role="alert">
                  {errorMessage}
                </div>
              )}
              {isDeactivateSuccess && (
                <>
                  <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                  </div>
                  <RedirectTo
                    countDown={5}
                    pageName={"Home"}
                    redirectPage={"/"}
                  />
                </>
              )}
            </div>
            {/* <!-- Modal footer --> */}
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
        <div className="modal-dialog " data-bs-theme="dark">
          <div className="modal-content bg-dark">
            <div className="modal-header bg-dark">
              <h1 className="modal-title fs-5" id="handleDeleteModal">
                Delete Account
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <h2 className="p-2">Are you sure ?</h2>
              <h5>Do you want to delete your account</h5>
              <p className="text-sm mb-0 p-2">
                Once you delete your account, there is no going back. Please be
                certain.
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
                onClick={handleDeletAccount}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/hjbrplwk.json"
                  trigger="morph"
                  state="morph-trash-in"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAndDeactivate;
