import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture } from "../redux/slices/profileSlice";
import axios from "axios";

const ProfilePicture = () => {
  const dispatch = useDispatch();
  const { profilePicture, preLoadedImages } = useSelector(
    (state) => state.profile.profileData
  );

  const defaultPicture = "https://avatar.iran.liara.run/public";

  //const [selectedPicture, setSelectedPicture] = useState(currentPicture);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch profile picture from server
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/api/profile"); // Replace with your API endpoint
        const { profilePicture } = response.data;
        dispatch(setProfilePicture(profilePicture || defaultPicture));
      } catch (error) {
        console.error("Failed to fetch profile data", error);
        // Set default picture if fetching fails
        dispatch(setProfilePicture(defaultPicture));
      }
    };

    fetchProfileData();
  }, [dispatch]);

  const handlePictureSelect = (image) => {
    //setSelectedPicture(image);
    //onUpdatePicture(image);
    dispatch(setProfilePicture(image));
    setShowModal(false); // Close the modal after selecting a picture
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setSelectedPicture(reader.result);
        //onUpdatePicture(reader.result);
        dispatch(setProfilePicture(reader.result));
        setShowModal(false); // Close the modal after uploading a picture
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="profile-picture-section">
      <div className="mt-3">
        <img
          src={profilePicture}
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
                        profilePicture === image ? "selected" : ""
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
