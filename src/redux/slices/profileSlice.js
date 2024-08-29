import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../../utils/helper";


// Sample online avatars generated using avatar-placeholder
const preLoadedImages = [
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
  `https://avatar.iran.liara.run/public/${getRandomId()}`,
];
const initialProfile = {
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "123-456-7890",
  gender: "male",
  profilePicture: "",
  dateOfBirth: "1990-01-01",
  address: "123 Main St, Anytown, USA",
  userId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  user: {
    username: "johndoe",
    email: "johndoe@example.com",
    password: "securepassword123",
    role: "user",
    isActive: true,
    isVerified: false,
  },
  preLoadedImages,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    status: "idle",
    error: null,
    preLoadedImages: preLoadedImages,
  },
  reducers: {
    setProfileData(state, action) {
      state.profileData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setProfilePicture(state, action) {
      state.profileData.profilePicture = action.payload;
    },
    setPreLoadedImages(state, action) {
      state.profileData.preLoadedImages = action.payload;
    },
  },
});

export const {
  setProfileData,
  setStatus,
  setError,
  setProfilePicture,
  setPreLoadedImages,
} = profileSlice.actions;
export default profileSlice.reducer;
