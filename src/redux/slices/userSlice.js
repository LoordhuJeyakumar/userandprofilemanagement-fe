import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    status: "idle",
    error: null,
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
  },
});

export const { setUserData, setStatus, setError } = userSlice.actions;
export default userSlice.reducer;
