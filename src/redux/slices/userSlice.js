import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    status: "idle",
    error: null,
    signupData: null,
    signinData: null,
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setSigninData(state, action) {
      state.signinData = action.payload;
    },
  },
});

export const {
  setUserData,
  setStatus,
  setError,
  setSignupData,
  setSigninData,
} = userSlice.actions;
export default userSlice.reducer;
