import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileData,
  setProfilePicture,
} from "../redux/slices/profileSlice";
import axios from "axios";
import { getProfileDetails } from "../services/profileService";
import { baseURL } from "../services/instance";

const ProfilePicture = () => {
  const dispatch = useDispatch();
  const { profileData, preLoadedImages } = useSelector(
    (state) => state.profile
  );

  let profilePicture = profileData?.profilePicture;

  const [selectedPicture, setSelectedPicture] = useState(profilePicture);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultPicture = "https://avatar.iran.liara.run/public";

  //const [selectedPicture, setSelectedPicture] = useState(currentPicture);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, [dispatch]);

  // Fetch profile picture from server
  async function fetchProfileData() {
    try {
      const response = await getProfileDetails();
      const { profilePicture } = response.data.data.profile;

      dispatch(setProfileData(response.data.data.profile));
      dispatch(setProfilePicture(profilePicture));
      setSelectedPicture(profilePicture);
    } catch (error) {
      console.error("Failed to fetch profile data", error);
      // Set default picture if fetching fails
      dispatch(setProfilePicture(defaultPicture));
      setSelectedPicture(defaultPicture);
    }
  }

  const handlePictureSelect = (image) => {
    setSelectedPicture(image);
    setUploadedFile(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setSelectedPicture(null);

    /* //Profile Picture update API URL
    const API_ENDPOINT = `${baseURL}profile/updateProfilePicture`;

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("profilePicture", file);
    axios
      .put(API_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Picture updated successfully", response.data);
        dispatch(setProfilePicture(response.data.data.profilePicture));
        setShowModal(false); // Close the modal after uploading a picture
      })
      .catch((error) => {
        console.error("Error updating picture", error);
      }); */
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = async () => {
    setIsSubmitted(true);
    try {
      if (uploadedFile) {
        const formData = new FormData();
        formData.append("profilePicture", uploadedFile);
        const response = await axios.put(
          `${baseURL}profile/updateProfilePicture`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Profile picture updated successfully", response.data);
        dispatch(setProfilePicture(response.data.profilePicture));
        setShowModal(false);
        setSelectedPicture(response.data.profilePicture);
        setUploadedFile(null);
        fetchProfileData();
        setIsSubmitted(false);
      } else if (selectedPicture) {
        const response = await axios.put(
          `${baseURL}profile/updateProfilePicture`,
          { profilePicture: selectedPicture },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Profile picture updated successfully", response);
        dispatch(setProfilePicture(response.data.profilePicture));
        setShowModal(false);
        setSelectedPicture(response.data.profilePicture);
        setUploadedFile(null);
        fetchProfileData();
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error updating profile picture", error);
      setIsSubmitted(false);
    }

    /*  try {
      const API_ENDPOINT = `${baseURL}profile/updateProfilePicture`;
      const response = await axios.put(API_ENDPOINT, {
        profilePicture: profilePicture,
      });
      console.log("Profile picture updated successfully", response.data);
      setShowModal(false); // Close the modal after saving changes
    } catch (error) {
      console.error("Error updating profile picture", error);
    } */
  };

  return (
    <div className="profile-picture-section">
      <div className="mt-3">
        <img
          src={profilePicture || defaultPicture}
          alt="Profile Picture"
          className="img-fluid rounded-circle"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleShowModal}>
          Change Picture
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={showModal ? "modal fade show" : "modal fade"}
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select a Profile Picture</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="pre-loaded-images mb-3">
                  {preLoadedImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Avatar ${index + 1}`}
                      className={`img-thumbnail ${
                        selectedPicture === image ? "selected" : ""
                      }`}
                      style={{
                        width: "75px",
                        height: "75px",
                        cursor: "pointer",
                        margin: "5px",
                      }}
                      onClick={() => handlePictureSelect(image)}
                    />
                  ))}
                </div>
                <h5>Or Upload Your Own Picture</h5>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save Changes <i className="bi bi-check2"></i>
                  {isSubmitted && (
                    <span className="spinner-border spinner-border-sm ms-2"></span>
                  )}
                </button>
                {/* Close button */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
